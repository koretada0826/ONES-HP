"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TRACK_RECORD } from "@/lib/data";
import { setCursor } from "@/hooks/useCursorState";

export default function TrackRecordSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardW = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 320;
      const gap = 24;
      const idx = Math.min(
        TRACK_RECORD.length - 1,
        Math.max(0, Math.round(el.scrollLeft / (cardW + gap)))
      );
      setActiveIdx(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let startX = 0;
    let startScroll = 0;

    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      setDragging(true);
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!el.hasPointerCapture(e.pointerId)) return;
      el.scrollLeft = startScroll - (e.clientX - startX);
    };
    const up = (e: PointerEvent) => {
      setDragging(false);
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {}
    };
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
    };
  }, []);

  return (
    <section id="track-record" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-[380px_1fr] md:items-start md:gap-20">
          {/* Left: sticky text panel */}
          <div className="md:sticky md:top-24 md:h-fit">
            <div className="chip mb-4">OUR WORKS</div>
            <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-black leading-[1.1] text-ink-950">
              つくるのは、<br />成果。
            </h2>
            <div className="mt-6 h-px w-16 bg-[#c4897a]" />
            <p className="mt-8 max-w-md text-[13px] leading-[2] text-ink-950/60">
              多様な業界のプロジェクトで培った経験とアイデアで、
              成果にこだわったサポートを提供します。
              国内各エリアにとどまらず、アジア圏をはじめとした海外での支援実績も有しています。
            </p>

            <a
              href="/case"
              onMouseEnter={() => setCursor("view", "VIEW")}
              onMouseLeave={() => setCursor("default")}
              className="group mt-10 inline-flex items-center gap-3 border-b border-white/50 pb-1 font-display text-[11px] font-semibold uppercase tracking-[0.32em] text-ink-950 transition hover:border-[#c4897a] hover:text-[#c4897a]"
            >
              VIEW ALL WORKS
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Right: horizontal draggable portrait carousel */}
          <div className="relative -mr-6 md:-mr-10">
            <div
              ref={scrollerRef}
              className={`no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 pr-6 md:pr-10 ${
                dragging ? "cursor-grabbing select-none" : "cursor-grab"
              }`}
              style={{ scrollBehavior: dragging ? "auto" : "smooth" }}
            >
              {TRACK_RECORD.map((c, i) => (
                <div
                  key={c.id}
                  data-card
                  onMouseEnter={() => setCursor("view", "VIEW")}
                  onMouseLeave={() => setCursor("default")}
                  className="group relative aspect-[9/14] w-[74vw] max-w-[280px] flex-none snap-start overflow-hidden border border-black/8 sm:w-[45vw] md:w-[260px] lg:w-[300px]"
                >
                  {/* Image full-bleed */}
                  <Image
                    src={c.image}
                    alt={c.label}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 74vw, 300px"
                    className="pointer-events-none object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ filter: "grayscale(0.4) brightness(0.7) contrast(1.1)" }}
                  />
                  {/* Gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/85" />

                  {/* Top: index + label */}
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.32em] text-ink-950/80">
                      ONE&apos;S / {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-display font-black leading-none text-ink-950/80"
                      style={{ fontSize: "2.2rem", letterSpacing: "-0.02em" }}
                    >
                      {c.kanji}
                    </span>
                  </div>

                  {/* Bottom: label + items */}
                  <div className="absolute inset-x-5 bottom-5 z-10">
                    <div className="mb-2 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-ink-950">
                      {c.label}
                    </div>
                    <ul className="flex flex-col gap-1">
                      {c.items.slice(0, 4).map((item) => (
                        <li
                          key={item}
                          className="relative pl-3 text-[11px] leading-[1.65] text-ink-950/70"
                        >
                          <span className="absolute left-0 top-2 h-px w-1.5 bg-[#c4897a]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Copper reveal underline */}
                  <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-[#c4897a] transition-all duration-700 group-hover:w-full" />
                </div>
              ))}
            </div>

            {/* Progress line + counter */}
            <div className="mt-2 flex items-center gap-6 pr-6 md:pr-10">
              <div className="h-px flex-1 bg-ink-950/12">
                <div
                  className="h-full bg-[#c4897a] transition-all duration-500"
                  style={{
                    width: `${
                      ((activeIdx + 1) / TRACK_RECORD.length) * 100
                    }%`,
                  }}
                />
              </div>
              <span className="font-display text-[10px] uppercase tracking-[0.42em] text-ink-950/60">
                {String(activeIdx + 1).padStart(2, "0")} /{" "}
                {String(TRACK_RECORD.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
