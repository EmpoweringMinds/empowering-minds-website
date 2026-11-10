
import FadeIn from "../ui/FadeIn";

export default function WhoWeAre({data}) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

          {/* Introduction */}
          <FadeIn>
            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">
                {data.eyebrow}
              </p>

              <h2 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-[var(--color-secondary)] sm:text-5xl lg:text-6xl">
                {data.heading}
              </h2>

              <div className="mt-6 h-1.5 w-16 rounded-full bg-[var(--color-primary)]" />

              <p className="mt-7 max-w-xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg sm:leading-9">
                {data.description}
              </p>

            </div>
          </FadeIn>

          {/* Our Approach */}
          <FadeIn delay={0.12}>
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-[var(--color-primary)] p-7 text-white shadow-[var(--shadow-warm)] sm:p-10 lg:p-12">

              {/* Decorative shape */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[32px] border-white/10"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-[var(--color-soft-accent)]/20 blur-2xl"
              />

              <div className="relative z-10">

                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/75">
                    Our Approach
                  </p>

                  <span className="text-sm font-bold tracking-widest text-white/60">
                    01
                  </span>
                </div>

                <h3 className="mt-10 max-w-md text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  Development with purpose.
                </h3>

                <div className="mt-6 h-px w-full bg-white/25" />

                <p className="mt-7 text-base leading-8 text-white/90 sm:text-lg sm:leading-9">
                  {data.fullDescription}
                </p>

              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
