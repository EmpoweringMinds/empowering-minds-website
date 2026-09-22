import { homepageSections } from "../data/siteContent";
import CTAButton from "../components/ui/CTAButton";
import CTASection from "../components/ui/CTASection";
import FeatureCard from "../components/ui/FeatureCard";
import FadeIn from "../components/ui/FadeIn";
import SectionHeader from "../components/ui/SectionHeader";
import HumanPotentialVisual from "../components/ui/HumanPotentialVisual";
import HumanPotentialVisualV2 from "../components/ui/HumanPotentialVisualV2";
import ProgramsPreview from "../components/sections/ProgramsPreview";
import TrainerPreview from "../components/sections/TrainerPreview";
import TestimonialSection from "../components/sections/TestimonialSection";
import WebinarPreview from "../components/common/WebinarPreview";


export default function Home() {
  return (
    <main>
    {/* Hero */}
    <section
      className="
        relative overflow-hidden
        bg-[var(--color-background)]
        pt-28 sm:pt-32 lg:pt-36
      "
    >
      {/* Decorative background geometry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[var(--color-secondary)]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[var(--color-secondary)]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/3 h-[360px] w-[360px] rounded-full bg-[var(--color-secondary)]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[680px] items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
          {/* Editorial content */}
          <FadeIn className="max-w-2xl">
            <p
              className="
                text-xs font-semibold uppercase
                tracking-[0.24em]
                text-[var(--color-primary)]
                sm:text-sm
              "
            >
              Training · Consulting · Transformation · Placement
            </p>

            <h1
              className="
                mt-6
                text-5xl font-bold
                leading-[1.02]
                tracking-[-0.035em]
                text-[var(--color-secondary)]
                sm:text-6xl
                lg:text-7xl
              "
            >
              Where Human{" "}
              <span className="text-[var(--color-primary)]">
                Potential
              </span>{" "}
              Meets Structured Development.
            </h1>

            <div
              aria-hidden="true"
              className="
                mt-7
                h-[var(--decorative-line-height)]
                w-[var(--decorative-line-width)]
                rounded-full
                bg-[var(--color-primary)]
              "
            />

            <p
              className="
                mt-6 max-w-xl
                text-lg font-semibold leading-8
                text-[var(--color-secondary)]
                sm:text-xl
              "
            >
              Engineering Human Capital for Productivity Enhancement &
              Organisational Excellence.
            </p>

            <p
              className="
                mt-4 max-w-xl
                text-sm leading-7
                text-[var(--color-text-secondary)]
                sm:text-base sm:leading-8
              "
            >
              We design structured developmental interventions that
              strengthen people, organisations, and institutions through
              behavioural, emotional, and performance-focused development.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <CTAButton to="/services">
                Explore Our Services
              </CTAButton>

              <CTAButton
                to="/trainers"
                variant="secondary"
              >
                Meet Our Trainers
              </CTAButton>
            </div>
          </FadeIn>

          {/* Human Potential visual */}
          <FadeIn delay={0.15}>
            <div className="relative -mx-4 sm:-mx-6 lg:-mr-24 lg:ml-0">
              <HumanPotentialVisualV2 />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom transition */}
      <div
        aria-hidden="true"
        className="relative mx-auto mt-4 h-px max-w-7xl bg-[var(--color-border)]"
      />
    </section>

    <WebinarPreview />

      {/* Who We Are */}
      <section className="overflow-hidden bg-[var(--color-background)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Content */}
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                Who We Are
              </p>

              <h2 className="mt-5 max-w-xl text-3xl font-black tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
                Human Potential Meets{" "}
                <span className="text-[var(--color-secondary)]">
                  Structured Development
                </span>
              </h2>

              <div className="mt-7 h-px w-16 bg-[var(--color-secondary)]" />

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                {homepageSections.whoWeAre}
              </p>

              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  {homepageSections.intersectionIntro}
                </p>

                <div className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  {homepageSections.intersectionAreas.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--color-soft-accent)]">
                        <item.icon className="h-4 w-4 text-[var(--color-secondary)]" />
                      </div>

                      <span className="text-sm font-semibold leading-6 text-[var(--color-primary)]">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Conceptual visual */}
            <FadeIn delay={0.15}>
              <div className="relative">
                <div className="absolute inset-10 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />

                <div className="relative rounded-[2rem] border border-[var(--color-border)] bg-white/70 p-5 shadow-[0_28px_70px_rgba(35,66,78,0.10)] backdrop-blur-sm sm:p-8">
                  <HumanPotentialVisual />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Who We Serve"
            title="Human capital development across four key areas"
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {homepageSections.audiences.map((audience, index) => (
              <FeatureCard
                key={audience.title}
                icon={audience.icon}
                title={audience.title}
                description={audience.description}
                delay={index * 0.06}
                variant="dark"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Human Capital Challenge */}
      <section
        className="
          relative overflow-hidden
          [background-image:var(--gradient-soft)]
          py-20
          sm:py-24
          lg:py-28
        "
      >
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Intro */}
            <FadeIn>
              <p className="
                text-sm font-semibold uppercase
                tracking-[0.25em]
                text-[var(--color-primary)]
              ">
                The Contemporary Performance Landscape
              </p>

              <h2 className="
                mt-5 max-w-xl
                text-3xl font-bold
                tracking-tight
                text-[var(--color-secondary)]
                sm:text-4xl lg:text-5xl
              ">
                {homepageSections.challengeTitle}
              </h2>

              <div className="mt-8 h-px w-20 bg-[var(--color-secondary)]" />

              <p className="mt-8 max-w-xl text-[var(--color-text-secondary)] leading-8 sm:text-lg">
                {homepageSections.challengeIntro}
              </p>
            </FadeIn>

            {/* Pressure points */}
            <FadeIn delay={0.1}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                  Common performance pressures include
                </p>
                <div
                  className="
                    mt-6
                    divide-y divide-[var(--color-secondary)]/10
                    border-y border-[var(--color-secondary)]/10
                  "
                >
                  {homepageSections.challengePoints.map((point, index) => (
                    <div
                      key={point}
                      className="group flex items-center gap-5 py-5"
                    >
                      <span className="
                        w-8 shrink-0
                        text-sm font-semibold
                        text-[var(--color-primary)]
                      ">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="
                        text-base font-medium
                        text-[var(--color-secondary)]
                        sm:text-lg
                      ">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Strategic implication */}
          <FadeIn className="mt-16 border-t border-white/10 pt-10 sm:mt-20 sm:pt-12">
            <div className="max-w-4xl">
              <p className="text-xl font-semibold leading-9 text-[var(--color-primary)] sm:text-2xl sm:leading-10">
                While technical capability continues to grow, performance
                sustainability now depends on{" "}
                <span className="text-[var(--color-secondary)]">
                  emotional regulation, resilience, and behavioural alignment.
                </span>
              </p>

              <p className="mt-5 text-base leading-7 text-[var(--color-text-secondary)]">
                Organisations that proactively strengthen these capabilities gain
                measurable strategic advantage.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[var(--color-background)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr_1fr] lg:items-center lg:gap-8">
            {/* Left */}
            <div className="space-y-6">
              <FadeIn>
                <div className="border-l-2 border-[var(--color-secondary)] pl-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                    The Missing Capability
                  </p>

                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {homepageSections.copingIntro}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary)]">
                    Why it matters
                  </p>

                  <p className="mt-3 text-base leading-7 text-[var(--color-primary)]">
                    This capability directly determines productivity, resilience,
                    and long-term success.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Centre */}
            <FadeIn delay={0.1}>
              <div className="relative flex min-h-[300px] items-center justify-center">
                <div className="absolute h-64 w-64 rounded-full border border-[var(--color-secondary)]/20" />
                <div className="absolute h-52 w-52 rounded-full border border-[var(--color-secondary)]/20" />

                <div className="relative flex h-44 w-44 flex-col items-center justify-center rounded-full bg-[var(--color-primary)] px-6 text-center shadow-[0_25px_60px_rgba(35,66,78,0.18)] sm:h-52 sm:w-52">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                    Coping Architecture
                  </p>

                  <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
                    The Untaught Skill
                  </h2>
                </div>
              </div>
            </FadeIn>

            {/* Right */}
            <div className="space-y-4">
              {[
                "Regulate stress",
                "Handle rejection",
                "Adapt to uncertainty and change",
                "Maintain clarity under pressure",
                "Sustain consistent performance",
              ].map((point, index) => (
                <FadeIn key={point} delay={0.1 + index * 0.05}>
                  <div className="group flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:shadow-md">
                    <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-secondary)] transition-transform duration-300 group-hover:scale-125" />

                    <p className="font-semibold leading-6 text-[var(--color-primary)]">
                      {point}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Closing statement */}
          <FadeIn className="mt-16 text-center sm:mt-20">
            <div className="mx-auto max-w-2xl">
              <div className="mx-auto mb-6 h-px w-16 bg-[var(--color-secondary)]" />

              <p className="text-xl font-bold leading-8 text-[var(--color-primary)] sm:text-2xl">
                Resilience is not optional.
              </p>

              <p className="mt-2 text-lg font-semibold text-[var(--color-secondary)]">
                It is strategic capital.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Programs remain untouched for now */}
      <ProgramsPreview />

      {/* Trainers */}
      <TrainerPreview />

      {/* Measurable Outcomes */}
      <section
        className="relative overflow-hidden py-20 text-white sm:py-24 lg:py-28"
        style={{ background: "var(--gradient-surface)" }}
      >
        {/* Decorative background elements */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e6b47d]">
              Outcomes
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
              {homepageSections.outcomesTitle}
            </h2>

            <div className="mx-auto mt-6 h-px w-16 bg-[var(--color-secondary)]" />

            <p className="mt-6 text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
              Human capital, when engineered correctly, becomes a measurable
              performance asset.
            </p>
          </FadeIn>

          {/* Outcomes */}
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="grid md:grid-cols-2">
              {homepageSections.outcomes.map((outcome, index) => (
                <FadeIn key={outcome} delay={index * 0.06}>
                  <div
                    className={`group flex min-h-[150px] items-start gap-6 border-[var(--color-primary)]/50 px-2 py-7 sm:px-8 sm:py-9 ${
                      index % 2 === 0 ? "md:border-r" : ""
                    } ${
                      index < homepageSections.outcomes.length - 2
                        ? "md:border-b"
                        : ""
                    }`}
                  >
                    <span className="shrink-0 text-sm font-semibold tracking-[0.15em] text-[var(--color-text-primary)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <p className="text-lg font-bold leading-7 text-[var(--color-text-secondary)] transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                        {outcome}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Closing statement */}
          <FadeIn className="mx-auto mt-16 max-w-3xl text-center sm:mt-20">
            <div className="mx-auto h-px w-16 bg-white/20" />

            <p className="mt-8 text-2xl font-bold leading-9 text-[var(--color-text-primary)] sm:text-3xl sm:leading-10">
              The objective is not simply development.
            </p>

            <p className="mt-3 text-xl font-semibold leading-8 text-[#e6b47d] sm:text-2xl">
              It is measurable performance enhancement.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Empowering Minds */}
      <section className="bg-[var(--color-background)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
              Why Empowering Minds?
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
              Structured development.
              <br />
              <span className="text-[var(--color-secondary)]">
                Designed for transformation.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Our approach is built around structured developmental systems rather
              than one-time interventions.
            </p>
          </FadeIn>

          {/* Principles */}
          <div className="mt-16 grid gap-x-12 gap-y-0 md:grid-cols-2 lg:mt-20">
            {homepageSections.whyPoints.map((point, index) => (
              <FadeIn key={point.title} delay={index * 0.06}>
                <article
                  className={`group flex gap-6 border-[var(--color-border)] py-8 ${
                    index < 4 ? "border-b" : ""
                  } ${
                    index % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"
                  }`}
                >
                  {/* Decorative marker */}
                  <div className="relative shrink-0 pt-1">
                    <div className="h-3 w-3 rounded-full bg-[var(--color-secondary)] transition-transform duration-300 group-hover:scale-150" />

                    <div className="absolute left-1/2 top-5 h-full w-px -translate-x-1/2 bg-[var(--color-border)] group-last:hidden" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-primary)] transition-colors duration-300 group-hover:text-[var(--color-secondary)] sm:text-2xl">
                      {point.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                      {point.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* Closing statement */}
          <FadeIn className="mx-auto mt-16 max-w-3xl text-center sm:mt-20">
            <div className="mx-auto mb-6 h-px w-12 bg-[var(--color-secondary)]" />

            <p className="text-lg font-semibold leading-8 text-[var(--color-primary)] sm:text-xl">
              We build developmental systems —
              <span className="text-[var(--color-secondary)]">
                {" "}
                not one-time workshops.
              </span>
            </p>
          </FadeIn>
        </div>
      </section>

      <TestimonialSection />

      <CTASection
        title="Build stronger human capital."
        description="Whether you are strengthening an educational institution, developing an organisation, preparing students, or supporting entrepreneurial performance, Empowering Minds designs structured interventions around your objectives."
        variant="soft"
        primaryLabel= "Start a Conversation"
        primaryTo = "https://wa.me/917908466757?text=Hello%20Empowering%20Minds%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs."
        secondaryLabel= "Explore Our Programs"
        secondaryTo= "/programs"
      />
    </main>
  );
}