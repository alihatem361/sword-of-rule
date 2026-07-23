"use client";

import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { useTrailer } from "@/components/layout/TrailerContext";

type TrailerButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export function TrailerButton({ className, children }: TrailerButtonProps) {
  const { copy } = useLanguage();
  const { setIsTrailerOpen } = useTrailer();

  return (
    <Button
      variant="ghost"
      icon={<Play className="h-4 w-4 fill-current" />}
      className={cn("text-base", className)}
      onClick={() => {
        setIsTrailerOpen(true);
        scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {children ?? copy.hero.watchTrailer}
    </Button>
  );
}
