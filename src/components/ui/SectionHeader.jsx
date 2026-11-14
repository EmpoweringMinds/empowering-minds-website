import FadeIn from "./FadeIn";

const propStyles = {
  underline: "h-[5px] w-20 rounded-full",
  dot: "h-3.5 w-3.5 rounded-full",
  rule: "h-[2px] w-24",
};

const accentAlignments = {
  left: "mr-auto",
  center: "mx-auto",
  right: "ml-auto",
};

const splitSizes = {
  small: {
    grid: "gap-4 sm:gap-5 lg:grid-cols-[1fr_0.85fr]",
    headingPanel: "p-6 sm:p-8 lg:p-9",
    descriptionPanel: "p-6 sm:p-8 lg:p-9",
    eyebrow: "text-xs",
    title: "mt-5 text-3xl sm:text-4xl lg:text-5xl",
    description: "text-sm leading-7 sm:text-base sm:leading-8",
    circle: "h-40 w-40 border-[18px] sm:h-52 sm:w-52",
    topCircle: "h-28 w-28 border-[16px]",
  },
  large: {
    grid: "gap-5 md:grid-cols-[1fr_0.85fr] lg:gap-6",
    headingPanel: "p-7 sm:p-9 lg:p-10",
    descriptionPanel: "p-7 sm:p-9 lg:p-10",
    eyebrow: "text-xs sm:text-sm",
    title: "mt-6 text-4xl sm:text-5xl lg:text-6xl",
    description: "text-base leading-8 sm:text-lg sm:leading-9",
    circle: "h-56 w-56 border-[28px] sm:h-64 sm:w-64",
    topCircle: "h-60 w-60 border-[32px]",
  },
};

const splitThemes = {
  dark: {
    descriptionPanel: "bg-[var(--color-secondary)]",
    panelEyebrow: "text-[var(--color-primary)]",
    description: "text-[var(--color-text-light)]",
    closing: "border-white/20 text-white/75",
    topDecoration: "border-[var(--color-primary)]/20",
    bottomDecoration: "border-white/10",
    accent: "bg-[var(--color-primary)]",
    closingDot: "bg-[var(--color-primary)]",
  },
  orange: {
    descriptionPanel: "bg-[var(--color-primary)]",
    panelEyebrow: "text-white/80",
    description: "text-white/95",
    closing: "border-white/30 text-white",
    topDecoration: "border-white/15",
    bottomDecoration: "border-white/15",
    accent: "bg-[var(--color-soft-accent)]",
    closingDot: "bg-[var(--color-soft-accent)]",
  },
};

