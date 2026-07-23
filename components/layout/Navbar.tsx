"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Play } from "lucide-react";
import { APP_STORE_URL } from "@/lib/content";
import { Wordmark } from "@/components/ui/Wordmark";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { TrailerButton } from "../ui/TrailerButton";
import { useLanguage } from "./LanguageProvider";

export function Navbar({ onWatchTrailer }: { onWatchTrailer?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { copy, language, setLanguage, isArabic } = useLanguage();

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
          {copy.nav.links.map((link) => (
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
          <LanguageSwitcher
            language={language}
            isArabic={isArabic}
            onChange={setLanguage}
          />
          <TrailerButton className="px-5 py-3" />
          <Button
            href={APP_STORE_URL}
            icon={<Download className="h-4 w-4" />}
            className="px-6 py-3"
          >
            {copy.hero.playNow}
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-parch-100 transition-colors hover:text-gold-300 lg:hidden"
          aria-label={
            open
              ? isArabic
                ? "إغلاق القائمة"
                : "Close menu"
              : isArabic
                ? "فتح القائمة"
                : "Open menu"
          }
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
            <div className="flex items-center justify-between gap-3 px-2 pb-2 pt-1">
              <span className="text-[10px] uppercase tracking-[0.28em] text-parch-400">
                {isArabic ? "اللغة" : "Language"}
              </span>
              <LanguageSwitcher
                language={language}
                isArabic={isArabic}
                onChange={setLanguage}
              />
            </div>

            {copy.nav.links.map((link) => (
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
                {copy.hero.watchTrailer}
              </Button>
              <Button
                href={APP_STORE_URL}
                icon={<Download className="h-4 w-4" />}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {copy.hero.playNow}
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function LanguageSwitcher({
  language,
  isArabic,
  onChange,
}: {
  language: "en" | "ar";
  isArabic: boolean;
  onChange: (value: "en" | "ar") => void;
}) {
  return (
    <div
      className="inline-flex rounded-full border border-gold-400/20 bg-plum-900/70 p-1"
      role="group"
      aria-label={isArabic ? "مبدّل اللغة" : "Language switcher"}
    >
      {(
        [
          { value: "en", label: "EN" },
          { value: "ar", label: "AR" },
        ] as const
      ).map((option) => {
        const active = option.value === language;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors",
              active
                ? "bg-gold-400 text-plum-950"
                : "text-parch-300 hover:text-parch-50",
            )}
            aria-pressed={active}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
