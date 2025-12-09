// app/blog/seo-basics-for-medical-practices-in-patna/page.tsx
import type { Metadata as MD } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: MD = {
  title:
    "SEO Basics for Medical Practices in Patna: Essential Strategies for Digital Success | Blog",
  description:
    "No fluff. A practical guide for clinics in Patna to rank on Google: local SEO, E-E-A-T, technical SEO, and content that drives patient appointments.",
  keywords: [
    "SEO for doctors in Patna",
    "medical SEO Patna",
    "healthcare SEO strategies",
    "clinic SEO tips",
    "digital marketing for clinics",
    "increase patient appointments online",
    "local SEO for doctors",
    "NetrX Digital healthcare marketing",
    "best dental clinic SEO",
    "skin specialist SEO Patna",
  ],
  alternates: { canonical: "/blogs-digital-and-performace-marketing/seo-basics-for-medical-practices" },
  openGraph: {
    title: "SEO Basics for Medical Practices in Patna",
    description:
      "Essential SEO strategies for clinics in Patna to win local search and book more appointments.",
    images: ["/images/blogs/seo-basics-for-medical-practices.webp"],
    type: "article",
  },
};

export default function Page() {
  return (
    <BlogLayout
      slug="seo-basics-for-medical-practices"
      title="SEO Basics for Medical Practices in Patna: Essential Strategies for Digital Success"
      description="In Patna’s fast-evolving healthcare landscape, SEO is essential for attracting new patients and building trust. Here’s the no-nonsense playbook."
      publishDate="2025-08-01"
      updatedDate="2025-08-27"
      imageUrl="/images/blogs/seo-basics-for-medical-practices.webp"
      toc={[
        { id: "intro", label: "Overview" },
        { id: "what-is-medical-seo", label: "What Is Medical SEO & Why It Matters" },
        { id: "essential-strategies", label: "Essential SEO Strategies" },
        { id: "local-listings", label: "1) Claim & Optimise Local Listings" },
        { id: "keyword-research", label: "2) Keyword Research" },
        { id: "content", label: "3) Create Helpful Content" },
        { id: "ux", label: "4) Improve Website Experience" },
        { id: "eeat", label: "5) Build E-E-A-T" },
        { id: "technical", label: "6) Technical SEO" },
        { id: "why-now", label: "Why Focus on SEO Now?" },
        { id: "cta", label: "Work With NetrX Digital" },
      ]}
    >
      {/* --- GRID SYSTEM BASED ON GOLDEN RATIO (1.618:1) --- */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.618fr)_minmax(0,1fr)] xl:gap-12">

        {/* ------------------------ MAIN CONTENT ------------------------ */}
        <article className="space-y-10">

          {/* HERO CARD */}
          <section
            id="intro"
            className="
              relative rounded-3xl px-6 py-8 sm:px-8 sm:py-10 border border-border/60
              bg-gradient-to-br from-background via-background/95 to-background/70
              shadow-[0_18px_45px_rgba(15,23,42,0.25)]
              overflow-hidden
            "
          >
            {/* GLOWS */}
            <div className="absolute -top-20 -right-16 h-48 w-48 bg-gradient-to-br from-blue-500/30 to-sky-400/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 h-52 w-52 bg-gradient-to-tr from-amber-400/25 to-purple-500/25 blur-3xl" />

            <div className="relative space-y-4">
              <p className="text-[10px] uppercase tracking-[0.25em] text-blue-500">
                Medical SEO · Patna · 2025
              </p>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                SEO Basics for Medical Practices in Patna
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                More patients are searching online before visiting any clinic.
                Ranking on Google is no longer optional—it’s a survival requirement
                in Patna’s fast-growing healthcare market.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 border-border/60">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full" />
                  5–6 min read
                </span>
                <span>Ideal for doctors scaling online patient flow.</span>
              </div>
            </div>
          </section>

          {/* ---------------------- SECTION CONTENT ---------------------- */}

          <section id="what-is-medical-seo" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              What Is Medical SEO and Why Does It Matter?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Medical SEO ensures your clinic appears when patients search for symptoms,
              treatments, or specialists in Patna. Strong SEO helps you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>Increase visibility for health-related searches</li>
              <li>Build trust and credibility in your speciality</li>
              <li>Drive consistent appointment bookings</li>
            </ul>
          </section>

          <section id="essential-strategies">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Essential SEO Strategies for Medical Websites
            </h2>
          </section>

          <section id="local-listings" className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold">1) Claim & Optimise Local Listings</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Local SEO drives maximum footfall.
              Keep NAP details consistent across GBP, Justdial, Practo, Sulekha, and other directories.
            </p>
          </section>

          <section id="keyword-research" className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold">2) Keyword Research</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Target local search terms such as:
              “skin specialist Patna”, “dentist Kankarbagh”, “orthopedic near Boring Road”.
            </p>
          </section>

          <section id="content" className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold">3) Create Helpful Content</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Publish content around common symptoms, treatments, FAQs, recovery guides,
              and doctor-explained medical insights. Google values accuracy + expertise.
            </p>
          </section>

          <section id="ux" className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold">4) Improve Website Experience</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Prioritise mobile speed, secure HTTPS, simple navigation,
              and one-tap appointment booking.
            </p>
          </section>

          <section id="eeat" className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold">5) Build E-E-A-T</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Highlight doctor qualifications, experience, awards, patient success stories,
              and medically reviewed content. This boosts rankings + trust.
            </p>
          </section>

          <section id="technical" className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold">6) Technical SEO</h3>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>Optimise meta titles & descriptions</li>
              <li>Use proper alt text for medical images</li>
              <li>Implement LocalBusiness & MedicalOrganization schema</li>
              <li>Fix broken links and crawl errors</li>
            </ul>
          </section>

          <section id="why-now" className="space-y-3 border-t border-border/60 pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Why Focus on SEO Now?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Patna’s healthcare competition is rising fast. Clinics that invest in SEO today
              secure top visibility, long-term rankings, and consistent patient flow.
            </p>
          </section>

          <section id="cta" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">For Clinics That Want Results</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              NetrX Digital helps clinics dominate search results using ethical,
              advanced healthcare SEO—with measurable growth and more appointments.
            </p>
          </section>
        </article>

        {/* ------------------------ SIDEBAR ------------------------ */}
        <aside className="space-y-6 lg:space-y-7">

          <div className="rounded-2xl border border-border/70 p-6 bg-card/90 shadow">
            <h3 className="text-sm font-semibold">Best For</h3>
            <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground list-disc list-inside">
              <li>Clinics wanting predictable patient flow</li>
              <li>New medical practices in Patna</li>
              <li>Doctors running ads but not ranking organically</li>
              <li>Healthcare brands building authority</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-500/30 p-6 bg-gradient-to-br from-blue-500/10 to-background">
            <h3 className="text-sm font-semibold">Quick Optimization Checklist</h3>
            <ul className="mt-2 text-xs list-disc list-inside text-muted-foreground space-y-1.5">
              <li>Accurate GBP profile</li>
              <li>Local keywords in H1 + meta title</li>
              <li>Fast-loading mobile UI</li>
              <li>Schema for clinic details</li>
              <li>Doctor credentials visible</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 p-6 bg-gradient-to-br from-emerald-500/10 to-background">
            <h3 className="text-sm font-semibold">High-Impact SEO Actions</h3>
            <ul className="mt-2 text-xs text-muted-foreground list-disc list-inside space-y-1.5">
              <li>Add patient reviews monthly</li>
              <li>Publish 2 blogs per month</li>
              <li>Fix technical issues quarterly</li>
              <li>Track rankings for top keywords</li>
            </ul>
          </div>
        </aside>
      </div>
    </BlogLayout>
  );
}
