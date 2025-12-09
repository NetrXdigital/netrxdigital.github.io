// app/showcase/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import CursorFX from "@/components/ui/cursor-fx";
import NumberTicker from "@/components/magicui/number-ticker";

export default function ShowcasePage() {
  return (
    <div
      className="
        relative overflow-clip inset-0  min-h-screen w-full
        bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
        bg-[size:14px_24px]
        pt-20
      "
    >
      {/* GLOBAL FUTURISTIC CURSOR LAYER */}
      {/* <CursorFX /> */}

      {/* PAGE-LEVEL BACKGROUND FX */}
      {/* soft corner glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/30 via-sky-400/20 to-emerald-400/20 blur-3xl opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-500/25 via-indigo-500/20 to-cyan-400/25 blur-3xl opacity-70"
      />

      {/* slowly rotating conic ring over entire page */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-[40%] opacity-60"
        style={{
          backgroundImage:
            "conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.09), rgba(45,212,191,0.12), rgba(129,140,248,0.1), transparent 65%)",
        }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      />

      {/* horizontal scan line sweeping down the page */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-20%] top-0 h-40 bg-gradient-to-b from-white/18 via-white/0 to-transparent mix-blend-screen"
        initial={{ y: "-120%" }}
        animate={{ y: ["-120%", "220%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />

      {/* HERO – SPLIT LAYOUT WITH RADAR PANEL */}
      <section className="relative mx-6 md:mx-auto md:px-0 xl:w-4/5 2xl:w-[68%]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-10 rounded-[32px] border border-border/70 bg-background/85 backdrop-blur-2xl px-5 py-10 md:px-10 md:py-14 shadow-[0_26px_80px_rgba(15,23,42,0.9)] overflow-hidden"
        >
          {/* inner soft radial glow */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-[1px] rounded-[30px]"
            style={{
              backgroundImage:
                "radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(129,140,248,0.18),transparent_55%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />

          {/* tiny grid overlay inside hero */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.28]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.24)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[size:18px_18px]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.618fr)_minmax(0,1fr)] items-center">
            {/* LEFT – TEXT / NUMBERS */}
            <div className="space-y-7">
              {/* live badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                Live client builds · NetrX Digital
              </div>

              {/* title with halo */}
              <div className="relative">
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-x-16 -top-10 h-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.5),transparent_60%)] blur-2xl opacity-80"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.9 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
                <WordFadeIn
                  className="relative text-3xl lg:text-5xl font-semibold max-w-3xl md:text-left z-20 tracking-tight"
                  words="Design & Code That Helps Your Business Grow"
                />
              </div>

              {/* subheading */}
              <p className="text-left text-lg md:text-xl max-w-xl text-muted-foreground">
                A curated look at real projects built for one thing: turning
                attention into revenue for clinics, local brands, and
                performance-driven businesses.
              </p>

              {/* metrics strip */}
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-muted-foreground/90">
                <div className="inline-flex items-baseline gap-1 rounded-full bg-background/90 px-3 py-1 border border-border/70">
                  <span className="text-primary font-semibold text-base md:text-lg">
                    <NumberTicker value={20} />+
                  </span>
                  <span>active brands</span>
                </div>
                <div className="inline-flex items-baseline gap-1 rounded-full bg-background/90 px-3 py-1 border border-border/70">
                  <span className="text-primary font-semibold text-base md:text-lg">
                    <NumberTicker value={70} />+
                  </span>
                  <span>projects shipped</span>
                </div>
                <div className="inline-flex items-baseline gap-1 rounded-full bg-background/90 px-3 py-1 border border-border/70">
                  <span className="text-primary font-semibold text-base md:text-lg">
                    <NumberTicker value={99} />%
                  </span>
                  <span>client satisfaction</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact-netrx-digital"
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-primary-foreground text-sm md:text-base font-medium shadow-[0_18px_45px_rgba(37,99,235,0.65)] transition hover:brightness-110"
                  >
                    Start a Project
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <a
                    href="#work"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-border/80 bg-background/80 px-6 text-sm md:text-base font-medium text-foreground transition hover:bg-accent/70"
                  >
                    See the Work ↓
                  </a>
                </motion.div>
              </div>
            </div>

            {/* RIGHT – FUTURISTIC “PROJECT RADAR” PANEL */}
            <div className="relative">
              <motion.div
                className="relative aspect-[4/3] rounded-3xl border border-border bg-card/90 backdrop-blur-xl overflow-hidden shadow-[0_18px_50px_rgba(15,23,42,0.85)]"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02, rotateX: 4, rotateY: -4 }}
                style={{ transformStyle: "preserve-3d" as any }}
              >
                {/* inner grid + vignette */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.1),rgba(15,23,42,0.9))]" />
                  <div className="absolute inset-6 rounded-3xl border border-slate-700/70 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.16),transparent_65%)]" />
                  <div className="absolute inset-6 rounded-3xl bg-[linear-gradient(to_right,rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.2)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
                </div>

                {/* central pulse core */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    className="relative h-24 w-24 rounded-full border border-cyan-400/60 bg-cyan-400/15 shadow-[0_0_40px_rgba(34,211,238,0.8)]"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.div
                      className="absolute inset-3 rounded-full border border-cyan-300/50"
                      animate={{ opacity: [0.4, 0.9, 0.4] }}
                      transition={{
                        duration: 3.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* orbiting rings */}
                {[90, 125, 160].map((radius, idx) => (
                  <motion.div
                    key={radius}
                    aria-hidden
                    className="absolute inset-0 flex items-center justify-center"
                    style={{}}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 18 + idx * 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div
                      className="rounded-full border border-slate-600/80"
                      style={{
                        width: radius,
                        height: radius,
                      }}
                    >
                      {/* moving dot */}
                      <div className="relative h-full w-full">
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* blinking “project” nodes */}
                {[
                  { top: "18%", left: "18%", label: "SR Fitness" },
                  { top: "24%", right: "16%", label: "Stylizeunique" },
                  { bottom: "20%", left: "22%", label: "Kosut Builders" },
                  { bottom: "18%", right: "20%", label: "Instant Hub" },
                ].map((node, i) => (
                  <motion.div
                    key={node.label}
                    className="absolute text-[10px] text-slate-100/90"
                    style={{
                      top: node.top,
                      bottom: node.bottom,
                      left: node.left,
                      right: node.right,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.4 + i * 0.12,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <div className="flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-600/70 px-2 py-1 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{node.label}</span>
                    </div>
                  </motion.div>
                ))}

                {/* bottom data strip */}
                <div className="absolute inset-x-0 bottom-0 px-4 py-3 border-t border-slate-700/70 bg-gradient-to-t from-slate-950/90 via-slate-950/70 to-transparent text-[11px] text-slate-200/90 flex items-center justify-between gap-2">
                  <span className="uppercase tracking-[0.22em] text-slate-400">
                    Active campaigns
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      24/7 optimisation
                    </span>
                    <span className="hidden sm:inline-block text-slate-400/90">
                      AI-tuned bids · human strategy
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* FEATURED WORK HEADER */}
        <div className="mt-16 md:mt-18">
          <h2
            id="work"
            className="text-xl md:text-2xl font-semibold flex items-center gap-2"
          >
            Featured Work
            <span className="h-[1px] flex-1 bg-gradient-to-r from-primary/70 via-primary/20 to-transparent" />
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Selected builds across art, construction, fitness, recommerce, and retail.
          </p>
        </div>

        {/* WORK GRID */}
        <BlurFadeDemo />

        {/* CTA SECTION */}
        <div className="mt-16">
          <LetsMakeThingsHappenSection />
        </div>
      </section>

      <footer className="mt-16">
        <Footer />
      </footer>
    </div>
  );
}
