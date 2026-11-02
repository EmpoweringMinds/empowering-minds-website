import FadeIn from "./FadeIn";

const variants = {
  default: {
    card: `
      border border-[var(--color-border)]
      bg-[var(--color-surface)]
      shadow-[var(--shadow-sm)]
      hover:-translate-y-1
      hover:shadow-[var(--shadow-md)]
    `,
    icon: `
      bg-[var(--color-soft-accent)]
      text-[var(--color-secondary)]
    `,
    title: "text-[var(--color-secondary)]",
    description: "text-[var(--color-text-secondary)]",
  },

  minimal: {
    card: `
      bg-transparent
      hover:-translate-y-0.5
    `,
    icon: `
      bg-[var(--color-soft-accent)]
      text-[var(--color-secondary)]
    `,
    title: "text-[var(--color-secondary)]",
    description: "text-[var(--color-text-secondary)]",
  },

  featured: {
    card: `
      border border-[var(--color-primary)]/15
      bg-[var(--color-surface-warm)]
      shadow-[var(--shadow-md)]
      hover:-translate-y-1
      hover:shadow-[var(--shadow-warm)]
    `,
    icon: `
      bg-[var(--color-primary)]
      text-white
    `,
    title: "text-[var(--color-secondary)]",
    description: "text-[var(--color-text-secondary)]",
  },

  horizontal: {
    card: `
      border border-[var(--color-border)]
      bg-[var(--color-surface)]
      shadow-[var(--shadow-sm)]
      hover:-translate-y-1
      hover:shadow-[var(--shadow-md)]
    `,
    icon: `
      shrink-0
      bg-[var(--color-soft-accent)]
      text-[var(--color-secondary)]
    `,
    title: "text-[var(--color-secondary)]",
    description: "text-[var(--color-text-secondary)]",
  },
  academy: {
    card: `
      border border-[var(--color-border)]
      bg-[var(--color-surface)]
      shadow-[var(--shadow-sm)]
      hover:-translate-y-1
      hover:shadow-[var(--shadow-warm)]
    `,
    title: "text-[var(--color-secondary)]",
    description: "text-[var(--color-text-secondary)]",
  },

};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className = "",
  delay = 0,
  variant = "default",
  accent,
}) {
  const styles = variants[variant] ?? variants.default;

  const horizontal = variant === "horizontal";

  return (
    <FadeIn
      delay={delay}
      className={`
        h-full
        rounded-[var(--radius-lg)]
        p-6
        transition
        duration-[var(--transition-base)]
        ease-[var(--ease-brand)]
        sm:p-7
        ${styles.card}
        ${className}
      `}
    >
      <div
        className={`
          flex gap-4
          ${horizontal ? "items-start" : "flex-col"}
        `}
      >
        {Icon && (
          <div
            className={`
              flex h-12 w-12
              shrink-0
              items-center justify-center
              rounded-[var(--radius-md)]
              ${styles.icon}
              ${
              accent === "coral"
                ? "bg-[#F7E5DA] text-[#B96D4A]"
                : accent === "olive"
                  ? "bg-[#E8EBDD] text-[#697B59]"
                  : ""
            }
            `}
          >
            <Icon
              size={23}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>
        )}

        <div className={horizontal ? "min-w-0" : ""}>
          <h3
            className={`
              text-lg font-bold
              tracking-tight
              sm:text-xl
              text-center
              ${variant === "academy" ? "text-left" : "text-center"}
              ${styles.title}
            `}
          >
            {title}
          </h3>

          <p
            className={`
              mt-3
              text-sm leading-7
              ${styles.description}
            `}
          >
            {description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}