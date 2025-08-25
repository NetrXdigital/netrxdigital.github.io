
// app/blog/performance-marketing-101/page.tsx
import type { Metadata as MD2 } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: MD2 = {
  title: "Performance Marketing 101 | Blog",
  description: "PPC works when tracking is clean and the offer is clear.",
  alternates: { canonical: "/blog/performance-marketing-101" },
  openGraph: { images: ["/images/blog/performance-marketing-101.jpg"] },
};

export default function Page() {
  return (
    <BlogLayout
      slug="performance-marketing-101"
      title="Performance Marketing 101"
      description="PPC works when tracking is clean and the offer is clear."
      publishDate="2025-08-05"
      toc={[
        { id: "offer", label: "Offer & Landing Page" },
        { id: "tracking", label: "Tracking" },
        { id: "optimisation", label: "Optimisation" },
      ]}
    >
      <section id="offer">
        <h2>Offer & Landing Page</h2>
        <ul>
          <li>One offer, one page, one CTA.</li>
        </ul>
      </section>
      <section id="tracking">
        <h2>Tracking</h2>
        <ul>
          <li>Track calls and form fills. No tracking, no learning.</li>
        </ul>
      </section>
      <section id="optimisation">
        <h2>Optimisation</h2>
        <ul>
          <li>Kill losers fast, scale winners faster.</li>
        </ul>
      </section>
    </BlogLayout>
  );
}
