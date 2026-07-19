import { cn } from "@/lib/utils";
import { GAME } from "@/lib/content";

/**
 * The lockup: a crossed-swords crest + the English wordmark, with the
 * authentic Arabic name سيف الحكم as a premium accent. Honors the game's
 * identity rather than inventing new branding.
 */
export function Wordmark({
  className,
  showArabic = true,
  size = "md",
}: {
  className?: string;
  showArabic?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const dims = {
    sm: { crest: 26, title: "text-base", sub: "text-[9px]" },
    md: { crest: 34, title: "text-xl", sub: "text-[10px]" },
    lg: { crest: 44, title: "text-2xl", sub: "text-xs" },
  }[size];

  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Crest size={dims.crest} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-semibold tracking-wide text-gold-foil",
            dims.title,
          )}
        >
          Sword of Rule
        </span>
        {showArabic && (
          <span
            dir="rtl"
            lang="ar"
            className={cn(
              "mt-1 font-arabic tracking-wide text-gold-300/70",
              dims.sub,
            )}
          >
            {GAME.nameArabic}
          </span>
        )}
      </span>
    </span>
  );
}

function Crest({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="shrink-0 drop-shadow-[0_2px_6px_rgba(217,164,65,0.35)]"
    >
      <defs>
        <linearGradient id="crest-gold" x1="0" y1="0" x2="0" y2="48">
          <stop stopColor="var(--color-gold-100)" />
          <stop offset="0.55" stopColor="var(--color-gold-400)" />
          <stop offset="1" stopColor="var(--color-gold-600)" />
        </linearGradient>
      </defs>
      {/* medallion */}
      <circle
        cx="24"
        cy="24"
        r="21"
        stroke="url(#crest-gold)"
        strokeWidth="1.5"
        fill="var(--color-plum-900)"
      />
      <circle cx="24" cy="24" r="17.5" stroke="url(#crest-gold)" strokeWidth="0.75" strokeOpacity="0.45" />
      {/* crescent — a nod to the game's setting */}
      <path
        d="M32.5 11 A15 15 0 1 0 32.5 37 A12 12 0 1 1 32.5 11 Z"
        fill="url(#crest-gold)"
        fillOpacity="0.28"
      />
      {/* upright sword */}
      <g fill="url(#crest-gold)">
        {/* blade */}
        <path d="M24 8 L26 12 L26 28 L24 30.5 L22 28 L22 12 Z" />
        {/* crossguard */}
        <rect x="16.5" y="29.5" width="15" height="2.4" rx="1.2" />
        {/* grip + pommel */}
        <rect x="23" y="32" width="2" height="4.5" rx="1" />
        <circle cx="24" cy="38" r="2" />
      </g>
    </svg>
  );
}
