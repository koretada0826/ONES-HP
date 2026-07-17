"use client";

export type CursorVariant = "default" | "view" | "open" | "project" | "hide";

type Listener = (variant: CursorVariant, label?: string) => void;

const listeners = new Set<Listener>();
let current: { variant: CursorVariant; label?: string } = { variant: "default" };

export function setCursor(variant: CursorVariant, label?: string) {
  current = { variant, label };
  listeners.forEach((l) => l(variant, label));
}

export function subscribeCursor(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useCursorState() {
  return current;
}
