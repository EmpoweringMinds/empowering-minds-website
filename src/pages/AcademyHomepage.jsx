import { academyHomepageSections } from "../data/siteContent"
import FadeIn from "../components/ui/FadeIn"
import CTAButton from "../components/ui/CTAButton"
import SectionHeader from "../components/ui/SectionHeader"
import CoursePreview from "../components/common/CoursesPreview"
import TrainerPreview from "../components/sections/TrainerPreview"
import TestimonialSection from "../components/sections/TestimonialSection"
import WorkshopPreview from "../components/common/WorkshopPreview"
import CTASection from "../components/ui/CTASection"

export default function AcademyHomepage () {
    return (
        <main className="academy-theme">

            <section className="
            relative isolate overflow-hidden
            bg-[var(--color-background)]
            pt-28 pb-16 sm:pt-32 sm:pb-20
            ">
            {/* Background decorations */}
                <div
                    aria-hidden="true"
                    className="
                    pointer-events-none absolute
                    -left-32 top-20 h-72 w-72
                    rounded-full bg-[var(--color-soft-accent)]
                    opacity-30 blur-3xl
                    "
                />

                <div
                    aria-hidden="true"
                    className="
                    pointer-events-none absolute
                    -right-20 bottom-0 h-80 w-80
                    rounded-full bg-[var(--color-olive)]
                    opacity-[0.07] blur-3xl
                    "
                />

                <div className="
                    relative mx-auto max-w-7xl
                    px-4 sm:px-6 lg:px-8
                ">
                    <div className="
                    grid items-center gap-14
                    lg:grid-cols-[1fr_0.9fr]
                    lg:gap-12
                    ">

                        {/* Editorial content */}
                        <FadeIn className="relative z-10 max-w-2xl">

                            <p className="
                            text-xs font-semibold uppercase
                            tracking-[0.24em]
                            text-[var(--color-primary)]
                            sm:text-sm
                            ">
                            EMPOWERING MINDS PRESENTS
                            </p>

                            <h1 className="
                            mt-6 text-4xl font-bold
                            leading-tight text-[var(--color-secondary)]
                            sm:text-5xl
                            ">
                            <span className="text-[var(--color-primary)]">
                                Personality & Performance
                            </span>{" "}
                                Development Academy
                            </h1>

                            <div
                            aria-hidden="true"
                            className="
                                mt-7 h-[var(--decorative-line-height)]
                                w-[var(--decorative-line-width)]
                                rounded-full bg-[var(--color-primary)]
                            "
                            />

                            <p className="
                            mt-6 text-sm font-semibold leading-8
                            text-[var(--color-secondary)]
                            sm:text-base
                            ">
                            Transform your personality. Upgrade your Style.
                            Elevate your potential.
                            </p>

                            <p className="
                            mt-4 text-sm leading-7
                            text-[var(--color-text-secondary)]
                            sm:text-base sm:leading-8
                            ">
                            Your 360° solution for holistic personality development.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                                <CTAButton href="#courses">
                                    Explore Courses
                                </CTAButton>

                                <CTAButton
                                    to="https://wa.me/917908466757?text=Hello%20Empowering%20Minds%2C%20I%27d%20like%20help%20choosing%20a%20course."
                                    variant="secondary"
                                >
                                    Talk to An Advisor
                                </CTAButton>
                            </div>

                            <p className="
                            mt-6 text-sm
                            text-[var(--color-text-secondary)]
                            text-center
                            lg:text-left
                            ">
                            Online across India · Offline in Kolkata
                            </p>

                        </FadeIn>

                        {/* Hero visual */}
                        <FadeIn delay={0.15}>
                            <div className="
                            relative mx-auto w-full max-w-lg
                            px-3 pb-8 pt-4
                            ">
                            {/* Large coral circle */}
                            <div
                            aria-hidden="true"
                            className="
                                pointer-events-none absolute
                                -right-8 -top-8
                                h-64 w-64 rounded-full
                                bg-[var(--color-soft-accent)]
                                opacity-70
                                sm:-right-12 sm:-top-12
                                sm:h-80 sm:w-80
                            "
                            />

                            {/* Smaller olive circle */}
                            <div
                            aria-hidden="true"
                            className="
                                pointer-events-none absolute
                                -bottom-2 -left-5
                                h-36 w-36 rounded-full
                                bg-[var(--color-olive)]
                                opacity-20
                                sm:h-44 sm:w-44
                            "
                            />

                            {/* Main image placeholder */}
                            <div className="
                                relative z-10 ml-5
                                overflow-hidden rounded-[2rem]
                                border border-[var(--color-border)]
                                bg-[var(--color-surface-warm)]
                                p-3 shadow-[var(--shadow-warm)]
                            ">
                                <div className="relative z-10 px-6">
                                    <img
                                        src="/images/homepage.jpg"
                                        alt=""
                                        fetchPriority="high"
                                        className="
                                        aspect-[4/4.2] w-full
                                        rounded-[1.5rem]
                                        object-cover
                                        "
                                    />
                                </div>
                            </div>

                            {/* Floating identity label */}
                            <div className="
                                absolute -bottom-1 left-0 z-20
                                rounded-2xl border
                                border-[var(--color-border)]
                                bg-[var(--color-surface)]
                                px-5 py-3
                                shadow-[var(--shadow-sm)]
                            ">
                                <p className="
                                text-xs font-bold uppercase
                                tracking-[0.16em]
                                text-[var(--color-primary)]
                                ">
                                Learn, Grow, Become a better version of yourself
                                </p>
                            </div>

                            </div>
                        </FadeIn>

                    </div>
                </div>
            </section>

            <section id="courses" className="bg-[var(--color-surface-warm)]">
                    <CoursePreview />
            </section>
            <section className="relative isolate overflow-hidden bg-[var(--color-surface-warm)] py-20 sm:py-24 lg:py-28">
                {/* Decorative organic shape */}
                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none absolute -right-28 -top-28
                        h-72 w-72 rounded-full
                        bg-[var(--color-olive)] opacity-20
                        sm:h-96 sm:w-96
                    "
                />

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Why this academy?"
                        title="A practical approach to development"
                        align="center"
                    />

                    <div className="mt-16 grid grid-cols-1 gap-x-16 sm:grid-cols-2 lg:mt-20">
                        {academyHomepageSections.whyThisAcademy.map((point, index) => (
                            <FadeIn key={point.title} delay={index * 0.06}>
                                <article className={`group flex gap-5 border-t border-[var(--color-border)] px-5 py-8 sm:gap-7 sm:px-6 ${
                                        index === 1
                                            ? "rounded-xl bg-[var(--color-olive)]/10"
                                            : ""
                                    }`}>
                                    <span
                                        className={`shrink-0 font-serif text-4xl leading-none sm:text-5xl ${
                                            index % 2 === 0
                                                ? "text-[var(--color-secondary)]"
                                                : "text-[var(--color-olive)]"
                                        }`}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)] transition-colors duration-300 group-hover:text-[var(--color-secondary)] sm:text-base">
                                            {point.title}
                                        </h3>

                                        <p className="mt-3 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                                            {point.description}
                                        </p>
                                    </div>
                                </article>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn className="mx-auto mt-14 max-w-3xl text-center sm:mt-20">
                        <div className="mx-auto mb-6 h-px w-12 bg-[var(--color-secondary)]" />

                        <p className="text-lg font-semibold leading-8 text-[var(--color-primary)] sm:text-xl">
                            Take the next step in your career. Enrol at Empowering Minds Academy today
                            <span className="text-[var(--color-secondary)]">
                                {" "}
                                & give your personality the finishing touch it needs to help you stand out and move closer to your professional goals.
                            </span>
                        </p>
                    </FadeIn>
                </div>
            </section>
            <TrainerPreview />
            <TestimonialSection />
            <WorkshopPreview />
            <CTASection
                title="Your Journey Towards Growth Begins Here."
                description="Find the programme that fits your goals."
                variant="warm"
                primaryLabel= "Talk to an Advisor"
                primaryTo = "https://wa.me/917908466757?text=Hello%20Empowering%20Minds%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs."
                secondaryLabel= "Explore Courses"
                secondaryTo= "#courses"
            />
        </main>
    )
}