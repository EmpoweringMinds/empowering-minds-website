
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

export default function ContactForm({ form }) {
  const {
    interestType,
    setInterestType,
    courseId,
    setCourseId,
    serviceGroupId,
    setServiceGroupId,
    serviceId,
    setServiceId,
    intent,
    setIntent,
    name,
    setName,
    organization,
    setOrganization,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    loading,
    success,
    error,
    courses,
    coursesLoading,
    coursesError,
    serviceGroups,
    availableServices,
    selectedCourse,
    selectedGroup,
    selectedService,
    handleServiceGroupChange,
    handleSubmit,
    setSuccess,
    setError,
  } = form;

  const clearMessages = () => {
    setSuccess("");
    setError("");
  };

  const fieldClass = `
  w-full rounded-xl
  border border-[var(--color-primary)]/20
  bg-[var(--color-surface-warm)]
  px-4 py-3.5
  text-sm text-[var(--color-primary)]
  outline-none transition-all duration-200
  placeholder:text-[var(--color-primary)]/40
  hover:border-[var(--color-secondary)]/50
  focus:border-[var(--color-secondary)]
  focus:ring-2 focus:ring-[var(--color-secondary)]/15
  disabled:bg-slate-50
`;
  return (
    <section
      id="form"
      className="relative overflow-hidden bg-[var(--color-surface-warm)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="Get Started"
            title="Let's dive in."
            description="Choose the area you're interested in and tell us how you'd like to take the next step."
          />

          <div className="relative mt-10 overflow-hidden
            rounded-[32px]
            border border-[var(--color-primary)]/15
            bg-[var(--color-background)]
            p-6 shadow-[0_16px_50px_rgba(75,48,35,0.08)]
            sm:p-8 lg:p-10">
            {/* Decorative detail */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--color-soft-accent)]/50"
            />

            <form onSubmit={handleSubmit} className="relative space-y-10">
              {/* 01 — Area of interest */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                  01 — Your area of interest
                </p>

                <h3 className="mt-3 text-xl font-bold text-[var(--color-primary)] sm:text-2xl">
                  What are you interested in?
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-secondary)]">
                  Choose whether you're interested in our courses or programs.
                  You can select a specific option below, or leave it for our
                  team to help you decide.
                </p>

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
                      clearMessages();
                    }}
                    disabled={loading}
                    className={fieldClass}
                  >
                    <option value="">Select an area</option>
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
                        clearMessages();
                      }}
                      disabled={loading || coursesLoading}
                      className={fieldClass}
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
                        Courses couldn't be loaded. You can still submit your
                        enquiry.
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
                        className={fieldClass}
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
                          clearMessages();
                        }}
                        disabled={!serviceGroupId || loading}
                        className={`${fieldClass} disabled:cursor-not-allowed disabled:text-slate-400`}
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
              </div>

              {/* 02 — Your next step */}
              <div className="border-t border-[var(--color-border)] pt-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                  02 — Your next step
                </p>

                <h3 className="mt-3 text-xl font-bold text-[var(--color-primary)] sm:text-2xl">
                  How would you like to proceed?
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => {
                      setIntent("demo");
                      clearMessages();
                    }}
                    aria-pressed={intent === "demo"}
                    className={`rounded-2xl border p-5 text-left transition ${
                      intent === "demo"
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)]/40 shadow-md"
                        : "border-[var(--color-primary)]/15 bg-[var(--color-surface-warm)] hover:border-[var(--color-primary)]/60 hover:-translate-y-1"
                    }`}
                  >
                    <span className="block text-base font-bold text-[var(--color-primary)]">
                      Book a 15-minute Discovery Call
                    </span>

                    <span className="mt-2 block text-sm leading-6 text-[var(--color-secondary)]">
                      Speak with our team to explore the course or program,
                      understand what's involved, and decide whether it's right
                      for your needs.
                    </span>
                  </button>

                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => {
                      setIntent("callback");
                      clearMessages();
                    }}
                    aria-pressed={intent === "callback"}
                    className={`rounded-2xl border p-5 text-left transition ${
                      intent === "callback"
                        ? "border-[var(--color-olive)] bg-[var(--color-olive)]/40 shadow-md "
                        : "border-[var(--color-primary)]/15 bg-[var(--color-surface-warm)] hover:border-[var(--color-olive)] hover:-translate-y-1"
                    }`}
                  >
                    <span className="block text-base font-bold text-[var(--color-olive)]">
                      Request a Callback
                    </span>

                    <span className="mt-2 block text-sm leading-6 text-[var(--color-secondary)]">
                      Leave your details and our team will get in touch to
                      understand your requirements.
                    </span>
                  </button>
                </div>
              </div>

              {/* 03 — Your details */}
              <div className="border-t border-[var(--color-border)] pt-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                  03 — Your details
                </p>

                <h3 className="mt-3 text-xl font-bold text-[var(--color-primary)] sm:text-2xl">
                  Tell us how we can reach you.
                </h3>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                    >
                      Name <span className="text-[var(--color-secondary)]">*</span>
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
                      className={fieldClass}
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
                      onChange={(event) => setOrganization(event.target.value)}
                      disabled={loading}
                      className={fieldClass}
                      placeholder="Optional"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                    >
                      Email <span className="text-[var(--color-secondary)]">*</span>
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
                      className={fieldClass}
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-sm font-semibold text-[var(--color-primary)]"
                    >
                      Phone <span className="text-[var(--color-secondary)]">*</span>
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
                      className={fieldClass}
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
                    className={`${fieldClass} resize-none leading-6`}
                    placeholder="Tell us a little about your requirements..."
                  />
                </div>
              </div>

              {/* Selection summary */}
              {(selectedCourse || selectedService) && (
                <div className="
                    mt-8 rounded-2xl
                    border border-[var(--color-primary)]/10
                    bg-[var(--color-primary)]
                    p-5 text-white
                    ">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-background)]">
                    Your selection
                  </p>

                  <p className="mt-2 font-bold text-[var(--color-background)]">
                    {selectedCourse?.title || selectedService?.title}
                  </p>

                  <p className="mt-1 text-sm text-[var(--color-background)]">
                    {selectedCourse ? "Course" : selectedGroup?.title}
                  </p>

                  {intent && (
                    <p className="mt-3 text-sm font-semibold text-[var(--color-background)]">
                      {intent === "demo"
                        ? "15-min Discovery Call"
                        : "Callback Request"}
                    </p>
                  )}
                </div>
              )}

              {/* Success and error messages */}
              {success && (
                <div
                  role="status"
                  className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold leading-6 text-green-700"
                >
                  {success}
                </div>
              )}

              {error && (
                <div
                  role="alert"
                  className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold leading-6 text-red-700"
                >
                  {error}
                </div>
              )}

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-full bg-[var(--color-secondary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? "Processing..."
                    : intent === "demo"
                      ? "Continue to Call Request"
                      : intent === "callback"
                        ? "Request a Callback"
                        : "Continue"}
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-[var(--color-secondary)]">
                  We'll use these details only to respond to your request.
                </p>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
