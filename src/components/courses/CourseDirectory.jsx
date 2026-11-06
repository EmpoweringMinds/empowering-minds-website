
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";
import CourseCard from "./CourseCard";

export default function CourseDirectory({ courses = [] }) {
  const [openCourse, setOpenCourse] = useState(null);
  const location = useLocation();
  const cardRefs = useRef(new Map());

  // Open and scroll to a course when the URL contains its slug.
  useEffect(() => {
    if (!courses.length || !location.hash) return;

    let targetSlug;

    try {
      targetSlug = decodeURIComponent(location.hash.slice(1));
    } catch {
      targetSlug = location.hash.slice(1);
    }

    const targetIndex = courses.findIndex(
      (course) => (course.slug || course.id) === targetSlug
    );

    if (targetIndex === -1) return;

    setOpenCourse(targetIndex);

    // Wait for the accordion to expand before positioning the card.
    const timeoutId = window.setTimeout(() => {
      cardRefs.current
        .get(targetSlug)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 600);

    return () => window.clearTimeout(timeoutId);
  }, [courses, location.hash]);

  if (!courses.length) return null;

  function handleToggle(index) {
    setOpenCourse((current) =>
      current === index ? null : index
    );
  }

  return (
    <section
      id="course-directory"
      className="
        bg-[var(--color-background)]
        py-20 sm:py-24 lg:py-28
      "
    >
      <div className="
        mx-auto max-w-5xl
        px-4 sm:px-6 lg:px-8
      ">
        <FadeIn>
          <SectionHeader
            title="What would you like to develop?"
            description="Explore programmes designed to help you grow personally and professionally."
            align="center"
          />
        </FadeIn>

        <div className="mt-8 sm:mt-12">
          <div className="mb-4 flex items-center justify-between sm:mb-5">
            <h3 className="text-sm font-semibold text-[var(--color-secondary)] sm:text-base">
              All programmes
            </h3>
            <span className="text-xs font-medium text-[var(--color-text-muted)] sm:text-sm">
              {courses.length} programmes
            </span>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {courses.map((course, index) => (
              <FadeIn
                key={course.id}
                delay={index * 0.04}
              >
                <CourseCard
                  course={course}
                  index={index}
                  isOpen={openCourse === index}
                  onToggle={() => handleToggle(index)}
                  cardRef={(node) => {
                    const slug = course.slug || course.id;
                    if (node) {
                      cardRefs.current.set(slug, node);
                    } else {
                      cardRefs.current.delete(slug);
                    }
                  }}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
