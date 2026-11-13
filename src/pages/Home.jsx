import { useHomePage } from "../cms/useHomePage";
import CoursePreview from "../components/common/CoursesPreview";
import WorkshopPreview from "../components/common/WorkshopPreview";
import AboutPreview from "../components/home/AboutPreview";
import AcademyPhilosophy from "../components/home/AcademyPhilosophy";
import DevelopmentPathwaysPreview from "../components/home/DevelopmentPathwaysPreview";
import HomeHero from "../components/home/HomeHero";
import HomepageFinalCTA from "../components/home/HomepageFinalCTA";
import TestimonialSection from "../components/sections/TestimonialSection";
import TrainerPreview from "../components/sections/TrainerPreview";

export default function Home() {
  const { homePage, loading, error } = useHomePage();

  console.log("Homepage data:", homePage);

  if (loading) return <p>Loading homepage...</p>;

  if (error) return <p>Unable to load homepage.</p>;

  if (!homePage) return <p>Homepage content not found.</p>;

  return (
    <main className="academy-theme">
      {/* Existing sections */}
      <HomeHero data={homePage.hero}/>
      <AboutPreview />
      <CoursePreview />
      <DevelopmentPathwaysPreview />
      <AcademyPhilosophy />
      <TrainerPreview />
      <WorkshopPreview />
      <TestimonialSection />
      <HomepageFinalCTA />
    </main>
  );
}