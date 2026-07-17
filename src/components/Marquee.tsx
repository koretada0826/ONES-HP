"use client";

import { useId } from "react";

interface Props {
  items: string[];
  reverse?: boolean;
  duration?: number;
  size?: "sm" | "md" | "lg" | "xl";
  outline?: boolean;
  color?: string;
  separator?: string;
}

const SIZE: Record<NonNullable<Props["size"]>, string> = {
  sm: "text-[clamp(1.6rem,4vw,3rem)]",
  md: "text-[clamp(2.4rem,5.5vw,4.5rem)]",
  lg: "text-[clamp(3rem,7.5vw,7rem)]",
  xl: "text-[clamp(3.6rem,10vw,9rem)]",
};

export default function Marquee({
  items,
  reverse,
  duration = 90,
  size = "lg",
  outline = false,
  color = "#0a0a0e",
  separator = "◆",
}: Props) {
  const REPEAT = 6;
  const repeated = Array.from({ length: REPEAT }, () => items).flat();
  // Stable across SSR + client so hydration matches. Replace colons that are
  // illegal in CSS identifiers.
  const rawId = useId();
  const uid = rawId.replace(/:/g, "");

  return (
    <div className="marquee-track relative w-full overflow-hidden py-2.5 md:py-4">
      <div
        className={`marquee-inner marquee-${uid} flex items-center gap-10 whitespace-nowrap ${SIZE[size]}`}
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          animationDirection: reverse ? "reverse" : "normal",
          animationDuration: `${duration}s`,
        }}
      >
        {repeated.map((it, i) => {
          const useCopper = i % 2 === 1;
          const strokeColor = useCopper ? "#96594a" : color;
          const solidColor = useCopper ? "#b06f5f" : color;
          return (
            <span key={i} className="inline-flex items-center gap-10 leading-none">
              <span
                style={
                  outline
                    ? {
                        WebkitTextStroke: `1px ${strokeColor}`,
                        color: "transparent",
                      }
                    : { color: solidColor }
                }
              >
                {it}
              </span>
              <span style={{ color: "#c4897a", opacity: 0.7, fontSize: "0.55em" }}>
                {separator}
              </span>
            </span>
          );
        })}
      </div>
      <style>{`
        .marquee-${uid} {
          animation-name: marqueeSlide-${uid};
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        @keyframes marqueeSlide-${uid} {
          from { transform: translateX(0); }
          to   { transform: translateX(-${100 / REPEAT}%); }
        }
      `}</style>
    </div>
  );
}
