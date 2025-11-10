"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import { PiCheckBold, PiPlayFill } from "react-icons/pi";
import { motion } from "framer-motion";

/* Your existing demos/components */
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Footer from "@/components/footer";

/* 🔗 Unified FX pack (imported components) */
import CursorFX from "@/components/ui/cursor-fx";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { TiltCard } from "@/components/ui/tilt-card";

/* ===== Local helpers ===== */

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

/* ===== Testimonials (uses TiltCard + MagneticLink) ===== */

function ProgressRing({ progress }: { progress: number }) {
  const size = 28;
  const stroke = 3;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - progress);
  return (
    <svg width={size} height={size} className="text-muted-foreground">
      <circle cx={size / 2} cy={size / 2} r={r} stroke="currentColor" strokeWidth={stroke} fill="none" opacity={0.25} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="url(#g)"
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
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
    { quote: "NetrX Digital helped us boost our online presence and generate consistent leads through smart marketing strategies. Their SEO and social media expertise made a real difference in our growth. Highly recommended!", name: "Shouaib Ahmed", role: "CEO, Instant Hub", logo: "/logo/instanthub.png" },
    { quote: "NetrX Digital helped my business grow tremendously. Their marketing strategies and SEO expertise brought real results — more visibility, more leads, and a stronger online presence.", name: "Raza", role: "Founder, Raza Pioneer Labs", logo: "/logo/raza.png" },
    { quote: "NetrX Digital has truly transformed our business growth journey. Highly professional and committed team — we couldn’t have asked for a better partner.", name: "Priya Patel", role: "Executive, Kosut Builders & Developers", logo: "/logo/Kosut Builder.png" },
    { quote: "Creative, reliable, and fast. Their digital strategy helped my brand stand out online.", name: "Anshu", role: "Founder, StylizeUnique", logo: "/logo/business.png" },
    { quote: "A game-changer for my gym. More clients, better local visibility, and strong ROI.", name: "Parth Singh", role: "Founder, S R Fitness", logo: "/logo/srfitness.png" },
  ];

  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(() => {
      if (!paused) setI((p) => (p + 1) % items.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const go = (dir: "prev" | "next") =>
    setI((p) => (dir === "next" ? (p + 1) % items.length : (p - 1 + items.length) % items.length));

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
    <section className="relative py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_10%_-10%,rgba(99,102,241,.15),transparent),radial-gradient(800px_300px_at_110%_120%,rgba(56,189,248,.12),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/.2)_1px,transparent_1px)] bg-[size:18px_28px]" />
      </div>

      <div className="mx-6 md:mx-auto xl:w-4/5 2xl:w-[68%]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">What clients say</h2>
          <div className="hidden md:flex gap-2">
            <MagneticLink as="button" onClick={() => go("prev")} className="h-10 w-10">
              <ChevronLeft className="h-5 w-5" />
            </MagneticLink>
            <MagneticLink as="button" onClick={() => go("next")} className="h-10 w-10">
              <ChevronRight className="h-5 w-5" />
            </MagneticLink>
          </div>
        </div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <TiltCard>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <Image
                  src={items[i].logo}
                  alt={`${items[i].name} logo`}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded object-contain ring-2 ring-blue-500/40"
                />
                <span className="absolute -right-1 -bottom-1 inline-block h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-background" />
              </div>
              <div>
                <div className="font-semibold">{items[i].name}</div>
                <div className="text-sm text-muted-foreground">{items[i].role}</div>
              </div>
              <div className="ml-auto">
                <ProgressRing progress={progress} />
              </div>
            </div>

            <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <p className="text-lg md:text-xl leading-relaxed">“{items[i].quote}”</p>
            </motion.div>
          </TiltCard>

          <div className="mt-6 flex items-center justify-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === idx ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
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
      className="overflow-clip inset-0 -z-10 min-h-screen w-full bg-background
      bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
      bg-[size:14px_24px]"
    >
      {/* Mount the unified glow ONCE so it matches all sections/pages */}
      <CursorFX />
      <ScrollProgress />

      {/* ====================== HERO WITH VIDEO BG ====================== */}
      <section className="relative pt-24 md:pt-28 min-h-[80vh] md:min-h-[86vh] flex items-center overflow-hidden" aria-label="Hero">
        <video
          className="absolute inset-0 h-full w-full object-cover pointer-events-none z-0"
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent,rgba(0,0,0,0.35))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:14px_24px]" />

        <div className="relative z-10 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto text-center">
          <h1 className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            <CoverDemo />
          </h1>

          {/* Magnetic CTAs */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <MagneticLink as={Link} href="/meeting" className="px-6 py-3">
              Book a Call
            </MagneticLink>
            <MagneticLink as={Link} href="/showcase" className="px-6 py-3">
              Showcase
            </MagneticLink>
          </div>

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
      <Element name="video">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Watch How We{" "}
                <span className="text-blue-500 relative">
                  Transform
                  <Image src={"/icons/squiggle.svg"} width={800} height={30} className="absolute -bottom-2 left-0 w-full h-3" alt="underline" />
                </span>{" "}
                Businesses
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Proven strategies and real outcomes that grow traffic, leads, and revenue.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-70"></div>
                <div className="absolute -top-2 -right-6 w-6 h-6 bg-indigo-400 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -left-2 w-10 h-10 bg-purple-400 rounded-full opacity-40"></div>

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

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-x-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
                  <PiPlayFill className="text-blue-500 text-xl" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Watch the full case study above</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { title: "Real Results", desc: "See actual case studies and measurable outcomes" },
                { title: "Proven Strategies", desc: "Methodologies that drive consistent growth" },
                { title: "Client Success", desc: "Hear directly from clients about their journey" },
              ].map((c) => (
                <div key={c.title} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PiCheckBold className="text-blue-500 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* Trust strip – FUTURISTIC */}
      <section className="relative w-full py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/.25)_1px,transparent_1px)] bg-[size:18px_28px]" />
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full blur-3xl opacity-40 bg-gradient-to-br from-blue-500/50 via-indigo-500/40 to-purple-500/40" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-fuchsia-500/40 via-blue-500/40 to-cyan-500/40" />
        </div>

        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground backdrop-blur bg-card/70">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                <span>Real clients • Real outcomes</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-[conic-gradient(at_20%_20%,#60a5fa_0deg,#a78bfa_120deg,#22d3ee_240deg,#60a5fa_360deg)]">
                  Trusted by fast-moving brands
                </span>
              </h2> 

              <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl p-5 md:p-6 border bg-card/60 backdrop-blur shadow-[0_0_0_1px_hsl(var(--border)/.5)]"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)] ring-1 ring-blue-500/25" />
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-3xl md:text-5xl font-bold text-blue-500">
                        <NumberTicker value={20} />+
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">Happy Clients</p>
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
                  className="relative rounded-2xl p-5 md:p-6 border bg-card/60 backdrop-blur shadow-[0_0_0_1px_hsl(var(--border)/.5)]"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)] ring-1 ring-purple-500/25" />
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-3xl md:text-5xl font-bold text-indigo-500">
                        <NumberTicker value={32} />+
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">Projects Completed</p>
                    </div>
                    <div className="h-9 w-9 rounded-full grid place-items-center bg-indigo-500/10 border border-indigo-500/30">
                      <ShieldCheck className="h-5 w-5 text-indigo-500" />
                    </div>
                  </div>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
                </motion.div>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                From startups to established brands — we partner for velocity and compounding growth.
              </p>
            </div>

           <div className="relative">
  <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
  <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />

  <div className="overflow-hidden rounded-xl border bg-card/60 backdrop-blur">
    <InfiniteMovingLogos
      speed="slow"
      direction="left"
      items={[
        { logo: "/logo/instanthub.png", name: "Instant Hub" },
        { logo: "/logo/raza.png", name: "Raza Pioneer Labs" },
        { logo: "/logo/Kosut Builder.png", name: "Kosut Builders" },
        { logo: "/logo/business.png", name: "StylizeUnique" },
        { logo: "/logo/srfitness.png", name: "S R Fitness" },
      ]}
    />
  </div>
</div>
          </div>
        </div>

        <div className="mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
        </div>

        <style jsx>{`
          @supports not (background: paint(worklet)) {
            .mask-fade {
              -webkit-mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
              mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
            }
          }
        `}</style>
      </section>

      {/* Services */}
      <Element name="services">
         <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
    <h2><WordPullUpDemo /></h2>
    <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
      All of our services are designed to help your business stand out
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 justify-items-center">
      {services.map((service) => (
        <TiltCard key={service.title} className="p-5 w-full">
          <Image
            src={service.icon}
            width={480}
            height={240}
            className="object-contain bg-gray-100 dark:bg-gray-800 p-4 w-full h-40 rounded-md"
            alt={service.title}
          />
          <h3 className="mt-4 text-lg md:text-xl font-semibold">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
          <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        </TiltCard>
      ))}
    </div>
  </div>
</Element>


      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      {/* Process (with section-local cursor glow driven via CSS vars) */}
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
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/.25)_1px,transparent_1px)] bg-[size:18px_28px]" />
          <div className="absolute -top-24 -left-24 h-[22rem] w-[22rem] rounded-full blur-3xl opacity-40 bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/30" />
          <div className="absolute -bottom-24 -right-24 h-[22rem] w-[22rem] rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400/35 via-fuchsia-500/30 to-blue-500/30" />
        </div>

        {/* section-local glow (subtle; global CursorFX stays uniform) */}
        <div
          aria-hidden
          className="pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full z-0"
          style={{
            left: "var(--mx, -9999px)",
            top: "var(--my, -9999px)",
            background: "radial-gradient(closest-side, rgba(99,102,241,0.16), rgba(99,102,241,0) 60%)",
          }}
        />

        <Element name="process">
          <main className="md:px-0 mx-6 md:mx-auto xl:w-4/5 2xl:w-[68%] relative z-10">
            <div className="mx-auto mb-4 w-fit rounded-full border px-3 py-1 text-xs text-muted-foreground backdrop-blur bg-background/50">
              Iterative • Data-driven • Fast
            </div>

            <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-[conic-gradient(at_20%_20%,#60a5fa_0deg,#a78bfa_120deg,#22d3ee_240deg,#60a5fa_360deg)]">
                Creative
              </span>{" "}
              Process
            </h2>

            <p className="text-center py-4 md:w-1/2 mx-auto text-lg md:text-xl text-gray-500">
              We blend strategy, motion design, and engineering to get your brand noticed.
            </p>

            <div className="relative mx-auto mt-8 max-w-4xl rounded-2xl border bg-background/60 backdrop-blur p-5 md:p-6 shadow-[0_0_0_1px_hsl(var(--border)/.4),0_25px_80px_-30px_rgba(0,0,0,.25)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border bg-card/60 p-4 hover:-translate-y-0.5 transition">
                  <AnimatedBeamMultipleOutputDemo />
                </div>
                <div className="rounded-xl border bg-card/60 p-4 hover:-translate-y-0.5 transition">
                  <BoxRevealDemo />
                </div>
              </div>

              <div className="mt-6 h-1 w-full rounded-full bg-muted relative overflow-hidden">
                <span className="absolute inset-y-0 left-0 w-1/3 animate-[timeline_6s_linear_infinite] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {[
                { step: "01", title: "Discover", desc: "Audit, goals, audience mapping to align with business value." },
                { step: "02", title: "Strategy", desc: "Positioning, content architecture, growth loops, KPIs." },
                { step: "03", title: "Build", desc: "Design systems + performance-first code with QA built in." },
                { step: "04", title: "Launch & Learn", desc: "Ship, measure, iterate — CRO, SEO, creative testing." },
              ].map((s) => (
                <div
                  key={s.step}
                  className="group relative rounded-2xl border bg-background/60 backdrop-blur p-5 md:p-6 shadow-[0_0_0_1px_hsl(var(--border)/.35)] 
                       transition-transform duration-300 hover:-translate-y-1 hover:[transform:perspective(900px)_rotateX(3deg)_rotateY(-3deg)]"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent 
                             [background:linear-gradient(#000,transparent),linear-gradient(to_right,#60a5fa,#a78bfa,#22d3ee)] 
                             [background-clip:padding-box,_border-box] border border-transparent" />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      left: "var(--mx, -9999px)",
                      top: "var(--my, -9999px)",
                      background: "radial-gradient(closest-side, rgba(99,102,241,0.14), rgba(99,102,241,0) 65%)",
                    }}
                  />
                  <div className="relative">
                    <div className="text-xs text-muted-foreground mb-2">Step {s.step}</div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </Element>

        <style jsx>{`
          @keyframes timeline {
            0% { transform: translateX(-30%); }
            100% { transform: translateX(130%); }
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
