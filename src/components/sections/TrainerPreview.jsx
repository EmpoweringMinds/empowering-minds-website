
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import TrainerCard from "../trainers/TrainerCard";
import FadeIn from "../ui/FadeIn";
import { useTrainers } from "../../cms/useTrainers";

const trainerTones = ["cream", "blush", "olive"];

export default function TrainerPreview() {
  const { trainers, loading, error } = useTrainers();

  const previewTrainers = trainers.slice(0, 3);

  if (loading) {
    return <div>Loading trainers...</div>;
  }

  if (error) {
    return (
      <div>
        Unable to load trainers right now.
      </div>
    );
  }

  if (!previewTrainers.length) return null;

  return (
    <section className="
      overflow-hidden
      bg-[var(--color-background)]
      py-16 sm:py-20 lg:py-24
    ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Editorial introduction */}
        <FadeIn>
          <div className="
            flex flex-col gap-6
            sm:flex-row sm:items-end sm:justify-between
          ">
            <div className="max-w-2xl">

              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="
                    h-[3px] w-10 rounded-full
                    bg-[var(--color-primary)]
                  "
                />

                <p className="
                  text-xs font-bold uppercase
                  tracking-[0.22em]
                  text-[var(--color-primary)]
                ">
                  The People Behind the Learning
                </p>
              </div>

              <h2 className="
                mt-5 font-heading
                text-3xl font-bold
                leading-tight tracking-tight
                text-[var(--color-secondary)]
                sm:text-4xl lg:text-5xl
              ">
                Experience, perspective
                <span className="text-[var(--color-primary)]">
                  {" "}and a passion for growth.
                </span>
              </h2>

              <p className="
                mt-5 max-w-xl
                text-sm leading-7
                text-[var(--color-text-secondary)]
                sm:text-base sm:leading-8
              ">
                Meet the professionals who bring practical knowledge,
                fresh perspectives and meaningful learning experiences
                to individuals and organisations.
              </p>
            </div>

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
          {previewTrainers.map((trainer, index) => (
            <div
              key={trainer.id}
              className="
                min-w-0 flex-[0_0_88%]
                snap-start
                sm:flex-auto
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

          {/* Mobile team CTA */}
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
        </div>

      </div>
    </section>
  );
}
