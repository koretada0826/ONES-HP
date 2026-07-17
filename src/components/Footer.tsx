"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { COMPANY, IMAGES } from "@/lib/data";
import { setCursor } from "@/hooks/useCursorState";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const rulesRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;
    const ctx = gsap.context(() => {
      const rules = rulesRef.current!.querySelectorAll("hr");
      gsap.fromTo(
        rules,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: { trigger: footerRef.current, start: "top 80%", once: true },
        }
      );
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power4.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 80%", once: true },
        }
      );
      const navItems = navRef.current!.querySelectorAll("li");
      gsap.fromTo(
        navItems,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: footerRef.current, start: "top 80%", once: true },
        }
      );
      // Outline text drift
      if (outlineRef.current) {
        gsap.to(outlineRef.current, {
          xPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 0.5,
          },
        });
      }
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative overflow-hidden pt-24">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-6 md:grid-cols-[1.4fr_1fr] md:px-10">
        {/* Left */}
        <div>
          <div ref={logoRef}>
            <div className="mb-6 inline-flex items-center gap-3">
              <Image
                src={IMAGES.logo}
                alt="ONES MANAGEMENT"
                width={180}
                height={56}
                unoptimized
                className="h-12 w-auto invert"
              />
            </div>
            <p className="text-xs leading-[2] text-white/75">
              {COMPANY.name}
              <br />
              {COMPANY.brand}
              <br />
              サービス業の未来を創る。
            </p>
          </div>
        </div>

        {/* Middle nav */}
        <ul ref={navRef} className="grid grid-cols-2 gap-y-3 text-[11px] uppercase tracking-[0.32em] text-white/75">
          {[
            { label: "TOP", href: "/" },
            { label: "COMPANY", href: "/company" },
            { label: "SERVICE", href: "/product" },
            { label: "CASE", href: "/case" },
            { label: "CONTACT", href: "/#contact" },
          ].map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onMouseEnter={() => setCursor("open")}
                onMouseLeave={() => setCursor("default")}
                className="transition-colors hover:text-copper-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

      </div>

      <div ref={rulesRef} className="mx-auto mt-16 max-w-[1600px] space-y-4 px-6 md:px-10">
        <hr className="h-px origin-left border-0 bg-white/15" style={{ transform: "scaleX(0)" }} />
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-white/50">
          <span>Copyright © {COMPANY.nameEn} All rights reserved.</span>
          <span>ONES MANAGEMENT</span>
        </div>
        <hr className="h-px origin-left border-0 bg-white/15" style={{ transform: "scaleX(0)" }} />
      </div>

      {/* Giant outline text at bottom */}
      <div ref={outlineRef} className="mt-16 overflow-hidden">
        <div
          className="whitespace-nowrap font-display font-black uppercase leading-none tracking-[-0.02em]"
          style={{
            fontSize: "clamp(4rem, 18vw, 22rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.14)",
            color: "transparent",
          }}
        >
          ONE&apos;S&nbsp;M.G&nbsp;&nbsp;ONE&apos;S&nbsp;M.G
        </div>
      </div>
    </footer>
  );
}
