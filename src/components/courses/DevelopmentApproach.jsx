
import FadeIn from "../ui/FadeIn";


/* --------------------------------
   Step card colour variations
-------------------------------- */

const stepVariants = [
  {
    card: "bg-[var(--color-secondary)]",
    heading: "text-[var(--color-text-light)]",
    description: "text-[var(--color-text-light)]/80",
    number: "text-[var(--color-primary)]/25",
    accent: "bg-[var(--color-primary)]",
    label: "text-[var(--color-primary)]",
    border: "border-white/15",
  },
  {
    card: "bg-[var(--color-surface)]",
    heading: "text-[var(--color-secondary)]",
    description: "text-[var(--color-text-secondary)]",
    number: "text-[var(--color-primary)]/15",
    accent: "bg-[var(--color-primary)]",
    label: "text-[var(--color-primary)]",
    border: "border-[var(--color-primary)]/15",
  },
  {
    card: "bg-[var(--color-soft-accent)]",
    heading: "text-[var(--color-secondary)]",
    description: "text-[var(--color-secondary)]/80",
    number: "text-[var(--color-secondary)]/10",
    accent: "bg-[var(--color-secondary)]",
    label: "text-[var(--color-secondary)]",
    border: "border-[var(--color-secondary)]/15",
  },
];


/* --------------------------------
   Timeline step card
-------------------------------- */

function StepContent({ step, index, align = "left" }) {
  const variant = stepVariants[index % stepVariants.length];

  const isRight = align === "right";

  return (
    <article
      className={`
        group relative flex min-h-[260px]
        flex-col justify-between
        overflow-hidden rounded-[1.75rem]
        border border-[var(--color-border)]
        p-7 transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[var(--shadow-lg)]
        sm:p-8 lg:min-h-[290px] lg:p-9
        ${variant.card}
        ${isRight ? "sm:text-left" : "sm:text-right"}
      `}
    >

      {/* Oversized background number */}
      <span
        aria-hidden="true"
        className={`
          pointer-events-none absolute
          -right-3 -top-8
          text-[9rem] font-extrabold
          leading-none tracking-tighter
          transition-transform duration-500
          group-hover:-translate-y-2
          ${variant.number}
          ${isRight ? "sm:-left-3 sm:right-auto" : ""}
        `}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Main content */}
      <div className="relative z-10">

        <div className={`
          flex items-center justify-between
          ${isRight ? "sm:flex-row" : "sm:flex-row-reverse"}
        `}>

          <span className={`
            text-xs font-bold uppercase
            tracking-[0.18em]
            ${variant.label}
          `}>
            STEP {String(index + 1).padStart(2, "0")}
          </span>

          <span className={`
            h-2.5 w-2.5 rounded-full
            ${variant.accent}
          `} />

        </div>

        <div className={`
          mb-6 mt-10 h-1 w-12 rounded-full
          ${variant.accent}
          ${isRight ? "sm:ml-0" : "sm:ml-auto"}
        `} />

        <h3 className={`
          max-w-sm text-2xl font-extrabold
          leading-tight tracking-tight
          lg:text-3xl
          ${variant.heading}
        `}>
          {step.title}
        </h3>

        <p className={`
          mt-4 max-w-md text-sm leading-8
          lg:text-base
          ${variant.description}
        `}>
          {step.description}
        </p>

      </div>

      {/* Bottom detail */}
      <div className={`
        relative z-10 mt-8
        flex items-center gap-3
        border-t pt-5
        ${variant.border}
        ${isRight ? "sm:justify-start" : "sm:justify-end"}
      `}>

        <span className={`
          text-xs font-bold uppercase
          tracking-[0.14em]
          ${variant.label}
        `}>
          Personal growth journey
        </span>

        <span className={`
          h-1.5 w-1.5 rounded-full
          ${variant.accent}
        `} />

      </div>

    </article>
  );
}


/* --------------------------------
   Timeline marker
-------------------------------- */

