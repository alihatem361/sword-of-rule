# Sword of Rule — Landing Page Case Study

A premium, AAA-quality marketing landing page for the mobile strategy game
**Sword of Rule** (سيف الحكم). Built as a frontend case study to demonstrate
production-grade React / Next.js craft — cinematic art direction, motion design,
performance and accessibility.

> **Disclaimer:** This is a personal portfolio project and is **not** an official
> redesign or affiliated with the game's publisher. All in-game artwork © its
> respective owners; it is used here only to present the case study.

---

## Design Strategy

The brief was to redesign the *experience* while **preserving the game's identity**.
Before writing any code, the existing App Store key art was analysed to distil a
brand system:

| Signal from the art | Decision in the page |
| --- | --- |
| Royal **purple** voids + antique **gold** ornament | Core palette (`--color-plum-*`, `--color-gold-*`) — preserved, not reinvented |
| Emerald / teal & crimson character accents | Per-feature accent glows |
| **Islamic arabesque** geometry, ogee arches, lozenge finials | CSS-drawn arabesque texture, ornamental dividers, corner flourishes |
| The setting: the **Tatar (Mongol) invasion** | Narrative-led copy across every section |
| The game is **Arabic** | English-primary copy for the target audience, with the authentic Arabic wordmark سيف الحكم woven in as a premium accent |
| Screens are **portrait phone captures** | Presented in device frames + treated cinematic crops — never stretched |

**Type:** `Cinzel` (inscriptional serif → epic display), `Inter` (body),
`Amiri` (Arabic naskh) — all via `next/font`.

---

## Sections — one continuous story

1. **Hero** — cinematic looping video background (poster + graceful image fallback), floating particles, dual CTAs, scroll indicator
2. **Chapter 01 · Overview** — "Discover the Kingdom": two-column chronicle with parallax framed artwork
3. **Chapter 02 · Features** — "The Instruments of Rule": four accent-lit cards with staggered reveal
4. **Chapter 03 · Showcase** — "Meet the Heroes": cinematic bento of large framed screenshots + an infinite phone-frame marquee, all opening into a shared lightbox
5. **Chapter 04 · Experience** — "Experience the Battles": 6-pillar bento grid + interactive progression timeline
6. **Call to Action** — download band linking straight to the real [App Store listing](https://apps.apple.com/sa/app/sword-of-rule/id6738750584)

The **Watch Trailer** action lives in the header (desktop nav + mobile drawer)
and in the Hero — both open the same modal, which plays the real cinematic
clip (`public/videos/hero-cinematic.mp4`) with sound and native controls.
There is no separate Trailer or Game Info page section; removed in favor of
keeping the header trigger as the one entry point for the trailer.

---

## Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` design tokens)
- **Framer Motion** — scroll reveals, staggers, parallax, layout & modal transitions
- **lucide-react** icons · **next/font** · **next/image**

## Engineering notes

- **Hero video:** native `<video autoPlay muted loop playsInline preload="metadata">`
  with a high-quality poster frame (extracted from the clip, doubles as the static
  fallback). A brief CSS opacity dip masks the source clip's hard loop-restart cut.
  Falls back to a static image if the video errors, or if the visitor has
  `prefers-reduced-motion` set — decided client-side, no video bytes fetched
  in that path beyond the poster.
- **Showcase marquee:** pure CSS `transform: translate3d` animation (GPU-accelerated,
  no rAF), track duplicated once for a mathematically seamless loop, paused on
  hover, and skipped entirely (single static track, no duplication) under
  `prefers-reduced-motion`.
- **Outbound links:** every "Play Free" / "Download" CTA (`Button` with an
  `href`, both `StoreBadge`s' Apple variant) points at the real
  [App Store listing](https://apps.apple.com/sa/app/sword-of-rule/id6738750584),
  `target="_blank" rel="noopener noreferrer"`. The Hero's rating/price callouts
  (4.2★, Free) match that listing rather than using inflated marketing numbers.
- **Performance:** static prerender, `next/image` (AVIF/WebP, responsive `sizes`,
  lazy by default, `priority` only on the hero), CSS-driven particles (no rAF loop),
  fixed aspect ratios to prevent layout shift.
- **Accessibility:** semantic landmarks, skip link, focus-visible rings, `aria`
  state on interactive controls, full keyboard support in the lightbox, and a
  `prefers-reduced-motion` guard applied to the hero video and the marquee.
- **Architecture:** thin section components fed by a single declarative content
  layer (`lib/content.ts`); reusable motion (`Reveal`, `Stagger`) and UI
  primitives (`Button`, `DeviceFrame`, `Marquee`, `Lightbox`, `Ornament`,
  `Wordmark`, `StoreBadge`).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/              layout, page, global design system (globals.css)
components/
  layout/         Navbar (carries the header Watch Trailer + Play Free CTAs), Footer
  sections/       Hero, Overview, Features, Showcase, Experience, CTA, TrailerModal
  motion/         Reveal / Stagger primitives
  ui/             Button (button or external link), DeviceFrame, Marquee, Lightbox,
                  Ornament, SectionHeading, Wordmark, StoreBadge, Particles
lib/              content.ts (copy + assets + APP_STORE_URL), utils.ts (cn),
                  useReducedMotion.ts
public/screens/   optimised in-game screenshots
public/videos/    hero-cinematic.mp4 + extracted poster frame (shared by the
                  Hero background and the trailer popup)
```
