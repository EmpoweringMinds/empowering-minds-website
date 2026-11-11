
import { useState } from "react";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";
import TrainerCard from "./trainerCard";

const layouts = [
  { span: "lg:col-span-5", orientation: "portrait" },
  { span: "lg:col-span-7", orientation: "landscape" },
  { span: "lg:col-span-7", orientation: "landscape" },
  { span: "lg:col-span-5", orientation: "portrait" },
];

const tones = ["cream", "blush", "olive", "brown"];

export default function TrainersGrid({ trainers = [] }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedId((current) => current === id ? null : id);
  };

  if (!trainers.length) return null;

  return (
    <section
      id="trainers"
      className="
        bg-[var(--color-background)]
        py-16 sm:py-20 lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section introduction */}
        <FadeIn>
          <div className="mb-10 max-w-3xl sm:mb-14">
            <SectionHeader
              eyebrow="The People Behind the Learning"
              title="Different perspectives. Shared purpose."
              description="Meet the professionals who bring their experience, knowledge and perspectives into our learning experiences."
              align="left"
            />
          </div>
        </FadeIn>

        {/* Asymmetrical trainer grid */}
        <div className="
          grid grid-cols-1 gap-5
          sm:grid-cols-2 sm:gap-6
          lg:grid-cols-12 lg:gap-7
        ">
          {trainers.map((trainer, index) => {
            const layout = layouts[index % layouts.length];
            const tone = tones[index % tones.length];

            return (
              <div
                key={trainer.id}
                className={`
                  min-w-0 sm:col-span-1
                  ${layout.span}
                `}
              >
                <FadeIn
                  delay={(index % 2) * 0.08}
                  className="h-full"
                >
                  <TrainerCard
                    trainer={trainer}
                    expanded={expandedId === trainer.id}
                    onToggleExpand={toggleExpanded}
                    tone={tone}
                    orientation={layout.orientation}
                  />
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
