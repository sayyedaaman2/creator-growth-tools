import type { Metadata } from "next";
import { CategoryView } from "@/components/category-view";

export const metadata: Metadata = {
  title: "SEO & Website Growth",
  description:
    "Practical SEO tools and guides for creators and small businesses. Grow organic traffic without guesswork.",
  alternates: {
    canonical: "/seo-website-growth/",
  },
  openGraph: {
    title: "SEO & Website Growth",
    description:
      "Practical SEO tools and guides for creators and small businesses. Grow organic traffic without guesswork.",
    url: "/seo-website-growth/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SEO & Website Growth",
      },
    ],
  },
  twitter: {
    title: "SEO & Website Growth",
    description:
      "Practical SEO tools and guides for creators and small businesses. Grow organic traffic without guesswork.",
  },
};

const otherCategories = [
  {
    title: "Email Marketing",
    href: "/email-marketing",
    description: "Newsletter platforms and subscriber automation.",
  },
  {
    title: "Creator Tools",
    href: "/creator-tools",
    description: "Platforms and software for digital content creators.",
  },
  {
    title: "Small Business Tools",
    href: "/small-business-tools",
    description: "Operational software for client management & invoicing.",
  },
  {
    title: "AI Tools",
    href: "/ai-tools",
    description: "Artificial intelligence software for productivity.",
  },
];

export default function SeoWebsiteGrowthPage() {
  return (
    <CategoryView
      title="SEO & Website Growth"
      categoryName="SEO & Website Growth"
      description="Actionable search engine optimization guides, keyword research strategies, technical SEO audits, and website performance tools."
      intro="Sustainable organic traffic is a foundational asset for any online publishing or creator business. In this category, we cover technical SEO best practices, site speed optimization, keyword discovery tools, and structured data standards designed to help search engines index and rank your content effectively."
      whatYouWillFind={[
        "Keyword research tool comparisons and search volume discovery utilities.",
        "Technical SEO tutorials covering sitemaps, canonical tags, and structured data.",
        "Website performance & Core Web Vitals optimization techniques.",
        "On-page optimization strategies for long-form content and product pages.",
      ]}
      otherCategories={otherCategories}
    />
  );
}
