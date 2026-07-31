import type { Metadata } from "next";
import { ArrowRight, Bot, CheckCircle2, Gauge, Globe2, SearchCheck, Sparkles } from "lucide-react";

import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Products | Website Auditor & SEO Intelligence",
  description: "Explore NetrX products, starting with an AI-powered website auditor and SEO intelligence platform for technical audits, Core Web Vitals, SERP insights, and AI visibility.",
  alternates: { canonical: "/products" },
};

const capabilities = [
  { icon: Globe2, title: "Website crawler", copy: "Crawl the pages that matter, map your site, discover broken links and redirects, and compare rendered and request HTML." },
  { icon: SearchCheck, title: "Technical SEO audit", copy: "Find high-impact issues across titles, descriptions, headings, canonicals, indexability, content, and internal links." },
  { icon: Gauge, title: "Performance and visibility", copy: "Review Core Web Vitals, SERP and keyword signals, and how your brand appears in AI-powered answers." },
];

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070816] pt-24 text-[#eef1ff]">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(91,127,255,.2),transparent_25%),radial-gradient(circle_at_85%_35%,rgba(179,116,255,.16),transparent_28%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:42px_42px]" />

      <main className="relative">
        <section className="mx-auto grid min-h-[620px] w-[min(1180px,calc(100%-48px))] items-center gap-14 py-20 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/5 px-3 py-2 text-[10px] font-medium uppercase tracking-[.18em] text-cyan-200"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(108,229,215,.9)]" />NetrX products</p>
            <h1 className="max-w-3xl font-serif text-6xl leading-[.92] tracking-tight sm:text-7xl lg:text-8xl">See the signal.<span className="block text-[#c9a6ff]">Shape what&apos;s next.</span></h1>
            <p className="mt-8 max-w-xl text-base font-light leading-8 text-[#adb3d1] sm:text-lg">NetrX products turn complex digital signals into systems your team can understand, trust, and act on?from website intelligence today to autonomous growth operations tomorrow.</p>
            <a href="https://websiteaudit.netrxai.com" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5b8cff] to-[#9a58f4] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(91,127,255,.3)] transition hover:-translate-y-0.5">Open Web Auditor <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="relative mx-auto grid h-[400px] w-full max-w-[500px] place-items-center rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(91,127,255,.20),rgba(12,14,32,.35)_48%,transparent_70%)]">
            <div className="absolute h-[88%] w-[88%] rounded-full border border-dashed border-[#7c9bff]/25" /><div className="absolute h-[66%] w-[66%] rounded-full border border-[#c9a6ff]/20" />
            <div className="relative rounded-3xl border border-white/15 bg-[#11142b]/90 px-8 py-7 text-center shadow-[0_30px_90px_rgba(0,0,0,.45)] backdrop-blur"><p className="text-[10px] uppercase tracking-[.18em] text-[#adb3d1]">NetrX intelligence</p><p className="mt-2 font-serif text-4xl">Signal ? Action</p><p className="mt-5 inline-flex items-center gap-2 text-xs text-cyan-200"><span className="h-2 w-2 rounded-full bg-cyan-300" />Systems online</p></div>
            <div className="absolute left-0 top-12 rounded-xl border border-white/10 bg-[#11142b]/85 px-4 py-3 text-xs shadow-xl"><span className="block text-[10px] uppercase tracking-widest text-[#777d9f]">Input 01</span>Web intelligence</div>
            <div className="absolute bottom-10 right-0 rounded-xl border border-white/10 bg-[#11142b]/85 px-4 py-3 text-xs shadow-xl"><span className="block text-[10px] uppercase tracking-widest text-[#777d9f]">Output</span>Confident action</div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0c0e20]/80 py-24">
          <div className="mx-auto w-[min(1180px,calc(100%-48px))]">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="text-xs uppercase tracking-[.2em] text-[#7c9bff]">Available now / 01</p><h2 className="mt-5 font-serif text-5xl leading-none sm:text-6xl">Web <span className="text-[#6ce5d7]">Auditor.</span></h2></div><p className="max-w-xl text-base font-light leading-8 text-[#adb3d1]">An AI-powered website auditor and SEO tool that shows how search engines, users, and AI systems experience your site. One crawl brings technical SEO, visibility, content, performance, and competitive signals into focus.</p></div>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
              <div className="rounded-3xl border border-[#7c9bff]/25 bg-[linear-gradient(145deg,rgba(24,28,55,.94),rgba(12,15,35,.95))] p-8 shadow-2xl"><div className="flex items-center justify-between"><div className="grid h-16 w-16 place-items-center rounded-2xl border border-[#7c9bff]/25 bg-[#7c9bff]/10 text-[#7c9bff]"><SearchCheck className="h-8 w-8" /></div><span className="rounded-full border border-cyan-200/20 bg-cyan-200/5 px-3 py-2 text-[10px] uppercase tracking-widest text-cyan-200">Live now</span></div><h3 className="mt-10 font-serif text-5xl">Website intelligence</h3><p className="mt-5 max-w-2xl text-sm font-light leading-7 text-[#adb3d1]">Crawl your website, uncover technical SEO issues, and turn site health, Core Web Vitals, SERP, and AI visibility signals into practical next steps.</p><ul className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">{["Technical SEO and site health", "AI visibility and GEO scoring", "SERP rank intelligence", "Actionable AI recommendations"].map((feature) => <li key={feature} className="flex items-center gap-2 text-sm text-[#adb3d1]"><CheckCircle2 className="h-4 w-4 text-[#7c9bff]" />{feature}</li>)}</ul><a href="https://websiteaudit.netrxai.com" className="mt-9 inline-flex w-full items-center justify-between rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-medium transition hover:border-[#7c9bff]/60 hover:bg-[#7c9bff]/10">Launch Web Auditor <ArrowRight className="h-4 w-4" /></a></div>
              <div className="rounded-3xl border border-[#c9a6ff]/20 bg-[linear-gradient(145deg,rgba(30,20,54,.8),rgba(12,15,35,.95))] p-8"><Bot className="h-10 w-10 text-[#c9a6ff]" /><p className="mt-10 text-xs uppercase tracking-[.2em] text-[#c9a6ff]">In development</p><h3 className="mt-3 font-serif text-4xl">Google Ads Bots</h3><p className="mt-5 text-sm font-light leading-7 text-[#adb3d1]">Always-on agents that watch campaign health, surface wasted spend, and turn performance changes into timely actions?with human control where it matters.</p></div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[min(1180px,calc(100%-48px))] py-24"><p className="text-xs uppercase tracking-[.2em] text-[#7c9bff]">Website intelligence</p><h2 className="mt-5 max-w-3xl font-serif text-5xl leading-none sm:text-6xl">A website crawler and <span className="text-[#c9a6ff]">SEO tool</span> built for action.</h2><div className="mt-14 grid border-y border-white/10 md:grid-cols-3">{capabilities.map(({ icon: Icon, title, copy }, index) => <article key={title} className="border-white/10 py-8 md:px-8 md:first:pl-0 md:not-last:border-l"><span className="text-xs text-[#7c9bff]">0{index + 1}</span><Icon className="mt-10 h-8 w-8 text-[#7c9bff]" /><h3 className="mt-6 font-serif text-3xl">{title}</h3><p className="mt-4 text-sm font-light leading-7 text-[#adb3d1]">{copy}</p></article>)}</div></section>

        <section className="mx-auto mb-24 w-[min(1180px,calc(100%-48px))] rounded-3xl border border-[#7c9bff]/25 bg-[radial-gradient(circle_at_85%_25%,rgba(124,155,255,.24),transparent_30%),linear-gradient(135deg,#171b42,#11142b)] p-8 sm:p-12"><Sparkles className="h-8 w-8 text-[#6ce5d7]" /><p className="mt-8 text-xs uppercase tracking-[.2em] text-[#6ce5d7]">Start with a clearer website</p><div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="max-w-2xl font-serif text-5xl leading-none sm:text-6xl">Turn your next crawl into your next advantage.</h2><a href="https://websiteaudit.netrxai.com" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#11142b]">Open Web Auditor <ArrowRight className="h-4 w-4" /></a></div></section>
      </main>
      <Footer />
    </div>
  );
}
