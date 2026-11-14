
import {
  Layers3,
  Target,
  Clock3,
  MonitorSmartphone,
  Check,
  ChevronDown
} from "lucide-react";

import FadeIn from "../ui/FadeIn";
import { useState } from "react";

function LearningOptionCard({ option, index }) {
  const [showSpecializations, setShowSpecializations] = useState(false);
  const isSpecialised = option.specializations?.length > 0;

  const formatLabels = (option.format || []).map((format) =>
    format.toLowerCase() === "online" ? "Online" : "Offline"
  );

  return (
    <FadeIn delay={index * 0.08} className="h-full w-[85%] shrink-0 snap-start md:w-auto md:shrink">
      <article
        className={`
          relative flex h-full min-w-0 flex-col overflow-hidden
          rounded-[2rem] p-5 sm:p-7 lg:p-8
          ${
            isSpecialised
              ? "bg-[var(--color-primary)] text-white"
              : "bg-[var(--color-soft-accent)] text-[var(--color-primary)]"
          }
        `}
      >
        {/* Decorative accent */}
        <div
          aria-hidden="true"
          className={`
            pointer-events-none absolute -right-16 -top-16
            h-48 w-48 rounded-full blur-2xl
            ${
              isSpecialised
                ? "bg-[var(--color-secondary)]/25"
                : "bg-white/40"
            }
          `}
        />

        <div className="relative z-10 flex flex-1 flex-col">
          {/* Eyebrow and icon */}
          <div className="flex items-center justify-between gap-4">
            <span
              className={`
                text-[11px] font-bold uppercase tracking-[0.2em]
                ${
                  isSpecialised
                    ? "text-[var(--color-soft-accent)]"
                    : "text-[var(--color-secondary)]"
                }
              `}
            >
              {option.eyebrow}
            </span>

            <span
              className={`
                flex h-12 w-12 shrink-0 items-center justify-center
                rounded-2xl
                ${
                  isSpecialised
                    ? "bg-white/10 text-[var(--color-soft-accent)]"
                    : "bg-white/70 text-[var(--color-secondary)]"
                }
              `}
            >
              {isSpecialised ? (
                <Target size={23} strokeWidth={1.7} />
              ) : (
                <Layers3 size={23} strokeWidth={1.7} />
              )}
            </span>
          </div>

          {/* Main content */}
          <h3
            className={`
              mt-8 max-w-lg font-heading
              text-2xl font-bold leading-tight
              sm:text-3xl lg:text-[2rem]
              ${
                isSpecialised
                  ? "text-white"
                  : "text-[var(--color-primary)]"
              }
            `}
          >
            {option.heading}
          </h3>

          <p
            className={`
              mt-4 mb-4 text-sm leading-7 sm:text-base
              ${
                isSpecialised
                  ? "text-white/75"
                  : "text-[var(--color-text-secondary)]"
              }
            `}
          >
            {option.description}
          </p>

          {isSpecialised && (
            <div className="mb-6 border-t border-white/20 pt-5">
                <button
                type="button"
                onClick={() =>
                    setShowSpecializations((current) => !current)
                }
                aria-expanded={showSpecializations}
                className="
                    flex w-full items-center justify-between gap-4
                    text-left font-semibold
                    transition-colors hover:text-[var(--color-soft-accent)]
                "
                >
                <span>Available specialisations</span>

                <span
                    className={`
                    flex h-8 w-8 shrink-0 items-center justify-center
                    rounded-full border border-current
                    transition-transform duration-300
                    ${showSpecializations ? "rotate-180" : ""}
                    `}
                >
                    <ChevronDown size={16} />
                </span>
                </button>

                {showSpecializations && (
                <ul className="
                    mt-4 grid grid-cols-1 gap-3
                    sm:grid-cols-2
                ">
                    {option.specializations.map((specialization) => (
                    <li
                        key={specialization}
                        className="flex items-start gap-2 text-sm"
                    >
                        <Check
                        size={15}
                        className="mt-0.5 shrink-0"
                        />
                        <span>{specialization}</span>
                    </li>
                    ))}
                </ul>
                )}
            </div>
            )}

          {/* Practical details */}
          <div
            className={`
              mt-auto grid gap-4 border-t pt-6
              ${
                isSpecialised
                  ? "border-white/20"
                  : "border-[var(--color-primary)]/15"
              }
              ${isSpecialised ? "mt-8" : "mt-8"}
              sm:grid-cols-2
            `}
          >
            {option.duration && (
              <div className="flex items-start gap-3">
                <Clock3
                  size={19}
                  className={
                    isSpecialised
                      ? "mt-0.5 shrink-0 text-[var(--color-soft-accent)]"
                      : "mt-0.5 shrink-0 text-[var(--color-secondary)]"
                  }
                />
                <div>
                  <p
                    className={`text-xs ${
                      isSpecialised ? "text-white/60" : "text-[var(--color-text-secondary)]"
                    }`}
                  >
                    Duration
                  </p>
                  <p
                    className={`mt-1 text-sm font-semibold ${
                      isSpecialised ? "text-white" : "text-[var(--color-primary)]"
                    }`}
                  >
                    {option.duration}
                  </p>
                </div>
              </div>
            )}

            {option.minimumModules && (
              <div className="flex items-start gap-3">
                <Layers3
                  size={19}
                  className="mt-0.5 shrink-0 text-[var(--color-secondary)]"
                />
                <div>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Minimum selection
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-primary)]">
                    {option.minimumModules}
                  </p>
                </div>
              </div>
            )}

            {formatLabels.length > 0 && (
              <div className="flex items-start gap-3 sm:col-span-2">
                <MonitorSmartphone
                  size={19}
                  className={
                    isSpecialised
                      ? "mt-0.5 shrink-0 text-[var(--color-soft-accent)]"
                      : "mt-0.5 shrink-0 text-[var(--color-secondary)]"
                  }
                />
                <div>
                  <p
                    className={`text-xs ${
                      isSpecialised ? "text-white/60" : "text-[var(--color-text-secondary)]"
                    }`}
                  >
                    Available formats
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {formatLabels.map((format) => (
                      <span
                        key={format}
                        className={`
                          rounded-full px-3 py-1 text-xs font-semibold
                          ${
                            isSpecialised
                              ? "bg-white/10 text-white"
                              : "bg-white/70 text-[var(--color-primary)]"
                          }
                        `}
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Additional information */}
          {option.extraInfo && (
            <div
              className={`
                mt-6 rounded-xl p-4 text-sm leading-6
                ${
                  isSpecialised
                    ? "bg-white/10 text-white/80"
                    : "bg-white/55 text-[var(--color-text-secondary)]"
                }
              `}
            >
              {option.extraInfo}
            </div>
          )}
        </div>
      </article>
    </FadeIn>
  );
}

export default function FlexibleLearningOptions({ data }) {
  const options = data?.learningFormats || [];

  if (!data || options.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-background)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Editorial section introduction */}
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              {data.eyebrow && (
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-secondary)] sm:text-sm">
                  {data.eyebrow}
                </p>
              )}

              <h2 className="max-w-xl font-heading text-3xl font-black leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
                {data.heading}
              </h2>
            </div>

            {data.description && (
              <p className="max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base sm:leading-8 lg:pb-1">
                {data.description}
              </p>
            )}
          </div>
        </FadeIn>

        {/* Learning options */}
        <div className="mt-10 -mx-5 px-5
                    flex gap-4 overflow-x-auto
                    snap-x snap-mandatory
                    pb-5
                    md:mx-0 md:grid md:grid-cols-2
                    md:gap-6 md:overflow-visible md:px-0 md:pb-0
                    lg:mt-14
        ">
          {options.map((option, index) => (
            <LearningOptionCard
              key={`${option.heading}-${index}`}
              option={option}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
