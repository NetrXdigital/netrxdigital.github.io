import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NetrX | Digital Marketing Company",
  description: "Transform your business with NetrX's cutting-edge digital marketing solutions. We drive growth through strategic SEO, social media, and data-driven campaigns.",
  
  // Open Graph configuration
  openGraph: {
    title: "NetrX | Digital Marketing Company", // Can be different from main title
    description: "Transform your business with NetrX's cutting-edge digital marketing solutions. We drive growth through strategic SEO, social media, and data-driven campaigns.",
    url: "https://your-domain.com", // Your actual domain
    siteName: "NetrX",
    type: "website", // Options: website, article, video.movie, etc.
    locale: "en_US",
    
    images: [
      {
        url: "/og-image.jpg", // Path to your image (recommended: 1200x630px)
        width: 1200,
        height: 630,
        alt: "NetrX Digital Marketing - Grow Your Business Online",
        type: "image/jpeg",
      },
      // You can add multiple images as fallbacks
      {
        url: "/og-image-square.jpg", // Square version for some platforms
        width: 1200,
        height: 1200,
        alt: "NetrX Digital Marketing Logo",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter-specific configuration (inherits from openGraph if not specified)
  twitter: {
    card: "summary_large_image", // Options: summary, summary_large_image, app, player
    site: "@your_twitter_handle", // Your Twitter handle
    creator: "@your_twitter_handle",
    title: "NetrX | Digital Marketing Company",
    description: "Transform your business with NetrX's cutting-edge digital marketing solutions.",
    images: ["/twitter-image.jpg"], // Can be same as OG image
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // For better SEO
  keywords: ["digital marketing", "SEO", "social media marketing", "PPC", "content marketing"],
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
      <body className={`${font.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global Header with Theme Toggle */}
          <Header />
          
          {/* Main Content */}
          <main>
            {children}
          </main>
          
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
