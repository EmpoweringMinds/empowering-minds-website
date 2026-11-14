
const DEFAULT_CONTENT = {
  eyebrow: "THE WAY WE THINK",
  heading: "Growth should change how you show up in the world.",
  description:
    "Development is more than learning a new skill. It is about understanding yourself, practising what you learn and applying it in everyday situations.",
  featureCards: [
    {
      number: "01",
      title: "Understand yourself",
      description:
        "Recognise your strengths, habits and areas where you want to grow.",
    },
    {
      number: "02",
      title: "Build practical capabilities",
      description:
        "Develop communication, confidence and interpersonal skills through purposeful learning.",
    },
    {
      number: "03",
      title: "Learn by doing",
      description:
        "Put ideas into practice through activities, reflection and real-life situations.",
    },
    {
      number: "04",
      title: "Make growth your own",
      description:
        "Build habits and capabilities that feel authentic and useful in your everyday life.",
    },
  ],
};

export default function AcademyPhilosophy({ data }) {
  const content = {
    ...DEFAULT_CONTENT,
    ...data,
  };

  const principles = content.featureCards?.length
    ? content.featureCards
    : DEFAULT_CONTENT.featureCards;

  return (
    <section className="academy-theme bg-[var(--color-background)] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[var(--color-soft-accent)] text-white">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

          {/* Main statement */}
          <div className="relative flex flex-col justify-between overflow-hidden p-8 sm:p-12 lg:min-h-[680px] lg:p-16">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                {content.eyebrow}
              </span>

              <h2 className="mt-8 max-w-xl font-heading text-4xl font-extrabold text-[var(--color-secondary)] leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {content.heading}
              </h2>

              <p className="mt-7 max-w-md text-base leading-relaxed text-[var(--color-secondary)]/65 sm:text-lg">
                {content.description}
              </p>
            </div>

            <div className="relative z-10 mt-16">
              <span className="font-heading text-7xl font-extrabold tracking-tighter text-white/25 sm:text-8xl">
                GROW.
              </span>
            </div>

            {/* Decorative shapes */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full border-[36px] border-[var(--color-secondary)]/[0.06]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-12 top-1/3 h-32 w-32 rounded-full bg-[var(--color-primary)]/20"
            />
          </div>

          {/* Principles */}
          <div className="bg-[var(--color-surface-warm)] p-7 text-[var(--color-secondary)] sm:p-10 lg:p-14">
            <div className="mb-8 flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-olive)]">
                Our approach
              </span>
              <span className="text-xs font-medium text-[var(--color-text-muted)]">
                {String(principles.length).padStart(2, "0")} principles
              </span>
            </div>

            <div className="divide-y divide-[var(--color-border)]">
              {principles.map((item, index) => (
                <article
                  key={item.number || item.title || index}
                  className="group grid grid-cols-[3.25rem_1fr] gap-4 py-7 first:pt-0 last:pb-0 sm:grid-cols-[4rem_1fr] sm:gap-6"
                >
                  <span className="pt-1 font-heading text-2xl font-bold text-[var(--color-primary)]/35 transition-colors duration-300 group-hover:text-[var(--color-primary)] sm:text-3xl">
                    {item.number || String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="font-heading text-xl font-bold leading-tight text-[var(--color-secondary)] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
