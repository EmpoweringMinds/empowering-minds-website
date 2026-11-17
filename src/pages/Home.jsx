
import { useHomePage } from "../cms/useHomePage";
import { useAboutPage } from "../cms/useAboutPage";

import CoursePreview from "../components/common/CoursesPreview";
import WorkshopPreview from "../components/common/WorkshopPreview";
import AboutPreview from "../components/home/AboutPreview";
import AcademyPhilosophy from "../components/home/AcademyPhilosophy";
import DevelopmentPathwaysPreview from "../components/home/DevelopmentPathwaysPreview";
import HomeHero from "../components/home/HomeHero";
import HomeHeroSkeleton from "../components/home/HomeSkeleton";
import HomepageFinalCTA from "../components/home/HomepageFinalCTA";

import TestimonialSection from "../components/sections/TestimonialSection";
import TrainerPreview from "../components/sections/TrainerPreview";

export default function Home() {
  const {
    homePage,
    loading,
    error,
  } = useHomePage();

  const {
    aboutPage,
    loading: pageLoading,
    error: pageError,
  } = useAboutPage();

  if (!loading && !homePage && error) {
    return (
      <main className="academy-theme">
        <p className="px-6 py-20 text-center">
          Unable to load homepage.
        </p>
      </main>
    );
  }

  if (!loading && !homePage) {
    return (
      <main className="academy-theme">
        <p className="px-6 py-20 text-center">
          Homepage content not found.
        </p>
      </main>
    );
  }

  return (
    <main className="academy-theme">

      {/* Hero */}
      {loading ? (
        <HomeHeroSkeleton />
      ) : (
        <HomeHero data={homePage.hero} />
      )}

      {/* Homepage content */}
      {homePage && (
        <>
          <AboutPreview data={homePage.aboutPreview} />

          <CoursePreview />
        </>
      )}

      {/* About page content */}
      {aboutPage && (
        <DevelopmentPathwaysPreview
          data={aboutPage.developmentPathways}
        />
      )}

      {/* Remaining sections */}
      {homePage && (
        <AcademyPhilosophy
          data={homePage.academyPhilosophy}
        />
      )}

      <TrainerPreview />

      <WorkshopPreview />

      <TestimonialSection />

      {homePage && (
        <HomepageFinalCTA data={homePage.finalCTA} />
      )}

    </main>
  );
}
