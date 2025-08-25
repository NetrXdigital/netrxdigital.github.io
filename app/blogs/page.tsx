// app/blog/page.tsx
import Link from "next/link";
import { FiSearch, FiTrendingUp, FiTarget, FiPenTool, FiBookOpen } from "react-icons/fi";

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
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen px-6 md:px-0 md:mx-auto xl:w-4/5 2xl:w-[68%] py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">Blogs</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          Sharp, practical reads on SEO, PPC, and growth for local businesses.
        </p>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOGS.map(({ slug, title, description, icon: Icon, date }) => (
          <li key={slug}>
            <Link
              href={`/blogs/${slug}`}
              className="group block h-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg p-3 border border-gray-200 dark:border-gray-800">
                  <Icon className="text-2xl" />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(date).toLocaleDateString()}
                </div>
              </div>
              <h2 className="mt-4 text-xl font-semibold group-hover:underline">{title}</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm">
                Read article
                <svg
                  className="h-4 w-4 translate-x-0 group-hover:translate-x-0.5 transition-transform"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

