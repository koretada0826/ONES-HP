"use client";

import { useEffect, useRef, ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface Props {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

/**
 * Character-by-character rotateX + fade reveal.
 * Nicely varies from the ubiquitous mask-reveal pattern.
 */
export default function RotateHeadline({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  stagger = 0.03,
  once = true,
}: Props) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const chars = rootRef.current.querySelectorAll<HTMLElement>("[data-char]");
    if (!chars.length) return;
    gsap.set(chars, {
      rotationX: 90,
      opacity: 0,
      y: "0.3em",
      transformOrigin: "center 60%",
    });
    const st = ScrollTrigger.create({
      trigger: rootRef.current,
      start: "top 82%",
      once,
      onEnter: () => {
        gsap.to(chars, {
          rotationX: 0,
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger,
          delay,
        });
      },
    });
    return () => {
      st.kill();
    };
  }, [delay, stagger, once, text]);

  return (
    <Tag
      ref={rootRef as never}
      className={className}
      style={{ perspective: 800 }}
    >
      {Array.from(text).map((c, i) => (
        <span
          key={i}
          data-char
          className="inline-block will-change-transform"
        >
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </Tag>
  );
}
