
import FadeIn from "../ui/FadeIn";

export default function CoursesIntroduction({ data }) {
  if (!data) return null;

  return (
    <section className="
      relative overflow-hidden
      bg-[var(--color-surface)]
      py-20 sm:py-24 lg:py-28
    ">
      <div className="
        mx-auto max-w-5xl
        px-4 text-center sm:px-6 lg:px-8
      ">
        <FadeIn>
          <div
            aria-hidden="true"
            className="
              mx-auto mb-8 h-[var(--decorative-line-height)]
              w-[var(--decorative-line-width)]
              rounded-full bg-[var(--color-primary)]
            "
          />

          <h2 className="
            text-3xl font-bold leading-tight
            text-[var(--color-secondary)]
            sm:text-4xl lg:text-5xl
          ">
            {data.heading}
          </h2>

          <p className="
            mx-auto mt-7 max-w-3xl
            text-base leading-8
            text-[var(--color-text-secondary)]
            sm:text-lg sm:leading-9
          ">
            {data.description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
