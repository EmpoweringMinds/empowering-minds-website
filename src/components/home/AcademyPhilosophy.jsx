
import {
  motion,
  useReducedMotion,
} from "framer-motion";

const DEFAULT_CONTENT = {
  eyebrow: "THE WAY WE THINK",
  heading: "Growth should change how you show up in the world.",
  description:
    "Development is more than learning a new skill. It is about understanding yourself, practising what you learn and applying it in everyday situations.",
  featureCards: [
    {
      number: "01",
      title: "Understand yourself",
      description:
        "Recognise your strengths, habits and areas where you want to grow.",
    },
    {
      number: "02",
      title: "Build practical capabilities",
      description:
        "Develop communication, confidence and interpersonal skills through purposeful learning.",
    },
    {
      number: "03",
      title: "Learn by doing",
      description:
        "Put ideas into practice through activities, reflection and real-life situations.",
    },
    {
      number: "04",
      title: "Make growth your own",
      description:
        "Build habits and capabilities that feel authentic and useful in your everyday life.",
    },
  ],
};

export default function AcademyPhilosophy({ data }) {
  const shouldReduceMotion = useReducedMotion();

  const content = {
    ...DEFAULT_CONTENT,
    ...data,
    featureCards:
      data?.featureCards?.length
        ? data.featureCards
        : DEFAULT_CONTENT.featureCards,
  };

  const principles = content.featureCards;

  const reveal = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      className="
        academy-theme relative overflow-hidden
        bg-[var(--color-background)]
        px-5 py-20
        sm:px-8 sm:py-24
        lg:px-12 lg:py-32
      "
    >
      <div
        className="
          relative mx-auto grid max-w-7xl
          overflow-hidden rounded-[1.75rem]
          lg:grid-cols-[0.85fr_1.15fr]
        "
      >
        {/* Main statement */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.15,
              },
            },
          }}
          className="
            relative flex flex-col justify-between
            overflow-hidden
            bg-[var(--color-olive)]
            p-8 sm:p-12
            lg:min-h-[680px] lg:p-16
          "
        >
          <div className="relative z-10">
            <motion.span
              variants={reveal}
              transition={{ duration: 0.65 }}
              className="
                inline-flex items-center gap-3
                text-xs font-bold uppercase
                tracking-[0.18em]
                text-[var(--color-background)]
              "
            >
              <span className="
                h-2 w-2 rounded-full
                bg-[var(--color-background)]
              " />
              {content.eyebrow}
            </motion.span>

            <motion.h2
              variants={reveal}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="
                mt-10 max-w-xl
                font-heading text-4xl
                font-extrabold
                leading-[1.02] tracking-tight
                text-[var(--color-background)]
                sm:text-5xl
                lg:mt-14 lg:text-6xl
              "
            >
              {content.heading}
            </motion.h2>

            <motion.p
              variants={reveal}
              transition={{ duration: 0.7 }}
              className="
                mt-7 max-w-md
                text-base leading-relaxed
                text-[var(--color-background)]/80
                sm:text-lg
              "
            >
              {content.description}
            </motion.p>
          </div>

          {/* Oversized wordmark */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35 }}
            className="relative z-10 mt-16"
          >
            <span
              className="
                font-heading text-7xl
                font-extrabold tracking-tighter
                text-[var(--color-background)]/25
                sm:text-8xl
                lg:text-[9rem]
              "
            >
              GROW.
            </span>
          </motion.div>

          {/* Decorative elements */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -right-24 bottom-20
              h-72 w-72 rounded-full
              border-[36px]
              border-[var(--color-background)]/10
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -left-12 top-1/3
              h-32 w-32 rounded-full
              bg-[var(--color-background)]/10
            "
          />
        </motion.div>

        {/* Principles */}
        <div
          className="
            relative overflow-hidden
            bg-[var(--color-surface-warm)]
            p-7 text-[var(--color-secondary)]
            sm:p-10 lg:p-14
          "
        >
          {/* Principles heading */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65 }}
            className="
              relative z-10 mb-10
              flex items-center justify-between gap-4
            "
          >
            <span className="
              text-xs font-bold uppercase
              tracking-[0.16em]
              text-[var(--color-olive)]
            ">
              Our approach
            </span>

            <span className="
              text-xs font-medium
              text-[var(--color-text-muted)]
            ">
              {String(principles.length).padStart(2, "0")} principles
            </span>
          </motion.div>

          {/* Sequential principles */}
          <div className="
            relative z-10
            divide-y divide-[var(--color-border)]
          ">
            {principles.map((item, index) => (
              <motion.article
                key={item.number || item.title || index}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 25,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  delay: shouldReduceMotion
                    ? 0
                    : index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group grid
                  grid-cols-[3.25rem_1fr]
                  gap-4 py-8
                  first:pt-0 last:pb-0
                  sm:grid-cols-[4rem_1fr]
                  sm:gap-6
                "
              >
                <span
                  className="
                    pt-1 font-heading
                    text-2xl font-bold
                    text-[var(--color-primary)]/40
                    transition-colors duration-300
                    group-hover:text-[var(--color-primary)]
                    sm:text-3xl
                  "
                >
                  {item.number || String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="
                    font-heading text-xl
                    font-bold leading-tight
                    text-[var(--color-secondary)]
                    transition-colors duration-300
                    group-hover:text-[var(--color-primary)]
                    sm:text-2xl
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    mt-3 max-w-lg
                    text-sm leading-relaxed
                    text-[var(--color-text-secondary)]
                    sm:text-base
                  ">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Decorative ring */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -bottom-20 -right-20
              h-64 w-64 rounded-full
              border-[30px]
              border-[var(--color-olive)]/10
            "
          />
        </div>
      </div>
    </section>
  );
}
