
function SkeletonBlock({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`
        motion-safe:animate-pulse
        rounded-lg bg-[var(--color-surface-warm)]
        ${className}
      `}
    />
  );
}

function HeroVisualSkeleton() {
  return (
    <div className="
      relative mx-auto flex aspect-[4/4.2]
      w-full max-w-[480px] items-center justify-center
    ">
      <div className="
        absolute left-1/2 top-1/2
        h-[73%] w-[73%]
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-[var(--color-soft-accent)]/50
      "/>

      <div className="
        absolute right-[5%] top-[12%]
        h-20 w-20 rounded-full
        bg-[var(--color-olive)]/50
        sm:h-28 sm:w-28
      "/>

      <div className="
        absolute bottom-[12%] left-[3%]
        h-14 w-14 rounded-full
        bg-[var(--color-primary)]/40
        sm:h-20 sm:w-20
      "/>

      <div className="
        absolute left-1/2 top-1/2
        h-[92%] w-[92%]
        -translate-x-1/2 -translate-y-1/2
        rounded-full border
        border-[var(--color-primary)]/20
      "/>

      <div className="
        relative z-10 h-[85%] w-[85%]
        rounded-full bg-[var(--color-surface-warm)]/70
        motion-safe:animate-pulse
      "/>
    </div>
  );
}

function HeroCopySkeleton({ mobile = false }) {
  return (
    <div className="w-full space-y-7">
      <SkeletonBlock className="h-3 w-32 bg-[var(--color-primary)]/20"/>

      <div className="space-y-3">
        <SkeletonBlock className="h-10 w-full max-w-xl sm:h-14"/>
        <SkeletonBlock className="h-10 w-4/5 max-w-lg sm:h-14"/>
      </div>

      <SkeletonBlock className="h-1 w-16 rounded-full bg-[var(--color-primary)]/25"/>

      <div className="space-y-3">
        <SkeletonBlock className="h-4 w-full max-w-xl"/>
        <SkeletonBlock className="h-4 w-4/5 max-w-lg"/>
      </div>

      {mobile && (
        <div className="lg:hidden">
          <HeroVisualSkeleton />
        </div>
      )}

      <div className="flex flex-wrap gap-3 pt-2">
        <SkeletonBlock className="h-12 w-36 rounded-full bg-[var(--color-primary)]/20"/>
        <SkeletonBlock className="h-12 w-36 rounded-full"/>
      </div>
    </div>
  );
}

function SectionHeadingSkeleton() {
  return (
    <div className="space-y-4">
      <SkeletonBlock className="h-3 w-32 bg-[var(--color-primary)]/20"/>
      <SkeletonBlock className="h-8 w-3/4 max-w-lg sm:h-10"/>
      <SkeletonBlock className="h-4 w-full max-w-xl"/>
    </div>
  );
}

function ContentSectionSkeleton() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <SectionHeadingSkeleton />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <SkeletonBlock
              key={item}
              className="h-52 rounded-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CoursesSectionSkeleton() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <SectionHeadingSkeleton />

        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <SkeletonBlock
              key={item}
              className="h-28 rounded-2xl sm:h-32"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSectionSkeleton() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="
        mx-auto grid max-w-6xl gap-10
        lg:grid-cols-2
      ">
        <div className="space-y-6">
          <SectionHeadingSkeleton />
          <SkeletonBlock className="h-32 rounded-2xl"/>
          <SkeletonBlock className="h-20 rounded-2xl"/>
        </div>

        <SkeletonBlock className="min-h-[480px] rounded-[2rem]"/>
      </div>
    </section>
  );
}

function TrainerDirectorySkeleton() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <SectionHeadingSkeleton />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="
                overflow-hidden rounded-2xl
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
              "
            >
              <SkeletonBlock className="aspect-[4/3] rounded-none"/>

              <div className="space-y-3 p-5">
                <SkeletonBlock className="h-5 w-3/4"/>
                <SkeletonBlock className="h-3 w-1/2"/>
                <SkeletonBlock className="h-3 w-full"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrainerGridSkeleton() {
  return <TrainerDirectorySkeleton />;
}

export default function PageLoading({ variant = "standard" }) {
  return (
    <main
      className="academy-theme min-h-screen bg-[var(--color-background)]"
      aria-busy="true"
      aria-label="Loading page content"
    >
      {/* Shared PageHero placeholder */}
      <section className="
        relative isolate overflow-hidden
        bg-[var(--color-background)]
        pt-24 sm:pt-28 lg:pt-32
      ">
        <div className="
          pointer-events-none absolute -right-24 -top-20
          h-72 w-72 rounded-full
          bg-[var(--color-soft-accent)]/20 blur-3xl
        "/>

        <div className="
          relative z-10 mx-auto max-w-7xl
          px-2 py-10 sm:px-4 sm:py-14 lg:px-6 lg:py-18
        ">
          <div className="
            grid items-center gap-8
            lg:grid-cols-[1.05fr_0.95fr] lg:gap-16
          ">
            <HeroCopySkeleton mobile />

            <div className="hidden lg:block">
              <HeroVisualSkeleton />
            </div>
          </div>

          <div className="
            mt-12 h-px w-full
            bg-[var(--color-border)]
            sm:mt-16 lg:mt-20
          "/>
        </div>
      </section>

      {/* Page-specific section placeholders */}
      {variant === "courses" ? (
  <>
    <ContentSectionSkeleton />
    <ContentSectionSkeleton />
    <CoursesSectionSkeleton />
    <ContentSectionSkeleton />
  </>
) : variant === "contact" ? (
  <>
    <ContactSectionSkeleton />
    <ContentSectionSkeleton />
  </>
) : variant === "directory" ? (
  <>
    <ContentSectionSkeleton />
    <TrainerDirectorySkeleton />
  </>
) : variant === "about" ? (
  <>
    <ContentSectionSkeleton />
    <ContentSectionSkeleton />
    <ContentSectionSkeleton />
  </>
) : variant === "programs" ? (
  <>
    <ContentSectionSkeleton />
    <ContentSectionSkeleton />
    <ContentSectionSkeleton />
  </>
) : (
  <>
    <ContentSectionSkeleton />
    <ContentSectionSkeleton />
  </>
)}
    </main>
  );
}
