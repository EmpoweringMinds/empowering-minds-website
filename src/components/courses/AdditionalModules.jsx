
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeIn from "../ui/FadeIn";

export default function AdditionalModules({ modules = [] }) {
  const [openModule, setOpenModule] = useState(null);

  if (!modules.length) return null;

  function handleToggle(id) {
    setOpenModule((current) => (current === id ? null : id));
  }

  return (
    <section className="
      bg-[var(--color-surface-warm)]
      py-16 sm:py-24 lg:py-28
    ">
      <div className="
        mx-auto max-w-6xl
        px-4 sm:px-6 lg:px-8
      ">
        {/* Editorial introduction */}
        <FadeIn>
          <div className="
            grid gap-0 overflow-hidden
            rounded-[2rem]
            lg:grid-cols-[1fr_0.85fr]
          ">
            <div className="
              relative overflow-hidden
              bg-[var(--color-background)]
              p-7 sm:p-10 lg:p-12
            ">
              <span className="
                relative z-10
                text-xs font-bold uppercase
                tracking-[0.2em]
                text-[var(--color-primary)]
              ">
                Go a little further
              </span>

              <h2 className="
                relative z-10 mt-5 max-w-xl
                font-heading text-3xl font-bold
                leading-tight tracking-tight
                text-[var(--color-secondary)]
                sm:text-4xl lg:text-5xl
              ">
                More ways to develop
              </h2>

              <span className="
                pointer-events-none absolute
                -bottom-16 -right-8
                h-48 w-48 rounded-full
                border-[22px]
                border-[var(--color-soft-accent)]/30
                sm:h-64 sm:w-64
              " />
            </div>

            <div className="
              relative flex flex-col justify-between
              bg-[var(--color-secondary)]
              p-7 sm:p-10 lg:p-12
            ">
              <p className="
                max-w-lg text-base leading-8
                text-white/80 sm:text-lg
              ">
                Complement your learning with focused
                modules designed to address specific
                areas of personal and professional growth.
              </p>

              <div className="
                mt-8 flex items-center gap-3
                border-t border-white/20 pt-5
              ">
                <span className="
                  h-2.5 w-2.5 rounded-full
                  bg-[var(--color-soft-accent)]
                " />
                <span className="
                  text-xs font-semibold uppercase
                  tracking-[0.16em] text-white
                ">
                  Explore additional learning opportunities
                </span>
              </div>

              <span className="
                pointer-events-none absolute
                -right-8 -top-10
                h-32 w-32 rounded-full
                border-[18px] border-white/10
              " />
            </div>
          </div>
        </FadeIn>

        {/* Module accordion */}
        <div className="
          mt-8 overflow-hidden
          rounded-[1.75rem]
          border border-[var(--color-border)]
          bg-[var(--color-background)]
        ">
          {modules.map((module, index) => {
            const isOpen = openModule === module.id;

            return (
              <FadeIn
                key={module.id}
                delay={index * 0.04}
              >
                <article className={`
                  relative overflow-hidden
                  transition-colors duration-300
                  ${isOpen
                    ? "bg-[var(--color-primary)]"
                    : "bg-[var(--color-background)]"
                  }
                  ${index !== 0
                    ? "border-t border-[var(--color-border)]"
                    : ""
                  }
                `}>
                  <button
                    type="button"
                    onClick={() => handleToggle(module.id)}
                    aria-expanded={isOpen}
                    aria-controls={`module-content-${module.id}`}
                    className="
                      relative z-10 flex w-full
                      items-center gap-4
                      px-5 py-6 text-left
                      sm:gap-7 sm:px-8 sm:py-7
                    "
                  >
                    <span className={`
                      shrink-0 font-heading
                      text-2xl font-bold
                      sm:text-4xl
                      ${isOpen
                        ? "text-white/65"
                        : "text-[var(--color-primary)]"
                      }
                    `}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className={`
                      min-w-0 flex-1
                      font-heading text-lg
                      font-bold leading-snug
                      sm:text-2xl
                      ${isOpen
                        ? "text-white"
                        : "text-[var(--color-secondary)]"
                      }
                    `}>
                      {module.title}
                    </span>

                    <span className={`
                      flex h-10 w-10 shrink-0
                      items-center justify-center
                      rounded-full transition-colors
                      sm:h-12 sm:w-12
                      ${isOpen
                        ? "bg-white/15 text-white"
                        : "bg-[var(--color-surface-warm)] text-[var(--color-primary)]"
                      }
                    `}>
                      <ChevronDown
                        size={21}
                        className={`
                          transition-transform duration-300
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`module-content-${module.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="
                          grid gap-6
                          px-5 pb-7
                          sm:px-8 sm:pb-9
                          lg:grid-cols-[0.9fr_1fr]
                          lg:items-center
                        ">
                          {module.image && (
                            <div className="
                              overflow-hidden rounded-2xl
                              border border-white/20
                            ">
                              <img
                                src={module.image}
                                alt={module.title}
                                loading="lazy"
                                className="
                                  aspect-[16/9] w-full
                                  object-cover
                                "
                              />
                            </div>
                          )}

                          <div className="
                            flex flex-col justify-center
                          ">
                            <span className="
                              text-xs font-bold uppercase
                              tracking-[0.18em]
                              text-white/65
                            ">
                              Additional learning module
                            </span>

                            <p className="
                              mt-3 max-w-xl
                              text-sm leading-7
                              text-white/90 sm:text-base
                            ">
                              {module.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
