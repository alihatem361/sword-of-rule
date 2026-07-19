import type { Metadata, Viewport } from "next";
import { Cinzel, Inter, Amiri } from "next/font/google";
import { GAME } from "@/lib/content";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const DESCRIPTION =
  "Sword of Rule — a cinematic strategy MMO set on the eve of the Tatar invasion. Build your kingdom, command legendary heroes and lead your alliance to victory.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sword-of-rule.example"),
  title: {
    default: "Sword of Rule — Forge an Empire. Outlast the Horde.",
    template: "%s · Sword of Rule",
  },
  description: DESCRIPTION,
  keywords: [
    "Sword of Rule",
    "سيف الحكم",
    "strategy game",
    "mobile MMO",
    "kingdom building",
    "alliance warfare",
  ],
  authors: [{ name: "Frontend Case Study" }],
  openGraph: {
    title: "Sword of Rule — Forge an Empire. Outlast the Horde.",
    description: DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: "Sword of Rule",
    images: [{ url: "/screens/hero-leader.webp", width: 600, height: 1300, alt: GAME.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sword of Rule",
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0611",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} ${amiri.variable}`}
    >
      <body className="antialiased">
        <a
          href="#overview"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-plum-950"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
