
// app/blog/seo-basics-for-medical-practices/page.tsx
import type { Metadata as MD } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: MD = {
  title: "SEO Basics for Medical Practices | Blog",
  description: "The no-BS checklist to grow appointments with local SEO.",
  alternates: { canonical: "/blogs/seo-basics-for-medical-practices" },
  openGraph: { images: ["/images/blogs/seo-basics-for-medical-practices.jpg"] },
};

export default function Page() {
  return (
    <BlogLayout
      slug="seo-basics-for-medical-practices"
      title="SEO Basics for Medical Practices"
      description="The no-BS checklist to grow appointments with local SEO."
      publishDate="2025-08-01"
      imageUrl="/images/blogs/seo-basics-for-medical-practices.jpg"
      toc={[
        { id: "gmb-first", label: "GMB First" },
        { id: "pages-that-rank", label: "Pages That Rank" },
        { id: "on-page", label: "On-Page SEO" },
        { id: "proof", label: "Proof & Reviews" },
        { id: "links", label: "Local Links" },
      ]}
    >
      <section id="gmb-first">
        <h2>GMB First</h2>
        <p>NAP consistency, the right primary/secondary categories, and fresh photos.</p>
      </section>
      <section id="pages-that-rank">
        <h2>Pages That Rank</h2>
        <p>Services, doctor bio, locations, FAQs—fast and mobile-friendly.</p>
      </section>
      <section id="on-page">
        <h2>On-Page SEO</h2>
        <p>Clear H1, intent-matched keywords, internal links, and schema.</p>
      </section>
      <section id="proof">
        <h2>Proof</h2>
        <p>Reviews and before/after where allowed. Social proof converts.</p>
      </section>
      <section id="links">
        <h2>Local Links</h2>
        <p>Local citations and relevant directories beat random backlinks.</p>
      </section>
    </BlogLayout>
  );
}
