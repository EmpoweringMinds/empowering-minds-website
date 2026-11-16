
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "../ui/FadeIn";

export default function AboutPreview({ data }) {
  if (!data) return null;

  return (
    <section
      className="
        academy-theme relative isolate overflow-hidden
        bg-[var(--color-background)]
        py-20 sm:py-24 lg:py-32
      "
    >
      {/* Ambient decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 top-10
          h-80 w-80 rounded-full
          border border-[var(--color-olive)]/15
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section composition */}
        <div
          className="
            relative grid overflow-hidden
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* Editorial statement */}
          <FadeIn>
            <div
              className="
                relative flex min-h-[440px]
                flex-col justify-between
                overflow-hidden
                bg-[var(--color-soft-accent)]
                p-8 sm:p-12
                lg:min-h-[540px] lg:p-16
              "
            >
              {/* Eyebrow */}
              <div className="relative z-10">
                <span
                  className="
                    inline-flex items-center gap-3
                    text-xs font-bold uppercase
                    tracking-[0.2em]
                    text-[var(--color-primary)]
                  "
                >
                  <span className="h-[2px] w-8 bg-[var(--color-primary)]" />
                  {data.eyebrow}
                </span>

                {/* Main heading */}
                <h2
                  className="
                    mt-12 max-w-[650px]
                    text-5xl font-extrabold
                    leading-[0.98]
                    tracking-[-0.045em]
                    text-[var(--color-secondary)]
                    sm:text-6xl
                    lg:mt-16 lg:text-7xl
                  "
                >
                  {data.heading}
                </h2>
              </div>

              {/* Bottom statement */}
              <div className="relative z-10 mt-14">
                <div
                  aria-hidden="true"
                  className="
                    mb-5 h-1 w-14
                    rounded-full
                    bg-[var(--color-primary)]
                  "
                />

                <p
                  className="
                    max-w-xs
                    text-sm font-semibold
                    leading-relaxed
                    text-[var(--color-secondary)]/80
                    sm:text-base
                  "
                >
                  Practical. Personal. Outcome-focused.
                </p>
              </div>

              {/* Oversized watermark */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -bottom-12 -right-4
                  select-none
                  text-[11rem] font-black
                  leading-none tracking-[-0.1em]
                  text-[var(--color-primary)]/10
                  sm:text-[15rem]
                  lg:-bottom-20 lg:-right-8
                  lg:text-[19rem]
                "
              >
                EM
              </span>

              {/* Organic circle */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -right-24 -top-24
                  h-64 w-64 rounded-full
                  border-[30px]
                  border-[var(--color-primary)]/10
                  sm:h-80 sm:w-80
                "
              />

              {/* Olive accent */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  bottom-20 right-[30%]
                  h-20 w-20 rounded-full
                  bg-[var(--color-olive)]/15
                "
              />
            </div>
          </FadeIn>

          {/* Supporting narrative */}
          <FadeIn delay={0.15}>
            <div
              className="
                relative flex min-h-[440px]
                flex-col justify-center
                overflow-hidden
                bg-[var(--color-surface-warm)]
                p-8 sm:p-12
                lg:min-h-[540px] lg:p-16
              "
            >
              <div className="relative z-10">

                {/* Supporting eyebrow */}
                <span
                  className="
                    inline-flex items-center gap-3
                    text-xs font-bold uppercase
                    tracking-[0.18em]
                    text-[var(--color-olive)]
                    sm:text-sm
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--color-olive)]" />
                  More than what you know
                </span>

                {/* Main description */}
                <p
                  className="
                    mt-9 max-w-lg
                    text-xl font-semibold
                    leading-[1.55]
                    text-[var(--color-secondary)]
                    sm:text-2xl
                    lg:text-[1.8rem]
                    lg:leading-[1.5]
                  "
                >
                  {data.description}
                </p>

                {/* Supporting text */}
                {data.supportingText && (
                  <p
                    className="
                      mt-7 max-w-md
                      text-base leading-8
                      text-[var(--color-secondary)]/70
                      sm:text-lg
                    "
                  >
                    {data.supportingText}
                  </p>
                )}

                {/* CTA */}
                <div className="mt-10">
                  <Link
                    to="/about"
                    className="
                      group inline-flex items-center gap-4
                      rounded-full
                      bg-[var(--color-primary)]
                      px-7 py-4
                      text-sm font-bold text-white
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                    "
                  >
                    {data.ctaLabel}

                    <ArrowUpRight
                      size={19}
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </Link>
                </div>
              </div>

              {/* Decorative ring */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -bottom-16 -right-16
                  h-56 w-56 rounded-full
                  border-[24px]
                  border-[var(--color-olive)]/10
                "
              />

              {/* Small decorative detail */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  right-12 top-12
                  hidden h-12 w-12
                  rounded-full
                  border border-[var(--color-primary)]/20
                  lg:block
                "
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
