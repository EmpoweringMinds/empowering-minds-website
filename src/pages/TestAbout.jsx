import { useAboutPage } from "../cms/useAboutPage";
import WhoWeAre from "../components/about/WhoWeAre";
import FoundationsSection from "../components/about/Foundations";
import FounderSection from "../components/about/FounderSection";
import WhyEmpoweringMinds from "../components/about/WhyEmpoweringMinds";
import TrainerPreview from "../components/sections/TrainerPreview";
import DevelopmentPathways from "../components/about/DevelopmentPathways";
import TestimonialSection from "../components/sections/TestimonialSection";
import CTASection from "../components/ui/CTASection";
import AboutHero from "../components/about/AboutHero";
import AboutPageCTA from "../components/about/AboutPageCTA";



export default function TestAbout() {
const { aboutPage, loading, error } = useAboutPage();

    if (loading) {
    return (
        <main className="academy-theme min-h-screen flex items-center justify-center">
        <p className="text-[var(--color-text-secondary)]">
            Loading About Page...
        </p>
        </main>
    );
    }

    if (error) {
    return (
        <main className="academy-theme min-h-screen flex items-center justify-center px-6">
        <p className="text-[var(--color-error)]">
            Unable to Page. Please try again later.
        </p>
        </main>
    );
    }

    if (!aboutPage) {
    return (
        <main className="academy-theme min-h-screen flex items-center justify-center">
        <p className="text-[var(--color-text-secondary)]">
            About page content is currently unavailable.
        </p>
        </main>
    );
    }
  return (
    <main className="academy-theme">
      <AboutHero data={aboutPage.hero}/>
      <WhoWeAre data={aboutPage.introduction}/>
      <FoundationsSection data={aboutPage.foundations}/>
      <FounderSection data={aboutPage.founderSection}/>
      <TrainerPreview />
      <WhyEmpoweringMinds data={aboutPage.whyEmpoweringMinds}/>
      <DevelopmentPathways data={aboutPage.developmentPathways}/>
      <TestimonialSection />
      <AboutPageCTA data={aboutPage.finalCTA}/>
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