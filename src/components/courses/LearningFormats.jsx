
import FadeIn from "../ui/FadeIn";
import * as Icons from "lucide-react";

const formatStyles = [
  {
    card: "bg-[var(--color-secondary)] text-white",
    icon: "bg-white/10 text-[var(--color-soft-accent)]",
    number: "text-[var(--color-soft-accent)]",
    description: "text-white/75",
    decoration: "border-white/15",
  },
  {
    card: "bg-[var(--color-soft-accent)] text-[var(--color-secondary)]",
    icon: "bg-white/40 text-[var(--color-secondary)]",
    number: "text-[var(--color-primary)]",
    description: "text-[var(--color-secondary)]/80",
    decoration: "border-[var(--color-secondary)]/15",
  },
  {
    card: "bg-[var(--color-olive)] text-white",
    icon: "bg-white/15 text-white",
    number: "text-white/70",
    description: "text-white/85",
    decoration: "border-white/20",
  },
  {
    card: "bg-[var(--color-surface-warm)] text-[var(--color-secondary)]",
    icon: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
    number: "text-[var(--color-primary)]",
    description: "text-[var(--color-text-secondary)]",
    decoration: "border-[var(--color-primary)]/20",
  },
];

export default function LearningFormats({ data }) {
  if (!data?.formatCards?.length) return null;

  return (
    <section className="
      relative overflow-hidden
      bg-[var(--color-background)]
      py-16 sm:py-24 lg:py-28
    ">
      <div className="
        relative z-10 mx-auto max-w-6xl
        px-4 sm:px-6 lg:px-8
      ">
        {/* Editorial introduction */}
        <FadeIn>
          <div className="
            grid gap-0 overflow-hidden
            rounded-[2rem]
            lg:grid-cols-[1fr_0.85fr]
          ">
            <div className="
              relative overflow-hidden
              bg-[var(--color-surface-warm)]
              p-7 sm:p-10 lg:p-12
            ">
              <span className="
                relative z-10
                text-xs font-bold uppercase
                tracking-[0.2em]
                text-[var(--color-primary)]
              ">
                Different ways to learn
              </span>

              <h2 className="
                relative z-10 mt-5 max-w-xl
                font-heading text-3xl font-bold
                leading-tight tracking-tight
                text-[var(--color-secondary)]
                sm:text-4xl lg:text-5xl
              ">
                {data.heading}
              </h2>

              <span className="
                pointer-events-none absolute
                -bottom-16 -right-8
                h-48 w-48 rounded-full
                border-[22px]
                border-[var(--color-soft-accent)]/30
                sm:h-64 sm:w-64
              " />
            </div>

            <div className="
              relative flex flex-col justify-between
              bg-[var(--color-primary)]
              p-7 sm:p-10 lg:p-12
            ">
              <p className="
                max-w-lg text-base leading-8
                text-white/90 sm:text-lg
              ">
                {data.description}
              </p>

              <div className="
                mt-8 flex items-center gap-3
                border-t border-white/30 pt-5
              ">
                <span className="
                  h-2.5 w-2.5 rounded-full
                  bg-[var(--color-soft-accent)]
                " />
                <span className="
                  text-xs font-semibold uppercase
                  tracking-[0.16em] text-white
                ">
                  Find a format that works for you
                </span>
              </div>

              <span className="
                pointer-events-none absolute
                -right-8 -top-10
                h-32 w-32 rounded-full
                border-[18px] border-white/10
              " />
            </div>
          </div>
        </FadeIn>

        {/* Learning format cards */}
        <div className="
          mt-6 grid grid-cols-2 gap-3
          sm:mt-8 sm:gap-4
          lg:grid-cols-3
        ">
          {data.formatCards.map((format, index) => {
            const Icon = Icons[format.iconName] || Icons.Layers;
            const style = formatStyles[index % formatStyles.length];

            return (
              <FadeIn
                key={`${format.title}-${index}`}
                delay={index * 0.05}
              >
                <article className={`
                  group relative flex h-full
                  flex-col overflow-hidden
                  rounded-2xl p-4
                  transition-all duration-300
                  hover:-translate-y-1
                  sm:rounded-[1.75rem] sm:p-7
                  ${style.card}
                `}>
                  {/* Icon and number */}
                  <div className="
                    flex items-start justify-between
                    gap-2
                  ">
                    <div className={`
                      flex h-10 w-10 shrink-0
                      items-center justify-center
                      rounded-xl sm:h-14 sm:w-14
                      sm:rounded-2xl
                      ${style.icon}
                    `}>
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                      />
                    </div>

                    <span className={`
                      font-heading text-xl
                      font-bold opacity-70
                      sm:text-3xl
                      ${style.number}
                    `}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-5 sm:mt-8">
                    <h3 className="
                      font-heading text-base
                      font-bold leading-snug
                      sm:text-xl lg:text-2xl
                    ">
                      {format.title}
                    </h3>

                    {format.description && (
                      <p className={`
                        mt-2 text-xs leading-6
                        sm:mt-3 sm:text-sm sm:leading-7
                        ${style.description}
                      `}>
                        {format.description}
                      </p>
                    )}
                  </div>

                  {/* Decorative detail */}
                  <div className={`
                    mt-5 border-t pt-3
                    sm:mt-7 sm:pt-4
                    ${style.decoration}
                  `}>
                    <span className={`
                      text-[9px] font-semibold
                      uppercase tracking-[0.12em]
                      sm:text-[10px]
                      ${style.number}
                    `}>
                      Learning format
                    </span>
                  </div>

                  <span className={`
                    pointer-events-none absolute
                    -bottom-10 -right-10
                    h-24 w-24 rounded-full
                    border-[12px] opacity-20
                    sm:h-32 sm:w-32
                    ${style.decoration}
                  `} />
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
