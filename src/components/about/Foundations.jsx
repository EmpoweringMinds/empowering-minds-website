import { motion, useReducedMotion } from "framer-motion";
import * as Icons from "lucide-react";
import FadeIn from "../ui/FadeIn";
import HumanPotentialVisual from "../ui/HumanPotentialVisual";

function FoundationItem({ card, index, length }) {
  const Icon = Icons[card.iconName] || Icons.Layers;
  const shouldReduceMotion = useReducedMotion();

  return (
    <FadeIn delay={index * 0.06}>
      <motion.article
        initial={
            shouldReduceMotion
            ? false
            : { opacity: 0, y: 24 }
        }
        whileInView={
            shouldReduceMotion
            ? undefined
            : { opacity: 1, y: 0 }
        }
        viewport={{
            once: true,
            amount: 0.25,
        }}
        transition={{
            duration: 0.55,
            delay: shouldReduceMotion ? 0 : 0.08,
            ease: [0.22, 1, 0.36, 1],
        }}
        className={`group relative flex gap-4 py-5 sm:gap-5 sm:py-6 ${
            index !== length - 1
            ? "border-b border-white/15"
            : ""
        }`}
        >
            <span className="shrink-0 pt-1 font-bold text-2xl tracking-tight text-[var(--color-olive)] sm:text-3xl">
            {card.number}
            </span>

            <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold leading-tight text-[var(--color-secondary)] sm:text-xl">
                {card.title}
                </h3>

                <Icon
                size={21}
                strokeWidth={1.6}
                className="shrink-0 text-[var(--color-soft-accent)] transition-transform duration-300 group-hover:rotate-6"
                aria-hidden="true"
                />
            </div>

            <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--color-secondary)]/75 sm:text-base">
                {card.description}
            </p>
            </div>
      </motion.article>
    </FadeIn>
  );
}

export default function FoundationsSection({data}) {
    if (!data?.areaCards?.length) return null;
    const shouldReduceMotion = useReducedMotion();
    const cards = data?.areaCards || [];
    const length = cards.length;
    return (
        <section className="relative isolate overflow-hidden bg-[var(--color-taupe)] py-16 sm:py-20 lg:py-28">

        {/* Background decoration */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[var(--color-primary)]/30 blur-3xl"
        />

        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[var(--color-primary)]/30 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* Section introduction */}
            <FadeIn>
            <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-olive)]">
                {data.eyebrow}
                </p>

                <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-[var(--color-secondary)] sm:text-5xl lg:text-6xl">
                {data.heading} <span className="text-[var(--color-olive)] italic">{data.accent}</span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-secondary)]/80 sm:text-lg sm:leading-9">
                  {data.description}
                </p>
            </div>
            </FadeIn>

            {/* Foundations and visual */}
            <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

            {/* Numbered foundations */}
            <div>
                {cards.map((card, index, length) => (
                <FoundationItem
                    key={card.number}
                    card={card}
                    index={index}
                    length={length}
                    shouldReduceMotion={shouldReduceMotion}
                />
                ))}
            </div>

            {/* Human potential visual */}
            <FadeIn
                delay={0.15}
                className="relative mx-auto w-full max-w-[520px] lg:sticky lg:top-24 lg:self-start"
            >
                <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-cream)] p-5 shadow-[var(--shadow-warm)] sm:p-8">

                {/* Decorative circles */}
                <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[18px] border-[var(--color-primary)]/10"
                />

                <div
                    aria-hidden="true"
                    className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-[var(--color-soft-accent)]/40 blur-2xl"
                />

                <div className="relative z-10">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                    The bigger picture
                    </p>

                    <div className="mt-5">
                    <HumanPotentialVisual className="h-auto w-full" />
                    </div>

                    <div className="mt-4 border-t border-[var(--color-border)] pt-5">
                    <p className="text-xl font-extrabold leading-snug text-[var(--color-secondary)] sm:text-2xl">
                        {data.closingStatement}
                    </p>
                    </div>
                </div>
                </div>
            </FadeIn>

            </div>
        </div>
        </section>
  );
}
