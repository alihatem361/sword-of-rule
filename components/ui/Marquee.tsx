"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/useReducedMotion";

type MarqueeProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  /** Seconds for one full pass of the (unduplicated) track. Slower = calmer. */
  durationS?: number;
  className?: string;
  itemClassName?: string;
  reverse?: boolean;
};

/**
 * Infinite horizontal showcase strip.
 *
 * The track is rendered twice back-to-back and animated from 0% to -50%
 * translateX — since the second copy is pixel-identical to the first,
 * the loop point is invisible. Pure CSS transform (GPU-accelerated),
 * paused on hover, and skipped entirely under prefers-reduced-motion
 * (a single static track renders instead, so reduced-motion users get
 * no duplicated DOM either).
 */
export function Marquee<T>({
  items,
  renderItem,
  durationS = 46,
  className,
  itemClassName,
  reverse = false,
}: MarqueeProps<T>) {
  const reduced = useReducedMotion();

  const track = (copy: string) =>
    items.map((item, i) => (
      <div key={`${copy}-${i}`} className={cn("shrink-0", itemClassName)}>
        {renderItem(item, i)}
      </div>
    ));

  return (
    // Force LTR so the translateX loop animates identically regardless of the
    // page direction — in RTL the flex order + transform would otherwise flip
    // and break the seamless loop. Individual item text still renders per its
    // own Unicode bidi, so Arabic labels stay correct.
    <div
      dir="ltr"
      className={cn("group relative w-full overflow-hidden", className)}
    >
      {/* edge fades so the strip dissolves into the section background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-void to-transparent sm:w-24 lg:w-32"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-void to-transparent sm:w-24 lg:w-32"
      />

      {reduced ? (
        <div className="flex w-max gap-5 sm:gap-7">{track("static")}</div>
      ) : (
        <div
          className="flex w-max gap-5 will-change-transform group-hover:[animation-play-state:paused] sm:gap-7"
          style={{
            animation: `marquee-scroll ${durationS}s linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {track("a")}
          {track("b")}
        </div>
      )}
    </div>
  );
}
