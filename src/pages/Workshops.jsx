import { useWorkshops } from "../cms/useWorkshops";
import CTAButton from "../components/ui/CTAButton";
import { getWorkshopDateState } from "../utils/workshopDates";

export default function Workshops() {
  const { workshops, loading, error } = useWorkshops();

  if (loading) {
    return (
      <section className="bg-[var(--color-background)] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[var(--color-text-secondary)]">Loading workshops...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[var(--color-background)] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[var(--color-text-secondary)]">Unable to load workshops.</p>
        </div>
      </section>
    );
  }

  if (!workshops.length) {
    return (
      <section className="bg-[var(--color-background)] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[var(--color-border)] bg-white p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-secondary)]">Workshops</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl">No workshops available</h1>
            <p className="mt-4 max-w-xl leading-7 text-[var(--color-text-secondary)]">Please check back soon for upcoming sessions.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-[var(--color-background)]">
      <section className="relative overflow-hidden bg-[var(--color-surface-warm)] py-20 sm:py-24 lg:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-[var(--color-secondary)]/20 sm:h-[26rem] sm:w-[26rem]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[var(--color-secondary)]/20 sm:h-72 sm:w-72" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-[var(--color-secondary)]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)] sm:text-sm">Workshops</p>
            <div aria-hidden="true" className="mt-6 h-[var(--decorative-line-height)] w-[var(--decorative-line-width)] rounded-full bg-[var(--color-secondary)]" />
            <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-[-0.035em] text-[var(--color-secondary)] sm:text-5xl lg:text-7xl">Learn. Apply. Move forward.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">Explore upcoming workshops and practical sessions designed to help you develop the skills that make a difference.</p>
          </div>

          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
            {workshops.map((workshop) => {
              const dateState = getWorkshopDateState(workshop);
              return (
                <article key={workshop.id} className="group flex h-full flex-col overflow-hidden rounded-3xl border-[2px] border-[var(--color-rust-light)]/80 bg-white shadow-[0_12px_40px_rgba(35,66,78,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(35,66,78,0.12)]">
                  <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-9">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">{dateState.status === "upcoming" ? "Upcoming" : "Past"}</p>
                      <span className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)]">{workshop.format}</span>
                    </div>

                    <h2 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-[var(--color-primary)] transition-colors duration-300 group-hover:text-[var(--color-secondary)] sm:text-3xl">{workshop.name}</h2>
                    <p className="mt-4 text-lg font-semibold leading-snug text-[var(--color-secondary)] sm:text-xl">{workshop.hero.title}</p>
                    <p className="mt-4 leading-7 text-[var(--color-text-secondary)]">{workshop.hero.subtitle}</p>

                    {dateState.start && (
                      <div className="mt-6 flex items-start gap-3 border-t border-[var(--color-border)] pt-5">
                        <span aria-hidden="true" className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-secondary)]" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">{dateState.status === "upcoming" ? "Next session" : "Workshop date"}</p>
                          <p className="mt-1 font-semibold text-[var(--color-primary)]">{dateState.start.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>
                        </div>
                      </div>
                    )}

                    <div className="mt-auto flex flex-col gap-6 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:pt-7">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-secondary)]">Investment</p>
                        <p className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-primary)]">{workshop.pricing.currency} {workshop.pricing.regularPrice}</p>
                      </div>
                      <CTAButton to={`/workshops/${workshop.slug}`} variant="primary">View Workshop</CTAButton>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
