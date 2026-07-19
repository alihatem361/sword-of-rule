"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { Play, ChevronDown, Apple, Star } from "lucide-react";
import {
  GAME,
  STATS,
  APP_STORE_URL,
  TRAILER_VIDEO_SRC as HERO_VIDEO_SRC,
  TRAILER_POSTER_SRC as HERO_POSTER_SRC,
} from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Particles } from "@/components/ui/Particles";
import { StarMark } from "@/components/ui/Ornament";
import { useReducedMotion } from "@/lib/useReducedMotion";
/** Matches the source clip's duration so the loop-mask dip lands on the seam. */
const HERO_VIDEO_DURATION_S = 10;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero({ onWatchTrailer }: { onWatchTrailer?: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: background drifts slower, content lifts & fades on scroll.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // A static frame reads better than motion for reduced-motion users,
  // and is also the fallback if the clip itself fails to load.
  const useStaticBackground = videoFailed || reducedMotion;

  return (
    <section
      ref={ref}
      id="top"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background — cinematic video, with a graceful static fallback */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-20 bg-plum-950"
      >
        {useStaticBackground ? (
          <Image
            src={HERO_POSTER_SRC}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        ) : (
          <video
            aria-hidden="true"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_POSTER_SRC}
            onError={() => setVideoFailed(true)}
            className="h-full w-full object-cover object-center"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        )}
        {/* Brief dip to black masks the clip's hard loop-restart cut */}
        {!useStaticBackground && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-void"
            style={{
              animation: `video-loop-mask ${HERO_VIDEO_DURATION_S}s linear infinite`,
            }}
          />
        )}
      </motion.div>

      {/* Layered overlays: vignette + brand plum wash + bottom fade */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-void via-void/80 to-void/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-void via-void/10 to-void/60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_20%_30%,transparent,rgba(10,6,17,0.55)_75%)]" />
      <div className="arabesque absolute inset-0 -z-10 opacity-30" />

      {/* Soft plum & gold light blooms */}
      <div className="animate-pulse-glow absolute -left-40 top-1/4 -z-10 h-[36rem] w-[36rem] rounded-full bg-plum-500/25 blur-[130px]" />
      <div className="animate-pulse-glow absolute -right-20 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-gold-600/15 blur-[120px]" />

      <Particles count={26} />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-32 sm:px-8"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/25 bg-plum-900/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-gold-200 backdrop-blur-sm">
              <StarMark className="h-3 w-3" />
              {GAME.era}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-5xl font-bold leading-[0.98] text-parch-50 sm:text-7xl lg:text-8xl"
          >
            <span className="block text-gold-foil drop-shadow-[0_2px_20px_rgba(217,164,65,0.25)]">
              Sword
            </span>
            <span className="block">
              of{" "}
              <span className="italic text-parch-100">Rule</span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-parch-200 sm:text-lg"
          >
            {GAME.descriptionShort}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button
              href={APP_STORE_URL}
              icon={<Apple className="h-5 w-5" />}
              className="text-base"
            >
              Play Now — Free
            </Button>
            <Button
              variant="ghost"
              icon={<Play className="h-4 w-4 fill-current" />}
              className="text-base"
              onClick={onWatchTrailer}
            >
              Watch Trailer
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < 4
                        ? "h-4 w-4 fill-gold-300 text-gold-300"
                        : "h-4 w-4 fill-gold-300/40 text-gold-300/40"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-parch-300">
                <span className="font-semibold text-parch-100">4.2</span> · Free on the
                App Store
              </span>
            </div>
            <div className="hidden h-8 w-px bg-gold-400/20 sm:block" />
            <div className="flex gap-6">
              {STATS.slice(2).map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display text-lg font-semibold text-parch-50">
                    {s.value}
                  </span>
                  <span className="text-xs text-parch-400">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#overview"
        aria-label="Scroll to story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-parch-300"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-[22px] justify-center rounded-full border border-gold-400/40 pt-1.5">
          <span className="animate-scroll-bob">
            <ChevronDown className="h-3 w-3 text-gold-300" />
          </span>
        </span>
      </motion.a>
    </section>
  );
}
