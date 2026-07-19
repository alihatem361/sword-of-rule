"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PILLARS, CHAPTERS } from "@/lib/content";
import { cn } from "@/lib/utils";

// Chapter → screenshot pairing (kept here so content.ts stays view-agnostic)
const CHAPTER_IMAGES = [
  "/screens/kingdom.webp",
  "/screens/hero-leader.webp",
  "/screens/siege.webp",
  "/screens/alliance.webp",
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />
      <div className="arabesque absolute inset-0 -z-10 opacity-[0.35]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Chapter 04 · Experience the Battles"
          title="Depth in every direction"
          description="Seven interlocking systems turn a simple town into a living empire. Master them in any order — they all bend toward conquest."
        />

        {/* Pillars — bento grid */}
        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.08}>
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            // give the grid rhythm: first & last span wider on large screens
            const wide = i === 0 || i === PILLARS.length - 1;
            return (
              <StaggerItem
                key={pillar.title}
                className={cn(wide && "lg:col-span-1")}
              >
                <div className="group relative flex h-full items-start gap-4 overflow-hidden rounded-2xl border border-gold-400/12 bg-plum-900/40 p-6 transition-colors duration-300 hover:border-gold-400/30 hover:bg-plum-900/70">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-400/20 bg-plum-800/70 text-gold-300 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-parch-50">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-parch-300">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Progression timeline */}
        <div className="mt-24">
          <Reveal direction="up">
            <div className="flex items-center gap-4">
              <h3 className="font-display text-2xl font-semibold text-parch-50 sm:text-3xl">
                The road to empire
              </h3>
              <span className="h-px flex-1 bg-gradient-to-r from-gold-400/40 to-transparent" />
            </div>
          </Reveal>

          <ProgressionTimeline />
        </div>
      </div>
    </section>
  );
}

function ProgressionTimeline() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
      {/* Steps */}
      <ol className="relative space-y-2">
        {/* vertical rail */}
        <span className="absolute left-[27px] top-2 bottom-2 w-px bg-gold-400/15" aria-hidden />
        <motion.span
          className="absolute left-[27px] top-2 w-px bg-gradient-to-b from-gold-300 to-gold-500"
          aria-hidden
          animate={{ height: `${(active / (CHAPTERS.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxHeight: "calc(100% - 1rem)" }}
        />

        {CHAPTERS.map((ch, i) => {
          const Icon = ch.icon;
          const isActive = i === active;
          return (
            <li key={ch.index}>
              <button
                onClick={() => setActive(i)}
                aria-current={isActive}
                className="group flex w-full items-start gap-5 rounded-2xl p-4 text-left transition-colors duration-300 hover:bg-plum-900/40"
              >
                <span
                  className={cn(
                    "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-400",
                    isActive
                      ? "border-gold-400 bg-plum-800 text-gold-200 shadow-[0_0_30px_-4px] shadow-gold-500/50"
                      : "border-gold-400/25 bg-plum-950 text-parch-400 group-hover:border-gold-400/50",
                  )}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div className="pt-1">
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        "font-display text-xs font-semibold uppercase tracking-[0.25em] transition-colors",
                        isActive ? "text-gold-300" : "text-parch-400",
                      )}
                    >
                      {ch.index} · {ch.kicker}
                    </span>
                  </span>
                  <h4
                    className={cn(
                      "mt-1 font-display text-xl font-semibold transition-colors",
                      isActive ? "text-parch-50" : "text-parch-200",
                    )}
                  >
                    {ch.title}
                  </h4>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden text-sm leading-relaxed text-parch-300"
                      >
                        <span className="block pt-2">{ch.body}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Visual */}
      <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
        <div className="frame-gold relative aspect-[600/1300] overflow-hidden rounded-[2rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={CHAPTER_IMAGES[active]}
                alt={CHAPTERS[active].title}
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
