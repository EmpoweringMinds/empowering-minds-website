
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const DEFAULT_CONTENT = {
  eyebrow: "A LITTLE ABOUT US",
  heading: "Knowledge and skills are important. But they are not enough.",
  description:
    "You may have knowledge, qualifications, talent and ambition. But success also depends on how confidently you communicate, how effectively you interact with others and how you present your abilities.",
  supportingText:
    "We help individuals develop the confidence, behaviour and personal presence to put their potential into practice.",
  ctaLabel: "Discover Our Approach",
};

export default function AboutPreview({ data }) {
  const content = {
    ...DEFAULT_CONTENT,
    ...data,
  };

  return (
    <section className="academy-theme relative overflow-hidden bg-[var(--color-background)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid overflow-hidden rounded-[2rem] bg-[var(--color-soft-accent)] lg:grid-cols-[1.1fr_0.9fr]">

          {/* Main editorial statement */}
          <div className="relative flex min-h-[380px] flex-col justify-between overflow-hidden p-8 sm:p-12 lg:min-h-[500px] lg:p-16">
            <div className="relative z-10">
              <span className="mb-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                {content.eyebrow}
              </span>

              <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--color-secondary)] sm:text-5xl lg:text-6xl">
                {content.heading}
              </h2>
            </div>

            <div className="relative z-10 mt-12 flex items-end justify-between">
              <p className="max-w-xs text-sm font-medium leading-relaxed text-[var(--color-secondary)]/75">
                Practical. Personal. Outcome-focused.
              </p>

              <span className="select-none text-6xl font-black tracking-tighter text-[var(--color-primary)]/20 sm:text-8xl">
                EM.
              </span>
            </div>

            {/* Decorative organic shapes */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-[var(--color-primary)]/10 sm:h-80 sm:w-80"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[var(--color-olive)]/15"
            />
          </div>

          {/* Supporting introduction */}
          <div className="relative flex flex-col justify-center bg-[var(--color-surface-warm)] p-8 sm:p-12 lg:p-16">
            <span className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-olive)]">
              More than what you know
            </span>

            <p className="text-lg leading-relaxed text-[var(--color-secondary)] sm:text-xl">
              {content.description}
            </p>

            {content.supportingText && (
              <p className="mt-6 text-base leading-relaxed text-[var(--color-secondary)]/70">
                {content.supportingText}
              </p>
            )}

            <div className="mt-10">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {content.ctaLabel}
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-8 right-8 hidden h-20 w-20 rounded-full border border-[var(--color-olive)]/30 lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
