"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Play } from "lucide-react";
import { NAV_LINKS, APP_STORE_URL } from "@/lib/content";
import { Wordmark } from "@/components/ui/Wordmark";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { TrailerButton } from "../ui/TrailerButton";

export function Navbar({ onWatchTrailer }: { onWatchTrailer?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8",
          scrolled
            ? "my-3 rounded-2xl border border-gold-400/15 bg-plum-950/70 py-3 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "my-0 border border-transparent py-5",
        )}
      >
        <a href="#top" aria-label="Sword of Rule — home">
          <Wordmark size="md" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-parch-200 transition-colors hover:text-parch-50"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-gold-300 to-transparent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <TrailerButton className="px-5 py-3">Trailer</TrailerButton>
          <Button
            href={APP_STORE_URL}
            icon={<Download className="h-4 w-4" />}
            className="px-6 py-3"
          >
            Play Free
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-parch-100 transition-colors hover:text-gold-300 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-3 mt-1 overflow-hidden rounded-2xl border border-gold-400/15 bg-plum-950/95 p-2 backdrop-blur-xl lg:hidden"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3.5 text-base font-medium text-parch-200 transition-colors hover:bg-plum-800/60 hover:text-parch-50"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 p-2">
              <Button
                variant="ghost"
                icon={<Play className="h-4 w-4 fill-current" />}
                className="w-full"
                onClick={() => {
                  setOpen(false);
                  onWatchTrailer?.();
                }}
              >
                Watch Trailer
              </Button>
              <Button
                href={APP_STORE_URL}
                icon={<Download className="h-4 w-4" />}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Play Free
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
