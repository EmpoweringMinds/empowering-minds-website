
import { useProgramsPage } from "../cms/useProgramsPage";
import DeliveryApproach from "../components/programs/DeliveryApproach";
import DevelopmentAreas from "../components/programs/DevelopmentAreas";
import ProgramsByAudience from "../components/programs/ProgramsByAudience";
import ProgramsCTA from "../components/programs/ProgramsCTA";
import ProgramsHero from "../components/programs/ProgramsHero";

export default function Programs() {
  const { programsPage, loading, error } = useProgramsPage();

  if (loading) {
    return (
      <main className="academy-theme min-h-screen flex items-center justify-center">
        <p className="text-[var(--color-text-secondary)]">
          Loading programs...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="academy-theme min-h-screen flex items-center justify-center px-6">
        <p className="text-[var(--color-error)]">
          Unable to load programs. Please try again later.
        </p>
      </main>
    );
  }

  if (!programsPage) {
    return (
      <main className="academy-theme min-h-screen flex items-center justify-center">
        <p className="text-[var(--color-text-secondary)]">
          Programs page content is currently unavailable.
        </p>
      </main>
    );
  }
  return (
      <main className="academy-theme">
        <ProgramsHero data={programsPage.hero}/>
        <DevelopmentAreas data={programsPage.developmentAreas}/>
        <ProgramsByAudience data={programsPage.programsByAudience}/>
        <DeliveryApproach data={programsPage.deliveryApproach}/>
        <ProgramsCTA data={programsPage.finalCTA} />
      </main>
    );
}