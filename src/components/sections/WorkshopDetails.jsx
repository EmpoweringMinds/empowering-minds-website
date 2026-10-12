import { Link, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { useWorkshops } from "../../cms/useWorkshops";
import { getWorkshopDateState } from "../../utils/workshopDates";
import CTAButton from "../ui/CTAButton";
import FadeIn from "../ui/FadeIn";

function formatDate(date) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatDateTime(date) {
  if (!date) return "";

  return new Date(date).toLocaleString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function WorkshopDetails() {
  const { slug } = useParams();
  const { workshops, loading, error } = useWorkshops();

  if (loading) {
    return (
      <main className="bg-[var(--color-background)] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>Loading workshop...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="bg-[var(--color-background)] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>Unable to load this workshop.</p>
        </div>
      </main>
    );
  }

  const workshop = workshops.find((item) => item.slug === slug);

  if (!workshop) {
    return (
      <main className="bg-[var(--color-background)] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl">Workshop not found</h1>

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

  const dateState = getWorkshopDateState(workshop);
  const registrationClosed = dateState.status !== "upcoming";

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--color-surface-warm)] py-20 sm:py-24 lg:py-32 border-b border-[var(--color-secondary)]/10 ">
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-[var(--color-secondary)]/15 sm:h-[26rem] sm:w-[26rem]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[var(--color-secondary)]/15 sm:h-72 sm:w-72" />
        <FadeIn>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {workshop.hero.eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)] sm:text-sm">
                  {workshop.hero.eyebrow}
                </p>
              )}

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                {workshop.name}
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-[1.04] tracking-[-0.035em] text-[var(--color-secondary)] sm:text-5xl lg:text-7xl">
                {workshop.hero.title}
              </h1>

              {workshop.hero.subtitle && (
                <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed text-[var(--color-primary)] sm:text-2xl">
                  {workshop.hero.subtitle}
                </p>
              )}

              {workshop.hero.description && (
                <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
                  {workshop.hero.description}
                </p>
              )}

              {workshop.hero.supportingText && (
                <p className="mt-6 font-semibold text-[var(--color-primary)]">
                  {workshop.hero.supportingText}
                </p>
              )}

              <div className="mt-10 flex flex-wrap gap-3 mb-12">
                <span className="rounded-full border border-[var(--color-secondary)]/20 bg-white/60 px-5 py-2.5 text-sm font-medium text-[var(--color-primary)]">
                  {workshop.format}
                </span>

                <span className="rounded-full border border-[var(--color-secondary)]/20 bg-white/60 px-5 py-2.5 text-sm font-medium text-[var(--color-primary)]">
                  {dateState.status === "upcoming" ? "Upcoming" : "Past"}
                </span>
              </div>
              {registrationClosed ? (
                <span
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-gray-300 px-5 py-3 text-center text-sm font-semibold text-gray-600 opacity-80 sm:px-6"
                >
                  Registration Closed
                </span>
              ) : (
                <CTAButton
                  to={`/workshops/${workshop.slug}/register`}
                  variant="primary"
                >
                  {workshop.content.finalCta.button.label}
                </CTAButton>
              )}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* WORKSHOP META */}
      <section className="border-b border-[var(--color-border)] bg-white/70 py-8 sm:py-10 text-center">
      <FadeIn>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">
              Starts
            </p>

            <p className="mt-2 text-base font-semibold text-[var(--color-primary)]">
              {formatDate(dateState.start)}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">
              Timezone
            </p>

            <p className="mt-2 text-base font-semibold text-[var(--color-primary)]">
              {workshop.schedule.timezone}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">
              Investment
            </p>

            <p className="mt-2 text-base font-semibold text-[var(--color-primary)]">
              {workshop.pricing.currency}{" "}
              {workshop.pricing.regularPrice}
            </p>
          </div>
        </div>
      </FadeIn>
      </section>

      {/* INTRO / PORTABLE TEXT */}
      {workshop.body.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24">
          <FadeIn>
            <div className="prose prose-lg mx-auto max-w-3xl px-4 leading-8 text-[var(--color-text-secondary)] sm:px-6 lg:px-8 [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-[var(--color-primary)] [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-[var(--color-primary)] [&_a]:font-semibold [&_a]:text-[var(--color-secondary)] [&_strong]:text-[var(--color-primary)]">
              <PortableText value={workshop.body} />
            </div>
          </FadeIn>
        </section>
      )}

      {/* HIGHLIGHTS */}
      {workshop.content.highlights.length > 0 && (
        <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24">
        <FadeIn>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {workshop.content.highlights.map((highlight, index) => (
                  <div key={index}>
                    <p className="text-lg font-semibold leading-7 text-[var(--color-primary)]">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* SCHEDULE */}
      {workshop.schedule.sessions.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24">
          <FadeIn>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-secondary)]">
                Schedule
              </p>

              <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
                Sessions
              </h2>

              <div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
                {workshop.schedule.sessions.map((session) => (
                  <div
                    key={session._key}
                    className="grid gap-4 py-7 transition-colors sm:px-4 md:grid-cols-[1fr_auto] md:items-center"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                        {session.title}
                      </h3>

                      {session.type && (
                        <p className="mt-2 text-sm uppercase tracking-wider opacity-50">
                          {session.type}
                        </p>
                      )}
                    </div>

                    <div className="md:text-right">
                      <p className="font-medium">
                        {formatDateTime(session.start)}
                      </p>

                      <p className="mt-1 text-sm opacity-60">
                        until {formatDateTime(session.end)}
                      </p>

                      {session.capacity && (
                        <p className="mt-3 text-sm opacity-60">
                          Capacity: {session.capacity}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* AUDIENCE */}
      {workshop.content.audience && (
        <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24">
          <FadeIn>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
                {workshop.content.audience.sectionTitle}
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {workshop.content.audience.items.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-[var(--color-border)] bg-white/70 p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* LEARNING OUTCOMES */}
      {workshop.content.learningOutcomes && (
        <section className="py-16 sm:py-20 lg:py-24">
          <FadeIn>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl">
                {workshop.content.learningOutcomes.sectionTitle}
              </h2>

              <div className="mt-12 grid gap-8 md:grid-cols-2">
                {workshop.content.learningOutcomes.items.map((item) => (
                  <article
                    key={item.title}
                    className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[0_12px_36px_rgba(35,66,78,0.06)] transition duration-300 hover:shadow-[0_20px_48px_rgba(35,66,78,0.1)]"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt=""
                        className="aspect-[16/9] w-full object-cover transition duration-500 hover:scale-[1.02]"
                      />
                    )}

                    <div className="p-6 sm:p-7">
                      <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-relaxed opacity-70">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* WHO SHOULD ATTEND */}
      {workshop.content.whoShouldAttend && (
        <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24">
          <FadeIn>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl">
                {workshop.content.whoShouldAttend.sectionTitle}
              </h2>

              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {workshop.content.whoShouldAttend.items.map((item) => (
                  <article key={item.title}>
                    {item.image && (
                      <img
                        src={item.image}
                        alt=""
                        className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm"
                      />
                    )}

                    <h3 className="mt-6 text-xl font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-relaxed opacity-70">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* SPEAKERS */}
      {workshop.speakers.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24">
          <FadeIn>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-secondary)]">
                Your Speakers
              </p>

              <div className="mt-10 grid gap-10 md:grid-cols-2">
                {workshop.speakers.map((speaker, index) => {
                  const person =
                    speaker.type === "trainer"
                      ? speaker.trainer
                      : speaker.guest;

                  if (!person) return null;

                  return (
                    <article
                      key={index}
                      className="grid gap-6 rounded-3xl border border-[var(--color-border)] bg-white p-5 sm:grid-cols-[160px_1fr] sm:p-6 lg:grid-cols-[180px_1fr]"
                    >
                      {person.image && (
                        <img
                          src={person.image}
                          alt={person.name}
                          className="aspect-square w-full rounded-2xl object-cover shadow-sm"
                        />
                      )}

                      <div>
                        <p className="text-2xl font-medium">
                          {person.name}
                        </p>

                        {person.designation && (
                          <p className="mt-2 opacity-60">
                            {person.designation}
                          </p>
                        )}

                        {person.shortTitle && (
                          <p className="mt-3 text-sm leading-relaxed">
                            {person.shortTitle}
                          </p>
                        )}

                        {person.role && (
                          <p className="mt-2 opacity-60">
                            {person.role}
                          </p>
                        )}

                        {person.bio && (
                          <p className="mt-4 leading-relaxed opacity-70">
                            {person.bio}
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* BONUS */}
      {workshop.content.bonus?.enabled && (
        <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24">
          <FadeIn>
            <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
              {workshop.content.bonus.bonusImage && (
                <img
                  src={workshop.content.bonus.bonusImage}
                  alt=""
                  className="w-full rounded-2xl object-cover shadow-sm"
                />
              )}

              <div>
                {workshop.content.bonus.eyebrow && (
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-secondary)]">
                    {workshop.content.bonus.eyebrow}
                  </p>
                )}

                <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
                  {workshop.content.bonus.title}
                </h2>

                <p className="mt-6 text-lg leading-relaxed opacity-70">
                  {workshop.content.bonus.description}
                </p>
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* FAQ */}
      {workshop.content.faq && (
        <section className="py-16 sm:py-20 lg:py-24">
          <FadeIn>
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
                {workshop.content.faq.sectionTitle}
              </h2>

              <div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
                {workshop.content.faq.items.map((item) => (
                  <details key={item._key} className="group py-6">
                    <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[var(--color-primary)] marker:text-[var(--color-secondary)] transition-colors duration-300 ease-out hover:text-[var(--color-secondary)]">
                      {item.question}
                    </summary>

                    <p className="mt-4 leading-relaxed opacity-70">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* RESOURCES */}
      {workshop.resources.length > 0 && (
        <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24">
          <FadeIn>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
                Resources
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {workshop.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-[var(--color-border)] bg-white/70 p-6 transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <p className="text-xl font-semibold text-[var(--color-primary)]">
                      {resource.title}
                    </p>

                    {resource.type && (
                      <p className="mt-2 text-sm uppercase tracking-wider opacity-50">
                        {resource.type}
                      </p>
                    )}

                    {resource.description && (
                      <p className="mt-4 leading-relaxed opacity-70">
                        {resource.description}
                      </p>
                    )}

                    {resource.availableFrom && (
                      <p className="mt-4 text-sm opacity-60">
                        Available from {formatDate(resource.availableFrom)}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* REGISTRATION / CTA */}
      {workshop.content.finalCta?.button?.label && (
        <section className="py-20 sm:py-24 lg:py-32">
          <FadeIn>
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl mb-16">
                Ready to take the next step
              </h2>
              {registrationClosed ? (
                <span
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-gray-300 px-5 py-3 text-center text-sm font-semibold text-gray-600 opacity-80 sm:px-6"
                >
                  Registration Closed
                </span>
              ) : (
                <CTAButton
                  to={`/workshops/${workshop.slug}/register`}
                  variant="primary"
                >
                  {workshop.content.finalCta.button.label}
                </CTAButton>
              )}
            </div>
          </FadeIn>
        </section>
      )}
    </main>
  );
}