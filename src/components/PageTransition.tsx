"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Page transition — black panel sweeps in from left, white line runs through,
 * panel exits to the right on next page mount.
 */
export default function PageTransition() {
  const pathname = usePathname();
  const [displayKey, setDisplayKey] = useState<string>(pathname ?? "/");

  useEffect(() => {
    if (pathname && pathname !== displayKey) {
      setDisplayKey(pathname);
    }
  }, [pathname, displayKey]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={displayKey}
        className="pointer-events-none fixed inset-0 z-[9999]"
        initial={{ scaleX: 1, transformOrigin: "left center" }}
        animate={{ scaleX: 0, transformOrigin: "right center" }}
        exit={{ scaleX: 1, transformOrigin: "right center" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="relative h-full w-full bg-ink-950">
          <motion.div
            className="absolute inset-y-0 left-0 w-px bg-white"
            initial={{ x: 0 }}
            animate={{ x: "100vw" }}
            exit={{ x: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
