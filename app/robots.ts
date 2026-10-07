import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Required for static export: tells Next.js to pre-render this route handler
// at build time instead of attempting server-side execution.
export const dynamic = "force-static";


/**
 * Generates /robots.txt at build time.
 *
 * All public routes are crawlable. The sitemap URL is absolute so crawlers
 * can find it regardless of the deployment host.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
