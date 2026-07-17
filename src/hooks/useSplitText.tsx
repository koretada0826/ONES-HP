"use client";

import React, { useMemo } from "react";

interface Options {
  by?: "char" | "word" | "line";
}

/**
 * Splits text into spans for GSAP staggered animation.
 * `by="line"` requires the caller to wrap each line in {" "}<br/>.
 */
export function useSplitText(text: string, { by = "char" }: Options = {}) {
  return useMemo(() => {
    if (by === "word") {
      return text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span className="inline-block will-change-transform" data-split="word">
            {w}
            {i < text.split(" ").length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ));
    }
    // char
    return Array.from(text).map((c, i) => (
      <span
        key={i}
        className="inline-block overflow-hidden align-baseline"
        aria-hidden="true"
      >
        <span className="inline-block will-change-transform" data-split="char">
          {c === " " ? "\u00A0" : c}
        </span>
      </span>
    ));
  }, [text, by]);
}
