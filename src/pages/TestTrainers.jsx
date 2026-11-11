import FounderSection from "../components/trainers/FounderSection";
import TrainersGrid from "../components/trainers/TrainersGrid";
import TrainersHero from "../components/trainers/TrainersHero";
import { useTrainers } from "../cms/useTrainers";
import { useState, useEffect } from "react";
import { getTrainers } from "../cms/trainers";
import TestimonialSection from "../components/sections/TestimonialSection";
import CTASection from "../components/ui/CTASection";


export default function TestTrainer () {
    const [, setCmsTrainers] = useState([]);

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
    return(
        <main className="academy-theme">
            <TrainersHero />
            <FounderSection />
            <TrainersGrid trainers={trainers}/>
            <TestimonialSection />
            <CTASection
                eyebrow="Let's grow together"
                title="The right guidance can change what's possible."
                description="Behind every meaningful learning experience is someone who helps you see things differently. Explore our courses or talk to us about finding the right learning experience for your goals."
                primaryLabel="Explore Courses"
                primaryTo="/courses"
                secondaryLabel="Explore Programs"
                secondaryTo="/programs"
                variant="warm"
                />
        </main>
    )
}