function TimelineMarker({ index }) {
  return (
    <div className="
      relative z-10 flex justify-center
      pt-5 sm:pt-8
    ">
      <div className="
        flex h-12 w-12 shrink-0
        items-center justify-center
        rounded-full border-[3px]
        border-[var(--color-primary)]
        bg-[var(--color-background)]
        text-sm font-extrabold
        text-[var(--color-secondary)]
        shadow-[var(--shadow-md)]
        sm:h-14 sm:w-14
      ">
        {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  );
}


/* --------------------------------
   Main section
-------------------------------- */

export default function DevelopmentApproach({ data }) {
  if (!data?.developmentSteps?.length) return null;

  const steps = data.developmentSteps;

  return (
    <section className="
      relative isolate overflow-hidden
      bg-[var(--color-background)]
      py-20 sm:py-24 lg:py-28
    ">

      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 top-20
          h-80 w-80 rounded-full
          border-[35px]
          border-[var(--color-primary)]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-24 -left-20
          h-72 w-72 rounded-full
          bg-[var(--color-soft-accent)]/40
          blur-3xl
        "
      />


      {/* --------------------------------
          Editorial section introduction
      -------------------------------- */}

      <div className="
        relative mx-auto max-w-7xl
        px-4 sm:px-6 lg:px-8
      ">

        <FadeIn>
          <div className="
            grid items-stretch gap-6
            md:grid-cols-[1fr_0.85fr]
            lg:gap-10
          ">

            {/* Heading panel */}
            <div className="
              relative flex flex-col justify-center
              overflow-hidden rounded-[2rem]
              bg-[var(--color-surface-warm)]
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
                  How growth happens
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


            {/* Description panel */}
            <div className="
              relative flex flex-col justify-between
              overflow-hidden rounded-[2rem]
              bg-[var(--color-secondary)]
              p-8 sm:p-10 lg:p-12
            ">

              <div
                aria-hidden="true"
                className="
                  absolute -right-16 -top-16
                  h-60 w-60 rounded-full
                  border-[32px]
                  border-[var(--color-primary)]/20
                "
              />

              <div className="relative z-10">

                <span className="
                  text-xs font-bold uppercase
                  tracking-[0.18em]
                  text-[var(--color-primary)]
                ">
                  Progress, not perfection
                </span>

                <div className="
                  mt-8 text-5xl font-extrabold
                  leading-none text-[var(--color-primary)]
                " aria-hidden="true">
                  “
                </div>

                <p className="
                  mt-2 text-base font-medium
                  leading-8 text-[var(--color-text-light)]
                  sm:text-lg sm:leading-9
                ">
                  {data.description}
                </p>

              </div>

              <div className="
                relative z-10 mt-8
                border-t border-white/20 pt-5
              ">
                <span className="
                  text-xs font-bold uppercase
                  tracking-[0.16em]
                  text-white/75
                ">
                  Understand · Practise · Apply
                </span>
              </div>

            </div>

          </div>
        </FadeIn>

      </div>


      {/* --------------------------------
          Timeline
      -------------------------------- */}

      <div className="
        relative mx-auto mt-16 max-w-7xl
        px-4 sm:mt-20 sm:px-6 lg:px-8
      ">

        {/* Connecting line */}
        <div className="
          absolute bottom-8 left-[39px] top-8
          w-[3px] rounded-full
          bg-[var(--color-primary)]/25
          sm:left-1/2 sm:-translate-x-1/2
        " />

        <div className="relative space-y-10 sm:space-y-14">

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <FadeIn
                key={`${step.title}-${index}`}
                delay={index * 0.06}
              >

                <div className="
                  relative grid
                  grid-cols-[48px_1fr]
                  items-stretch gap-4
                  sm:grid-cols-[1fr_64px_1fr]
                  sm:gap-5 lg:gap-8
                ">

                  {/* Desktop left card */}
                  <div className="hidden sm:block">
                    {isLeft && (
                      <StepContent
                        step={step}
                        index={index}
                        align="left"
                      />
                    )}
                  </div>


                  {/* Timeline marker */}
                  <TimelineMarker index={index} />


                  {/* Right card / mobile card */}
                  <div>
                    <div className="sm:hidden">
                      <StepContent
                        step={step}
                        index={index}
                        align="right"
                      />
                    </div>

                    <div className="hidden sm:block">
                      {!isLeft && (
                        <StepContent
                          step={step}
                          index={index}
                          align="right"
                        />
                      )}
                    </div>
                  </div>

                </div>

              </FadeIn>
            );
          })}

        </div>

      </div>


      {/* --------------------------------
          Closing visual statement
      -------------------------------- */}

      <div className="
        relative mx-auto mt-16 max-w-7xl
        px-4 sm:mt-20 sm:px-6 lg:px-8
      ">

        <FadeIn>
          <div className="
            relative overflow-hidden
            rounded-[2rem]
            bg-[var(--color-soft-accent)]
            px-7 py-8 text-center
            sm:px-10 sm:py-10
          ">

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -right-10 -top-20
                h-48 w-48 rounded-full
                border-[25px]
                border-[var(--color-primary)]/15
              "
            />

            <p className="
              relative z-10
              text-xl font-extrabold
              leading-snug tracking-tight
              text-[var(--color-secondary)]
              sm:text-2xl lg:text-3xl
            ">
              Every step brings you closer
              to becoming your best self.
            </p>

          </div>
        </FadeIn>

      </div>

    </section>
  );
}
