
import { ArrowUpRight, Check } from "lucide-react";
import CTAButton from "../ui/CTAButton";

const surfaceStyles = [
  "bg-[var(--color-surface-warm)]",
  "bg-[var(--color-soft-accent)]",
  "bg-[var(--color-background)]",
];

export default function ProgramCard({ program, index = 0, onEnquire }) {
  const {
    title,
    description,
    modules = [],
    ctaLabel = "Explore this service",
  } = program;

  const surface = surfaceStyles[index % surfaceStyles.length];

  return (
    <article
      className={`
        group relative flex h-full flex-col
        overflow-hidden rounded-[2rem]
        border border-[var(--color-border)]
        ${surface}
        p-6 sm:p-8 lg:p-9
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[var(--shadow-warm)]
      `}
    >
      {/* Decorative circle */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-12 -top-12
          h-40 w-40 rounded-full
          border-[24px] border-[var(--color-secondary)]/5
          transition-transform duration-500
          group-hover:scale-110
        "
      />

      {/* Card header */}
      <div className="relative flex items-start justify-between gap-4">
        <span className="
          text-5xl font-black tracking-tighter
          text-[var(--color-secondary)]/25
          sm:text-6xl
        ">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="
          rounded-full border border-[var(--color-border)]
          px-3 py-1.5 text-[10px]
          font-bold uppercase tracking-[0.16em]
          text-[var(--color-secondary)]
        ">
          Development Programme
        </span>
      </div>

      {/* Title and description */}
      <div className="relative mt-7">
        <h3 className="
          max-w-md text-2xl font-black
          leading-tight tracking-tight
          text-[var(--color-primary)]
          sm:text-3xl
        ">
          {title}
        </h3>

        <p className="
          mt-4 max-w-xl text-sm
          leading-7 text-[var(--color-text-secondary)]
          sm:text-base sm:leading-8
        ">
          {description}
        </p>
      </div>

      {/* Selected development areas */}
      {modules.length > 0 && (
        <div className="relative mt-7">
          <p className="
            text-[10px] font-bold uppercase
            tracking-[0.2em]
            text-[var(--color-secondary)]
          ">
            Areas of Development
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {modules.slice(0, 3).map((module) => (
              <span
                key={module}
                className="
                  inline-flex items-center gap-2
                  rounded-full border
                  border-[var(--color-border)]
                  bg-white/50 px-3 py-2
                  text-xs font-medium
                  leading-5 text-[var(--color-primary)]
                "
              >
                <Check
                  size={13}
                  className="shrink-0 text-[var(--color-secondary)]"
                />
                {module}
              </span>
            ))}

            {modules.length > 3 && (
              <span className="
                rounded-full px-3 py-2
                text-xs font-semibold
                text-[var(--color-secondary)]
              ">
                +{modules.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="flex relative mt-auto pt-4">
        <CTAButton
          onClick={() => onEnquire(program)}
          className="
            inline-flex w-full items-center
            justify-between gap-4
            rounded-full
            bg-[var(--color-primary)]
            px-6 py-4
            text-sm font-bold text-white
            transition-all duration-300
            hover:bg-[var(--color-secondary)]
            sm:w-auto sm:min-w-[230px]
          "
          showArrow = {true}
        >
          {ctaLabel}
        </CTAButton>
      </div>
    </article>
  );
}
