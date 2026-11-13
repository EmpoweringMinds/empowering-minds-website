import { useState } from "react";
import { useCourses } from "../../cms/useCourses";
import CTAButton from "../ui/CTAButton";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Clock3, Sparkles } from "lucide-react";

function getFormatLabel(format) {
  if (format === "live-online") return "Live Online";
  if (format === "in-person") return "In Person";
  return format;
}

export default function CoursePreview() {
  const { courses, loading, error } = useCourses();
  const navigate = useNavigate();
  const [showAllCourses, setShowAllCourses] = useState(false);

  function getCourseTarget(course) {
    return course.slug || course.id;
  }

  function handleExploreCourse(course) {
    navigate(`/courses#${encodeURIComponent(getCourseTarget(course))}`);
  }

  function handleAdvisorClick(course) {
    navigate(
      `/contact?course=${encodeURIComponent(getCourseTarget(course))}#form`
    );
  }

  return (
    <section
      id="courses"
      className="academy-theme relative overflow-hidden bg-[var(--color-background)] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section introduction */}
        <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              Explore Courses
            </span>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Practical learning for the person you are becoming.
            </p>
          </div>

          <div className="max-w-3xl md:ml-auto">
            <h2 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
              Find a course that moves you <span className="text-[var(--color-olive)]">forward.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              Explore courses designed to help you build confidence, develop
              useful skills and put what you learn into action.
            </p>
          </div>
        </div>

        {/* Course content states */}
        {loading ? (
          <div className="rounded-3xl bg-[var(--color-surface-warm)] px-6 py-16 text-center">
            <p className="text-sm font-medium text-[var(--color-text-secondary)]">
              Loading courses...
            </p>
          </div>
        ) : error ? (
          <p
            role="alert"
            className="rounded-3xl bg-[var(--color-surface-warm)] px-6 py-16 text-center text-sm text-[var(--color-text-secondary)]"
          >
            Unable to load courses right now.
          </p>
        ) : courses.length === 0 ? (
          <p className="rounded-3xl bg-[var(--color-surface-warm)] px-6 py-16 text-center text-sm text-[var(--color-text-secondary)]">
            New courses are coming soon.
          </p>
        ) : (
          <>
            {/* Mobile: swipeable course cards
                Desktop: one featured course followed by supporting courses */}
            <div
              className="
                -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto
                overscroll-x-contain px-5 pb-5
                [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                sm:-mx-8 sm:px-8
                md:mx-0 md:grid md:grid-cols-6 md:gap-5
                md:overflow-visible md:px-0 md:pb-0
              "
              aria-label="Available courses"
            >
              {courses.map((course, index) => {
                const isFeatured = index === 0;
                const isHidden = index >= 4 && !showAllCourses;

                return (
                  <article
                    key={course.id}
                    className={`
                      group relative flex min-w-0 flex-[0_0_86%]
                      snap-start flex-col overflow-hidden rounded-[1.75rem]
                      transition-all duration-300
                      hover:-translate-y-1
                      md:flex-auto
                      ${isFeatured
                        ? "bg-[var(--color-primary)] text-white md:col-span-6 md:flex-row"
                        : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary)] md:col-span-2"
                      }
                      ${isHidden ? "md:hidden" : ""}
                    `}
                  >
                    {/* Course image */}
                    {course.image && (
                      <div
                        className={`
                          relative overflow-hidden
                          ${isFeatured
                            ? "aspect-[16/10] md:aspect-auto md:w-[42%] md:shrink-0"
                            : "aspect-[16/9]"
                          }
                        `}
                      >
                        <img
                          src={course.image}
                          alt={course.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {isFeatured && (
                          <div className="absolute left-5 top-5">
                            <span className="rounded-full bg-[var(--color-soft-accent)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                              Featured course
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    <div
                      className={`
                        flex flex-1 flex-col p-5 sm:p-6
                        ${isFeatured ? "md:p-9 lg:p-12" : "md:p-6"}
                      `}
                    >
                      {/* Metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-2">
                          {(course.formats || []).map((format) => (
                            <span
                              key={format}
                              className={`
                                rounded-full px-3 py-1.5 text-[10px]
                                font-bold uppercase tracking-wider
                                ${isFeatured
                                  ? "bg-white/15 text-white"
                                  : "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]"
                                }
                              `}
                            >
                              {getFormatLabel(format)}
                            </span>
                          ))}
                        </div>

                        {course.duration && (
                          <span
                            className={`
                              inline-flex items-center gap-1.5 text-xs
                              ${isFeatured
                                ? "text-white/70"
                                : "text-[var(--color-text-muted)]"
                              }
                            `}
                          >
                            <Clock3 size={13} />
                            {course.duration}
                          </span>
                        )}
                      </div>

                      {/* Course title and description */}
                      <div className="mt-6 flex-1">
                        {isFeatured && (
                          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-soft-accent)]">
                            <Sparkles size={14} />
                            Start here
                          </div>
                        )}

                        {!isFeatured && (
                          <span className="mb-4 block font-heading text-3xl font-bold text-[var(--color-primary)]/20">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        )}

                        <h3
                          className={`
                            font-heading font-bold leading-tight
                            ${isFeatured
                              ? "max-w-xl text-3xl text-white sm:text-4xl lg:text-5xl"
                              : "text-xl text-[var(--color-primary)] sm:text-2xl"
                            }
                          `}
                        >
                          {course.title}
                        </h3>

                        <p
                          className={`
                            mt-4 leading-relaxed
                            ${isFeatured
                              ? "max-w-xl text-sm text-white/75 sm:text-base"
                              : "line-clamp-3 text-sm text-[var(--color-text-secondary)]"
                            }
                          `}
                        >
                          {course.description}
                        </p>
                      </div>

                      {/* Actions */}
                      <div
                        className={`
                          mt-7 flex flex-col gap-3 border-t pt-5
                          sm:flex-row sm:items-center
                          ${isFeatured ? "border-white/20" : "border-[var(--color-border)]"}
                        `}
                      >
                        <CTAButton
                          onClick={() => handleExploreCourse(course)}
                          variant={isFeatured ? "secondary" : "primary"}
                          className="w-full sm:flex-1"
                        >
                          Explore course
                        </CTAButton>

                        <button
                          type="button"
                          onClick={() => handleAdvisorClick(course)}
                          className={`
                            inline-flex min-h-12 w-full items-center
                            justify-center gap-2 rounded-full px-4 py-3
                            text-sm font-semibold transition-colors
                            sm:w-auto sm:flex-1
                            ${isFeatured
                              ? "text-white/90 hover:bg-white/10"
                              : "text-[var(--color-primary)] hover:bg-[var(--color-soft-accent)]"
                            }
                          `}
                        >
                          Talk to an advisor
                          <ArrowUpRight size={16} />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Mobile swipe guidance */}
            {courses.length > 1 && (
              <div className="mt-3 flex items-center justify-center gap-3 md:hidden">
                <span className="h-px w-8 bg-[var(--color-border)]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                  Swipe to explore
                </p>
                <span className="h-px w-8 bg-[var(--color-border)]" />
              </div>
            )}

            {/* Desktop: reveal remaining courses */}
            {courses.length > 4 && (
              <div className="mt-10 justify-center hidden md:flex">
                <CTAButton
                  variant="secondary"
                  showArrow={false}
                  onClick={() => setShowAllCourses((current) => !current)}
                >
                  {showAllCourses ? "Show fewer courses" : "View all courses"}
                </CTAButton>
              </div>
            )}
          </>
        )}

        {/* Closing note */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Not sure where to begin? We can help you find the right fit.
          </p>

          <button
            type="button"
            onClick={() => navigate("/contact#form")}
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] transition-colors hover:text-[var(--color-olive)]"
          >
            Speak with our team
            <ArrowUpRight size={16} />
          </button>
          <button
            type="button"
            onClick={() => navigate("/courses")}
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] transition-colors hover:text-[var(--color-olive)]"
          >
            Know more about Courses
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
