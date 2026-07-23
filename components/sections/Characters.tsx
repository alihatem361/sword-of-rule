"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { useLanguage } from "@/components/layout/LanguageProvider";

type Character = {
  icon: ComponentType<{ className?: string }>;
  src: string;
  name: string;
  role: string;
  description: string;
  ability: string;
  traits: string[];
  accent: string;
};

export function Characters() {
  const { copy } = useLanguage();

  return (
    <section id="characters" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />
      <div className="arabesque absolute inset-0 -z-10 opacity-[0.35]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={copy.characters.eyebrow}
          title={copy.characters.title}
          description={copy.characters.description}
        />

        <Stagger
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.1}
        >
          {copy.characters.characters.map((character) => (
            <StaggerItem key={character.name}>
              <CharacterCard
                character={character}
                abilityLabel={copy.characters.abilityLabel}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function CharacterCard({
  character,
  abilityLabel,
}: {
  character: Character;
  abilityLabel: string;
}) {
  const Icon = character.icon;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold-400/12 bg-gradient-to-b from-plum-900/70 to-plum-950/80 backdrop-blur-sm"
    >
      {/* Portrait */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={character.src}
          alt={character.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* readability + accent wash */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/30 to-transparent" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-0 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-60"
          style={{ background: `linear-gradient(to top, ${character.accent}, transparent)` }}
        />

        {/* role badge */}
        <span
          className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/25 bg-plum-950/70 backdrop-blur-sm transition-all duration-500 group-hover:border-gold-400/50"
          style={{ color: character.accent }}
        >
          <Icon className="h-5 w-5" />
        </span>
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300/90">
          {character.role}
        </span>
        <h3 className="mt-2 font-display text-2xl font-semibold text-gold-foil">
          {character.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-parch-300">
          {character.description}
        </p>

        {/* Signature ability */}
        <div className="mt-5 rounded-xl border border-gold-400/15 bg-plum-800/40 px-4 py-3">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-parch-400">
            {abilityLabel}
          </span>
          <span
            className="mt-1 block font-display text-base font-semibold"
            style={{ color: character.accent }}
          >
            {character.ability}
          </span>
        </div>

        {/* Trait chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {character.traits.map((trait) => (
            <span
              key={trait}
              className="rounded-full border border-gold-400/15 bg-plum-900/60 px-3 py-1 text-[11px] font-medium text-parch-200"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
