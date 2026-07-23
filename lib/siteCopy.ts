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
  Wand2,
  Wind,
  Gem,
} from "lucide-react";

import { GAME } from "@/lib/content";

export type Language = "en" | "ar";

type NavLink = {
  href: string;
  label: string;
};

type HeroCopy = {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  playNow: string;
  watchTrailer: string;
  ratingLabel: string;
  scroll: string;
};

type OverviewCopy = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  alt: string;
  statLabel: string;
};

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
};

type FeaturesCopy = {
  eyebrow: string;
  title: string;
  description: string;
  items: FeatureItem[];
};

type ScreenItem = {
  src: string;
  alt: string;
  label: string;
  caption: string;
};

type ShowcaseCopy = {
  eyebrow: string;
  title: string;
  description: string;
  browseEveryFrame: string;
  featured: string;
  expandLabel: (label: string) => string;
  screens: ScreenItem[];
};

type PillarItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ChapterItem = {
  index: string;
  kicker: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

type ExperienceCopy = {
  eyebrow: string;
  title: string;
  description: string;
  roadTitle: string;
  pillars: PillarItem[];
  chapters: ChapterItem[];
};

type CtaCopy = {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  appStoreLabel: string;
  googlePlayLabel: string;
  statsLabels: string[];
};

type FooterCopy = {
  description: string;
  disclaimer: string;
  builtWith: string;
};

type TrailerCopy = {
  ariaLabel: string;
  closeLabel: string;
};

type StoreBadgeCopy = {
  downloadOn: string;
  getItOn: string;
  appStore: string;
  googlePlay: string;
  appStoreAria: string;
  googlePlayAria: string;
};

type CharacterItem = {
  icon: LucideIcon;
  src: string;
  name: string;
  role: string;
  description: string;
  ability: string;
  traits: string[];
  accent: string;
};

type CharactersCopy = {
  eyebrow: string;
  title: string;
  description: string;
  abilityLabel: string;
  characters: CharacterItem[];
};

type SiteCopy = {
  nav: { links: readonly NavLink[] };
  hero: HeroCopy;
  overview: OverviewCopy;
  features: FeaturesCopy;
  showcase: ShowcaseCopy;
  characters: CharactersCopy;
  experience: ExperienceCopy;
  cta: CtaCopy;
  footer: FooterCopy;
  trailer: TrailerCopy;
  storeBadge: StoreBadgeCopy;
};

const featureBase = [
  {
    icon: Castle,
    accent: "var(--color-emerald-royal)",
    en: {
      title: "Build Your Kingdom",
      description:
        "Plan every wall, farm and forge. Grow a humble village into a fortified capital ready to weather the storm from the east.",
    },
    ar: {
      title: "ابنِ مملكتك",
      description:
        "خطط لكل جدار ومزرعة ومصهر. حوّل القرية الصغيرة إلى عاصمة محصنة قادرة على الصمود أمام العاصفة القادمة من الشرق.",
    },
  },
  {
    icon: Crown,
    accent: "var(--color-gold-400)",
    en: {
      title: "Recruit Legendary Heroes",
      description:
        "Summon masked warlords, veiled sorcerers and desert cavalry — each with unique skill trees that reshape the battlefield.",
    },
    ar: {
      title: "جنّد الأبطال الأسطوريين",
      description:
        "استدعِ أمراء حرب مقنّعين وسحرة متخفّين وفرسان الصحراء، وكل منهم يملك شجرة مهارات تغيّر شكل المعركة.",
    },
  },
  {
    icon: Swords,
    accent: "var(--color-crimson-bright)",
    en: {
      title: "Real-Time Siege Warfare",
      description:
        "Marshal archers, camelry and siege engines in tactical, real-time battles where positioning decides the fate of nations.",
    },
    ar: {
      title: "حروب حصار آنية",
      description:
        "وجّه الرماة وفرسان الجمال وآلات الحصار في معارك تكتيكية آنية، حيث يحدد التموضع مصير الأمم.",
    },
  },
  {
    icon: Users,
    accent: "var(--color-teal-royal)",
    en: {
      title: "Alliance Warfare",
      description:
        "Forge pacts, coordinate live raids and share intelligence in alliance war rooms. No ruler survives the horde alone.",
    },
    ar: {
      title: "حرب التحالفات",
      description:
        "أبرم العهود، نسّق الغارات المباشرة وتبادل المعلومات في غرف حرب التحالف. لا ينجو أي حاكم من الحشد وحده.",
    },
  },
] as const;

const screenBase = [
  {
    src: "/screens/kingdom.webp",
    en: {
      alt: "Fortified desert city with defensive walls and a veiled sorceress overlooking the realm",
      label: "The Capital",
      caption: "Fortify your city before the horde arrives",
    },
    ar: {
      alt: "مدينة صحراوية محصنة بأسوار دفاعية وساحرة متخفية تراقب المملكة",
      label: "العاصمة",
      caption: "حصّن مدينتك قبل وصول الحشد",
    },
  },
  {
    src: "/screens/hero-leader.webp",
    en: {
      alt: "Masked warlord bearing a halberd inside an ornate arabesque palace hall",
      label: "Warlords",
      caption: "Choose the champion who will face the Tatars",
    },
    ar: {
      alt: "أمير حرب مقنّع يحمل رمحًا ذا نصل عريض داخل قاعة قصر مزخرفة",
      label: "أمراء الحرب",
      caption: "اختر البطل الذي سيواجه التتار",
    },
  },
  {
    src: "/screens/siege.webp",
    en: {
      alt: "Siege catapult crewed by soldiers preparing to breach enemy walls",
      label: "Siegecraft",
      caption: "Ready the engines of war",
    },
    ar: {
      alt: "منجنيق حصار يديره جنود استعدادًا لاختراق أسوار العدو",
      label: "فن الحصار",
      caption: "أعد آلات الحرب",
    },
  },
  {
    src: "/screens/cavalry.webp",
    en: {
      alt: "Armored knight charging on a white warhorse before a village keep",
      label: "Cavalry",
      caption: "Lead your riders into the charge",
    },
    ar: {
      alt: "فارس مدرع يندفع على صهوة جواد أبيض أمام حصن قرية",
      label: "الفرسان",
      caption: "قد راكبيك إلى الهجوم",
    },
  },
  {
    src: "/screens/army.webp",
    en: {
      alt: "Barracks interface training desert camel archers and infantry",
      label: "The Barracks",
      caption: "Drill your army and crush the invaders",
    },
    ar: {
      alt: "واجهة ثكنة تدرب رماة الجمال الصحراويين والجنود المشاة",
      label: "الثكنات",
      caption: "درّب جيشك واسحق الغزاة",
    },
  },
  {
    src: "/screens/alliance.webp",
    en: {
      alt: "In-game alliance chat where rulers coordinate their defense",
      label: "Alliances",
      caption: "Rally your friends against a common enemy",
    },
    ar: {
      alt: "دردشة تحالف داخل اللعبة حيث ينسّق الحكام دفاعهم",
      label: "التحالفات",
      caption: "اجمع أصدقاءك ضد عدو واحد",
    },
  },
  {
    src: "/screens/world-sultan.webp",
    en: {
      alt: "Regional world map with a jeweled sultan surveying his domain",
      label: "The Realm",
      caption: "Expand your dominion across the map",
    },
    ar: {
      alt: "خريطة عالمية إقليمية مع سلطان مرصع بالجواهر يتأمل مملكته",
      label: "المملكة",
      caption: "وسّع سلطانك عبر الخريطة",
    },
  },
] as const;

const pillarBase = [
  {
    icon: Landmark,
    en: {
      title: "Deep Strategy",
      description:
        "Tech trees, terrain and timing. Every decision cascades across the campaign.",
    },
    ar: {
      title: "استراتيجية عميقة",
      description:
        "شجرات تطوير، تضاريس، وتوقيت. كل قرار يترك أثره عبر الحملة بأكملها.",
    },
  },
  {
    icon: Coins,
    en: {
      title: "Living Economy",
      description:
        "Balance grain, timber, ore and gold to fund an unrelenting war machine.",
    },
    ar: {
      title: "اقتصاد حي",
      description:
        "وازن بين الحبوب والخشب والخام والذهب لتمويل آلة حرب لا تهدأ.",
    },
  },
  {
    icon: Swords,
    en: {
      title: "Real-Time PvP",
      description:
        "Clash with rival rulers in skill-based battles decided by tactics, not luck.",
    },
    ar: {
      title: "مواجهات PvP آنية",
      description:
        "اصطدم بحكام منافسين في معارك تعتمد على المهارة وتحسمها الخطط لا الحظ.",
    },
  },
  {
    icon: ShieldHalf,
    en: {
      title: "Heroes & Skills",
      description:
        "Collect and ascend warlords, unlocking signature abilities and formations.",
    },
    ar: {
      title: "أبطال ومهارات",
      description:
        "اجمع أمراء الحرب وارتقِ بهم، وافتح قدراتهم وتشكيلاتهم المميزة.",
    },
  },
  {
    icon: Castle,
    en: {
      title: "Kingdom Building",
      description:
        "Architect a capital that is equal parts fortress, marketplace and marvel.",
    },
    ar: {
      title: "بناء المملكة",
      description: "صمّم عاصمة تجمع بين الحصن والسوق والعجائب في آن واحد.",
    },
  },
  {
    icon: Hourglass,
    en: {
      title: "Endless Progression",
      description:
        "Seasonal campaigns, prestige tiers and world events that never stand still.",
    },
    ar: {
      title: "تقدم لا ينتهي",
      description: "حملات موسمية، مراتب هيبة، وأحداث عالمية لا تتوقف أبدًا.",
    },
  },
] as const;

const chapterBase = [
  {
    icon: Castle,
    en: {
      index: "01",
      kicker: "Foundation",
      title: "Raise the first stone",
      body: "Clear the frontier, lay your walls and turn a scattering of tents into a defensible heartland. Your economy is your first line of defense.",
    },
    ar: {
      index: "01",
      kicker: "البداية",
      title: "ارفع الحجر الأول",
      body: "طهّر الحدود، شيد أسوارك، وحوّل الخيام المتناثرة إلى قلب أرض قادر على الدفاع عن نفسه. اقتصادك هو خط دفاعك الأول.",
    },
  },
  {
    icon: Crown,
    en: {
      index: "02",
      kicker: "Command",
      title: "Summon your warlords",
      body: "Recruit heroes from across the caliphate — each a distinct playstyle. Ascend them through battle to unlock devastating signature skills.",
    },
    ar: {
      index: "02",
      kicker: "القيادة",
      title: "استدعِ أمراء حربك",
      body: "جنّد الأبطال من أرجاء الخلافة، فلكل واحد أسلوب لعب مختلف. ارتقِ بهم عبر المعارك لفتح مهاراتهم المدمرة.",
    },
  },
  {
    icon: Flame,
    en: {
      index: "03",
      kicker: "Conquest",
      title: "March on the horde",
      body: "Deploy camelry, archers and siege engines in real time. Read the terrain, break their line, and drive the Tatars from your borders.",
    },
    ar: {
      index: "03",
      kicker: "الفتح",
      title: "ازحف نحو الحشد",
      body: "انشر فرسان الجمال والرماة وآلات الحصار في الوقت الحقيقي. اقرأ التضاريس، اكسر صفوفهم، واطرد التتار من حدودك.",
    },
  },
  {
    icon: Sparkles,
    en: {
      index: "04",
      kicker: "Empire",
      title: "Bind the alliance",
      body: "Unite rival rulers under one banner. Coordinate season-long wars, hold the map, and etch your dynasty into history.",
    },
    ar: {
      index: "04",
      kicker: "الإمبراطورية",
      title: "وحّد التحالف",
      body: "اجمع الحكام المتنافسين تحت راية واحدة. نسّق الحروب الموسمية، وامسك بالخريطة، وانقش سلالتك في التاريخ.",
    },
  },
] as const;

const characterBase = [
  {
    icon: Wand2,
    src: "/screens/kingdom.webp",
    accent: "var(--color-emerald-royal)",
    en: {
      name: "Layla the Veiled",
      role: "Court Sorceress",
      description:
        "Keeper of the old wards, she reads the storm before it breaks and turns the desert wind against those who march on your walls.",
      ability: "Sandstorm Veil",
      traits: ["Arcane", "Defense", "Support"],
    },
    ar: {
      name: "ليلى المُتخفّية",
      role: "ساحرة البلاط",
      description:
        "حارسة التعاويذ القديمة، تقرأ العاصفة قبل أن تنكسر، وتُسخّر ريح الصحراء ضد من يزحف نحو أسوارك.",
      ability: "حجاب العاصفة",
      traits: ["سحر", "دفاع", "إسناد"],
    },
  },
  {
    icon: Swords,
    src: "/screens/hero-leader.webp",
    accent: "var(--color-crimson-bright)",
    en: {
      name: "Rustam the Masked",
      role: "Warlord Commander",
      description:
        "A face no enemy has ever seen and lived. Where his halberd falls, the front line breaks — and the horde learns to fear the caliphate.",
      ability: "Halberd Vanguard",
      traits: ["Assault", "Frontline", "Leadership"],
    },
    ar: {
      name: "رستم المُقنّع",
      role: "أمير الحرب القائد",
      description:
        "وجهٌ لم يره عدوٌّ وبقي حيًّا. حيث يهوي رمحه ينكسر خط المواجهة، فيتعلّم الحشد أن يهاب الخلافة.",
      ability: "طليعة الرمح",
      traits: ["هجوم", "خط أمامي", "قيادة"],
    },
  },
  {
    icon: Wind,
    src: "/screens/cavalry.webp",
    accent: "var(--color-teal-royal)",
    en: {
      name: "Zayd of the Dunes",
      role: "Cavalry Captain",
      description:
        "Faster than rumor, he strikes the flank and is gone before the dust settles. No supply line is safe while he rides the frontier.",
      ability: "Desert Charge",
      traits: ["Cavalry", "Speed", "Raiding"],
    },
    ar: {
      name: "زيد الكُثبان",
      role: "قائد الفرسان",
      description:
        "أسرع من الإشاعة، يضرب الجناح ويختفي قبل أن يهدأ الغبار. لا خطّ إمداد آمن ما دام يجوب الحدود.",
      ability: "هجمة الصحراء",
      traits: ["فرسان", "سرعة", "إغارة"],
    },
  },
  {
    icon: Gem,
    src: "/screens/world-sultan.webp",
    accent: "var(--color-gold-400)",
    en: {
      name: "Sultan Malik",
      role: "Sovereign Ruler",
      description:
        "The crown that binds the alliance. His treasury funds the war and his word turns rival lords into sworn banners.",
      ability: "Royal Decree",
      traits: ["Economy", "Alliance", "Command"],
    },
    ar: {
      name: "السلطان مالك",
      role: "الحاكم صاحب السيادة",
      description:
        "التاج الذي يوحّد التحالف. خزائنه تموّل الحرب، وكلمته تحوّل الأمراء المنافسين إلى رايات مُقسِمة بالولاء.",
      ability: "المرسوم الملكي",
      traits: ["اقتصاد", "تحالف", "قيادة"],
    },
  },
] as const;

const navLinks = {
  en: [
    { href: "#overview", label: "Story" },
    { href: "#features", label: "Features" },
    { href: "#showcase", label: "Showcase" },
    { href: "#characters", label: "Heroes" },
    { href: "#experience", label: "Gameplay" },
  ],
  ar: [
    { href: "#overview", label: "القصة" },
    { href: "#features", label: "الميزات" },
    { href: "#showcase", label: "المعرض" },
    { href: "#characters", label: "الأبطال" },
    { href: "#experience", label: "أسلوب اللعب" },
  ],
} as const;

export const SITE_COPY: Record<Language, SiteCopy> = {
  en: {
    nav: { links: navLinks.en },
    hero: {
      badge: GAME.era,
      titleLine1: "Sword",
      titleLine2: "Rule",
      description:
        "A cinematic strategy MMO set on the eve of the Tatar invasion. Raise your city, command legendary warlords, and bind your allies into an empire that endures.",
      playNow: "Play Now — Free",
      watchTrailer: "Watch Trailer",
      ratingLabel: "Free on the App Store",
      scroll: "Scroll",
    },
    overview: {
      eyebrow: "Chapter 01 · Discover the Kingdom",
      title: "An empire is only as strong as the ruler who defends it",
      paragraphs: [
        "The year is dark. From the eastern steppe, the Tatar horde pours across the frontier — faster, hungrier and more numerous than any army the caliphate has faced. Cities that stood for centuries fall in a single night.",
        "You inherit a single walled town and an impossible task: survive. Raise farms and forges, drill archers and camelry, and summon the warlords whose names still echo through history. Every stone you lay, every alliance you forge, is a wager against the storm.",
        "This is not a game of luck. It is a game of rule — of foresight, economy and iron will.",
      ],
      alt: "A fortified desert capital watched over by a veiled court sorceress",
      statLabel: "App Store rating",
    },
    features: {
      eyebrow: "Chapter 02 · The Instruments of Rule",
      title: "Four ways to command the age",
      description:
        "Every system is built to reward the ruler who thinks three moves ahead — from the first foundation stone to the final siege.",
      items: featureBase.map((item) => ({
        icon: item.icon,
        accent: item.accent,
        title: item.en.title,
        description: item.en.description,
      })),
    },
    showcase: {
      eyebrow: "Chapter 03 · Meet the Heroes",
      title: "Every screen tells a story",
      description:
        "Captured straight from the live game — a capital under siege, warlords sworn to your banner, and the horde always one march away.",
      browseEveryFrame: "Browse every frame",
      featured: "Featured",
      expandLabel: (label) => `Expand ${label}`,
      screens: screenBase.map((screen) => ({
        src: screen.src,
        alt: screen.en.alt,
        label: screen.en.label,
        caption: screen.en.caption,
      })),
    },
    characters: {
      eyebrow: "Chapter 04 · Choose Your Champion",
      title: "The heroes who answer your call",
      description:
        "Every campaign is won by the warlords at your side. Recruit them, ascend them, and unleash a signature skill that can turn the tide of a siege.",
      abilityLabel: "Signature ability",
      characters: characterBase.map((character) => ({
        icon: character.icon,
        src: character.src,
        accent: character.accent,
        name: character.en.name,
        role: character.en.role,
        description: character.en.description,
        ability: character.en.ability,
        traits: [...character.en.traits],
      })),
    },
    experience: {
      eyebrow: "Chapter 05 · Experience the Battles",
      title: "Depth in every direction",
      description:
        "Seven interlocking systems turn a simple town into a living empire. Master them in any order — they all bend toward conquest.",
      roadTitle: "The road to empire",
      pillars: pillarBase.map((pillar) => ({
        icon: pillar.icon,
        title: pillar.en.title,
        description: pillar.en.description,
      })),
      chapters: chapterBase.map((chapter) => ({
        icon: chapter.icon,
        index: chapter.en.index,
        kicker: chapter.en.kicker,
        title: chapter.en.title,
        body: chapter.en.body,
      })),
    },
    cta: {
      badge: "Free to play · No pay-to-win",
      titleLine1: "The horde is coming.",
      titleLine2: "Will your reign endure?",
      description:
        "Download Sword of Rule and take your throne. Join millions of rulers already defending the realm.",
      appStoreLabel: "Download on the App Store",
      googlePlayLabel: "Get it on Google Play",
      statsLabels: [
        "App Store rating",
        "To play",
        "Legendary heroes",
        "Live warfare",
      ],
    },
    footer: {
      description:
        "A cinematic strategy MMO of kingdoms, heroes and the war against the horde. Build. Ally. Rule.",
      disclaimer:
        "© 2026 Sword of Rule. Frontend case study — not affiliated with the game's publisher. All in-game art © its respective owners.",
      builtWith: "Designed & built with Next.js, Tailwind CSS & Framer Motion.",
    },
    trailer: {
      ariaLabel: "Official trailer",
      closeLabel: "Close trailer",
    },
    storeBadge: {
      downloadOn: "Download on the",
      getItOn: "Get it on",
      appStore: "App Store",
      googlePlay: "Google Play",
      appStoreAria: "Download on the App Store",
      googlePlayAria: "Get it on Google Play",
    },
  },
  ar: {
    nav: { links: navLinks.ar },
    hero: {
      badge: "القرن الثالث عشر · حروب التتار",
      titleLine1: "سيف",
      titleLine2: "الحكم",
      description:
        "لعبة إستراتيجية MMO سينمائية تدور أحداثها على أعتاب الغزو التتاري. ابنِ مدينتك، وامرْ بأبطال أسطوريين، ووحّد حلفاءك في إمبراطورية تصمد.",
      playNow: "العب الآن — مجانًا",
      watchTrailer: "شاهد العرض",
      ratingLabel: "مجانًا على App Store",
      scroll: "مرّر",
    },
    overview: {
      eyebrow: "الفصل 01 · اكتشف المملكة",
      title: "الإمبراطورية لا تقوى إلا بحاكم يدافع عنها",
      paragraphs: [
        "العام يلفّه الظلام. من سهوب الشرق يندفع حشد التتار عبر الحدود — أسرع وأكثر جوعًا وأعدادًا من أي جيش واجهته الخلافة من قبل. مدن صمدت قرونًا تسقط في ليلة واحدة.",
        "ترث بلدة محصنة واحدة ومهمة مستحيلة: البقاء. شيّد المزارع والمصانع، درّب الرماة وفرسان الجمال، واستدعِ أمراء الحرب الذين لا تزال أسماؤهم تتردد في صفحات التاريخ. كل حجر تضعه، وكل تحالف تعقده، هو رهان في وجه العاصفة.",
        "هذه ليست لعبة حظ. إنها لعبة حكم — رؤية مسبقة، واقتصاد، وإرادة من حديد.",
      ],
      alt: "عاصمة صحراوية محصنة تراقبها ساحرة متخفية من البلاط",
      statLabel: "تقييم App Store",
    },
    features: {
      eyebrow: "الفصل 02 · أدوات الحكم",
      title: "أربع طرق لقيادة العصر",
      description:
        "بُني كل نظام ليكافئ الحاكم الذي يفكر بثلاث خطوات للأمام — من أول حجر أساس حتى آخر حصار.",
      items: featureBase.map((item) => ({
        icon: item.icon,
        accent: item.accent,
        title: item.ar.title,
        description: item.ar.description,
      })),
    },
    showcase: {
      eyebrow: "الفصل 03 · قابل الأبطال",
      title: "كل شاشة تروي حكاية",
      description:
        "لقطات مباشرة من اللعبة — عاصمة تحت الحصار، وأمراء حرب أقسموا الراية، والحشد لا يفصل بينه وبينك سوى مسيرة واحدة.",
      browseEveryFrame: "تصفح كل لقطة",
      featured: "مميز",
      expandLabel: (label) => `وسّع ${label}`,
      screens: screenBase.map((screen) => ({
        src: screen.src,
        alt: screen.ar.alt,
        label: screen.ar.label,
        caption: screen.ar.caption,
      })),
    },
    characters: {
      eyebrow: "الفصل 04 · اختر بطلك",
      title: "الأبطال الذين يلبّون نداءك",
      description:
        "كل حملة يحسمها أمراء الحرب الواقفون إلى جانبك. جنّدهم، وارتقِ بهم، وأطلق مهارة مميّزة قادرة على قلب موازين الحصار.",
      abilityLabel: "المهارة المميّزة",
      characters: characterBase.map((character) => ({
        icon: character.icon,
        src: character.src,
        accent: character.accent,
        name: character.ar.name,
        role: character.ar.role,
        description: character.ar.description,
        ability: character.ar.ability,
        traits: [...character.ar.traits],
      })),
    },
    experience: {
      eyebrow: "الفصل 05 · عِش المعارك",
      title: "عمق من كل اتجاه",
      description:
        "سبعة أنظمة مترابطة تحوّل بلدة بسيطة إلى إمبراطورية نابضة. أتقنها بأي ترتيب — فهي جميعًا تصب في اتجاه الفتح.",
      roadTitle: "الطريق إلى الإمبراطورية",
      pillars: pillarBase.map((pillar) => ({
        icon: pillar.icon,
        title: pillar.ar.title,
        description: pillar.ar.description,
      })),
      chapters: chapterBase.map((chapter) => ({
        icon: chapter.icon,
        index: chapter.ar.index,
        kicker: chapter.ar.kicker,
        title: chapter.ar.title,
        body: chapter.ar.body,
      })),
    },
    cta: {
      badge: "مجاني اللعب · بلا دفع للفوز",
      titleLine1: "الحشد يقترب.",
      titleLine2: "هل تصمد مملكتك؟",
      description:
        "حمّل Sword of Rule واعتلِ عرشك. انضم إلى ملايين الحكام الذين يدافعون عن المملكة بالفعل.",
      appStoreLabel: "تحميل من App Store",
      googlePlayLabel: "احصل عليه من Google Play",
      statsLabels: [
        "تقييم App Store",
        "للتجربة",
        "أبطال أسطوريون",
        "حروب مباشرة",
      ],
    },
    footer: {
      description:
        "لعبة إستراتيجية MMO سينمائية عن الممالك والأبطال والحرب ضد الحشد. ابنِ. تحالف. احكم.",
      disclaimer:
        "© 2026 Sword of Rule. دراسة واجهة أمامية — غير تابعة لناشر اللعبة. جميع رسوم اللعبة © مالكيها المعنيين.",
      builtWith: "صُمم وبُنِي باستخدام Next.js وTailwind CSS وFramer Motion.",
    },
    trailer: {
      ariaLabel: "العرض الرسمي",
      closeLabel: "إغلاق العرض",
    },
    storeBadge: {
      downloadOn: "تحميل من",
      getItOn: "احصل عليه من",
      appStore: "App Store",
      googlePlay: "Google Play",
      appStoreAria: "تحميل من App Store",
      googlePlayAria: "احصل عليه من Google Play",
    },
  },
};

export function getSiteCopy(language: Language) {
  return SITE_COPY[language];
}
