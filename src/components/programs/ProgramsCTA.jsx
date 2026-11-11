import CTASection from "../ui/CTASection";

export default function ProgramsCTA({ data }) {
  if (!data) return null;

  return (
    <CTASection
      eyebrow="Your next step starts here"
      title={data.heading}
      description={data.description}
      primaryLabel={data.primaryCTA}
      primaryTo="/contact"
      secondaryLabel={data.secondaryCTA}
      secondaryTo="#programs"
      variant="soft"
    />
  );
}