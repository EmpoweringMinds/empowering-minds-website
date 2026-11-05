import CTAButton from "./CTAButton";
import FadeIn from "./FadeIn";

export default function PageHero({
  eyebrow,
  title,
  description,

  primaryCta = {
    label: "Talk to us",
    to: "/contact",
  },

  secondaryCta = {
    label: "Explore programs",
    to: "/programs",
  },

  /**
   * Optional visual to place on the right side of the hero.
   * Useful for illustrations, diagrams, or page-specific visuals.
   */
  visual = null,
}) {
  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-[var(--color-background)]
        pt-24
        sm:pt-28
        lg:pt-32
      "
    >
      {/* --------------------------------
          Decorative atmosphere
      -------------------------------- */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 -top-24
          h-72 w-72
          rounded-full
          border
          border-[var(--color-primary)]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-12 top-12
          h-40 w-40
          rounded-full
          border
          border-[var(--color-primary)]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-24 -left-20
          h-64 w-64
          rounded-full
          bg-[var(--color-soft-accent)]/30
          blur-3xl
        "
      />

      {/* --------------------------------
          Hero content
      -------------------------------- */}

      <div
        className="
          relative mx-auto max-w-7xl
          px-4
          py-16
          sm:px-6 sm:py-20
          lg:px-8 lg:py-24
        "
      >
        <div
          className="
            grid items-center gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-16
          "
        >
          {/* --------------------------------
              Content
          -------------------------------- */}

          <FadeIn className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-[var(--decorative-line-height)]
                  w-[var(--decorative-line-width)]
                  rounded-full
                  bg-[var(--color-primary)]
                "
              />

              <p
                className="
                  text-xs font-semibold uppercase
                  tracking-[0.24em]
                  text-[var(--color-secondary)]
                  sm:text-sm sm:tracking-[0.3em]
                "
              >
                {eyebrow}
              </p>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-6
                max-w-3xl
                text-2xl font-bold
                leading-[1.04]
                tracking-[-0.035em]
                text-[var(--color-secondary)]
                sm:text-3xl
                lg:text-4xl
                xl:text-5xl
              "
            >
              {title}
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-2xl
                text-sm leading-7
                text-[var(--color-text-secondary)]
                sm:text-base sm:leading-8
                lg:text-lg
              "
            >
              {description}
            </p>

            {/* Actions */}
            {(primaryCta || secondaryCta) && (
              <div
                className="
                  mt-8
                  flex flex-col gap-3
                  sm:mt-9
                  sm:flex-row sm:flex-wrap sm:gap-4
                "
              >
                {primaryCta && (
                  <CTAButton
                    as={primaryCta.as}
                    to={primaryCta.to}
                    href={primaryCta.href}
                    target={primaryCta.target}
                    rel={primaryCta.rel}
                    variant="primary"
                  >
                    {primaryCta.label}
                  </CTAButton>
                )}

                {secondaryCta && (
                  <CTAButton
                    as={secondaryCta.as}
                    to={secondaryCta.to}
                    href={secondaryCta.href}
                    target={secondaryCta.target}
                    rel={secondaryCta.rel}
                    variant="secondary"
                  >
                    {secondaryCta.label}
                  </CTAButton>
                )}
              </div>
            )}
          </FadeIn>

          {/* --------------------------------
              Visual
          -------------------------------- */}

          <FadeIn
            delay={0.12}
            className="
              relative
              hidden
              min-h-[280px]
              items-center
              justify-center
              lg:flex
            "
          >
            {visual ? (
              visual
            ) : (
              <div
                aria-hidden="true"
                className="
                  relative
                  flex h-64 w-64
                  items-center justify-center
                "
              >
                {/* Outer ring */}
                <div
                  className="
                    absolute inset-0
                    rounded-full
                    border
                    border-[var(--color-primary)]/15
                  "
                />

                {/* Middle ring */}
                <div
                  className="
                    absolute inset-8
                    rounded-full
                    border
                    border-[var(--color-primary)]/20
                  "
                />

                {/* Core */}
                <div
                  className="
                    flex h-24 w-24
                    items-center justify-center
                    rounded-full
                    bg-[var(--color-primary)]
                    shadow-[var(--shadow-warm)]
                  "
                >
                  <span
                    className="
                      h-3 w-3
                      rounded-full
                      bg-white
                    "
                  />
                </div>

                {/* Orbit points */}
                <span
                  className="
                    absolute left-6 top-1/2
                    h-2 w-2
                    -translate-y-1/2
                    rounded-full
                    bg-[var(--color-primary)]
                  "
                />

                <span
                  className="
                    absolute right-6 top-1/2
                    h-2 w-2
                    -translate-y-1/2
                    rounded-full
                    bg-[var(--color-primary)]
                  "
                />

                <span
                  className="
                    absolute left-1/2 top-5
                    h-2 w-2
                    -translate-x-1/2
                    rounded-full
                    bg-[var(--color-secondary)]
                  "
                />

                <span
                  className="
                    absolute bottom-5 left-1/2
                    h-2 w-2
                    -translate-x-1/2
                    rounded-full
                    bg-[var(--color-secondary)]
                  "
                />
              </div>
            )}
          </FadeIn>
        </div>

        {/* Bottom transition */}
        <div
          aria-hidden="true"
          className="
            mt-14
            h-px
            w-full
            bg-[var(--color-border)]
            sm:mt-18
          "
        />
      </div>
    </section>
  );
}