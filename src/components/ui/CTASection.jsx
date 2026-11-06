import CTAButton from "./CTAButton";
import FadeIn from "./FadeIn";

const variants = {
  soft: {
    background: "bg-[var(--color-surface-warm)]",
    eyebrow: "text-[var(--color-primary)]",
    title: "text-[var(--color-secondary)]",
    description: "text-[var(--color-text-secondary)]",
    decoration:
      "bg-[var(--color-soft-accent)]/50",
    border:
      "border-[var(--color-border-soft)]",
  },

  blush: {
    background: "bg-[var(--color-soft-accent)]/60",
    eyebrow: "text-[var(--color-primary)]",
    title: "text-[var(--color-secondary)]",
    description: "text-[var(--color-text-secondary)]",
    decoration:
      "bg-white/50",
    border:
      "border-[var(--color-soft-accent)]",
  },

  warm: {
    background: "bg-[var(--color-primary)]/8",
    eyebrow: "text-[var(--color-primary)]",
    title: "text-[var(--color-secondary)]",
    description: "text-[var(--color-text-secondary)]",
    decoration:
      "bg-[var(--color-primary)]/8",
    border:
      "border-[var(--color-primary)]/10",
  },
};

export default function CTASection({
  title,
  description,

  eyebrow = "Let’s build what’s next",

  primaryLabel = "Schedule a consultation",
  primaryTo = "/contact",

  secondaryLabel = "Browse Courses",
  secondaryTo = "/courses",

  /*
   * soft is intentionally the default.
   * No dark CTA sections.
   */
  variant = "soft",
}) {
  const styles = variants[variant] ?? variants.soft;

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn
          className={`
            relative isolate overflow-hidden
            rounded-[var(--radius-xl)]
            border
            px-6 py-10
            sm:px-10 sm:py-12
            lg:px-14 lg:py-14
            ${styles.background}
            ${styles.border}
          `}
        >
          {/* --------------------------------
              Decorative atmosphere
          -------------------------------- */}

          <div
            aria-hidden="true"
            className={`
              pointer-events-none absolute
              -right-20 -top-20
              h-56 w-56
              rounded-full
              blur-3xl
              ${styles.decoration}
            `}
          />

          <div
            aria-hidden="true"
            className={`
              pointer-events-none absolute
              -bottom-24 left-1/3
              h-48 w-48
              rounded-full
              blur-3xl
              ${styles.decoration}
            `}
          />

          {/* --------------------------------
              Content
          -------------------------------- */}

          <div
            className="
              relative
              flex flex-col gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-12
            "
          >
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <p
                className="
                  text-xs font-semibold uppercase
                  tracking-[0.24em]
                  sm:text-sm sm:tracking-[0.3em]
                "
              >
                <span className={styles.eyebrow}>
                  {eyebrow}
                </span>
              </p>

              {/* Title */}
              <h2
                className={`
                  mt-4
                  text-3xl font-bold
                  leading-tight
                  tracking-[-0.025em]
                  sm:text-4xl
                  lg:text-5xl
                  ${styles.title}
                `}
              >
                {title}
              </h2>

              {/* Description */}
              {description && (
                <p
                  className={`
                    mt-5
                    max-w-xl
                    text-sm leading-7
                    sm:text-base sm:leading-8
                    ${styles.description}
                  `}
                >
                  {description}
                </p>
              )}
            </div>

            {/* --------------------------------
                Actions
            -------------------------------- */}

            <div
              className="
                flex shrink-0
                flex-col gap-3
                sm:flex-row sm:flex-wrap
                sm:gap-4
              "
            >
              {primaryLabel && (
                <CTAButton
                  to={primaryTo}
                  variant="primary"
                >
                  {primaryLabel}
                </CTAButton>
              )}

              {secondaryLabel && (
                <CTAButton
                  to={secondaryTo}
                  variant="secondary"
                >
                  {secondaryLabel}
                </CTAButton>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}