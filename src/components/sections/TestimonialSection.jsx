
import { useEffect, useState } from "react";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Presentation,
  Users,
} from "lucide-react";

import SectionHeader from "../ui/SectionHeader";
import { testimonials } from "../../data/siteContent";

const classroomScenes = [
  {
    label: "Classroom learning session",
    description: "Learners participating in a training session",
    Icon: Presentation,
  },
  {
    label: "Trainer-led discussion",
    description: "A trainer facilitating an interactive discussion",
    Icon: Users,
  },
  {
    label: "Collaborative workshop",
    description: "Learners working together during a workshop",
    Icon: BookOpen,
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const total = testimonials.length;
  const activeTestimonial = testimonials[activeIndex];
  const scene = classroomScenes[activeIndex % classroomScenes.length];
  const SceneIcon = scene.Icon;

  // Respect the visitor's motion preference.
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionPreference = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  // Automatically rotate testimonials every 7 seconds.
  useEffect(() => {
    if (total <= 1 || isPaused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      if (window.matchMedia("(max-width: 639px)").matches) {
      return;
    }
      setActiveIndex((current) => (current + 1) % total);
    }, 7000);

    return () => clearInterval(interval);
  }, [total, isPaused, prefersReducedMotion]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  if (!total) return null;

  return (
    <section className="bg-[var(--color-surface-warm)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Learner Perspectives"
          title="What our learners say"
          description="Our work is ultimately measured by the difference it makes in people, teams, and organisations."
          align="center"
        />

        <div
          className="mt-12 lg:mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div
            key={activeIndex}
            className="grid gap-4 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8"
          >
            {/* Classroom image placeholder */}
            <div className="relative min-h-[190px] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 sm:min-h-[300px] sm:p-6 lg:min-h-[440px]">
              {/* Decorative shapes */}
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[var(--color-secondary)] opacity-[0.10]"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-[var(--color-olive)] opacity-[0.12]"
              />

              <div className="relative flex h-full min-h-[164px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-warm)] px-4 py-6 text-center sm:min-h-[252px] sm:px-6 sm:py-10 lg:min-h-[392px]">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                  <SceneIcon size={38} strokeWidth={1.3} />
                </div>

                <p className="text-sm font-semibold tracking-wide text-[var(--color-primary)] sm:text-base">
                  {scene.label}
                </p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-[var(--color-text-secondary)]">
                  {scene.description}
                </p>

                <span className="mt-6 rounded-full border border-[var(--color-border)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-secondary)]">
                  Classroom image placeholder
                </span>
              </div>
            </div>

            {/* Testimonial */}
            <article className="flex flex-col rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)] sm:p-10 lg:p-12">
              <div
                aria-hidden="true"
                className="font-serif text-7xl leading-[0.7] text-[var(--color-secondary)]/30"
              >
                “
              </div>

              <blockquote
                className="mt-6 flex-1 text-lg leading-8 text-[var(--color-secondary)]/80 sm:text-xl sm:leading-9"
              >
                {activeTestimonial.quote}
              </blockquote>

              <div className="mt-8 border-t border-[var(--color-border)] pt-6">
                <p className="text-base font-semibold text-[var(--color-primary)]">
                  {activeTestimonial.name}
                </p>

                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {activeTestimonial.role}
                </p>

                <p className="mt-1 text-sm font-medium text-[var(--color-secondary)]">
                  {activeTestimonial.organisation}
                </p>

                {activeTestimonial.programme && (
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[var(--color-primary)]">
                    {activeTestimonial.programme}
                  </p>
                )}
              </div>
            </article>
          </div>

          {/* Carousel controls */}
          {total > 1 && (
            <div className="mt-5 flex items-center justify-between gap-3 sm:mt-8">
              <div className="flex items-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name + index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-[var(--color-secondary)]"
                        : "w-2.5 bg-[var(--color-border)] hover:bg-[var(--color-olive)]"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span className="mr-2 text-xs font-medium tabular-nums text-[var(--color-text-secondary)]">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition-colors hover:bg-[var(--color-olive)]/10"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition-colors hover:bg-[var(--color-olive)]/10"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
