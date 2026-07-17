"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import { setCursor } from "@/hooks/useCursorState";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { IMAGES } from "@/lib/data";

const NAV = [
  { label: "HOME", href: "/" },
  { label: "COMPANY", href: "/company" },
  { label: "SERVICE", href: "/product" },
  { label: "CASE", href: "/case" },
  { label: "CONTACT", href: "/#contact" },
];

export default function Header({ visible }: { visible: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ctaRef = useMagneticButton<HTMLAnchorElement>(120, 0.35);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const ctaSvgRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const tl = gsap.timeline({ delay: 0.15 });
    tl.fromTo(
      logoRef.current,
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.0, ease: "power3.out" }
    ).fromTo(
      navRefs.current.filter(Boolean),
      { yPercent: 130, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.05,
        ease: "power4.out",
      },
      "-=0.7"
    );
    if (ctaSvgRef.current) {
      const el = ctaSvgRef.current;
      const length = 2 * (el.getBBox().width + el.getBBox().height);
      gsap.fromTo(
        el,
        { strokeDasharray: length, strokeDashoffset: length },
        {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "expo.out",
          delay: 0.55,
        }
      );
    }
  }, [visible]);

  // Lock scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled || menuOpen
            ? "backdrop-blur-md bg-white/85 border-b border-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[64px] max-w-[1600px] items-center justify-between px-5 md:h-[72px] md:px-10">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center gap-2">
            <a
              href="#home"
              onMouseEnter={() => setCursor("view")}
              onMouseLeave={() => setCursor("default")}
              className="flex items-center gap-3 font-display"
            >
              <Image
                src={IMAGES.logo}
                alt="ONES MANAGEMENT"
                width={140}
                height={44}
                priority
                unoptimized
                className="h-8 w-auto brightness-0 md:h-11"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {NAV.map((n, i) => (
              <a
                key={n.label}
                href={n.href}
                target={n.href.startsWith("http") ? "_blank" : undefined}
                rel={n.href.startsWith("http") ? "noopener" : undefined}
                onMouseEnter={() => setCursor("open")}
                onMouseLeave={() => setCursor("default")}
                className="group relative overflow-hidden text-[11px] font-medium uppercase tracking-[0.32em] text-ink-950/80"
              >
                <span
                  ref={(el) => {
                    navRefs.current[i] = el;
                  }}
                  className="inline-block"
                >
                  {n.label}
                </span>
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ink-950 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Right cluster: CTA (md+) + Hamburger (< lg) */}
          <div className="flex items-center gap-3">
            {/* CTA button — visible on md+ */}
            <motion.a
              ref={ctaRef}
              href="#contact"
              onMouseEnter={() => setCursor("open")}
              onMouseLeave={() => setCursor("default")}
              className="group relative hidden h-11 items-center gap-3 overflow-hidden rounded-full px-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-white md:inline-flex"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 200 44"
                preserveAspectRatio="none"
              >
                <rect
                  ref={ctaSvgRef}
                  x="0.5"
                  y="0.5"
                  width="199"
                  height="43"
                  rx="22"
                  ry="22"
                  fill="none"
                  stroke="rgba(10,10,14,0.55)"
                  strokeWidth="1"
                />
              </svg>
              <span className="relative z-10 flex items-center gap-2">
                <span
                  className="pointer-events-none absolute inset-0 -z-10 scale-0 rounded-full bg-ink-950 transition-transform duration-500 ease-out group-hover:scale-[3]"
                  style={{ transformOrigin: "center" }}
                />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  CONTACT
                </span>
                <span className="relative z-10 inline-flex h-4 w-4 items-center justify-center overflow-hidden transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <svg viewBox="0 0 12 12" className="h-3 w-3">
                    <path
                      d="M2 10 L10 2 M10 2 H4 M10 2 V8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>
            </motion.a>

            {/* Hamburger — visible until lg */}
            <button
              aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              onMouseEnter={() => setCursor("open")}
              onMouseLeave={() => setCursor("default")}
              className="relative flex h-10 w-10 shrink-0 items-center justify-center lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span
                className={`absolute block h-[1.5px] w-6 bg-ink-950 transition-transform duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-[6px]"
                }`}
              />
              <span
                className={`absolute block h-[1.5px] w-6 bg-ink-950 transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block h-[1.5px] w-6 bg-ink-950 transition-transform duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-[6px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[95] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              exit={{ clipPath: "inset(100% 0 0 0)" }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            />
            <div className="relative flex h-full flex-col justify-between px-6 pt-24 pb-10">
              <ul className="flex flex-col gap-2">
                {NAV.map((n, i) => (
                  <motion.li
                    key={n.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      delay: 0.25 + i * 0.06,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden border-b border-black/10"
                  >
                    <a
                      href={n.href}
                      target={n.href.startsWith("http") ? "_blank" : undefined}
                      rel={n.href.startsWith("http") ? "noopener" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-baseline justify-between py-6"
                    >
                      <span className="font-display text-3xl font-black tracking-tight text-white">
                        {n.label}
                      </span>
                      <span className="text-xs uppercase tracking-[0.32em] text-ink-950/50">
                        0{i + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.32em] text-ink-950/55"
              >
                <span>ONES MANAGEMENT</span>
                <span>サービス業の未来を創る。</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
