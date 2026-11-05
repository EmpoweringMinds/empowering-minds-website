
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";


function StackedAreaCard({ card, index, total, progress }) {
  const start = index / total;
  const end = (index + 1) / total;

  const stackDepth = total - 1 - index;
  const finalY = -(stackDepth * 12);
  const finalScale = 1 - stackDepth * 0.025;

  const nextEnd = Math.min(1, end + 1 / total);

  const y = useTransform(
    progress,
    stackDepth > 0
      ? [start, end, nextEnd]
      : [start, end],
    stackDepth > 0
      ? [index === 0 ? "0%" : "105%", "0%", `${finalY}px`]
      : [index === 0 ? "0%" : "105%", "0%"]
  );

  const scale = useTransform(
    progress,
    stackDepth > 0
      ? [start, end, nextEnd]
      : [start, end],
    stackDepth > 0
      ? [index === 0 ? 1 : 0.94, 1, finalScale]
      : [index === 0 ? 1 : 0.94, 1]
  );

  return (
    <motion.article
      style={{
        y,
        scale,
        zIndex: index + 1,
      }}
      className="
        absolute left-1/2 top-1/2
        flex h-[min(68svh,34rem)]
        w-[88vw] max-w-lg
        -translate-x-1/2 -translate-y-1/2
        flex-col justify-center
        overflow-y-auto
        rounded-[1.75rem]
        border border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-7 shadow-[var(--shadow-lg)]
        sm:p-9
      "
    >
      <div className="mb-8 flex items-center justify-between">
            <div className="
            h-[var(--decorative-line-height)]
            w-12 rounded-full
            bg-[var(--color-primary)]" 
            />

            <span className="font-serif text-4xl font-semibold text-[var(--color-primary)] opacity-25">
            {String(index + 1).padStart(2, "0")}
            </span>
      </div>

      <h3 className="max-w-sm text-2xl font-bold leading-snug text-[var(--color-secondary)] sm:text-3xl">
            {card.title}
      </h3>

      <p className="mt-5 max-w-md text-sm leading-8 text-[var(--color-text-secondary)] sm:text-base">
            {card.description}
      </p>

      <div className="
        mt-8 flex items-center gap-2
        text-xs font-semibold uppercase
        tracking-[0.16em]
        text-[var(--color-primary)]"
        >
        <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
            Development area
      </div>
    </motion.article>
  );
}


export default function DevelopmentAreas({ data }) {
  const stackRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const cards = data?.areaCards || [];

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  if (!data) return null;

  return (
    <section
      id="development-areas"
      className="
        relative isolate overflow-clip
        bg-[var(--color-surface-warm)]
        py-20 sm:py-24 lg:py-28
      "
    >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <SectionHeader
                    title={data.heading}
                    description={data.description}
                    align="center"
                />
            </FadeIn>
        </div>

      {/* --------------------------------
          Mobile scroll-driven stack
      -------------------------------- */}

        {!shouldReduceMotion && cards.length > 0 && (
            <div
            ref={stackRef}
            className="relative mt-10 md:hidden"
            style={{
                height: `${100 + cards.length * 65}svh`,
            }}
            >
                <div className="sticky top-0 h-[100svh] overflow-hidden">
                    <div className="relative h-full w-full">
                        {cards.map((card, index) => (
                            <StackedAreaCard
                            key={`${card.title}-${index}`}
                            card={card}
                            index={index}
                            total={cards.length}
                            progress={scrollYProgress}
                            />
                        ))}
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                        <p className="
                            text-[10px] font-semibold uppercase
                            tracking-[0.2em]
                            text-[var(--color-text-muted)]
                        ">
                            Scroll to explore
                        </p>

                        <div className="
                            mx-auto mt-3 h-8 w-px
                            bg-[var(--color-primary)] opacity-50
                        " />
                    </div>
                </div>
            </div>
        )}

      {/* --------------------------------
          Reduced-motion mobile fallback
      -------------------------------- */}

        {shouldReduceMotion && (
            <div className="
            mt-10 grid gap-4 px-4 md:hidden
            ">
                {cards.map((card, index) => (
                    <article
                    key={`${card.title}-${index}`}
                    className="
                        rounded-2xl border
                        border-[var(--color-border)]
                        bg-[var(--color-surface)]
                        p-7 shadow-[var(--shadow-sm)]
                    "
                    >
                        <span className="
                            font-serif text-3xl
                            text-[var(--color-primary)] opacity-40
                        ">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="
                            mt-5 text-xl font-bold
                            text-[var(--color-secondary)]
                        ">
                            {card.title}
                        </h3>

                        <p className="
                            mt-3 text-sm leading-7
                            text-[var(--color-text-secondary)]
                        ">
                            {card.description}
                        </p>
                    </article>
                ))}
            </div>
        )}

      {/* --------------------------------
          Desktop grid
      -------------------------------- */}

      <div className="
        mx-auto mt-12 hidden max-w-7xl
        grid-cols-2 gap-5
        px-6 md:grid lg:grid-cols-3 lg:gap-6
      ">
            {cards.map((card, index) => (
            <FadeIn
                key={`${card.title}-${index}`}
                delay={index * 0.07}
            >
                <article className={`
                group h-full rounded-2xl border
                border-[var(--color-border)]
                p-8 transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[var(--shadow-md)]
                ${
                    index % 2 === 0
                    ? "bg-[var(--color-surface)]"
                    : "bg-[var(--color-background)]"
                }
                `}>
                    <span className="
                        font-serif text-4xl
                        text-[var(--color-primary)] opacity-25
                    ">
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="
                        mb-6 mt-5 h-[var(--decorative-line-height)]
                        w-10 rounded-full
                        bg-[var(--color-primary)]
                        transition-all duration-300
                        group-hover:w-16
                    " />

                    <h3 className="
                        text-xl font-bold leading-snug
                        text-[var(--color-secondary)]
                    ">
                        {card.title}
                    </h3>

                    <p className="
                        mt-4 text-sm leading-7
                        text-[var(--color-text-secondary)]
                        sm:text-base
                    ">
                        {card.description}
                    </p>
                </article>
            </FadeIn>
            ))}
        </div>
    </section>
  );
}
