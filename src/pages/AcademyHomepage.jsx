import { academyHomepageSections } from "../data/siteContent"
import FadeIn from "../components/ui/FadeIn"
import CTAButton from "../components/ui/CTAButton"
import SectionHeader from "../components/ui/SectionHeader"
import FeatureCard from "../components/ui/FeatureCard"
import CoursePreview from "../components/common/CoursesPreview"
import TrainerPreview from "../components/sections/TrainerPreview"
import TestimonialSection from "../components/sections/TestimonialSection"
import WorkshopPreview from "../components/common/WorkshopPreview"
import CTASection from "../components/ui/CTASection"
import { Sprout } from "lucide-react"

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

                                <div className="
                                relative flex aspect-[4/4.5]
                                flex-col items-center justify-center
                                overflow-hidden rounded-[1.5rem]
                                bg-[var(--color-background)]
                                text-center
                                ">

                                    <div className="relative z-10 px-6">
                                        <span className="
                                        mx-auto flex h-16 w-16
                                        items-center justify-center
                                        rounded-full bg-white
                                        text-3xl text-[var(--color-olive)]
                                        shadow-sm
                                        ">
                                        ✳
                                        </span>

                                        <p className="
                                        mt-5 font-semibold
                                        text-[var(--color-secondary)]
                                        ">
                                        Academy Photography
                                        </p>

                                        <p className="
                                        mt-2 max-w-xs text-sm leading-6
                                        text-[var(--color-text-secondary)]
                                        ">
                                        A glimpse into learning, confidence
                                        and personal growth.
                                        </p>
                                    </div>

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
                                Learn · Grow · Become
                                </p>
                            </div>

                            </div>
                        </FadeIn>

                    </div>
                </div>
            </section>
            {/* Learning Outcomes */}
            <section className="
            relative isolate overflow-hidden
            py-16 sm:py-20 lg:py-24
            ">

                {/* Decorative coral sunburst */}
                <svg
                    aria-hidden="true"
                    viewBox="0 0 100 100"
                    fill="none"
                    className="
                    pointer-events-none absolute
                    right-[5%] top-12
                    h-100 w-100
                    text-[var(--color-primary)]
                    opacity-20
                    sm:h-128 sm:w-128
                    sm:opacity-40
                    "
                >
                    <circle cx="50" cy="50" r="17" stroke="currentColor" strokeWidth="1.2"/>
                    <circle cx="50" cy="50" r="27" stroke="currentColor" strokeWidth="0.8"/>
                    <path
                    d="
                        M50 5 V18 M50 82 V95
                        M5 50 H18 M82 50 H95
                        M18 18 L28 28 M72 72 L82 82
                        M82 18 L72 28 M28 72 L18 82
                    "
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    />
                </svg>

                {/* Decorative olive botanical line art */}
                <svg aria-hidden="true"
                    viewBox="0 0 120 160"
                    fill="none"
                    className="
                    pointer-events-none hidden
                    bottom-12 left-48
                    h-28 w-24
                    text-[var(--color-olive)]
                    opacity-60
                    sm:h-40 sm:w-32
                    md:absolute
                    ">
                    <path d="M49.2246 0C52.1909 19.3096 55.1491 36.9362 58.4492 53.332C59.1198 55.479 59.6491 57.667 60.0264 59.8818C59.9537 59.8978 59.8804 59.9121 59.8076 59.9277C61.0784 65.9341 62.4053 71.7766 63.8047 77.4795C62.4795 66.621 64.6931 55.2551 70.8789 45.2188L71.2314 44.6533C78.7174 32.8553 90.3567 25.2406 103.062 22.542L103.216 23.1416C106.31 35.5438 104.677 49.116 97.6152 60.915L97.2686 61.4834C89.873 73.4823 78.2272 81.2609 65.4707 84.0752C68.2693 94.8086 71.3652 105.061 74.8896 114.999C75.6031 116.644 76.2292 118.326 76.7627 120.037C76.7512 120.041 76.739 120.045 76.7275 120.049C77.1492 121.178 77.577 122.302 78.0107 123.424C79.8776 128.25 81.8593 133.012 83.9697 137.729C82.4027 126.866 84.3843 115.416 90.3916 105.227L90.7334 104.655C97.986 92.7123 109.474 84.8707 122.124 81.9229L122.289 82.5186C125.68 95.0565 124.214 108.898 117.097 120.971C110.141 132.77 99.0933 140.662 86.8223 143.911C92.818 156.513 99.8046 168.852 108.092 181.317C108.153 181.4 108.216 181.481 108.276 181.563L108.263 181.573C112.842 188.447 117.816 195.36 123.239 202.378C120.104 190.619 121.23 177.692 127.379 166.092L127.694 165.505C134.399 153.246 145.52 144.892 158.023 141.375L158.216 141.963C162.108 154.138 161.358 167.788 155.077 180.021L154.769 180.61C148.303 192.809 137.505 201.232 125.273 204.989C130.706 211.904 136.577 218.928 142.935 226.121L142.186 226.782C135.72 219.467 129.755 212.326 124.241 205.294C124.202 205.305 124.163 205.317 124.124 205.328C124.089 205.222 124.054 205.115 124.02 205.009C117.986 197.301 112.493 189.723 107.474 182.191C97.4585 189.917 84.5346 193.868 71.0234 192.256L70.3633 192.172C56.2495 190.3 44.2953 182.713 36.5234 172.049C46.8058 163.779 60.324 159.569 74.4375 161.44L75.0977 161.532C86.1717 163.148 95.8808 168.294 103.239 175.672C96.618 165.204 90.878 154.777 85.8359 144.161C85.6787 144.199 85.5218 144.239 85.3643 144.275C85.1331 143.461 84.9232 142.64 84.7334 141.814C81.98 135.882 79.4387 129.885 77.0791 123.784C76.6416 122.653 76.2104 121.518 75.7852 120.38C63.6257 124.534 49.8785 124.031 37.4512 117.884C24.6899 111.571 15.8117 100.542 11.8838 87.9443C24.2802 83.4221 38.435 83.785 51.1963 90.0977C60.0232 94.4641 66.9913 101.088 71.749 108.926C66.6734 93.6454 62.5181 77.5693 58.8281 60.1289C46.276 62.5677 32.7935 60.2226 21.3516 52.5127C9.54469 44.5569 2.21532 32.4427 0 19.4346C12.8882 16.6036 26.8678 18.8488 38.6748 26.8047L39.2246 27.1797C46.9576 32.5385 52.7157 39.7034 56.3203 47.7207C53.469 32.9613 50.8565 17.2075 48.2363 0.151367L49.2246 0ZM157.368 142.611C145.298 146.263 134.635 154.54 128.263 166.561C121.891 178.582 121.025 192.053 124.778 204.092C136.849 200.44 147.513 192.163 153.885 180.142C160.257 168.121 161.121 154.65 157.368 142.611ZM74.3066 162.433C60.8191 160.644 47.8889 164.523 37.9092 172.232C45.5346 182.277 57.0067 189.392 70.4941 191.181C83.9812 192.969 96.9101 189.089 106.89 181.38C99.2642 171.336 87.7936 164.221 74.3066 162.433ZM121.413 83.1279C109.19 86.2298 98.1624 94.0144 91.2529 105.734C84.6357 116.959 83.0073 129.74 85.6953 141.515C85.9236 142.006 86.1526 142.497 86.3838 142.987C98.4834 139.833 109.384 132.084 116.235 120.463C123.145 108.743 124.617 95.3246 121.413 83.1279ZM50.7529 90.9941C38.5578 84.9616 25.0672 84.4753 13.1377 88.5645C17.1265 100.528 25.6996 110.955 37.8945 116.987C50.065 123.008 63.5248 123.502 75.4365 119.439C74.948 118.119 74.4669 116.793 73.9941 115.462C69.5513 105.175 61.5823 96.3512 50.7529 90.9941ZM102.328 23.7334C90.0466 26.5944 78.868 34.1613 71.7295 45.7432C64.5909 57.3254 62.8546 70.7123 65.8184 82.9697C78.1003 80.1089 89.2783 72.5412 96.417 60.959C103.556 49.3771 105.292 35.9907 102.328 23.7334ZM38.1162 27.6338C26.8331 20.0309 13.5269 17.7518 1.15918 20.2158C3.51921 32.6039 10.628 44.0807 21.9111 51.6836C33.1196 59.236 46.323 61.5301 58.6211 59.1445C58.2359 57.3097 57.8572 55.4595 57.4814 53.5938C54.2754 43.355 47.7052 34.0952 38.1162 27.6338Z" fill-rule="evenodd" clip-rule="evenodd" fill="#899176"/>
                </svg>

                <div className="
                    relative z-10 mx-auto
                    max-w-7xl px-4 sm:px-6 lg:px-8
                ">
                    <SectionHeader
                    eyebrow="A LITTLE ROOM TO GROW"
                    title="Discover what you're capable of"
                    description="Build skills, grow your confidence and take the next step at your own pace."
                    align="center"
                    />

                    <div className="
                        mt-10 grid grid-cols-2 gap-3
                        sm:mt-12 sm:gap-6
                        md:gap-10d:grid-cols-2 md:gap-10
                    ">
                        {academyHomepageSections.learningOutcomes.map((outcome, index) => (
                            <FeatureCard
                            key={outcome.title}
                            icon={outcome.icon}
                            title={outcome.title}
                            description={outcome.description}
                            delay={index * 0.06}
                            variant="academy"
                            className="h-full"
                            accent={index % 2 === 0 ? "coral" : "olive"}
                            />
                        ))}
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
                variant="soft"
                primaryLabel= "Contact a Advisor"
                primaryTo = "https://wa.me/917908466757?text=Hello%20Empowering%20Minds%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs."
                secondaryLabel= "Explore Courses"
                secondaryTo= "#courses"
            />
        </main>
    )
}