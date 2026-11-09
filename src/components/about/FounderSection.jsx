
import { aboutContent } from "../../data/siteContent";
import FadeIn from "../ui/FadeIn";

export default function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)] py-16 sm:py-20 lg:py-28">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">

          {/* Founder portrait */}
          <FadeIn className="relative">

            <div className="relative isolate min-h-[440px] overflow-hidden rounded-[2rem] bg-[var(--color-primary)] sm:min-h-[560px] lg:h-full">

              {/* Decorative shape */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[30px] border-white/10"
              />

              <img
                src="/images/trainers/ira-saha.jpg"
                alt="Ira Saha, Founder of Empowering Minds"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Image overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/90 via-transparent to-transparent"
              />

              {/* Identity */}
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                  The person behind the vision
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {aboutContent.founderName}
                </h2>

                <p className="mt-2 text-sm font-medium text-white/80">
                  {aboutContent.founderRole}
                </p>

              </div>
            </div>
          </FadeIn>

          {/* Founder message */}
          <FadeIn delay={0.12}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-7 sm:p-10 lg:p-12">

              {/* Decorative circle */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[var(--color-soft-accent)]/40 blur-2xl"
              />

              <div className="relative z-10">

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">
                  {aboutContent.founderTitle}
                </p>

                <h3 className="mt-5 max-w-lg text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-secondary)] sm:text-4xl lg:text-5xl">
                  A belief in the potential of people.
                </h3>

                <div className="mt-7 h-1.5 w-16 rounded-full bg-[var(--color-primary)]" />

                <div className="mt-8 space-y-5 text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg sm:leading-9">

                  <p>{aboutContent.founderNote}</p>

                  <p>{aboutContent.founderNoteContinued}</p>

                  <p>{aboutContent.founderStory}</p>

                </div>

                {/* Closing philosophy */}
                <div className="relative mt-9 overflow-hidden rounded-2xl bg-[var(--color-soft-accent)] p-6 sm:p-8">

                  <span
                    aria-hidden="true"
                    className="absolute -right-2 -top-8 text-9xl font-bold leading-none text-[var(--color-primary)]/10"
                  >
                    ”
                  </span>

                  <div className="relative z-10">

                    <p className="text-xl font-extrabold leading-relaxed text-[var(--color-secondary)] sm:text-2xl">
                      {aboutContent.founderClosing}
                    </p>

                  </div>
                </div>

              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
