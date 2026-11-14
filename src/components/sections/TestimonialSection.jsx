
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import FadeIn from "../ui/FadeIn";
import { useTestimonials } from "../../cms/useTestimonials";
import SectionHeader from "../ui/SectionHeader";

const classroomPhotos = [
  "/images/classroom-photo-1.jpg",
  "/images/classroom-photo-2.jpg",
  "/images/classroom-photo-3.jpg",
];

export default function TestimonialSection() {
  const { testimonials: sections, loading } = useTestimonials();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  const section = sections[0];

  const testimonials = section?.testimonial ?? [];
  const total = testimonials.length;

  const activeTestimonial = testimonials[activeIndex];

  const activePhoto = section?.carouselImages?.length
    ? section.carouselImages[
        activeIndex % section.carouselImages.length
      ]
    : classroomPhotos[activeIndex % classroomPhotos.length];

  // Preserve existing desktop-only automatic rotation.
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

  if (loading || !section || !total) return null;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  if (!total) return null;

  return (
    <section
      className="
        relative overflow-hidden
        bg-[var(--color-surface-warm)]
        py-16 sm:py-20 lg:py-24
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 -top-24
          h-72 w-72 rounded-full
          bg-[var(--color-soft-accent)]/30
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          variant="split"
          size="small"
          theme="orange"
          eyebrow={section.eyebrow}
          title={section.heading}
          description={section.description}
        />

        {/* Carousel */}
        <div
          className="mt-10 sm:mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
          aria-roledescription="carousel"
          aria-label="Learner testimonials"
        >

          <div
            className="
              grid overflow-hidden
              rounded-[2rem]
              bg-[var(--color-secondary)]
              lg:grid-cols-[0.9fr_1.1fr]
              lg:rounded-[2.5rem]
            "
          >

            {/* Classroom photography */}
            <div className="
              relative min-h-[260px]
              overflow-hidden
              bg-[var(--color-olive)]
              sm:min-h-[380px]
              lg:min-h-[520px]
            ">
              <img
                key={activePhoto}
                src={activePhoto}
                alt="Participants attending a learning workshop"
                loading="lazy"
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover object-center
                "
              />

              {/* Image overlay */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t
                  from-black/30 via-transparent to-transparent
                "
              />

              {/* Photo label */}
              <div className="
                absolute bottom-5 left-5
                rounded-full border border-white/30
                bg-black/25 px-4 py-2
                text-[10px] font-bold uppercase
                tracking-[0.16em] text-white
                backdrop-blur-md
                sm:bottom-7 sm:left-7
              ">
                Learning in action
              </div>
            </div>

            {/* Testimonial content */}
            <article
              key={activeIndex}
              className="
                relative flex min-w-0
                flex-col justify-between
                px-7 py-10
                sm:px-10 sm:py-12
                lg:px-14 lg:py-14
              "
              aria-roledescription="slide"
              aria-label={`Testimonial ${activeIndex + 1} of ${total}`}
            >

              {/* Decorative quote */}
              <div>
                <Quote
                  size={54}
                  strokeWidth={1}
                  aria-hidden="true"
                  className="text-[var(--color-primary)]"
                />

                <blockquote className="
                  mt-6 max-w-2xl
                  font-heading text-xl
                  font-semibold leading-[1.55]
                  tracking-tight
                  text-[var(--color-background)]
                  sm:text-2xl sm:leading-[1.5]
                  lg:text-[1.75rem]
                ">
                  {activeTestimonial.quote}
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="mt-10">

                <div className="
                  mb-6 h-[2px] w-12
                  rounded-full
                  bg-[var(--color-primary)]
                " />

                <p className="
                  font-heading text-lg font-bold
                  text-[var(--color-background)]
                ">
                  {activeTestimonial.name}
                </p>

                {activeTestimonial.role && (
                  <p className="
                    mt-1 text-sm leading-6
                    text-[var(--color-background)]/75
                  ">
                    {activeTestimonial.role}
                  </p>
                )}

                {activeTestimonial.organisation && (
                  <p className="
                    mt-1 text-sm font-semibold
                    text-[var(--color-primary)]
                  ">
                    {activeTestimonial.organisation}
                  </p>
                )}

                {activeTestimonial.program && (
                  <span className="
                    mt-5 inline-flex max-w-full
                    rounded-full border border-white/20
                    px-4 py-2
                    text-[10px] font-bold uppercase
                    tracking-[0.14em]
                    text-[var(--color-background)]
                  ">
                    {activeTestimonial.program}
                  </span>
                )}

              </div>
            </article>
          </div>

          {/* Carousel navigation */}
          {total > 1 && (
            <div className="
              mt-6 flex flex-wrap
              items-center justify-between gap-5
              sm:mt-8
            ">

              {/* Pagination dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={`${testimonial.name}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-current={
                      activeIndex === index ? "true" : undefined
                    }
                    className={`
                      h-2.5 rounded-full
                      transition-all duration-300
                      ${
                        activeIndex === index
                          ? "w-9 bg-[var(--color-primary)]"
                          : "w-2.5 bg-[var(--color-border)] hover:bg-[var(--color-olive)]"
                      }
                    `}
                  />
                ))}
              </div>

              {/* Previous / next */}
              <div className="flex items-center gap-3">

                <span className="
                  mr-2 text-xs font-bold
                  tabular-nums
                  text-[var(--color-text-secondary)]
                ">
                  {String(activeIndex + 1).padStart(2, "0")}
                  {" / "}
                  {String(total).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous testimonial"
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full border
                    border-[var(--color-border)]
                    text-[var(--color-secondary)]
                    transition-colors
                    hover:bg-[var(--color-soft-accent)]/40
                  "
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next testimonial"
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    bg-[var(--color-primary)]
                    text-white
                    transition-transform duration-300
                    hover:scale-105
                  "
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
