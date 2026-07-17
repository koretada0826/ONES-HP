"use client";

import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
}

/**
 * Reveal an image (or any node) with a diagonal clip-path + skewY unwind.
 * Different from the ubiquitous fade-up pattern — feels editorial.
 */
export default function SkewImageReveal({
  children,
  className = "",
  direction = "left",
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current || !innerRef.current) return;

    const clipFrom =
      direction === "left"
        ? "polygon(0 0, 100% 0, 100% 0, 0 0)"
        : "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
    const clipTo = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";

    gsap.set(rootRef.current, { clipPath: clipFrom });
    gsap.set(innerRef.current, {
      skewY: direction === "left" ? 4 : -4,
      scale: 1.12,
    });

    const st = ScrollTrigger.create({
      trigger: rootRef.current,
      start: "top 82%",
      once: true,
      onEnter: () => {
        gsap.to(rootRef.current, {
          clipPath: clipTo,
          duration: 1.4,
          ease: "expo.out",
        });
        gsap.to(innerRef.current, {
          skewY: 0,
          scale: 1,
          duration: 1.6,
          ease: "expo.out",
        });
      },
    });
    return () => {
      st.kill();
    };
  }, [direction]);

  return (
    <div ref={rootRef} className={`relative overflow-hidden ${className}`}>
      <div ref={innerRef} className="relative h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
