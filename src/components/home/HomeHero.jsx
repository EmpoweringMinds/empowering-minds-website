
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import FadeIn from "../ui/FadeIn";
import CTAButton from "../ui/CTAButton";

const WHATSAPP_URL = "https://wa.me/917003055263?text=Hi%20Empowering%20Minds%2C%20I%20would%20like%20to%20know%20more%20about%20your%20academy%20courses.";

// Local hero photography
const heroImageGroups = {
  main: [
    "/images/hero/workshop-1.webp",
    "/images/hero/workshop-2.webp",
    "/images/hero/workshop-3.webp",
    "/images/hero/workshop-4.webp",
  ],
  portrait: [
    "/images/hero/potrait-1.webp",
    "/images/hero/potrait-2.webp",
    "/images/hero/potrait-3.webp",
    "/images/hero/potrait-4.webp",
  ],
  interaction: [
    "/images/hero/interaction-1.webp",
    "/images/hero/interaction-2.webp",
    "/images/hero/interaction-3.webp",
    "/images/hero/interaction-4.webp",
  ],
};

// Independently rotating image with a page-turn effect
function TurningImage({
  images,
  alt,
  delay = 0,
  className = "",
  interval = 7500,
}) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || images.length < 2) return;

    let intervalId;

    const timeoutId = setTimeout(() => {
      setIndex((current) => (current + 1) % images.length);

      intervalId = setInterval(() => {
        setIndex((current) => (current + 1) % images.length);
      }, interval);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [images, delay, interval, shouldReduceMotion]);

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ perspective: "1000px" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={alt}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          initial={
            shouldReduceMotion
              ? false
              : {
                  rotateY: -85,
                  opacity: 0,
                  scale: 0.96,
                }
          }
          animate={{
            rotateY: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={
            shouldReduceMotion
              ? {}
              : {
                  rotateY: 85,
                  opacity: 0,
                  scale: 0.96,
                }
          }
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformOrigin: "left center",
            backfaceVisibility: "hidden",
          }}
        />
      </AnimatePresence>
    </div>
  );
}

export default function HomeHero({ data }) {
  if (!data) return null;

  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-[var(--color-primary)]
        text-[var(--color-background)]
        pt-32 pb-28
        sm:pt-40 sm:pb-32
        lg:pt-44 lg:pb-36
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 -top-48
          h-[550px] w-[550px]
          rounded-full border border-white/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 bottom-0
          h-80 w-80 rounded-full
          bg-white/5 blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[40%] top-1/2
          h-48 w-48 rounded-full
          border border-white/10
        "
      />

      <div
        className="
          relative mx-auto grid max-w-7xl
          items-center gap-12 px-5
          sm:px-8
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-8 lg:px-8
        "
      >
        {/* Hero copy */}
        <FadeIn className="relative z-20 max-w-2xl">

          <p
            className="
              flex items-center gap-3
              text-xs font-bold uppercase
              tracking-[0.22em]
              text-[var(--color-background)]/80
              sm:text-sm
            "
          >
            <span className="h-[2px] w-8 bg-[var(--color-background)]" />
            {data.eyebrow}
          </p>

          <h1
            className="
              mt-7 max-w-[680px]
              font-bold
              text-5xl leading-[0.98]
              tracking-[-0.045em]
              text-[var(--color-background)]
              sm:text-6xl
              lg:text-7xl
              xl:text-[5.25rem]
            "
          >
            {data.heading}
          </h1>

          <div
            aria-hidden="true"
            className="
              mt-8 h-1 w-16
              rounded-full
              bg-[var(--color-background)]/80
            "
          />

          <p
            className="
              mt-7 max-w-xl
              text-base leading-8
              text-[var(--color-background)]/85
              sm:text-lg sm:leading-8
            "
          >
            {data.description}
          </p>

          {/* CTAs */}
          <div
            className="
              mt-9 flex flex-col gap-3
              sm:flex-row sm:items-center
            "
          >
            <CTAButton href="#courses" variant="secondary">
              {data.primaryCTA}
            </CTAButton>

            <CTAButton
              href={WHATSAPP_URL}
              target="_blank"
              noreferer="true"
              noopener="true"
              variant="ghost"
            >
              {data.secondaryCTA}
            </CTAButton>
          </div>

          {/* Location */}
          <div
            className="
              mt-8 flex items-center gap-2
              text-xs font-medium tracking-wide
              text-[var(--color-background)]/75
              sm:text-sm
            "
          >
            <span className="h-2 w-2 rounded-full bg-[var(--color-background)]" />
            Online across India
            <span className="opacity-50">·</span>
            Offline in Kolkata
          </div>
        </FadeIn>

        {/* Asymmetrical image collage */}
        <FadeIn delay={0.2}>
          <div
            className="
              relative mx-auto mt-4
              w-full max-w-[620px]
              aspect-[1/1]
              sm:aspect-[1.08/1]
              lg:mt-0
            "
          >
            {/* Large workshop image */}
            <div
              className="
                absolute left-0 top-[13%]
                z-10
                h-[70%] w-[68%]
                overflow-hidden
                rounded-[28px]
                border-[5px] border-white/20
                shadow-2xl
              "
            >
              <TurningImage
                images={data.workshopHeroImages}
                alt="Participants learning and developing together"
                delay={0}
              />
            </div>

            {/* Portrait image */}
            <div
              className="
                absolute right-0 top-0
                z-20
                h-[49%] w-[40%]
                overflow-hidden
                rounded-[24px]
                border-[5px] border-white/30
                shadow-xl
              "
            >
              <TurningImage
                images={data.portraitHeroImages}
                alt="People developing their professional confidence"
                delay={2200}
              />
            </div>

            {/* Interaction image */}
            <div
              className="
                absolute bottom-[2%] right-0
                z-30
                h-[39%] w-[51%]
                overflow-hidden
                rounded-[24px]
                border-[5px] border-white/30
                shadow-xl
              "
            >
              <TurningImage
                images={data.interactionHeroImages}
                alt="People sharing ideas and learning together"
                delay={4400}
              />
            </div>

            {/* Decorative coral circle */}
            <div
              aria-hidden="true"
              className="
                absolute right-[12%] top-[10%]
                h-24 w-24 rounded-full
                border-[14px] border-white/10
              "
            />

            {/* Floating identity label */}
            <div
              className="
                absolute bottom-0 left-[3%]
                z-40 max-w-[190px]
                rounded-xl
                bg-[var(--color-background)]
                px-4 py-3
                shadow-lg
              "
            >
              <p
                className="
                  text-[10px] font-bold uppercase
                  leading-5 tracking-[0.14em]
                  text-[var(--color-secondary)]
                  sm:text-xs
                "
              >
                Learn. Grow.
                <br />
                Become a better version of yourself.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Organic curved bottom edge */}
      
    {/* Curved bottom transition */}
    <div
      aria-hidden="true"
      className="
        pointer-events-none absolute
        bottom-0 left-0 z-30
        h-[90px] w-full
        sm:h-[130px] lg:h-[160px]
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="
          block h-full w-full
          rotate-180
        "
      >
        <path
          fill="var(--color-background)"
          d="M0,224L60,229.3C120,235,240,245,360,218.7C480,192,600,128,720,112C840,96,960,128,1080,160C1200,192,1320,224,1380,240L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
    </div>


    </section>
  );
}
