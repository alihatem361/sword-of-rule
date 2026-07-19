import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { StarMark } from "./Ornament";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

/** Consistent, hierarchy-driven section header used across the page. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Reveal direction="up">
        <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.32em] text-gold-300/90">
          <StarMark className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal direction="up" delay={0.08}>
        <h2
          className={cn(
            "font-display text-4xl font-semibold leading-[1.05] text-parch-50 sm:text-5xl lg:text-6xl",
            centered ? "max-w-3xl" : "max-w-2xl",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal direction="up" delay={0.16}>
          <p
            className={cn(
              "text-base leading-relaxed text-parch-300 sm:text-lg",
              centered ? "mx-auto max-w-2xl" : "max-w-xl",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
