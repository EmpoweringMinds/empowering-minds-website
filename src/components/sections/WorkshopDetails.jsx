import { Link, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { useWorkshops } from "../../cms/useWorkshops";
import { getWorkshopDateState } from "../../utils/workshopDates";

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
      <main className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>Loading workshop...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>Unable to load this workshop.</p>
        </div>
      </main>
    );
  }

  const workshop = workshops.find((item) => item.slug === slug);

  if (!workshop) {
    return (
      <main className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-medium">Workshop not found</h1>

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

  const dateState = getWorkshopDateState(workshop);

  return (
    <main>
      {/* HERO */}
      <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {workshop.hero.eyebrow && (
              <p className="text-sm font-medium uppercase tracking-[0.2em]">
                {workshop.hero.eyebrow}
              </p>
            )}

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.15em] opacity-60">
              {workshop.name}
            </p>

            <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl lg:text-7xl">
              {workshop.hero.title}
            </h1>

            {workshop.hero.subtitle && (
              <p className="mt-8 max-w-3xl text-xl leading-relaxed sm:text-2xl">
                {workshop.hero.subtitle}
              </p>
            )}

            {workshop.hero.description && (
              <p className="mt-6 max-w-3xl text-lg leading-relaxed opacity-75">
                {workshop.hero.description}
              </p>
            )}

            {workshop.hero.supportingText && (
              <p className="mt-6 font-medium">
                {workshop.hero.supportingText}
              </p>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              <span className="rounded-full border px-5 py-2 text-sm">
                {workshop.format}
              </span>

              <span className="rounded-full border px-5 py-2 text-sm">
                {dateState.status === "upcoming" ? "Upcoming" : "Past"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WORKSHOP META */}
      <section className="border-b py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-wider opacity-50">
              Starts
            </p>

            <p className="mt-2 font-medium">
              {formatDate(dateState.start)}
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wider opacity-50">
              Timezone
            </p>

            <p className="mt-2 font-medium">
              {workshop.schedule.timezone}
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wider opacity-50">
              Investment
            </p>

            <p className="mt-2 font-medium">
              {workshop.pricing.currency}{" "}
              {workshop.pricing.regularPrice}
            </p>
          </div>
        </div>
      </section>

      {/* INTRO / PORTABLE TEXT */}
      {workshop.body.length > 0 && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <PortableText value={workshop.body} />
          </div>
        </section>
      )}

      {/* HIGHLIGHTS */}
      {workshop.content.highlights.length > 0 && (
        <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {workshop.content.highlights.map((highlight, index) => (
                <div key={index}>
                  <p className="text-lg font-medium">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SCHEDULE */}
      {workshop.schedule.sessions.length > 0 && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-60">
              Schedule
            </p>

            <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
              Sessions
            </h2>

            <div className="mt-10 divide-y border-y">
              {workshop.schedule.sessions.map((session) => (
                <div
                  key={session._key}
                  className="grid gap-4 py-8 md:grid-cols-[1fr_auto]"
                >
                  <div>
                    <h3 className="text-xl font-medium">
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
        </section>
      )}

      {/* AUDIENCE */}
      {workshop.content.audience && (
        <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-medium sm:text-4xl">
              {workshop.content.audience.sectionTitle}
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {workshop.content.audience.items.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border p-6"
                >
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LEARNING OUTCOMES */}
      {workshop.content.learningOutcomes && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-3xl text-3xl font-medium sm:text-4xl">
              {workshop.content.learningOutcomes.sectionTitle}
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {workshop.content.learningOutcomes.items.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-2xl border"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      className="aspect-[16/9] w-full object-cover"
                    />
                  )}

                  <div className="p-7">
                    <h3 className="text-xl font-medium">
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
        </section>
      )}

      {/* WHO SHOULD ATTEND */}
      {workshop.content.whoShouldAttend && (
        <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-3xl text-3xl font-medium sm:text-4xl">
              {workshop.content.whoShouldAttend.sectionTitle}
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {workshop.content.whoShouldAttend.items.map((item) => (
                <article key={item.title}>
                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      className="aspect-[4/3] w-full rounded-2xl object-cover"
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
        </section>
      )}

      {/* SPEAKERS */}
      {workshop.speakers.length > 0 && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-60">
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
                    className="grid gap-6 sm:grid-cols-[180px_1fr]"
                  >
                    {person.image && (
                      <img
                        src={person.image}
                        alt={person.name}
                        className="aspect-square w-full rounded-2xl object-cover"
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
        </section>
      )}

      {/* BONUS */}
      {workshop.content.bonus?.enabled && (
        <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            {workshop.content.bonus.bonusImage && (
              <img
                src={workshop.content.bonus.bonusImage}
                alt=""
                className="w-full rounded-2xl object-cover"
              />
            )}

            <div>
              {workshop.content.bonus.eyebrow && (
                <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-60">
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
        </section>
      )}

      {/* FAQ */}
      {workshop.content.faq && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-medium sm:text-4xl">
              {workshop.content.faq.sectionTitle}
            </h2>

            <div className="mt-10 divide-y border-y">
              {workshop.content.faq.items.map((item) => (
                <details key={item._key} className="group py-6">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-medium">
                    {item.question}
                  </summary>

                  <p className="mt-4 leading-relaxed opacity-70">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RESOURCES */}
      {workshop.resources.length > 0 && (
        <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-medium sm:text-4xl">
              Resources
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {workshop.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border p-6"
                >
                  <p className="text-xl font-medium">
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
        </section>
      )}

      {/* REGISTRATION / CTA */}
      {workshop.content.finalCta?.button?.label && (
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-medium sm:text-4xl">
              Ready to take the next step
            </h2>

            <Link
              to={`/workshops/${workshop.slug}/register`}
              className="mt-8 inline-block rounded-full px-8 py-4 font-medium"
            >
              {workshop.content.finalCta.button.label}
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}