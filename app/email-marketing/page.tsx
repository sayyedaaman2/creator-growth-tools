import type { Metadata } from "next";
import { CategoryView } from "@/components/category-view";
import { getOtherCategories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Email Marketing Tools",
  description:
    "Compare the best email marketing platforms for creators and small businesses. Honest reviews, pricing breakdowns, and feature comparisons.",
  alternates: {
    canonical: "/email-marketing/",
  },
  openGraph: {
    title: "Email Marketing Tools",
    description:
      "Compare the best email marketing platforms for creators and small businesses.",
    url: "/email-marketing/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Email Marketing Tools",
      },
    ],
  },
};

export default function EmailMarketingPage() {
  return (
    <CategoryView
      title="Email Marketing Tools"
      categoryName="Email Marketing"
      description="Detailed comparisons and breakdowns of newsletter software, email automation platforms, and subscriber growth tools."
      intro="Email marketing remains one of the most reliable channels for creators and small businesses to build direct relationships with their audience. Our email marketing section evaluates software options based on deliverability features, ease of use, automation capabilities, and cost scalability as subscriber lists expand."
      whatYouWillFind={[
        "Objective feature comparisons across broadcast and newsletter platforms.",
        "Analysis of list segmentation, tag management, and visual automation builders.",
        "Cost breakdown analysis comparing subscriber-based pricing models.",
        "Guidance on choosing between lightweight newsletter tools and comprehensive marketing suites.",
      ]}
      otherCategories={getOtherCategories("/email-marketing")}
    />
  );
}
