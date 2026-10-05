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

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitError("");
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

        handler: function (paymentResponse) {
            console.log("Razorpay payment response:", paymentResponse);
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
      <main className="min-h-screen px-4 py-24">
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
      <main className="min-h-screen px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-red-600">
            Unable to load workshop details.
          </p>
        </div>
      </main>
    );
  }

  if (!workshop) {
    return (
      <main className="min-h-screen px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold">
            Workshop not found
          </h1>

          <Link
            to="/workshops"
            className="mt-6 inline-block underline"
          >
            Back to workshops
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-background)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
        <section>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">
            {workshop.hero.eyebrow || "Workshop registration"}
          </p>

          <h1 className="mt-4 font-[var(--font-display)] text-4xl leading-tight sm:text-5xl">
            {workshop.hero.title || workshop.name}
          </h1>

          {workshop.hero.description && (
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-text-secondary)]">
              {workshop.hero.description}
            </p>
          )}

          <div className="mt-8 space-y-4 border-t border-black/10 pt-6">
            {workshop.schedule.sessions?.length > 0 && (
              <div>
                <p className="text-sm font-medium">
                  Schedule
                </p>

                <div className="mt-2 space-y-2 text-sm text-[var(--color-text-secondary)]">
                  {workshop.schedule.sessions.map(
                    (session, index) => (
                      <div key={session._key || index}>
                        {session.date
                          ? formatDate(session.date)
                          : session.title || `Session ${index + 1}`}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {workshop.schedule.timezone && (
              <p className="text-sm text-[var(--color-text-secondary)]">
                Timezone: {workshop.schedule.timezone}
              </p>
            )}

            {workshop.pricing.regularPrice != null && (
              <div>
                <p className="text-sm font-medium">
                  Workshop fee
                </p>

                <p className="mt-1 text-2xl font-semibold">
                  {workshop.pricing.currency}{" "}
                  {workshop.pricing.regularPrice}
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
              Your details
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Register for this workshop
            </h2>

            <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
              Enter your details to continue to payment.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium"
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
                className="mt-2 w-full rounded-lg border border-black/15 bg-transparent px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium"
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
                className="mt-2 w-full rounded-lg border border-black/15 bg-transparent px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium"
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
                className="mt-2 w-full rounded-lg border border-black/15 bg-transparent px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            {submitError && (
              <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-[var(--color-text-primary)] px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
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