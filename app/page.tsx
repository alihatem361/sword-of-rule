"use client";

import { useState, useCallback } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { Features } from "@/components/sections/Features";
import { Showcase } from "@/components/sections/Showcase";
import { Experience } from "@/components/sections/Experience";
import { CTA } from "@/components/sections/CTA";
import { TrailerModal } from "@/components/sections/TrailerModal";

export default function Home() {
  const [trailerOpen, setTrailerOpen] = useState(false);
  const openTrailer = useCallback(() => setTrailerOpen(true), []);
  const closeTrailer = useCallback(() => setTrailerOpen(false), []);

  return (
    <>
      <Navbar onWatchTrailer={openTrailer} />
      <main id="content">
        <Hero onWatchTrailer={openTrailer} />
        <Overview />
        <Features />
        <Showcase />
        <Experience />
        <CTA />
      </main>
      <Footer />
      <TrailerModal open={trailerOpen} onClose={closeTrailer} />
    </>
  );
}
