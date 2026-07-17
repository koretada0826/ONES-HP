"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import AmbientBackground from "./AmbientBackground";
import PageTransition from "./PageTransition";
import SmoothScrollProvider from "./SmoothScrollProvider";

export default function SubPageChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <AmbientBackground />
      <PageTransition />
      <CustomCursor />
      <SmoothScrollProvider>
        <Header visible />
        <main>{children}</main>
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
