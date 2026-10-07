import type { Metadata } from "next";
import { CategoryView } from "@/components/category-view";
import { getOtherCategories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Small Business Tools",
  description:
    "Tools and software reviews for small online businesses. Find the right stack for e-commerce, invoicing, project management, and more.",
  alternates: {
    canonical: "/small-business-tools/",
  },
  openGraph: {
    title: "Small Business Tools",
    description:
      "Tools and software reviews for small online businesses — e-commerce, invoicing, project management.",
    url: "/small-business-tools/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Small Business Tools",
      },
    ],
  },
  twitter: {
    title: "Small Business Tools",
    description:
      "Tools and software reviews for small online businesses — e-commerce, invoicing, project management.",
  },
};

export default function SmallBusinessToolsPage() {
  return (
    <CategoryView
      title="Small Business Tools"
      categoryName="Small Business Tools"
      description="Practical software solutions for project tracking, client invoicing, contract management, and daily business operations."
      intro="Running a small online business or freelance service requires tight operational control. Choosing software that automates administrative overhead—from proposal creation to bookkeeping and client portals—keeps your focus on deliverable work and client growth."
      whatYouWillFind={[
        "Evaluations of client relationship management (CRM) and invoicing software.",
        "Comparisons of project management tools for small teams and freelancers.",
        "Contract signing and proposal software breakdowns.",
        "Operational efficiency recommendations tailored to lean service businesses.",
      ]}
      otherCategories={getOtherCategories("/small-business-tools")}
    />
  );
}
