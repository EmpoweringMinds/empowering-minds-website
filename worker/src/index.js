const ALLOWED_ORIGINS = new Set([
  "http://localhost:5173",
  "https://www.theempoweringminds.com",
]);

function getCorsHeaders(request) {
  const origin = request.headers.get("Origin");

  if (!origin || !ALLOWED_ORIGINS.has(origin)) {
    return {};
  }

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

async function getWorkshopBySlug(slug, env) {
  const query = `*[
    _type == "workshop" &&
    slug.current == $slug
  ][0] {
    _id,
    "slug": slug.current,
    name,
    eyebrow,
    description,
    format,
    pricing {
      currency,
      regularPrice,
      earlyBird
    },
    registration {
      opensAt,
      closesAt
    },
    schedule
  }`;

  const sanityUrl = new URL(
    `https://${env.SANITY_PROJECT_ID}.api.sanity.io/v2025-02-19/data/query/${env.SANITY_DATASET}`
  );

  sanityUrl.searchParams.set("query", query);
  sanityUrl.searchParams.set("$slug", JSON.stringify(slug));

  const response = await fetch(sanityUrl);

  if (!response.ok) {
    throw new Error("Sanity request failed");
  }

  const data = await response.json();
  return data.result;
}


async function calculateWorkshopPrice(workshop, env) {
  const currency = workshop.pricing?.currency;
  const regularPrice = Number(workshop.pricing?.regularPrice);

  if (
    !currency ||
    !Number.isFinite(regularPrice) ||
    regularPrice <= 0
  ) {
    throw new Error("Invalid workshop pricing configuration");
  }

  const earlyBird = workshop.pricing?.earlyBird;
  let earlyBirdApplied = false;
  let verifiedEarlyBirdPayments = 0;
  let price = regularPrice;

  if (
    earlyBird?.enabled === true &&
    Number.isFinite(Number(earlyBird.price)) &&
    Number(earlyBird.price) > 0 &&
    Number.isFinite(Number(earlyBird.maximumRegistrations)) &&
    Number(earlyBird.maximumRegistrations) > 0
  ) {
    const now = Date.now();
    const validFrom = Date.parse(earlyBird.validFrom);
    const validUntil = Date.parse(earlyBird.validUntil);

    const withinOfferPeriod =
      Number.isFinite(validFrom) &&
      Number.isFinite(validUntil) &&
      now >= validFrom &&
      now <= validUntil;

    if (withinOfferPeriod) {
      const result = await env.DB
        .prepare(`
          SELECT COUNT(DISTINCT r.id) AS total
          FROM registrations r
          INNER JOIN payments p
            ON p.registration_id = r.id
          WHERE r.workshop_id = ?
            AND p.status = 'CAPTURED'
        `)
        .bind(workshop._id)
        .first();

      verifiedEarlyBirdPayments = Number(result?.total ?? 0);

      if (
        verifiedEarlyBirdPayments <
        Number(earlyBird.maximumRegistrations)
      ) {
        price = Number(earlyBird.price);
        earlyBirdApplied = true;
      }
    }
  }

  return {
    currency,
    price,
    amountPaise: Math.round(price * 100),
    earlyBirdApplied,
    verifiedEarlyBirdPayments,
  };
}


async function createRazorpayOrder({
  amount,
  currency,
  receipt,
  registrationId,
  paymentId,
  workshopId,
  env,
}) {
  const auth = btoa(
    `${env.RAZORPAY_KEY_ID}:${env.RAZORPAY_KEY_SECRET}`
  );

  const response = await fetch(
    "https://api.razorpay.com/v1/orders",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt,
        notes: {
          registrationId,
          paymentId,
          workshopId,
        },
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `Razorpay order creation failed: ${data.error?.code ?? response.status}`
    );
  }

  return data;
}

async function verifyRazorpayWebhookSignature(
  rawBody,
  signature,
  secret
) {
  const encoder = new TextEncoder();

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    {
      name: "HMAC",
      hash: "SHA-256",
    },
    false,
    ["verify"]
  );

  const signatureBytes = new Uint8Array(
    signature.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
  );

  return crypto.subtle.verify(
    "HMAC",
    key,
    signatureBytes,
    encoder.encode(rawBody)
  );
}


