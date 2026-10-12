import { Check, Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProgramModal({ program, onClose }) {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [intent, setIntent] = useState("");

  const resetModal = () => {
    setShowForm(false);
    setIsSubmitting(false);
    setSubmitError("");
    setSubmitted(false);
    setIntent("");
  };

  const handleClose = () => {
  if (isSubmitting) return;

  resetModal();
  onClose();
  };

  useEffect(() => {
    if (!program) {
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow =
      document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow =
        previousHtmlOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [program, onClose]);

  if (!program) {
    return null;
  }

  const {
    title,
    description,
    modules = [],
    price,
    priceLabel,
    serviceGroup,
  } = program;

  const displayPrice = priceLabel || price || "Contact us";

  const handleIntentClick = (selectedIntent) => {
    setSubmitError("");
    setSubmitted(false);
    setIntent(selectedIntent);
    setShowForm(true);
  };

  const handleBackToDetails = () => {
    if (isSubmitting) return;

    setSubmitError("");
    setIntent("");
    setShowForm(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const organisation = formData
      .get("organisation")
      ?.toString()
      .trim();
    const message = formData.get("message")?.toString().trim();



    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_BASE_URL ||
          "http://127.0.0.1:8787"
        }/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            organization: organisation,
            message,
            serviceGroup,
            serviceId: program.id,
            serviceTitle: title,
            intent,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.error ||
            "We couldn't submit your request. Please try again."
        );
      }

      setSubmitted(true);
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);

      setSubmitError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }

      };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[var(--color-primary)]/35 px-3 py-4 backdrop-blur-[3px] sm:px-4 sm:py-8"
      onClick={handleClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-[24px] bg-white shadow-2xl sm:rounded-[32px]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${title} details`}
      >
        {/* Close */}
        <button
          type="button"
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-primary)] transition hover:bg-[var(--color-background)] disabled:cursor-not-allowed disabled:opacity-50 sm:right-5 sm:top-5 sm:h-11 sm:w-11"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="hide-scrollbar max-h-[90vh] overflow-y-auto p-5 pr-4 sm:p-8 sm:pr-6">
          {/* =========================================================
              SERVICE DETAILS
          ========================================================= */}
          {!showForm && !submitted && (
            <>
              <div className="pr-12">
                {serviceGroup && (
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                    {serviceGroup.replaceAll("-", " ")}
                  </p>
                )}

                <h2 className="mt-3 text-2xl font-black tracking-tight text-[var(--color-primary)] sm:text-3xl">
                  {title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {description}
                </p>
              </div>

              {/* Investment */}
              <div className="mt-8 rounded-[24px] bg-[var(--color-background)] p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Investment
                </p>

                <p className="mt-2 text-xl font-bold text-[var(--color-primary)]">
                  {displayPrice}
                </p>
              </div>

              {/* Development Areas */}
              {modules.length > 0 && (
                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                    Development Areas
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {modules.map((module) => (
                      <div
                        key={module}
                        className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3"
                      >
                        <Check
                          size={16}
                          className="mt-1 shrink-0 text-[var(--color-secondary)]"
                        />

                        <span className="text-sm leading-6 text-slate-700">
                          {module}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => handleIntentClick("demo")}
                    className="flex w-full items-center justify-center rounded-full bg-[var(--color-secondary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Book a 30-minute Demo
                  </button>

                  <button
                    type="button"
                    onClick={() => handleIntentClick("callback")}
                    className="flex w-full items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:border-[var(--color-secondary)]"
                  >
                    Request a Callback
                  </button>
                </div>

                <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                  Choose how you'd like to take the next step.
                </p>
            </>
          )}

          {/* =========================================================
              CALLBACK FORM
          ========================================================= */}
          {showForm && !submitted && (
            <>
              <div className="pr-12">
                <button
                  type="button"
                  onClick={handleBackToDetails}
                  disabled={isSubmitting}
                  className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)] transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span aria-hidden="true">←</span>
                  Back to details
                </button>

                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                  {intent === "demo"
                    ? "30-minute Demo"
                    : "Request a Callback"}
                </p>

                <h2 className="mt-3 text-2xl font-black tracking-tight text-[var(--color-primary)] sm:text-3xl">
                  {intent === "demo"
                    ? `Explore ${title}`
                    : `Let's talk about ${title}`}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {intent === "demo"
                    ? "Share your details and we'll contact you to arrange a convenient 30-minute time to explore this program."
                    : "Share your details and a member of our team will contact you to understand your requirements."}
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                {/* Name + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="callback-name"
                      className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                    >
                      Name{" "}
                      <span className="text-[var(--color-secondary)]">
                        *
                      </span>
                    </label>

                    <input
                      id="callback-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      disabled={isSubmitting}
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)] disabled:bg-slate-50"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="callback-phone"
                      className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                    >
                      Phone{" "}
                      <span className="text-[var(--color-secondary)]">
                        *
                      </span>
                    </label>

                    <input
                      id="callback-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      disabled={isSubmitting}
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)] disabled:bg-slate-50"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="callback-email"
                    className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                  >
                    Email{" "}
                    <span className="text-[var(--color-secondary)]">
                      *
                    </span>
                  </label>

                  <input
                    id="callback-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)] disabled:bg-slate-50"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Organisation */}
                <div>
                  <label
                    htmlFor="callback-organisation"
                    className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                  >
                    Organisation / Institution
                  </label>

                  <input
                    id="callback-organisation"
                    name="organisation"
                    type="text"
                    autoComplete="organization"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)] disabled:bg-slate-50"
                    placeholder="Optional"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="callback-message"
                    className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                  >
                    Tell us a little about your requirements
                  </label>

                  <textarea
                    id="callback-message"
                    name="message"
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full resize-none rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-[var(--color-secondary)] disabled:bg-slate-50"
                    placeholder="What would you like help with?"
                  />
                </div>

                {/* Error */}
                {submitError && (
                  <div
                    role="alert"
                    className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                  >
                    {submitError}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-secondary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2
                        size={17}
                        className="animate-spin"
                      />
                      Sending Request...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  We&apos;ll use these details only to respond to
                  your request.
                </p>
              </form>
            </>
          )}

          {/* =========================================================
              SUCCESS
          ========================================================= */}
          {submitted && (
            <div className="flex min-h-[420px] flex-col items-center justify-center px-4 py-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-soft-accent)] text-[var(--color-secondary)]">
                <Check size={30} />
              </div>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                {intent === "demo" ? (
                  <>
                    Your 30-minute demo request for{" "}
                    <span className="font-semibold text-[var(--color-primary)]">
                      {title}
                    </span>{" "}
                    has been received. Our team will contact you shortly to arrange a
                    convenient time.
                  </>
                ) : (
                  <>
                    Your callback request for{" "}
                    <span className="font-semibold text-[var(--color-primary)]">
                      {title}
                    </span>{" "}
                    has been received. Our team will get in touch with you soon.
                  </>
                )}
              </p>

              <button
                type="button"
                onClick={handleClose}
                className="mt-8 rounded-full bg-[var(--color-secondary)] px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}