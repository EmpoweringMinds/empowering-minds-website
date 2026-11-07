
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

import FadeIn from "../ui/FadeIn";


/* --------------------------------
   Card colour variations
-------------------------------- */

const cardVariants = [
  {
    card: "bg-[var(--color-secondary)]",
    heading: "text-[var(--color-text-light)]",
    description: "text-[var(--color-text-light)]/80",
    number: "text-[var(--color-primary)]/25",
    accent: "bg-[var(--color-primary)]",
    label: "text-[var(--color-primary)]",
    decoration: "border-white/10",
  },
  {
    card: "bg-[var(--color-surface)]",
    heading: "text-[var(--color-secondary)]",
    description: "text-[var(--color-text-secondary)]",
    number: "text-[var(--color-primary)]/20",
    accent: "bg-[var(--color-primary)]",
    label: "text-[var(--color-primary)]",
    decoration: "border-[var(--color-primary)]/10",
  },
  {
    card: "bg-[var(--color-soft-accent)]",
    heading: "text-[var(--color-secondary)]",
    description: "text-[var(--color-secondary)]/80",
    number: "text-[var(--color-secondary)]/10",
    accent: "bg-[var(--color-secondary)]",
    label: "text-[var(--color-secondary)]",
    decoration: "border-[var(--color-secondary)]/10",
  },
];


/* --------------------------------
   Mobile stacked card
-------------------------------- */

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

  const variant = cardVariants[index % cardVariants.length];

  return (
    <motion.article
      style={{
        y,
        scale,
        zIndex: index + 1,
      }}
      className={`
        absolute left-1/2 top-1/2
        flex h-[min(68svh,34rem)]
        w-[88vw] max-w-lg
        -translate-x-1/2 -translate-y-1/2
        flex-col justify-between
        overflow-y-auto
        overflow-x-clip
        rounded-[2rem]
        border border-[var(--color-border)]
        p-7 shadow-[var(--shadow-lg)]
        sm:p-9
        ${variant.card}
      `}
    >

      {/* Decorative background number */}
      <span
        aria-hidden="true"
        className={`
          pointer-events-none absolute -right-3 -top-8
          text-[9rem] font-extrabold leading-none
          ${variant.number}
        `}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10">

        <div className="mb-10 flex items-center justify-between">
          <div className={`
            h-1 w-12 rounded-full
            ${variant.accent}
          `} />

          <span className={`
            text-xs font-bold uppercase tracking-[0.16em]
            ${variant.label}
          `}>
            AREA {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className={`
          max-w-sm text-3xl font-extrabold
          leading-tight tracking-tight
          sm:text-4xl
          ${variant.heading}
        `}>
          {card.title}
        </h3>

        <p className={`
          mt-5 max-w-md text-sm leading-8
          sm:text-base
          ${variant.description}
        `}>
          {card.description}
        </p>

      </div>

      <div className={`
        relative z-10 mt-8 flex items-center gap-3
        border-t pt-5
        ${variant.decoration}
      `}>
        <span className={`
          h-2.5 w-2.5 rounded-full
          ${variant.accent}
        `} />

        <span className={`
          text-xs font-bold uppercase tracking-[0.16em]
          ${variant.label}
        `}>
          Personal development
        </span>
      </div>

    </motion.article>
  );
}


