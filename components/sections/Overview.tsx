"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OrnamentDivider, CornerFlourish } from "@/components/ui/Ornament";
import { STATS } from "@/lib/content";

export function Overview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="overview"
      className="relative overflow-hidden py-28 sm:py-36"
    >
      {/* section wash */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      <div className="absolute -right-40 top-20 -z-10 h-[34rem] w-[34rem] rounded-full bg-plum-600/15 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Artwork */}
        <div ref={ref} className="relative order-last lg:order-first">
          <Reveal direction="right" amount={0.2}>
            <div className="frame-gold relative overflow-hidden rounded-3xl">
              <motion.div style={{ y: imgY }} className="relative aspect-[4/5] scale-110">
                <Image
                  src="/screens/kingdom.webp"
                  alt="A fortified desert capital watched over by a veiled court sorceress"
                  fill
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="object-cover"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
              <CornerFlourish className="absolute left-3 top-3" />
              <CornerFlourish className="absolute right-3 top-3 rotate-90" />
              <CornerFlourish className="absolute bottom-3 left-3 -rotate-90" />
              <CornerFlourish className="absolute bottom-3 right-3 rotate-180" />
            </div>
          </Reveal>

          {/* floating stat chip */}
          <Reveal direction="up" delay={0.2}>
            <div className="glass absolute -bottom-6 -right-4 hidden rounded-2xl px-6 py-4 sm:block">
              <p className="font-display text-3xl font-bold text-gold-foil">
                {STATS[0].value}
              </p>
              <p className="text-xs uppercase tracking-widest text-parch-300">
                {STATS[0].label}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Story */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Chapter 01 · Discover the Kingdom"
            title="An empire is only as strong as the ruler who defends it"
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-parch-200 sm:text-lg">
            <Reveal direction="up">
              <p>
                The year is dark. From the eastern steppe, the{" "}
                <span className="text-gold-200">Tatar horde</span> pours across
                the frontier — faster, hungrier and more numerous than any army
                the caliphate has faced. Cities that stood for centuries fall in
                a single night.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p>
                You inherit a single walled town and an impossible task: survive.
                Raise farms and forges, drill archers and camelry, and summon the
                warlords whose names still echo through history. Every stone you
                lay, every alliance you forge, is a wager against the storm.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-parch-300">
                This is not a game of luck. It is a game of{" "}
                <span className="font-medium text-parch-50">rule</span> — of
                foresight, economy and iron will.
              </p>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.25}>
            <OrnamentDivider className="mt-10 justify-start" width={200} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
