
import { ArrowUpRight, MessageCircle } from "lucide-react";

const DEFAULT_CONTENT = {
  heading: "Your journey towards growth begins here.",
  description: "Find the programme that fits your goals.",
  primaryCTA: "Talk to an Advisor",
  secondaryCTA: "Explore Courses",
};

const WHATSAPP_URL =
  "https://wa.me/917908466757?text=Hello%20Empowering%20Minds%2C%20I%27d%20like%20help%20choosing%20a%20course.";

export default function HomepageFinalCTA({ data }) {
  const content = {
    ...DEFAULT_CONTENT,
    ...data,
  };

  return (
    <section className="academy-theme bg-[var(--color-background)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[var(--color-primary)] text-white">
        {/* Decorative shapes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[42px] border-white/[0.09] sm:h-[28rem] sm:w-[28rem]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[var(--color-secondary)]/25"
        />

        <div className="relative z-10 grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:p-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-[var(--color-soft-accent)]" />
              YOUR NEXT CHAPTER
            </span>

            <h2 className="mt-7 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              {content.heading}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {content.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[220px] lg:flex-col">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-[var(--color-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <MessageCircle size={18} />
              {content.primaryCTA}
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#courses"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/35 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
            >
              {content.secondaryCTA}
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Bottom decorative detail */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/15 px-8 py-5 sm:px-12 lg:px-20">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
            Empowering Minds
          </span>

          <span className="font-heading text-sm font-bold tracking-wide text-white/65">
            Learn. Grow. Become.
          </span>
        </div>
      </div>
    </section>
  );
}
