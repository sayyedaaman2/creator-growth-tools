import { siteConfig } from "@/lib/site-config";

/**
 * WebSite + Organization JSON-LD structured data.
 *
 * Rendered as a <script type="application/ld+json"> in the root layout.
 * This tells search engines the basic identity of the site.
 *
 * Article schema will be added later, scoped to individual article pages.
 */
export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
