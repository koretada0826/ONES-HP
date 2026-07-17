"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import AmbientBackground from "@/components/AmbientBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import ServiceSection from "@/components/ServiceSection";
import TrackRecordSection from "@/components/TrackRecordSection";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

// Load LoadingScreen client-only (uses window)
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onDone={() => setLoaded(true)} />
      <AmbientBackground />
      <PageTransition />
      <CustomCursor />
      <SmoothScrollProvider>
        <Header visible={loaded} />
        <main>
          <HeroSection visible={loaded} />
          <Marquee
            items={["CREATING THE FUTURE", "SERVICE INDUSTRY", "ONES MANAGEMENT"]}
            size="xl"
            outline
          />
          <ServiceSection />
          <Marquee
            items={["BEAUTY", "FITNESS", "HOSPITALITY", "WELFARE"]}
            size="lg"
            reverse
            duration={95}
          />
          <TrackRecordSection />
          <Marquee
            items={["ABOUT US", "SINCE 2023", "GLOBAL VIEW", "ON-SITE"]}
            size="lg"
            duration={90}
            outline
          />
          <AboutSection />
          <NewsSection />
          <ContactCTA />
        </main>
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
