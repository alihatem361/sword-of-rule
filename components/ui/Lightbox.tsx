"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Screen } from "@/lib/content";

type LightboxProps = {
  screens: Screen[];
  activeIndex: number;
  open: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

/**
 * Fullscreen screenshot viewer shared by every section that shows
 * game screenshots (Showcase's featured shots, the marquee strip).
 * One instance, one set of keyboard/focus behaviors to maintain.
 */
export function Lightbox({
  screens,
  activeIndex,
  open,
  onClose,
  onNavigate,
}: LightboxProps) {
  const paginate = useCallback(
    (step: number) => {
      onNavigate((activeIndex + step + screens.length) % screens.length);
    },
    [activeIndex, screens.length, onNavigate],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, paginate, onClose]);

  const current = screens[activeIndex];
  if (!current) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-void/90 p-4 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${current.label} — full view`}
        >
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/25 bg-plum-900/70 text-parch-100 transition hover:border-gold-400/60 hover:text-gold-300"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              paginate(-1);
            }}
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold-400/25 bg-plum-900/70 text-parch-100 transition hover:border-gold-400/60 hover:text-gold-300 sm:left-8"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[82vh] max-h-[900px] w-auto"
              style={{ aspectRatio: "600 / 1300" }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="90vh"
                className="rounded-2xl border border-gold-400/25 object-contain shadow-2xl"
              />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                <p className="font-display text-lg text-parch-50">{current.label}</p>
                <p className="text-sm text-parch-300">{current.caption}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={(e) => {
              e.stopPropagation();
              paginate(1);
            }}
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold-400/25 bg-plum-900/70 text-parch-100 transition hover:border-gold-400/60 hover:text-gold-300 sm:right-8"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