export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const corsHeaders = getCorsHeaders(request);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    if (
      request.method === "GET" &&
      url.pathname === "/api/health"
    ) {
        try {
            const result = await env.DB
            .prepare("SELECT 1 AS connected")
            .first();

            return Response.json({
            success: true,
            message: "Empowering Minds API is running",
            database: result?.connected === 1
                ? "connected"
                : "unavailable",
            });
        } catch (error) {
            return Response.json(
            {
                success: false,
                message: "Database connection failed",
            },
            { status: 503 }
            );
        }
    }

    if (
      request.method === "GET" &&
      url.pathname === "/api/sanity-health"
    ) {
      const query = '*[_type == "workshop"][0]{_id}';

      const sanityUrl = new URL(
        `https://${env.SANITY_PROJECT_ID}.api.sanity.io/v2025-02-19/data/query/${env.SANITY_DATASET}`
      );

      sanityUrl.searchParams.set("query", query);

      try {
        const response = await fetch(sanityUrl);

        if (!response.ok) {
          return Response.json(
            { success: false, message: "Sanity request failed" },
            { status: 502 }
          );
        }

        const data = await response.json();

        return Response.json({
          success: true,
          sanity: "connected",
          workshopFound: Boolean(data.result),
        });
      } catch {
        return Response.json(
          { success: false, message: "Could not reach Sanity" },
          { status: 502 }
        );
      }
    }

    if (
    request.method === "GET" &&
    url.pathname === "/api/workshop-registration"
    ) {
    const slug = url.searchParams.get("slug");

    if (!slug) {
        return Response.json(
        { success: false, error: "Workshop slug is required" },
        { status: 400 }
        );
    }

    try {
        const workshop = await getWorkshopBySlug(slug, env);

        if (!workshop) {
        return Response.json(
            { success: false, error: "Workshop not found" },
            { status: 404 }
        );
        }

        const opensAt = Date.parse(workshop.registration?.opensAt);
        const closesAt = Date.parse(workshop.registration?.closesAt);
        const now = Date.now();

        let registrationState = "not_configured";

        if (Number.isFinite(opensAt) && Number.isFinite(closesAt)) {
        if (now < opensAt) {
            registrationState = "not_yet_open";
        } else if (now > closesAt) {
            registrationState = "closed";
        } else {
            registrationState = "open";
        }
        }

        return Response.json({
        success: true,
        workshop: {
            id: workshop._id,
            slug: workshop.slug,
            name: workshop.name,
            eyebrow: workshop.eyebrow,
            description: workshop.description,
            format: workshop.format,
            pricing: workshop.pricing,
            schedule: workshop.schedule,
        },
        registration: {
            opensAt: workshop.registration?.opensAt ?? null,
            closesAt: workshop.registration?.closesAt ?? null,
            state: registrationState,
            isOpen: registrationState === "open",
        },
        });
    } catch (error) {
        return Response.json(
        { success: false, error: "Unable to fetch workshop" },
        { status: 502 }
        );
    }
    }


    if (
    request.method === "GET" &&
    url.pathname === "/api/workshop-price"
    ) {
    const slug = url.searchParams.get("slug");

    if (!slug) {
        return Response.json(
        { success: false, error: "Workshop slug is required" },
        { status: 400 }
        );
    }

    try {
        const workshop = await getWorkshopBySlug(slug, env);

        if (!workshop) {
        return Response.json(
            { success: false, error: "Workshop not found" },
            { status: 404 }
        );
        }

        const pricing = await calculateWorkshopPrice(workshop, env);

        return Response.json({
        success: true,
        workshop: {
            id: workshop._id,
            slug: workshop.slug,
            name: workshop.name,
        },
        pricing: {
            currency: pricing.currency,
            price: pricing.price,
            amountPaise: pricing.amountPaise,
            earlyBirdApplied: pricing.earlyBirdApplied,
            verifiedEarlyBirdPayments:
            pricing.verifiedEarlyBirdPayments,
        },
        });
    } catch (error) {
        return Response.json(
        {
            success: false,
            error: "Unable to calculate workshop price",
        },
        { status: 500 }
        );
    }
    }

    if (
    request.method === "GET" &&
    url.pathname === "/api/razorpay-config"
    ) {
    return Response.json({
        success: true,
        razorpayConfigured: Boolean(
        env.RAZORPAY_KEY_ID && env.RAZORPAY_KEY_SECRET
        ),
        testMode: env.RAZORPAY_KEY_ID?.startsWith("rzp_test_") ?? false,
    });
    }

