"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Props {
  labelEn: string;
  ja: string;
  lead: string;
  image?: string;
}

export default function PageHero({ labelEn, ja, lead, image }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const enRef = useRef<HTMLHeadingElement>(null);
  const jaRef = useRef<HTMLDivElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!rootRef.current) return;
    if (reduced) return;

    const enChars = enRef.current?.querySelectorAll<HTMLElement>("[data-c]");
    const jaLines = jaRef.current?.querySelectorAll<HTMLElement>("[data-line]");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      if (enChars && enChars.length) {
        // 3D rotate-in for each character — breaks the ubiquitous yPercent lift pattern
        gsap.set(enChars, {
          rotationX: 92,
          opacity: 0,
          y: "0.35em",
          transformOrigin: "50% 55%",
        });
        tl.to(enChars, {
          rotationX: 0,
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "expo.out",
          stagger: 0.05,
        });
      }
      if (jaLines && jaLines.length) {
        gsap.set(jaLines, { yPercent: 100 });
        tl.to(
          jaLines,
          { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.1 },
          "-=0.5"
        );
      }
      if (leadRef.current) {
        gsap.set(leadRef.current, { opacity: 0, filter: "blur(10px)" });
        tl.to(
          leadRef.current,
          { opacity: 1, filter: "blur(0)", duration: 1.1, ease: "power3.out" },
          "-=0.4"
        );
      }
      if (imageRef.current) {
        gsap.set(imageRef.current, { clipPath: "inset(0 100% 0 0)" });
        tl.to(
          imageRef.current,
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.4,
            ease: "expo.out",
          },
          "-=1.0"
        );
      }
    }, rootRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={rootRef}
      className="relative pt-28 md:pt-36"
    >
      {/* Full-bleed image band on the right */}
      {image && (
        <div
          ref={imageRef}
          className="pointer-events-none absolute right-0 top-24 z-0 hidden h-[calc(100%-8rem)] w-[52%] overflow-hidden md:block"
        >
          <Image
            src={image}
            alt=""
            fill
            unoptimized
            priority
            sizes="52vw"
            className="object-cover"
            style={{ filter: "grayscale(0.7) contrast(1.15) brightness(0.55)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,5,7,0.95) 0%, rgba(5,5,7,0.6) 25%, transparent 60%)",
            }}
          />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="chip mb-6 md:mb-8">/ {labelEn}</div>
        <h1
          ref={enRef}
          className="font-display font-black uppercase leading-[0.9] tracking-[-0.02em] text-white"
          style={{ fontSize: "clamp(3.2rem, 11vw, 12rem)", perspective: "800px" }}
        >
          {Array.from(labelEn).map((c, i) => (
            <span key={i} className="inline-block overflow-hidden align-baseline">
              <span data-c className="inline-block will-change-transform">
                {c === " " ? "\u00A0" : c}
              </span>
            </span>
          ))}
        </h1>
        <div ref={jaRef} className="mt-4 md:mt-6">
          <div className="overflow-hidden">
            <div
              data-line
              className="inline-block whitespace-nowrap text-lg font-bold tracking-[0.14em] text-white md:text-2xl"
            >
              {ja}
            </div>
          </div>
        </div>
        <p
          ref={leadRef}
          className="mt-8 max-w-xl border-t border-white/12 pt-6 text-[13px] leading-[2] text-white/70 md:mt-14"
        >
          {lead}
        </p>

        {/* Mobile image */}
        {image && (
          <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden md:hidden">
            <Image
              src={image}
              alt=""
              fill
              unoptimized
              sizes="100vw"
              className="object-cover"
              style={{ filter: "grayscale(0.3) contrast(1.05) sepia(0.15)" }}
            />
          </div>
        )}

        {/* Bottom spacer */}
        <div className="h-8 md:h-12" />
      </div>
    </section>
  );
}
