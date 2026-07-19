"use client";

import {
  useState,
  useCallback,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type ReactNode,
  type MouseEvent,
} from "react";
import { cn } from "@/lib/utils";

type Ripple = { id: number; x: number; y: number; size: number };

type Variant = "primary" | "ghost";

type CommonProps = {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    /** When set, renders an external link styled identically to the button. */
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Premium CTA button.
 * - Gold "primary" (embossed signet) and glass "ghost" variants
 * - Physical ripple originating from the pointer
 * - Light sheen sweep on hover (see .sheen in globals.css)
 * - Renders as a real `<a>` when `href` is given (e.g. linking out to the
 *   App Store), so external navigation doesn't rely on JS at all.
 */
export function Button({ variant = "primary", icon, children, className, ...props }: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const id = Date.now();
      setRipples((r) => [
        ...r,
        { id, x: e.clientX - rect.left, y: e.clientY - rect.top, size },
      ]);
      window.setTimeout(
        () => setRipples((r) => r.filter((rp) => rp.id !== id)),
        650,
      );
    },
    [],
  );

  const sharedClassName = cn(
    "sheen group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-void active:scale-[0.97]",
    variant === "primary" &&
      "bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 text-plum-950 shadow-[0_10px_40px_-10px_rgba(217,164,65,0.55)] hover:shadow-[0_18px_60px_-12px_rgba(217,164,65,0.75)] hover:-translate-y-0.5",
    variant === "ghost" &&
      "glass text-parch-100 hover:border-gold-400/45 hover:text-parch-50 hover:-translate-y-0.5",
    className,
  );

  const content = (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/35"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            transform: "translate(-50%, -50%) scale(0)",
            animation: "ripple 0.65s ease-out forwards",
          }}
        />
      ))}
      {icon && (
        <span className="relative transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
      )}
      <span className="relative">{children}</span>
    </>
  );

  if (props.href) {
    const { href, onClick, ...anchorProps } = props as ButtonAsLink;
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          handleClick(e);
          onClick?.(e);
        }}
        className={sharedClassName}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  const { onClick, ...buttonProps } = props as ButtonAsButton;
  return (
    <button
      onClick={(e) => {
        handleClick(e);
        onClick?.(e);
      }}
      className={sharedClassName}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
