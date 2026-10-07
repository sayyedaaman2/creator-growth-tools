export interface Category {
  name: string;
  href: string;
  description: string;
  shortDescription: string;
}

export const CATEGORIES: Category[] = [
  {
    name: "Email Marketing",
    href: "/email-marketing",
    description:
      "Newsletter platforms, email automation, and subscriber growth tools compared for creators and businesses.",
    shortDescription: "Newsletter platforms and subscriber automation.",
  },
  {
    name: "Creator Tools",
    href: "/creator-tools",
    description:
      "Essential software, content creation platforms, and digital product tools built for creators.",
    shortDescription: "Platforms and software for digital content creators.",
  },
  {
    name: "Small Business Tools",
    href: "/small-business-tools",
    description:
      "Practical solutions for client management, invoicing, project tracking, and operational efficiency.",
    shortDescription: "Operational software for client management & invoicing.",
  },
  {
    name: "SEO & Website Growth",
    href: "/seo-website-growth",
    description:
      "Search engine optimization strategies, technical advice, and website tools to drive organic traffic.",
    shortDescription: "Search engine optimization strategies & site tools.",
  },
  {
    name: "AI Tools",
    href: "/ai-tools",
    description:
      "Evaluations of artificial intelligence software for writing, workflow automation, and content production.",
    shortDescription: "Artificial intelligence software for productivity.",
  },
];

export function getNavCategories() {
  return CATEGORIES.map((category) => ({
    name: category.name,
    href: category.href,
  }));
}

export function getOtherCategories(currentHref: string) {
  return CATEGORIES.filter((category) => category.href !== currentHref).map(
    (category) => ({
      title: category.name,
      href: category.href,
      description: category.shortDescription,
    })
  );
}
