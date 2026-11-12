
import FadeIn from "./FadeIn";

const propStyles = {
  underline: `
    h-[5px]
    w-20
    rounded-full
  `,
  dot: `
    h-3.5
    w-3.5
    rounded-full
  `,
  rule: `
    h-[2px]
    w-24
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
  prop = "underline",
  accentAlign,
  titleClassName = "",
  light = false,
}) {
  const centered = align === "center";

  const resolvedAccentAlign =
    accentAlign ?? (centered ? "center" : "left");

  const headingColor = light
    ? "text-white"
    : "text-[var(--color-secondary)]";

  const eyebrowColor = light
    ? "text-[var(--color-soft-accent)]"
    : "text-[var(--color-primary)]";

  const descriptionColor = light
    ? "text-white/80"
    : "text-[var(--color-text-secondary)]";

  const propColor = light
    ? "bg-[var(--color-soft-accent)]"
    : "bg-[var(--color-primary)]";

  return (
    <FadeIn
      className={`
        w-full max-w-3xl
        ${centered ? "mx-auto text-center" : ""}
      `}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <div
          className={`
            mb-4
            flex items-center gap-2.5
            ${centered ? "justify-center" : ""}
          `}
        >
          <span
            aria-hidden="true"
            className={`
              h-2 w-2 shrink-0 rounded-full
              ${light
                ? "bg-[var(--color-soft-accent)]"
                : "bg-[var(--color-primary)]"}
            `}
          />

          <p
            className={`
              text-xs font-bold uppercase
              tracking-[0.18em]
              sm:text-sm sm:tracking-[0.22em]
              ${eyebrowColor}
            `}
          >
            {eyebrow}
          </p>
        </div>
      )}

      {/* Heading */}
      <h2
        className={`
          font-heading
          text-3xl font-bold
          leading-[1.1]
          tracking-[-0.04em]
          sm:text-4xl
          lg:text-[2.85rem]
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
            mt-6
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
            mt-5 max-w-2xl
            text-sm leading-7
            sm:text-base sm:leading-8
            ${descriptionColor}
            ${centered ? "mx-auto" : ""}
          `}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
