import { webinar } from "../../data/siteContent";
import CTAButton from "../ui/CTAButton";

export default function WebinarPreview() {
  return (
    <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Content */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
              {webinar.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
              {webinar.title}
            </h2>

            <div className="mt-7 h-px w-16 bg-[var(--color-secondary)]" />

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
              {webinar.description}
            </p>

            {/* Event details */}
            <div className="mt-8 grid grid-cols-2 gap-6 border-y border-[var(--color-border)] py-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
                  Date & Time
                </p>

                <p className="mt-2 font-semibold text-[var(--color-primary)]">
                  {webinar.date}
                </p>

                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {webinar.time}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
                  Format
                </p>

                <p className="mt-2 font-semibold text-[var(--color-primary)]">
                  {webinar.format}
                </p>
              </div>
            </div>

            {/* Highlights */}
            {webinar.highlights?.length > 0 && (
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                  In This Session
                </p>

                <ul className="mt-4 space-y-3">
                  {webinar.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Registration Benefit */}
            {webinar.bonus && (
              <div className="mt-10 border-l-2 border-[var(--color-primary)] bg-white/70 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                  {webinar.bonus.eyebrow}
                </p>

                <h3 className="mt-2 text-xl font-bold text-[var(--color-primary)]">
                  {webinar.bonus.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {webinar.bonus.description}
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="mt-8">
              <CTAButton
                href={webinar.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {webinar.cta}
              </CTAButton>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-7">
            <div className="relative min-h-[24rem] overflow-hidden sm:min-h-[32rem]">
              <img
                src={webinar.image}
                alt={webinar.imageAlt || webinar.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}