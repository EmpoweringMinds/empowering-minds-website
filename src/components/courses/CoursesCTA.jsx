import CTASection from "../ui/CTASection";

export default function CoursesCTA({ data }) {
  if (!data) return null;

  return (
    <CTASection
      eyebrow="Your next step starts here"
      title={data.heading}
      description={data.description}
      primaryLabel={data.primaryCTA?.label || "Schedule a discovery call"}
      primaryTo="/contact"
      secondaryLabel={data.secondaryCTA?.label || "Explore our courses"}
      secondaryTo="#course-directory"
      variant="soft"
    />
  );
}