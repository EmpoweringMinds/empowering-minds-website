import { useState } from "react";
import { useCourses } from "../../cms/useCourses";
import CTAButton from "../ui/CTAButton";
import SectionHeader from "../ui/SectionHeader";
import { useNavigate } from "react-router-dom";

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
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Learn · Grow · Apply"
          title="Find a programme that moves you forward."
          description="Explore courses designed to help you build confidence, develop useful skills and put what you learn into action."
          align="center"
        />

        {loading ? (
          <p className="mt-10 text-center text-[var(--color-text-secondary)]">
            Loading courses...
          </p>
        ) : error ? (
          <p
            role="alert"
            className="mt-10 text-center text-[var(--color-text-secondary)]"
          >
            Unable to load courses right now.
          </p>
        ) : courses.length === 0 ? (
          <p className="mt-10 text-center text-[var(--color-text-secondary)]">
            New courses are coming soon.
          </p>
        ) : (
          <>
            <div
              className="
                mt-8 -mx-4 flex gap-4 overflow-x-auto
                snap-x snap-mandatory overscroll-x-contain
                px-4 pb-4
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
                sm:-mx-6 sm:px-6
                md:mx-0 md:mt-12 md:grid md:grid-cols-2
                md:gap-5 md:overflow-visible md:px-0 md:pb-0
              "
              aria-label="Available courses"
            >
              {courses.map((course, index) => (
                <article
                  key={course.id}
                  className={`
                    flex min-w-0 flex-[0_0_86%] snap-start
                    flex-col overflow-hidden rounded-2xl
                    border border-[var(--color-border)]
                    bg-[var(--color-surface)]
                    shadow-[var(--shadow-sm)]
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-[var(--shadow-md)]
                    md:flex-auto
                    ${index >= 4 && !showAllCourses ? "md:hidden" : ""}
                  `}
                >
                  {/* Image-led mobile card; desktop uses an editorial layout. */}
                  {course.image && (
                    <img
                      src={course.image}
                      alt={course.title}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover md:hidden"
                    />
                  )}

                  <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-2">
                        {(course.formats || []).map((format) => (
                          <span
                            key={format}
                            className="
                              rounded-full
                              bg-[var(--color-secondary)]/10
                              px-2.5 py-1 text-[11px] font-semibold
                              text-[var(--color-secondary)]
                              sm:text-xs
                            "
                          >
                            {format === "live-online"
                              ? "Live Online"
                              : format === "in-person"
                                ? "In-Person"
                                : format}
                          </span>
                        ))}
                      </div>

                      {course.duration && (
                        <span className="text-xs text-[var(--color-text-muted)]">
                          {course.duration}
                        </span>
                      )}
                    </div>

                    <div className="mt-3 md:flex md:items-start md:gap-4">
                      <span className="
                        hidden shrink-0 pt-0.5
                        font-serif text-2xl font-semibold
                        text-[var(--color-primary)] opacity-40
                        md:block
                      ">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h3 className="
                          font-heading text-xl font-semibold leading-tight
                          text-[var(--color-primary)]
                          sm:text-2xl md:text-xl
                        ">
                          {course.title}
                        </h3>

                        <p className="
                          mt-2 line-clamp-3 text-sm leading-6
                          text-[var(--color-text-secondary)]
                          md:line-clamp-2
                        ">
                          {course.description}
                        </p>
                      </div>
                    </div>

                    <div className="
                      mt-5 flex flex-col gap-2
                      border-t border-[var(--color-border)]
                      pt-4
                      sm:flex-row sm:items-center
                      md:mt-6
                    ">
                      <CTAButton
                        onClick={() => handleAdvisorClick(course)}
                        showArrow={false}
                        className="w-full sm:flex-1"
                      >
                        Talk to an advisor
                      </CTAButton>

                      <CTAButton
                        variant="secondary"
                        onClick={() => handleExploreCourse(course)}
                        showArrow={true}
                        className="w-full sm:flex-1"
                      >
                        Explore course
                      </CTAButton>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Mobile swipe guidance */}
            {courses.length > 1 && (
              <p className="
                mt-2 text-center text-xs
                text-[var(--color-text-secondary)] md:hidden
              ">
                Swipe to explore more courses
                <span aria-hidden="true"> →</span>
              </p>
            )}

            {/* Desktop: reveal the remaining courses */}
            {courses.length > 4 && (
              <div className="mt-8 hidden justify-center md:flex">
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
      </div>
    </section>
  );
}
