import FadeIn from "./FadeIn";

const propStyles = {
  underline: `
    h-[var(--decorative-line-height)]
    w-[var(--decorative-line-width)]
    rounded-full
  `,

  dot: `
    h-[var(--decorative-dot-size)]
    w-[var(--decorative-dot-size)]
    rounded-full
  `,

  rule: `
    h-px
    w-16
  `,
};

const accentAlignments = {
  left: "mr-auto",
  center: "mx-auto",
  right: "ml-auto",
};

export default function SectionHeader({
  eyebrow,
  title,
  description,

  align = "left",

  /*
   * Decorative accent.
   * underline is the default.
   */
  prop = "underline",

  /*
   * Controls the position of the decorative accent
   * independently from text alignment.
   */
  accentAlign,

  titleClassName = "",

  light = false,
}) {
  const centered = align === "center";

  /*
   * If accentAlign isn't provided:
   * - centered text → centered accent
   * - otherwise → left accent
   */
  const resolvedAccentAlign =
    accentAlign ?? (centered ? "center" : "left");

  const headingColor = light
    ? "text-white"
    : "text-[var(--color-secondary)]";

  const eyebrowColor = light
    ? "text-[var(--color-soft-accent)]"
    : "text-[var(--color-primary)]";

  const descriptionColor = light
    ? "text-white/70"
    : "text-[var(--color-text-secondary)]";

  const propColor = light
    ? "bg-[var(--color-soft-accent)]"
    : "bg-[var(--color-primary)]";

  return (
    <FadeIn
      className={`
        max-w-3xl
        ${centered ? "mx-auto text-center" : ""}
      `}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <p
          className={`
            mb-4
            text-xs font-semibold uppercase
            tracking-[0.24em]
            sm:text-sm sm:tracking-[0.3em]
            ${eyebrowColor}
          `}
        >
          {eyebrow}
        </p>
      )}

      {/* Heading */}
      <h2
        className={`
          text-2xl font-bold
          leading-tight
          tracking-[-0.025em]
          sm:text-3xl
          lg:text-4xl
          ${headingColor}
          ${titleClassName}
        `}
      >
        {title}
      </h2>

      {/* Decorative accent */}
      {prop && propStyles[prop] && (
        <div
          aria-hidden="true"
          className={`
            mt-5
            ${propStyles[prop]}
            ${propColor}
            ${accentAlignments[resolvedAccentAlign]}
          `}
        />
      )}

      {/* Description */}
      {description && (
        <p
          className={`
            mt-5
            text-sm leading-7
            sm:text-base sm:leading-8
            lg:text-lg
            ${descriptionColor}
          `}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}