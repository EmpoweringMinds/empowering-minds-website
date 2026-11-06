
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

export default function AudienceSection({ data }) {
  if (!data?.audienceCards?.length) return null;

  return (
    <section className="
      bg-[var(--color-background)]
      py-14 sm:py-24 lg:py-28
    ">
      <div className="
        mx-auto max-w-6xl
        px-4 sm:px-6 lg:px-8
      ">
        <FadeIn>
          <SectionHeader
            title={data.heading}
            description={data.description}
            align="center"
          />
        </FadeIn>

        {/* Mobile: Editorial list */}
        <div className="
          mt-8 divide-y divide-[var(--color-border)]
          md:hidden
        ">
          {data.audienceCards.map((audience, index) => (
            <FadeIn
              key={`${audience.title}-${index}`}
              delay={index * 0.04}
            >
              <article className="flex gap-4 py-5 first:pt-0">
                {/* Number */}
                <span className="
                  shrink-0 pt-0.5
                  font-serif text-xl font-medium
                  text-[var(--color-primary)]
                  opacity-60
                ">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="
                    font-heading text-xl
                    font-semibold leading-snug
                    text-[var(--color-text)]
                  ">
                    {audience.title}
                  </h3>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Tablet and desktop: Image cards */}
        <div className="
          mt-12 hidden gap-4
          sm:grid sm:grid-cols-2
          lg:grid-cols-3
        ">
          {data.audienceCards.map((audience, index) => (
            <FadeIn
              key={`${audience.title}-${index}`}
              delay={index * 0.05}
            >
              <article className="
                h-full rounded-2xl
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-6 transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[var(--shadow-md)]
                sm:p-7
              ">
                {audience.image && (
                  <div className="
                    mb-5 aspect-[16/9]
                    overflow-hidden rounded-xl
                  ">
                    <img
                      src={audience.image}
                      alt={audience.title}
                      loading="lazy"
                      className="
                        h-full w-full object-cover
                      "
                    />
                  </div>
                )}

                <h3 className="
                  font-heading text-lg font-semibold
                  text-[var(--color-text)]
                ">
                  {audience.title}
                </h3>

                <p className="
                  mt-3 text-sm leading-7
                  text-[var(--color-text-muted)]
                ">
                  {audience.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
