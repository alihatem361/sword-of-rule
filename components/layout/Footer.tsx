"use client";

import { Wordmark } from "@/components/ui/Wordmark";
import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  const { copy, isArabic } = useLanguage();
  return (
    <footer className="relative border-t border-gold-400/12 bg-void">
      <div className="arabesque absolute inset-0 opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <Wordmark size="lg" />
            <p
              className={cn(
                "mt-5 text-sm leading-relaxed text-parch-400",
                isArabic && "text-right",
              )}
            >
              {copy.footer.description}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {copy.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-parch-300 transition-colors hover:text-gold-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold-400/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-parch-400">
            {copy.footer.disclaimer.replace("2026", String(year))}
          </p>
          <p className="text-xs text-parch-400">{copy.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
