
import PageHero from "../ui/PageHero";

export default function CoursesHero({ data }) {
  if (!data) return null;

  const visual = data.image ? (
    <div
      className="
        relative mx-auto w-full max-w-xl
        rounded-[2rem]
        border border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-3
        shadow-[var(--shadow-warm)]
      "
    >
      <img
        src={data.image}
        alt=""
        fetchPriority="high"
        className="
          aspect-[4/4.2] w-full
          rounded-[1.5rem]
          object-cover
        "
      />
    </div>
  ) : null;

  return (
    <PageHero
      eyebrow={data.eyebrow}
      title={data.heading}
      description={data.description}
      primaryCta={
        data.primaryCTA
          ? {
              label: data.primaryCTA,
              to: "/contact",
            }
          : null
      }
      secondaryCta={
        data.secondaryCTA
          ? {
              label: data.secondaryCTA,
              as: "a",
              href: "#course-directory",
            }
          : null
      }
      visual={visual}
    />
  );
}
