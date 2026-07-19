import { cn } from "@/lib/utils";

/**
 * Gold lozenge divider — mirrors the diamond-finial rule that frames
 * every banner in the game's own UI. Pure SVG, weightless, crisp at any dpi.
 */
export function OrnamentDivider({
  className,
  width = 240,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <div
      className={cn("flex items-center justify-center", className)}
      aria-hidden="true"
    >
      <svg
        width={width}
        height="18"
        viewBox="0 0 240 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold-400"
      >
        <defs>
          <linearGradient id="orn-line" x1="0" y1="0" x2="240" y2="0">
            <stop stopColor="currentColor" stopOpacity="0" />
            <stop offset="0.5" stopColor="currentColor" stopOpacity="0.9" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="9" x2="94" y2="9" stroke="url(#orn-line)" strokeWidth="1" />
        <line x1="146" y1="9" x2="240" y2="9" stroke="url(#orn-line)" strokeWidth="1" />
        {/* central lozenge cluster */}
        <path d="M120 2 L127 9 L120 16 L113 9 Z" fill="currentColor" />
        <path
          d="M120 5 L124 9 L120 13 L116 9 Z"
          fill="var(--color-void)"
          fillOpacity="0.85"
        />
        <path d="M104 9 L108 5 L108 13 Z" fill="currentColor" fillOpacity="0.8" />
        <path d="M136 9 L132 5 L132 13 Z" fill="currentColor" fillOpacity="0.8" />
      </svg>
    </div>
  );
}

/** Small corner flourish used on framed panels. */
export function CornerFlourish({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-gold-400/60", className)}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 2 L2 12 M2 2 L12 2 M2 2 Q14 6 18 18"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Eight-point Islamic star — the section eyebrow mark. */
export function StarMark({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-gold-400", className)}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 1 L14.6 6.5 L20.5 5.3 L18.9 11 L23.5 14.8 L17.7 16.2 L18 22 L12 19 L6 22 L6.3 16.2 L0.5 14.8 L5.1 11 L3.5 5.3 L9.4 6.5 Z"
        fill="currentColor"
        fillOpacity="0.9"
      />
    </svg>
  );
}
