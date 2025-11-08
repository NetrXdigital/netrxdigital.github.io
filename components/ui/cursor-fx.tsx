"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

/**
 * Unified global cursor glow.
 * Defaults are baked in so every page looks identical WITHOUT importing constants.
 */
export default function CursorFX({
  size = 100,                      // unified size
  falloffPercent = 90,             // 60% radius fade
  tint = "rgba(42, 45, 203, 0.93)",// indigo-ish tint @ 18%
  zIndex = 90,
}: {
  size?: number;
  falloffPercent?: number; // 0-100
  tint?: string;
  zIndex?: number;
}) {
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);

  const tx = useSpring(x, { stiffness: 220, damping: 22, mass: 0.5 });
  const ty = useSpring(y, { stiffness: 220, damping: 22, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  // Soft blob (fixed-size circle)
  const blob = {
    width: size,
    height: size,
    borderRadius: size / 2,
    background: `radial-gradient(circle at center, ${tint}, rgba(99,102,241,0) ${falloffPercent}%)`,
  };

  // Wide spotlight wash over the page (subtle)
  const spotlight = useMotionTemplate`radial-gradient(${size * 2}px ${size * 2}px at ${tx}px ${ty}px, ${tint}, rgba(59,130,246,0.06) 40%, transparent 60%)`;

  return (
    <>
      {/* Spotlight wash layer */}
      <motion.div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: spotlight,
          zIndex: zIndex - 1,
          mixBlendMode: "soft-light",
        }}
      />
      {/* Blob that tracks pointer */}
      <motion.div
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          translateX: tx,
          translateY: ty,
          filter: "blur(8px)",
          pointerEvents: "none",
          zIndex,
          mixBlendMode: "plus-lighter",
          ...blob,
        }}
      />
    </>
  );
}
