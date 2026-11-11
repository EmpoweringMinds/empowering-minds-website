
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import FadeIn from "../ui/FadeIn";
import CourseCard from "./CourseCard";

export default function CourseDirectory({ courses = [] }) {


  const location = useLocation();
  const cardRefs = useRef(new Map());

  const [manualOpenCourse, setManualOpenCourse] = useState(null);

  const urlCourseIndex = (() => {
    if (!courses.length || !location.hash) return null;

    let targetSlug;

    try {
      targetSlug = decodeURIComponent(location.hash.slice(1));
    } catch {
      targetSlug = location.hash.slice(1);
    }

    const index = courses.findIndex(
      (course) => (course.slug || course.id) === targetSlug
    );

    return index === -1 ? null : index;
  })();

  const openCourse = urlCourseIndex ?? manualOpenCourse;

  // Open and scroll to a course when the URL contains its slug.
    useEffect(() => {
    if (urlCourseIndex === null || !location.hash) return;

    const targetSlug = (() => {
      try {
        return decodeURIComponent(location.hash.slice(1));
      } catch {
        return location.hash.slice(1);
      }
    })();

    const timeoutId = window.setTimeout(() => {
      cardRefs.current
        .get(targetSlug)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 600);

    return () => window.clearTimeout(timeoutId);
  }, [urlCourseIndex, location.hash]);

  if (!courses.length) return null;

  function handleToggle(index) {
  setManualOpenCourse((current) =>
    current === index ? null : index
  );
}

  return (
    <section
      id="course-directory"
      className="
        bg-[var(--color-background)]
        py-16 sm:py-24 lg:py-28
      "
    >
      <div className="
        mx-auto max-w-6xl
        px-4 sm:px-6 lg:px-8
      ">
        {/* Directory introduction */}
        <FadeIn>
          <div className="
            grid gap-6
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-end lg:gap-12
          ">
            <div>
              <span className="
                text-xs font-bold uppercase
                tracking-[0.2em]
                text-[var(--color-primary)]
              ">
                Find your starting point
              </span>

              <h2 className="
                mt-4 max-w-2xl
                font-heading text-3xl font-bold
                leading-tight tracking-tight
                text-[var(--color-secondary)]
                sm:text-4xl lg:text-5xl
              ">
                What would you like to develop?
              </h2>
            </div>

            <div className="
              relative border-l-2
              border-[var(--color-soft-accent)]
              pl-5 sm:pl-6
            ">
              <p className="
                max-w-xl text-sm leading-7
                text-[var(--color-text-secondary)]
                sm:text-base sm:leading-8
              ">
                Explore programmes designed to help you
                grow personally and professionally.
                Open a course to discover what you'll learn
                and how it can support your goals.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Directory label */}
        <div className="
          mt-10 flex flex-wrap items-center
          justify-between gap-4
          border-b-2 border-[var(--color-secondary)]
          pb-4 sm:mt-14 sm:pb-5
        ">
          <div className="flex items-center gap-3">
            <span className="
              h-3 w-3 rounded-full
              bg-[var(--color-primary)]
            " />
            <h3 className="
              font-heading text-base font-bold
              text-[var(--color-secondary)]
              sm:text-lg
            ">
              Explore all courses
            </h3>
          </div>

          <span className="
            rounded-full
            bg-[var(--color-surface-warm)]
            px-4 py-2
            text-xs font-semibold
            text-[var(--color-text-secondary)]
            sm:text-sm
          ">
            {courses.length} courses
          </span>
        </div>

        {/* Course list */}
        <div className="mt-5 space-y-4 sm:mt-7 sm:space-y-5">
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
    </section>
  );
}
