
import { useCourses } from "../../cms/useCourses";
import CTAButton from "../ui/CTAButton";
import SectionHeader from "../ui/SectionHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CoursePreview() {
  const { courses, loading, error } = useCourses();
  const navigate = useNavigate();

  const [showAllCourses, setShowAllCourses] = useState(false);

    const visibleCourses = showAllCourses
    ? courses
    : courses.slice(0, 4);

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Learn · Grow · Apply"
          title="Courses designed for students, job seekers and working professionals."
          description="Explore learning experiences designed to build useful skills and turn knowledge into action."
          align="center"
        />

        {loading ? (
          <p className="mt-12 text-center text-[var(--color-text-secondary)]">
            Loading courses...
          </p>
        ) : error ? (
          <p role="alert" className="mt-12 text-center text-[var(--color-text-secondary)]">
            Unable to load courses right now.
          </p>
        ) : courses.length === 0 ? (
          <p className="mt-12 text-center text-[var(--color-text-secondary)]">
            New courses are coming soon.
          </p>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {visibleCourses.map((course) => (
              <article
                key={course.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {course.image && (
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover"
                  />
                )}

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap gap-2">
                    {course.formats.map((format) => (
                      <span
                        key={format}
                        className="rounded-full bg-[var(--color-secondary)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--color-secondary)]"
                      >
                        {format === "live-online"
                          ? "Live Online"
                          : format === "in-person"
                            ? "In-Person"
                            : format}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-5 text-2xl font-bold leading-tight text-[var(--color-primary)]">
                    {course.title}
                  </h3>

                  {course.duration && (
                    <p className="mt-2 text-sm font-medium text-[var(--color-text-secondary)]">
                      Duration: {course.duration}
                    </p>
                  )}

                  <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                    {course.description}
                  </p>

                  {course.learningOutcomes.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {course.learningOutcomes.slice(0, 3).map((outcome, index) => (
                        <li
                          key={`${course.id}-outcome-${index}`}
                          className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text-secondary)]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-secondary)]"
                          />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="mt-auto flex flex-col gap-3 pt-7">
                        <CTAButton
                            onClick={() => {
                            navigate(
                                `/contact?course=${encodeURIComponent(course.slug || course.id)}#form`
                              );
                            }}
                            showArrow={false}
                            className="flex-1"
                        >
                            Schedule a Call
                        </CTAButton>

                        <CTAButton
                            as="a"
                            href={`https://wa.me/917908466757?text=${encodeURIComponent(
                            `Hello, I'd like to know more about the course "${course.title}".`
                            )}`}
                            variant="secondary"
                            showArrow={false}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                        >
                            Contact on WhatsApp
                        </CTAButton>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        {courses.length > 4 && (
            <div className="mt-10 flex justify-center">
                <CTAButton
                variant="secondary"
                showArrow={false}
                onClick={() => setShowAllCourses((current) => !current)}
                >
                {showAllCourses ? "Show Fewer Courses" : "Show All Courses"}
                </CTAButton>
            </div>
        )}
      </div>
    </section>
  );
}
