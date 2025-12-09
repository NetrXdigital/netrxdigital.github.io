// app/blog/performance-marketing-101/page.tsx
import type { Metadata as MD2 } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: MD2 = {
  title:
    "Performance Marketing for Medical Practices in Patna | PPC, CRO & Landing Pages",
  description:
    "A practical guide for Patna clinics: PPC, landing page optimization, CRO, and tracking to drive appointments with measurable ROI.",
  keywords: [
    "performance marketing Patna",
    "medical marketing Patna",
    "PPC for doctors",
    "clinic marketing Patna",
    "healthcare PPC",
    "conversion rate optimization",
    "landing page optimization",
    "Google Ads for clinics",
    "patient lead generation",
    "physiotherapist marketing Patna",
    "dentist marketing Patna",
  ],
  alternates: { canonical: "/blogs-digital-and-performace-marketing/performance-marketing-101" },
  openGraph: {
    title: "Performance Marketing 101 for Medical Practices in Patna",
    description:
      "Reach the right patients with PPC, high-converting landing pages, and clean tracking. A no-nonsense playbook for clinics.",
    images: ["/images/blogs/performance-marketing-101.webp"],
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <BlogLayout
      slug="performance-marketing-101"
      title="Performance Marketing 101 for Medical Practices in Patna"
      description="Reach the right patients using PPC, CRO, and fast landing pages—measured by real appointments."
      publishDate="2025-08-05"
      imageUrl="/images/blogs/performance-marketing-101.webp"
      toc={[
        { id: "intro", label: "Why it matters in Patna" },
        { id: "definition", label: "What is Performance Marketing?" },
        { id: "components", label: "Core Components" },
        { id: "how-to", label: "How to Launch" },
        { id: "why-patna", label: "Why It’s Crucial for Patna Clinics" },
        { id: "seo-tips", label: "Quick SEO Tips" },
      ]}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.618fr)_minmax(0,1fr)] xl:gap-12">
        {/* ========== MAIN CONTENT (≈1.618) ========== */}
        <article className="space-y-10">
          {/* HERO / INTRO CARD */}
          <section
            id="intro"
            className="
              relative overflow-hidden rounded-3xl border border-border/70
              bg-gradient-to-br from-background via-background/90 to-background/70
              shadow-[0_18px_45px_rgba(15,23,42,0.28)]
              px-6 py-8 sm:px-8 sm:py-10
            "
          >
            {/* Glow accents */}
            <div className="pointer-events-none absolute -top-20 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/35 via-sky-400/25 to-emerald-400/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-20 h-48 w-48 rounded-full bg-gradient-to-tr from-amber-400/20 via-blue-500/20 to-purple-500/20 blur-3xl" />

            <div className="relative space-y-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-blue-500">
                Patna · Healthcare · Performance Marketing
              </p>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-foreground">
                Performance Marketing 101 for Medical Practices in Patna
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                In the competitive Patna healthcare sector, traditional advertising isn’t enough.
                Patients search online, compare options, and expect clear information before
                choosing a clinic. Performance marketing gives your practice a measurable,
                data-driven way to reach the right patients and turn ad spend into booked
                appointments—not just impressions.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/80 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Estimated read: 5–7 minutes
                </span>
                <span>Best for: clinics in Patna serious about predictable lead flow.</span>
              </div>
            </div>
          </section>

          <section id="definition" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              What Is Performance Marketing?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Performance marketing refers to digital campaigns where you pay for{" "}
              <strong>specific, measurable actions</strong>—like a website visit, form submit,
              WhatsApp chat, or phone call—instead of vague “reach”. Every rupee is tracked and
              tied back to your clinic’s business goals, helping you cut waste and scale only
              what works.
            </p>
          </section>

          <section id="components" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Core Components of Performance Marketing
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside">
              <li>
                <strong>Pay-Per-Click (PPC) Ads:</strong> Google or Meta ads that appear when
                potential patients search for services like “pediatrician Patna” or “best
                physiotherapist near me”. You’re charged only when someone clicks.
              </li>
              <li>
                <strong>Social Media Campaigns:</strong> Target audiences by location, age,
                interests, and health concerns on platforms like Instagram and Facebook to drive
                enquiries and DM leads.
              </li>
              <li>
                <strong>Landing Page Optimisation:</strong> Fast, focused pages designed for ONE
                clear action—call, WhatsApp, or book an appointment. Tight ad-to-page messaging,
                mobile-first layout, and trust elements (photos, reviews, credentials).
              </li>
              <li>
                <strong>Conversion Rate Optimisation (CRO):</strong> A/B test headlines, images,
                forms, CTAs, and sections to increase the percentage of visitors who become
                patients.
              </li>
              <li>
                <strong>Tracking &amp; Analytics:</strong> Clean event tracking (calls, forms,
                chats) with dashboards that show exactly which campaign generated which patient.
              </li>
            </ul>
          </section>

          <section id="how-to" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              How to Launch a Successful Performance Marketing Campaign
            </h2>
            <ol className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-decimal list-inside">
              <li>
                <strong>Set Clear Goals:</strong> Decide whether the campaign is meant to drive
                bookings, calls, or awareness for a specific service (e.g., knee replacement,
                skin treatment, IVF).
              </li>
              <li>
                <strong>Know Your Audience:</strong> Define ideal patients by location, age, income
                band, and symptoms. Messaging for a physiotherapy patient is different from a
                cosmetic dermatology patient.
              </li>
              <li>
                <strong>Choose the Right Channels:</strong> Use Google Ads for high-intent search,
                Meta for discovery and retargeting, and WhatsApp as a frictionless follow-up
                channel.
              </li>
              <li>
                <strong>Build High-Converting Landing Pages:</strong> One service per page,
                social-proof rich (reviews, photos, credentials), with click-to-call and WhatsApp
                CTAs above the fold.
              </li>
              <li>
                <strong>Monitor &amp; Optimise:</strong> Track impressions, clicks, conversion
                rate, cost-per-lead (CPL), and cost-per-appointment. Turn off poor performers and
                scale winners.
              </li>
            </ol>
          </section>

          <section id="why-patna" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Why Is Performance Marketing Crucial for Patna Clinics?
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside">
              <li>
                <strong>Patients compare options:</strong> People now search “best skin doctor
                Patna” and check reviews before calling. You need visibility at that exact
                decision moment.
              </li>
              <li>
                <strong>Data-Driven Decisions:</strong> See instantly which campaigns, keywords,
                and creatives bring real appointment calls—and which waste money.
              </li>
              <li>
                <strong>Higher ROI:</strong> Invest only in funnels backed by data. Stop guessing;
                scale what reliably generates new patients.
              </li>
              <li>
                <strong>Scalable Growth:</strong> Once the funnel works in one area (e.g.,
                Kankarbagh), you can expand to Boring Road, Bailey Road, and beyond.
              </li>
            </ul>
          </section>

          <section id="seo-tips" className="space-y-3 border-t border-border/60 pt-6 mt-4">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Quick SEO Tips to Support Performance Marketing
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside">
              <li>
                Target high-intent, location-based keywords like “best skin doctor Patna”,
                “dentist Boring Road”, “physiotherapist near Kankarbagh”.
              </li>
              <li>
                Optimise landing pages for speed, mobile UX, clinic photos, doctor profiles, and
                visible reviews to lift trust and conversion rate.
              </li>
              <li>
                Collect and showcase patient testimonials and before/after stories across pages,
                Google reviews, and social.
              </li>
            </ul>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              With performance marketing, medical practices in Patna can move beyond guesswork and
              grow with measurable, targeted campaigns.{" "}
              <Link href="/" aria-label="NetrX Digital Homepage" className="underline underline-offset-4">
                NetrX Digital
              </Link>{" "}
              helps clinics set up PPC, landing pages, and analytics for sustained ROI and
              predictable patient acquisition.
            </p>
          </section>
        </article>

        {/* ========== SIDEBAR (≈1) ========== */}
        <aside className="space-y-6 lg:space-y-7">
          {/* Who this guide is for */}
          <div className="rounded-2xl border border-border/70 bg-card/90 p-5 sm:p-6 shadow-[0_12px_32px_rgba(15,23,42,0.26)]">
            <h3 className="text-sm font-semibold text-foreground">Who This Guide Is For</h3>
            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed list-disc list-inside">
              <li>Multi-speciality hospitals in Patna</li>
              <li>Single-speciality clinics (skin, dental, ortho, eye)</li>
              <li>Physiotherapists and diagnostic centres</li>
              <li>New clinics entering competitive localities</li>
            </ul>
          </div>

          {/* Channel mix cheat sheet */}
          <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-background to-background p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-foreground">Recommended Channel Mix</h3>
            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed list-disc list-inside">
              <li>Google Search Ads for high-intent symptom/service queries</li>
              <li>Meta Ads for awareness, remarketing, and video explainers</li>
              <li>WhatsApp &amp; call CTAs for fast patient follow-ups</li>
              <li>Local SEO for sustained organic visibility in Patna</li>
            </ul>
          </div>

          {/* Metrics to track */}
          <div className="rounded-2xl border border-border/70 bg-card/90 p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-foreground">Key Metrics to Track</h3>
            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed list-disc list-inside">
              <li>Impressions → Clicks → Leads → Booked Appointments</li>
              <li>Cost per lead (CPL) and cost per appointment</li>
              <li>Conversion rate (landing page &amp; calls)</li>
              <li>Repeat patients and average revenue per patient</li>
            </ul>
          </div>

          {/* Budget guidance */}
          <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-background to-background p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-foreground">Practical Budget Ranges</h3>
            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed list-disc list-inside">
              <li>Starter clinics: ₹10,000–₹20,000/month to test funnels</li>
              <li>Growing practices: ₹25,000–₹50,000/month on proven services</li>
              <li>Established hospitals: ₹50,000+/month across multiple specialties</li>
            </ul>
          </div>
        </aside>
      </div>
    </BlogLayout>
  );
}
