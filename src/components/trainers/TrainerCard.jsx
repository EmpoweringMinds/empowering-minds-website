
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const surfaceStyles = {
  cream: {
    card: "bg-[var(--color-surface-warm)]",
    text: "text-[var(--color-secondary)]",
    muted: "text-[var(--color-secondary)]/75",
    accent: "text-[var(--color-primary)]",
    tag: "border-[var(--color-secondary)]/15 bg-[var(--color-background)]/50",
    button: "border-[var(--color-secondary)]/20 hover:bg-[var(--color-secondary)]/5",
  },
  blush: {
    card: "bg-[var(--color-soft-accent)]",
    text: "text-[var(--color-secondary)]",
    muted: "text-[var(--color-secondary)]/75",
    accent: "text-[var(--color-primary)]",
    tag: "border-[var(--color-secondary)]/15 bg-white/20",
    button: "border-[var(--color-secondary)]/20 hover:bg-white/20",
  },
  olive: {
    card: "bg-[var(--color-olive)]",
    text: "text-[var(--color-text-light)]",
    muted: "text-[var(--color-text-light)]/80",
    accent: "text-[var(--color-text-light)]",
    tag: "border-white/25 bg-white/10",
    button: "border-white/30 hover:bg-white/10",
  },
  brown: {
    card: "bg-[var(--color-secondary)]",
    text: "text-[var(--color-background)]",
    muted: "text-[var(--color-background)]/80",
    accent: "text-[var(--color-primary)]",
    tag: "border-white/20 bg-white/5",
    button: "border-white/25 hover:bg-white/10",
  },
};

export default function TrainerCard({
  trainer,
  expanded = false,
  onToggleExpand,
  profilePath,
  tone = "cream",
  orientation = "portrait",
}) {
  const styles = surfaceStyles[tone] || surfaceStyles.cream;

  const visibleExpertise = expanded
    ? trainer.expertise || []
    : trainer.expertise?.slice(0, 3) || [];

  const isLandscape = orientation === "landscape";

  return (
    <article
      className={`
        group flex h-full flex-col overflow-hidden
        rounded-[1.8rem]
        ${styles.card}
        ${isLandscape ? "lg:flex-row" : ""}
        transition-shadow duration-300
        hover:shadow-[var(--shadow-warm)]
      `}
    >
      {/* Portrait */}
      <div
        className={`
          relative shrink-0 overflow-hidden
          bg-[var(--color-surface-warm)]
          ${isLandscape
            ? "aspect-[5/4] lg:aspect-auto lg:w-[40%] lg:min-h-[340px]"
            : "aspect-[5/4]"}
        `}
      >
        <img
          src={trainer.image}
          alt={trainer.name}
          loading="lazy"
          className="
            h-full w-full object-cover object-top
            transition-transform duration-700
            group-hover:scale-[1.035]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t from-black/20 to-transparent
          "
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">

        {trainer.role && (
          <p className={`
            text-[10px] font-bold uppercase
            tracking-[0.2em] ${styles.accent}
          `}>
            {trainer.role}
          </p>
        )}

        <h3 className={`
          mt-2 font-heading text-2xl font-bold
          leading-tight tracking-tight
          sm:text-3xl ${styles.text}
        `}>
          {trainer.name}
        </h3>

        {trainer.designation && (
          <p className={`mt-2 text-sm leading-6 ${styles.muted}`}>
            {trainer.designation}
          </p>
        )}

        {/* Biography */}
        {trainer.bio && (
          <div className="mt-5">
            <p className={`
              text-sm leading-7 ${styles.muted}
              ${expanded ? "" : "line-clamp-3"}
            `}>
              {trainer.bio}
            </p>
          </div>
        )}

        {/* Expertise */}
        {visibleExpertise.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {visibleExpertise.map((item) => (
              <span
                key={item}
                className={`
                  rounded-full border px-3 py-1.5
                  text-[11px] font-semibold
                  ${styles.tag} ${styles.text}
                `}
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Expanded content */}
        <div className="mt-auto pt-7">
          {profilePath ? (
            <Link
              to={profilePath}
              className={`
                inline-flex items-center gap-2
                text-sm font-bold ${styles.text}
                transition-opacity hover:opacity-70
              `}
            >
              View profile
              <ArrowUpRight size={17} />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => onToggleExpand?.(trainer.id)}
              aria-expanded={expanded}
              className={`
                inline-flex items-center gap-2
                rounded-full border px-5 py-3
                text-sm font-bold ${styles.text}
                ${styles.button}
                transition-colors duration-200
              `}
            >
              {expanded ? "Show less" : "View full profile"}

              <ChevronDown
                size={17}
                className={`
                  transition-transform duration-300
                  ${expanded ? "rotate-180" : ""}
                `}
              />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
