"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Expand } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CornerFlourish } from "@/components/ui/Ornament";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { Marquee } from "@/components/ui/Marquee";
import { Lightbox } from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/layout/LanguageProvider";

// Indices into SCREENS used for the large bento frames.
const FEATURED_INDEX = 1; // Warlords
const SECONDARY_INDICES = [2, 3]; // Siegecraft, Cavalry

type ShowcaseScreen = {
  src: string;
  alt: string;
  label: string;
  caption: string;
};

export function Showcase() {
  const { copy } = useLanguage();
  const screens = copy.showcase.screens;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openAt = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const featuredRef = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ["start end", "end start"],
  });
  const featuredY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="showcase" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />
      <div className="absolute left-1/2 top-20 -z-10 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-plum-600/12 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={copy.showcase.eyebrow}
          title={copy.showcase.title}
          description={copy.showcase.description}
        />

        {/* Cinematic bento — large featured frame + two secondary frames */}
        <div className="mt-16 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <FeaturedFrame
            ref={featuredRef}
            style={{ y: featuredY }}
            screen={screens[FEATURED_INDEX]}
            featuredLabel={copy.showcase.featured}
            expandLabel={copy.showcase.expandLabel}
            onOpen={() => openAt(FEATURED_INDEX)}
          />

          <Stagger
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1"
            staggerChildren={0.12}
          >
            {SECONDARY_INDICES.map((idx) => (
              <StaggerItem key={idx}>
                <SecondaryFrame
                  screen={screens[idx]}
                  expandLabel={copy.showcase.expandLabel}
                  onOpen={() => openAt(idx)}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      {/* Marquee — the full set, phone-framed, drifting endlessly */}
      <Reveal direction="up" className="mt-20" amount={0.15}>
        <div className="mb-8 flex items-center gap-4 px-5 sm:px-8">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-400/25" />
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.28em] text-parch-400">
            {copy.showcase.browseEveryFrame}
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-400/25" />
        </div>

        <Marquee
          items={screens}
          durationS={48}
          itemClassName="w-40 sm:w-48"
          renderItem={(screen) => {
            const index = screens.indexOf(screen);
            return (
              <button
                onClick={() => openAt(index)}
                aria-label={copy.showcase.expandLabel(screen.label)}
                className="group block w-full transition-transform duration-500 hover:-translate-y-1.5"
              >
                <DeviceFrame
                  src={screen.src}
                  alt={screen.alt}
                  compact
                  sizes="(max-width: 640px) 160px, 192px"
                />
                <p className="mt-3 text-center text-sm font-medium text-parch-300 transition-colors group-hover:text-gold-200">
                  {screen.label}
                </p>
              </button>
            );
          }}
        />
      </Reveal>

      <Lightbox
        screens={screens}
        activeIndex={activeIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}

function FeaturedFrame({
  screen,
  onOpen,
  style,
  featuredLabel,
  expandLabel,
  ref,
}: {
  screen: ShowcaseScreen;
  onOpen: () => void;
  featuredLabel: string;
  expandLabel: (label: string) => string;
  style?: React.ComponentProps<typeof motion.div>["style"];
  ref?: React.Ref<HTMLButtonElement>;
}) {
  return (
    <Reveal direction="right" amount={0.2}>
      <button
        ref={ref}
        onClick={onOpen}
        aria-label={expandLabel(screen.label)}
        className="frame-gold group relative block h-full min-h-[420px] w-full overflow-hidden rounded-3xl text-left sm:min-h-[540px]"
      >
        <motion.div style={style} className="absolute inset-0 scale-110">
          <Image
            src={screen.src}
            alt={screen.alt}
            fill
            sizes="(max-width: 1024px) 90vw, 720px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/80 via-void/10 to-transparent" />
        <CornerFlourish className="absolute left-3 top-3" />
        <CornerFlourish className="absolute right-3 top-3 rotate-90" />
        <CornerFlourish className="absolute bottom-16 left-3 -rotate-90" />
        <CornerFlourish className="absolute bottom-16 right-3 rotate-180" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300/80">
              {featuredLabel}
            </span>
            <p className="mt-1.5 font-display text-2xl font-semibold text-parch-50 sm:text-3xl">
              {screen.label}
            </p>
            <p className="mt-1 text-sm text-parch-300">{screen.caption}</p>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-plum-900/70 text-gold-300 backdrop-blur-sm transition-colors group-hover:bg-gold-400 group-hover:text-plum-950">
            <Expand className="h-5 w-5" />
          </span>
        </div>
      </button>
    </Reveal>
  );
}

function SecondaryFrame({
  screen,
  onOpen,
  expandLabel,
}: {
  screen: ShowcaseScreen;
  onOpen: () => void;
  expandLabel: (label: string) => string;
}) {
  return (
    <button
      onClick={onOpen}
      aria-label={expandLabel(screen.label)}
      className={cn(
        "group relative block h-full min-h-[200px] w-full overflow-hidden rounded-2xl border border-gold-400/15 sm:min-h-[255px]",
      )}
    >
      <Image
        src={screen.src}
        alt={screen.alt}
        fill
        sizes="(max-width: 1024px) 45vw, 380px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/75 via-void/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <div>
          <p className="font-display text-lg font-semibold text-parch-50">
            {screen.label}
          </p>
          <p className="text-xs text-parch-300">{screen.caption}</p>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-plum-900/70 text-gold-300 backdrop-blur-sm transition-colors group-hover:bg-gold-400 group-hover:text-plum-950">
          <Expand className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}
