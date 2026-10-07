import type { Metadata } from "next";
import { CategoryView } from "@/components/category-view";

export const metadata: Metadata = {
  title: "Creator Tools",
  description:
    "Discover the best tools for content creators — from video editing and design to scheduling and monetisation. Practical guides with no fluff.",
  alternates: {
    canonical: "/creator-tools/",
  },
  openGraph: {
    title: "Creator Tools",
    description:
      "Discover the best tools for content creators — video, design, scheduling and monetisation.",
    url: "/creator-tools/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creator Tools",
      },
    ],
  },
  twitter: {
    title: "Creator Tools",
    description:
      "Discover the best tools for content creators — video, design, scheduling and monetisation.",
  },
};

const otherCategories = [
  {
    title: "Email Marketing",
    href: "/email-marketing",
    description: "Newsletter platforms and subscriber automation.",
  },
  {
    title: "Small Business Tools",
    href: "/small-business-tools",
    description: "Operational software for client management & invoicing.",
  },
  {
    title: "SEO & Website Growth",
    href: "/seo-website-growth",
    description: "Search engine optimization strategies & site tools.",
  },
  {
    title: "AI Tools",
    href: "/ai-tools",
    description: "Artificial intelligence software for productivity.",
  },
];

export default function CreatorToolsPage() {
  return (
    <CategoryView
      title="Creator Tools"
      categoryName="Creator Tools"
      description="Essential software, platforms, and content utilities built specifically for digital creators, writers, and solopreneurs."
      intro="Modern creators operate as multi-functional media businesses. Managing content creation, asset design, social scheduling, and digital store fronts requires reliable software. In this section, we analyze creator-focused tools to help streamline production workflows and build digital channels efficiently."
      whatYouWillFind={[
        "Software reviews covering content creation and media editing tools.",
        "Comparisons of digital product platforms and membership management software.",
        "Social media scheduling utilities and workflow asset managers.",
        "Guidance on building a lean software stack for solo creators.",
      ]}
      otherCategories={otherCategories}
    />
  );
}
