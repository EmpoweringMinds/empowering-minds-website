
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

  visual = null,
  visualOnMobile = false,

  visualClassName = "",
  contentClassName = "",
}) {
  const hasVisual = Boolean(visual);

  return (
    <section
      className="
        relative isolate 
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
          px-2 py-10
          sm:px-4 sm:py-14
          lg:px-6 lg:py-18
        "
      >
        <div
          className={`
            grid items-center gap-8
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
                mt-5 max-w-4xl
                font-heading text-3xl font-bold
                leading-[1.1] tracking-[-0.035em]
                text-[var(--color-secondary)]
                sm:text-5xl lg:text-6xl
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

            {/* Mobile visual: between description and CTAs */}
            {hasVisual && visualOnMobile && (
              <div
                className={`
                  relative mt-7 w-full
                  lg:hidden
                  ${visualClassName}
                `}
              >
                {visual}
              </div>
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

          {/* Desktop visual */}
          {hasVisual && (
            <FadeIn
              delay={0.15}
              className={`
                relative hidden items-center justify-center
                lg:flex
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
