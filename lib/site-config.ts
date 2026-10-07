/**
 * Central site configuration.
 *
 * IMPORTANT – domain strategy:
 *   • Currently deployed to GitHub Pages at:
 *       https://<owner>.github.io/creator-growth-tools/
 *   • The NEXT_PUBLIC_SITE_URL env var overrides this for local dev or when
 *     a custom domain is eventually added.
 *   • To switch to a custom domain in the future, set NEXT_PUBLIC_SITE_URL
 *     in the GitHub Actions workflow (or Vercel / any host) – no code changes needed.
 *
 * GitHub Pages URL pattern:  https://<owner>.github.io/<repo>
 * The owner is read from NEXT_PUBLIC_GITHUB_OWNER (set in the workflow).
 * If neither env var is set (local dev), we fall back to a localhost origin
 * so metadataBase never receives `undefined`.
 */

function resolveSiteUrl(): string {
  // Explicit override wins (custom domain, GitHub Actions workflow base_url, or local env)
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  // Build the GitHub Pages URL from NEXT_PUBLIC_GITHUB_OWNER if provided
  const owner = process.env.NEXT_PUBLIC_GITHUB_OWNER;
  if (owner) {
    return `https://${owner}.github.io/creator-growth-tools`;
  }

  // Default production fallback based on repository owner (sayyedaaman2)
  return "https://sayyedaaman2.github.io/creator-growth-tools";
}

export const siteConfig = {
  /** Canonical origin – no trailing slash */
  url: resolveSiteUrl(),

  name: "Creator Growth Tools",

  description:
    "Practical tools, guides and comparisons for creators, freelancers and small online businesses.",

  /** Used in OG / Twitter cards */
  twitterHandle: "@creatorgrowthtools", // placeholder – update when account exists
} as const;
