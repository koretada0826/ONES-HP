"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Site-wide ambient background layer.
 * - 3 large blurred gradient orbs slowly drifting (CSS)
 * - Floating tiny particles (canvas 2D)
 * Fixed to the viewport; sits behind section content.
 */
export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0,
      h = 0;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Particles
    const COUNT = window.innerWidth < 640 ? 10 : window.innerWidth < 900 ? 16 : 26;
    interface P {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
      seed: number;
    }
    const parts: P[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: 0.8 + Math.random() * 2.2,
      alpha: 0.05 + Math.random() * 0.25,
      seed: Math.random() * 1000,
    }));

    let raf = 0;
    let running = true;
    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      const time = performance.now() * 0.001;
      for (const p of parts) {
        p.x += p.vx + Math.sin(time * 0.4 + p.seed) * 0.05;
        p.y += p.vy + Math.cos(time * 0.5 + p.seed) * 0.05;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // subtle twinkle
        const pulse = 0.65 + Math.sin(time * 1.4 + p.seed) * 0.35;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        const warm = p.seed % 3 < 1;
        ctx.fillStyle = warm
          ? `rgba(209,160,141,${(p.alpha * pulse * 1.4).toFixed(3)})`
          : `rgba(238,238,241,${(p.alpha * pulse * 1.1).toFixed(3)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    // Pause off-screen
    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("resize", resize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduced]);

  return (
    <>
      {/* Big drifting gradient orbs */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <style>{`
          .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            will-change: transform;
          }
          .orb-1 {
            width: 620px; height: 620px;
            left: -12%; top: 10%;
            background: radial-gradient(circle, rgba(196,137,122,0.20), transparent 65%);
            animation: orbDrift1 26s ease-in-out infinite;
          }
          .orb-2 {
            width: 720px; height: 720px;
            right: -14%; top: 42%;
            background: radial-gradient(circle, rgba(120,140,180,0.12), transparent 65%);
            animation: orbDrift2 33s ease-in-out infinite;
          }
          .orb-3 {
            width: 540px; height: 540px;
            left: 30%; top: 75%;
            background: radial-gradient(circle, rgba(209,160,141,0.14), transparent 65%);
            animation: orbDrift3 40s ease-in-out infinite;
          }
          @keyframes orbDrift1 {
            0%,100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(60px,80px) scale(1.08); }
          }
          @keyframes orbDrift2 {
            0%,100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(-80px,60px) scale(1.12); }
          }
          @keyframes orbDrift3 {
            0%,100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(70px,-50px) scale(0.95); }
          }
        `}</style>
      </div>

      {/* Floating particles canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0 opacity-90"
        aria-hidden
      />
    </>
  );
}
