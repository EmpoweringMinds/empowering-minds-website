import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";
import * as Icons from "lucide-react";

export default function LearningFormats({ data }) {
  if (!data?.formatCards?.length) return null;

  return (
    <section className="bg-[var(--color-background)] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title={data.heading}
            description={data.description}
            align="center"
          />
        </FadeIn>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {data.formatCards.map((format, index) => {
            const Icon = Icons[format.iconName] || Icons.Layers;

            return (
            <FadeIn key={`${format.title}-${index}`} delay={index * 0.05}>
              <article className=" flex h-full flex-col items-start gap-3
                rounded-xl border border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-4 transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[var(--shadow-md)]
                sm:flex-row sm:gap-4 sm:rounded-2xl sm:p-7">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--color-text)]">
                      {format.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                      {format.description}
                    </p>
                  </div>
                  </article>
            </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}