/* --------------------------------
   Main section
-------------------------------- */

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

      {/* --------------------------------
          Section introduction
      -------------------------------- */}

      <div className="
        relative mx-auto max-w-7xl
        px-4 sm:px-6 lg:px-8
      ">

        <FadeIn>
          <div className="
            relative grid items-stretch
            gap-6 md:grid-cols-[1fr_0.85fr]
            lg:gap-10
          ">

            {/* Heading */}
            <div className="
              relative flex flex-col justify-center
              overflow-hidden rounded-[2rem]
              bg-[var(--color-background)]
              p-8 sm:p-10 lg:p-12
            ">

              <div
                aria-hidden="true"
                className="
                  absolute -bottom-20 -right-16
                  h-56 w-56 rounded-full
                  border-[28px]
                  border-[var(--color-primary)]/10
                "
              />

              <div className="
                relative z-10 mb-7 flex items-center gap-3
              ">
                <span className="
                  h-[3px] w-10 rounded-full
                  bg-[var(--color-primary)]
                " />

                <span className="
                  text-xs font-bold uppercase
                  tracking-[0.18em]
                  text-[var(--color-primary)]
                ">
                  The foundation of growth
                </span>
              </div>

              <h2 className="
                relative z-10 max-w-xl
                text-4xl font-extrabold
                leading-[1.12] tracking-tight
                text-[var(--color-secondary)]
                sm:text-5xl lg:text-6xl
                [text-wrap:balance]
              ">
                {data.heading}
              </h2>

            </div>

            {/* Description */}
            <div className="
              relative flex flex-col justify-between
              overflow-hidden rounded-[2rem]
              bg-[var(--color-primary)]
              p-8 sm:p-10 lg:p-12
            ">

              <div
                aria-hidden="true"
                className="
                  absolute -right-16 -top-16
                  h-60 w-60 rounded-full
                  border-[32px] border-white/10
                "
              />

              <div className="relative z-10">

                <span className="
                  text-xs font-bold uppercase
                  tracking-[0.18em]
                  text-white/80
                ">
                  Discover your potential
                </span>

                <div className="
                  mt-8 text-5xl font-extrabold
                  leading-none text-white/60
                " aria-hidden="true">
                  “
                </div>

                <p className="
                  mt-2 text-base font-medium
                  leading-8 text-white
                  sm:text-lg sm:leading-9
                ">
                  {data.description}
                </p>

              </div>

              <div className="
                relative z-10 mt-8
                border-t border-white/30 pt-5
              ">
                <span className="
                  text-xs font-bold uppercase
                  tracking-[0.16em] text-white/80
                ">
                  Learn · Practise · Evolve
                </span>
              </div>

            </div>

          </div>
        </FadeIn>

      </div>


      {/* --------------------------------
          Mobile scroll-driven stack
      -------------------------------- */}

      {!shouldReduceMotion && cards.length > 0 && (
        <div
          ref={stackRef}
          className="relative mt-12 md:hidden"
          style={{
            height: `${100 + cards.length * 65}svh`,
          }}
        >
          <div className="
            sticky top-0 h-[100svh]
            overflow-hidden
          ">
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
            <div className="
              pointer-events-none absolute
              bottom-8 left-1/2 z-50
              -translate-x-1/2 text-center
            ">
              <p className="
                text-[10px] font-bold uppercase
                tracking-[0.2em]
                text-[var(--color-text-muted)]
              ">
                Scroll to explore
              </p>

              <div className="
                mx-auto mt-3 h-8 w-px
                bg-[var(--color-primary)] opacity-60
              " />
            </div>

          </div>
        </div>
      )}


      {/* --------------------------------
          Reduced-motion mobile fallback
      -------------------------------- */}

      {shouldReduceMotion && cards.length > 0 && (
        <div className="
          mt-10 grid gap-4 px-4
          sm:px-6 md:hidden
        ">
          {cards.map((card, index) => {
            const variant = cardVariants[index % cardVariants.length];

            return (
              <article
                key={`${card.title}-${index}`}
                className={`
                  relative overflow-hidden
                  rounded-[2rem] border
                  border-[var(--color-border)]
                  p-7 shadow-[var(--shadow-md)]
                  ${variant.card}
                `}
              >

                <span
                  aria-hidden="true"
                  className={`
                    pointer-events-none absolute
                    -right-3 -top-8
                    text-[8rem] font-extrabold
                    leading-none ${variant.number}
                  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">

                  <span className={`
                    text-xs font-bold uppercase
                    tracking-[0.16em]
                    ${variant.label}
                  `}>
                    AREA {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className={`
                    mt-6 text-2xl font-extrabold
                    leading-tight
                    ${variant.heading}
                  `}>
                    {card.title}
                  </h3>

                  <p className={`
                    mt-4 text-sm leading-8
                    ${variant.description}
                  `}>
                    {card.description}
                  </p>

                </div>

              </article>
            );
          })}
        </div>
      )}


      {/* --------------------------------
          Desktop feature cards
      -------------------------------- */}

      <div className="
        mx-auto mt-14 hidden max-w-7xl
        grid-cols-2 gap-5
        px-6 md:grid lg:grid-cols-3 lg:gap-6
        lg:px-8
      ">

        {cards.map((card, index) => {
          const variant = cardVariants[index % cardVariants.length];

          return (
            <FadeIn
              key={`${card.title}-${index}`}
              delay={index * 0.07}
            >
              <article className={`
                group relative flex h-full
                min-h-[340px] flex-col
                justify-between overflow-hidden
                rounded-[2rem] border
                border-[var(--color-border)]
                p-8 transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[var(--shadow-lg)]
                lg:p-9
                ${variant.card}
              `}>

                {/* Oversized decorative number */}
                <span
                  aria-hidden="true"
                  className={`
                    pointer-events-none absolute
                    -right-4 -top-8
                    text-[10rem] font-extrabold
                    leading-none tracking-tighter
                    transition-transform duration-500
                    group-hover:-translate-y-2
                    ${variant.number}
                  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Top content */}
                <div className="relative z-10">

                  <div className="
                    flex items-center justify-between
                  ">
                    <span className={`
                      text-xs font-bold uppercase
                      tracking-[0.18em]
                      ${variant.label}
                    `}>
                      DEVELOPMENT AREA
                    </span>

                    <span className={`
                      flex h-10 w-10 items-center
                      justify-center rounded-full
                      border ${variant.decoration}
                    `}>
                      <span className={`
                        h-2.5 w-2.5 rounded-full
                        ${variant.accent}
                      `} />
                    </span>
                  </div>

                  <div className={`
                    mb-7 mt-12 h-1 w-12
                    rounded-full transition-all
                    duration-300 group-hover:w-20
                    ${variant.accent}
                  `} />

                  <h3 className={`
                    max-w-sm text-2xl
                    font-extrabold leading-tight
                    tracking-tight
                    lg:text-3xl
                    ${variant.heading}
                  `}>
                    {card.title}
                  </h3>

                  <p className={`
                    mt-5 max-w-md text-sm
                    leading-8 lg:text-base
                    ${variant.description}
                  `}>
                    {card.description}
                  </p>

                </div>

                {/* Bottom decoration */}
                <div className={`
                  relative z-10 mt-8
                  flex items-center justify-between
                  border-t pt-5
                  ${variant.decoration}
                `}>

                  <span className={`
                    text-xs font-bold uppercase
                    tracking-[0.14em]
                    ${variant.label}
                  `}>
                    Area {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={`
                    text-lg transition-transform
                    duration-300 group-hover:translate-x-1
                    ${variant.label}
                  `} aria-hidden="true">
                    →
                  </span>

                </div>

              </article>
            </FadeIn>
          );
        })}

      </div>

    </section>
  );
}
