
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
} from "lucide-react";
import * as Icons from "lucide-react";

import FadeIn from "../ui/FadeIn";

function PathwayPanel({ pathway, index}) {
  const Icon = Icons[pathway.iconName] || Icons.CircleQuestionMark;
  const Symbol = Icons[pathway.symbol] || Icons.BadgeQuestionMark;
  const isAcademy = pathway.theme === "academy";

  return (
    <article
      className={`
        relative isolate flex h-full min-h-[560px]
        flex-col overflow-hidden rounded-[2rem]
        p-6 sm:min-h-[600px] sm:p-9 lg:p-10
        ${
          isAcademy
            ? "bg-[var(--color-soft-accent)] text-[var(--color-secondary)]"
            : "bg-[var(--color-olive)] text-white"
        }
      `}
    >
      {/* Organic decoration */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute -right-24 -top-24
          h-72 w-72 rounded-full border-[30px]
          ${
            isAcademy
              ? "border-[var(--color-primary)]/10"
              : "border-white/10"
          }
        `}
      />

      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute -bottom-24 -left-20
          h-72 w-72 rounded-full blur-3xl
          ${
            isAcademy
              ? "bg-[var(--color-primary)]/15"
              : "bg-[var(--color-soft-accent)]/15"
          }
        `}
      />

      <div className="relative z-10 flex flex-1 flex-col">

        {/* Eyebrow */}
        <div className="flex items-center justify-between gap-3">

          <span
            className={`
              text-xs font-bold uppercase tracking-[0.2em]
              ${
                isAcademy
                  ? "text-[var(--color-primary)]"
                  : "text-white/75"
              }
            `}
          >
            {pathway.number} / {pathway.eyebrow}
          </span>

          <Icon
            size={24}
            strokeWidth={1.5}
            aria-hidden="true"
            className={
              isAcademy
                ? "text-[var(--color-primary)]"
                : "text-[var(--color-soft-accent)]"
            }
          />

        </div>

        {/* Heading and description */}
        <div className="mt-9">

          <h3 className="max-w-lg text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.65rem]">
            {pathway.title}
          </h3>

          <p
            className={`
              mt-5 max-w-lg text-sm leading-7 sm:text-base sm:leading-8
              ${
                isAcademy
                  ? "text-[var(--color-secondary)]/80"
                  : "text-white/85"
              }
            `}
          >
            {pathway.description}
          </p>

        </div>

        {/* Decorative visual composition */}
        <div className="relative my-8 flex flex-1 min-h-[170px] items-center justify-center">

          <div
            aria-hidden="true"
            className={`
              absolute h-44 w-44 rounded-full border
              sm:h-52 sm:w-52
              ${
                isAcademy
                  ? "border-[var(--color-primary)]/25"
                  : "border-white/25"
              }
            `}
          />

          <div
            aria-hidden="true"
            className={`
              absolute h-36 w-36 rounded-full
              sm:h-44 sm:w-44
              ${
                isAcademy
                  ? "bg-[var(--color-primary)]/15"
                  : "bg-white/10"
              }
            `}
          />

          <div
            className={`
              relative z-10 flex h-24 w-24 items-center justify-center
              rounded-full shadow-lg sm:h-28 sm:w-28
              ${
                isAcademy
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--color-soft-accent)] text-[var(--color-secondary)]"
              }
            `}
          >
            <Symbol size={48} strokeWidth={1.2} />
          </div>

          <span
            aria-hidden="true"
            className={`
              absolute bottom-0 right-0 text-8xl font-black
              leading-none tracking-tighter opacity-10
              sm:text-9xl
            `}
          >
            {pathway.number}
          </span>

          <span
            aria-hidden="true"
            className={`
              absolute left-0 top-3 h-5 w-5 rounded-full
              ${
                isAcademy
                  ? "bg-[var(--color-primary)]"
                  : "bg-[var(--color-soft-accent)]"
              }
            `}
          />

        </div>

        {/* CTA */}
        <div
          className={`
            relative z-10 border-t pt-6
            ${
              isAcademy
                ? "border-[var(--color-primary)]/25"
                : "border-white/25"
            }
          `}
        >
          <Link
            to={pathway.link}
            className={`
              group inline-flex w-full items-center justify-between gap-4
              rounded-full px-6 py-4 text-sm font-bold
              transition-all duration-300
              ${
                isAcademy
                  ? "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-primary)]"
                  : "bg-[var(--color-background)] text-[var(--color-secondary)] hover:bg-[var(--color-soft-accent)]"
              }
            `}
          >
            {pathway.ctaLabel}

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

      </div>
    </article>
  );
}

export default function DevelopmentPathways({data}) {
  if(!data?.developmentPathwayCards?.length) return null;

  const pathways = data?.developmentPathwayCards || [];
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)] py-16 sm:py-20 lg:py-28">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Introduction */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">
              {data.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-[var(--color-secondary)] sm:text-5xl lg:text-6xl">
              {data.heading}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
              {data.description}
            </p>

          </div>
        </FadeIn>

        {/* Pathway panels */}
        <div
          className="
            -mx-4 mt-10 flex snap-x snap-mandatory gap-4
            overflow-x-auto px-4 pb-5
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:mx-0 sm:mt-14 sm:px-0
            lg:grid lg:grid-cols-2 lg:overflow-visible
          "
        >

          {pathways.map((pathway, index) => (
            <FadeIn
              key={pathway.number}
              delay={index * 0.1}
              className="
                w-[88%] shrink-0 snap-center
                sm:w-[75%]
                lg:w-auto
              "
            >
              <PathwayPanel
                pathway={pathway}
                index={index}
              />
            </FadeIn>
          ))}

        </div>

        {/* Mobile swipe hint */}
        <p className="mt-2 text-center text-xs font-medium text-[var(--color-text-secondary)] sm:hidden">
          Swipe to explore both pathways →
        </p>

      </div>
    </section>
  );
}
