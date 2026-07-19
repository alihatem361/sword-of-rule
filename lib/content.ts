/**
 * Single source of truth for page copy & asset references.
 * Keeping content declarative makes the section components thin,
 * reusable and trivial to localize later.
 */

import type { LucideIcon } from "lucide-react";
import {
  Castle,
  Crown,
  Swords,
  Users,
  Coins,
  Landmark,
  ShieldHalf,
  Flame,
  Hourglass,
  Sparkles,
} from "lucide-react";

export const GAME = {
  name: "Sword of Rule",
  nameArabic: "سيف الحكم",
  tagline: "Forge an empire. Outlast the horde.",
  descriptionShort:
    "A cinematic strategy MMO set on the eve of the Tatar invasion. Raise your city, command legendary warlords, and bind your allies into an empire that endures.",
  era: "13th Century · The Tatar Wars",
} as const;

/** Official App Store listing — the single source of truth for outbound "get the game" links. */
export const APP_STORE_URL =
  "https://apps.apple.com/sa/app/sword-of-rule/id6738750584";

/** Local cinematic clip reused by both the hero background and the trailer popup. */
export const TRAILER_VIDEO_SRC = "/videos/hero-cinematic.mp4";
export const TRAILER_POSTER_SRC = "/videos/hero-poster.jpg";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string; // css color var name for the glow
};

export const FEATURES: Feature[] = [
  {
    icon: Castle,
    title: "Build Your Kingdom",
    description:
      "Plan every wall, farm and forge. Grow a humble village into a fortified capital ready to weather the storm from the east.",
    accent: "var(--color-emerald-royal)",
  },
  {
    icon: Crown,
    title: "Recruit Legendary Heroes",
    description:
      "Summon masked warlords, veiled sorcerers and desert cavalry — each with unique skill trees that reshape the battlefield.",
    accent: "var(--color-gold-400)",
  },
  {
    icon: Swords,
    title: "Real-Time Siege Warfare",
    description:
      "Marshal archers, camelry and siege engines in tactical, real-time battles where positioning decides the fate of nations.",
    accent: "var(--color-crimson-bright)",
  },
  {
    icon: Users,
    title: "Alliance Warfare",
    description:
      "Forge pacts, coordinate live raids and share intelligence in alliance war rooms. No ruler survives the horde alone.",
    accent: "var(--color-teal-royal)",
  },
];

export type Screen = {
  src: string;
  alt: string;
  label: string;
  caption: string;
};

/** Order tuned for narrative pacing in the gallery. */
export const SCREENS: Screen[] = [
  {
    src: "/screens/kingdom.webp",
    alt: "Fortified desert city with defensive walls and a veiled sorceress overlooking the realm",
    label: "The Capital",
    caption: "Fortify your city before the horde arrives",
  },
  {
    src: "/screens/hero-leader.webp",
    alt: "Masked warlord bearing a halberd inside an ornate arabesque palace hall",
    label: "Warlords",
    caption: "Choose the champion who will face the Tatars",
  },
  {
    src: "/screens/siege.webp",
    alt: "Siege catapult crewed by soldiers preparing to breach enemy walls",
    label: "Siegecraft",
    caption: "Ready the engines of war",
  },
  {
    src: "/screens/cavalry.webp",
    alt: "Armored knight charging on a white warhorse before a village keep",
    label: "Cavalry",
    caption: "Lead your riders into the charge",
  },
  {
    src: "/screens/army.webp",
    alt: "Barracks interface training desert camel archers and infantry",
    label: "The Barracks",
    caption: "Drill your army and crush the invaders",
  },
  {
    src: "/screens/alliance.webp",
    alt: "In-game alliance chat where rulers coordinate their defense",
    label: "Alliances",
    caption: "Rally your friends against a common enemy",
  },
  {
    src: "/screens/world-sultan.webp",
    alt: "Regional world map with a jeweled sultan surveying his domain",
    label: "The Realm",
    caption: "Expand your dominion across the map",
  },
];

export type Pillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const PILLARS: Pillar[] = [
  {
    icon: Landmark,
    title: "Deep Strategy",
    description:
      "Tech trees, terrain and timing. Every decision cascades across the campaign.",
  },
  {
    icon: Coins,
    title: "Living Economy",
    description:
      "Balance grain, timber, ore and gold to fund an unrelenting war machine.",
  },
  {
    icon: Swords,
    title: "Real-Time PvP",
    description:
      "Clash with rival rulers in skill-based battles decided by tactics, not luck.",
  },
  {
    icon: ShieldHalf,
    title: "Heroes & Skills",
    description:
      "Collect and ascend warlords, unlocking signature abilities and formations.",
  },
  {
    icon: Castle,
    title: "Kingdom Building",
    description:
      "Architect a capital that is equal parts fortress, marketplace and marvel.",
  },
  {
    icon: Hourglass,
    title: "Endless Progression",
    description:
      "Seasonal campaigns, prestige tiers and world events that never stand still.",
  },
];

/** Narrative beats for the interactive Experience timeline. */
export type Chapter = {
  index: string;
  kicker: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

export const CHAPTERS: Chapter[] = [
  {
    index: "01",
    kicker: "Foundation",
    title: "Raise the first stone",
    body: "Clear the frontier, lay your walls and turn a scattering of tents into a defensible heartland. Your economy is your first line of defense.",
    icon: Castle,
  },
  {
    index: "02",
    kicker: "Command",
    title: "Summon your warlords",
    body: "Recruit heroes from across the caliphate — each a distinct playstyle. Ascend them through battle to unlock devastating signature skills.",
    icon: Crown,
  },
  {
    index: "03",
    kicker: "Conquest",
    title: "March on the horde",
    body: "Deploy camelry, archers and siege engines in real time. Read the terrain, break their line, and drive the Tatars from your borders.",
    icon: Flame,
  },
  {
    index: "04",
    kicker: "Empire",
    title: "Bind the alliance",
    body: "Unite rival rulers under one banner. Coordinate season-long wars, hold the map, and etch your dynasty into history.",
    icon: Sparkles,
  },
];

/**
 * Kept honest on purpose: matches the real App Store listing (4.2/5,
 * free with in-app purchases) rather than using inflated marketing numbers.
 */
export const STATS = [
  { value: "4.2★", label: "App Store rating" },
  { value: "Free", label: "To play" },
  { value: "120+", label: "Legendary heroes" },
  { value: "24/7", label: "Live warfare" },
] as const;

export const NAV_LINKS = [
  { href: "#overview", label: "Story" },
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "Showcase" },
  { href: "#experience", label: "Gameplay" },
] as const;
