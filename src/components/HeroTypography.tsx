"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Props {
  visible: boolean;
  scrollProgress: number;
}

export default function HeroTypography({ visible, scrollProgress }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const jaRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!visible) return;
    const lines = [line1Ref.current, line2Ref.current, line3Ref.current].filter(Boolean);
    const dot = dotRef.current;

    gsap.set(lines, { yPercent: 130, scaleY: 1.35, transformOrigin: "50% 100%" });
    if (dot) gsap.set(dot, { opacity: 0, textShadow: "0 0 0px rgba(0,0,0,0)" });
    if (jaRef.current) gsap.set(jaRef.current.children, { yPercent: 100, opacity: 0 });
    if (descRef.current) gsap.set(descRef.current, { opacity: 0, filter: "blur(10px)" });

    if (reduced) {
      gsap.set(lines, { yPercent: 0, scaleY: 1 });
      if (dot) gsap.set(dot, { opacity: 1 });
      if (jaRef.current) gsap.set(jaRef.current.children, { yPercent: 0, opacity: 1 });
      if (descRef.current) gsap.set(descRef.current, { opacity: 1, filter: "blur(0)" });
      return;
    }

    const tl = gsap.timeline({ delay: 0.35 });
    tl.to(lines, {
      yPercent: 0,
      scaleY: 1,
      duration: 1.15,
      ease: "expo.out",
      stagger: 0.14,
    });
    tl.to(
      lines,
      { scaleY: 0.98, duration: 0.12, ease: "power2.out", stagger: 0.04 },
      "-=0.5"
    ).to(lines, { scaleY: 1, duration: 0.24, ease: "power2.out", stagger: 0.04 });

    if (dot) {
      tl.to(dot, { opacity: 1, duration: 0.2, ease: "power3.out" }, "+=0.05");
      tl.to(dot, { textShadow: "0 0 24px rgba(196,137,122,0.9)", duration: 0.15 });
      tl.to(dot, { textShadow: "0 0 0px rgba(196,137,122,0)", duration: 0.6, ease: "power3.out" });
    }

    if (jaRef.current) {
      tl.to(
        jaRef.current.children,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.08,
        },
        "-=0.4"
      );
    }
    if (descRef.current) {
      tl.to(descRef.current, { opacity: 1, filter: "blur(0px)", duration: 1.1, ease: "power3.out" }, "-=0.5");
    }

    return () => {
      tl.kill();
    };
  }, [visible, reduced]);

  useEffect(() => {
    const p = scrollProgress;
    if (line1Ref.current) {
      line1Ref.current.style.transform = `translate3d(${-p * 40}px, ${-p * 60}px, 0)`;
    }
    if (line2Ref.current) {
      line2Ref.current.style.transform = `translate3d(${p * 30}px, ${-p * 80}px, 0)`;
    }
    if (line3Ref.current) {
      line3Ref.current.style.transform = `translate3d(${-p * 20}px, ${-p * 100}px, 0)`;
    }
    if (rootRef.current) {
      rootRef.current.style.opacity = String(Math.max(0, 1 - p * 1.4));
    }
  }, [scrollProgress]);

  return (
    <div ref={rootRef} className="relative z-10 max-w-[720px]">
      <div className="chip mb-6 md:mb-8">多種多様なサービス事業者様へ</div>

      <h1 className="font-display font-black uppercase leading-[0.92] tracking-[-0.01em] text-white">
        <span className="block overflow-hidden pb-2">
          <span
            ref={line1Ref}
            className="inline-block will-change-transform text-[clamp(2.6rem,9vw,9rem)]"
          >
            CREATING
          </span>
        </span>
        <span className="block overflow-hidden pb-2">
          <span
            ref={line2Ref}
            className="inline-block will-change-transform text-[clamp(2.6rem,9vw,9rem)]"
          >
            THE
          </span>
        </span>
        <span className="block overflow-hidden pb-2">
          <span
            ref={line3Ref}
            className="inline-block will-change-transform text-[clamp(2.6rem,9vw,9rem)]"
          >
            FUTURE
            <span ref={dotRef} className="text-[#c4897a]">
              .
            </span>
          </span>
        </span>
      </h1>

      <p className="mt-5 font-display text-xs uppercase tracking-[0.28em] text-white/55">
        of the SERVICE INDUSTRY
      </p>

      <div ref={jaRef} className="mt-6 overflow-visible md:mt-8">
        <div className="overflow-hidden">
          <div className="text-base font-semibold tracking-[0.12em] text-white md:text-2xl">
            サービス業の未来を創る。
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="text-base font-semibold tracking-[0.12em] text-white md:text-2xl">
            人が生み出す価値の最大化。
          </div>
        </div>
      </div>

      <div
        ref={descRef}
        className="mt-6 max-w-[520px] border-t border-white/15 pt-5 text-[12px] leading-[1.95] text-white/65 md:mt-8 md:pt-6 md:text-[13px] md:leading-[2]"
      >
        <p>
          多種多様なサービス事業者様の成長を、現場に寄り添いながら全力で支援します。
          <br className="hidden md:inline" />
          地域を超えたグローバル展開で、サービス業の未来を創ります。
        </p>
      </div>
    </div>
  );
}
