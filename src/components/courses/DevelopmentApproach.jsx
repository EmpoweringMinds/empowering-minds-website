import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

export default function DevelopmentApproach({ data }) {
  if (!data?.developmentSteps?.length) return null;

  return (
    <section className="bg-[var(--color-surface)] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title={data.heading}
            description={data.description}
            align="center"
          />
        </FadeIn>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute bottom-6 left-5 top-6 w-px bg-[var(--color-border)] sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12">
            {data.developmentSteps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <FadeIn key={`${step.title}-${index}`}>
                  <div className="relative grid grid-cols-[40px_1fr] items-start gap-5 sm:grid-cols-[1fr_40px_1fr] sm:gap-6">
                    {/* Left column */}
                    <div
                      className={`hidden sm:block ${
                        isLeft ? "text-right" : ""
                      }`}
                    >
                      {isLeft && (
                        <StepContent
                          step={step}
                          index={index}
                          align="right"
                        />
                      )}
                    </div>

                    {/* Timeline marker */}
                    <div className="relative z-10 flex justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] font-semibold text-[var(--color-accent)]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Right column / mobile content */}
                    <div>
                      <div className="sm:hidden">
                        <StepContent step={step} index={index} />
                      </div>

                      <div className="hidden sm:block">
                        {!isLeft && <StepContent step={step} index={index} />}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepContent({ step, index, align = "left" }) {
  return (
    <div className={align === "right" ? "sm:pr-2" : "sm:pl-2"}>
      <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)]">
        STEP {String(index + 1).padStart(2, "0")}
      </p>

      <h3 className="mt-2 font-heading text-xl font-semibold text-[var(--color-text)]">
        {step.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
        {step.description}
      </p>
    </div>
  );
}