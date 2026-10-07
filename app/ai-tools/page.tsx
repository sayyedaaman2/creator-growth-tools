import type { Metadata } from "next";
import { CategoryView } from "@/components/category-view";
import { getOtherCategories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "AI Tools for Business",
  description:
    "The best AI tools for creators and small businesses. Writing assistants, image generators, automation tools — reviewed honestly.",
  alternates: {
    canonical: "/ai-tools/",
  },
  openGraph: {
    title: "AI Tools for Business",
    description:
      "The best AI tools for creators and small businesses. Writing, images, automation — reviewed honestly.",
    url: "/ai-tools/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Tools for Business",
      },
    ],
  },
  twitter: {
    title: "AI Tools for Business",
    description:
      "The best AI tools for creators and small businesses. Writing, images, automation — reviewed honestly.",
  },
};

export default function AiToolsPage() {
  return (
    <CategoryView
      title="AI Tools for Business"
      categoryName="AI Tools"
      description="Evaluations of artificial intelligence software, content assistants, workflow automation tools, and generative technologies."
      intro="Artificial intelligence software is rapidly changing how creators write, design, code, and automate repetitive tasks. In this category, we separate genuine productivity tools from hype, examining how AI applications integrate into practical business workflows without replacing editorial quality."
      whatYouWillFind={[
        "Reviews of AI writing assistants, editing tools, and content summarizers.",
        "Comparisons of AI image, graphic generation, and asset design platforms.",
        "Workflow automation tools connecting LLMs to existing software stacks.",
        "Practical guidance on maintaining authentic human editorial standards alongside AI utilities.",
      ]}
      otherCategories={getOtherCategories("/ai-tools")}
    />
  );
}
