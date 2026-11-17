
export default function HomeHeroSkeleton() {
  return (
    <section
      aria-label="Loading homepage introduction"
      aria-busy="true"
      className="
        relative isolate overflow-hidden
        bg-[var(--color-primary)]
        pt-32 pb-28
        sm:pt-40 sm:pb-32
        lg:pt-44 lg:pb-36
      "
    >
      <div className="
        mx-auto grid max-w-7xl
        items-center gap-12 px-5
        sm:px-8
        lg:grid-cols-[0.95fr_1.05fr]
        lg:gap-8 lg:px-8
      ">

        {/* Hero copy */}
        <div className="max-w-2xl space-y-7">
          <div className="h-3 w-32 animate-pulse rounded bg-white/25" />

          <div className="space-y-3">
            <div className="h-12 w-full max-w-xl animate-pulse rounded-lg bg-white/20 sm:h-16" />
            <div className="h-12 w-4/5 max-w-lg animate-pulse rounded-lg bg-white/20 sm:h-16" />
          </div>

          <div className="space-y-3 pt-2">
            <div className="h-4 w-full max-w-md animate-pulse rounded bg-white/20" />
            <div className="h-4 w-4/5 max-w-md animate-pulse rounded bg-white/20" />
          </div>

          <div className="flex gap-3 pt-3">
            <div className="h-12 w-36 animate-pulse rounded-full bg-white/30" />
            <div className="h-12 w-36 animate-pulse rounded-full bg-white/15" />
          </div>
        </div>

        {/* Image collage placeholder */}
        <div className="
          relative mx-auto mt-4
          aspect-square w-full max-w-[620px]
          sm:aspect-[1.08/1] lg:mt-0
        ">
          <div className="
            absolute left-0 top-[13%] z-10
            h-[70%] w-[68%] animate-pulse
            rounded-[28px] border-[5px] border-white/20
            bg-white/15
          " />

          <div className="
            absolute right-0 top-0 z-20
            h-[49%] w-[40%] animate-pulse
            rounded-[24px] border-[5px] border-white/30
            bg-white/20
          " />

          <div className="
            absolute bottom-[2%] right-0 z-30
            h-[39%] w-[51%] animate-pulse
            rounded-[24px] border-[5px] border-white/30
            bg-white/20
          " />
        </div>

      </div>
    </section>
  );
}
