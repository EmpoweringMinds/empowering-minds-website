
import { aboutContent } from "../../data/siteContent";
import FadeIn from "../ui/FadeIn";

const cardStyles = [
  "bg-[var(--color-surface)] text-[var(--color-secondary)]",
  "bg-[var(--color-soft-accent)] text-[var(--color-secondary)]",
  "bg-[var(--color-olive)] text-white",
  "bg-[var(--color-surface)] text-[var(--color-secondary)]",
  "bg-[var(--color-primary)] text-white",
  "bg-[var(--color-secondary)] text-white",
];

const numberStyles = [
  "text-[var(--color-primary)]",
  "text-[var(--color-primary)]",
  "text-[var(--color-soft-accent)]",
  "text-[var(--color-primary)]",
  "text-[var(--color-soft-accent)]",
  "text-[var(--color-soft-accent)]",
];

export default function WhyEmpoweringMinds() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)] py-16 sm:py-20 lg:py-28">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Introduction */}
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">
                Our Difference
              </p>

              <h2 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-[var(--color-secondary)] sm:text-5xl lg:text-6xl">
                {aboutContent.whyTitle}
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg sm:leading-9 lg:pb-2">
              Our approach combines psychological foundations,
              structured development, and measurable performance
              to create lasting human capital impact.
            </p>

          </div>
        </FadeIn>

        {/* Principles */}
        <div className="mt-12 grid gap-3 sm:mt-16 sm:grid-cols-2 lg:grid-cols-6">

          {aboutContent.whyPoints.map((point, index) => {
            const isWide = index >= 4;

            return (
              <FadeIn
                key={point.title}
                delay={index * 0.06}
                className={isWide ? "lg:col-span-3" : "lg:col-span-3"}
              >
                <article
                  className={`group relative flex h-full min-h-[210px] flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1 sm:min-h-[240px] sm:p-8 ${cardStyles[index]}`}
                >

                  {/* Decorative number */}
                  <span
                    aria-hidden="true"
                    className={`absolute -right-3 -top-7 text-[8rem] font-black leading-none opacity-[0.09] transition-transform duration-500 group-hover:scale-110 ${numberStyles[index]}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">

                    <span
                      className={`text-sm font-bold tracking-widest ${numberStyles[index]}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-7 max-w-sm text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">
                      {point.title}
                    </h3>

                  </div>

                  <p className="relative z-10 mt-7 max-w-lg text-sm leading-7 opacity-80 sm:text-base">
                    {point.description}
                  </p>

                </article>
              </FadeIn>
            );
          })}

        </div>
      </div>
    </section>
  );
}
