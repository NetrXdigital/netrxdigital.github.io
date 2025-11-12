"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  glare?: boolean;
  as?: keyof JSX.IntrinsicElements;
};

export function TiltCard({ children, className, glare = true, as = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 180, damping: 20 });
  const sy = useSpring(ry, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(sy, [-50, 50], [10, -10]);
  const rotateY = useTransform(sx, [-50, 50], [-10, 10]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const cx = px - rect.width / 2;
    const cy = py - rect.height / 2;
    rx.set(cx);
    ry.set(cy);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const Comp = motion[as as "div"];

  return (
    <Comp
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "relative rounded-2xl transition-shadow will-change-transform",
        className
      )}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background:
              "radial-gradient(600px 200px at 50% -20%, rgba(255,255,255,0.25), transparent 50%)",
            transform: "translateZ(40px)",
          }}
        />
      )}
      <div style={{ transform: "translateZ(10px)" }}>{children}</div>
    </Comp>
  );
}
