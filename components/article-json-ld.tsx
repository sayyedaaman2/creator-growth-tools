import { siteConfig } from "@/lib/site-config";
import type { ArticleFrontmatter } from "@/lib/articles";

interface ArticleJsonLdProps {
  article: ArticleFrontmatter;
}

/**
 * Article JSON-LD structured data for article pages.
 * Rendered as a <script type="application/ld+json"> tag.
 */
export function ArticleJsonLd({ article }: ArticleJsonLdProps) {
  const canonicalUrl = `${siteConfig.url}/articles/${article.slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    url: canonicalUrl,
    datePublished: article.date,
    dateModified: article.updated || article.date,
    author: {
      "@type": "Organization",
      name: article.author || siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(article.featuredImage
      ? {
          image: article.featuredImage.startsWith("http")
            ? article.featuredImage
            : `${siteConfig.url}${article.featuredImage}`,
        }
      : {}),
    ...(article.keywords ? { keywords: article.keywords.join(", ") } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
