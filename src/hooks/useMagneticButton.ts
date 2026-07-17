"use client";

import { useRef } from "react";

// No-op: retained so existing components that referenced this hook still type-check
// while the simplified light-theme redesign avoids the magnetic effect.
export function useMagneticButton<T extends HTMLElement>(
  _radius?: number,
  _strength?: number
) {
  return useRef<T>(null);
}
