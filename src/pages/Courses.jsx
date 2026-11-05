
import { useCoursesPage } from "../cms/useCoursesPage";
import CoursesHero from "../components/courses/CoursesHero";
import CoursesIntroduction from "../components/courses/CoursesIntroduction";
import DevelopmentAreas from "../components/courses/DevelopmentAreas";
import CourseDirectory from "../components/courses/CourseDirectory";
import AdditionalModules from "../components/courses/AdditionalModules";
import AudienceSection from "../components/courses/AudienceSection";
import DevelopmentApproach from "../components/courses/DevelopmentApproach";
import LearningFormats from "../components/courses/LearningFormats";
import CoursesCTA from "../components/courses/CoursesCTA";

export default function Courses() {
  const { coursesPage, loading, error } = useCoursesPage();

  if (loading) {
    return (
      <main className="academy-theme min-h-screen flex items-center justify-center">
        <p className="text-[var(--color-text-secondary)]">
          Loading courses...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="academy-theme min-h-screen flex items-center justify-center px-6">
        <p className="text-[var(--color-error)]">
          Unable to load courses. Please try again later.
        </p>
      </main>
    );
  }

  if (!coursesPage) {
    return (
      <main className="academy-theme min-h-screen flex items-center justify-center">
        <p className="text-[var(--color-text-secondary)]">
          Courses page content is currently unavailable.
        </p>
      </main>
    );
  }

  return (
    <main className="academy-theme">
      <CoursesHero data={coursesPage.hero} />
      <CoursesIntroduction data={coursesPage.introduction} />
      <DevelopmentAreas data={coursesPage.developmentAreas} />
      <CourseDirectory courses={coursesPage.courses} />
      <AdditionalModules modules={coursesPage.additionalModules} />
      <AudienceSection data={coursesPage.audience} />
      <DevelopmentApproach data={coursesPage.developmentApproach} />
      <LearningFormats data={coursesPage.learningFormats} />
      <CoursesCTA data={coursesPage.finalCTA} />
    </main>
  );
}
