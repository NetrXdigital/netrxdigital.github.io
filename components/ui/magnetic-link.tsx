"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

// Polymorphic props helper
type AsProp<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
};

// Omit conflicting props when we inject our own
type PropsOf<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;

// Final polymorphic type: default to 'a'
type MagneticProps<T extends React.ElementType = "a"> =
  AsProp<T> &
  Omit<PropsOf<T>, keyof AsProp<T> | "style" | "onMouseMove" | "onMouseLeave">;

export function MagneticLink<T extends React.ElementType = "a">({
  as,
  className = "",
  children,
  ...rest
}: MagneticProps<T>) {
  const Comp = (as || "a") as React.ElementType;

  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const tx = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const ty = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * 0.15);
    y.set(dy * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  // Special-case Next.js <Link>: render it directly; it forwards props to <a>
  const isNextLink = Comp === Link;

  return (
    <motion.span style={{ x: tx, y: ty, display: "inline-block" }}>
      {isNextLink ? (
        <Link
          ref={ref as any}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          className={
            "relative inline-flex items-center justify-center rounded-full border border-border bg-card/70 backdrop-blur transition hover:bg-card " +
            className
          }
          {...(rest as any)}
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <span className="relative z-10">{children}</span>
        </Link>
      ) : (
        <Comp
          ref={ref as any}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          className={
            "relative inline-flex items-center justify-center rounded-full border border-border bg-card/70 backdrop-blur transition hover:bg-card " +
            className
          }
          {...(rest as any)}
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <span className="relative z-10">{children}</span>
        </Comp>
      )}
    </motion.span>
  );
}
