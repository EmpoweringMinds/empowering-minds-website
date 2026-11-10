import PageHero from "../ui/PageHero";

export default function AboutHero({ data }) {
  if (!data) return null;

  const visual = data.image ? (
    <div className="
      relative mx-auto
      flex aspect-[4/4.2] w-full
      max-w-[480px] items-center justify-center
      overflow-visible
    ">
      {/* Main organic shape */}
      <div
        aria-hidden="true"
        className="
          absolute left-1/2 top-1/2
          h-[73%] w-[73%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[var(--color-soft-accent)]/50
        "
      />

      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="
          absolute right-[5%] top-[12%]
          h-20 w-20 rounded-full
          bg-[var(--color-olive)]/70
          sm:h-28 sm:w-28
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute bottom-[12%] left-[3%]
          h-14 w-14 rounded-full
          bg-[var(--color-primary)]/80
          sm:h-20 sm:w-20
        "
      />

      {/* Circular outline */}
      <div
        aria-hidden="true"
        className="
          absolute left-1/2 top-1/2
          h-[92%] w-[92%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full border
          border-[var(--color-primary)]/20
        "
      />

      {/* Transparent subject */}
      <img
        src={data.image}
        alt=""
        fetchPriority="high"
        className="
          relative z-10
          h-full w-full
          object-contain object-bottom
        "
      />
    </div>
  ) : null;

  return (
    <PageHero
      eyebrow={data.eyebrow}
      title={data.heading}
      description={data.description}
      primaryCta={{
        label: data.primaryCTA,
        to: "/contact",
      }}
      secondaryCta={{
        label: data.secondaryCTA,
        to: "/trainers"
      }}
      visual={visual}
      visualOnMobile={true}
      visualClassName="w-full"
    />
  );
}
