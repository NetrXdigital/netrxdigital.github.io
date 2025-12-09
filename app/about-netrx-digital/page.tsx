"use client";

import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import NumberTicker from "@/components/magicui/number-ticker";
import { IconStarFilled } from "@tabler/icons-react";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div
      className="
        overflow-clip
        inset-0
        -z-10 h-full w-full
        bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
        bg-[size:14px_24px]
      "
    >


      {/* HERO – GOLDEN RATIO SPLIT (ANIMATED) */}
      {/* HERO – FUTURISTIC GOLDEN RATIO */}
      <main className="pt-20 pb-16">
        <div className="mx-6 md:px-0 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
        relative overflow-hidden rounded-3xl border border-border/70
        bg-gradient-to-br from-background via-background/95 to-background/80
        shadow-[0_22px_55px_rgba(15,23,42,0.55)]
        px-6 py-10 sm:px-10 sm:py-14
      "
          >
            {/* SCAN LINE */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-x-[-20%] top-0 h-32 bg-gradient-to-b from-white/16 via-white/0 to-transparent mix-blend-screen"
              initial={{ y: "-120%" }}
              animate={{ y: ["-120%", "210%"] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />

            {/* ROTATING AURORA RING */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-40 rounded-[3rem] opacity-60"
              style={{
                backgroundImage:
                  "conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.09), rgba(45,212,191,0.18), rgba(129,140,248,0.16), transparent 70%)",
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* FLOATING PARTICLE FIELD */}
            <div className="pointer-events-none absolute inset-0">
              {Array.from({ length: 14 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-cyan-300/70 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
                  style={{
                    top: `${10 + (i * 7) % 80}%`,
                    left: `${(i * 17) % 100}%`,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: [0.1, 1, 0.2], y: [0, -12, 0] }}
                  transition={{
                    duration: 3 + (i % 5),
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: i * 0.22,
                  }}
                />
              ))}
            </div>

            {/* MAIN GRID – GOLDEN SPLIT */}
            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.618fr)_minmax(0,1fr)] items-center">
              {/* LEFT SIDE – COPY / CTA */}
              <div className="space-y-6 relative z-10">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AI-powered growth studio
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.55, ease: "easeOut" }}
                  className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-foreground"
                >
                  We blend{" "}
                  <span className="text-blue-500 inline-flex items-center gap-1">
                    strategy
                    <Image
                      src="/icons/squiggle.svg"
                      width={100}
                      height={100}
                      className="w-7 h-7"
                      alt="decorative squiggle"
                    />
                    &amp; execution
                  </span>{" "}
                  to build brands that actually grow.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.26, duration: 0.45 }}
                  className="text-base md:text-lg text-muted-foreground max-w-xl"
                >
                  NetrX Digital is an AI-powered performance marketing studio from Patna.
                  We design and run systems that turn attention into measurable revenue
                  for doctors, founders, and local brands across India.
                </motion.p>

                {/* CTA ROW */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.34, duration: 0.4 }}
                  className="flex flex-wrap gap-4 text-sm md:text-base"
                >
                  <Link
                    href="/meeting"
                    className="
                inline-flex items-center justify-center rounded-xl
                bg-foreground text-background px-6 py-3
                font-medium
                shadow-[0_18px_40px_rgba(15,23,42,0.7)]
                hover:translate-y-0.5 hover:shadow-[0_12px_32px_rgba(15,23,42,0.8)]
                transition
              "
                  >
                    Book a strategy call
                  </Link>
                  <Link
                    href="/showcase"
                    className="
                inline-flex items-center justify-center rounded-xl
                border border-border/80 bg-background/80 px-6 py-3
                font-medium text-foreground
                hover:bg-background hover:shadow-[0_10px_28px_rgba(15,23,42,0.55)]
                transition
              "
                  >
                    View our client work
                  </Link>
                </motion.div>

                {/* SOCIAL PROOF STRIP */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42, duration: 0.35 }}
                  className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted-foreground"
                >
                  <div className="inline-flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IconStarFilled
                        key={i}
                        className="h-3.5 w-3.5 text-amber-400"
                      />
                    ))}
                    <span className="ml-1 font-medium text-foreground">4.9 / 5</span>
                    <span className="opacity-80">based on client feedback</span>
                  </div>
                  <span className="hidden md:inline-block h-3 w-px bg-border/70" />
                  <span>Built for founders, doctors, and high-intent local brands.</span>
                </motion.div>
              </div>

              {/* RIGHT SIDE – FLOATING LOGO PANEL */}
              <div className="relative z-10">
                {/* floating card with subtle breathing + hover tilt */}
                <motion.div
                  className="aspect-[1.618/1] rounded-3xl border border-border bg-card/80 backdrop-blur flex items-center justify-center overflow-hidden relative"
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{ delay: 0.28, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
                  style={{ transformStyle: "preserve-3d" as any }}
                >
                  {/* inner breathing glow */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-[1px] rounded-[1.45rem]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at 100% 100%, rgba(129,140,248,0.22), transparent 55%)",
                    }}
                    animate={{ opacity: [0.4, 0.9, 0.4] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10"
                  >
                    <Image
                      src="/logo/logo.webp"
                      width={10}
                      height={10}
                      className="object-contain w-full h-full p-6"
                      alt="NetrX Digital logo"
                    />
                  </motion.div>
                </motion.div>

                {/* ORBITING DATA CHIPS */}
                <div className="pointer-events-none absolute inset-0">
                  <motion.div
                    className="absolute -right-6 top-6 rounded-2xl border border-blue-500/40 bg-blue-500/15 px-3 py-2 text-[11px] text-blue-100 shadow-[0_0_18px_rgba(59,130,246,0.8)]"
                    initial={{ opacity: 0, x: 16, y: -8 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    +220% leads (healthcare)
                  </motion.div>

                  <motion.div
                    className="absolute -left-4 bottom-10 rounded-2xl border border-emerald-500/40 bg-emerald-500/15 px-3 py-2 text-[11px] text-emerald-100 shadow-[0_0_16px_rgba(16,185,129,0.8)]"
                    initial={{ opacity: 0, x: -16, y: 8 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                  >
                    AI-optimised funnels
                  </motion.div>

                  <motion.div
                    className="absolute right-10 -bottom-3 rounded-full border border-amber-400/50 bg-amber-400/15 px-3 py-1.5 text-[10px] text-amber-100"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Live testing 24/7
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>


      {/* OUR STORY – 1.618 TEXT / 1 IMAGE */}
      <section className="py-20 bg-card/80">
        <div className="mx-6 md:px-0 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.618fr)_minmax(0,1fr)] items-center">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500">
                Our story
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-card-foreground">
                From a single laptop in Patna to a performance-driven studio
                serving brands across India.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                NetrX started with one simple belief: marketing should be
                accountable. No vanity dashboards, no guesswork — just clear
                creative plus clean tracking tied to revenue.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Today we help clinics, gyms, ecommerce brands and local
                businesses build online systems that attract the right people,
                nurture trust, and convert interest into booked calls and sales.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Every engagement is treated like a long-term partnership. We
                plan, launch, and iterate as if your ad budget and brand
                reputation are our own.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[5/4] rounded-3xl border border-border bg-slate-950/80 shadow-xl overflow-hidden flex items-center justify-center">
                {/* animated grid glow */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="absolute -top-24 -left-20 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/35 via-sky-400/25 to-emerald-400/25 blur-3xl" />
                  <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-gradient-to-tr from-amber-400/25 via-purple-500/25 to-blue-500/25 blur-3xl" />
                </div>

                {/* central “core” */}
                <motion.div
                  className="relative h-40 w-40 md:h-48 md:w-48 rounded-full border border-blue-400/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-[0_0_40px_rgba(59,130,246,0.65)] flex items-center justify-center"
                  initial={{ scale: 0.9, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                >
                  {/* inner pulse */}
                  <motion.div
                    className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500"
                    initial={{ scale: 0.7, opacity: 0.4 }}
                    animate={{ scale: 1, opacity: 0.9 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  />

                  {/* orbit lines */}
                  <motion.div
                    className="absolute inset-2 rounded-full border border-blue-400/40"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-5 rounded-full border border-cyan-400/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                  />

                  {/* orbiting “data nodes” */}
                  <motion.div
                    className="absolute -top-3 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                    animate={{ rotate: 360 }}
                    style={{ transformOrigin: "50% 40px" }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute -bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]"
                    animate={{ rotate: -360 }}
                    style={{ transformOrigin: "50% -40px" }}
                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                {/* caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 md:left-6 md:right-6">
                  <div className="rounded-2xl border border-border/70 bg-black/60 backdrop-blur px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.26em] text-blue-400">
                      AI–powered performance engine
                    </p>
                    <p className="mt-1 text-xs md:text-sm text-slate-200">
                      Real-time insights, experimentation, and optimisation loops — the kind of backend thinking we plug into every NetrX campaign.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* IMPACT STATS – GOLDEN BLOCKS */}
      <section className="py-20">
        <div className="mx-6 md:px-0 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">
              Our impact in numbers
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Every campaign is tracked end-to-end. Here’s what that looks like
              when the numbers compound.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.618fr)_minmax(0,1fr)]">
            {/* Big stat card */}
            <div className="rounded-3xl border border-border bg-card/90 p-8 md:p-10 shadow-[0_18px_40px_rgba(15,23,42,0.25)] flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">
                  Compounding outcomes
                </p>
                <h3 className="mt-3 text-4xl md:text-5xl font-semibold text-blue-500 flex items-end gap-2">
                  <NumberTicker value={50} />+
                  <span className="text-lg text-foreground font-normal">
                    active &amp; past clients
                  </span>
                </h3>
                <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl">
                  From healthcare and fitness to recommerce and real estate, we
                  focus on one thing: measurable lift in leads, revenue, and
                  brand recall.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm md:text-base">
                <div className="rounded-2xl border border-border/70 bg-background/80 p-4">
                  <p className="text-2xl md:text-3xl font-semibold text-blue-500 flex items-end gap-1">
                    <NumberTicker value={70} />+
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    projects shipped end-to-end
                  </p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/80 p-4">
                  <p className="text-2xl md:text-3xl font-semibold text-blue-500 flex items-end gap-1">
                    <NumberTicker value={99} />%
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    of clients stay beyond first phase
                  </p>
                </div>
              </div>
            </div>

            {/* Smaller column */}
            <div className="grid gap-6">
              <div className="rounded-3xl border border-border bg-card/90 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">
                  Experience
                </p>
                <p className="mt-3 text-4xl md:text-5xl font-semibold text-blue-500">
                  <NumberTicker value={3} />+
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  years building growth systems for Indian businesses
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-background to-background p-7 text-sm md:text-base text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">
                  What we optimise for:
                </p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Lower cost per lead / acquisition</li>
                  <li>Higher quality enquiries and calls</li>
                  <li>Clean tracking and honest reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES – 3 FIBONACCI CARDS */}
      <section className="py-20 bg-card">
        <div className="mx-6 md:px-0 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-card-foreground">
              What drives us
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              These principles sit behind every decision, creative, and campaign
              we ship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation first",
                body: "We constantly test new creative, formats, and tools so your brand stays ahead of algorithm changes and market fatigue.",
              },
              {
                title: "Client-centric",
                body: "We design systems around your goals and constraints, not our case studies. Expect honest feedback, not just yes-man energy.",
              },
              {
                title: "Results driven",
                body: "Pretty doesn’t matter unless it performs. Every page and ad is built to move a metric: calls, bookings, or revenue.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  text-center p-8 rounded-3xl bg-muted/50 border border-border/70
                  hover:shadow-[0_18px_38px_rgba(15,23,42,0.25)]
                  hover:-translate-y-1 transition
                "
              >
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-5">
                  <PiCheckBold className="text-3xl text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM – SIMPLE GOLDEN GRID */}
      <section className="py-20">
        <div className="mx-6 md:px-0 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">
              Meet the team
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Three leaders. One mission: build an agency that feels like an
              in-house growth team — not an outsourced vendor.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.618fr)_minmax(0,1fr)]">

            {/* TEAM MEMBERS GRID */}
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">

              {/* PRASHANT */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border border-border/80">
                  <Image
                    src="/images/team/ceo.webp"
                    width={128}
                    height={128}
                    alt="Prashant Kumar – CEO & Co-founder"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Prashant Kumar
                </h3>
                <p className="text-sm text-muted-foreground">
                  CEO &amp; Co-founder · Strategy &amp; Growth
                </p>
              </div>

              {/* ANMOL */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border border-border/80">
                  <Image
                    src="/images/team/cto.webp"
                    width={128}
                    height={128}
                    alt="Anmol Dhar – CTO & Co-founder"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Anmol Dhar
                </h3>
                <p className="text-sm text-muted-foreground">
                  CTO &amp; Co-founder · Tech &amp; Automation
                </p>
              </div>

              {/* PRADEEP (NEW MEMBER) */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border border-border/80">
                  <Image
                    src="/images/team/deep.webp"
                    width={128}
                    height={128}
                    alt="Pradeep Singh – Managing Partner AI & Engineering"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Pradeep Singh
                </h3>
                <p className="text-sm text-muted-foreground">
                  Managing Partner · AI &amp; Software Engineering
                </p>
              </div>

            </div>

            {/* SIDE CONTENT BOX */}
            <div className="rounded-3xl border border-border bg-card/90 p-7 md:p-8 text-sm md:text-base text-muted-foreground space-y-3">
              <p className="font-semibold text-foreground">How we work with you:</p>
              <p>
                You always work directly with founders & partners — not layers of
                junior managers. This keeps communication sharp, decisions fast,
                and strategy consistent.
              </p>
              <p>
                Expect transparent reporting, weekly insights, and a team that
                behaves like an internal growth arm of your business.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* WHY CHOOSE NETRX */}
      <section className="py-20 bg-card">
        <div className="mx-6 md:px-0 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.618fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-4 text-card-foreground">
                Why brands choose NetrX
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl">
                With more than twenty happy clients and dozens of shipped
                projects, we understand what it takes to move the needle for
                small and mid-size Indian businesses.
              </p>

              <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>
                    Full-funnel focus — from ad impression to booked call or
                    checkout.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>
                    AI-assisted research, creative, and optimisation for faster
                    testing cycles.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>
                    Obsession with numbers — cost per lead, revenue per channel,
                    and long-term brand search growth.
                  </span>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/meeting"
                  className="
                    py-3.5 px-8 text-sm md:text-base rounded-xl
                    bg-[#121212] text-white border-2 border-black dark:border-white
                    hover:bg-[#abcbff] hover:text-black
                    transition duration-200
                    hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]
                    dark:hover:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]
                  "
                >
                  Let&apos;s work together
                </Link>
                <Link
                  href="/showcase"
                  className="
                    py-3.5 px-8 text-sm md:text-base rounded-xl
                    bg-background border-2 border-black dark:border-white
                    text-foreground
                    hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]
                    dark:hover:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]
                    transition duration-200
                  "
                >
                  Explore our work
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-3xl border border-border/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 md:p-7 shadow-[0_18px_40px_rgba(15,23,42,0.55)] overflow-hidden"
            >
              {/* animated border glow */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-[1px] rounded-[1.6rem] border border-transparent"
                style={{
                  backgroundImage:
                    "conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.1), rgba(45,212,191,0.25), rgba(129,140,248,0.2), transparent 70%)",
                }}
                initial={{ rotate: 0, opacity: 0.7 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              />

              {/* subtle grid + glow */}
              <div className="absolute inset-0 opacity-25">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:18px_18px]" />
                <div className="absolute -top-24 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/40 via-cyan-400/30 to-indigo-500/40 blur-3xl" />
              </div>

              {/* content */}
              <div className="relative space-y-4 text-sm md:text-base text-slate-200">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-blue-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AI-powered insights for smarter marketing decisions
                </div>

                <p className="font-semibold text-base md:text-lg text-slate-50">
                  At NetrX Digital, we design every strategy by combining human creativity
                  with machine intelligence. From predicting audience behaviour to identifying
                  high-intent opportunities — our systems optimise your growth in real time.
                </p>

                {/* animated “signal” bars */}
                <div className="mt-3 space-y-2">
                  {[
                    { label: "Campaign accuracy", target: 94 },
                    { label: "Audience targeting strength", target: 89 },
                    { label: "Lead-to-conversion efficiency", target: 93 },
                  ].map((item, idx) => (
                    <div key={item.label} className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        <span>{item.label}</span>
                        <span>{item.target}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.target}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1 + idx * 0.2,
                            ease: "easeOut",
                            delay: 0.1 + idx * 0.1,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* tiny footer copy */}
                <p className="pt-2 text-[11px] text-slate-400/90">
                  These metrics evolve as your campaigns evolve — ensuring your business
                  grows with precision, not guesswork.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}
