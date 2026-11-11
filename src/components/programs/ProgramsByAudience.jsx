import FadeIn from "../ui/FadeIn";
import ProgramCard from "./ProgramCard";
import { useNavigate, useSearchParams} from "react-router-dom";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";

export default function ProgramsByAudience({data}) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlGroupId = searchParams.get("group");
  const serviceGroups = data.serviceGroups || [];


  const selectedGroupId = serviceGroups.some(
      (group) => group.id === urlGroupId
  )
      ? urlGroupId
      : serviceGroups[0]?.id || null;

  const selectedGroup = serviceGroups.find(
      (group) => group.id === selectedGroupId
  );

  const handleGroupChange = (groupId) => {
    setSearchParams(
        { group: groupId },
        { replace: true }
    );
};

  const handleEnquire = (program) => {
      const params = new URLSearchParams({
          type: "program",
          group: program.serviceGroup,
          service: program.id,
      });

      navigate(`/contact?${params.toString()}#form`);
  };
    return (
        <section
            id="programs"
            className="
                relative overflow-hidden
                bg-[var(--color-background)]
                py-16 sm:py-20 lg:py-28
            "
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="
                        grid gap-6 mb-8
                        lg:grid-cols-[1.1fr_0.9fr]
                        lg:items-end lg:gap-12
                    ">
                        <div>
                        <span className="
                            text-xs font-bold uppercase
                            tracking-[0.2em]
                            text-[var(--color-primary)]
                        ">
                            {data.eyebrow}
                        </span>

                        <h2 className="
                            mt-4 max-w-2xl
                            font-heading text-3xl font-bold
                            leading-tight tracking-tight
                            text-[var(--color-secondary)]
                            sm:text-4xl lg:text-5xl
                        ">
                            {data.heading}
                        </h2>
                        </div>

                        <div className="
                        relative border-l-2
                        border-[var(--color-soft-accent)]
                        pl-5 sm:pl-6
                        ">
                        <p className="
                            max-w-xl text-sm leading-7
                            text-[var(--color-text-secondary)]
                            sm:text-base sm:leading-8
                        ">
                            {data.description}
                        </p>
                        </div>
                    </div>
                </FadeIn>
                <div className="
                    mt-10 border-b-2
                    border-[var(--color-secondary)]
                    sm:mt-14" 
                />
                    {/* Audience selector */}
                    <div
                        className="
                            mt-10 flex gap-3 overflow-x-auto
                            pb-3 scrollbar-hide
                            lg:grid lg:grid-cols-4
                            lg:overflow-visible
                        "
                        role="tablist"
                        aria-label="Program audiences"
                    >
                        {serviceGroups.map((group, index) => {
                            const isSelected = group.id === selectedGroupId;
                            const Icon = Icons[group.iconName] || Icons.Layers;

                            return (
                                <button
                                    key={group.id}
                                    type="button"
                                    role="tab"
                                    id={`tab-${group.id}`}
                                    aria-selected={isSelected}
                                    aria-controls={`panel-${group.id}`}
                                    tabIndex={isSelected ? 0 : -1}
                                    onClick={() => handleGroupChange(group.id)}
                                    className={`
                                        group relative flex min-w-[220px]
                                        flex-1 items-center gap-4
                                        overflow-hidden rounded-2xl
                                        border p-4 text-left
                                        transition-all duration-300
                                        lg:min-w-0 lg:p-5
                                        ${
                                            isSelected
                                                ? "border-[var(--color-olive)] bg-[var(--color-olive)] text-white shadow-[var(--shadow-warm)]"
                                                : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-surface-warm)]"
                                        }
                                    `}
                                >
                                    <span
                                        className={`
                                            flex h-11 w-11 shrink-0
                                            items-center justify-center
                                            rounded-xl transition-colors
                                            ${
                                                isSelected
                                                    ? "bg-white/15 text-white"
                                                    : "bg-[var(--color-soft-accent)] text-[var(--color-primary)]"
                                            }
                                        `}
                                    >
                                        <Icon size={21} strokeWidth={1.8} />
                                    </span>

                                    <span className="min-w-0 flex-1">
                                        <span
                                            className={`
                                                block text-[10px] font-bold
                                                uppercase tracking-[0.18em]
                                                ${
                                                    isSelected
                                                        ? "text-white/65"
                                                        : "text-[var(--color-text-secondary)]"
                                                }
                                            `}
                                        >
                                            0{index + 1}
                                        </span>

                                        <span className="mt-1 block text-sm font-bold leading-snug">
                                            {group.title}
                                        </span>
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className={`
                                            absolute bottom-0 left-4 right-4
                                            h-[3px] rounded-full
                                            transition-transform duration-300
                                            ${
                                                isSelected
                                                    ? "scale-x-100 bg-white/60"
                                                    : "scale-x-0 bg-[var(--color-primary)] group-hover:scale-x-100"
                                            }
                                        `}
                                    />
                                </button>
                            );
                        })}
                    </div>
                    {/* Mobile swipe indicator */}
                    <div className="
                        mt-2 flex items-center justify-center gap-2
                        text-[10px] font-bold uppercase
                        tracking-[0.18em]
                        text-[var(--color-text-muted)]
                        lg:hidden
                    ">
                        <span>Swipe to explore</span>
                        <ArrowRight size={13} />
                    </div>
                {/* Selected audience */}
                {selectedGroup && (
                    <div
                        key={selectedGroup.id}
                        role="tabpanel"
                        id={`panel-${selectedGroup.id}`}
                        aria-labelledby={`tab-${selectedGroup.id}`}
                        tabIndex={0}
                        className="mt-10 outline-none sm:mt-14"
                    >
                        <FadeIn>
                            <div
                                className="
                                    relative overflow-hidden
                                    rounded-[2rem]
                                    bg-[var(--color-secondary)]
                                    p-6 text-[var(--color-background)]
                                    sm:p-9 lg:p-12
                                "
                            >
                                {/* Decorative circle */}
                                <div
                                    aria-hidden="true"
                                    className="
                                        pointer-events-none absolute
                                        -right-20 -top-28
                                        h-72 w-72 rounded-full
                                        border-[35px]
                                        border-white/[0.06]
                                    "
                                />

                                <div className="
                                    relative grid gap-8
                                    lg:grid-cols-[1fr_auto]
                                    lg:items-end
                                ">
                                    <div className="max-w-3xl">
                                        <p className="
                                            text-xs font-bold uppercase
                                            tracking-[0.24em]
                                            text-[var(--color-soft-accent)]
                                        ">
                                            {selectedGroup.eyebrow}
                                        </p>

                                        <h2 className="
                                            mt-4 text-3xl font-black
                                            leading-tight tracking-tight
                                            sm:text-4xl lg:text-5xl
                                        ">
                                            {selectedGroup.title}
                                        </h2>

                                        <p className="
                                            mt-5 max-w-2xl
                                            text-sm leading-7
                                            text-white/70
                                            sm:text-base sm:leading-8
                                        ">
                                            {selectedGroup.description}
                                        </p>
                                    </div>

                                    <div className="
                                        flex items-center gap-3
                                        border-t border-white/15
                                        pt-5 lg:border-l lg:border-t-0
                                        lg:pl-8 lg:pt-0
                                    ">
                                        <span className="
                                            text-5xl font-black
                                            tracking-tighter
                                            text-[var(--color-soft-accent)]
                                        ">
                                            {String(selectedGroup.groupCards.length).padStart(2, "0")}
                                        </span>

                                        <span className="
                                            max-w-[90px] text-xs
                                            font-semibold uppercase
                                            leading-5 tracking-wider
                                            text-white/60
                                        ">
                                            Development programmes
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Programme cards */}
                        <div className="
                            mt-7 grid gap-5
                            lg:grid-cols-2
                        ">
                            {selectedGroup.groupCards.map((program, index) => (
                                <ProgramCard
                                    key={program.id}
                                    program={{
                                        ...program,
                                        serviceGroup: program.groupReferance,
                                    }}
                                    index={index}
                                    onEnquire={handleEnquire}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
