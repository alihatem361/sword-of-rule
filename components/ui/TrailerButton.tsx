"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/layout/LanguageProvider";

type TrailerButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export function TrailerButton({ className, children }: TrailerButtonProps) {
  const router = useRouter();
  const { copy } = useLanguage();

  return (
    <Button
      variant="ghost"
      icon={<Play className="h-4 w-4 fill-current" />}
      className={cn("text-base", className)}
      onClick={() => router.push("/?trailer=true", { scroll: false })}
    >
      {children ?? copy.hero.watchTrailer}
    </Button>
  );
}
