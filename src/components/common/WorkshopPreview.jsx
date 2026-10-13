import { Link } from "react-router-dom";
import { useWorkshops } from "../../cms/useWorkshops";
import { getWorkshopDateState } from "../../utils/workshopDates";
import CTAButton from "../ui/CTAButton";

function formatWorkshopDate(date) {
  if (!date) return "Date to be announced";

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}


function getActiveEarlyBird(pricing) {
  const earlyBird = pricing?.earlyBird;

  if (
    !earlyBird?.enabled ||
    earlyBird.price == null ||
    !Number.isFinite(Number(earlyBird.price)) ||
    Number(earlyBird.price) < 0 ||
    !earlyBird.validUntil
  ) {
    return null;
  }

  const now = Date.now();
  const validFrom = earlyBird.validFrom
    ? Date.parse(earlyBird.validFrom)
    : null;
  const validUntil = Date.parse(earlyBird.validUntil);

  const isWithinPeriod =
    (validFrom === null ||
      (Number.isFinite(validFrom) && now >= validFrom)) &&
    Number.isFinite(validUntil) &&
    now < validUntil;

  return isWithinPeriod ? earlyBird : null;
}

export default function WorkshopPreview() {
  const { workshops, loading, error } = useWorkshops();

  // Keep only upcoming workshops, ordered by their next start date.
  const upcomingWorkshops = workshops
    .map((workshop) => ({
      workshop,
      dateState: getWorkshopDateState(workshop),
    }))
    .filter(({ dateState }) => dateState.status === "upcoming")
    .sort((a, b) => {
      const aTime = a.dateState.start?.getTime() ?? Number.MAX_SAFE_INTEGER;
      const bTime = b.dateState.start?.getTime() ?? Number.MAX_SAFE_INTEGER;
      return aTime - bTime;
    })
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[var(--color-surface-warm)] py-20 sm:py-24 lg:py-28">
      {/* Subtle decorative geometry, matching the homepage visual language. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-[var(--color-secondary)]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 -top-14 h-52 w-52 rounded-full border border-[var(--color-secondary)]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[var(--color-secondary)]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)] sm:text-sm">
              Learn · Apply · Grow
            </p>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
              Workshops that move you forward.
            </h2>
            <div className="mt-6 h-px w-16 bg-[var(--color-secondary)]" />
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
              Practical learning experiences designed to help you build skills,
              turn insight into action, and make meaningful progress.
            </p>
          </div>

          <div className="shrink-0 sm:pb-1">
            <CTAButton to="/workshops">Explore All Workshops</CTAButton>
          </div>
        </div>

        {loading ? (
          <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-white/70 p-8 sm:mt-14">
            <p className="text-[var(--color-text-secondary)]">Loading workshops...</p>
          </div>
        ) : error ? (
          <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-white/70 p-8 sm:mt-14">
            <p className="text-[var(--color-text-secondary)]">
              Unable to load workshops right now. Please visit the workshop directory to try again.
            </p>
            <Link
              to="/workshops"
              className="mt-4 inline-flex font-semibold text-[var(--color-primary)] underline decoration-[var(--color-secondary)] underline-offset-4 transition-colors hover:text-[var(--color-secondary)]"
            >
              Visit workshop directory
            </Link>
          </div>
        ) : upcomingWorkshops.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-white/70 p-8 sm:mt-14 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
              Coming up
            </p>
            <h3 className="mt-3 text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">
              New workshops are on the way.
            </h3>
            <p className="mt-4 max-w-2xl leading-7 text-[var(--color-text-secondary)]">
              There are no upcoming workshops scheduled at the moment. Explore the directory to see available information and check back for future sessions.
            </p>
            <div className="mt-6">
              <CTAButton to="/workshops">Visit Workshop Directory</CTAButton>
            </div>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 xl:grid-cols-3">
            {upcomingWorkshops.map(({ workshop, dateState }) => {
            const earlyBird = getActiveEarlyBird(workshop.pricing);
            return (
              <article
                key={workshop.id || workshop.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[0_8px_30px_rgba(35,66,78,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(35,66,78,0.10)]"
              >
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full bg-[var(--color-secondary)]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-secondary)]">
                      Upcoming
                    </span>
                    <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                      {formatWorkshopDate(dateState.start)}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
                    {workshop.name}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-secondary)]">
                    {workshop.hero.title || workshop.name}
                  </h3>

                  {workshop.hero.subtitle && (
                    <p className="mt-4 text-base font-medium leading-7 text-[var(--color-primary)]">
                      {workshop.hero.subtitle}
                    </p>
                  )}

                  {workshop.hero.description && (
                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                      {workshop.hero.description}
                    </p>
                  )}

                  {workshop.content?.highlights?.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {workshop.content.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                        <li
                          key={`${workshop.slug}-highlight-${highlightIndex}`}
                          className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text-secondary)]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-secondary)]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-7">
                    <div className="mb-5 flex items-end justify-between gap-4 border-t border-[var(--color-border)] pt-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">
                          Workshop fee
                        </p>
                      
{earlyBird ? (
  <>
    <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <p className="text-xl font-bold text-[var(--color-primary)]">
        {workshop.pricing.currency} {earlyBird.price}
      </p>

      <p className="text-sm text-[var(--color-text-secondary)] line-through">
        {workshop.pricing.currency} {workshop.pricing.regularPrice}
      </p>
    </div>

    <p className="mt-1 text-xs font-semibold text-[var(--color-secondary)]">
      Early-bird offer
    </p>
    <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
      Ends {formatWorkshopDate(new Date(earlyBird.validUntil))}
    </p>
  </>
) : (
  <p className="mt-1 text-xl font-bold text-[var(--color-primary)]">
    {workshop.pricing.currency} {workshop.pricing.regularPrice}
  </p>

)}
                      </div>
                      {workshop.format && (
                        <span className="max-w-[45%] text-right text-sm text-[var(--color-text-secondary)]">
                          {workshop.format}
                        </span>
                      )}
                    </div>

                    <Link
                      to={`/workshops/${workshop.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-[var(--color-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-2"
                    >
                      View Workshop
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            );})}
          </div>
        )}

        {!loading && !error && upcomingWorkshops.length > 0 && (
          <div className="mt-10 text-center sm:mt-12">
            <Link
              to="/workshops"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
            >
              Browse all workshops
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
