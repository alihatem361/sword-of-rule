"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { TRAILER_VIDEO_SRC, TRAILER_POSTER_SRC } from "@/lib/content";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { useTrailer } from "@/components/layout/TrailerContext";
/** Fullscreen popup that plays the real cinematic clip, with sound. */
export function TrailerModal() {
  const { copy, isArabic } = useLanguage();
  const { isTrailerOpen, closeTrailer } = useTrailer();

  const isOpen = isTrailerOpen;

  const closeModal = () => {
    closeTrailer();
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    if (isTrailerOpen) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      videoRef.current?.play().catch(() => {
        /* browser blocked autoplay-with-sound; the visible native controls let the user hit play */
      });
    } else {
      const v = videoRef.current;
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isTrailerOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeModal}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-void/92 p-4 backdrop-blur-lg"
          role="dialog"
          aria-modal="true"
          aria-label={copy.trailer.ariaLabel}
        >
          <button
            onClick={closeModal}
            className={cn(
              "absolute top-5 flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/25 bg-plum-900/70 text-parch-100 transition hover:border-gold-400/60 hover:text-gold-300",
              isArabic ? "left-5" : "right-5",
            )}
            aria-label={copy.trailer.closeLabel}
          >
            <X className="h-5 w-5" />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-gold-400/25 bg-plum-950 shadow-2xl"
          >
            <video
              ref={videoRef}
              className="aspect-video w-full"
              controls
              playsInline
              poster={TRAILER_POSTER_SRC}
              preload="metadata"
            >
              <source src={TRAILER_VIDEO_SRC} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
