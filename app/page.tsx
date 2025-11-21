"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import { PiCheckBold, PiPlayFill } from "react-icons/pi";
import { motion } from "framer-motion";

import dynamic from "next/dynamic";
import { CoverDemo } from "@/components/demos/cover-demo";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { TiltCard } from "@/components/ui/tilt-card";
import { InteractiveGridBackground } from "@/components/ui/interactive-grid-background";

/* Lazy loaded components */
const AnimatedBeamMultipleOutputDemo = dynamic(() => import("@/components/demos/animated-beam-demo").then(mod => mod.AnimatedBeamMultipleOutputDemo));
const BoxRevealDemo = dynamic(() => import("@/components/demos/box-reveal-demo"));
const ScrollBasedVelocityDemo = dynamic(() => import("@/components/demos/scroll-based-velocity-demo").then(mod => mod.ScrollBasedVelocityDemo));
const WordPullUpDemo = dynamic(() => import("@/components/demos/word-pull-up-demo").then(mod => mod.WordPullUpDemo));
const BoxReveal = dynamic(() => import("@/components/magicui/box-reveal"));
const NumberTicker = dynamic(() => import("@/components/magicui/number-ticker"));
const InfiniteMovingLogos = dynamic(() => import("@/components/ui/infinite-moving-logos").then(mod => mod.InfiniteMovingLogos));
const LetsMakeThingsHappenSection = dynamic(() => import("@/components/ui/lets-make-things-happen"));
const Footer = dynamic(() => import("@/components/footer"));

/* 🔗 Unified FX pack (imported components) */
import CursorFX from "@/components/ui/cursor-fx";

const services = [
  { icon: "/images/web_development.png", title: "Web Design + Development", description: "Take your business to the next level with our web design and development services" },
  { icon: "/images/seo.png", title: "Search Engine Optimization", description: "Get your website to the top of search engine results with our SEO services" },
  { icon: "/images/content_creation.png", title: "Content Creation", description: "With our content creation services, we help businesses drive results" },
  { icon: "/images/social_media_marketing.png", title: "Social Media Marketing", description: "Boost your brand's online presence with our social media marketing services" },
  { icon: "/images/email_marketing.png", title: "Email Marketing", description: "Interact with your customers and increase sales with our email marketing services" },
  { icon: "/images/pay_per_click.png", title: "Pay-Per-Click Advertising", description: "Stop wasting ad spend — reach ready-to-buy audiences with smart PPC" },
];

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(scrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}



