"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { FEATURES, type Feature } from "@/lib/content";

export function Features() {
  return (
    <section id="features" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Chapter 02 · The Instruments of Rule"
          title="Four ways to command the age"
          description="Every system is built to reward the ruler who thinks three moves ahead — from the first foundation stone to the final siege."
        />

        <Stagger
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.1}
        >
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title}>
              <FeatureCard feature={feature} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-gold-400/12 bg-gradient-to-b from-plum-900/70 to-plum-950/70 p-7 backdrop-blur-sm"
    >
      {/* accent glow that blooms on hover */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: feature.accent }}
      />
      {/* top hairline that lights up */}
      <span
        className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold-300 to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />

      <div className="relative">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold-400/20 bg-plum-800/60 transition-all duration-500 group-hover:border-gold-400/50 group-hover:shadow-[0_0_30px_-6px] group-hover:shadow-gold-500/40"
          style={{ color: feature.accent }}
        >
          <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
        </div>

        <h3 className="mt-6 font-display text-xl font-semibold text-parch-50">
          {feature.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-parch-300">
          {feature.description}
        </p>
      </div>

      {/* number watermark */}
      <span className="pointer-events-none absolute bottom-3 right-4 font-display text-6xl font-bold text-gold-400/[0.06] transition-colors duration-500 group-hover:text-gold-400/10">
        {FEATURES.indexOf(feature) + 1}
      </span>
    </motion.article>
  );
}