if (
  request.method === "POST" &&
  url.pathname === "/api/webhooks/razorpay"
) {
  try {
    const signature =
      request.headers.get("X-Razorpay-Signature");

    if (!signature) {
      return Response.json(
        {
          success: false,
          error: "Missing Razorpay signature",
        },
        { status: 400 }
      );
    }

    if (!env.RAZORPAY_WEBHOOK_SECRET) {
      console.error(
        "RAZORPAY_WEBHOOK_SECRET is not configured"
      );

      return Response.json(
        {
          success: false,
          error: "Webhook secret not configured",
        },
        { status: 500 }
      );
    }

    // IMPORTANT:
    // Read the raw body before parsing JSON.
    const rawBody = await request.text();

    const validSignature =
      await verifyRazorpayWebhookSignature(
        rawBody,
        signature,
        env.RAZORPAY_WEBHOOK_SECRET
      );

    if (!validSignature) {
      return Response.json(
        {
          success: false,
          error: "Invalid webhook signature",
        },
        { status: 401 }
      );
    }

    // Signature is valid.
    // Now parse and process the Razorpay event.
    const event = JSON.parse(rawBody);

    if (
      event.event === "payment.captured" ||
      event.event === "payment.failed"
    ) {
      const paymentEntity = event.payload?.payment?.entity;

      if (!paymentEntity) {
        console.error(
          `Razorpay ${event.event} event is missing payment entity`
        );

        return Response.json(
          {
            success: false,
            error: `Invalid ${event.event} payload`,
          },
          { status: 400 }
        );
      }

      const razorpayPaymentId = paymentEntity.id;
      const razorpayOrderId = paymentEntity.order_id;

      if (!razorpayPaymentId || !razorpayOrderId) {
        console.error(
          `Razorpay ${event.event} event is missing payment or order ID`
        );

        return Response.json(
          {
            success: false,
            error: "Missing Razorpay payment or order ID",
          },
          { status: 400 }
        );
      }

      // Find our payment attempt using the Razorpay order ID.
      const payment = await env.DB
        .prepare(`
          SELECT
            id,
            registration_id,
            status
          FROM payments
          WHERE provider = 'razorpay'
            AND provider_order_id = ?
          LIMIT 1
        `)
        .bind(razorpayOrderId)
        .first();

      if (!payment) {
        console.error(
          "No local payment found for Razorpay order:",
          razorpayOrderId
        );

        return Response.json(
          {
            success: false,
            error: "Payment record not found",
          },
          { status: 404 }
        );
      }

      // -------------------------
      // PAYMENT CAPTURED
      // -------------------------
      if (event.event === "payment.captured") {

        // Idempotency:
        // Razorpay may retry the same webhook.
        if (payment.status === "CAPTURED") {
          return Response.json({
            success: true,
            message: "Payment already processed",
          });
        }

        await env.DB
          .prepare(`
            UPDATE payments
            SET
              provider_payment_id = ?,
              status = 'CAPTURED',
              updated_at = datetime('now')
            WHERE id = ?
          `)
          .bind(
            razorpayPaymentId,
            payment.id
          )
          .run();

        await env.DB
          .prepare(`
            UPDATE registrations
            SET
              status = 'REGISTERED',
              updated_at = datetime('now')
            WHERE id = ?
              AND status = 'PENDING_PAYMENT'
          `)
          .bind(payment.registration_id)
          .run();

        return Response.json({
          success: true,
          message: "Payment captured and registration completed",
        });
      }

      // -------------------------
      // PAYMENT FAILED
      // -------------------------
      if (event.event === "payment.failed") {

        // Idempotency:
        // Don't overwrite a successfully captured payment.
        if (payment.status === "CAPTURED") {
          return Response.json({
            success: true,
            message: "Payment already captured",
          });
        }

        await env.DB
          .prepare(`
            UPDATE payments
            SET
              provider_payment_id = ?,
              status = 'FAILED',
              updated_at = datetime('now')
            WHERE id = ?
          `)
          .bind(
            razorpayPaymentId,
            payment.id
          )
          .run();

        // IMPORTANT:
        // Do NOT cancel the registration here.
        //
        // The registration remains PENDING_PAYMENT so the attendee
        // can make another payment attempt.

        return Response.json({
          success: true,
          message: "Payment failure recorded",
        });
      }
    }

    // Other Razorpay events are currently acknowledged
    // but not processed.
    return Response.json({
      success: true,
      message: "Webhook received",
    });

  } catch (error) {
    console.error(
      "Razorpay webhook processing failed:",
      error
    );

    return Response.json(
      {
        success: false,
        error: "Webhook processing failed",
      },
      { status: 500 }
    );
  }
}

    if (
    request.method === "POST" &&
    url.pathname === "/api/register"
    ) {
    try {
        
        let body = await request.json();

        const workshopSlug =
        typeof body.workshopSlug === "string"
            ? body.workshopSlug.trim()
            : "";

        const attendeeName =
        typeof body.attendeeName === "string"
            ? body.attendeeName.trim()
            : "";

        const attendeeEmail =
        typeof body.attendeeEmail === "string"
            ? body.attendeeEmail.trim().toLowerCase()
            : "";

        const attendeePhone =
        typeof body.attendeePhone === "string"
            ? body.attendeePhone.trim()
            : null;

        if (
        !workshopSlug ||
        !attendeeName ||
        !attendeeEmail ||
        attendeeName.length > 150 ||
        attendeeEmail.length > 254 ||
        (attendeePhone && attendeePhone.length > 30) ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(attendeeEmail)
        ) {
        return Response.json(
            { success: false, error: "Invalid registration details" },
            { status: 400 }
        );
        }

        if (
        !env.RAZORPAY_KEY_ID ||
        !env.RAZORPAY_KEY_SECRET
        ) {
        return Response.json(
            { success: false, error: "Payment provider is not configured" },
            { status: 500 }
        );
        }

        // 1. Fetch the workshop from Sanity
        const workshop = await getWorkshopBySlug(
        workshopSlug,
        env
        );

        if (!workshop) {
        return Response.json(
            { success: false, error: "Workshop not found" },
            { status: 404 }
        );
        }

        // 2. Validate registration dates
        const opensAt = Date.parse(
          workshop.registration?.opensAt
        );

        const closesAt = Date.parse(
          workshop.registration?.closesAt
        );

        const now = Date.now();

        const registrationConfigured =
          Number.isFinite(opensAt) &&
          Number.isFinite(closesAt) &&
          opensAt <= closesAt;

        if (!registrationConfigured) {
          console.error(
            "Invalid registration window configuration:",
            workshop._id
          );

          return Response.json(
            {
              success: false,
              error: "Registration is not configured correctly",
            },
            { status: 500 }
          );
        }

        const registrationNotYetOpen = now < opensAt;
        const registrationClosed = now > closesAt;

        // 3. Calculate price on the server
        const pricing = await calculateWorkshopPrice(
          workshop,
          env
        );

        // 4. Find an existing active registration for this workshop + attendee
        let registration = await env.DB
          .prepare(`
            SELECT
              id,
              status
            FROM registrations
            WHERE workshop_id = ?
              AND attendee_email = ?
              AND status != 'CANCELLED'
            LIMIT 1
          `)
          .bind(
            workshop._id,
            attendeeEmail
          )
          .first();

          // Registration has not opened yet.
          if (registrationNotYetOpen) {
            return Response.json(
              {
                success: false,
                error: "Registration is not open yet",
              },
              { status: 409 }
            );
          }

          // Registration has closed.
          // Any unfinished PENDING_PAYMENT registration is no longer valid.
          if (registrationClosed) {
            if (registration?.status === "PENDING_PAYMENT") {
              await env.DB
                .prepare(`
                  UPDATE registrations
                  SET
                    status = 'CANCELLED',
                    updated_at = datetime('now')
                  WHERE id = ?
                    AND status = 'PENDING_PAYMENT'
                `)
                .bind(registration.id)
                .run();
            }

            return Response.json(
              {
                success: false,
                error: "Registration is closed",
              },
              { status: 409 }
            );
          }

        // Registration is still open.
        // A successful registration cannot register again.
        if (registration?.status === "REGISTERED") {
          return Response.json(
            {
              success: false,
              error: "You are already registered for this workshop",
            },
            { status: 409 }
          );
        }

        // 5. Create a registration only if one does not already exist.
        let registrationId;
        let isNewRegistration = false;

        if (registration) {
          // Existing PENDING_PAYMENT registration.
          // Reuse it and create another payment attempt.
          registrationId = registration.id;
        } else {
          // No active registration exists.
          // Create a new registration.
          registrationId = crypto.randomUUID();
          isNewRegistration = true;

          await env.DB
            .prepare(`
              INSERT INTO registrations (
                id,
                workshop_id,
                attendee_name,
                attendee_email,
                attendee_phone,
                status,
                amount,
                currency
              )
              VALUES (?, ?, ?, ?, ?, 'PENDING_PAYMENT', ?, ?)
            `)
            .bind(
              registrationId,
              workshop._id,
              attendeeName,
              attendeeEmail,
              attendeePhone,
              pricing.amountPaise,
              pricing.currency
            )
            .run();
        }

        // 6. Create a payment attempt.
        //
        // One registration can have multiple payment attempts.
        // Each attempt gets its own payment ID.
        const paymentId = crypto.randomUUID();

        try {
          await env.DB
            .prepare(`
              INSERT INTO payments (
                id,
                registration_id,
                provider,
                status,
                amount,
                currency
              )
              VALUES (?, ?, 'razorpay', 'CREATED', ?, ?)
            `)
            .bind(
              paymentId,
              registrationId,
              pricing.amountPaise,
              pricing.currency
            )
            .run();
        } catch (error) {
          // If this was a brand-new registration, we can safely cancel it.
          //
          // If this was an existing PENDING_PAYMENT registration,
          // leave it pending so the attendee can try again.
          if (isNewRegistration) {
            await env.DB
              .prepare(`
                UPDATE registrations
                SET status = 'SYSTEM_ERROR',
                    updated_at = datetime('now')
                WHERE id = ?
              `)
              .bind(registrationId)
              .run();
          }

          throw error;
        }

        // 7. Create the Razorpay order.
        let order;

        try {
          order = await createRazorpayOrder({
            amount: pricing.amountPaise,
            currency: pricing.currency,

            // Each payment attempt gets its own Razorpay receipt.
            receipt: `pay_${paymentId}`,

            registrationId,
            paymentId,
            workshopId: workshop._id,
            env,
          });
        } catch (error) {
          // Record that this payment attempt failed.
          await env.DB
            .prepare(`
              UPDATE payments
              SET status = 'FAILED',
                  updated_at = datetime('now')
              WHERE id = ?
            `)
            .bind(paymentId)
            .run();

          // Only cancel the registration if this was a brand-new one.
          //
          // Existing PENDING_PAYMENT registrations remain reusable.
          if (isNewRegistration) {
            await env.DB
              .prepare(`
                UPDATE registrations
                SET status = 'SYSTEM_ERROR',
                    updated_at = datetime('now')
                WHERE id = ?
              `)
              .bind(registrationId)
              .run();
          }

          throw error;
        }

        // 8. Save the Razorpay order ID against this payment attempt.
        try {
          await env.DB
            .prepare(`
              UPDATE payments
              SET provider_order_id = ?,
                  updated_at = datetime('now')
              WHERE id = ?
            `)
            .bind(
              order.id,
              paymentId
            )
            .run();
        } catch (error) {
          // The Razorpay order exists, but we failed to persist its ID.
          // Do not return an unusable checkout order to the frontend.
          await env.DB
            .prepare(`
              UPDATE payments
              SET status = 'FAILED',
                  updated_at = datetime('now')
              WHERE id = ?
            `)
            .bind(paymentId)
            .run();

          if (isNewRegistration) {
            await env.DB
              .prepare(`
                UPDATE registrations
                SET status = 'SYSTEM_ERROR',
                    updated_at = datetime('now')
                WHERE id = ?
              `)
              .bind(registrationId)
              .run();
          }

          throw error;
        }

        // 9. Return only the details needed for checkout
        return Response.json(
        {
            success: true,
            registration: {
            id: registrationId,
            status: "PENDING_PAYMENT",
            },
            payment: {
            provider: "razorpay",
            orderId: order.id,
            amount: pricing.amountPaise,
            currency: pricing.currency,
            keyId: env.RAZORPAY_KEY_ID,
            },
            workshop: {
            id: workshop._id,
            name: workshop.name,
            slug: workshop.slug,
            },
        },
        { status: 201, headers: corsHeaders, }
        );
    } catch (error) {
        console.error("Registration creation failed:", error);
        return Response.json(
        {
            success: false,
            error: "Unable to create registration",
        },
        { status: 500 }
        );
    }
    }

    return Response.json(
      {
        success: false,
        error: "Route not found",
      },
      {
        status: 404,
      }
    );
  },
};