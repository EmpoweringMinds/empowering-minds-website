
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown} from "lucide-react";
import CTAButton from "../ui/CTAButton";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    if (!course) return null;
    
    function getCourseTarget(course) {
      return course.slug || course.id;
    }

    function handleCallClick(course) {
      navigate(
        `/contact?course=${encodeURIComponent(getCourseTarget(course))}#form`
      );
    }
    const detailsId = `course-details-${course.slug || course.id}`;

  return (
    <article
      id={course.slug || course.id}
      ref={cardRef}
      className={`
        scroll-mt-28 overflow-hidden
        rounded-[1.5rem] border
        transition-all duration-300
        ${
          isOpen
            ? "border-[var(--color-primary)] shadow-[var(--shadow-md)]"
            : "border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
        }
      `}
    >
      {/* Course header */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={detailsId}
        className={`
          flex w-full items-center gap-3
          p-4 text-left transition-colors duration-300
          sm:gap-6 sm:p-7
          ${
            isOpen
              ? "bg-[var(--color-secondary)]"
              : "bg-[var(--color-surface)]"
          }
        `}
      >
        {/* Course number */}
        <span className={`
          shrink-0 font-heading
          text-xl font-bold sm:text-3xl
          ${
            isOpen
              ? "text-[var(--color-soft-accent)]"
              : "text-[var(--color-primary)]"
          }
        `}>
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Course information */}
        <div className="min-w-0 flex-1">
          {course.duration && (
            <span className={`
              inline-flex rounded-full
              px-3 py-1 text-[10px] font-semibold
              tracking-wide sm:text-xs
              ${
                isOpen
                  ? "bg-white/10 text-white/80"
                  : "bg-[var(--color-surface-warm)] text-[var(--color-text-secondary)]"
              }
            `}>
              {course.duration}
            </span>
          )}

          <h3 className={`
            mt-2 font-heading
            text-lg font-bold leading-snug
            sm:text-xl lg:text-2xl
            ${
              isOpen
                ? "text-white"
                : "text-[var(--color-secondary)]"
            }
          `}>
            {course.title}
          </h3>

          <p className={`
            mt-1.5 line-clamp-2
            text-xs leading-6 sm:text-sm
            ${
              isOpen
                ? "text-white/75"
                : "text-[var(--color-text-secondary)]"
            }
          `}>
            {course.description}
          </p>

          {/* Learning formats */}
          {course.formats?.length > 0 && (
            <div className="mt-3 hidden flex-wrap gap-2 sm:flex">
              {course.formats.map((format, formatIndex) => (
                <span
                  key={`${format}-${formatIndex}`}
                  className={`
                    text-xs font-medium
                    ${
                      isOpen
                        ? "text-white/65"
                        : "text-[var(--color-text-muted)]"
                    }
                  `}
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
        <span className={`
          flex h-9 w-9 shrink-0
          items-center justify-center
          rounded-full transition-colors duration-300
          sm:h-12 sm:w-12
          ${
            isOpen
              ? "bg-white/15 text-white"
              : "bg-[var(--color-surface-warm)] text-[var(--color-primary)]"
          }
        `}>
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
            id={detailsId}
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
            className="overflow-hidden bg-[var(--color-surface)]"
          >
            <div className="
              px-5 pb-7 pt-6
              sm:px-8 sm:pb-9 sm:pt-8
            ">
              {/* Full description */}
              {course.fullDescription && (
                <div className="
                  rounded-2xl
                  bg-[var(--color-surface-warm)]
                  p-5 sm:p-6
                ">
                  <span className="
                    text-[10px] font-bold uppercase
                    tracking-[0.18em]
                    text-[var(--color-primary)]
                  ">
                    About this programme
                  </span>

                  <p className="
                    mt-3 max-w-4xl
                    text-sm leading-7
                    text-[var(--color-text-secondary)]
                    sm:text-base sm:leading-8
                  ">
                    {course.fullDescription}
                  </p>
                </div>
              )}

              {/* Learning outcomes and target audience */}
              <div className="
                mt-8 grid gap-8
                md:grid-cols-2 md:gap-10
              ">
                {course.learningOutcomes?.length > 0 && (
                  <div>
                    <div className="
                      flex items-center gap-3
                      border-b border-[var(--color-border)]
                      pb-3
                    ">
                      <span className="
                        h-2.5 w-2.5 rounded-full
                        bg-[var(--color-primary)]
                      " />
                      <h4 className="
                        font-heading text-base
                        font-bold text-[var(--color-secondary)]
                      ">
                        Course Outcomes
                      </h4>
                    </div>

                    <ContentList items={course.learningOutcomes} />
                  </div>
                )}

                {course.targetAudience?.length > 0 && (
                  <div>
                    <div className="
                      flex items-center gap-3
                      border-b border-[var(--color-border)]
                      pb-3
                    ">
                      <span className="
                        h-2.5 w-2.5 rounded-full
                        bg-[var(--color-olive)]
                      " />
                      <h4 className="
                        font-heading text-base
                        font-bold text-[var(--color-secondary)]
                      ">
                        Who is this for?
                      </h4>
                    </div>

                    <ContentList items={course.targetAudience} />
                  </div>
                )}
              </div>

              {/* Additional modules */}
              {course.additionalModules?.length > 0 && (
                <div className="
                  mt-9 overflow-hidden
                  rounded-2xl
                  bg-[var(--color-surface-warm)]
                  p-5 sm:p-6
                ">
                  <div className="
                    flex flex-wrap items-center
                    justify-between gap-3
                  ">
                    <h4 className="
                      font-heading text-base
                      font-bold text-[var(--color-secondary)]
                    ">
                      Additional modules
                    </h4>

                    <span className="
                      rounded-full
                      bg-[var(--color-soft-accent)]/40
                      px-3 py-1
                      text-xs font-semibold
                      text-[var(--color-secondary)]
                    ">
                      More to explore
                    </span>
                  </div>

                  <div className="
                    mt-5 grid gap-5
                    sm:grid-cols-2
                  ">
                    {course.additionalModules.map((module) => (
                      <div
                        key={module._id}
                        className="
                          border-l-2
                          border-[var(--color-primary)]/50
                          pl-4
                        "
                      >
                        <h5 className="
                          text-sm font-semibold
                          text-[var(--color-secondary)]
                        ">
                          {module.title}
                        </h5>

                        {module.shortDescription && (
                          <p className="
                            mt-1.5 text-sm leading-6
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
                mt-9 flex flex-col gap-4
                rounded-2xl
                bg-[var(--color-secondary)]
                p-5 sm:flex-row sm:items-center
                sm:justify-between sm:p-6
              ">
                <div>
                  <span className="
                    text-[10px] font-bold uppercase
                    tracking-[0.18em]
                    text-[var(--color-soft-accent)]
                  ">
                    Take the next step
                  </span>

                  <p className="
                    mt-2 max-w-md
                    text-sm leading-6 text-white/85
                  ">
                    Interested in this course? Let's discuss
                    how it fits your development goals.
                  </p>
                </div>

                <CTAButton
                  onClick={() => handleCallClick(course)}
                  showArrow={true}
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
                    hover:bg-[var(--color-primary)]
                  "
                >
                  Schedule a discovery call
                </CTAButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
