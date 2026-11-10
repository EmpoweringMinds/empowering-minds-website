import { Mail, MapPin, Phone } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { serviceGroups, contactDetails, faqs } from "../data/siteContent";
import CTASection from "../components/ui/CTASection";
import FadeIn from "../components/ui/FadeIn";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { useCourses } from "../cms/useCourses";

export default function Contact() {
  const [serviceGroupId, setServiceGroupId] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [intent, setIntent] = useState("");
  const [searchParams] = useSearchParams();

  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { courses, loading: coursesLoading, error: coursesError } = useCourses();

  useEffect(() => {
    const requestedType = searchParams.get("type");
    const requestedGroup = searchParams.get("group");
    const requestedService = searchParams.get("service");

    if (requestedType === "program") {
      const group = serviceGroups.find(
        (item) => item.id === requestedGroup
      );

      if (!group) return;

      const service = group.areas.find(
        (item) => item.id === requestedService
      );

      setInterestType("program");
      setCourseId("");
      setServiceGroupId(group.id);
      setServiceId(service?.id ?? "");
      setIntent("");
      
      return;
    }
    const requestedCourse = searchParams.get("course");

    if (!requestedCourse || courses.length === 0) return;

    const course = courses.find(
      (item) =>
        item.slug === requestedCourse || item.id === requestedCourse
    );

    if (!course) return;

    setInterestType("course");
    setCourseId(course.id);
    setIntent("demo");
  }, [courses, searchParams]);

  const [interestType, setInterestType] = useState("");
  const [courseId, setCourseId] = useState("");


  const selectedGroup = useMemo(
    () => serviceGroups.find((group) => group.id === serviceGroupId),
    [serviceGroupId]
  );

  const selectedCourse = useMemo(
  () => courses.find((course) => course.id === courseId),
  [courses, courseId]
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


    if (!interestType) {
      setError("Please select whether you're interested in Courses or Programs.");
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

      serviceGroup:
        interestType === "program" ? selectedGroup?.title ?? "" : "",

      serviceId:
        interestType === "course"
          ? selectedCourse?.slug ?? ""
          : interestType === "program"
            ? serviceId
            : "",

      serviceTitle:
        interestType === "course"
          ? selectedCourse?.title ?? ""
          : interestType === "program"
            ? selectedService?.title ?? ""
            : "",

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
          ? "Your discovery call request has been received. We'll be in touch shortly."
          : "Your callback request has been received. We'll be in touch shortly."
      );

      // Reset form after successful submission
      setName("");
      setOrganization("");
      setEmail("");
      setPhone("");    
      setInterestType("");
      setCourseId("");
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
    <main className="academy-theme">
      <PageHero
        eyebrow="Contact"
        title="Let's find the right fit for your goals."
        description="Whether you're exploring a course, looking for a program for your organisation, or simply need some guidance, we're here to help you take the next step. Book a 15-minute discovery call, or request a callback."
        primaryCta={{ label: "Talk to An Advisor Now", to: "https://wa.me/917908466757?text=Hello%20Empowering%20Minds%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs." }}
        secondaryCta={{ label: "Get Started", to: "#form" }}
      />

      {/* Contact details */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Get in Touch"
            title="We're here to help you take the next step."
            description="Whether you're exploring a course for yourself or looking for a development program for your organisation, we're here to help you find the right fit."
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
              title="Let's dive in."
              description="Choose the area you're interested in and tell us how you'd like to take the next step."
            />

            <div className="mt-10 rounded-[32px] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <form onSubmit={handleSubmit}>
                {/* Service selection */}
                {/* Area of Interest */}
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                  01 — Your area of interest
                </p>

                <h3 className="mt-3 text-xl font-bold text-[var(--color-primary)]">
                  What are you interested in?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Choose whether you're interested in our courses or programs. You can select a specific option below, or leave it for our team to help you decide.
                </p>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="interest-type"
                  className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                >
                  Area of Interest
                </label>

                <select
                  id="interest-type"
                  value={interestType}
                  required
                  onChange={(event) => {
                    setInterestType(event.target.value);
                    setCourseId("");
                    setServiceGroupId("");
                    setServiceId("");
                    setSuccess("");
                    setError("");
                  }}
                  disabled={loading}
                  className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-primary)] outline-none focus:border-[var(--color-secondary)]"
                >
                  <option value="">Select an area </option>
                  <option value="course">Courses</option>
                  <option value="program">Programs</option>
                </select>
              </div>

              {/* Course selection */}
              {interestType === "course" && (
                <div className="mt-5">
                  <label
                    htmlFor="course"
                    className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                  >
                    Select a Course
                  </label>

                  <select
                    id="course"
                    value={courseId}
                    onChange={(event) => {
                      setCourseId(event.target.value);
                      setSuccess("");
                      setError("");
                    }}
                    disabled={loading || coursesLoading}
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-primary)] outline-none focus:border-[var(--color-secondary)] disabled:bg-slate-50"
                  >
                    <option value="">
                      {coursesLoading
                        ? "Loading courses..."
                        : "Select a course (optional)"}
                    </option>

                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>

                  {coursesError && (
                    <p className="mt-2 text-sm text-red-600">
                      Courses couldn't be loaded. You can still submit your enquiry.
                    </p>
                  )}
                </div>
              )}

              {/* Program selection */}
              {interestType === "program" && (
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="service-group"
                      className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                    >
                      Service Group
                    </label>

                    <select
                      id="service-group"
                      value={serviceGroupId}
                      onChange={handleServiceGroupChange}
                      disabled={loading}
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-primary)] outline-none focus:border-[var(--color-secondary)]"
                    >
                      <option value="">Select a service group</option>

                      {serviceGroups.map((group) => (
                        <option key={group.id} value={group.id}>
                          {group.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                    >
                      Program
                    </label>

                    <select
                      id="service"
                      value={serviceId}
                      onChange={(event) => {
                        setServiceId(event.target.value);
                        setSuccess("");
                        setError("");
                      }}
                      disabled={!serviceGroupId || loading}
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-primary)] outline-none focus:border-[var(--color-secondary)] disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    >
                      <option value="">
                        {serviceGroupId
                          ? "Select a program (optional)"
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
            )}

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
                        Book a 15-minute Discovery Call
                      </span>

                      <span className="mt-2 block text-sm leading-6 text-slate-500">
                        Speak with our team to explore the course or program, understand what's involved, and decide whether it's right for your needs.
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

                
                {(selectedCourse || selectedService) && (
                  <div className="mt-8 rounded-2xl bg-[var(--color-background)] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                      Your selection
                    </p>

                    <p className="mt-2 font-bold text-[var(--color-primary)]">
                      {selectedCourse?.title || selectedService?.title}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {selectedCourse ? "Course" : selectedGroup?.title}
                    </p>

                    {intent && (
                      <p className="mt-3 text-sm font-semibold text-[var(--color-secondary)]">
                        {intent === "demo"
                          ? "15-min Discovery Call"
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
                      ? "Continue to Call Request"
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
        title="Not sure where to begin?"
        description="Tell us what you're looking to achieve. We'll help you find the right course or program for your goals, audience and needs."
        variant="soft"
        primaryLabel="Talk to Our Team"
        primaryTo="https://wa.me/917908466757?text=Hello%20Empowering%20Minds%2C%20I'd%20like%20help%20finding%20the%20right%20course%20or%20program."
        secondaryLabel="Explore Courses"
        secondaryTo="/courses"
      />
    </main>
  );
}