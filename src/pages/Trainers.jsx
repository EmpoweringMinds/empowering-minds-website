
import FounderSection from "../components/trainers/FounderSection";
import TrainersGrid from "../components/trainers/TrainersGrid";
import TrainersHero from "../components/trainers/TrainersHero";

import { useTrainers } from "../cms/useTrainers";
import { useTrainersPage } from "../cms/useTrainersPage";

import TestimonialSection from "../components/sections/TestimonialSection";
import CTASection from "../components/ui/CTASection";

export default function Trainer() {
  // Individual trainer profiles
  const {
    trainers,
    loading: trainersLoading,
    error: trainersError,
  } = useTrainers();

  // Trainers page content
  const {
    trainersPage,
    loading: pageLoading,
    error: pageError,
  } = useTrainersPage();

  // Wait for page-level content
  if (pageLoading) {
    return (
    <main className="academy-theme min-h-screen flex items-center justify-center">
        <p className="text-[var(--color-text-secondary)]">
            Loading Trainers...
        </p>
      </main>
  );
}

  if (pageError || !trainersPage) {
    return (
      <main className="academy-theme min-h-screen flex items-center justify-center px-6">
        <p className="text-[var(--color-error)]">
            Unable to load Trainers. Please try again later.
        </p>
      </main>
    );
  }

  const {
    hero,
    fromFounder,
    directorySection,
    finalCTA,
  } = trainersPage;

  return (
    <main className="academy-theme">

      {/* Page hero */}
      <TrainersHero data={hero} />

      {/* Founder introduction */}
      <FounderSection data={fromFounder} />

      {/* Trainer directory */}
      {trainersLoading ? (
        <div className="py-16 text-center">
          <p className="text-[var(--color-text-secondary)]">
            Loading trainers...
          </p>
        </div>
      ) : trainersError ? (
        <div className="py-16 text-center">
          <p className="text-[var(--color-error)]">
            Unable to load trainers right now.
          </p>
        </div>
      ) : (
        <TrainersGrid
          trainers={trainers}
          section={directorySection}
        />
      )}

      {/* Testimonials */}
      <TestimonialSection />

      {/* Final CTA */}
      <CTASection
        eyebrow="Let's grow together"
        title={finalCTA.heading}
        description={finalCTA.description}
        primaryLabel={finalCTA.primaryCTA}
        primaryTo="/courses"
        secondaryLabel={finalCTA.secondaryCTA}
        secondaryTo="/programs"
        variant="warm"
      />

    </main>
  );
}
