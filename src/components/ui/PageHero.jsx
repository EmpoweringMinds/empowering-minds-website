
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

  // Optional React visual: image, illustration, composition, etc.
  visual = null,

  // Visuals are desktop-only by default.
  visualOnMobile = false,

  // Optional styling hooks for page-specific visuals.
  visualClassName = "",
  contentClassName = "",
}) {
  const hasVisual = Boolean(visual);

  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-[var(--color-background)]
        pt-24 sm:pt-28 lg:pt-32
      "
    >
      {/* Decorative atmosphere */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 -top-20
          h-72 w-72 rounded-full
          bg-[var(--color-soft-accent)]/30
          blur-3xl
          sm:h-96 sm:w-96
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-24 -left-24
          h-72 w-72 rounded-full
          bg-[var(--color-olive)]/10
          blur-3xl
        "
      />

      <div
        className="
          relative z-10 mx-auto max-w-7xl
          px-4 py-12
          sm:px-6 sm:py-16
          lg:px-8 lg:py-20
        "
      >
        <div
          className={`
            grid items-center gap-10
            ${hasVisual
              ? "lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
              : "grid-cols-1"
            }
          `}
        >
          {/* Content */}

          <FadeIn
            className={`
              ${hasVisual ? "max-w-3xl" : "max-w-4xl"}
              ${contentClassName}
            `}
          >
            {eyebrow && (
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
                    text-xs font-bold uppercase
                    tracking-[0.22em]
                    text-[var(--color-primary)]
                    sm:text-sm sm:tracking-[0.26em]
                  "
                >
                  {eyebrow}
                </p>
              </div>
            )}

            <h1
              className="
                mt-5
                max-w-4xl
                text-3xl font-bold
                leading-[1.1]
                tracking-[-0.035em]
                text-[var(--color-secondary)]
                sm:text-5xl
                lg:text-6xl
              "
            >
              {title}
            </h1>

            <div
              aria-hidden="true"
              className="
                mt-7
                h-[var(--decorative-line-height)]
                w-[var(--decorative-line-width)]
                rounded-full
                bg-[var(--color-primary)]
              "
            />

            {description && (
              <p
                className="
                  mt-6 max-w-2xl
                  text-base leading-8
                  text-[var(--color-text-secondary)]
                  sm:text-lg
                "
              >
                {description}
              </p>
            )}

            {/* Actions */}

            {(primaryCta || secondaryCta) && (
              <div
                className="
                  mt-8 flex flex-col gap-3
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

          {/* Optional visual */}

          {hasVisual && (
            <FadeIn
              delay={0.15}
              className={`
                relative items-center justify-center
                ${visualOnMobile ? "flex" : "hidden lg:flex"}
                ${visualClassName}
              `}
            >
              {visual}
            </FadeIn>
          )}
        </div>

        {/* Bottom transition */}

        <div
          aria-hidden="true"
          className="
            mt-12 h-px w-full
            bg-[var(--color-border)]
            sm:mt-16 lg:mt-20
          "
        />
      </div>
    </section>
  );
}
