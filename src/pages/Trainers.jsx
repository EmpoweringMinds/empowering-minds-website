import TrainerCard from "../components/common/TrainerCard";
import FadeIn from "../components/ui/FadeIn";
import TrainerModal from "../components/common/TrainerModal";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import CTASection from "../components/ui/CTASection";
import TestimonialSection from "../components/sections/TestimonialSection";
import { aboutContent } from "../data/siteContent";

import { getTrainers } from "../cms/trainers";
import { useTrainers } from "../cms/useTrainers";


import { useState, useEffect } from "react";

export default function Trainers() {
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [cmsTrainers, setCmsTrainers] = useState([]);

    const {
      trainers,
      loading,
      error,
    } = useTrainers();

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
    <main className="bg-[var(--color-background)] text-[var(--color-text)]">
        {/* Hero */}
        <PageHero
        eyebrow="Our Trainers"
        title="People Who Turn Experience Into Development"
        description="Our trainers bring together professional experience, practical
                expertise, and a deep understanding of human development to
                create meaningful learning experiences."
        primaryCta={{
            label: "Meet Our Trainers",
            to: "#trainers"
        }}
        secondaryCta={{
            label: "Explore Our Programs",
            to: "/programs"
        }}
        />  
      {/* Founder */}
      <section className="bg-[var(--color-background)] py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div
              className="
                rounded-[28px]
                border border-white/10
                [background-image:var(--gradient-soft)]
                p-7 shadow-[var(--shadow-lg)]
                sm:p-9
              "
            >
              {/* Founder content */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
                  {aboutContent.founderShortTitle}
                </p>

                <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="text-2xl font-black tracking-tight text-[var(--color-secondary)]">
                    {aboutContent.founderName}
                  </h2>

                  <p className="text-sm font-medium text-[var(--color-primary)]/60">
                    {aboutContent.founderRole}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--color-secondary)]/75 sm:text-base">
                  {aboutContent.founderShortNote}
                </p>

                <p className="mt-4 text-sm font-semibold leading-7 text-[var(--color-primary)] sm:text-base">
                  {aboutContent.founderShortClosing}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>  

      {/* Trainers */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-12">
            <SectionHeader
            eyebrow="Our Expertise"
            title="A multidisciplinary team"
            description="Our trainer network brings together expertise across
                leadership, finance, entrepreneurship, emotional wellness,
                professional development, sustainability, and organisational
                transformation."
            align="center"
            />
            </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {trainers.map((trainer, index) => (
              <FadeIn key={trainer.id} delay={index * 0.06} className={trainer.featured ? "sm:col-span-2 lg:col-span-3" : ""}>
                <TrainerCard trainer={trainer}
                  onViewProfile={setSelectedTrainer}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* Closing CTA */}
        <CTASection
            title="Looking for the right expertise for your organisation?"
            description="Tell us about your development objectives and we can help
              identify the right training expertise for your audience"
            variant="blush"
            primaryLabel="Find the Right Training Expertise"
            primaryTo="/programs"
            secondaryLabel="Discuss Your Requirements"
            secondaryTo="/contact"
        />
    <TrainerModal
    trainer={selectedTrainer}
    onClose={() => setSelectedTrainer(null)}
    />
    </main>
  );
}