import type { NextConfig } from "next";

// When deploying to GitHub Pages under a repository sub-path (e.g.
// https://<user>.github.io/creator-growth-tools/), set these env vars in the
// GitHub Actions workflow:
//   NEXT_PUBLIC_BASE_PATH=/creator-growth-tools
// For local development leave them unset so the app runs at /.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // --- Static export for GitHub Pages ---
  output: "export",

  // All routes produce /route/index.html so GitHub Pages can serve them
  // without a server rewriting extensionless URLs.
  trailingSlash: true,

  // Sub-path when hosted under github.io/<repo-name>
  basePath,
  assetPrefix: basePath,

  // next/image optimisation requires a server; disable it for static export.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
