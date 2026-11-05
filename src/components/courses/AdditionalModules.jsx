import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

export default function AdditionalModules({ modules = [] }) {
  const [openModule, setOpenModule] = useState(null);

  if (!modules.length) return null;

  function handleToggle(id) {
    setOpenModule((current) => (current === id ? null : id));
  }

  return (
    <section className="bg-[var(--color-surface)] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="More ways to develop"
            description="Complement your learning with focused modules designed to address specific areas of personal and professional growth."
            align="center"
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => {
            const isOpen = openModule === module.id;

            return (
              <FadeIn key={module.id} delay={index * 0.04}>
                <article
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-[var(--color-accent)] bg-[var(--color-background)]"
                      : "border-[var(--color-border)] bg-[var(--color-background)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(module.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="font-heading text-lg font-semibold text-[var(--color-text)]">
                      {module.title}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[var(--color-text-muted)] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                          {module.image && (
                            <div className="mb-5 aspect-[16/9] overflow-hidden rounded-xl">
                              <img
                                src={module.image}
                                alt={module.title}
                                loading="lazy"
                                className="h-full w-full object-cover"
                              />
                            </div>
                          )}

                          <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                            {module.description}
                          </p>
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