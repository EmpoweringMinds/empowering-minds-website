
import CTAButton from "./CTAButton";
import FadeIn from "./FadeIn";

const variants = {
  soft: {
    background: "bg-[var(--color-surface-warm)]",
    eyebrow: "text-[var(--color-primary)]",
    title: "text-[var(--color-secondary)]",
    description: "text-[var(--color-text-secondary)]",
    decoration: "bg-[var(--color-soft-accent)]/60",
    secondaryDecoration: "bg-[var(--color-olive)]/20",
    border: "border-[var(--color-border)]",
  },

  blush: {
    background: "bg-[var(--color-soft-accent)]",
    eyebrow: "text-[var(--color-secondary)]",
    title: "text-[var(--color-secondary)]",
    description: "text-[var(--color-secondary)]/80",
    decoration: "bg-white/35",
    secondaryDecoration: "bg-[var(--color-primary)]/15",
    border: "border-[var(--color-border)]",
  },

  warm: {
    background: "bg-[var(--color-secondary)]",
    eyebrow: "text-[var(--color-primary)]",
    title: "text-[var(--color-background)]",
    description: "text-[var(--color-background)]/80",
    decoration: "bg-[var(--color-primary)]/15",
    secondaryDecoration: "bg-[var(--color-olive)]/15",
    border: "border-white/10",
  },
};

export default function CTASection({
  title,
  description,

  eyebrow = "Let's build what's next",

  primaryLabel = "Schedule a consultation",
  primaryTo = "/contact",

  secondaryLabel = "Browse Courses",
  secondaryTo = "/courses",
  secondaryLabelIsVisible = true,

  variant = "soft",
}) {
  const styles = variants[variant] ?? variants.soft;

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <FadeIn>
          <div
            className={`
              relative isolate overflow-hidden
              rounded-[2rem] sm:rounded-[2.5rem]
              border
              px-7 py-10
              sm:px-10 sm:py-12
              lg:px-16 lg:py-16
              ${styles.background}
              ${styles.border}
            `}
          >

            {/* Organic decorative shapes */}
            <div
              aria-hidden="true"
              className={`
                pointer-events-none absolute
                -right-24 -top-28
                h-72 w-72
                rounded-full
                ${styles.decoration}
              `}
            />

            <div
              aria-hidden="true"
              className={`
                pointer-events-none absolute
                -bottom-32 right-[18%]
                h-64 w-64
                rounded-full
                ${styles.secondaryDecoration}
              `}
            />

            {/* Decorative outline */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -right-10 top-1/2
                hidden h-[420px] w-[420px]
                -translate-y-1/2
                rounded-full border
                border-[var(--color-primary)]/20
                lg:block
              "
            />

            {/* Content */}
            <div className="
              relative z-10
              flex flex-col gap-9
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-12
            ">

              {/* Text */}
              <div className="max-w-2xl">

                {eyebrow && (
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="
                        h-[3px] w-10 rounded-full
                        bg-[var(--color-primary)]
                      "
                    />

                    <p className={`
                      text-xs font-bold uppercase
                      tracking-[0.22em]
                      sm:text-sm
                      ${styles.eyebrow}
                    `}>
                      {eyebrow}
                    </p>
                  </div>
                )}

                <h2 className={`
                  mt-5 max-w-2xl
                  font-heading text-3xl
                  font-bold leading-[1.15]
                  tracking-tight
                  sm:text-4xl
                  lg:text-5xl
                  ${styles.title}
                `}>
                  {title}
                </h2>

                {description && (
                  <p className={`
                    mt-5 max-w-xl
                    text-sm leading-7
                    sm:text-base sm:leading-8
                    ${styles.description}
                  `}>
                    {description}
                  </p>
                )}

              </div>

              {/* Actions */}
              <div className="
                flex shrink-0 flex-col
                gap-3 sm:flex-row sm:flex-wrap
                lg:flex-col lg:items-stretch
              ">

                {primaryLabel && (
                  <CTAButton
                    to={primaryTo}
                    variant="primary"
                  >
                    {primaryLabel}
                  </CTAButton>
                )}

                {secondaryLabelIsVisible && secondaryLabel && (
                  <CTAButton
                    to={secondaryTo}
                    variant="secondary"
                  >
                    {secondaryLabel}
                  </CTAButton>
                )}

              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
