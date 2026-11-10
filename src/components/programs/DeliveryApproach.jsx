
import FadeIn from "../ui/FadeIn";

export default function DeliveryApproach() {
    return (
        <section className="
            relative overflow-hidden
            [background-image:var(--gradient-brand)]
            py-16 sm:py-20 lg:py-24
        ">
            {/* Background decoration */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute
                    -right-32 -top-32
                    h-96 w-96 rounded-full
                    bg-[var(--color-secondary)]/10 blur-3xl
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute
                    -bottom-40 -left-32
                    h-96 w-96 rounded-full
                    bg-white/5 blur-3xl
                "
            />

            <div className="
                relative mx-auto max-w-7xl
                px-4 sm:px-6 lg:px-8
            ">
                <div className="
                    grid items-center gap-10
                    lg:grid-cols-2 lg:gap-14
                ">

                    {/* Image */}
                    <FadeIn>
                        <div className="
                            relative mx-auto w-full max-w-lg
                            aspect-[4/3] sm:aspect-[5/4]
                            flex items-center justify-center
                        ">
                            {/* Decorative circles */}
                            <div
                                aria-hidden="true"
                                className="
                                    absolute left-[8%] top-[8%]
                                    h-[65%] aspect-square
                                    rounded-full
                                    bg-[var(--color-soft-accent)]
                                "
                            />

                            <div
                                aria-hidden="true"
                                className="
                                    absolute bottom-[5%] right-[5%]
                                    h-[38%] aspect-square
                                    rounded-full
                                    bg-[var(--color-olive)]/80
                                "
                            />

                            <div
                                aria-hidden="true"
                                className="
                                    absolute right-[12%] top-[5%]
                                    h-[70%] aspect-square
                                    rounded-full border
                                    border-white/30
                                "
                            />

                            <img
                                src="/images/delivery-approach.png"
                                alt=""
                                className="
                                    relative z-10
                                    h-full w-full
                                    object-contain object-bottom
                                    drop-shadow-xl
                                "
                            />
                        </div>
                    </FadeIn>

                    {/* Text */}
                    <FadeIn>
                        <div className="max-w-2xl">
                            <p className="
                                text-sm font-bold uppercase
                                tracking-[0.3em]
                                text-[var(--color-secondary)]
                            ">
                                Our Approach
                            </p>

                            <h2 className="
                                mt-5 text-4xl font-black
                                leading-[1.08] tracking-tight
                                text-white/60
                                sm:text-5xl lg:text-6xl
                            ">
                                Structured development.
                                <span className="
                                    mt-2 block
                                    text-[var(--color-olive)]
                                ">
                                    Measurable performance.
                                </span>
                            </h2>

                            <p className="
                                mt-7 max-w-xl
                                text-base leading-8
                                text-white/75 sm:text-lg
                            ">
                                We do not simply conduct workshops.
                                Our interventions are structured around
                                institutional and organisational objectives,
                                with a focus on behavioural alignment,
                                resilience, capability, and sustainable
                                performance.
                            </p>

                            <div className="
                                mt-10 flex items-center gap-4
                            ">
                                <div className="
                                    h-px w-16
                                    bg-[var(--color-secondary)]"
                                />

                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 sm:text-sm">
                                    Human Capital Development
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
