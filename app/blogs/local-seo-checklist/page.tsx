// app/blog/local-seo-checklist/page.tsx
import type { Metadata as MD4 } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: MD4 = {
  title: "Local SEO Checklist for Patna Clinics | NetrX Digital",
  description:
    "Actionable Local SEO checklist for Patna clinics: Google Business Profile, location keywords, mobile speed, schema, citations, social, and measurement.",
  alternates: { canonical: "/blog/local-seo-checklist" },
  keywords: [
    "Local SEO Patna",
    "Patna clinics SEO",
    "Google Business Profile Patna",
    "GMB Patna",
    "local citations Patna",
    "Patna healthcare marketing",
    "dental clinic SEO Patna",
    "physiotherapy center in Patna",
    "skin specialist Patna SEO",
    "Kankarbagh clinics",
    "Boring Road clinics",
    "Bailey Road clinics",
  ],
  openGraph: {
    title: "Local SEO Checklist for Patna Clinics | NetrX Digital",
    description:
      "Step-by-step Local SEO playbook for Patna healthcare businesses to drive appointments.",
    url: "/blog/local-seo-checklist",
    type: "article",
    images: ["/images/blogs/local-seo-checklist.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Checklist for Patna Clinics | NetrX Digital",
    description:
      "Step-by-step Local SEO playbook for Patna healthcare businesses to drive appointments.",
    images: ["/images/blogs/local-seo-checklist.webp"],
  },
};

export default function Page() {
  return (
    <BlogLayout
      slug="local-seo-checklist"
      title="Local SEO Checklist for Patna Businesses: Boost Your Clinic’s Online Visibility"
      description="A practical, conversion-focused Local SEO checklist tailored for Patna clinics and healthcare businesses."
      publishDate="2025-08-12"
      imageUrl="/images/blogs/local-seo-checklist.webp"
      toc={[
        { id: "gbp", label: "Claim & Optimise GBP" },
        { id: "keywords", label: "Location Keywords" },
        { id: "mobile-speed", label: "Mobile & Speed" },
        { id: "localized-content", label: "Localized Content" },
        { id: "citations", label: "Citations & Listings" },
        { id: "schema", label: "Local Schema" },
        { id: "social", label: "Local Social Groups" },
        { id: "monitor", label: "Monitor & Adjust" },
      ]}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.618fr)_minmax(0,1fr)] xl:gap-12">
        {/* ========== MAIN CONTENT (≈1.618) ========== */}
        <article className="space-y-10">
          {/* HERO / INTRO */}
          <section
            id="intro"
            className="
              relative overflow-hidden rounded-3xl border border-border/70
              bg-gradient-to-br from-background via-background/90 to-background/70
              shadow-[0_18px_45px_rgba(15,23,42,0.28)]
              px-6 py-8 sm:px-8 sm:py-10
            "
          >
            {/* subtle blobs */}
            <div className="pointer-events-none absolute -top-20 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/35 via-sky-400/25 to-emerald-400/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-20 h-48 w-48 rounded-full bg-gradient-to-tr from-amber-400/20 via-blue-500/20 to-purple-500/20 blur-3xl" />

            <div className="relative space-y-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-blue-500">
                Patna · Clinics · Local SEO Checklist
              </p>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-foreground">
                Local SEO Checklist for Patna Clinics: Turn Nearby Searches into Booked Appointments
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                For clinics and healthcare businesses in Patna, Local SEO is the gateway to
                attracting nearby patients who are actively searching for your services. Done
                right, it’s the difference between being discovered instantly—or getting buried
                under competitors. This checklist gives you a clear, action-focused roadmap.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/80 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Estimated read: 5–7 minutes
                </span>
                <span>Ideal for: clinics in Kankarbagh, Boring Road, Bailey Road &amp; more.</span>
              </div>
            </div>
          </section>

          <section id="gbp" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              1. Claim and Optimise Your Google Business Profile (GBP)
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside">
              <li>
                Ensure your clinic’s NAP (Name, Address, Phone Number) is accurate and identical
                across Google Business Profile and all directories.
              </li>
              <li>
                Add a detailed business description using local keywords such as “best dental
                clinic Patna” or “skin specialist near Patna City.”
              </li>
              <li>Upload high-quality photos of your clinic, staff, and services.</li>
              <li>Keep business hours and special announcements updated.</li>
              <li>Encourage satisfied patients to leave reviews; reply to every review.</li>
            </ul>
          </section>

          <section id="keywords" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              2. Use Location-Based Keywords Strategically
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside">
              <li>
                Include Patna-specific keywords in titles, meta descriptions, headers, and copy.
              </li>
              <li>
                Target neighbourhoods like Kankarbagh, Boring Road, Bailey Road, Mithapur, Rajendra Nagar, etc.
              </li>
              <li>
                Use long-tail queries tied to local health concerns (e.g., “physiotherapy center
                in Patna”, “dentists near Mithapur”).
              </li>
            </ul>
          </section>

          <section id="mobile-speed" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              3. Optimise Website for Mobile and Speed
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside">
              <li>Make the site fully responsive for mobile users.</li>
              <li>Use PageSpeed Insights to diagnose and fix slow resources.</li>
              <li>
                Compress images, lazy-load media, and ship less JavaScript to cut load times and
                improve Core Web Vitals.
              </li>
            </ul>
          </section>

          <section id="localized-content" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              4. Create Localised, Patient-Focused Content
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside">
              <li>Publish blogs on health topics relevant to Patna residents.</li>
              <li>
                Feature local events, patient success stories, and community health tips.
              </li>
              <li>
                Use clear language and real outcomes to build trust, not generic medical jargon.
              </li>
            </ul>
          </section>

          <section id="citations" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              5. Build Local Citations and Listings
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside">
              <li>
                List your clinic on Justdial, Sulekha, Practo, and credible Patna directories.
              </li>
              <li>Maintain absolute NAP consistency to strengthen local authority.</li>
            </ul>
          </section>

          <section id="schema" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              6. Use Schema Markup for Local Business
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside">
              <li>
                Add <code>LocalBusiness</code> schema (name, logo, address, geo, hours,
                services).
              </li>
              <li>
                Rich results can improve visibility and CTR from local SERPs, especially for
                clinic-related searches.
              </li>
            </ul>
          </section>

          <section id="social" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              7. Engage in Local Social Media Groups
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside">
              <li>
                Join Patna-based Facebook/WhatsApp communities; share educational tips, clinic
                updates, and seasonal health advice.
              </li>
              <li>
                Social signals don’t directly rank you—but they drive branded searches and repeat
                traffic.
              </li>
            </ul>
          </section>

          <section id="monitor" className="space-y-3 border-t border-border/60 pt-6 mt-4">
            <h2 className="text-xl sm:text-2xl font-semibold">
              8. Monitor, Measure, and Adjust Regularly
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside">
              <li>Use Google Analytics and Search Console to track local traffic and queries.</li>
              <li>
                Double down on pages/keywords that drive appointment calls and form submissions.
              </li>
              <li>
                Review GBP insights monthly—calls, direction requests, and discovery searches.
              </li>
            </ul>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              For Patna’s growing healthcare market, mastering Local SEO is crucial. This
              checklist helps clinics rank higher locally and convert searches into real
              patients.{" "}
              <Link href="/" aria-label="NetrX Digital Home" className="underline underline-offset-4">
                NetrX Digital
              </Link>{" "}
              specialises in customised Local SEO strategies that grow Patna-based practices with
              measurable results.
            </p>
          </section>
        </article>

        {/* ========== SIDEBAR (≈1) ========== */}
        <aside className="space-y-6 lg:space-y-7">
          {/* Who this checklist is for */}
          <div className="rounded-2xl border border-border/70 bg-card/90 p-5 sm:p-6 shadow-[0_12px_32px_rgba(15,23,42,0.26)]">
            <h3 className="text-sm font-semibold text-foreground">Who This Is For</h3>
            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed list-disc list-inside">
              <li>Multi-speciality clinics in Patna</li>
              <li>Dental, skin, eye, and physiotherapy centres</li>
              <li>Diagnostic labs and pathology centres</li>
              <li>Solo practitioners building local presence</li>
            </ul>
          </div>

          {/* Quick wins */}
          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-background to-background p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-foreground">Quick Wins (Do These First)</h3>
            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed list-disc list-inside">
              <li>Fully complete Google Business Profile</li>
              <li>Add 15–20 real clinic photos</li>
              <li>Get 10+ genuine patient reviews</li>
              <li>Fix NAP consistency everywhere</li>
            </ul>
          </div>

          {/* Geo coverage */}
          <div className="rounded-2xl border border-border/70 bg-card/90 p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-foreground">
              Patna Neighbourhoods to Target
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Include these locations naturally in your content and metadata where relevant:
            </p>
            <ul className="mt-2 columns-2 gap-2 text-xs sm:text-[13px] text-muted-foreground leading-relaxed list-disc list-inside">
              <li>Kankarbagh</li>
              <li>Boring Road</li>
              <li>Bailey Road</li>
              <li>Rajendra Nagar</li>
              <li>Mithapur</li>
              <li>Patliputra</li>
              <li>Fraser Road</li>
              <li>Patna City</li>
            </ul>
          </div>

          {/* Review cadence */}
          <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-background to-background p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-foreground">Review Cadence</h3>
            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed list-disc list-inside">
              <li>Weekly: Check reviews &amp; GBP updates</li>
              <li>Monthly: Audit top pages, queries &amp; conversions</li>
              <li>Quarterly: Refresh content &amp; photos</li>
            </ul>
          </div>
        </aside>
      </div>
    </BlogLayout>
  );
}
