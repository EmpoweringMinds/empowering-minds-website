
import FadeIn from "../ui/FadeIn";

export default function FounderSection({data}) {
  return (
    <section className="bg-[var(--color-background)] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <FadeIn>
          <div className="
            relative grid overflow-hidden
            rounded-[2rem] sm:rounded-[2.5rem]
            bg-[var(--color-secondary)]
            lg:grid-cols-[0.9fr_1.1fr]
          ">

            {/* Founder portrait */}
            <div className="
              relative min-h-[360px]
              overflow-hidden
              bg-[var(--color-soft-accent)]
              sm:min-h-[480px]
              lg:min-h-[600px]
            ">

              {/* Decorative shapes */}
              <div
                aria-hidden="true"
                className="
                  absolute -left-16 -top-16
                  h-64 w-64 rounded-full
                  bg-[var(--color-primary)]/30
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute -bottom-16 -right-12
                  h-56 w-56 rounded-full
                  bg-[var(--color-olive)]/50
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute left-1/2 top-1/2
                  h-[85%] w-[85%]
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full border
                  border-[var(--color-primary)]/30
                "
              />

              <img
                src={data.founderImage}
                alt="Ira Saha, Founder of Empowering Minds"
                loading="lazy"
                className="
                  absolute inset-0 z-10
                  h-full w-full
                  object-cover object-center
                "
              />

            </div>

            {/* Founder introduction */}
            <div className="
              relative flex flex-col justify-center
              px-7 py-10
              sm:px-10 sm:py-14
              lg:px-14 lg:py-16
            ">

              {/* Decorative accent */}
              <div
                aria-hidden="true"
                className="
                  absolute right-8 top-8
                  h-16 w-16 rounded-full
                  border border-[var(--color-primary)]/40
                  sm:right-12 sm:top-12
                "
              />

              <p className="
                text-xs font-bold uppercase
                tracking-[0.22em]
                text-[var(--color-primary)]
              ">
                {data.eyebrow}
              </p>

              <h2 className="
                mt-5 max-w-xl
                font-heading text-3xl font-bold
                leading-tight tracking-tight
                text-[var(--color-background)]
                sm:text-4xl lg:text-5xl
              ">
                {data.founderName}
              </h2>

              <p className="
                mt-3 text-sm font-semibold
                text-[var(--color-primary)]
                sm:text-base
              ">
                {data.founderRole}
              </p>

              <div className="
                my-7 h-[3px] w-12 rounded-full
                bg-[var(--color-primary)]
              " />

              <p className="
                max-w-xl
                text-sm leading-7
                text-[var(--color-background)]/80
                sm:text-base sm:leading-8
              ">
                {data.fullDescription}
              </p>

              <p className="
                mt-6 max-w-xl
                text-base font-semibold leading-7
                text-[var(--color-primary)]
                sm:text-lg sm:leading-8
              ">
                {data.quote}
              </p>

            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
