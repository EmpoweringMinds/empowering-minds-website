import { useWorkshops } from "../cms/useWorkshops";
import { getWorkshopDateState } from "../utils/workshopDates";

export default function Workshops() {
  const { workshops, loading, error } = useWorkshops();

  if (loading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>Loading workshops...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>Unable to load workshops.</p>
        </div>
      </section>
    );
  }

  if (!workshops.length) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>No workshops available.</p>
        </div>
      </section>
    );
  }

  return (
    <main>
      <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em]">
              Workshops
            </p>

            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
              Learn. Apply. Move forward.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-75">
              Explore upcoming workshops and practical sessions designed to
              help you develop the skills that make a difference.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {workshops.map((workshop) => {
              const dateState = getWorkshopDateState(workshop);
              return (
                <article
                  key={workshop.id}
                  className="overflow-hidden rounded-2xl bg-white"
                >
                  <div className="p-8">
                    <p className="text-sm font-medium uppercase tracking-[0.15em]">
                      {dateState.status === "upcoming" ? "Upcoming" : "Past"}
                    </p>

                    <h2 className="mt-4 text-2xl font-medium sm:text-3xl">
                      {workshop.name}
                    </h2>

                    <p className="mt-3 text-xl">
                      {workshop.hero.title}
                    </p>

                    <p className="mt-4 leading-relaxed opacity-70">
                      {workshop.hero.subtitle}
                    </p>

                    {dateState.start && (
                      <p className="mt-6">
                        {dateState.start.toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    )}

                    <div className="mt-8">
                      <p className="text-sm font-medium uppercase tracking-wider opacity-50">
                        Format
                      </p>

                      <p className="mt-1">
                        {workshop.format}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium uppercase tracking-wider opacity-50">
                          From
                        </p>

                        <p className="mt-1 text-xl font-medium">
                          {workshop.pricing.currency}{" "}
                          {workshop.pricing.regularPrice}
                        </p>
                      </div>

                      <a
                        href={`/workshops/${workshop.slug}`}
                        className="rounded-full px-6 py-3 text-sm font-medium"
                      >
                        View Workshop
                      </a>
                    </div>
                  </div>
                </article>
            )})}
          </div>
        </div>
      </section>
    </main>
  );
}