"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bot,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Code2,
  FileSpreadsheet,
  Gauge,
  Globe2,
  Link2,
  ListChecks,
  Radar,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { MotionConfig, motion, useReducedMotion, type Variants } from "framer-motion";

import { BorderBeam } from "@/components/ui/border-beam";
import { pushGtmEvent } from "@/lib/gtm";

const AUDITOR_URL = "https://websiteaudit.netrxai.com";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const signals = [
  "Technical SEO",
  "Site architecture",
  "Core Web Vitals",
  "SERP rankings",
  "AI visibility",
  "Rendered HTML",
  "Internal links",
  "Action plan",
];

const features: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}> = [
  {
    icon: Globe2,
    title: "Crawl the site that users actually see",
    description:
      "Map pages, redirects, broken paths, depth, and internal links across your website.",
    accent: "from-cyan-400/20 to-blue-500/5",
  },
  {
    icon: SearchCheck,
    title: "Find technical SEO blockers",
    description:
      "Review titles, descriptions, headings, canonicals, indexability, robots, and status codes.",
    accent: "from-blue-500/20 to-indigo-500/5",
  },
  {
    icon: Code2,
    title: "Compare request and rendered HTML",
    description:
      "See where JavaScript changes content, links, metadata, or the experience search engines receive.",
    accent: "from-violet-500/20 to-fuchsia-500/5",
  },
  {
    icon: Gauge,
    title: "Connect performance to pages",
    description:
      "Bring Core Web Vitals and page-level performance signals into the same audit workflow.",
    accent: "from-amber-400/20 to-orange-500/5",
  },
  {
    icon: Radar,
    title: "Check search and AI visibility",
    description:
      "Inspect keyword positions, matched URLs, brand answers, and competitive GEO signals.",
    accent: "from-emerald-400/20 to-cyan-500/5",
  },
  {
    icon: Bot,
    title: "Turn findings into next actions",
    description:
      "Ask AI about your report, understand why an issue matters, and prioritize the fixes worth doing first.",
    accent: "from-fuchsia-400/20 to-violet-500/5",
  },
];

const workflow = [
  {
    number: "01",
    title: "Create your account",
    description: "Sign up, verify your email, and open your private audit workspace.",
  },
  {
    number: "02",
    title: "Run the free demo",
    description: "Enter your website and see the crawler, report, SERP, GEO, and Ask AI workflow in action.",
  },
  {
    number: "03",
    title: "Go deeper when ready",
    description: "Unlock a full crawl only when you need it. No recurring subscription or long-term commitment.",
  },
];

const demoIncludes = [
  "100 crawled pages",
  "1 SERP keyword check",
  "1 brand + 1 competitive GEO question",
  "2 Ask AI questions",
];

const fullIncludes = [
  "1 complete crawl up to 500 pages",
  "Technical SEO + rendered-content analysis",
  "10 SERP keyword checks",
  "10 GEO questions",
  "₹20 Ask AI balance",
];

const faqs = [
  {
    question: "Is the demo really free?",
    answer:
      "Yes. Create an account and verify your email to use the one-time 100-page demo crawl. No payment card is required for the demo.",
  },
  {
    question: "What does the full ₹100 audit include?",
    answer:
      "The pay-as-you-go package includes one crawl of up to 500 pages, technical SEO and rendered-content analysis, 10 SERP keyword checks, 10 GEO questions, and ₹20 of Ask AI balance.",
  },
  {
    question: "What happens after I enter my website?",
    answer:
      "The crawler follows your site's accessible pages and builds a report covering structure, metadata, indexability, performance, search visibility, AI visibility, and prioritized issues. You can watch crawl progress in the app.",
  },
  {
    question: "Do I need to install anything on my website?",
    answer:
      "No. Web Auditor runs in the browser and audits the public website URL you provide. There is no plugin or code snippet to install on the site being audited.",
  },
];

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  placement: string;
  children: ReactNode;
};

