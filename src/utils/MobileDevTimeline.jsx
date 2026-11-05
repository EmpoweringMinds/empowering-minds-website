import { useRef, useEffect, useState } from "react";

export function MobileDevelopmentTimeline({ steps }) {
  const timelineRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const items = timeline.querySelectorAll("[data-timeline-step]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(
              Number(entry.target.dataset.timelineStep)
            );
          }
        });
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [steps]);

  const progress =
    steps.length > 1
      ? (activeStep / (steps.length - 1)) * 100
      : 100;

  return (
    <div ref={timelineRef} className="relative mt-9 sm:hidden">
      {/* Timeline track */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-4 top-4 w-px bg-[var(--color-border)]"
      >
        <div
          className="w-full bg-[var(--color-olive)] transition-all duration-1000 ease-out"
          style={{ height: `${progress}%` }}
        />
      </div>

      <div className="space-y-7">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isPast = index < activeStep;

          return (
            <div
              key={step.title}
              data-timeline-step={index}
              className="relative flex gap-4"
            >
              {/* Step indicator */}
              <div className="relative z-10 flex w-8 shrink-0 justify-center">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 ${
                    isActive || isPast
                      ? "border-[var(--color-olive)] bg-[var(--color-olive)] text-white"
                      : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)]"
                  }`}
                >
                  {isPast ? (
                    <span className="text-xs">✓</span>
                  ) : (
                    <span className="text-xs font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                </span>
              </div>

              {/* Step content */}
              <div
                className={`min-w-0 flex-1 pb-1 transition-all duration-500 ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "translate-y-1 opacity-75"
                }`}
              >
                <h3
                  className={`pt-1 text-sm font-bold transition-colors duration-300 ${
                    isActive
                      ? "text-[var(--color-secondary)]"
                      : "text-[var(--color-text-secondary)]"
                  }`}
                >
                  {step.title}
                </h3>

                <p className="mt-1.5 text-xs leading-6 text-[var(--color-text-secondary)]">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}