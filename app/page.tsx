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
  return (
    <>
      <Navbar />
      <main id="content">
        <Hero />
        <Overview />
        <Features />
        <Showcase />
        <Experience />
        <CTA />
      </main>
      <Footer />
      <TrailerModal />
    </>
  );
}
