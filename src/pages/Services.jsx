import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Brain,
  Briefcase,
  HeartHandshake,
  Network,
} from "lucide-react";

import ProgramCard from "../components/programs/ProgramCard";
import CTASection from "../components/ui/CTASection";
import FadeIn from "../components/ui/FadeIn";
import FeatureCard from "../components/ui/FeatureCard";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { serviceGroups } from "../data/siteContent";

const developmentAreas = [
  {
    icon: Brain,
    title: "Mindset & Performance",
    description:
      "Building emotional regulation, resilience, focus, confidence, and the ability to sustain performance under pressure.",
  },
  {
    icon: Briefcase,
    title: "Professional & Corporate Skills",
    description:
      "Strengthening communication, workplace effectiveness, professional behaviour, and practical skills for modern organisations.",
  },
  {
    icon: Network,
    title: "Cognitive & Leadership Development",
    description:
      "Developing decision-making, leadership maturity, strategic thinking, and the cognitive capabilities needed for effective performance.",
  },
  {
    icon: HeartHandshake,
    title: "Interpersonal & Instructional Techniques",
    description:
      "Improving interpersonal effectiveness, communication, classroom engagement, and practical approaches to learning and development.",
  },
];

export default function Services() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlGroupId = searchParams.get("group");

  const selectedGroupId = serviceGroups.some(
    (group) => group.id === urlGroupId
  )
    ? urlGroupId
    : serviceGroups[0]?.id || null;

  const selectedGroup = serviceGroups.find(
    (group) => group.id === selectedGroupId
  );

  const handleGroupChange = (groupId) => {
    setSearchParams({ group: groupId }, { replace: true });
  };

  const handleEnquire = (program) => {
    const params = new URLSearchParams({
      type: "program",
      group: program.serviceGroup,
      service: program.id,
    });

    navigate(`/contact?${params.toString()}#form`);
  };

  return (
    <main className="academy-theme">
      {/* Hero */}
      <PageHero
        eyebrow="Our Services"
        title="Human capital development built around real outcomes"
        description="We design structured development interventions for institutions, organisations, individuals, and trainers — combining behavioural, emotional, and performance-focused capabilities."
        primaryCta={{
          label: "Explore Our Programs",
          to: "#programs",
        }}
        secondaryCta={{
          label: "Talk to Our Team",
          to: "/contact",
        }}
      />

      {/* Core Development Areas */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Core Development Areas"
            title="Development that goes beyond technical skills"
            description="Our work brings together performance, emotional intelligence, communication, leadership, behavioural alignment, and practical professional skills."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {developmentAreas.map((area, index) => (
              <FeatureCard
                key={area.title}
                icon={area.icon}
                title={area.title}
                description={area.description}
                variant="dark"
                delay={index * 0.06}
                className="min-h-[180px]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Programs by audience */}
      <section
        className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-24"
        id="programs"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Explore Our Programs"
            title="Where would you like to make a difference?"
            description="Choose the audience or area most relevant to you. Each group brings together development programmes designed around its needs."
          />

          {/* Audience selector */}
          <div className="mt-8 overflow-x-auto pb-2">
            <div
              className="flex min-w-max gap-2 rounded-full border border-[var(--color-border)] bg-white p-1.5 shadow-sm"
              role="tablist"
              aria-label="Program audiences"
            >
              {serviceGroups.map((group) => {
                const isSelected = group.id === selectedGroupId;

                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    id={`tab-${group.id}`}
                    aria-selected={isSelected}
                    onClick={() => handleGroupChange(group.id)}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      isSelected
                        ? "bg-[var(--color-primary)] text-white shadow-sm"
                        : "text-[var(--color-primary)] hover:bg-[var(--color-soft-accent)]"
                    }`}
                  >
                    {group.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected audience and its programs */}
          {selectedGroup && (
            <div
              className="mt-12"
              role="tabpanel"
              id={`panel-${selectedGroup.id}`}
              aria-labelledby={`tab-${selectedGroup.id}`}
            >
              <FadeIn>
                <div className="max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
                    {selectedGroup.eyebrow}
                  </p>

                  <h2 className="mt-3 text-2xl font-black tracking-tight text-[var(--color-primary)] sm:text-3xl">
                    {selectedGroup.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {selectedGroup.description}
                  </p>
                </div>
              </FadeIn>

              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                {selectedGroup.areas.map((program, index) => (
                  <ProgramCard
                    key={program.id}
                    program={{
                      ...program,
                      serviceGroup: selectedGroup.id,
                    }}
                    index={index}
                    onEnquire={handleEnquire}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Delivery approach */}
      <section className="relative overflow-hidden [background-image:var(--gradient-brand)] py-20 sm:py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--color-secondary)]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Our Approach
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Structured development.
                <br />
                <span className="text-white/60">
                  Measurable performance.
                </span>
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
                We do not simply conduct workshops. Our interventions are
                structured around institutional and organisational objectives,
                with a focus on behavioural alignment, resilience, capability,
                and sustainable performance.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-16 bg-[var(--color-secondary)]" />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                  Human Capital Development
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Tell us what you want to develop."
        description="Whether you're developing people, strengthening an organisation, growing personally, or preparing to train others, we can explore the right approach together."
        variant="blush"
        primaryLabel="Discuss Your Development Goals"
        primaryTo="/contact"
        secondaryLabel="Explore Our Programs"
        secondaryTo="#programs"
      />

      {/* Program details */}
    </main>
  );
}
