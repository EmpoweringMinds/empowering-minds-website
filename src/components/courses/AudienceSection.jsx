
import FadeIn from "../ui/FadeIn";

const audienceStyles = [
  {
    card: "bg-[var(--color-secondary)] text-white",
    number: "text-[var(--color-soft-accent)]",
    label: "text-[var(--color-soft-accent)]",
    description: "text-white/75",
    decoration: "border-white/10",
    image: "bg-white/10",
  },
  {
    card: "bg-[var(--color-soft-accent)] text-[var(--color-secondary)]",
    number: "text-[var(--color-primary)]",
    label: "text-[var(--color-secondary)]/65",
    description: "text-[var(--color-secondary)]/80",
    decoration: "border-[var(--color-secondary)]/15",
    image: "bg-white/30",
  },
  {
    card: "bg-[var(--color-olive)] text-white",
    number: "text-white/70",
    label: "text-white/75",
    description: "text-white/85",
    decoration: "border-white/15",
    image: "bg-white/10",
  },
  {
    card: "bg-[var(--color-surface-warm)] text-[var(--color-secondary)]",
    number: "text-[var(--color-primary)]",
    label: "text-[var(--color-primary)]",
    description: "text-[var(--color-text-secondary)]",
    decoration: "border-[var(--color-primary)]/20",
    image: "bg-white/50",
  },
];

export default function AudienceSection({ data }) {

  if (!data?.audienceCards?.length) return null;


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
                Who is this for?
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
                  There is room for everyone to grow
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

        {/* Audience profiles */}
        <div className="
          mt-8
          -mx-4 px-4
          overflow-x-auto overflow-y-hidden
          overscroll-x-contain
          snap-x snap-mandatory
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          sm:mx-0 sm:px-0
          sm:overflow-visible
          sm:snap-none
        ">
          <div className="
            flex gap-4
            sm:grid sm:grid-cols-2
            lg:grid-cols-3
          ">
            {data.audienceCards.map((audience, index) => {
              const style =
                audienceStyles[index % audienceStyles.length];

              return (
                <div
                  key={`${audience.title}-${index}`}
                  className="
                    w-full flex-shrink-0
                    snap-start
                    sm:w-auto sm:min-w-0
                  "
                >
                  <FadeIn delay={index * 0.06}>
                    <article className={`
                      group relative flex h-full
                      flex-col overflow-hidden
                      rounded-[1.75rem]
                      ${style.card}
                      transition-transform duration-300
                      hover:-translate-y-1
                    `}>
                      {/* Image */}
                      {audience.image && (
                        <div className={`
                          relative aspect-[16/9]
                          overflow-hidden ${style.image}
                        `}>
                          <img
                            src={audience.image}
                            alt={audience.title}
                            loading="lazy"
                            className="
                              h-full w-full object-cover
                              transition-transform duration-700
                              group-hover:scale-105
                            "
                          />

                          <span className="
                            absolute inset-0
                            bg-gradient-to-t
                            from-black/20 to-transparent
                          " />
                        </div>
                      )}

                      {/* Card content */}
                      <div className="
                        relative flex flex-1 flex-col
                        p-6 sm:p-7
                      ">
                        <div className="
                          flex items-center justify-between gap-4
                        ">
                          <span className={`
                            text-xs font-bold uppercase
                            tracking-[0.18em]
                            ${style.label}
                          `}>
                            Audience
                          </span>

                          <span className={`
                            font-heading text-3xl
                            font-bold opacity-70
                            ${style.number}
                          `}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="
                          mt-5 font-heading
                          text-2xl font-bold leading-tight
                          sm:text-[1.7rem]
                        ">
                          {audience.title}
                        </h3>

                        {audience.description && (
                          <p className={`
                            mt-4 text-sm leading-7
                            ${style.description}
                          `}>
                            {audience.description}
                          </p>
                        )}

                        <div className={`
                          mt-7 border-t pt-4
                          ${style.decoration}
                        `}>
                          <span className={`
                            text-xs font-semibold
                            uppercase tracking-[0.14em]
                            ${style.label}
                          `}>
                            Learn · Grow · Move forward
                          </span>
                        </div>
                      </div>

                      {/* Decorative circle */}
                      <span className={`
                        pointer-events-none absolute
                        -bottom-12 -right-12
                        h-28 w-28 rounded-full
                        border-[14px] opacity-20
                        ${style.decoration}
                      `} />
                    </article>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile swipe indicator */}
        <div className="
          mt-5 flex items-center justify-center gap-2
          text-xs font-semibold uppercase
          tracking-[0.14em]
          text-[var(--color-text-secondary)]
          sm:hidden
        ">
          <span>Swipe to explore</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </section>
  );
}
