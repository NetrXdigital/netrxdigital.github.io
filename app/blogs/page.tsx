// app/blog/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";


import {
  FiSearch,
  FiShoppingCart,
  FiTrendingUp,
  FiSettings,
  FiPenTool,
  FiLink,
  FiBarChart2,
  FiTarget,
  FiBookOpen,
  FiZap,
  FiClipboard,
} from "react-icons/fi";
import { motion } from "framer-motion";

type BlogItem = {
  slug: string;
  title: string;
  description: string;
  icon: React.ElementType;
  date: string; // ISO
};

const BLOGS: BlogItem[] = [
  {
    slug: "seo-basics-for-medical-practices",
    title: "SEO Basics for Medical Practices",
    description: "Foundations to rank your clinic and drive appointment leads.",
    icon: FiSearch,
    date: "2025-08-01",
  },
  {
    slug: "performance-marketing-101",
    title: "Performance Marketing 101",
    description: "PPC, tracking, and ROAS—what actually moves the needle.",
    icon: FiTrendingUp,
    date: "2025-08-05",
  },
  {
    slug: "content-that-converts",
    title: "Content that Converts",
    description: "How to turn posts into patients—without sounding salesy.",
    icon: FiPenTool,
    date: "2025-08-10",
  },
  {
    slug: "local-seo-checklist",
    title: "Local SEO Checklist",
    description: "GMB, NAP, reviews, citations—the no-nonsense checklist.",
    icon: FiTarget,
    date: "2025-08-12",
  },
  {
    slug: "brand-positioning-for-clinics",
    title: "Brand Positioning for Clinics",
    description: "Own a niche, charge premium, and stay top-of-mind.",
    icon: FiBookOpen,
    date: "2025-08-15",
  },
  {
    slug: "ecommerce-seo-patna",
    title:
      "SEO for Ecommerce Explained: Increasing Online Visibility (Patna & Bihar)",
    description:
      "A quick guide to Ecommerce SEO in Patna—rank higher, get traffic, boost sales.",
    icon: FiShoppingCart,
    date: "2025-09-02",
  },
   {
    slug: "essential-factors-hiring-agency",
    title: "Essential Factors to Evaluate When Hiring a Digital Marketing Agency in Patna",
    description:
      "Checklist to pick the right agency: portfolio, team, website quality, client results — tailored for Patna businesses.",
    icon: FiClipboard,
    date: "2025-11-12",
  },
];

const TAG_DEFS = [
  { key: "All", label: "All" },
  { key: "SEO", label: "SEO" },
  { key: "Performance", label: "Performance" },
  { key: "Content", label: "Content" },
  { key: "Local", label: "Local" },
  { key: "Ecommerce", label: "E-commerce" },
];

function tagFor(icon: React.ElementType): string {
  switch (icon) {
    case FiSearch:
    case FiSettings:
    case FiLink:
      return "SEO";
    case FiTrendingUp:
    case FiBarChart2:
      return "Performance";
    case FiPenTool:
      return "Content";
    case FiTarget:
    case FiBookOpen:
      return "Local";
    case FiShoppingCart:
      return "Ecommerce";
    default:
      return "SEO";
  }
}

