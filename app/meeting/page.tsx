// /app/meeting/page.tsx
"use client";

import Firestore from "./firestore";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const aiServices = [
  {
    title: "AI-Driven SEO Solutions",
    description:
      "Boost your website’s visibility across India with AI-optimized SEO strategies. Our algorithms analyze market trends and keywords on a national scale, driving higher search rankings and relevant organic traffic.",
  },
  {
    title: "AI-Based Website Development",
    description:
      "Get responsive, conversion-focused websites crafted through AI-assisted design and development. We embed automated SEO features and personalized UX to maximize user engagement and business growth.",
  },
  {
    title: "AI-Enhanced Social Media Marketing",
    description:
      "Reach and engage audiences on platforms like Instagram, Facebook, LinkedIn, and YouTube with AI-powered content scheduling, targeting, and analytics. Our insights help you connect with the right demographics across India for stronger brand presence.",
  },
  {
    title: "AI-Powered Performance Marketing",
    description:
      "Maximize your advertising ROI with predictive AI campaign management. Real-time optimization, automated budget allocation, and conversion tracking ensure the best results across diverse Indian markets.",
  },
  {
    title: "AI-Optimized Google My Business (GMB) Management",
    description:
      "Dominate local searches nationwide with AI-enhanced GMB strategies. Automated keyword mapping, reputation management, and competitor analysis position your business for top local visibility.",
  },
  {
    title: "AI-Driven Content Creation",
    description:
      "Produce engaging, SEO-friendly content at scale using AI tools. Blogs, social posts, and ad copy are tailored to resonate with varied audiences across India, boosting reach and search rankings.",
  },
  {
    title: "AI-Powered Branding & Design",
    description:
      "Build a compelling brand identity powered by AI-driven creative design. Using data insights and real product images, we create visuals and branding elements that appeal broadly yet precisely.",
  },
  {
    title: "AI-Assisted Analytics & Reporting",
    description:
      "Monitor multi-channel campaign performance through intelligent AI dashboards. Automated, real-time reports provide actionable insights to optimize your digital strategies continually.",
  },
  {
    title: "AI-Powered Google Ads Management",
    description:
      "Harness Google's AI-driven advertising tools to reach customers effectively across Search, Display, YouTube, and more. Our AI algorithms optimize bidding, target high-value audiences, and generate dynamic ad creatives for smarter, cost-effective campaigns tailored to India’s diverse market.",
  },
  {
    title: "AI-Powered Meta (Facebook & Instagram) Ads",
    description:
      "Leverage AI-enhanced social advertising to connect with your target customers on Facebook and Instagram. Our AI optimizes audience segmentation, adapts creatives in real time, and integrates cross-platform campaign management to maximize engagement and conversions nationwide.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Meeting() {
  return (
    <div
      className="
        relative min-h-screen w-full overflow-hidden pt-20
      "
    >
      {/* GLOBAL BG – GRID + GLOWS */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
      >
        {/* subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/.25)_1px,transparent_1px)] bg-[size:18px_24px]" />

        {/* top-left glow */}
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/30 via-sky-400/20 to-emerald-400/20 blur-3xl" />

        {/* bottom-right glow */}
        <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-500/30 via-indigo-500/20 to-cyan-400/25 blur-3xl" />
      </div>

      {/* slow rotating conic aura */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-[40%] opacity-60"
        style={{
          backgroundImage:
            "conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.12), rgba(45,212,191,0.16), rgba(129,140,248,0.14), transparent 65%)",
        }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      {/* scan line sweep */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-20%] top-0 h-40 bg-gradient-to-b from-white/14 via-white/0 to-transparent mix-blend-screen"
        initial={{ y: "-120%" }}
        animate={{ y: ["-120%", "220%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* floating orbs around form zone */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[32%] hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/25 via-sky-400/20 to-cyan-400/20 blur-3xl"
          animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* PAGE CONTENT WRAPPER */}
      <main className="relative z-10">
        {/* Hero + Form */}
        <motion.section
          className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] md:mt-14 mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div
            className="
              md:flex items-start justify-between gap-y-10 gap-x-16
              rounded-3xl border border-border/70 bg-background/80 backdrop-blur-2xl
              shadow-[0_26px_80px_rgba(15,23,42,0.85)] px-5 py-8 md:px-9 md:py-10
              relative overflow-hidden
            "
          >
            {/* inner glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-[26px] opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(129,140,248,0.18),transparent_55%)",
              }}
            />

            {/* Left section – copy */}
            <div className="relative md:w-1/2 pt-4 md:pt-6">
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                NetrX Digital · Strategy Call
              </motion.p>

              <motion.h1
                className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Let&apos;s talk about{" "}
                <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  growth
                </span>
                , not just clicks.
              </motion.h1>

              <motion.p
                className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
              >
                Book a free, no-pressure meeting to audit your current marketing,
                uncover quick wins, and map out a clear, AI-powered plan to grow
                your brand online.
              </motion.p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "AI + Performance at the core",
                    description:
                      "We combine AI, automation, and performance marketing so every rupee you spend is tracked, optimized, and justified.",
                  },
                  {
                    title: "Built for Indian markets",
                    description:
                      "From Patna to metro cities, our systems are tuned for India’s search behaviour, platforms, and buyer psychology.",
                  },
                  {
                    title: "Clarity, not jargon",
                    description:
                      "You walk away from the call with a simple, actionable roadmap—even if we don’t work together.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={checkItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.25 + index * 0.15, duration: 0.35 }}
                    className="flex gap-x-4 py-2"
                  >
                    <PiCheckCircle className="rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="mt-6 text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 0.7 }}
              >
                Trusted by fast-moving businesses who care about ROI, not vanity metrics.
              </motion.p>
            </div>

            {/* Right section – form (floating card) */}
            <motion.div
              className="relative md:w-1/2 md:max-w-md w-full md:mt-0 mt-8"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.55, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              {/* glow behind form */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/30 via-sky-400/20 to-indigo-500/25 blur-2xl opacity-70"
              />
              <div className="relative rounded-2xl border border-border/70 bg-card/95 backdrop-blur-xl p-4 md:p-5 shadow-[0_18px_45px_rgba(15,23,42,0.85)]">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Step 1 · Tell us about your business
                </div>
                <Firestore />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* AI-Powered Services Section */}
        <section className="mt-16 md:mt-24 pb-16 md:pb-24">
          <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] mx-auto">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Our AI-Powered Services
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-foreground">
                How NetrX Digital uses AI to grow brands across India
              </h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground">
                From SEO and websites to ads and analytics, every service is powered by
                AI, data, and performance-focused execution—built specifically for
                Indian markets and real business outcomes.
              </p>
            </motion.div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {aiServices.map((service, idx) => (
                <motion.div
                  key={service.title}
                  className="
                    group relative h-full rounded-2xl border border-border/70
                    bg-card/80 backdrop-blur-sm p-5 md:p-6
                    shadow-[0_10px_28px_rgba(15,23,42,0.25)]
                    transition-transform duration-300
                    hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.5)]
                  "
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: 0.05 * idx, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-sky-400/0 to-indigo-500/0 opacity-0 group-hover:opacity-100 group-hover:from-blue-500/7 group-hover:via-sky-400/7 group-hover:to-indigo-500/7 transition-opacity duration-300" />
                  <div className="relative">
                    <h3 className="text-sm md:text-base font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border/60 bg-background/90 backdrop-blur-xl">
        <Footer />
      </footer>
    </div>
  );
}