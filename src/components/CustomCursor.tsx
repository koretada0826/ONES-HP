"use client";

import { useEffect, useRef, useState } from "react";
import { subscribeCursor, CursorVariant } from "@/hooks/useCursorState";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [label, setLabel] = useState<string | undefined>();
  const reduced = useReducedMotion();
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    return subscribeCursor((v, l) => {
      setVariant(v);
      setLabel(l);
    });
  }, []);

  useEffect(() => {
    if (isTouch || reduced) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let dx = mx;
    let dy = my;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const tick = () => {
      dx += (mx - dx) * 0.6;
      dy += (my - dy) * 0.6;
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%,-50%)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, [isTouch, reduced]);

  if (isTouch || reduced) return null;

  const isBig = variant !== "default" && variant !== "hide";
  const showLabel = variant === "view" || variant === "open" || variant === "project";
  const displayLabel =
    label ??
    (variant === "view"
      ? "VIEW"
      : variant === "open"
      ? "OPEN"
      : variant === "project"
      ? "VIEW\nPROJECT"
      : "");

  return (
    <>
      {/* Center dot — solid dark, always visible on light bg */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9998] rounded-full transition-opacity duration-200 ${
          variant === "hide" ? "opacity-0" : "opacity-100"
        }`}
        style={{
          width: isBig ? 0 : 8,
          height: isBig ? 0 : 8,
          background: "#0a0a0e",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.6)",
        }}
      />
      {/* Ring / label container */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9997] flex items-center justify-center rounded-full transition-[width,height,background-color,border-color] duration-300 ease-out ${
          variant === "hide" ? "opacity-0" : "opacity-100"
        }`}
        style={{
          width: isBig ? 116 : 38,
          height: isBig ? 116 : 38,
          border: isBig
            ? "1px solid rgba(10,10,14,0.9)"
            : "1px solid rgba(10,10,14,0.55)",
          background: isBig ? "rgba(10,10,14,0.92)" : "transparent",
          backdropFilter: isBig ? "blur(10px)" : undefined,
          fontFamily: "var(--font-display)",
        }}
      >
        {showLabel && (
          <span className="whitespace-pre text-center text-[10px] uppercase tracking-[0.28em] text-white">
            {displayLabel}
          </span>
        )}
      </div>
    </>
  );
}
