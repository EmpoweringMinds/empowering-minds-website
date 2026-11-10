import CTASection from "../ui/CTASection";

export default function AboutPageCTA({ data }) {
  if (!data) return null;

  return (
    <CTASection
      eyebrow="Get in Touch"
      title={data.heading}
      description={data.description}
      primaryLabel={data.primaryCTA?.label || "Schedule a discovery call"}
      primaryTo="/contact"
      variant="blush"
      secondaryLabelIsVisible = {false}
    />
  );
}