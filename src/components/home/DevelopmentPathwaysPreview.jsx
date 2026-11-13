
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  GraduationCap,
  Building2,
  Sprout,
  Users,
} from "lucide-react";

const DEFAULT_CONTENT = {
  eyebrow: "OUR WORK",
  heading: "One philosophy. Two avenues of development.",
  description:
    "Whether you're developing yourself or strengthening an organisation, meaningful growth starts with people.",
  cards: [
    {
      number: "01",
      eyebrow: "FOR INDIVIDUALS",
      title: "Personality & Performance Development Academy",
      description:
        "Knowledge and skills are important. But confidence, communication, behaviour and personal presence help you put your potential into practice.",
      ctaLabel: "Explore the Academy",
      iconName: "GraduationCap",
      symbol: "Sprout",
      theme: "academy",
      linkTo: "/courses",
    },
    {
      number: "02",
      eyebrow: "FOR ORGANISATIONS",
      title: "Human Capital Development Programmes",
      description:
        "Structured developmental interventions that strengthen people, behavioural capabilities and performance across educational institutions and organisations.",
      ctaLabel: "Explore Our Programmes",
      iconName: "Building2",
      symbol: "Users",
      theme: "human",
      linkTo: "/services",
    },
  ],
};

const ICONS = {
  GraduationCap,
  Building2,
  Sprout,
  Users,
};

function PathwayCard({ card, featured = false }) {
  const Icon = ICONS[card.iconName] || (featured ? GraduationCap : Building2);
  const Symbol = ICONS[card.symbol] || (featured ? Sprout : Users);

  return (
    <article
      className={`
        group relative flex min-h-[440px] flex-col justify-between
        overflow-hidden rounded-[2rem] p-7 sm:p-9 lg:p-11
        transition-transform duration-500 hover:-translate-y-1
        ${featured
          ? "bg-[var(--color-primary)] text-white lg:min-h-[540px]"
          : "bg-[var(--color-olive)] text-white lg:min-h-[460px]"
        }
      `}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute -right-20 -top-20
          h-64 w-64 rounded-full border-[32px]
          ${featured ? "border-white/10" : "border-white/10"}
          sm:h-80 sm:w-80
        `}
      />

      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute -bottom-16 -left-12
          h-48 w-48 rounded-full
          ${featured ? "bg-[var(--color-soft-accent)]/10" : "bg-white/10"}
        `}
      />

      {/* Card header */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
            {card.eyebrow}
          </span>

          <p className="mt-4 font-heading text-5xl font-extrabold tracking-tight text-white/20 sm:text-6xl">
            {card.number}
          </p>
        </div>

        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
          <Icon size={27} strokeWidth={1.6} />
        </div>
      </div>

      {/* Card content */}
      <div className="relative z-10 mt-12 max-w-2xl">
        <h3
          className={`
            max-w-xl font-heading font-bold leading-[1.08]
            ${featured
              ? "text-3xl sm:text-4xl lg:text-5xl"
              : "text-3xl sm:text-4xl"
            }
          `}
        >
          {card.title}
        </h3>

        <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
          {card.description}
        </p>

        <Link
          to={card.linkTo || (featured ? "/courses" : "/services")}
          className="
            mt-8 inline-flex min-h-12 items-center gap-3
            rounded-full bg-white px-6 py-3.5
            text-sm font-bold text-[var(--color-primary)]
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg
          "
        >
          {card.ctaLabel}
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>

      {/* Decorative symbol */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-7 right-7 opacity-[0.12] sm:bottom-10 sm:right-10"
      >
        <Symbol size={featured ? 100 : 80} strokeWidth={1} />
      </div>
    </article>
  );
}

export default function DevelopmentPathwaysPreview({ data }) {
  const content = {
    ...DEFAULT_CONTENT,
    ...data,
  };

  const cards = content.cards?.length
    ? content.cards.slice(0, 2)
    : DEFAULT_CONTENT.cards;

  return (
    <section className="academy-theme relative overflow-hidden bg-[var(--color-background)] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section introduction */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
            {content.eyebrow}
          </span>

          <h2 className="mt-5 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
            {content.heading}
          </h2>

          {content.description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              {content.description}
            </p>
          )}
        </div>

        {/* Pathway panels */}
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {cards.map((card, index) => (
            <PathwayCard
              key={card.number || card.title || index}
              card={card}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
