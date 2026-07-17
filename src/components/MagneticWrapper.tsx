"use client";

import { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
}

export default function MagneticWrapper({
  children,
  className,
  strength = 0.28,
  radius = 100,
}: Props) {
  const ref = useMagnetic<HTMLDivElement>({ strength, radius });
  return (
    <div ref={ref} className={`inline-block will-change-transform ${className ?? ""}`}>
      {children}
    </div>
  );
}
