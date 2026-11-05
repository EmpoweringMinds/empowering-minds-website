
import { Link } from "react-router-dom";
import FadeIn from "../ui/FadeIn";

export default function CoursesHero({ data }) {
  if (!data) return null;

  return (
    <section className="
      relative isolate overflow-hidden
      bg-[var(--color-background)]
      pt-28 pb-16 sm:pt-32 sm:pb-24
    ">
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-24 -top-20
          h-72 w-72 rounded-full
          bg-[var(--color-soft-accent)] opacity-40 blur-3xl
          sm:h-96 sm:w-96
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -bottom-24 -left-24
          h-72 w-72 rounded-full
          bg-[var(--color-olive)] opacity-10 blur-3xl
        "
      />

      <div className="
        relative z-10 mx-auto max-w-7xl
        px-4 sm:px-6 lg:px-8
      ">
        <div className="
          grid items-center gap-12
          lg:grid-cols-[1fr_0.9fr]
          lg:gap-16
        ">
          {/* Hero content */}
          <FadeIn className="max-w-2xl">
            {data.eyebrow && (
              <p className="
                text-xs font-bold uppercase tracking-[0.22em]
                text-[var(--color-primary)] sm:text-sm
              ">
                {data.eyebrow}
              </p>
            )}

            <h1 className="
              mt-5 text-4xl font-bold leading-tight
              text-[var(--color-secondary)]
              sm:text-5xl lg:text-6xl
            ">
              {data.heading}
            </h1>

            <div
              aria-hidden="true"
              className="
                mt-7 h-[var(--decorative-line-height)]
                w-[var(--decorative-line-width)]
                rounded-full bg-[var(--color-primary)]
              "
            />

            <p className="
              mt-6 max-w-xl text-base leading-8
              text-[var(--color-text-secondary)]
              sm:text-lg
            ">
              {data.description}
            </p>

            <div className="
              mt-8 flex flex-col gap-3
              sm:flex-row sm:items-center
            ">
              {data.primaryCTA && (
                <Link
                  to="/contact"
                  className="
                    inline-flex items-center justify-center
                    rounded-full bg-[var(--color-primary)]
                    px-7 py-3.5 text-sm font-semibold
                    text-white shadow-[var(--shadow-warm)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:brightness-105
                  "
                >
                  {data.primaryCTA}
                </Link>
              )}

              {data.secondaryCTA && (
                <a
                  href="#course-directory"
                  className="
                    inline-flex items-center justify-center
                    rounded-full border border-[var(--color-border)]
                    px-7 py-3.5 text-sm font-semibold
                    text-[var(--color-secondary)]
                    transition-colors duration-300
                    hover:bg-[var(--surface-hover)]
                  "
                >
                  {data.secondaryCTA}
                </a>
              )}
            </div>
          </FadeIn>

          {/* Hero image */}
          <FadeIn delay={0.15}>
            {data.image ? (
              <div className="
                relative mx-auto w-full max-w-xl
                rounded-[2rem] border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-3 shadow-[var(--shadow-warm)]
              ">
                <img
                  src={data.image}
                  alt=""
                  fetchPriority="high"
                  className="
                    aspect-[4/4.2] w-full
                    rounded-[1.5rem] object-cover
                  "
                />
              </div>
            ) : (
              <div className="
                aspect-[4/4.2] w-full max-w-xl
                rounded-[2rem] bg-[var(--color-surface-warm)]
              " />
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


