
import FadeIn from "../ui/FadeIn";
import CTAButton from "../ui/CTAButton";

const WHATSAPP_URL =
  "https://wa.me/917908466757?text=Hello%20Empowering%20Minds%2C%20I%27d%20like%20help%20choosing%20a%20course.";


export default function HomeHero({ data }) {

  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-[var(--color-background)]
        pt-28 pb-16 sm:pt-32 sm:pb-24
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-32 top-16
          h-72 w-72 rounded-full
          bg-[var(--color-soft-accent)] opacity-30 blur-3xl
          sm:h-96 sm:w-96
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-24 bottom-0
          h-80 w-80 rounded-full
          bg-[var(--color-olive)] opacity-10 blur-3xl
        "
      />

      <div
        className="
          relative mx-auto grid max-w-7xl
          items-center gap-10 px-4
          sm:px-6 lg:grid-cols-[1fr_0.9fr]
          lg:gap-8 lg:px-8
        "
      >
        {/* Hero copy */}
        <FadeIn className="relative z-10 max-w-2xl">
          <p
            className="
              text-xs font-bold uppercase tracking-[0.22em]
              text-[var(--color-primary)] sm:text-sm
            "
          >
            {data.eyebrow}
          </p>

          <h1
            className="
              mt-6 max-w-xl text-4xl font-bold
              leading-[1.12] tracking-tight
              text-[var(--color-secondary)]
              sm:text-5xl lg:text-6xl
            "
          >
            {data.heading}
          </h1>

          <div
            aria-hidden="true"
            className="
              mt-7 h-[var(--decorative-line-height)]
              w-[var(--decorative-line-width)]
              rounded-full bg-[var(--color-primary)]
            "
          />

          <p
            className="
              mt-6 max-w-lg text-base font-semibold
              leading-8 text-[var(--color-primary)]
              sm:text-lg
            "
          >
            {data.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <CTAButton href="#courses">
              {data.primaryCTA}
            </CTAButton>

            <CTAButton href={WHATSAPP_URL} target="_blank" noreferer="true" noopener="true" variant="secondary">
              {data.secondaryCTA}
            </CTAButton>
          </div>

          <p
            className="
              mt-6 text-sm text-[var(--color-text-secondary)]
            "
          >
            Online across India · Offline in Kolkata
          </p>
        </FadeIn>

        {/* Transparent cutout visual */}
        <FadeIn delay={0.15}>
          <div
            className="
              relative mx-auto w-full max-w-xl
              px-4 py-8 sm:px-8
            "
          >
            {/* Coral backdrop */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                right-4 top-8 aspect-square w-[75%]
                rounded-full bg-[var(--color-soft-accent)]
                opacity-70
              "
            />

            {/* Olive accent */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                bottom-8 left-0 h-36 w-36
                rounded-full bg-[var(--color-olive)]
                opacity-25 sm:h-48 sm:w-48
              "
            />

            {/* Decorative ring */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                right-0 top-0 h-24 w-24
                rounded-full border-[12px]
                border-[var(--color-secondary)]/10
                sm:h-32 sm:w-32
              "
            />

            <img
              src={data.image || "/images/homepage.jpg"}
              alt="A visual representing the Empowering Minds Academy"
              fetchPriority="high"
              className="
                relative z-10 mx-auto block
                max-h-[540px] w-full
                object-contain object-bottom
              "
            />

            {/* Floating identity label */}
            <div
              className="
                absolute bottom-2 left-0 z-20
                max-w-[250px] rounded-2xl
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                px-5 py-3 shadow-[var(--shadow-sm)]
                sm:bottom-6 sm:left-2
              "
            >
              <p
                className="
                  text-xs font-bold uppercase
                  leading-5 tracking-[0.12em]
                  text-[var(--color-primary)]
                "
              >
                Learn. Grow. Become a better version of yourself.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
