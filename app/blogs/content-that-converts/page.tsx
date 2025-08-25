
// app/blog/content-that-converts/page.tsx
import type { Metadata as MD3 } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: MD3 = {
  title: "Content that Converts | Blog",
  description: "Content isn’t poetry—it’s sales with empathy.",
  alternates: { canonical: "/blog/content-that-converts" },
  openGraph: { images: ["/images/blog/content-that-converts.jpg"] },
};

export default function Page() {
  return (
    <BlogLayout
      slug="content-that-converts"
      title="Content that Converts"
      description="Speak to pain, show proof, offer a next step."
      publishDate="2025-08-10"
      toc={[{ id: "framework", label: "Framework" }]}
    >
      <section id="framework">
        <h1>Content that Converts</h1>
      <p>
         Great content answers questions and guides patients toward the next step.
         Before drafting, identify the problem your service solves and the search
         phrases patients use. Educational posts build trust; calls to action
         convert that trust into booked appointments.
       </p>
       <p>
         Structure articles with clear headings, short paragraphs, and relevant
         images. Break down complex topics—like insurance coverage or treatment
         timelines—into plain language that empowers readers.
       </p>
       <h2>From Post to Patient</h2>
       <p>
         End every piece with a helpful next step: a scheduling link, a phone
         number, or an invitation to download a guide. Track which topics drive
         the most inquiries and double down on what resonates.
       </p>
       <p>
         Content marketing isn’t about writing more—it’s about writing what matters
         to your ideal patient. Consistency and empathy are your biggest assets.
       </p>
      </section>
    </BlogLayout>
  );
}
