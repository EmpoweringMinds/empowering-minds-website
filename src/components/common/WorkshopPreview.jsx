
import { Link } from "react-router-dom";
import { useWorkshops } from "../../cms/useWorkshops";
import { getWorkshopDateState } from "../../utils/workshopDates";
import CTAButton from "../ui/CTAButton";
import { ArrowUpRight, CalendarDays, Clock3, Tag } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

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

function WorkshopPrice({ workshop, earlyBird, featured = false }) {
  const currency = workshop.pricing?.currency || "";
  const regularPrice = workshop.pricing?.regularPrice;

  return (
    <div>
      <p
        className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
          featured ? "text-white/60" : "text-[var(--color-text-muted)]"
        }`}
      >
        Workshop fee
      </p>

      {earlyBird ? (
        <>
          <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p
              className={`font-heading text-2xl font-bold ${
                featured ? "text-white" : "text-[var(--color-primary)]"
              }`}
            >
              {currency} {earlyBird.price}
            </p>

            <p
              className={`text-sm line-through ${
                featured ? "text-white/50" : "text-[var(--color-text-muted)]"
              }`}
            >
              {currency} {regularPrice}
            </p>
          </div>

          <p
            className={`mt-2 flex items-center gap-1.5 text-xs font-semibold ${
              featured ? "text-[var(--color-soft-accent)]" : "text-[var(--color-secondary)]"
            }`}
          >
            <Tag size={13} />
            Early-bird offer
          </p>

          <p
            className={`mt-1 text-xs ${
              featured ? "text-white/60" : "text-[var(--color-text-muted)]"
            }`}
          >
            Ends {formatWorkshopDate(new Date(earlyBird.validUntil))}
          </p>
        </>
      ) : (
        <p
          className={`mt-2 font-heading text-2xl font-bold ${
            featured ? "text-white" : "text-[var(--color-primary)]"
          }`}
        >
          {currency} {regularPrice}
        </p>
      )}
    </div>
  );
}

function WorkshopCard({ workshop, dateState, featured = false }) {
  const earlyBird = getActiveEarlyBird(workshop.pricing);
  const title = workshop.hero?.title || workshop.name;

  return (
    <article
      className={`
        group relative flex h-full flex-col overflow-hidden rounded-[1.75rem]
        transition-all duration-300 hover:-translate-y-1
        ${
          featured
            ? "bg-[var(--color-olive)] text-white"
            : "border border-[var(--color-border)] bg-[var(--color-surface-warm)] text-[var(--color-primary)]"
        }
      `}
    >
      {featured && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[35px] border-white/[0.07]"
        />
      )}

      <div
        className={`relative flex flex-1 flex-col p-6 sm:p-8 ${
          featured ? "lg:p-11" : ""
        }`}
      >
        {/* Date and status */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span
            className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] ${
              featured
                ? "bg-white/15 text-white"
                : "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
            }`}
          >
            Upcoming workshop
          </span>

          <span
            className={`inline-flex items-center gap-2 text-xs font-medium ${
              featured ? "text-white/75" : "text-[var(--color-text-secondary)]"
            }`}
          >
            <CalendarDays size={14} />
            {formatWorkshopDate(dateState.start)}
          </span>
        </div>

        {/* Workshop information */}
        <div className="mt-8 flex-1">
          <p
            className={`text-xs font-bold uppercase tracking-[0.18em] ${
              featured
                ? "text-[var(--color-soft-accent)]"
                : "text-[var(--color-secondary)]"
            }`}
          >
            {workshop.name}
          </p>

          <h3
            className={`mt-3 font-heading font-extrabold leading-[1.1] tracking-tight ${
              featured
                ? "max-w-2xl text-3xl sm:text-4xl lg:text-5xl"
                : "text-2xl"
            }`}
          >
            {title}
          </h3>

          {workshop.hero?.subtitle && (
            <p
              className={`mt-4 text-base font-semibold leading-relaxed ${
                featured ? "text-white/85" : "text-[var(--color-primary)]"
              }`}
            >
              {workshop.hero.subtitle}
            </p>
          )}

          {workshop.hero?.description && (
            <p
              className={`mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
                featured ? "text-white/70" : "text-[var(--color-text-secondary)]"
              }`}
            >
              {workshop.hero.description}
            </p>
          )}

          {workshop.content?.highlights?.length > 0 && (
            <ul
              className={`mt-6 grid gap-3 ${
                featured ? "sm:grid-cols-2" : ""
              }`}
            >
              {workshop.content.highlights
                .slice(0, featured ? 4 : 2)
                .map((highlight, index) => (
                  <li
                    key={`${workshop.slug}-highlight-${index}`}
                    className={`flex items-start gap-3 text-sm leading-6 ${
                      featured
                        ? "text-white/80"
                        : "text-[var(--color-text-secondary)]"
                    }`}
                  >
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                        featured
                          ? "bg-[var(--color-soft-accent)]"
                          : "bg-[var(--color-secondary)]"
                      }`}
                    />
                    {highlight}
                  </li>
                ))}
            </ul>
          )}
        </div>

        {/* Pricing and workshop link */}
        <div
          className={`mt-8 flex flex-col gap-6 border-t pt-6 sm:flex-row sm:items-end sm:justify-between ${
            featured ? "border-white/20" : "border-[var(--color-border)]"
          }`}
        >
          <WorkshopPrice
            workshop={workshop}
            earlyBird={earlyBird}
            featured={featured}
          />

          <div className="flex flex-col gap-3 sm:min-w-[190px]">
            {workshop.format && (
              <span
                className={`inline-flex items-center gap-2 text-xs ${
                  featured ? "text-white/65" : "text-[var(--color-text-muted)]"
                }`}
              >
                <Clock3 size={13} />
                {workshop.format}
              </span>
            )}

            <Link
              to={`/workshops/${workshop.slug}`}
              className={`
                inline-flex min-h-12 items-center justify-center gap-3
                rounded-full px-5 py-3.5 text-sm font-bold
                transition-all duration-300
                ${
                  featured
                    ? "bg-white text-[var(--color-primary)] hover:-translate-y-0.5 hover:shadow-lg"
                    : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)]"
                }
              `}
            >
              View Workshop
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
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
    <section className="academy-theme relative overflow-hidden bg-[var(--color-surface-warm)] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:items-end md:justify-between">
          <SectionHeader 
            variant="split"
            size="small"
            theme="dark"
            eyebrow="Structured Workshops"
            title="Make room for a little more growth."
            description="Practical learning experiences designed to help you build skills, turn insight into action, and make meaningful progress."
            />
          <div className="shrink-0">
            <CTAButton to="/workshops">Explore All Workshops</CTAButton>
          </div>
        </div>

        {/* Loading state */}
        {loading ? (
          <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-white/60 p-10">
            <p className="text-sm text-[var(--color-text-secondary)]">
              Loading workshops...
            </p>
          </div>
        ) : error ? (
          <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-white/60 p-10">
            <p className="text-[var(--color-text-secondary)]">
              Unable to load workshops right now. Please visit the workshop
              directory to try again.
            </p>

            <Link
              to="/workshops"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] underline underline-offset-4"
            >
              Visit workshop directory
              <ArrowUpRight size={16} />
            </Link>
          </div>
        ) : upcomingWorkshops.length === 0 ? (
          <div className="rounded-[1.75rem] bg-[var(--color-background)] p-8 sm:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
              Coming up
            </span>

            <h3 className="mt-4 font-heading text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
              New workshops are on the way.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
              There are no upcoming workshops scheduled at the moment. Explore
              the directory to see available information and check back for
              future sessions.
            </p>

            <div className="mt-7">
              <CTAButton to="/workshops">Visit Workshop Directory</CTAButton>
            </div>
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
            {/* First upcoming workshop gets the featured treatment */}
            <div className="lg:row-span-2">
              <WorkshopCard
                {...upcomingWorkshops[0]}
                featured
              />
            </div>

            {/* Remaining upcoming workshops */}
            {upcomingWorkshops.slice(1).map(({ workshop, dateState }) => (
              <WorkshopCard
                key={workshop.id || workshop.slug}
                workshop={workshop}
                dateState={dateState}
              />
            ))}
          </div>
        )}

        {/* Directory link */}
        {!loading && !error && upcomingWorkshops.length > 0 && (
          <div className="mt-10 flex flex-col items-center gap-3 border-t border-[var(--color-border)] pt-8 text-center sm:mt-12">
            <p className="text-sm text-[var(--color-text-secondary)]">
              Looking for something else?
            </p>

            <Link
              to="/workshops"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
            >
              Browse all workshops
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
