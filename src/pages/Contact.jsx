import { Mail, MapPin, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { serviceGroups, contactDetails, faqs } from "../data/siteContent";
import CTASection from "../components/ui/CTASection";
import FadeIn from "../components/ui/FadeIn";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";

export default function Contact() {
  const [serviceGroupId, setServiceGroupId] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [intent, setIntent] = useState("");

  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const selectedGroup = useMemo(
    () => serviceGroups.find((group) => group.id === serviceGroupId),
    [serviceGroupId]
  );

  const availableServices = useMemo(
    () => selectedGroup?.areas ?? [],
    [selectedGroup]
  );

  const selectedService = useMemo(
    () =>
      availableServices.find((service) => service.id === serviceId),
    [availableServices, serviceId]
  );

  const handleServiceGroupChange = (event) => {
  const value = event.target.value;

  setServiceGroupId(value);
  setServiceId("");
  setSuccess("");
  setError("");
};

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    if (!serviceGroupId) {
      setError("Please select a service group.");
      return;
    }

    if (!serviceId) {
      setError("Please select a program.");
      return;
    }

    if (!intent) {
      setError("Please tell us how you'd like to proceed.");
      return;
    }

    setLoading(true);

    const leadData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      organization: organization.trim(),
      message: message.trim(),
      serviceGroup: selectedGroup?.title ?? "",
      serviceId,
      serviceTitle: selectedService?.title ?? "",
      intent,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8787"}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(leadData),
        }
      );

      const data = await response.json();

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.error ||
            "We couldn't submit your request. Please try again."
        );
      }

      setSuccess(
        intent === "demo"
          ? "Your demo request has been received. We'll be in touch shortly."
          : "Your callback request has been received. We'll be in touch shortly."
      );

      // Reset form after successful submission
      setName("");
      setOrganization("");
      setEmail("");
      setPhone("");
      setMessage("");
      setServiceGroupId("");
      setServiceId("");
      setIntent("");
    } catch (error) {
      console.error(error);

      setError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's find the right next step."
        description="Tell us what you're looking for and we'll help you explore the right program, book a 30-minute demo, or request a callback."
        secondaryCta={{ label: "Explore services", to: "/services" }}
        primaryCta={{ label: "Get Started", to: "#form" }}
      />

      {/* Contact details */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Get in Touch"
            title="We're here to help you take the next step."
            description="Whether you're an educational institution, corporate organisation, trainer, or individual, tell us what you're looking for."
          />

          <div className="mt-12 rounded-[36px] bg-[var(--color-primary)] px-8 py-10 text-white sm:px-10 lg:px-12">
            <div className="grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-white/15 sm:gap-0">
              {/* Phone */}
              <div className="sm:pr-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Phone size={20} />
                </div>

                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                  Call us
                </p>

                <div className="mt-3 space-y-1">
                  {contactDetails.phones.map((phoneNumber) => (
                    <a
                      key={phoneNumber}
                      href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                      className="block text-base font-semibold text-white transition hover:text-white/80"
                    >
                      {phoneNumber}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="sm:px-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Mail size={20} />
                </div>

                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                  Email us
                </p>

                <a
                  href={`mailto:${contactDetails.email}`}
                  className="mt-3 block break-words text-base font-semibold text-white transition hover:text-white/80"
                >
                  {contactDetails.email}
                </a>
              </div>

              {/* Address */}
              <div className="sm:pl-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <MapPin size={20} />
                </div>

                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                  Visit us
                </p>

                <address className="mt-3 not-italic text-base font-semibold leading-7 text-white">
                  {contactDetails.address.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion form */}
      <section
        className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-24"
        id="form"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Get Started"
              title="Let's find the right fit."
              description="Choose the area you're interested in and tell us how you'd like to take the next step."
            />

            <div className="mt-10 rounded-[32px] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <form onSubmit={handleSubmit}>
                {/* Service selection */}
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                    01 — Your area of interest
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-[var(--color-primary)]">
                    What are you interested in?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Choose the area that best describes what you're looking
                    for.
                  </p>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {/* Service group */}
                  <div>
                    <label
                      htmlFor="service-group"
                      className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                    >
                      Service group{" "}
                      <span className="text-[var(--color-secondary)]">*</span>
                    </label>

                    <select
                      id="service-group"
                      name="serviceGroup"
                      required
                      value={serviceGroupId}
                      onChange={handleServiceGroupChange}
                      disabled={loading}
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-primary)] outline-none transition focus:border-[var(--color-secondary)] disabled:bg-slate-50"
                    >
                      <option value="">Select a service group</option>

                      {serviceGroups.map((group) => (
                        <option key={group.id} value={group.id}>
                          {group.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                    >
                      Program{" "}
                      <span className="text-[var(--color-secondary)]">*</span>
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      value={serviceId}
                      onChange={(event) => {
                        setServiceId(event.target.value);
                        setSuccess("");
                        setError("");
                      }}
                      disabled={!serviceGroupId || loading}
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-primary)] outline-none transition focus:border-[var(--color-secondary)] disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    >
                      <option value="">
                        {serviceGroupId
                          ? "Select a program"
                          : "Select a service group first"}
                      </option>

                      {availableServices.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Intent */}
                <div className="mt-10 border-t border-[var(--color-border)] pt-10">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                    02 — Your next step
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-[var(--color-primary)]">
                    How would you like to proceed?
                  </h3>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <button
                      type="button"
                      disabled={loading}
                      onClick={() => {
                        setIntent("demo");
                        setSuccess("");
                        setError("");
                      }}
                      className={`rounded-2xl border px-5 py-5 text-left transition ${
                        intent === "demo"
                          ? "border-[var(--color-secondary)] bg-[var(--color-soft-accent)]"
                          : "border-[var(--color-border)] bg-white hover:border-[var(--color-secondary)]/50"
                      }`}
                    >
                      <span className="block text-base font-bold text-[var(--color-primary)]">
                        Book a 30-minute Demo
                      </span>

                      <span className="mt-2 block text-sm leading-6 text-slate-500">
                        Explore the program and discuss whether it's the right
                        fit for your needs.
                      </span>
                    </button>

                    <button
                      type="button"
                      disabled={loading}
                      onClick={() => {
                        setIntent("callback");
                        setSuccess("");
                        setError("");
                      }}
                      className={`rounded-2xl border px-5 py-5 text-left transition ${
                        intent === "callback"
                          ? "border-[var(--color-secondary)] bg-[var(--color-soft-accent)]"
                          : "border-[var(--color-border)] bg-white hover:border-[var(--color-secondary)]/50"
                      }`}
                    >
                      <span className="block text-base font-bold text-[var(--color-primary)]">
                        Request a Callback
                      </span>

                      <span className="mt-2 block text-sm leading-6 text-slate-500">
                        Leave your details and our team will get in touch to
                        understand your requirements.
                      </span>
                    </button>
                  </div>
                </div>

                {/* Contact details */}
                <div className="mt-10 border-t border-[var(--color-border)] pt-10">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                    03 — Your details
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-[var(--color-primary)]">
                    Tell us how we can reach you.
                  </h3>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                      >
                        Name{" "}
                        <span className="text-[var(--color-secondary)]">*</span>
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        disabled={loading}
                        className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)] disabled:bg-slate-50"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Organisation */}
                    <div>
                      <label
                        htmlFor="contact-organization"
                        className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                      >
                        Organisation / Institution
                      </label>

                      <input
                        id="contact-organization"
                        name="organization"
                        type="text"
                        autoComplete="organization"
                        value={organization}
                        onChange={(event) =>
                          setOrganization(event.target.value)
                        }
                        disabled={loading}
                        className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)] disabled:bg-slate-50"
                        placeholder="Optional"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                      >
                        Email{" "}
                        <span className="text-[var(--color-secondary)]">*</span>
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        disabled={loading}
                        className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)] disabled:bg-slate-50"
                        placeholder="you@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                      >
                        Phone{" "}
                        <span className="text-[var(--color-secondary)]">*</span>
                      </label>

                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        disabled={loading}
                        className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)] disabled:bg-slate-50"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-5">
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                    >
                      Anything you'd like us to know?
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      disabled={loading}
                      className="w-full resize-none rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-[var(--color-secondary)] disabled:bg-slate-50"
                      placeholder="Tell us a little about your requirements..."
                    />
                  </div>
                </div>

                {/* Selected service summary */}
                {selectedService && (
                  <div className="mt-8 rounded-2xl bg-[var(--color-background)] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                      Your selection
                    </p>

                    <p className="mt-2 font-bold text-[var(--color-primary)]">
                      {selectedService.title}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {selectedGroup?.title}
                    </p>

                    {intent && (
                      <p className="mt-3 text-sm font-semibold text-[var(--color-secondary)]">
                        {intent === "demo"
                          ? "30-minute Demo"
                          : "Callback Request"}
                      </p>
                    )}
                  </div>
                )}

                {/* Messages */}
                {success && (
                  <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold leading-6 text-green-700">
                    {success}
                  </div>
                )}

                {error && (
                  <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold leading-6 text-red-700">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-7 flex w-full items-center justify-center rounded-full bg-[var(--color-secondary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? "Processing..."
                    : intent === "demo"
                      ? "Continue to Demo Request"
                      : intent === "callback"
                        ? "Request a Callback"
                        : "Continue"}
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                  We'll use these details only to respond to your request.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[var(--color-cream)] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--color-primary)]/80">
              FAQs
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
              Common questions
            </h2>
          </FadeIn>

          <div className="mt-12 border-t border-white/15">
            {faqs.map((faq, index) => (
              <FadeIn
                key={faq.question}
                delay={index * 0.05}
                className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[80px_1fr] sm:gap-8 sm:py-9"
              >
                <span className="text-sm font-bold tracking-[0.2em] text-[var(--color-text-muted)]/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="text-lg font-bold leading-7 text-[var(--color-text-muted)] sm:text-xl">
                    {faq.question}
                  </p>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-primary)]/65 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Prefer a quick conversation first?"
        description="Reach out and we can discuss your audience, format, timelines, and desired outcomes."
        variant="soft"
        primaryLabel="Start a Conversation"
        primaryTo="https://wa.me/917908466757?text=Hello%20Empowering%20Minds%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs."
        secondaryLabel="Explore Our Programs"
        secondaryTo="/programs"
      />
    </main>
  );
}