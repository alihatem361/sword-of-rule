import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  /** Slightly smaller frame chrome for gallery thumbnails. */
  compact?: boolean;
};

/**
 * A tasteful phone shell for the portrait store captures — the honest,
 * premium way to present mobile screenshots without stretching them.
 * The chrome is CSS/gradient only (no image asset) so it stays crisp.
 */
export function DeviceFrame({
  src,
  alt,
  priority = false,
  className,
  sizes = "(max-width: 768px) 60vw, 300px",
  compact = false,
}: Props) {
  return (
    <div
      className={cn(
        "relative aspect-[600/1300] w-full select-none rounded-[2rem] bg-gradient-to-b from-plum-700 to-plum-950 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)]",
        compact ? "p-[3px]" : "p-[5px] ring-1 ring-gold-400/25",
        className,
      )}
    >
      {/* metallic bezel edge */}
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
      <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-void">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
        {/* subtle screen sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10" />
        {!compact && (
          <div className="pointer-events-none absolute left-1/2 top-2.5 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/50" />
        )}
      </div>
    </div>
  );
}
