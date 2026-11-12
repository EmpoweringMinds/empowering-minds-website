import PageHero from "../ui/PageHero";

export default function ContactHero() {
  const visual = (
    <div
      className="
        relative mx-auto
        flex aspect-[4/4.2] w-full
        max-w-[480px] items-center justify-center
        overflow-visible
      "
    >
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

      {/* Decorative olive circle */}
      <div
        aria-hidden="true"
        className="
          absolute right-[5%] top-[12%]
          h-20 w-20 rounded-full
          bg-[var(--color-olive)]/70
          sm:h-28 sm:w-28
        "
      />

      {/* Decorative terracotta circle */}
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

      {/* Contact hero photography */}
      <img
        src="/images/contact-hero.png"
        alt=""
        fetchPriority="high"
        className="
          relative z-10
          h-full w-full
          object-contain object-bottom
        "
      />
    </div>
  );

  return (
    <PageHero
      eyebrow="Let's Start a Conversation"
      title="Let's find the right fit for your goals."
      description="Whether you're exploring a course, planning a development programme for your organisation, or simply looking for guidance, we're here to help you take the next step."
      primaryCta={{
        label: "Talk to an Advisor",
        href: "https://wa.me/917908466757?text=Hello%20Empowering%20Minds%2C%20I'd%20like%20to%20know%20more%20about%20your%20programs.",
        target: "_blank",
        rel: "noopener noreferrer",
      }}
      secondaryCta={{
        label: "Send an Enquiry",
        to: "#form",
      }}
      visual={visual}
      visualOnMobile={true}
      visualClassName="w-full"
    />
  );
}