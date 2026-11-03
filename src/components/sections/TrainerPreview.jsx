
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import TrainerCard from "../common/TrainerCard";
import FadeIn from "../ui/FadeIn";

import { useTrainers } from "../../cms/useTrainers";

export default function TrainerPreview() {
  const { trainers, loading, error } = useTrainers();

  const featuredTrainers = trainers.slice(0, 3);

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

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Our Trainers
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Expertise grounded in experience
              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
                Our trainers bring practical expertise across leadership,
                finance, entrepreneurship, emotional wellness, professional
                development, and organisational transformation.
              </p>
            </div>

            <Link
              to="/trainers"
              className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)] sm:inline-flex"
            >
              Meet all trainers
              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </FadeIn>

        {/* Featured trainers */}
        <div
          className="
            mt-10
            -mx-4 px-4
            flex gap-5 overflow-x-auto
            snap-x snap-mandatory
            overscroll-x-contain
            pb-4
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            sm:mx-0 sm:px-0
            sm:grid sm:grid-cols-2 sm:gap-6
            sm:overflow-visible sm:pb-0

            lg:mt-12 lg:grid-cols-3 lg:gap-8
          "
          aria-label="Featured trainers"
        >
          {featuredTrainers.map((trainer, index) => (
            <div
              key={trainer.id}
              className="
                min-w-0 flex-[0_0_88%]
                snap-start
                sm:flex-auto
              "
            >
              <FadeIn delay={index * 0.06}>
                <TrainerCard
                  trainer={trainer}
                  profilePath="/trainers"
                />
              </FadeIn>
            </div>
          ))}
          <Link
          to="/trainers"
          className="
            flex flex-[0_0_88%] snap-start
            flex-col items-center justify-center
            rounded-2xl border
            border-[var(--color-border)]
            bg-[var(--color-surface)]
            p-8 text-center
            transition duration-300
            hover:shadow-md
            sm:hidden
          "
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Meet the team
          </span>

          <h3 className="mt-4 text-2xl font-semibold text-[var(--color-text)]">
            Meet all our trainers.
          </h3>

          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
            Explore our team
            <ArrowUpRight size={16} />
          </span>
        </Link>
        </div>
      </div>
    </section>
  );
}
