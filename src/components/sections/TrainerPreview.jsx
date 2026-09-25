import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import TrainerCard from "../common/TrainerCard";
import FadeIn from "../ui/FadeIn";

import { getTrainers } from "../../cms/trainers";
import { useTrainers } from "../../cms/useTrainers";

import { useState, useEffect } from "react";

export default function TrainerPreview() {
  const [cmsTrainers, setCmsTrainers] = useState([]);
  
  const {
    trainers,
    loading,
    error,
  } = useTrainers();
  const featuredTrainers = trainers.slice(0, 3);
  useEffect(() => {
    getTrainers()
    .then(setCmsTrainers)
    .catch((error) => {
      console.error("Failed to load trainers from Sanity:", error);
    });
  }, []);
      
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
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
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
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {featuredTrainers.map((trainer, index) => (
            <FadeIn key={trainer.id} delay={index * 0.06}>
              <TrainerCard 
                trainer={trainer} 
                profilePath="/trainers"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}