function ProgressRing({ progress }: { progress: number }) {
  const size = 28;
  const stroke = 3;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - progress);

  return (
    <svg width={size} height={size} className="text-muted-foreground">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="currentColor"
        strokeWidth={stroke}
        fill="none"
        opacity={0.25}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="url(#testimonial-progress-gradient)"
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="testimonial-progress-gradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TestimonialsSection() {
  const items = [
    {
      quote:
        "NetrX Digital helped us boost our online presence and generate consistent leads through smart marketing strategies. Their SEO and social media expertise made a real difference in our growth. Highly recommended!",
      name: "Shouaib Ahmed",
      role: "CEO, Instant Hub",
      logo: "/logo/instanthub.png",
    },
    {
      quote:
        "NetrX Digital helped my business grow tremendously. Their marketing strategies and SEO expertise brought real results — more visibility, more leads, and a stronger online presence.",
      name: "Raza",
      role: "Founder, Raza Pioneer Labs",
      logo: "/logo/raza.png",
    },
    {
      quote:
        "NetrX Digital has truly transformed our business growth journey. Highly professional and committed team — we couldn’t have asked for a better partner.",
      name: "Priya Patel",
      role: "Executive, Kosut Builders & Developers",
      logo: "/logo/Kosut Builder.png",
    },
    {
      quote:
        "Creative, reliable, and fast. Their digital strategy helped my brand stand out online.",
      name: "Anshu",
      role: "Founder, StylizeUnique",
      logo: "/logo/business.png",
    },
    {
      quote:
        "A game-changer for my gym. More clients, better local visibility, and strong ROI.",
      name: "Parth Singh",
      role: "Founder, S R Fitness",
      logo: "/logo/srfitness.png",
    },
  ];

  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  // auto-rotate testimonials
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const id = setInterval(() => {
      if (!paused) {
        setI((prev) => (prev + 1) % items.length);
      }
    }, 5000);

    return () => clearInterval(id);
  }, [paused, items.length]);

  const go = (dir: "prev" | "next") => {
    setI((prev) =>
      dir === "next"
        ? (prev + 1) % items.length
        : (prev - 1 + items.length) % items.length
    );
  };

  // progress ring animation synced with rotation interval
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let start = performance.now();
    let raf = 0;

    const loop = (t: number) => {
      const delta = (t - start) % 5000;
      setProgress(delta / 5000);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [i]);

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* FUTURISTIC BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* radial auras */}
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_10%_-10%,rgba(99,102,241,.18),transparent),radial-gradient(800px_300px_at_110%_120%,rgba(56,189,248,.15),transparent)]" />
        {/* grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/.22)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/.22)_1px,transparent_1px)] bg-[size:18px_28px]" />
        {/* rotating conic aura */}
        <motion.div
          className="absolute -inset-[40%] opacity-60"
          style={{
            backgroundImage:
              "conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.18), rgba(129,140,248,0.16), rgba(45,212,191,0.18), transparent 65%)",
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        {/* scan line */}
        <motion.div
          className="absolute inset-x-[-20%] top-0 h-40 bg-gradient-to-b from-white/14 via-white/0 to-transparent mix-blend-screen"
          initial={{ y: "-120%" }}
          animate={{ y: ["-120%", "220%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="mx-6 md:mx-auto xl:w-4/5 2xl:w-[68%] relative z-10">
        {/* HEADER */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-300 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Proof · Not promises
            </p>
            <h2 className="text-2xl md:text-4xl font-bold">
              What clients say about{" "}
              <span className="bg-clip-text text-transparent bg-[conic-gradient(at_10%_20%,#60a5fa,#a78bfa,#22d3ee,#60a5fa)]">
                NetrX Digital
              </span>
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <MagneticLink
              as="button"
              onClick={() => go("prev")}
              className="h-10 w-10 rounded-full border border-border/70 flex items-center justify-center bg-background/70 hover:bg-accent/60 transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </MagneticLink>
            <MagneticLink
              as="button"
              onClick={() => go("next")}
              className="h-10 w-10 rounded-full border border-border/70 flex items-center justify-center bg-background/70 hover:bg-accent/60 transition"
            >
              <ChevronRight className="h-5 w-5" />
            </MagneticLink>
          </div>
        </motion.div>

        {/* GOLDEN RATIO LAYOUT: main card : side stats ≈ 1.618 : 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.618fr)_minmax(0,1fr)] gap-10 items-stretch">
          {/* MAIN TESTIMONIAL CARD */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className="relative h-full"
          >
            {/* halo behind card */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_60%)] blur-3xl opacity-70"
              animate={{ opacity: [0.3, 0.7, 0.35] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* orbiting ring */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full border border-blue-400/35"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            <TiltCard
              className="relative h-full min-h-[260px] lg:min-h-[360px] 
               flex flex-col bg-card/90 border border-border/80 
               rounded-2xl p-6 md:p-7 backdrop-blur-xl 
               shadow-[0_24px_80px_rgba(15,23,42,0.8)]"
            >
              {/* header: avatar + name + progress */}
              <div className="flex items-center gap-3 mb-5">
                <div className="relative">
                  <Image
                    src={items[i].logo}
                    alt={`${items[i].name} logo`}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded object-contain ring-2 ring-blue-500/40 bg-background"
                  />
                  <span className="absolute -right-1 -bottom-1 inline-block h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-background" />
                </div>
                <div>
                  <div className="font-semibold">{items[i].name}</div>
                  <div className="text-sm text-muted-foreground">
                    {items[i].role}
                  </div>
                </div>
                <div className="ml-auto">
                  <ProgressRing progress={progress} />
                </div>
              </div>

              {/* quote – take remaining vertical space */}
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="flex-1 flex items-center"
              >
                <p className="text-lg md:text-xl leading-relaxed">
                  “{items[i].quote}”
                </p>
              </motion.div>

              {/* dots pinned at bottom */}
              <div className="mt-6 flex items-center justify-center gap-2">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all ${i === idx
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                  />
                ))}
              </div>
            </TiltCard>
          </div>


          {/* SIDE COLUMN – STATS / SIGNALS */}
          <motion.div
            className="grid grid-rows-3 gap-4"
            initial={{ opacity: 0, x: 20, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {[
              {
                label: "Average rating",
                value: "4.9",
                sub: "Across Google & social",
              },
              {
                label: "Industries served",
                value: "50+",
                sub: "From clinics to recommerce",
              },
              {
                label: "Client retention",
                value: "99%",
                sub: "Stay for results, not lock-ins",
              },
            ].map((card, idx) => (
              <motion.div
                key={card.label}
                className="relative rounded-2xl border border-border/70 bg-[radial-gradient(circle_at_top_left,rgba(30,64,175,0.9),rgba(15,23,42,0.98))] backdrop-blur-xl p-4 md:p-5 overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.7)]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  delay: 0.08 * idx,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
              >
                {/* light sweep */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-[-40%] w-1/2 bg-gradient-to-r from-white/15 via-white/5 to-transparent blur-xl opacity-40"
                  animate={{ x: ["0%", "180%"] }}
                  transition={{
                    duration: 7 + idx * 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* tiny grid noise */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  }}
                />

                <div className="relative">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-blue-200/80">
                    {card.label}
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl md:text-3xl font-semibold text-white">
                      {card.value}
                    </span>
                    <span className="text-xs text-blue-100/80">
                      {card.sub}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================================
   PAGE
   ============================================================================= */

export default function Home() {
  return (
    <div
      className="overflow-clip inset-0 -z-10 min-h-screen w-full
      bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
      bg-[size:14px_24px]"
    >
      {/* Mount the unified glow ONCE so it matches all sections/pages */}
      {/* <CursorFX /> */}
      <ScrollProgress />

      {/* ====================== HERO WITH DOT WAVE BG ====================== */}
      <section
        className="relative pt-24 md:pt-32 min-h-[84vh] md:min-h-[93vh] flex items-center overflow-hidden"
        aria-label="Hero"
      >
        <InteractiveGridBackground className="absolute inset-0 z-0" />


        <div className="relative z-10 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto text-center">
          <h1 className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            <CoverDemo />
          </h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 flex items-center justify-center"
          >
            <p className="text-lg md:text-xl font-light tracking-wide text-gray-400">
              Elevating <span className="font-medium text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Digital Experiences</span> through Innovation
            </p>
          </motion.div>

          {/* Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center justify-items-center md:mx-auto mt-10 md:mt-16">
            {["Design", "Development", "Marketing", "Strategy"].map((label) => (
              <BoxReveal key={label} boxColor={"#3b82f6"} duration={0.5}>
                <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-white/95 hover:scale-105">
                  <PiCheckBold className="text-xl text-blue-400" />
                  {label}
                </p>
              </BoxReveal>
            ))}
          </div>
        </div>
      </section>


      {/* VSL Video Section */}
      {/* VSL Video Section – MATCHED to Process BG */}
      <Element name="video">
        <section
          className="relative py-24 overflow-hidden"
          onMouseMove={(e) => {
            const el = e.currentTarget as HTMLElement;
            const rect = el.getBoundingClientRect();
            el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
            el.style.setProperty("--my", `${e.clientY - rect.top}px`);
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.setProperty("--mx", `-9999px`);
            el.style.setProperty("--my", `-9999px`);
          }}
        >
          {/* === FUTURISTIC BACKGROUND === */}
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            {/* holographic grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/.25)_1px,transparent_1px)] bg-[size:18px_28px]" />
            {/* aurora blobs */}
            <div className="absolute -top-24 -left-24 h-[22rem] w-[22rem] rounded-full blur-3xl opacity-40 bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/30" />
            <div className="absolute -bottom-24 -right-24 h-[22rem] w-[22rem] rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400/35 via-fuchsia-500/30 to-blue-500/30" />
            {/* subtle scanlines */}
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:100%_3px] mix-blend-overlay" />

            {/* slow rotating conic aura */}
            <motion.div
              className="absolute -inset-[40%] opacity-70"
              style={{
                backgroundImage:
                  "conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.16), rgba(129,140,248,0.16), rgba(45,212,191,0.16), transparent 65%)",
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            />

            {/* vertical scan sweep */}
            <motion.div
              className="absolute inset-x-[-20%] top-0 h-40 bg-gradient-to-b from-white/16 via-white/0 to-transparent mix-blend-screen"
              initial={{ y: "-120%" }}
              animate={{ y: ["-120%", "220%"] }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* cursor-reactive local glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full z-0"
            style={{
              left: "var(--mx, -9999px)",
              top: "var(--my, -9999px)",
              background:
                "radial-gradient(closest-side, rgba(59,130,246,0.22), rgba(59,130,246,0) 60%)",
            }}
          />

          <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto relative z-10">
            {/* HEADER */}
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-blue-300 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                NetrX Digital · Case Study
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Watch How We{" "}
                <span className="text-blue-500 relative inline-block">
                  Transform
                  <Image
                    src={"/icons/squiggle.svg"}
                    width={800}
                    height={30}
                    className="absolute -bottom-2 left-0 w-full h-3"
                    alt="underline"
                  />
                </span>{" "}
                Businesses
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
                Proven strategies and real outcomes that grow traffic, leads, and revenue—on
                autopilot.
              </p>
            </motion.div>

            {/* GOLDEN RATIO LAYOUT: video : cards ≈ 1.618 : 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.618fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-stretch">
              {/* LEFT – VIDEO PANEL */}
              <motion.div
                className="relative max-w-5xl mx-auto lg:mx-0"
                initial={{ opacity: 0, x: -24, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* floating halo behind video */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2),transparent_55%)] blur-3xl opacity-70"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* orbiting ring */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-blue-400/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                  className="relative bg-black rounded-2xl overflow-hidden shadow-[0_26px_80px_rgba(15,23,42,0.9)] border border-slate-700/70"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* decorative blobs */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-70 blur-sm" />
                  <div className="absolute -top-2 -right-6 w-6 h-6 bg-indigo-400 rounded-full opacity-50 blur-sm" />
                  <div className="absolute -bottom-6 -left-2 w-10 h-10 bg-purple-400 rounded-full opacity-40 blur-sm" />

                  {/* pulsating border highlight */}
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_55%)",
                    }}
                    initial={{ opacity: 0.1 }}
                    animate={{ opacity: [0.1, 0.35, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <div className="relative aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/nFzc15dg1fc?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1"
                      title="Digital Marketing Success Stories - How We Transform Businesses"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* small CTA pill under video */}
                <motion.div
                  className="text-center mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <div className="inline-flex items-center gap-x-3 bg-white/90 dark:bg-slate-900/90 px-6 py-3 rounded-full shadow-lg backdrop-blur border border-slate-200/40 dark:border-slate-700/70">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      Watch the full case study in 2 minutes
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT – FUTURISTIC CARDS / CONTROL PANEL */}
              <motion.div
                className="grid grid-rows-3 gap-5"
                initial={{ opacity: 0, x: 24, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {[
                  {
                    title: "Real Results",
                    desc: "Clinic bookings up, CAC down, and lead quality improved across campaigns.",
                  },
                  {
                    title: "Proven Systems",
                    desc: "AI-tuned targeting, creative testing, and landing pages that keep compounding.",
                  },
                  {
                    title: "Client Stories",
                    desc: "From Patna clinics to pan-India brands, see what happens after 90 days.",
                  },
                ].map((c, i) => (
                  <motion.div
                    key={c.title}
                    className="relative text-left p-6 rounded-2xl border border-slate-700/70 
                         bg-[radial-gradient(circle_at_top_left,rgba(30,64,175,0.9),rgba(15,23,42,0.98))]
                         shadow-[0_0_35px_-12px_rgba(56,189,248,0.5)] backdrop-blur-xl
                         overflow-hidden"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.08 * i }}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                      transition: { duration: 0.22, ease: "easeOut" },
                    }}
                  >
                    {/* moving light sweep */}
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-[-30%] w-1/2 bg-gradient-to-r from-white/15 via-white/5 to-transparent blur-xl"
                      animate={{ x: ["0%", "220%"] }}
                      transition={{
                        duration: 6 + i * 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* glow ring in corner */}
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full border border-cyan-300/50"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 50 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <div className="relative flex items-start gap-4">
                      <div className="w-11 h-11 bg-blue-100/10 dark:bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-400/40">
                        <PiCheckBold className="text-blue-300 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-white mb-1.5">
                          {c.title}
                        </h3>
                        <p className="text-blue-100/85 text-xs md:text-sm leading-relaxed">
                          {c.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </Element>


      {/* Trust strip – FUTURISTIC */}
      <section className="relative w-full py-24 overflow-hidden">
        {/* BACKGROUND FX */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          {/* grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/.25)_1px,transparent_1px)] bg-[size:18px_28px]" />

          {/* corner glows */}
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full blur-3xl opacity-40 bg-gradient-to-br from-blue-500/50 via-indigo-500/40 to-purple-500/40" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-fuchsia-500/40 via-blue-500/40 to-cyan-500/40" />

          {/* slow rotating conic aura */}
          <motion.div
            className="absolute -inset-[40%] opacity-60"
            style={{
              backgroundImage:
                "conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.16), rgba(129,140,248,0.16), rgba(45,212,191,0.16), transparent 65%)",
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          />

          {/* scan line */}
          <motion.div
            className="absolute inset-x-[-20%] top-0 h-40 bg-gradient-to-b from-white/14 via-white/0 to-transparent mix-blend-screen"
            initial={{ y: "-120%" }}
            animate={{ y: ["-120%", "220%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.618fr)] gap-10 lg:gap-16 items-center">

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground backdrop-blur bg-card/70 shadow-[0_0_0_1px_hsl(var(--border)/.4)]">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                <span>Real clients • Real outcomes</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-[conic-gradient(at_20%_20%,#60a5fa_0deg,#a78bfa_120deg,#22d3ee_240deg,#60a5fa_360deg)]">
                  Trusted by fast-moving brands
                </span>
              </h2>

              {/* stats cards */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="relative rounded-2xl p-5 md:p-6 border bg-card/60 backdrop-blur shadow-[0_0_0_1px_hsl(var(--border)/.5)] overflow-hidden"
                >
                  {/* inner halo */}
                  <span className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)] ring-1 ring-blue-500/30" />
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full border border-blue-500/40"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  />

                  <div className="relative flex items-start justify-between">
                    <div>
                      <div className="text-3xl md:text-5xl font-bold text-blue-500">
                        <NumberTicker value={50} />+
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Happy Clients
                      </p>
                    </div>
                    <div className="h-9 w-9 rounded-full grid place-items-center bg-blue-500/10 border border-blue-500/30">
                      <ShieldCheck className="h-5 w-5 text-blue-500" />
                    </div>
                  </div>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="relative rounded-2xl p-5 md:p-6 border bg-card/60 backdrop-blur shadow-[0_0_0_1px_hsl(var(--border)/.5)] overflow-hidden"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)] ring-1 ring-purple-500/30" />
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -left-10 -bottom-10 h-24 w-24 rounded-full border border-purple-500/40"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  />

                  <div className="relative flex items-start justify-between">
                    <div>
                      <div className="text-3xl md:text-5xl font-bold text-indigo-500">
                        <NumberTicker value={70} />+
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Projects Completed
                      </p>
                    </div>
                    <div className="h-9 w-9 rounded-full grid place-items-center bg-indigo-500/10 border border-indigo-500/30">
                      <ShieldCheck className="h-5 w-5 text-indigo-500" />
                    </div>
                  </div>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
                </motion.div>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                From startups to established brands — we partner for velocity and compounding
                growth.
              </p>
            </motion.div>

            {/* RIGHT – LOGO BELT WITH FX */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* halo behind logos */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-x-10 -top-10 h-40 md:h-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_60%)] blur-3xl opacity-70"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* soft fade on edges for logos */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent mask-fade" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent mask-fade" />

              <motion.div
                className="overflow-hidden rounded-2xl border bg-card/70 backdrop-blur shadow-[0_20px_60px_rgba(15,23,42,0.7)]"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <InfiniteMovingLogos
                  speed="slow"
                  direction="left"
                  items={[
                    { logo: "/logo/instanthub.png", name: "Instant Hub" },
                    { logo: "/logo/raza.png", name: "Raza Pioneer Labs" },
                    { logo: "/logo/Kosut Builder.png", name: "Kosut Builders" },
                    { logo: "/logo/business.png", name: "StylizeUnique" },
                    { logo: "/logo/srfitness.png", name: "S R Fitness" },
                    { logo: "/logo/Kosford.webp", name: "Kosford Pharmaceuticals" },
                    { logo: "/logo/R&M.webp", name: "Resin & Memories.." },
                  ]}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
        </div>

        <style jsx>{`
    @supports not (background: paint(worklet)) {
      .mask-fade {
        -webkit-mask-image: linear-gradient(
          90deg,
          transparent,
          black 15%,
          black 85%,
          transparent
        );
        mask-image: linear-gradient(
          90deg,
          transparent,
          black 15%,
          black 85%,
          transparent
        );
      }
    }
  `}</style>
      </section>

      {/* Services */}
      <Element name="services">
        <section className="relative py-20">

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            {/* soft grid */}
            <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,hsl(var(--border)/.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/.25)_1px,transparent_1px)] bg-[size:18px_24px]" />

            {/* corner glows */}
            <div className="absolute -top-32 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/30 via-sky-400/20 to-emerald-400/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-24 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-500/30 via-indigo-500/20 to-cyan-400/25 blur-3xl" />

            {/* animated aurora sweep */}
            <motion.div
              className="absolute inset-x-0 top-1/4 h-40 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-purple-500/10 blur-3xl"
              initial={{ x: "-40%", opacity: 0 }}
              animate={{ x: "40%", opacity: 0.8 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto relative">
            {/* Section badge */}
            <motion.div
              className="mb-3 flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-blue-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                NetrX Digital · Services
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <WordPullUpDemo />
            </motion.h2>

            <motion.p
              className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              All of our services are designed to help your business stand out
            </motion.p>

            {/* orbiting halo behind grid */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-[58%] -z-10 hidden md:block"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.9 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="h-80 w-80 rounded-full border border-slate-600/60 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),transparent_60%)] blur-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Services Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 justify-items-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.96 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  className="w-full"
                >
                  <TiltCard className="relative p-5 w-full overflow-hidden">
                    {/* animated border glow */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl"
                      style={{
                        background:
                          "radial-gradient(circle at top, rgba(59,130,246,0.2), transparent 55%), radial-gradient(circle at bottom, rgba(56,189,248,0.16), transparent 55%)",
                      }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* subtle rotating ring inside card */}
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full border border-blue-500/40"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <div className="relative">
                      <Image
                        src={service.icon}
                        width={480}
                        height={240}
                        className="object-contain bg-gray-100 dark:bg-gray-800/80 p-4 w-full h-40 rounded-md border border-border/60"
                        alt={service.title}
                      />
                      <h3 className="mt-4 text-lg md:text-xl font-semibold">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Element>



      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>


      <section
        className="relative py-24 bg-card overflow-hidden"
        onMouseMove={(e) => {
          const el = e.currentTarget as HTMLElement;
          const rect = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
          el.style.setProperty("--my", `${e.clientY - rect.top}px`);
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.setProperty("--mx", `-9999px`);
          el.style.setProperty("--my", `-9999px`);
        }}
      >
        {/* BACKGROUND FX */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/.25)_1px,transparent_1px)] bg-[size:18px_28px]" />
          {/* blobs */}
          <div className="absolute -top-24 -left-24 h-[22rem] w-[22rem] rounded-full blur-3xl opacity-40 bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/30" />
          <div className="absolute -bottom-24 -right-24 h-[22rem] w-[22rem] rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400/35 via-fuchsia-500/30 to-blue-500/30" />
          {/* rotating conic aura */}
          <motion.div
            className="absolute -inset-[40%] opacity-70"
            style={{
              backgroundImage:
                "conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.16), rgba(129,140,248,0.16), rgba(45,212,191,0.16), transparent 65%)",
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          />
          {/* scan line */}
          <motion.div
            className="absolute inset-x-[-20%] top-0 h-40 bg-gradient-to-b from-white/16 via-white/0 to-transparent mix-blend-screen"
            initial={{ y: "-120%" }}
            animate={{ y: ["-120%", "220%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* section-local cursor glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full z-0"
          style={{
            left: "var(--mx, -9999px)",
            top: "var(--my, -9999px)",
            background:
              "radial-gradient(closest-side, rgba(99,102,241,0.18), rgba(99,102,241,0) 60%)",
          }}
        />

        <Element name="process">
          <main className="md:px-0 mx-6 md:mx-auto xl:w-4/5 2xl:w-[68%] relative z-10">
            {/* HEADER */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="mx-auto mb-4 w-fit rounded-full border px-3 py-1 text-xs text-muted-foreground backdrop-blur bg-background/50">
                Iterative • Data-driven • Fast
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                Our{" "}
                <span className="bg-clip-text text-transparent bg-[conic-gradient(at_20%_20%,#60a5fa_0deg,#a78bfa_120deg,#22d3ee_240deg,#60a5fa_360deg)]">
                  Creative
                </span>{" "}
                Process
              </h2>

              <p className="text-center max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                We blend strategy, motion design, and engineering to get your brand noticed.
              </p>
            </motion.div>

            {/* SIMPLIFIED 4-COLUMN GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discover",
                  desc: "We audit your current state, map your audience, and define clear goals aligned with business value.",
                  icon: "🔍"
                },
                {
                  step: "02",
                  title: "Strategy",
                  desc: "We build the roadmap: positioning, content architecture, and growth loops that drive KPIs.",
                  icon: "🎯"
                },
                {
                  step: "03",
                  title: "Build",
                  desc: "Design systems meet performance-first code. We build scalable solutions with QA built-in.",
                  icon: "⚡"
                },
                {
                  step: "04",
                  title: "Launch",
                  desc: "Ship, measure, and iterate. We use data to optimize CRO, SEO, and creative performance.",
                  icon: "🚀"
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group relative p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  <div className="mt-6">
                    <span className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-2 block">
                      Step {item.step}
                    </span>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </main>
        </Element>

        <style jsx>{`
    @keyframes timeline {
      0% {
        transform: translateX(-30%);
      }
      100% {
        transform: translateX(130%);
      }
    }
  `}</style>
      </section>


      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}
