import { Brain, HeartHandshake, Lightbulb, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { academyAboutContent, aboutContent } from "../data/siteContent";
import CTASection from "../components/ui/CTASection";
import FadeIn from "../components/ui/FadeIn";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import FeatureCard from "../components/ui/FeatureCard";
import HumanPotentialVisual from "../components/ui/HumanPotentialVisual";
import TrainerPreview from "../components/sections/TrainerPreview";
import TestimonialSection from "../components/sections/TestimonialSection";
import { MobileDevelopmentTimeline } from "../utils/MobileDevTimeline";

const foundations = [
  {
    title: "Applied Psychology",
    description:
      "Understanding the human factors that shape behaviour, decisions and personal development.",
    icon: Brain,
  },
  {
    title: "Behavioural Science",
    description:
      "Understanding behavioural patterns and turning insight into practical approaches for everyday situations.",
    icon: Users,
  },
  {
    title: "Emotional Intelligence",
    description:
      "Developing emotional awareness, regulation, resilience and stronger interpersonal effectiveness.",
    icon: HeartHandshake,
  },
  {
    title: "Neuro-Linguistic Programming",
    description:
      "Exploring NLP-based approaches to communication, thought patterns, confidence and personal effectiveness.",
    icon: Lightbulb,
  },
  {
    title: "Performance Development",
    description:
      "Connecting personal capabilities with practical goals in academic, social and professional settings.",
    icon: TrendingUp,
  },
];

export default function About() {
  return (
    <main className="academy-theme">
      <PageHero
        eyebrow="ABOUT"
        title={academyAboutContent.heroTitle}
        description={academyAboutContent.heroText}
        primaryCta={{
          label: academyAboutContent.primaryCTA,
          as: "a",
          href: "https://wa.me/917908466757?text=Hello%20Empowering%20Minds%2C%20I%27d%20like%20to%20know%20more%20about%20your%20courses."
        }}
        secondaryCta={{
            label: academyAboutContent.secondaryCTA,
            to: "/courses",
        }}
      />

      {/* Understanding personality development */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-16">
            <FadeIn>
              <SectionHeader
                eyebrow="Understanding Personality Development"
                title={academyAboutContent.definitionTitle}
                description={academyAboutContent.definitionText}
                prop="underline"
              />
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
                {academyAboutContent.definitionSupportingText}
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-7 shadow-[var(--shadow-sm)] sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                  A whole-person approach
                </p>
                <p className="mt-5 text-lg font-semibold leading-8 text-[var(--color-secondary)] sm:text-xl">
                  {academyAboutContent.definitionClosing}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

{/* Scope of personality development */}
<section className="bg-[var(--color-surface-warm)] py-12 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionHeader
      eyebrow="What Development Can Include"
      title={academyAboutContent.scopeTitle}
      description={academyAboutContent.scopeIntro}
      align="center"
    />
{/* Mobile: scroll-stacking cards */}
<div className="mt-8 sm:hidden">
  {academyAboutContent.scopeCategories.map((category, index) => (
    <article
      key={category.title}
      className="sticky mb-4 min-h-36 rounded-2xl
        border border-[var(--color-border)]
        bg-[var(--color-background)]
        p-5 shadow-[var(--shadow-sm)]"
      style={{
        top: `calc(5rem + ${index * 0.85}rem)`,
        zIndex: index + 1,
      }}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center
          justify-center rounded-full
          bg-[var(--color-soft-accent)]
          text-xs font-bold text-[var(--color-secondary)]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="text-sm font-bold leading-6
          text-[var(--color-secondary)]"
        >
          {category.title}
        </h3>
      </div>

      <p className="mt-3 text-xs leading-6
        text-[var(--color-text-secondary)]"
      >
        {category.description}
      </p>
    </article>
  ))}
</div>
    {/* Tablet and desktop: retain the original grid */}
    <div className="mt-8 hidden grid-cols-1 gap-3 sm:grid sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
      {academyAboutContent.scopeCategories.map((category, index) => (
        <FadeIn key={category.title} delay={index * 0.05}>
          <article className="flex h-full items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 sm:p-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-soft-accent)] text-xs font-bold text-[var(--color-secondary)]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="text-sm font-bold leading-6 text-[var(--color-secondary)] sm:text-base">
                {category.title}
              </h3>
              <p className="mt-1.5 text-xs leading-6 text-[var(--color-text-secondary)] sm:text-sm">
                {category.description}
              </p>
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  </div>
</section>
{/* The Academy's development model */}
<section className="relative isolate overflow-hidden py-12 sm:py-20 lg:py-28">
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-28 -top-24 h-72 w-72 rounded-full bg-[var(--color-soft-accent)] opacity-50 blur-3xl sm:h-96 sm:w-96"
  />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionHeader
      eyebrow="Our Approach"
      title={academyAboutContent.approachTitle}
      description={academyAboutContent.approachIntro}
      align="center"
    />

    {/* Mobile: compact numbered timeline */}
    <MobileDevelopmentTimeline steps={academyAboutContent.developmentSteps}/>
    {/* Tablet and desktop: retain the original cards */}
    <div className="mt-12 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
      {academyAboutContent.developmentSteps.map((step, index) => (
        <FadeIn key={step.title} delay={index * 0.06}>
          <article className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)] sm:p-7">
            <span className="font-serif text-4xl leading-none text-[var(--color-olive)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-base font-bold text-[var(--color-secondary)] sm:text-lg">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
              {step.description}
            </p>
          </article>
        </FadeIn>
      ))}
    </div>

    <FadeIn className="mx-auto mt-7 max-w-4xl rounded-2xl bg-[var(--color-surface-warm)] px-5 py-5 text-center sm:mt-14 sm:px-10 sm:py-7">
      <p className="text-sm font-semibold leading-7 text-[var(--color-secondary)] sm:text-base sm:leading-8 lg:text-lg">
        {academyAboutContent.approachPrinciple}
      </p>
    </FadeIn>
  </div>
</section>

      {/* Foundations retained from the existing About page */}
      <section className="relative overflow-hidden bg-[var(--color-taupe)] py-20 sm:py-24 lg:py-28">
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
            <div>
              <FadeIn>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                  Our Foundations
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  The thinking behind how we develop people.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                  Our programmes draw on complementary disciplines and development frameworks. These foundations inform how we explore behaviour, communication, confidence and personal effectiveness.
                </p>
              </FadeIn>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {foundations.map((item, index) => (
                  <FadeIn delay={index * 0.06}>
                    <FeatureCard
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      variant="featured"
                      delay={index * 0.06}
                      className={index === foundations.length - 1 ? "sm:col-span-2" : ""}
                    />
                  </FadeIn>
                ))}
              </div>
            </div>

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

      {/* Founder content retained */}
      <section className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="overflow-hidden rounded-[36px] border border-white/10 [background-image:var(--gradient-soft)] shadow-[var(--shadow-xl)]">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
              <div className="relative min-h-[420px] overflow-hidden sm:min-h-[500px]">
                <img
                  src="/images/trainers/ira-saha.jpg"
                  alt="Ira Saha, Founder of Empowering Minds"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent opacity-70"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 ring-1 ring-inset ring-white/10"
                />
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                    Founder
                  </p>
                  <p className="mt-2 text-xl font-bold text-white">Ira Saha</p>
                </div>
              </div>

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
      <TestimonialSection />

      {/* Keep the wider organisation visible without making it the Academy's lead identity */}
      <section className="bg-[var(--color-surface-warm)] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              The Wider Empowering Minds
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-secondary)] sm:text-4xl">
              {academyAboutContent.widerWorkTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
              {academyAboutContent.widerWorkText}
            </p>
            <Link
              to="/services"
              className="mt-7 inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
            >
              {academyAboutContent.widerWorkCta}
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Your personality is your lifelong asset."
        description="Explore the programmes and modules that can help you build confidence, refine your presence and strengthen your capabilities."
        variant="warm"
      />
    </main>
  );
}
