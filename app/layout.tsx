import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { WebsiteJsonLd } from "@/components/json-ld";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  /**
   * metadataBase resolves all relative URLs in metadata fields (OG images,
   * canonical links, etc.) against the canonical site URL.
   * Changing the domain later only requires updating NEXT_PUBLIC_SITE_URL.
   */
  metadataBase: new URL(siteConfig.url),

  /**
   * Title template: child pages set `title: "Page Name"` and automatically
   * get "<Page Name> | Creator Growth Tools" in the <title> tag.
   * The root layout's own title uses `default`.
   */
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  /**
   * Canonical URL for the root.
   * Child pages inherit metadataBase and may set their own `alternates.canonical`.
   */
  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: "/",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <WebsiteJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

