"use client";

import { useEffect, useRef, DependencyList, RefObject } from "react";
import { gsap } from "gsap";

/**
 * Scoped GSAP context so animations are cleaned up on unmount.
 * The setup callback receives the context itself (as passed by GSAP).
 * Usage:
 *   useGsapContext(scopeRef, (ctx) => { ... }, [deps])
 */
export function useGsapContext(
  scope: RefObject<HTMLElement | null>,
  setup: (self: gsap.Context) => void | (() => void),
  deps: DependencyList = []
) {
  const cleanupRef = useRef<null | (() => void)>(null);

  useEffect(() => {
    if (!scope.current) return;
    const ctx = gsap.context((self: gsap.Context) => {
      const maybe = setup(self);
      if (typeof maybe === "function") cleanupRef.current = maybe;
    }, scope.current);
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
