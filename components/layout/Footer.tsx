import { Wordmark } from "@/components/ui/Wordmark";
import { NAV_LINKS } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-gold-400/12 bg-void">
      <div className="arabesque absolute inset-0 opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <Wordmark size="lg" />
            <p className="mt-5 text-sm leading-relaxed text-parch-400">
              A cinematic strategy MMO of kingdoms, heroes and the war against
              the horde. Build. Ally. Rule.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-parch-300 transition-colors hover:text-gold-300"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold-400/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-parch-400">
            © {year} Sword of Rule. Frontend case study — not affiliated with the
            game's publisher. All in-game art © its respective owners.
          </p>
          <p className="text-xs text-parch-400">
            Designed &amp; built with Next.js, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