export default function BlogIndexPage() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string>("All");
  const [sort, setSort] = useState<"new" | "old">("new");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = BLOGS.filter((b) => {
      const inTag = tag === "All" || tagFor(b.icon) === tag;
      const inQuery =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q);
      return inTag && inQuery;
    });
    list.sort((a, b) =>
      sort === "new"
        ? +new Date(b.date) - +new Date(a.date)
        : +new Date(a.date) - +new Date(b.date)
    );
    return list;
  }, [query, tag, sort]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Futuristic page background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Neon grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/.22)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/.22)_1px,transparent_1px)] bg-[size:16px_26px]" />
        {/* Glow blobs */}
        <div className="absolute -top-28 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40 bg-[conic-gradient(at_20%_20%,#60a5fa_0deg,#a78bfa_130deg,#22d3ee_260deg,#60a5fa_360deg)]" />
        <div className="absolute -bottom-28 -right-24 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-40 bg-[conic-gradient(at_80%_80%,#f0abfc_0deg,#60a5fa_120deg,#22d3ee_240deg,#f0abfc_360deg)]" />
        {/* Soft scanlines */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:100%_3px] mix-blend-overlay" />
      </div>

      {/* Header */}
      <header className="px-6 md:px-0 md:mx-auto xl:w-4/5 2xl:w-[68%] pt-16 md:pt-20">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground backdrop-blur bg-background/70">
          <FiZap className="h-4 w-4 text-blue-500" />
          <span>AI-curated insights</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-[conic-gradient(at_20%_20%,#60a5fa_0deg,#a78bfa_120deg,#22d3ee_240deg,#60a5fa_360deg)]">
            Blogs & Playbooks
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl">
          Sharp, practical reads on SEO, PPC, and growth — written by humans,
          <span className="text-blue-500"> supercharged by AI</span>.
        </p>
      </header>

      {/* Controls */}
      <div className="px-6 md:px-0 md:mx-auto xl:w-4/5 2xl:w-[68%] mt-8">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          {/* Search */}
          <label className="relative block md:w-[42%]">
            <span className="pointer-events-none absolute inset-y-0 left-3 grid place-items-center">
              <FiSearch className="h-4 w-4 text-muted-foreground" />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics, e.g. local seo, content, ROAS…"
              className="w-full rounded-xl border bg-background/70 backdrop-blur px-9 py-2.5 text-sm shadow-[0_0_0_1px_hsl(var(--border)/.4)] outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </label>

          {/* Tag filters */}
          <div className="flex flex-wrap gap-2">
            {TAG_DEFS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTag(t.key)}
                className={`rounded-full border px-3 py-1.5 text-xs transition
                 ${
                   tag === t.key
                     ? "bg-[conic-gradient(at_20%_20%,#60a5fa_0deg,#a78bfa_120deg,#22d3ee_240deg)] text-white border-transparent"
                     : "bg-background/60 text-muted-foreground hover:text-foreground"
                 }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-muted-foreground">Sort:</span>
            <button
              onClick={() => setSort("new")}
              className={`rounded-full border px-3 py-1.5 ${
                sort === "new"
                  ? "bg-blue-500 text-white border-transparent"
                  : "bg-background/60 text-muted-foreground"
              }`}
            >
              Newest
            </button>
            <button
              onClick={() => setSort("old")}
              className={`rounded-full border px-3 py-1.5 ${
                sort === "old"
                  ? "bg-blue-500 text-white border-transparent"
                  : "bg-background/60 text-muted-foreground"
              }`}
            >
              Oldest
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <ul className="px-6 md:px-0 md:mx-auto xl:w-4/5 2xl:w-[68%] mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(({ slug, title, description, icon: Icon, date }, i) => (
          <motion.li
            key={slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="group"
          >
            <Link
              href={`/blogs/${slug}`}
              className="relative block h-full rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-cyan-400/40
                         shadow-[0_0_30px_-12px_rgba(99,102,241,0.45)]"
            >
              {/* holographic shine */}
              <span
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition
                           bg-[radial-gradient(1200px_180px_at_var(--mx,50%)_-10%,rgba(255,255,255,.08),transparent_60%)]"
                aria-hidden
              />
              <div
                className="relative rounded-2xl h-full bg-[radial-gradient(circle_at_top_left,rgba(30,41,59,0.92),rgba(17,24,39,0.96))]
                           backdrop-blur-xl p-5"
                onMouseMove={(e) => {
                  const el = e.currentTarget.parentElement as HTMLElement;
                  const rect = el.getBoundingClientRect();
                  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget.parentElement as HTMLElement;
                  el.style.setProperty("--mx", `-9999px`);
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid place-items-center rounded-lg size-11 bg-white/5 ring-1 ring-white/10">
                      <Icon className="text-xl text-blue-300" />
                    </div>
                    <div className="text-[11px] uppercase tracking-wide text-blue-200/80">
                      {tagFor(Icon)}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(date).toLocaleDateString()}
                  </div>
                </div>

                <h2 className="mt-4 text-lg font-semibold text-white">
                  {title}
                </h2>
                <p className="mt-2 text-sm text-blue-100/80">{description}</p>

                <div className="mt-4 inline-flex items-center gap-2 text-blue-300 text-sm">
                  Read article
                  <svg
                    className="h-4 w-4 translate-x-0 group-hover:translate-x-0.5 transition-transform"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M7 5l6 5-6 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Subtle bottom divider */}
      <div className="px-6 md:px-0 md:mx-auto xl:w-4/5 2xl:w-[68%] my-14">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </div>
  );
}
