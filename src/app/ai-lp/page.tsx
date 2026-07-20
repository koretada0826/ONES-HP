"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import AmbientBackground from "@/components/AmbientBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AiProblem from "@/components/lp/AiProblem";
import AiServices from "@/components/lp/AiServices";
import AiFlow from "@/components/lp/AiFlow";
import AiFaq from "@/components/lp/AiFaq";
import AiContact from "@/components/lp/AiContact";
import Footer from "@/components/Footer";

const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});

export default function AiLandingPage() {
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
          <AiProblem />
          <AiServices />
          <AiFlow />
          <AiFaq />
          <AiContact />
        </main>
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
