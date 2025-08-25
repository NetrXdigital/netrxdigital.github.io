
// app/blog/local-seo-checklist/page.tsx
import type { Metadata as MD4 } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: MD4 = {
  title: "Local SEO Checklist | Blog",
  description: "Monthly ops: GMB posts, review replies, citations, speed, internal links.",
  alternates: { canonical: "/blog/local-seo-checklist" },
  openGraph: { images: ["/images/blog/local-seo-checklist.jpg"] },
};

export default function Page() {
  return (
    <BlogLayout
      slug="local-seo-checklist"
      title="Local SEO Checklist"
      description="Run this monthly: GMB posts, review replies, citation audits, page speed, internal links."
      publishDate="2025-08-12"
      toc={[
        { id: "gmb", label: "GMB" },
        { id: "reviews", label: "Reviews" },
        { id: "citations", label: "Citations" },
        { id: "speed", label: "Page Speed" },
        { id: "internal-links", label: "Internal Links" },
      ]}
    >
      <section id="gmb">
        <h2>GMB</h2>
        <p>Post weekly. Keep categories and photos updated.</p>
      </section>
      <section id="reviews">
        <h2>Reviews</h2>
        <p>Reply to all. Ask ethically. Showcase best ones.</p>
      </section>
      <section id="citations">
        <h2>Citations</h2>
        <p>Audit NAP across key directories. Fix inconsistencies.</p>
      </section>
      <section id="speed">
        <h2>Page Speed</h2>
        <p>Compress images, lazy-load, ship less JS.</p>
      </section>
      <section id="internal-links">
        <h2>Internal Links</h2>
        <p>Link from high-traffic posts to service pages with descriptive anchors.</p>
      </section>
    </BlogLayout>
  );
}
