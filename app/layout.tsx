import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import FloatingChatButtons from "@/components/FloatingChatButtons";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NetrX | Digital Marketing Company",
  description:
    "Transform your business with NetrX's cutting-edge digital marketing solutions. We drive growth through strategic SEO, social media, and data-driven campaigns.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "NetrX | Digital Marketing Company",
    description:
      "Transform your business with NetrX's cutting-edge digital marketing solutions. We drive growth through strategic SEO, social media, and data-driven campaigns.",
    url: "https://netrxdigital.github.io",
    siteName: "NetrX",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo/logo.webp",
        width: 1200,
        height: 630,
        alt: "NetrX Digital Marketing - Grow Your Business Online",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "NetrX Digital Marketing Logo",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    creator: "@your_twitter_handle",
    title: "NetrX | Digital Marketing Company",
    description:
      "Transform your business with NetrX's cutting-edge digital marketing solutions.",
    images: ["/twitter-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  keywords: [
    "digital marketing",
    "SEO",
    "social media marketing",
    "PPC",
    "content marketing",
  ],
  authors: [{ name: "NetrX Team" }],
  category: "Digital Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N8LJZ3XD');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Additional legacy support (optional) */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className={`${font.className} bg-background text-foreground`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8LJZ3XD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <FloatingChatButtons /> 
          <Analytics />
      </ThemeProvider>
      </body>
    </html>
  );
}
