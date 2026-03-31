"use client";

import { LocaleProvider } from "@/lib/i18n/locale-context";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Features } from "@/components/sections/features";
import { TornadoSpotlight } from "@/components/sections/tornado-spotlight";
import { Demo } from "@/components/sections/demo";
import { FinalSection } from "@/components/sections/final-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <LocaleProvider>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <TornadoSpotlight />
        <Demo />
        <FinalSection />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
