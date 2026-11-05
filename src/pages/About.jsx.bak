import { Brain, HeartHandshake, Lightbulb, TrendingUp, Users } from "lucide-react";
import { aboutContent } from "../data/siteContent";
import CTASection from "../components/ui/CTASection";
import FadeIn from "../components/ui/FadeIn";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import FeatureCard from "../components/ui/FeatureCard";
import HumanPotentialVisual from "../components/ui/HumanPotentialVisual"
import TrainerPreview from "../components/sections/TrainerPreview";
import TestimonialSection from "../components/sections/TestimonialSection";

const foundations = [
  {
    number: "01",
    title: "Applied Psychology",
    description:
      "Understanding the human factors that shape behaviour, decisions, and performance.",
    icon: Brain,
  },
  {
    number: "02",
    title: "Behavioural Science",
    description:
      "Turning behavioural insight into practical approaches for stronger performance and alignment.",
    icon: Users,
  },
  {
    number: "03",
    title: "Emotional Intelligence",
    description:
      "Building emotional awareness, regulation, resilience, and stronger interpersonal effectiveness.",
    icon: HeartHandshake,
  },
  {
    number: "04",
    title: "Neuro-Linguistic Programming",
    description:
      "Using NLP as part of a structured approach to communication, behaviour, and personal development.",
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "Performance Acceleration",
    description:
      "Connecting human capability with measurable institutional and organisational outcomes.",
    icon: TrendingUp,
  },
];

export default function About() {
  return (
    <main>
      <PageHero
        title={aboutContent.heroTitle}
        description={aboutContent.heroText}
      />

      {/* Who We Are */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <FadeIn>
              <SectionHeader
                eyebrow="Who We Are"
                title={aboutContent.whoWeAreTitle}
                description={aboutContent.whoWeAre}
                prop="underline"
              />
            </FadeIn>

            <FadeIn
              delay={0.08}>
                <FeatureCard 
                title="Our Approach"
                description={aboutContent.approach}
                variant="accent"></FeatureCard>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* Our Foundations */}
      <section className="relative overflow-hidden bg-[var(--color-taupe)] py-20 sm:py-24 lg:py-28">
        {/* Ambient decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[var(--color-primary)]/40 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[var(--color-primary)]/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Content */}
            <div>
              <FadeIn>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                  Our Foundations
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  The disciplines behind how we develop people.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                  Our work brings together complementary disciplines and
                  frameworks to create structured interventions for
                  meaningful human and organisational development.
                </p>
              </FadeIn>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {foundations.map((item, index) => (
                  <FeatureCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    variant="featured"
                    delay={index * 0.06}
                    className={
                      index === foundations.length - 1
                        ? "sm:col-span-2"
                        : ""
                    }
                  />
                ))}
              </div>
            </div>

            {/* Visual */}
            <FadeIn
              delay={0.12}
              className="relative flex min-h-[420px] items-center justify-center lg:min-h-[620px]"
            >
              <div
                aria-hidden="true"
                className="absolute h-72 w-72 rounded-full bg-[var(--color-cream)]/30 blur-3xl sm:h-96 sm:w-96"
              />

              <div className="relative w-full max-w-[520px]">
                <HumanPotentialVisual className="h-auto w-full" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn
            className="
              overflow-hidden rounded-[36px]
              border border-white/10
              [background-image:var(--gradient-soft)]
              shadow-[var(--shadow-xl)]
            "
          >
            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
              {/* Founder image */}
              <div className="relative min-h-[420px] overflow-hidden sm:min-h-[500px]">
                <img
                  src="/images/trainers/ira-saha.jpg"
                  alt="Ira Saha, Founder of Empowering Minds"
                  className="
                    absolute inset-0 h-full w-full object-cover
                    object-center
                  "
                />

                {/* Image treatment */}
                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[var(--color-primary)]
                    via-transparent
                    to-transparent
                    opacity-70
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    ring-1 ring-inset ring-white/10
                  "
                />

                {/* Small identity label */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                    Founder
                  </p>

                  <p className="mt-2 text-xl font-bold text-white">
                    Ira Saha
                  </p>
                </div>
              </div>

              {/* Founder message */}
              <div className="p-7 sm:p-10 lg:p-14">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
                  {aboutContent.founderTitle}
                </p>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-[var(--color-secondary)] sm:text-4xl">
                  {aboutContent.founderName}
                </h2>

                <p className="mt-2 text-sm font-medium text-[var(--color-primary)]/60">
                  {aboutContent.founderRole}
                </p>

                <div className="mt-8 space-y-5 text-base leading-8 text-[var(--color-secondary)]/75 sm:text-lg">
                  <p>{aboutContent.founderNote}</p>

                  <p>{aboutContent.founderNoteContinued}</p>

                  <p>{aboutContent.founderStory}</p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-7">
                  <p className="text-lg font-semibold leading-8 text-[var(--color-primary)] sm:text-xl">
                    {aboutContent.founderClosing}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <TrainerPreview />

      {/* Why Empowering Minds */}
      <section className="[background-image:var(--gradient-surface)] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              {/* Intro */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                  Our Difference
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--color-taupe)] sm:text-4xl lg:text-5xl">
                  {aboutContent.whyTitle}
                </h2>

                <p className="mt-6 max-w-md text-base leading-8 text-[var(--color-text-secondary)]/70 sm:text-lg">
                  Our approach combines psychological foundations,
                  structured development, and measurable performance
                  to create lasting human capital impact.
                </p>
              </div>

              {/* Principles */}
              <div className="divide-y divide-white/10">
                {aboutContent.whyPoints.map((point, index) => (
                  <FadeIn
                    key={point.title}
                    delay={index * 0.06}
                    className="group py-7 first:pt-0 last:pb-0 sm:py-8"
                  >
                    <div className="flex gap-5 sm:gap-7">
                      <span
                        className="
                          shrink-0 pt-1
                          text-sm font-bold tracking-[0.15em]
                          text-[var(--color-secondary)]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3
                          className="
                            text-xl font-bold tracking-tight text-[var(--color-text-muted)]
                            transition-colors duration-[var(--transition-base)]
                            group-hover:text-[var(--color-rust-light)]
                            sm:text-2xl
                          "
                        >
                          {point.title}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-primary)]/65 sm:text-base">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <TestimonialSection />

      <CTASection
        title="Let's build stronger human capital together."
        description="Talk to us about training, consulting, transformation, or placement initiatives for your institution or organisation."
        variant="warm"
      />
    </main>
  );
}