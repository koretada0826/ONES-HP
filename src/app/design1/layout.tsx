import { ReactNode } from "react";

export default function Design1Layout({ children }: { children: ReactNode }) {
  return (
    <div className="design1-root bg-white text-ink-950">
      <style>{`
        .design1-root {
          font-family: var(--font-jp), var(--font-display), sans-serif;
          cursor: auto;
        }
        .design1-root a, .design1-root button { cursor: pointer; }
      `}</style>
      {children}
    </div>
  );
}
