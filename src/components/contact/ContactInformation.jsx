
import { Mail, MapPin, Phone } from "lucide-react";


export default function ContactInformation({data}) {
  const contactMethods = [
  {
    label: "Call us",
    icon: Phone,
    tone: "bg-[var(--color-soft-accent)] text-[var(--color-primary)]",
    content: data.phoneNumber ?? [],
    type: "phone",
  },
  {
    label: "Email us",
    icon: Mail,
    tone: "bg-[var(--color-olive)]/25 text-white",
    content: data.email ?? [],
    type: "email",
  },
  {
    label: "Visit us",
    icon: MapPin,
    tone: "bg-[var(--color-primary)]/70 text-white",
    content: data.address ? [data.address] : [],
    type: "address",
  },
];
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:items-center lg:gap-16">

          {/* Introduction */}
          <div className="max-w-lg">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
              {data.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
              {data.heading}
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--color-text-secondary)]">
              {data.description}
            </p>

            <div className="mt-8 h-1 w-16 rounded-full bg-[var(--color-secondary)]" />
          </div>

          {/* Contact details panel */}
          <div className="relative rounded-[32px] bg-[var(--color-primary)] p-7 text-white sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10"
            />

            <div className="relative grid gap-9 sm:grid-cols-2">

              {contactMethods.map((method, index) => {
                const Icon = method.icon;

                return (
                  <div
                    key={method.type}
                    className={`
                      ${index === 2 ? "sm:col-span-2 sm:border-t sm:border-white/15 sm:pt-8" : ""}
                    `}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${method.tone}`}>
                      <Icon size={21} />
                    </div>

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                      {method.label}
                    </p>

                    <div className="mt-3 space-y-2">
                      {method.content.map((item) => {
                        if (method.type === "phone") {
                          return (
                            <a
                              key={item}
                              href={`tel:${item.replace(/\s/g, "")}`}
                              className="block text-lg font-semibold text-white transition hover:text-white/70"
                            >
                              {item}
                            </a>
                          );
                        }

                        if (method.type === "email") {
                          return (
                            <a
                              key={item}
                              href={`mailto:${item}`}
                              className="block break-words text-lg font-semibold text-white transition hover:text-white/70"
                            >
                              {item}
                            </a>
                          );
                        }

                        return (
                          <p
                            key={item}
                            className="text-base font-medium leading-7 text-white/90"
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
