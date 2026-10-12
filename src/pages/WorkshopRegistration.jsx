import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useWorkshops } from "../cms/useWorkshops";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8787";

function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function WorkshopRegistration() {
  const { slug } = useParams();
  const { workshops, loading, error } = useWorkshops();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("idle");

  const workshop = workshops.find(
    (item) => item.slug === slug
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function checkRegistrationStatus(registrationId) {
    const maxAttempts = 10;
    const delay = 2000;

    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
      const response = await fetch(
        `${API_BASE_URL}/api/registration-status?id=${encodeURIComponent(
          registrationId
        )}`
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Unable to confirm registration."
        );
      }

      if (data.registration.status === "REGISTERED") {
        setRegistrationStatus("success");
        return;
      }

      if (data.registration.status === "SYSTEM_ERROR") {
        throw new Error(
          "We could not complete your registration. Please contact us."
        );
      }

      await new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    }

    throw new Error(
      "Your payment was received, but registration confirmation is taking longer than expected. Please contact us if you do not receive confirmation."
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitError("");
    setRegistrationStatus("idle");
    setSubmitting(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            workshopSlug: slug,
            attendeeName: form.name,
            attendeeEmail: form.email,
            attendeePhone: form.phone,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Unable to start registration."
        );
      }

      console.log("Registration created:", data);

      const options = {
        key: data.payment.keyId,
        amount: data.payment.amount,
        currency: data.payment.currency,
        name: "Empowering Minds",
        description: data.workshop.name,
        order_id: data.payment.orderId,

        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },

        handler: async function (paymentResponse) {
          console.log(
            "Razorpay payment response:",
            paymentResponse
          );

          setRegistrationStatus("confirming");

          try {
            await checkRegistrationStatus(
              data.registration.id
            );
          } catch (error) {
            console.error(
              "Registration confirmation failed:",
              error
            );

            setSubmitError(
              error.message ||
                "Payment was received, but we could not confirm your registration."
            );

            setRegistrationStatus("error");
          }
        },

        modal: {
          ondismiss: function () {
            console.log("Razorpay Checkout closed.");
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.error("Registration failed:", error);

      setSubmitError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[var(--color-background)] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[var(--color-text-secondary)]">
            Loading workshop...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[var(--color-background)] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-red-700">
            Unable to load workshop details.
          </p>
        </div>
      </main>
    );
  }

  if (!workshop) {
    return (
      <main className="min-h-screen bg-[var(--color-background)] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl">
            Workshop not found
          </h1>

          <Link
            to="/workshops"
            className="mt-6 inline-flex items-center rounded-full border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-white"
          >
            Back to workshops
          </Link>
        </div>
      </main>
    );
  }

  if (registrationStatus === "success") {
    return (
      <main className="min-h-screen bg-[var(--color-background)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <section className="rounded-3xl border border-[var(--color-border)] bg-white p-8 shadow-[0_20px_60px_rgba(35,66,78,0.08)] sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-secondary)]">
              Registration confirmed
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-[var(--color-primary)] sm:text-5xl">
              Registration successful
            </h1>

            <p className="mt-6 text-base leading-7 text-[var(--color-text-secondary)]">
              Your payment has been received and your
              registration for {workshop.name} is confirmed.
            </p>

            <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
              We’ll send the workshop information and Zoom
              link to the email address you provided.
            </p>

            <Link
              to="/workshops"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[var(--color-secondary)]"
            >
              Back to workshops
            </Link>
          </section>
        </div>
      </main>
    );
  }

  if (registrationStatus === "confirming") {
    return (
      <main className="min-h-screen bg-[var(--color-background)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <section className="rounded-3xl border border-[var(--color-border)] bg-white p-8 shadow-[0_20px_60px_rgba(35,66,78,0.08)] sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-secondary)]">
              Payment received
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-[var(--color-primary)] sm:text-5xl">
              Confirming your registration...
            </h1>

            <p className="mt-6 text-base leading-7 text-[var(--color-text-secondary)]">
              Your payment was successful. We’re confirming
              your registration now.
            </p>

            <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">
              Please keep this page open for a moment.
            </p>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-background)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
        <section className="relative overflow-hidden rounded-3xl bg-[var(--color-surface-warm)] p-6 sm:p-9 lg:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[var(--color-secondary)]/10" />
          <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)] sm:text-sm">
            {workshop.hero.eyebrow || "Workshop registration"}
          </p>

          <h1 className="mt-5 font-[var(--font-display)] text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[var(--color-secondary)] sm:text-5xl lg:text-6xl">
            {workshop.hero.title || workshop.name}
          </h1>

          {workshop.hero.description && (
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
              {workshop.hero.description}
            </p>
          )}

          <div className="mt-8 space-y-6 border-t border-[var(--color-border)] pt-7">
            {workshop.schedule.sessions?.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-[var(--color-primary)]">
                  Schedule
                </p>

                <div className="mt-2 space-y-2 text-sm text-[var(--color-text-secondary)]">
                  {workshop.schedule.sessions.map(
                    (session, index) => (
                      <div key={session._key || index}>
                        {session.date
                          ? formatDate(session.date)
                          : session.title ||
                            `Session ${index + 1}`}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {workshop.schedule.timezone && (
              <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                Timezone: {workshop.schedule.timezone}
              </p>
            )}

            {workshop.pricing.regularPrice != null && (
              <div>
                <p className="text-sm font-semibold text-[var(--color-primary)]">
                  Workshop fee
                </p>

                <p className="mt-1 text-2xl font-semibold">
                  {workshop.pricing.currency}{" "}
                  {workshop.pricing.regularPrice}
                </p>
              </div>
            )}
          </div>
          </div>
        </section>

        <section className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_24px_70px_rgba(35,66,78,0.09)] sm:p-8 lg:p-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-secondary)]">
              Your details
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
              Register for this workshop
            </h2>

            <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
              Enter your details to continue to payment.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
              >
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                maxLength={150}
                autoComplete="name"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3.5 text-[var(--color-primary)] outline-none transition placeholder:text-[var(--color-text-secondary)]/60 focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/15"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                maxLength={254}
                autoComplete="email"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3.5 text-[var(--color-primary)] outline-none transition placeholder:text-[var(--color-text-secondary)]/60 focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/15"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
              >
                Phone number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                maxLength={30}
                autoComplete="tel"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3.5 text-[var(--color-primary)] outline-none transition placeholder:text-[var(--color-text-secondary)]/60 focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/15"
              />
            </div>

            {submitError && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-[var(--color-primary)] px-6 py-4 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-[var(--color-secondary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting
                ? "Starting registration..."
                : "Continue to payment"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