function MinimalHeader({
  eyebrow,
  title,
  description,
  align,
  prop,
  accentAlign,
  titleClassName,
  light,
}) {
  const centered = align === "center";
  const resolvedAccentAlign =
    accentAlign ?? (centered ? "center" : "left");

  const headingColor = light
    ? "text-white"
    : "text-[var(--color-secondary)]";
  const eyebrowColor = light
    ? "text-[var(--color-soft-accent)]"
    : "text-[var(--color-primary)]";
  const descriptionColor = light
    ? "text-white/80"
    : "text-[var(--color-text-secondary)]";
  const accentColor = light
    ? "bg-[var(--color-soft-accent)]"
    : "bg-[var(--color-primary)]";

  return (
    <FadeIn
      className={`
        w-full max-w-3xl
        ${centered ? "mx-auto text-center" : ""}
      `}
    >
      {eyebrow && (
        <div
          className={`
            mb-4 flex items-center gap-2.5
            ${centered ? "justify-center" : ""}
          `}
        >
          <span
            aria-hidden="true"
            className={`
              h-2 w-2 shrink-0 rounded-full
              ${light
                ? "bg-[var(--color-soft-accent)]"
                : "bg-[var(--color-primary)]"}
            `}
          />
          <p
            className={`
              text-xs font-bold uppercase tracking-[0.18em]
              sm:text-sm sm:tracking-[0.22em]
              ${eyebrowColor}
            `}
          >
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={`
          font-heading text-3xl font-bold
          leading-[1.1] tracking-[-0.04em]
          sm:text-4xl lg:text-[2.85rem]
          ${headingColor} ${titleClassName}
        `}
      >
        {title}
      </h2>

      {prop && propStyles[prop] && (
        <div
          aria-hidden="true"
          className={`
            mt-6 ${propStyles[prop]} ${accentColor}
            ${accentAlignments[resolvedAccentAlign]}
          `}
        />
      )}

      {description && (
        <p
          className={`
            mt-5 max-w-2xl text-sm leading-7
            sm:text-base sm:leading-8
            ${descriptionColor}
            ${centered ? "mx-auto" : ""}
          `}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}

function SplitHeader({
  eyebrow,
  title,
  description,
  size,
  theme,
  panelEyebrow,
  closingLabel,
  quoteMark,
}) {
  const dimensions = splitSizes[size] ?? splitSizes.small;
  const colors = splitThemes[theme] ?? splitThemes.dark;

  return (
    <FadeIn className="mx-auto w-full max-w-6xl">
      <div className={`grid items-stretch ${dimensions.grid}`}>
        {/* Heading panel */}
        <div className={`
          relative flex min-h-full flex-col justify-center
          overflow-hidden rounded-[2rem]
          bg-[var(--color-background)]
          ${dimensions.headingPanel}
        `}>
          <div className="relative z-10">
            {eyebrow && (
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-[3px] w-9 shrink-0 rounded-full bg-[var(--color-primary)]"
                />
                <span className={`
                  font-bold uppercase tracking-[0.18em]
                  text-[var(--color-primary)] ${dimensions.eyebrow}
                `}>
                  {eyebrow}
                </span>
              </div>
            )}

            <h2 className={`
              relative z-10 max-w-xl
              font-heading font-bold leading-[1.12]
              tracking-[-0.04em] text-[var(--color-secondary)]
              [text-wrap:balance] ${dimensions.title}
            `}>
              {title}
            </h2>

            <span
              aria-hidden="true"
              className={`
                mt-6 block h-[5px] w-16 rounded-full
                bg-[var(--color-primary)]
              `}
            />
          </div>

          {/* Decorative circle is present in both split sizes */}
          <span
            aria-hidden="true"
            className={`
              pointer-events-none absolute -bottom-16 -right-12
              rounded-full ${dimensions.circle}
              ${colors.topDecoration}
            `}
          />
        </div>

        {/* Description panel */}
        <div className={`
          relative flex flex-col justify-center
          overflow-hidden rounded-[2rem]
          ${colors.descriptionPanel}
          ${dimensions.descriptionPanel}
        `}>
          <div className="relative z-10">
            {panelEyebrow && (
              <span className={`
                text-xs font-bold uppercase tracking-[0.18em]
                ${colors.panelEyebrow}
              `}>
                {panelEyebrow}
              </span>
            )}

            {quoteMark && (
              <div
                aria-hidden="true"
                className="mt-7 text-4xl font-extrabold leading-none text-[var(--color-soft-accent)]"
              >
                “
              </div>
            )}

            <p className={`
              ${panelEyebrow || quoteMark ? "mt-5" : ""}
              max-w-lg font-medium ${dimensions.description}
              ${colors.description}
            `}>
              {description}
            </p>
          </div>

          {closingLabel && (
            <div className={`
              relative z-10 mt-8 flex items-center gap-3
              border-t pt-5 ${colors.closing}
            `}>
              <span
                aria-hidden="true"
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${colors.closingDot}`}
              />
              <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                {closingLabel}
              </span>
            </div>
          )}

          {/* Decorative circle is present in both split sizes */}
          <span
            aria-hidden="true"
            className={`
              pointer-events-none absolute -right-10 -top-12
              rounded-full ${dimensions.topCircle}
              ${colors.bottomDecoration}
            `}
          />
        </div>
      </div>
    </FadeIn>
  );
}

export default function SectionHeader({
  variant = "minimal",
  size = "small",
  theme = "dark",
  eyebrow,
  title,
  description,
  align = "left",
  prop = "underline",
  accentAlign,
  titleClassName = "",
  light = false,
  panelEyebrow,
  closingLabel,
  quoteMark = false,
}) {
  if (variant === "split") {
    return (
      <SplitHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        size={size}
        theme={theme}
        panelEyebrow={panelEyebrow}
        closingLabel={closingLabel}
        quoteMark={quoteMark}
      />
    );
  }

  return (
    <MinimalHeader
      eyebrow={eyebrow}
      title={title}
      description={description}
      align={align}
      prop={prop}
      accentAlign={accentAlign}
      titleClassName={titleClassName}
      light={light}
    />
  );
}
