
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Brain,
  BriefcaseBusiness,
  HeartHandshake,
  Network,
  ArrowDown,
} from "lucide-react";

/* --------------------------------
   Development area content
-------------------------------- */

const developmentAreas = [
  {
    number: "01",
    icon: Brain,
    title: "Mindset & Performance",
    description:
      "Building emotional regulation, resilience, focus, confidence, and the ability to sustain performance under pressure.",
    category: "Personal effectiveness",
    card: "bg-[var(--color-secondary)]",
    foreground: "text-[var(--color-background)]",
    accent: "bg-[var(--color-primary)]",
    label: "text-[var(--color-primary)]",
    numberColor: "text-[var(--color-primary)]/20",
    border: "border-white/15",
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "Professional & Corporate Skills",
    description:
      "Strengthening communication, workplace effectiveness, professional behaviour, and practical skills for modern organisations.",
    category: "Professional capability",
    card: "bg-[var(--color-primary)]",
    foreground: "text-[var(--color-text-light)]",
    accent: "bg-white",
    label: "text-white",
    numberColor: "text-white/15",
    border: "border-white/25",
  },
  {
    number: "03",
    icon: Network,
    title: "Cognitive & Leadership Development",
    description:
      "Developing decision-making, leadership maturity, strategic thinking, and the cognitive capabilities needed for effective performance.",
    category: "Leadership & thinking",
    card: "bg-[var(--color-olive)]",
    foreground: "text-white",
    accent: "bg-[var(--color-soft-accent)]",
    label: "text-white",
    numberColor: "text-white/15",
    border: "border-white/20",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Interpersonal & Instructional Techniques",
    description:
      "Improving interpersonal effectiveness, communication, classroom engagement, and practical approaches to learning and development.",
    category: "People & learning",
    card: "bg-[var(--color-soft-accent)]",
    foreground: "text-[var(--color-text-primary)]",
    accent: "bg-[var(--color-primary)]",
    label: "text-[var(--color-primary)]",
    numberColor: "text-[var(--color-secondary)]/10",
    border: "border-[var(--color-secondary)]/15",
  },
];

/* --------------------------------
   Individual stacked card
-------------------------------- */

