
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
    <section
      className="
        relative overflow-clip
        bg-[var(--color-surface)]
        min-h-[75svh] lg:min-h-[85svh]
        flex items-center justify-center
        py-20 sm:py-24
      "
    >
      <motion.div
        className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 md:hidden"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={transition}
      >
        <div className="mx-auto mb-10 h-[var(--decorative-line-height)]
          w-[var(--decorative-line-width)]
          rounded-full bg-[var(--color-primary)]"
        />

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60 || info.velocity.x < -400) {
              setShowDescription(true);
            }

            if (info.offset.x > 60 || info.velocity.x > 400) {
              setShowDescription(false);
            }
          }}
          onClick={toggleView}
          className="
            relative min-h-[260px] sm:min-h-[300px]
            flex items-center justify-center
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
                  x: 70,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? {} : {
                  opacity: 0,
                  x: -70,
                }}
                transition={transition}
                className="w-full"
              >
                <h2 className="
                  text-4xl font-bold leading-tight
                  text-center
                  text-[var(--color-secondary)]
                  sm:text-5xl lg:text-6xl
                ">
                  {data.heading}
                </h2>
              </motion.div>
            ) : (
              <motion.div
                key="description"
                initial={shouldReduceMotion ? false : {
                  opacity: 0,
                  x: 70,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? {} : {
                  opacity: 0,
                  x: -70,
                }}
                transition={transition}
                className="w-full"
              >
                <p className="
                  mx-auto max-w-3xl
                  text-center text-lg leading-9
                  text-[var(--color-text-secondary)]
                  sm:text-xl
                ">
                  {data.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <button
          type="button"
          onClick={toggleView}
          className="
            mx-auto mt-8 flex items-center gap-3
            text-sm font-medium
            text-[var(--color-primary)]
          "
          aria-label={
            showDescription
              ? "Show heading"
              : "Read introduction"
          }
        >
          <span>{showDescription ? "Back to heading" : "Explore introduction"}</span>
          <span aria-hidden="true">
            {showDescription ? "←" : "→"}
          </span>
        </button>
      </motion.div>

      <div className="
        mx-auto max-w-7xl
        px-4 sm:px-6 lg:px-8
      ">
        <FadeIn>
          <div className="
            hidden md:grid
            md:grid-cols-[0.9fr_1.1fr]
            md:gap-16 lg:gap-24
            md:items-center
            min-h-[380px] lg:min-h-[440px]
          ">
            {/* Left: Heading */}
            <div className="bg-[var(--color-surface-warm)]">
              <div
                aria-hidden="true"
                className="
                  mb-8 h-[var(--decorative-line-height)]
                  w-[var(--decorative-line-width)]
                  rounded-full bg-[var(--color-primary)]
                "
              />

              <h2 className="
                max-w-lg
                text-3xl font-bold leading-tight
                tracking-tight
                text-[var(--color-secondary)]
                sm:text-4xl lg:text-5xl
              ">
                {data.heading}
              </h2>
            </div>

            {/* Right: Description */}
            <div className="
              flex items-center
              border-l border-[var(--color-primary)]/30
              pl-8 lg:pl-14
              min-h-[180px]
            ">
              <p className="
                max-w-xl
                text-base leading-8
                text-[var(--color-text-secondary)]
                sm:text-lg sm:leading-9
              ">
                {data.description}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
