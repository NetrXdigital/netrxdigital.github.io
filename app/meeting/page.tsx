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

const Meeting = () => {
  return (
    <div
      className="
        overflow-clip min-h-screen
        bg-background text-foreground
        bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)]
        bg-[size:14px_24px]
        pt-20
      "
    >
      {/* Hero + Form */}
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] md:mt-14 mx-auto">
        <div className="md:flex items-start justify-between gap-y-10 gap-x-16">
          {/* Left section – copy */}
          <div className="md:w-1/2 pt-6 md:pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
              NetrX Digital · Strategy Call
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Let&apos;s talk about <span className="text-blue-500">growth</span>,
              not just clicks.
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl">
              Book a free, no-pressure meeting to audit your current marketing, uncover
              quick wins, and map out a clear, AI-powered plan to grow your brand online.
            </p>

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
                  transition={{ delay: index * 0.18 }}
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

            <p className="mt-6 text-xs text-muted-foreground">
              Trusted by fast-moving businesses who care about ROI, not vanity metrics.
            </p>
          </div>

          {/* Right section – form */}
          <div className="md:w-1/2 md:max-w-md w-full md:mt-0 mt-8">
            <Firestore />
          </div>
        </div>
      </div>

      {/* AI-Powered Services Section */}
      <section className="mt-16 md:mt-24 pb-16 md:pb-24">
        <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
              Our AI-Powered Services
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-foreground">
              How NetrX Digital uses AI to grow brands across India
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              From SEO and websites to ads and analytics, every service is powered by AI,
              data, and performance-focused execution—built specifically for Indian
              markets and real business outcomes.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {aiServices.map((service) => (
              <div
                key={service.title}
                className="
                  group relative h-full rounded-2xl border border-border/70
                  bg-card/80 backdrop-blur-sm p-5 md:p-6
                  shadow-[0_10px_28px_rgba(15,23,42,0.25)]
                  transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.35)]
                "
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-sky-400/0 to-indigo-500/0 opacity-0 group-hover:opacity-100 group-hover:from-blue-500/5 group-hover:via-sky-400/5 group-hover:to-indigo-500/5 transition" />
                <div className="relative">
                  <h3 className="text-sm md:text-base font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Meeting;
