import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllArticles } from "@/lib/articles";

// Required for static export: tells Next.js to pre-render this route handler
// at build time instead of attempting server-side execution.
export const dynamic = "force-static";

/**
 * Generates /sitemap.xml at build time.
 *
 * Includes main section routes, legal pages, and published articles.
 * Test/draft articles (marked with `isTestArticle: true` or `draft: true`) are
 * excluded automatically via `getAllArticles(false)`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/email-marketing/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/creator-tools/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/small-business-tools/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/seo-website-growth/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/ai-tools/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/about/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/contact/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/affiliate-disclosure/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/privacy/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/terms/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Fetch only published articles (excludes drafts / test articles)
  const publishedArticles = getAllArticles(false);

  const articleRoutes: MetadataRoute.Sitemap = publishedArticles.map((article) => ({
    url: `${base}/articles/${article.slug}/`,
    lastModified: new Date(article.frontmatter.updated || article.frontmatter.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
