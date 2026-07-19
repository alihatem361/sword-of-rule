"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { OrnamentDivider } from "@/components/ui/Ornament";
import { Particles } from "@/components/ui/Particles";
import { StoreBadge } from "@/components/ui/StoreBadge";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { GAME, STATS } from "@/lib/content";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grain relative overflow-hidden rounded-[2.5rem] border border-gold-400/20 bg-gradient-to-br from-plum-800 via-plum-950 to-void px-6 py-16 sm:px-14 sm:py-20">
          {/* ambient blooms */}
          <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-plum-500/25 blur-[120px]" />
          <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-gold-600/15 blur-[120px]" />
          <div className="arabesque absolute inset-0 opacity-30" />
          <Particles count={20} />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="text-center lg:text-left">
              <Reveal direction="up">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-plum-900/50 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-200">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Free to play · No pay-to-win
                </span>
              </Reveal>

              <Reveal direction="up" delay={0.08}>
                <h2 className="mt-6 font-display text-4xl font-bold leading-[1.02] text-parch-50 sm:text-5xl lg:text-6xl">
                  The horde is coming.
                  <span className="block text-gold-foil">Will your reign endure?</span>
                </h2>
              </Reveal>

              <Reveal direction="up" delay={0.16}>
                <p
                  dir="rtl"
                  lang="ar"
                  className="mt-4 font-arabic text-xl text-gold-300/70"
                >
                  {GAME.nameArabic}
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <p className="mx-auto mt-5 max-w-xl text-base text-parch-200 lg:mx-0">
                  Download {GAME.name} and take your throne. Join millions of
                  rulers already defending the realm.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.28}>
                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                  <StoreBadge store="apple" />
                  <StoreBadge store="google" />
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.34}>
                <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
                  {STATS.map((s) => (
                    <div key={s.label} className="text-center lg:text-left">
                      <p className="font-display text-2xl font-bold text-parch-50">
                        {s.value}
                      </p>
                      <p className="text-xs text-parch-400">{s.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* device showcase */}
            <Reveal direction="left" amount={0.2} className="hidden lg:block">
              <motion.div
                initial={{ rotate: 4 }}
                whileHover={{ rotate: 0, y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="mx-auto w-full max-w-[260px]"
              >
                <DeviceFrame
                  src="/screens/cavalry.webp"
                  alt="A knight charges on horseback in Sword of Rule"
                  sizes="260px"
                />
              </motion.div>
            </Reveal>
          </div>

          <OrnamentDivider className="relative mt-16" width={260} />
        </div>
      </div>
    </section>
  );
}
