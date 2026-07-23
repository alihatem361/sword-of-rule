"use client";

import { Apple } from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_STORE_URL } from "@/lib/content";
import { useLanguage } from "@/components/layout/LanguageProvider";

/** Custom Google Play triangle (lucide has no brand glyph). */
function GooglePlayGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 2.3 L14 12 L3.5 21.7 C3.2 21.5 3 21.1 3 20.6 V3.4 C3 2.9 3.2 2.5 3.5 2.3 Z"
        fill="#34d399"
      />
      <path
        d="M3.5 2.3 C3.7 2.2 4 2.2 4.3 2.4 L16.5 9.3 L14 12 Z"
        fill="#60a5fa"
      />
      <path
        d="M3.5 21.7 L14 12 L16.5 14.7 L4.3 21.6 C4 21.8 3.7 21.8 3.5 21.7 Z"
        fill="#f87171"
      />
      <path
        d="M16.5 9.3 L20.4 11.5 C21.2 12 21.2 12 20.4 12.5 L16.5 14.7 L14 12 Z"
        fill="#fbbf24"
      />
    </svg>
  );
}

export function StoreBadge({
  store,
  className,
}: {
  store: "apple" | "google";
  className?: string;
}) {
  const isApple = store === "apple";
  const { copy } = useLanguage();
  return (
    <a
      href={isApple ? APP_STORE_URL : "#"}
      target={isApple ? "_blank" : undefined}
      rel={isApple ? "noopener noreferrer" : undefined}
      onClick={isApple ? undefined : (e) => e.preventDefault()}
      aria-label={
        isApple ? copy.storeBadge.appStoreAria : copy.storeBadge.googlePlayAria
      }
      className={cn(
        "sheen group flex items-center gap-3 rounded-2xl border border-gold-400/25 bg-plum-900/60 px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/50 hover:bg-plum-800/70",
        className,
      )}
    >
      {isApple ? (
        <Apple className="h-8 w-8 text-parch-100" />
      ) : (
        <GooglePlayGlyph className="h-7 w-7" />
      )}
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[10px] uppercase tracking-wide text-parch-300">
          {isApple ? copy.storeBadge.downloadOn : copy.storeBadge.getItOn}
        </span>
        <span className="font-display text-lg font-semibold text-parch-50">
          {isApple ? copy.storeBadge.appStore : copy.storeBadge.googlePlay}
        </span>
      </span>
    </a>
  );
}