function StackedAreaCard({
  area,
  index,
  total,
  progress,
}) {
  const Icon = area.icon;

  
  const start = index / total;
  const end = (index + 1) / total;

  const nextEnd = Math.min(1, end + 1 / total);

  // First card starts in position.
  // All subsequent cards enter from below.
  const y = useTransform(
    progress,
    index === 0
      ? [start, end, nextEnd]
      : end < 1
        ? [start, end, nextEnd]
        : [start, end],
    index === 0
      ? ["0%", "0%", "-14px"]
      : end < 1
        ? ["105%", "0%", "-14px"]
        : ["105%", "0%"]
  );

  const scale = useTransform(
    progress,
    index === 0
      ? [start, end, nextEnd]
      : end < 1
        ? [start, end, nextEnd]
        : [start, end],
    index === 0
      ? [1, 1, 0.975]
      : end < 1
        ? [0.94, 1, 0.975]
        : [0.94, 1]
  );

  return (
    <motion.article
      style={{
        x: "-50%",
        y,
        scale,
        zIndex: index + 1,
      }}
      className={`
        absolute left-1/2 top-1/2
        flex h-[min(68svh,34rem)]
        min-h-[22rem]
        w-[92%] max-w-5xl
        -translate-y-1/2
        flex-col justify-between
        overflow-hidden
        rounded-[2rem] sm:rounded-[2.5rem]
        border ${area.border}
        p-6 sm:p-9 lg:p-12
        shadow-[var(--shadow-lg)]
        ${area.card}
        ${area.foreground}
      `}
    >
      {/* Oversized decorative number */}
      <span
        aria-hidden="true"
        className={`
          pointer-events-none absolute
          -right-5 -top-10
          text-[11rem] font-black
          leading-none tracking-tighter
          sm:text-[16rem] lg:text-[20rem]
          ${area.numberColor}
        `}
      >
        {area.number}
      </span>

      {/* Card content */}
      <div className="relative z-10">

        {/* Top row */}
        <div className="flex items-center justify-between gap-4">
          <span className={`
            text-[10px] font-bold uppercase
            tracking-[0.2em] sm:text-xs
            ${area.label}
          `}>
            Development Area
          </span>

          <div className="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-full bg-white/15
            sm:h-14 sm:w-14
          ">
            <Icon size={24} strokeWidth={1.7} />
          </div>
        </div>

        {/* Accent */}
        <div className={`
          mt-8 h-1 w-12 rounded-full
          sm:mt-10 sm:w-16
          ${area.accent}
        `} />

        {/* Heading and description */}
        <div className="mt-6 max-w-2xl sm:mt-8">
          <h3 className="
            text-2xl font-black
            leading-tight tracking-tight
            sm:text-3xl lg:text-5xl
            [text-wrap:balance]
          ">
            {area.title}
          </h3>

          <p className="
            mt-4 max-w-xl
            text-sm leading-7 opacity-85
            sm:mt-6 sm:text-base sm:leading-8
          ">
            {area.description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className={`
        relative z-10 mt-6
        flex items-center justify-between gap-3
        border-t pt-4 sm:pt-6
        ${area.border}
      `}>
        <span className={`
          text-[10px] font-bold uppercase
          tracking-[0.16em] sm:text-xs
          ${area.label}
        `}>
          {area.category}
        </span>

        <span className="
          text-xs font-bold opacity-60 sm:text-sm
        ">
          {area.number} / 04
        </span>
      </div>

    </motion.article>
  );
}

/* --------------------------------
   Static fallback for reduced motion
-------------------------------- */

function StaticAreaCards() {
  return (
    <div className="
      mx-auto mt-10 grid max-w-5xl
      gap-5 px-4 sm:px-6
      md:grid-cols-2 lg:px-8
    ">
      {developmentAreas.map((area) => {
        const Icon = area.icon;

        return (
          <article
            key={area.number}
            className={`
              relative flex min-h-[300px]
              flex-col justify-between
              overflow-hidden rounded-[2rem]
              p-7 sm:p-9
              ${area.card} ${area.foreground}
            `}
          >
            <span className={`
              pointer-events-none absolute
              -right-4 -top-8
              text-[9rem] font-black
              leading-none ${area.numberColor}
            `}>
              {area.number}
            </span>

            <div className="relative z-10">
              <div className="flex justify-between">
                <span className={area.label}>
                  {area.number}
                </span>
                <Icon size={26} />
              </div>

              <h3 className="
                mt-10 text-2xl font-black
                leading-tight
              ">
                {area.title}
              </h3>

              <p className="mt-4 text-sm leading-7 opacity-85">
                {area.description}
              </p>
            </div>

            <p className={`
              relative z-10 mt-8
              border-t pt-4 text-xs
              font-bold uppercase tracking-wider
              ${area.label} ${area.border}
            `}>
              {area.category}
            </p>
          </article>
        );
      })}
    </div>
  );
}

/* --------------------------------
   Main section
-------------------------------- */

export default function DevelopmentAreas() {
  const stackRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="development-areas"
      className="
        relative overflow-clip
        bg-[var(--color-surface-warm)]
        py-20 sm:py-24 lg:py-28
      "
    >

      {/* --------------------------------
          Editorial introduction
      -------------------------------- */}

      <div className="
        mx-auto max-w-7xl
        px-4 sm:px-6 lg:px-8
      ">
        <div className="
          grid gap-5
          md:grid-cols-[1.1fr_0.9fr]
        ">

          {/* Heading panel */}
          <div className="
            relative flex min-h-[260px]
            flex-col justify-center
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
              relative z-10 mb-7
              flex items-center gap-3
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
              text-3xl font-black
              leading-[1.12] tracking-tight
              text-[var(--color-text-primary)]
              sm:text-4xl lg:text-5xl
            ">
              Growth begins with understanding people.
            </h2>
          </div>

          {/* Description panel */}
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
                tracking-[0.18em] text-white/80
              ">
                What we focus on
              </span>

              <p className="
                mt-8 text-base font-medium
                leading-8 text-white
                sm:text-lg sm:leading-9
              ">
                Meaningful development goes beyond
                technical knowledge. We work across
                the behavioural, emotional and
                professional capabilities that shape
                how people think, interact and perform.
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
      </div>

      {/* --------------------------------
          Scroll-driven card stack
      -------------------------------- */}

      {shouldReduceMotion ? (
        <StaticAreaCards />
      ) : (
        <div
          ref={stackRef}
          className="relative mt-10 sm:mt-14"
          style={{
            height: `${developmentAreas.length * 60}svh`,
          }}
        >
          <div className="
            sticky top-[9svh]
            h-[82svh]
            overflow-hidden
          ">
            <div className="relative h-full w-full">

              {developmentAreas.map((area, index) => (
                <StackedAreaCard
                  key={area.number}
                  area={area}
                  index={index}
                  total={developmentAreas.length}
                  progress={scrollYProgress}
                />
              ))}

              {/* Scroll indicator */}
              <div className="
                pointer-events-none absolute
                bottom-0 left-1/2 z-50
                flex -translate-x-1/2
                items-center gap-2
                text-[var(--color-text-muted)]
              ">
                <span className="
                  text-[10px] font-bold uppercase
                  tracking-[0.18em]
                ">
                  Scroll to explore
                </span>

                <ArrowDown size={13} />
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
