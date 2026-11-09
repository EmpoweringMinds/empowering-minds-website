import WhoWeAre from "../components/about/WhoWeAre";
import FoundationsSection from "../components/about/Foundations";
import FounderSection from "../components/about/FounderSection";
import WhyEmpoweringMinds from "../components/about/WhyEmpoweringMinds";
import TrainerPreview from "../components/sections/TrainerPreview";
import DevelopmentPathways from "../components/about/DevelopmentPathways";
import TestimonialSection from "../components/sections/TestimonialSection";
import CTASection from "../components/ui/CTASection";
import AboutHero from "../components/about/AboutHero";



export default function TestAbout() {
  return (
    <main className="academy-theme">
      <AboutHero />
      <WhoWeAre />
      <FoundationsSection />
      <FounderSection />
      <TrainerPreview />
      <WhyEmpoweringMinds />
      <DevelopmentPathways />
      <TestimonialSection />
      <CTASection 
        title="Let's start a conversation."
        description="Tell us what you're looking to develop. We'd be happy to explore how Empowering Minds can help."
        variant="blush"
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabelIsVisible = {false}
        />
    </main>
  );
}