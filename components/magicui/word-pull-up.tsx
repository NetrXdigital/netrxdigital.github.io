"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface WordPullUpProps {
  words: string;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export default function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  },
  framerProps = {
    hidden: { y: 18, opacity: 0, rotateX: -20 },
    show: { y: 0, opacity: 1, rotateX: 0, transition: { type: "spring", stiffness: 400, damping: 24 } },
  },
  className,
}: WordPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      variants={wrapperFramerProps}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={cn(
        "font-display text-center text-3xl md:text-5xl font-bold leading-tight tracking-tight",
        "bg-clip-text text-transparent bg-gradient-to-b from-foreground/90 to-foreground/60",
        className
      )}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          className="inline-block pr-2 will-change-transform"
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.div>
  );
}
