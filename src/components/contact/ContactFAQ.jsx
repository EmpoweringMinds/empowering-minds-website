
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/siteContent";
import FadeIn from "../ui/FadeIn";

export default function ContactFAQs({data}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[var(--color-surface-warm)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Introduction */}
          <FadeIn>
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                {data.eyebrow}
              </p>

              <h2 className="mt-5 max-w-md text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
                {data.accent}
                <span className="block text-[var(--color-secondary)]">
                  {data.heading}
                </span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-[var(--color-text-secondary)]">
                {data.description}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-1 w-12 rounded-full bg-[var(--color-secondary)]" />
                <div className="h-1 w-5 rounded-full bg-[var(--color-olive)]" />
                <div className="h-1 w-3 rounded-full bg-[var(--color-soft-accent)]" />
              </div>
            </div>
          </FadeIn>

          {/* FAQ accordion */}
          <div className="border-t border-[var(--color-primary)]/20">
            {data.faqObject.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <FadeIn
                  key={faq.question}
                  delay={index * 0.06}
                >
                  <div
                    className={`
                      border-b border-[var(--color-primary)]/20
                      transition-colors duration-300
                      ${isOpen ? "bg-[var(--color-background)]" : "bg-transparent"}
                    `}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex(isOpen ? -1 : index)
                      }
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 px-4 py-6 text-left sm:gap-6 sm:px-6 sm:py-7"
                    >
                      <span
                        className={`
                          flex h-11 w-11 shrink-0 items-center justify-center
                          rounded-full text-sm font-bold transition-colors
                          ${
                            isOpen
                              ? "bg-[var(--color-secondary)] text-white"
                              : index % 2 === 0
                                ? "bg-[var(--color-soft-accent)] text-[var(--color-primary)]"
                                : "bg-[var(--color-olive)]/25 text-[var(--color-primary)]"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex-1 text-base font-bold leading-6 text-[var(--color-primary)] sm:text-lg">
                        {faq.question}
                      </span>

                      <span
                        className={`
                          flex h-9 w-9 shrink-0 items-center justify-center
                          rounded-full transition-all duration-300
                          ${
                            isOpen
                              ? "rotate-180 bg-[var(--color-soft-accent)] text-[var(--color-primary)]"
                              : "bg-white text-[var(--color-secondary)]"
                          }
                        `}
                      >
                        <ChevronDown size={19} />
                      </span>
                    </button>

                    <div
                      className={`
                        grid transition-[grid-template-rows] duration-300 ease-in-out
                        ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-7 pl-[4.75rem] pr-5 sm:pl-[5.5rem] sm:pr-8">
                          <p className="max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
