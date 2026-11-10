

import DeliveryApproach from "../components/programs/DeliveryApproach";
import DevelopmentAreas from "../components/programs/DevelopmentAreas";
import ProgramsByAudience from "../components/programs/ProgramsByAudience";
import ProgramsHero from "../components/programs/ProgramsHero";
import CTASection from "../components/ui/CTASection";

export default function Programs() {
  return (
      <main className="academy-theme">
        <ProgramsHero />
        <DevelopmentAreas />
        <ProgramsByAudience />
        <DeliveryApproach />
        <CTASection
          eyebrow="Your next step starts here"
          title="Tell us what you want to develop."
          description="Whether you're developing people, strengthening an organisation, growing personally, or preparing to train others, we can explore the right approach together."
          variant="blush"
          primaryLabel="Discuss Your Development Goals"
          primaryTo="/contact"
          secondaryLabel="Explore Our Programs"
          secondaryTo="#programs"
      />
      </main>
    );
}