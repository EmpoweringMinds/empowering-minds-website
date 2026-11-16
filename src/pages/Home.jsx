import { useHomePage } from "../cms/useHomePage";
import { useAboutPage } from "../cms/useAboutPage";
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
  const { aboutPage, loading:pageLoading, error:pageError } = useAboutPage();

  console.log("Homepage data:", homePage);
  console.log("Aboutpage data:", aboutPage);

  if (loading || pageLoading) return <p>Loading homepage...</p>;

  if (error || pageError) return <p>Unable to load homepage.</p>;

  if ((!homePage) || (!aboutPage)) return <p>Homepage content not found.</p>;

  return (
    <main className="academy-theme">
      {/* Existing sections */}
      <HomeHero data={homePage.hero}/>
      <AboutPreview data={homePage.aboutPreview}/>
      <CoursePreview />
      <DevelopmentPathwaysPreview data={aboutPage.developmentPathways}/>
      <AcademyPhilosophy data={homePage.academyPhilosophy}/>
      <TrainerPreview />
      <WorkshopPreview />
      <TestimonialSection />
      <HomepageFinalCTA data={homePage.finalCTA}/>
    </main>
  );
}