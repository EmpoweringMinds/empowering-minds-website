
import { useState } from "react";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";
import CourseCard from "./CourseCard";

export default function CourseDirectory({ courses = [] }) {
  const [openCourse, setOpenCourse] = useState(null);

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
            title="Explore our courses"
            description="Find the programme that aligns with your goals and the areas where you'd like to grow."
            align="center"
          />
        </FadeIn>

        <div className="mt-12 space-y-4">
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
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
