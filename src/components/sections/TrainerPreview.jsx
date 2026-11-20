
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import TrainerCard from "../trainers/TrainerCard";
import FadeIn from "../ui/FadeIn";
import { useTrainers } from "../../cms/useTrainers";
import SectionHeader from "../ui/SectionHeader";

const trainerTones = ["cream", "blush", "olive"];

// Matches the structure of TrainerCard while data loads.
function TrainerCardSkeleton() {
  return (
    <article
      aria-hidden="true"
      className="
        flex h-full flex-col overflow-hidden
        rounded-[1.8rem]
        bg-[var(--color-surface-warm)]
      "
    >
      {/* Portrait placeholder */}
      <div className="
        aspect-[5/4] w-full
        animate-pulse bg-[var(--color-border)]/50
      " />

      {/* Content placeholders */}
      <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
        <div className="
          h-3 w-24 rounded-full
          animate-pulse bg-[var(--color-border)]/60
        " />

        <div className="
          mt-3 h-8 w-3/4 rounded-md
          animate-pulse bg-[var(--color-border)]/60
        " />

        <div className="
          mt-3 h-4 w-2/3 rounded-full
          animate-pulse bg-[var(--color-border)]/40
        " />

        <div className="mt-5 space-y-3">
          <div className="
            h-3 w-full rounded-full
            animate-pulse bg-[var(--color-border)]/40
          " />
          <div className="
            h-3 w-full rounded-full
            animate-pulse bg-[var(--color-border)]/40
          " />
          <div className="
            h-3 w-4/5 rounded-full
            animate-pulse bg-[var(--color-border)]/40
          " />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="
                h-7 w-20 rounded-full
                animate-pulse bg-[var(--color-border)]/40
              "
            />
          ))}
        </div>

        <div className="mt-auto pt-7">
          <div className="
            h-4 w-28 rounded-full
            animate-pulse bg-[var(--color-border)]/50
          " />
        </div>
      </div>
    </article>
  );
}

// Mobile CTA card
function MobileTeamCTA() {
  return (
    <Link
      to="/trainers"
      className="
        flex flex-[0_0_88%]
        snap-start flex-col
        items-start justify-between
        overflow-hidden rounded-[1.8rem]
        bg-[var(--color-secondary)]
        p-7 text-[var(--color-background)]
        transition-transform duration-300
        hover:-translate-y-1
        sm:hidden
      "
    >
      <div>
        <p className="
          text-xs font-bold uppercase
          tracking-[0.2em]
          text-[var(--color-primary)]
        ">
          More perspectives
        </p>

        <h3 className="
          mt-5 max-w-[240px]
          font-heading text-3xl
          font-bold leading-tight
        ">
          There's more to meet.
        </h3>

        <p className="
          mt-4 max-w-[240px]
          text-sm leading-7
          text-[var(--color-background)]/75
        ">
          Explore our wider network of trainers
          and discover the expertise behind
          our learning experiences.
        </p>
      </div>

      <span className="
        mt-10 inline-flex items-center gap-3
        rounded-full border border-white/25
        px-5 py-3 text-sm font-bold
      ">
        Meet the whole team
        <ArrowUpRight size={17} />
      </span>
    </Link>
  );
}

function SwipeHint() {
  return (
    <div className="mt-3 flex items-center justify-center gap-3 md:hidden">
      <span className="h-px w-8 bg-[var(--color-border)]" />
      <p className="
        text-[10px] font-bold uppercase
        tracking-[0.16em]
        text-[var(--color-text-muted)]
      ">
        Swipe to explore
      </p>
      <span className="h-px w-8 bg-[var(--color-border)]" />
    </div>
  );
}

export default function TrainerPreview() {
  const { trainers, loading, error } = useTrainers();

  const previewTrainers = trainers.slice(0, 3);

  if (!loading && error) {
    return (
      <section className="
        bg-[var(--color-background)]
        px-4 py-16 text-center
        sm:py-20 lg:py-24
      ">
        Unable to load trainers right now.
      </section>
    );
  }

  if (!loading && !previewTrainers.length) return null;

  return (
    <section
      aria-busy={loading}
      className="
        overflow-hidden
        bg-[var(--color-background)]
        py-16 sm:py-20 lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Editorial introduction */}
        <FadeIn>
          <div className="
            flex flex-col gap-6
            sm:items-end sm:justify-between
          ">
            <SectionHeader
              variant="split"
              size="small"
              theme="dark"
              eyebrow="The People Behind the Learning"
              title="Experience, perspective and a passion for growth."
              description="Meet the professionals who bring practical knowledge, fresh perspectives and meaningful learning experiences to individuals and organisations."
            />

            {/* Desktop CTA */}
            <Link
              to="/trainers"
              className="
                group hidden shrink-0
                items-center gap-2
                rounded-full border
                border-[var(--color-primary)]/30
                px-6 py-3
                text-sm font-bold
                text-[var(--color-secondary)]
                transition-all duration-300
                hover:bg-[var(--color-soft-accent)]/40
                sm:inline-flex
              "
            >
              Meet the whole team

              <ArrowUpRight
                size={17}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </div>
        </FadeIn>

        {/* Trainer cards */}
        <div
          className="
            mt-10 -mx-4 flex gap-5
            overflow-x-auto px-4 pb-5
            snap-x snap-mandatory
            overscroll-x-contain
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            sm:mx-0 sm:grid sm:grid-cols-2
            sm:gap-6 sm:overflow-visible
            sm:px-0 sm:pb-0

            lg:mt-14 lg:grid-cols-3 lg:gap-7
          "
          aria-label="Meet our trainers"
        >
          {loading ? (
            <>
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="
                    min-w-0 flex-[0_0_88%]
                    snap-start sm:flex-auto
                  "
                >
                  <TrainerCardSkeleton />
                </div>
              ))}

              <div className="
                flex flex-[0_0_88%]
                snap-start flex-col
                overflow-hidden rounded-[1.8rem]
                bg-[var(--color-secondary)]
                p-7 sm:hidden
              ">
                <div className="
                  h-3 w-28 rounded-full
                  animate-pulse bg-white/20
                " />
                <div className="
                  mt-8 h-9 w-4/5 rounded-md
                  animate-pulse bg-white/20
                " />
                <div className="
                  mt-5 h-4 w-full rounded-full
                  animate-pulse bg-white/15
                " />
                <div className="
                  mt-3 h-4 w-4/5 rounded-full
                  animate-pulse bg-white/15
                " />
                <div className="
                  mt-auto pt-10
                  h-10 w-44 rounded-full
                  animate-pulse bg-white/20
                " />
              </div>
            </>
          ) : (
            <>
              {previewTrainers.map((trainer, index) => (
                <div
                  key={trainer.id}
                  className="
                    min-w-0 flex-[0_0_88%]
                    snap-start sm:flex-auto
                  "
                >
                  <FadeIn
                    delay={index * 0.08}
                    className="h-full"
                  >
                    <TrainerCard
                      trainer={trainer}
                      profilePath="/trainers"
                      tone={trainerTones[index % trainerTones.length]}
                      orientation="portrait"
                    />
                  </FadeIn>
                </div>
              ))}

              <MobileTeamCTA />
            </>
          )}
        </div>

        <SwipeHint />
      </div>
    </section>
  );
}
