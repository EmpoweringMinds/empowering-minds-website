
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";

// ----------------------------------
// Reusable content list
// ----------------------------------

function ContentList({ items }) {
  if (!items?.length) return null;

  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, index) => {
        const title =
          typeof item === "string" ? item : item.title;

        const description =
          typeof item === "object" ? item.description : null;

        return (
          <li key={index} className="flex gap-3">
            <span className="
              mt-2 h-1.5 w-1.5 shrink-0
              rounded-full bg-[var(--color-primary)]
            " />

            <div>
              <p className="
                text-sm font-semibold
                text-[var(--color-secondary)]
              ">
                {title}
              </p>

              {description && (
                <p className="
                  mt-1 text-sm leading-6
                  text-[var(--color-text-secondary)]
                ">
                  {description}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

// ----------------------------------
// Course Card
// ----------------------------------

export default function CourseCard({
  course,
  index,
  isOpen,
  onToggle,
  cardRef,
}) {
  if (!course) return null;

  return (
    <article
      id={course.slug || course.id}
      ref={cardRef}
      className="
      scroll-mt-28 overflow-hidden rounded-2xl
      border border-[var(--color-border)]
      bg-[var(--color-surface)]
      shadow-[var(--shadow-sm)]
      transition-shadow duration-300
      hover:shadow-[var(--shadow-md)]
    ">
      {/* Card header */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          flex w-full items-center gap-3
          p-4 text-left
          sm:gap-4 sm:p-7
        "
      >
        {/* Course number */}
        <span className="
          shrink-0 font-serif font-semibold
          text-lg text-[var(--color-primary)] opacity-50
          sm:text-3xl
        ">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Course information */}
        <div className="min-w-0 flex-1">
          <div className="
            flex flex-wrap items-center gap-2
          ">
            {course.duration && (
              <span className="
                rounded-full
                bg-[var(--color-surface-warm)]
                px-3 py-1 text-xs font-medium
                text-[var(--color-text-secondary)]
              ">
                {course.duration}
              </span>
            )}
          </div>

          <h3 className="
            mt-2 text-lg font-bold leading-snug
            text-[var(--color-secondary)]
            sm:text-xl
          ">
            {course.title}
          </h3>

          <p className="
            mt-1.5 line-clamp-2 text-sm leading-5
            text-[var(--color-text-secondary)]
            sm:mt-2 sm:leading-6
          ">
            {course.description}
          </p>

          {/* Learning formats */}
          {course.formats?.length > 0 && (
            <div className="
              mt-3 hidden flex-wrap gap-2 sm:flex
            ">
              {course.formats.map((format, formatIndex) => (
                <span
                  key={`${format}-${formatIndex}`}
                  className="
                    text-xs font-medium
                    text-[var(--color-text-muted)]
                  "
                >
                  {format}
                  {formatIndex < course.formats.length - 1 && (
                    <span className="mx-2 opacity-40">·</span>
                  )}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Expand indicator */}
        <span className="
          flex h-9 w-9 shrink-0
          items-center justify-center
          sm:h-10 sm:w-10
          rounded-full
          bg-[var(--color-surface-warm)]
          text-[var(--color-primary)]
        ">
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex"
          >
            <ChevronDown size={20} />
          </motion.span>
        </span>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="course-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: { duration: 0.25 },
            }}
            className="overflow-hidden"
          >
            <div className="
              border-t border-[var(--color-border)]
              px-5 pb-7 pt-6
              sm:px-7 sm:pb-8
            ">
              {/* Full description */}
              {course.fullDescription && (
                <p className="
                  max-w-3xl text-sm leading-8
                  text-[var(--color-text-secondary)]
                  sm:text-base
                ">
                  {course.fullDescription}
                </p>
              )}

              {/* Topics */}
              {course.topics?.length > 0 && (
                <div className="mt-8">
                  <h4 className="
                    text-sm font-bold uppercase
                    tracking-[0.14em]
                    text-[var(--color-primary)]
                  ">
                    Topics covered
                  </h4>

                  <ContentList items={course.topics} />
                </div>
              )}

              {/* Learning outcomes */}
              {course.learningOutcomes?.length > 0 && (
                <div className="mt-8">
                  <h4 className="
                    text-sm font-bold uppercase
                    tracking-[0.14em]
                    text-[var(--color-primary)]
                  ">
                    Learning outcomes
                  </h4>

                  <ContentList items={course.learningOutcomes} />
                </div>
              )}

              {/* Target audience */}
              {course.targetAudience?.length > 0 && (
                <div className="mt-8">
                  <h4 className="
                    text-sm font-bold uppercase
                    tracking-[0.14em]
                    text-[var(--color-primary)]
                  ">
                    Who is this for?
                  </h4>

                  <ContentList items={course.targetAudience} />
                </div>
              )}

              {/* Activities */}
              {course.activities?.length > 0 && (
                <div className="mt-8">
                  <h4 className="
                    text-sm font-bold uppercase
                    tracking-[0.14em]
                    text-[var(--color-primary)]
                  ">
                    Practical activities
                  </h4>

                  <ContentList items={course.activities} />
                </div>
              )}

              {/* Additional modules */}
              {course.additionalModules?.length > 0 && (
                <div className="
                  mt-8 rounded-xl
                  bg-[var(--color-surface-warm)]
                  p-5 sm:p-6
                ">
                  <h4 className="
                    text-sm font-bold uppercase
                    tracking-[0.14em]
                    text-[var(--color-primary)]
                  ">
                    Additional modules
                  </h4>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {course.additionalModules.map((module) => (
                      <div key={module._id}>
                        <h5 className="
                          text-sm font-semibold
                          text-[var(--color-secondary)]
                        ">
                          {module.title}
                        </h5>

                        {module.shortDescription && (
                          <p className="
                            mt-1 text-sm leading-6
                            text-[var(--color-text-secondary)]
                          ">
                            {module.shortDescription}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Discovery call */}
              <div className="
                mt-8 flex flex-col gap-4
                border-t border-[var(--color-border)]
                pt-6 sm:flex-row sm:items-center
                sm:justify-between
              ">
                <p className="
                  max-w-md text-sm leading-6
                  text-[var(--color-text-secondary)]
                ">
                  Interested in this course? Let's discuss
                  how it fits your development goals.
                </p>

                <Link
                  to="/contact"
                  state={{
                    courseSlug: course.slug,
                    courseTitle: course.title,
                  }}
                  className="
                    inline-flex shrink-0 items-center
                    justify-center gap-2
                    rounded-full
                    bg-[var(--color-primary)]
                    px-6 py-3
                    text-sm font-semibold text-white
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:brightness-105
                  "
                >
                  Schedule a discovery call
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
