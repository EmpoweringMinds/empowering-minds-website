
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import FadeIn from "../ui/FadeIn";

export default function CoursesIntroduction({ data }) {
  const [showDescription, setShowDescription] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  if (!data) return null;

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.65, ease: [0.22, 1, 0.36, 1] };

  const toggleView = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <section className="
      relative isolate overflow-hidden
      bg-[var(--color-surface-warm)]
      py-16 sm:py-20 lg:py-28
    ">

      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-20 -top-24
          h-64 w-64 rounded-full
          border-[30px] border-[var(--color-primary)]/10
          sm:h-80 sm:w-80
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -bottom-20 -left-16
          h-56 w-56 rounded-full
          bg-[var(--color-soft-accent)]/40
          blur-2xl
        "
      />

      <div className="
        relative mx-auto max-w-7xl
        px-4 sm:px-6 lg:px-8
      ">

        {/* --------------------------------
            MOBILE PRESENTATION
        -------------------------------- */}

        <motion.div
          className="mx-auto max-w-xl md:hidden"
          initial={shouldReduceMotion ? false : {
            opacity: 0,
            y: 35,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={transition}
        >

          {/* Section label */}
          <div className="mb-7 flex items-center gap-3">
            <span className="
              h-[3px] w-10 rounded-full
              bg-[var(--color-primary)]
            " />

            <span className="
              text-xs font-bold uppercase
              tracking-[0.18em]
              text-[var(--color-primary)]
            ">
              YOUR NEXT CHAPTER STARTS HERE
            </span>
          </div>

          {/* Interactive content */}
          <div className={`
            relative overflow-hidden rounded-[2rem]
            border border-[var(--color-border)]
            shadow-[var(--shadow-md)]
            transition-colors duration-300
            ${
              showDescription
                ? "bg-[var(--color-secondary)]"
                : "bg-[var(--color-surface)]"
            }
          `}>

            {/* Decorative circle */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute -right-12 -top-12
                h-40 w-40 rounded-full
                border-[18px] border-[var(--color-primary)]/15
              "
            />

            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (
                  info.offset.x < -60 ||
                  info.velocity.x < -400
                ) {
                  setShowDescription(true);
                }

                if (
                  info.offset.x > 60 ||
                  info.velocity.x > 400
                ) {
                  setShowDescription(false);
                }
              }}
              className="
                relative flex min-h-[320px]
                items-center justify-center
                overflow-hidden p-7 sm:min-h-[360px] sm:p-10
                cursor-grab active:cursor-grabbing
                touch-pan-y select-none
              "
            >
              <AnimatePresence mode="wait">
                {!showDescription ? (
                  <motion.div
                    key="heading"
                    initial={shouldReduceMotion ? false : {
                      opacity: 0,
                      x: 50,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={shouldReduceMotion ? {} : {
                      opacity: 0,
                      x: -50,
                    }}
                    transition={transition}
                    className="relative z-10 w-full"
                  >

                    <h2 className="
                      text-4xl font-extrabold
                      leading-[1.12] tracking-tight
                      text-[var(--color-secondary)]
                      sm:text-5xl
                      [text-wrap:balance]
                    ">
                      {data.heading}
                    </h2>

                    <div className="
                      mt-7 h-1.5 w-16 rounded-full
                      bg-[var(--color-primary)]
                    " />
                  </motion.div>
                ) : (
                  <motion.div
                    key="description"
                    initial={shouldReduceMotion ? false : {
                      opacity: 0,
                      x: 50,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={shouldReduceMotion ? {} : {
                      opacity: 0,
                      x: -50,
                    }}
                    transition={transition}
                    className="relative z-10 w-full"
                  >

                    <p className="
                      text-base leading-8
                      text-[var(--color-text-light)]
                      sm:text-lg sm:leading-9
                    ">
                      {data.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Swipe indicator */}
            <div className="
              relative flex items-center justify-between
              border-t border-[var(--color-border)]/40
              px-6 py-4
            ">

              <button
                type="button"
                onClick={toggleView}
                className="
                  flex items-center gap-2
                  text-sm font-bold
                  text-[var(--color-primary)]
                "
                aria-label={
                  showDescription
                    ? "Show heading"
                    : "Read introduction"
                }
              >
                {showDescription ? "Back" : "Swipe to read more"}
                <span aria-hidden="true">
                  {showDescription ? "←" : "→"}
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* --------------------------------
            DESKTOP PRESENTATION
        -------------------------------- */}

        <div className="hidden md:block">
          <FadeIn>
            <div className="
              relative grid items-stretch
              gap-8 lg:grid-cols-[1fr_0.95fr]
              lg:gap-12
            ">

              {/* Heading panel */}
              <div className="
                relative flex min-h-[440px]
                flex-col justify-center
                overflow-hidden rounded-[2rem]
                bg-[var(--color-background)]
                p-10 lg:p-14
              ">

                {/* Decorative circle */}
                <div
                  aria-hidden="true"
                  className="
                    absolute -bottom-24 -right-20
                    h-72 w-72 rounded-full
                    border-[35px]
                    border-[var(--color-primary)]/10
                  "
                />

                <div className="relative z-10">

                  <div className="mb-9 flex items-center gap-3">
                    <span className="
                      h-[3px] w-12 rounded-full
                      bg-[var(--color-primary)]
                    " />
                    <span className="
                      text-xs font-bold uppercase
                      tracking-[0.2em]
                      text-[var(--color-primary)]
                    ">
                      Learn · Grow · Evolve
                    </span>
                  </div>

                  <h2 className="
                    max-w-xl
                    text-5xl font-extrabold
                    leading-[1.1] tracking-tight
                    text-[var(--color-secondary)]
                    lg:text-5xl xl:text-6xl
                    [text-wrap:balance]
                  ">
                    {data.heading}
                  </h2>

                </div>
              </div>

              {/* Description panel */}
              <div className="
                relative flex min-h-[440px]
                flex-col justify-between
                overflow-hidden rounded-[2rem]
                bg-[var(--color-secondary)]
                p-10 lg:p-12
              ">

                {/* Decorative circles */}
                <div
                  aria-hidden="true"
                  className="
                    absolute -right-16 -top-16
                    h-64 w-64 rounded-full
                    border-[35px]
                    border-[var(--color-primary)]/20
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute -bottom-16 -left-16
                    h-52 w-52 rounded-full
                    bg-[var(--color-primary)]/10
                    blur-2xl
                  "
                />

                <div className="relative z-10">

                  <div className="
                    mt-10 text-5xl font-extrabold
                    leading-none text-[var(--color-primary)]
                    opacity-90
                  " aria-hidden="true">
                    “
                  </div>

                  <p className="
                    mt-2 max-w-xl
                    text-lg font-medium leading-9
                    text-[var(--color-text-light)]
                    lg:text-xl lg:leading-10
                  ">
                    {data.description}
                  </p>

                </div>

                <div className="
                  relative z-10 mt-10
                  flex items-center justify-end gap-4
                  border-t border-white/20 pt-6
                ">
                    <span className="
                      h-2.5 w-2.5 rounded-full
                      bg-[var(--color-primary)]
                    " />
                  <span className="
                    text-xs font-semibold uppercase
                    tracking-[0.16em]
                    text-white/70
                  ">
                    Personal growth starts here
                  </span>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
