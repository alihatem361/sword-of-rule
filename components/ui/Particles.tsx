"use client";

import { useMemo } from "react";

/**
 * Ambient floating embers/motes — the golden dust that drifts across
 * every scene in the game art. Deterministic seeds so SSR/CSR match,
 * CSS-driven (no rAF loop) so it costs almost nothing at runtime.
 */
export function Particles({ count = 22 }: { count?: number }) {
  const motes = useMemo(() => {
    // Simple seeded PRNG for hydration-stable positions.
    let seed = 1337;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: rand() * 100,
      bottom: rand() * 40,
      size: 1.5 + rand() * 3.5,
      duration: 9 + rand() * 12,
      delay: rand() * 10,
      drift: (rand() * 60 - 30).toFixed(0),
      opacity: 0.25 + rand() * 0.5,
    }));
  }, [count]);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {motes.map((m) => (
        <span
          key={m.id}
          className="absolute rounded-full bg-gold-200"
          style={{
            left: `${m.left}%`,
            bottom: `${m.bottom}%`,
            width: m.size,
            height: m.size,
            opacity: m.opacity,
            boxShadow: "0 0 8px 1px color-mix(in oklab, var(--color-gold-300) 70%, transparent)",
            animation: `float-up ${m.duration}s linear ${m.delay}s infinite`,
            // @ts-expect-error custom prop consumed by keyframes
            "--drift": `${m.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