function TrackedLink({ placement, children, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      href={AUDITOR_URL}
      onClick={(event) => {
        pushGtmEvent("product_cta_click", { cta_placement: placement });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
      </span>
      {children}
    </p>
  );
}

function AuditPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.94, y: reduceMotion ? 0 : 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[580px] lg:ml-auto"
      aria-label="Illustrative Web Auditor report preview"
    >
      <motion.div
        aria-hidden
        className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(90,132,255,.25),transparent_68%)] blur-2xl"
        animate={reduceMotion ? undefined : { scale: [0.94, 1.05, 0.94], opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#0d1025]/90 p-3 shadow-[0_40px_120px_rgba(0,0,0,.55)] backdrop-blur-xl sm:p-4">
        <BorderBeam size={240} duration={13} colorFrom="#6ce5d7" colorTo="#9a77ff" />

        <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55">
            Example audit
          </span>
        </div>

        <div className="grid gap-3 pt-3 sm:grid-cols-[1.08fr_.92fr]">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <motion.div
              aria-hidden
              className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_18px_rgba(108,229,215,.8)]"
              animate={reduceMotion ? { top: "42%" } : { top: ["8%", "92%", "8%"] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">Technical health</p>
                <p className="mt-2 text-sm font-medium text-white">Audit score</p>
              </div>
              <Activity className="h-5 w-5 text-cyan-300" />
            </div>

            <div className="mt-6 flex items-center gap-5">
              <div className="relative grid h-28 w-28 shrink-0 place-items-center rounded-full bg-[conic-gradient(#6ce5d7_0_86%,rgba(255,255,255,.08)_86%_100%)] p-[7px]">
                <div className="grid h-full w-full place-items-center rounded-full bg-[#10142c]">
                  <div className="text-center">
                    <span className="text-3xl font-semibold text-white">86</span>
                    <span className="block text-[9px] uppercase tracking-widest text-white/40">of 100</span>
                  </div>
                </div>
              </div>
              <div className="min-w-0 space-y-3 text-xs">
                <div>
                  <div className="mb-1.5 flex justify-between gap-4 text-white/60"><span>SEO</span><span>88%</span></div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-[#7c9bff]" initial={{ width: 0 }} whileInView={{ width: "88%" }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.35 }} /></div>
                </div>
                <div>
                  <div className="mb-1.5 flex justify-between gap-4 text-white/60"><span>Vitals</span><span>74%</span></div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-[#c9a6ff]" initial={{ width: 0 }} whileInView={{ width: "74%" }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.5 }} /></div>
                </div>
                <div>
                  <div className="mb-1.5 flex justify-between gap-4 text-white/60"><span>GEO</span><span>68%</span></div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-[#6ce5d7]" initial={{ width: 0 }} whileInView={{ width: "68%" }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.65 }} /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-white/40">Live crawler</span>
                <span className="flex items-center gap-1.5 text-[10px] text-cyan-200"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />Scanning</span>
              </div>
              <div className="relative mt-5 flex items-center justify-between px-2">
                <div className="absolute left-7 right-7 top-1/2 h-px bg-white/10" />
                <motion.div
                  aria-hidden
                  className="absolute left-7 top-1/2 h-px bg-gradient-to-r from-cyan-300 to-violet-400"
                  animate={reduceMotion ? { width: "calc(100% - 3.5rem)" } : { width: [0, "calc(100% - 3.5rem)", 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                />
                {[Globe2, Link2, FileSpreadsheet].map((Icon, index) => (
                  <motion.span
                    key={index}
                    className="relative z-10 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-[#151a37] text-[#8aa7ff]"
                    animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.35, ease: "easeInOut" }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.span>
                ))}
              </div>
              <p className="mt-4 text-xs text-white/45">100 pages scanned in the demo workspace</p>
            </div>

            <div className="rounded-2xl border border-violet-300/15 bg-[linear-gradient(135deg,rgba(124,155,255,.12),rgba(201,166,255,.06))] p-4">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-300/10 text-violet-200"><Sparkles className="h-4 w-4" /></span>
                <div>
                  <p className="text-xs font-medium text-white">Prioritized next action</p>
                  <p className="mt-1 text-[11px] leading-5 text-white/45">Fix indexability first, then improve the pages closest to conversion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -left-4 top-[28%] hidden rounded-xl border border-white/10 bg-[#11152d]/90 px-3 py-2 shadow-xl backdrop-blur md:block"
        animate={reduceMotion ? undefined : { y: [0, -9, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="font-mono text-[8px] uppercase tracking-widest text-white/35">Detected</p>
        <p className="mt-1 text-[11px] text-rose-200">Broken internal link</p>
      </motion.div>

      <motion.div
        className="absolute -bottom-5 right-8 hidden rounded-xl border border-cyan-300/15 bg-[#11152d]/90 px-3 py-2 shadow-xl backdrop-blur sm:block"
        animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 4.4, repeat: Infinity, delay: 0.6, ease: "easeInOut" }}
      >
        <p className="flex items-center gap-2 text-[11px] text-cyan-100"><CheckCircle2 className="h-3.5 w-3.5" />Action plan ready</p>
      </motion.div>
    </motion.div>
  );
}

export default function ProductLanding() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative isolate overflow-hidden bg-[#070816] pb-24 text-[#eef1ff] selection:bg-[#7c9bff]/35 selection:text-white md:pb-0">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[1050px] bg-[radial-gradient(circle_at_12%_16%,rgba(91,127,255,.23),transparent_31%),radial-gradient(circle_at_84%_18%,rgba(181,109,255,.18),transparent_30%),linear-gradient(180deg,#070816_0%,#090b1b_70%,#070816_100%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] opacity-30 [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <motion.div aria-hidden className="pointer-events-none absolute -left-40 top-56 -z-10 h-80 w-80 rounded-full bg-blue-500/15 blur-[100px]" animate={reduceMotion ? undefined : { x: [0, 90, 0], y: [0, -35, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div aria-hidden className="pointer-events-none absolute -right-32 top-[520px] -z-10 h-96 w-96 rounded-full bg-violet-500/15 blur-[120px]" animate={reduceMotion ? undefined : { x: [0, -75, 0], y: [0, 40, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />

        <section className="mx-auto grid min-h-[820px] w-[min(1180px,calc(100%-40px))] items-center gap-16 pb-20 pt-36 lg:grid-cols-[1.02fr_.98fr] lg:pb-24 lg:pt-40">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={reveal}><Eyebrow>AI-powered website audit · Live now</Eyebrow></motion.div>
            <motion.h1 variants={reveal} className="mt-7 max-w-[760px] font-serif text-[clamp(3.3rem,7vw,6.35rem)] leading-[0.91] tracking-[-0.045em] text-white">
              Find what is holding your website back.
              <span className="mt-2 block bg-gradient-to-r from-[#8aa7ff] via-[#c9a6ff] to-[#6ce5d7] bg-clip-text italic text-transparent">Know what to fix next.</span>
            </motion.h1>
            <motion.p variants={reveal} className="mt-7 max-w-2xl text-base font-light leading-8 text-[#adb3d1] sm:text-lg">
              Crawl your site once and turn technical SEO, Core Web Vitals, SERP rankings, rendered content, and AI visibility into one prioritized action plan.
            </motion.p>
            <motion.div variants={reveal} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <TrackedLink placement="hero_primary" className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#638cff] to-[#975cf0] px-6 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(91,127,255,.32)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(91,127,255,.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#070816]">
                Run your free demo audit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </TrackedLink>
              <a href="#what-you-get" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/12 bg-white/[0.035] px-6 text-sm font-medium text-white/75 transition hover:border-white/25 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                See what it checks
              </a>
            </motion.div>
            <motion.div variants={reveal} className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/50">
              {["Free 100-page demo", "No card required", "₹100 full crawl", "No subscription"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-cyan-300" />{item}</span>
              ))}
            </motion.div>
          </motion.div>

          <AuditPreview />
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] py-5" aria-label="Web Auditor signal coverage">
          <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] flex-col gap-4 overflow-hidden md:flex-row md:items-center">
            <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">One crawl · connected signals</span>
            <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
              <motion.div className="flex w-max items-center gap-6 pr-6" animate={reduceMotion ? undefined : { x: [0, -620] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
                {[...signals, ...signals].map((signal, index) => (
                  <span key={`${signal}-${index}`} className="inline-flex items-center gap-6 whitespace-nowrap text-xs text-white/55">
                    {signal}<i className="h-1 w-1 rounded-full bg-[#7c9bff]" />
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="what-you-get" className="mx-auto w-[min(1180px,calc(100%-40px))] scroll-mt-20 py-24 sm:py-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal} className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7c9bff]">From noise to next action</p>
              <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl">Stop guessing where your website is leaking growth.</h2>
            </div>
            <p className="max-w-2xl text-base font-light leading-8 text-[#adb3d1] lg:ml-auto">
              Most audit tools leave you with disconnected scores and a long checklist. Web Auditor connects the crawl, the evidence, and the business impact so your team can move from finding issues to fixing the right ones.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={stagger} className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description, accent }) => (
              <motion.article key={title} variants={reveal} whileHover={reduceMotion ? undefined : { y: -7 }} className={`group relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${accent} p-6 transition-colors hover:border-white/20`}>
                <div aria-hidden className="absolute inset-0 bg-[#0d1023]/80 transition-opacity group-hover:opacity-75" />
                <div className="relative flex h-full flex-col">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.055] text-[#9db3ff]"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-10 text-xl font-semibold leading-snug text-white">{title}</h3>
                  <p className="mt-3 text-sm font-light leading-6 text-white/50">{description}</p>
                  <span className="mt-auto pt-7 font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-200/55">Included in your report</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="how-it-works" className="relative scroll-mt-20 border-y border-white/10 bg-[#0b0d1d] py-24 sm:py-32">
          <div aria-hidden className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(124,155,255,.35)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
          <div className="relative mx-auto w-[min(1180px,calc(100%-40px))]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6ce5d7]">Simple by design</p>
              <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em] sm:text-6xl">From URL to useful answers in three steps.</h2>
              <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-8 text-[#adb3d1]">Explore the product before paying, then unlock the deeper crawl only when the workflow makes sense for you.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="relative mt-16 grid gap-5 lg:grid-cols-3">
              <div aria-hidden className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-transparent via-[#7c9bff]/45 to-transparent lg:block" />
              {workflow.map((step) => (
                <motion.article key={step.number} variants={reveal} className="relative rounded-2xl border border-white/10 bg-[#11142a]/80 p-6 backdrop-blur">
                  <span className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-[#7c9bff]/25 bg-[#7c9bff]/10 font-mono text-sm text-[#9db3ff] shadow-[0_0_35px_rgba(124,155,255,.12)]">{step.number}</span>
                  <h3 className="mt-8 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm font-light leading-7 text-white/50">{step.description}</p>
                </motion.article>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={reveal} className="mt-10 flex justify-center">
              <TrackedLink placement="workflow" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] px-5 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">
                Start with the free demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </TrackedLink>
            </motion.div>
          </div>
        </section>

        <section id="pricing" className="mx-auto w-[min(1180px,calc(100%-40px))] scroll-mt-20 py-24 sm:py-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#c9a6ff]">Transparent, pay-as-you-go pricing</p>
              <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em] sm:text-6xl">Prove the workflow free. Pay only when you need more depth.</h2>
            </div>
            <p className="max-w-xl text-base font-light leading-8 text-[#adb3d1] lg:ml-auto">No recurring plan and no feature maze. Start with the demo, then buy one complete audit package whenever you need a fresh full crawl.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="mt-14 grid gap-5 lg:grid-cols-2">
            <motion.article variants={reveal} className="rounded-[28px] border border-white/10 bg-[#0d1023] p-7 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-200">Explore first</p>
                  <h3 className="mt-3 text-3xl font-semibold">Free demo crawl</h3>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200"><Zap className="h-5 w-5" /></span>
              </div>
              <div className="mt-8 flex items-end gap-2"><span className="font-serif text-6xl leading-none">₹0</span><span className="pb-1 text-sm text-white/40">one time</span></div>
              <ul className="mt-8 space-y-3 border-t border-white/10 pt-7">
                {demoIncludes.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-white/60"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{item}</li>)}
              </ul>
              <TrackedLink placement="pricing_demo" className="group mt-9 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.055] px-5 text-sm font-semibold transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">
                Run the demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </TrackedLink>
            </motion.article>

            <motion.article variants={reveal} className="relative overflow-hidden rounded-[28px] border border-[#8aa7ff]/35 bg-[radial-gradient(circle_at_85%_5%,rgba(201,166,255,.2),transparent_30%),linear-gradient(145deg,#171b42,#101329)] p-7 shadow-[0_30px_80px_rgba(48,65,145,.2)] sm:p-9">
              <BorderBeam size={260} duration={12} colorFrom="#6ce5d7" colorTo="#c9a6ff" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#aebeff]">Go deeper</p>
                  <h3 className="mt-3 text-3xl font-semibold">Complete audit package</h3>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#7c9bff]/15 text-[#aebeff]"><CircleDollarSign className="h-5 w-5" /></span>
              </div>
              <div className="mt-8 flex items-end gap-2"><span className="font-serif text-6xl leading-none">₹100</span><span className="pb-1 text-sm text-white/45">per package</span></div>
              <ul className="mt-8 space-y-3 border-t border-white/10 pt-7">
                {fullIncludes.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-white/65"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8aa7ff]" />{item}</li>)}
              </ul>
              <TrackedLink placement="pricing_full" className="group mt-9 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-[#11142b] shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#11142b]">
                Open Web Auditor <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </TrackedLink>
            </motion.article>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-xs text-white/45 sm:grid-cols-3 sm:text-center">
            <span className="flex items-center gap-2 sm:justify-center"><ShieldCheck className="h-4 w-4 text-cyan-300" />No card for the demo</span>
            <span className="flex items-center gap-2 sm:justify-center"><BadgeCheck className="h-4 w-4 text-cyan-300" />Payment verified before credits are added</span>
            <span className="flex items-center gap-2 sm:justify-center"><ListChecks className="h-4 w-4 text-cyan-300" />Use packages whenever you need them</span>
          </motion.div>
        </section>

        <section id="faq" className="scroll-mt-20 border-y border-white/10 bg-white/[0.02] py-24 sm:py-32">
          <div className="mx-auto grid w-[min(1040px,calc(100%-40px))] gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7c9bff]">Before you crawl</p>
              <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em]">Clear answers before you start.</h2>
              <p className="mt-5 text-sm font-light leading-7 text-[#adb3d1]">Still deciding? The demo is designed to let the workflow answer the biggest question: is this useful for your website?</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="space-y-3">
              {faqs.map((item) => (
                <motion.details key={item.question} variants={reveal} className="group rounded-2xl border border-white/10 bg-[#0d1023]/80 open:border-[#7c9bff]/30 open:bg-[#11152c]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-sm font-medium text-white marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8aa7ff] sm:text-base">
                    {item.question}<ChevronDown className="h-4 w-4 shrink-0 text-white/40 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="px-5 pb-5 text-sm font-light leading-7 text-white/50">{item.answer}</p>
                </motion.details>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="mx-auto w-[min(1180px,calc(100%-40px))] py-20 sm:py-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} className="relative overflow-hidden rounded-[32px] border border-[#7c9bff]/30 bg-[radial-gradient(circle_at_80%_20%,rgba(108,229,215,.18),transparent_28%),radial-gradient(circle_at_15%_85%,rgba(201,166,255,.2),transparent_30%),linear-gradient(135deg,#171b42,#101329)] p-7 sm:p-12 lg:p-16">
            <div aria-hidden className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:36px_36px]" />
            <motion.div aria-hidden className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-dashed border-cyan-200/20" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }} />
            <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200">Your first crawl is the proof</p>
                <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.96] tracking-[-0.035em] sm:text-6xl">See your website the way search engines, users, and AI systems do.</h2>
                <p className="mt-6 max-w-2xl text-sm font-light leading-7 text-white/55">Create your account, run the free demo, and leave with a clearer idea of what deserves attention next.</p>
              </div>
              <TrackedLink placement="closing" className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[#11142b] shadow-xl transition hover:-translate-y-1 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#11142b]">
                Audit your website free <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </TrackedLink>
            </div>
          </motion.div>
        </section>

        <footer className="border-t border-white/10 py-9">
          <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] flex-col gap-4 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} NetrX Digital. Website intelligence built for action.</p>
            <div className="flex flex-wrap gap-5">
              <a href="#what-you-get" className="transition hover:text-white focus-visible:outline-none focus-visible:text-white">What it checks</a>
              <a href="#pricing" className="transition hover:text-white focus-visible:outline-none focus-visible:text-white">Pricing</a>
              <a href="#faq" className="transition hover:text-white focus-visible:outline-none focus-visible:text-white">FAQ</a>
            </div>
          </div>
        </footer>

        <div className="fixed inset-x-3 bottom-3 z-[90] flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-[#0d1023]/95 p-2.5 pl-4 shadow-[0_16px_50px_rgba(0,0,0,.55)] backdrop-blur-xl md:hidden">
          <div>
            <p className="text-xs font-semibold text-white">Free 100-page demo</p>
            <p className="mt-0.5 text-[10px] text-white/40">No card required</p>
          </div>
          <TrackedLink placement="mobile_sticky" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#638cff] to-[#975cf0] px-4 text-xs font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">
            Start audit <ArrowRight className="h-3.5 w-3.5" />
          </TrackedLink>
        </div>
      </div>
    </MotionConfig>
  );
}
