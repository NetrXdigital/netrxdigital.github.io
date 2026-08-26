import type { Metadata } from "next";

import ProductLanding from "./ProductLanding";

export const metadata: Metadata = {
  title: "Website Auditor & SEO Crawler | Free Demo",
  description:
    "Run a free website audit with NetrX Web Auditor. Find technical SEO issues, Core Web Vitals, SERP rankings, rendered-content gaps, and AI visibility opportunities.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Find What Is Holding Your Website Back | NetrX Web Auditor",
    description:
      "Crawl your website and turn technical SEO, performance, SERP, and AI visibility signals into a prioritized action plan.",
    url: "/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NetrX Web Auditor | Free Demo Crawl",
    description:
      "One connected website audit for technical SEO, performance, search rankings, and AI visibility.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "NetrX Web Auditor",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://websiteaudit.netrxai.com/",
      description:
        "An AI-powered website crawler and SEO audit tool for technical SEO, Core Web Vitals, SERP rankings, rendered content, and AI visibility.",
      offers: [
        {
          "@type": "Offer",
          name: "Free demo crawl",
          price: "0",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          name: "Complete audit package",
          price: "100",
          priceCurrency: "INR",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the NetrX Web Auditor demo free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A verified account receives a one-time 10-page demo crawl and no payment card is required for the demo.",
          },
        },
        {
          "@type": "Question",
          name: "What does the complete NetrX Web Auditor package include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The ₹100 pay-as-you-go package includes one crawl of up to 500 pages, technical SEO and rendered-content analysis, 10 SERP keyword checks, 10 GEO questions, and ₹20 of Ask AI balance.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to install anything to run the website audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. NetrX Web Auditor runs in the browser and audits the public website URL supplied by the user.",
          },
        },
      ],
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProductLanding />
    </>
  );
}
