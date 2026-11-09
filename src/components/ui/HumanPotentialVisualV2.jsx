export default function HumanPotentialVisualV2() {
  const outerNodes = [
    { x: 260, y: 62 },
    { x: 430, y: 165 },
    { x: 395, y: 365 },
    { x: 125, y: 365 },
    { x: 90, y: 165 },
  ];

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[560px]"
      aria-hidden="true"
    >
      {/* Soft atmospheric glow */}
      <div className="absolute inset-[18%] rounded-full bg-[var(--color-secondary)]/8 blur-3xl" />

      <svg
        viewBox="0 0 520 520"
        className="relative h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="humanCore" cx="50%" cy="40%" r="65%">
            <stop
              offset="0%"
              stopColor="var(--color-secondary)"
              stopOpacity="0.95"
            />
            <stop
              offset="100%"
              stopColor="var(--color-primary)"
              stopOpacity="1"
            />
          </radialGradient>

          <linearGradient
            id="connectionGradient"
            x1="90"
            y1="60"
            x2="430"
            y2="365"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              stopColor="var(--color-secondary)"
              stopOpacity="0.15"
            />
            <stop
              offset="0.5"
              stopColor="var(--color-primary)"
              stopOpacity="0.4"
            />
            <stop
              offset="1"
              stopColor="var(--color-secondary)"
              stopOpacity="0.15"
            />
          </linearGradient>
        </defs>
        <g className="human-potential-orbit">
        {/* Outer orbit */}
            <circle
            cx="260"
            cy="260"
            r="260"
            stroke="var(--color-primary)"
            strokeOpacity="1"
            strokeWidth="1"
            />

            <circle
            cx="260"
            cy="260"
            r="240"
            stroke="var(--color-secondary)"
            strokeOpacity="1"
            strokeWidth="1"
            strokeDasharray="2 9"
            />
        </g>

        {/* Five-point ecosystem */}
        <path
          d="
            M260 62
            C340 78 420 125 430 165
            C445 250 425 330 395 365
            C345 420 185 420 125 365
            C85 325 70 245 90 165
            C105 120 180 78 260 62
          "
          stroke="var(--color-primary)"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
        <g className="human-potential-connections">
        {/* Organic connections to centre */}
        {outerNodes.map(({ x, y }) => (
          <path
            key={`${x}-${y}`}
            d={`M${x} ${y} C${x + (260 - x) * 0.35} ${
              y + (260 - y) * 0.08
            } ${260 + (x - 260) * 0.15} ${
              260 + (y - 260) * 0.15
            } 260 260`}
            stroke="url(#connectionGradient)"
            strokeWidth="1.5"
          />
        ))}
        </g>

        {/* Secondary cross-connections */}
        <path
          d="M260 62 C320 150 390 175 430 165"
          stroke="var(--color-secondary)"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        <path
          d="M430 165 C365 230 365 315 395 365"
          stroke="var(--color-secondary)"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        <path
          d="M395 365 C315 330 205 330 125 365"
          stroke="var(--color-secondary)"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        <path
          d="M125 365 C155 300 155 225 90 165"
          stroke="var(--color-secondary)"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        <path
          d="M90 165 C135 175 200 150 260 62"
          stroke="var(--color-secondary)"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        {/* Outer nodes */}
        {outerNodes.map(({ x, y }, index) => (
          <g key={`${x}-${y}-node`}>
            <circle
              cx={x}
              cy={y}
              r="14"
              fill="var(--color-background)"
              stroke="var(--color-secondary)"
              strokeOpacity="0.35"
              strokeWidth="1"
            />

            <circle
              cx={x}
              cy={y}
              r="5"
              fill={
                index === 0
                  ? "var(--color-secondary)"
                  : "var(--color-primary)"
              }
            />
          </g>
        ))}

        {/* Inner orbit */}
        <circle
          cx="260"
          cy="260"
          r="105"
          stroke="var(--color-primary)"
          strokeOpacity="0.1"
          strokeWidth="1"
        />

        <circle
          cx="260"
          cy="260"
          r="82"
          stroke="var(--color-secondary)"
          strokeOpacity="0.12"
          strokeWidth="1"
          strokeDasharray="3 7"
        />
        <g className="human-potential-core">
        {/* Central human form */}
        <circle
          cx="260"
          cy="260"
          r="64"
          fill="url(#humanCore)"
        />

        <circle
          cx="260"
          cy="260"
          r="64"
          stroke="var(--color-secondary)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
        <g transform="translate(260 245) scale(0.5) translate(-260 -260)">
            {/* Abstract person */}
            <circle
            cx="260"
            cy="239"
            r="15"
            fill="var(--color-background)"
            />

            <path
            d="
                M230 292
                C232 267 244 254 260 254
                C276 254 288 267 290 292
                C274 301 246 301 230 292Z
            "
            fill="var(--color-background)"
            />
        </g>
        </g>

        {/* Central vertical axis */}
        <path
          d="M260 210V310"
          stroke="var(--color-background)"
          strokeOpacity="0.16"
          strokeWidth="1"
        />

        {/* Small structural markers */}
        <circle
          cx="260"
          cy="260"
          r="73"
          stroke="var(--color-background)"
          strokeOpacity="0.1"
          strokeWidth="1"
        />

        <circle
          cx="260"
          cy="260"
          r="4"
          fill="var(--color-secondary)"
        />
      </svg>

      {/* Labels */}
      <div className="absolute left-1/2 top-[2%] -translate-x-1/2 whitespace-nowrap">
        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]/60">
          Psychology
        </span>
      </div>

      <div className="absolute right-[0%] top-[24%] whitespace-nowrap">
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]/60">
          Behavioural Science
        </span>
      </div>

      <div className="absolute bottom-[20%] right-[8%] whitespace-nowrap">
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]/60">
          Emotional Intelligence
        </span>
      </div>

      <div className="absolute bottom-[20%] left-[8%] whitespace-nowrap">
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]/60">
          Performance
        </span>
      </div>

      <div className="absolute left-[8%] top-[28%] whitespace-nowrap">
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]/60">
          NLP
        </span>
      </div>

      {/* Centre label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mt-12 text-center">
          <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/60">
            Human
          </p>

          <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-white">
            Potential
          </p>
        </div>
      </div>
<style>{`
  .human-potential-orbit {
    transform-origin: 260px 260px;
    animation: humanOrbit 40s linear infinite;
  }

  .human-potential-connections {
    animation: humanConnections 5s ease-in-out infinite;
  }

  .human-potential-core {
    transform-box: fill-box;
    transform-origin: center;
    animation: humanCore 5s ease-in-out infinite;
  }

  @keyframes humanOrbit {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes humanConnections {
    0%,
    100% {
      opacity: 0.55;
    }

    50% {
      opacity: 1;
    }
  }

  @keyframes humanCore {
    0%,
    100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.025);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .human-potential-orbit,
    .human-potential-connections,
    .human-potential-core {
      animation: none;
    }
  }
`}</style>
    </div>
  );
}