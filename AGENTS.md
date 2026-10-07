<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Creator Growth Tools — Project Rules

## Project
- This is a static Next.js website deployed to GitHub Pages.
- Do not introduce a server, backend, database, or unnecessary infrastructure unless explicitly requested.
- Preserve static export compatibility.

## GitHub Pages
- Preserve `output: "export"` in `next.config.ts`.
- Preserve the repository base path `/creator-growth-tools`.
- Never hardcode `/creator-growth-tools` into internal Next.js links.
- Use Next.js `Link` for internal navigation.
- Do not break the GitHub Pages deployment workflow.
- Verify static asset paths when changing Next.js configuration.

## SEO
- Preserve existing metadata, canonical URLs, sitemap, robots.txt, and structured data.
- Production articles must have proper title, description, and canonical URL.
- Use Article JSON-LD where applicable.
- Do not create duplicate or thin pages purely for SEO.
- Do not remove existing SEO functionality without explicit approval.

## Content
- Do not invent product pricing, features, commissions, statistics, testimonials, reviews, or other factual claims.
- For current product information, verify important claims against reliable/official sources.
- Articles must provide genuine practical value.
- Do not publish AI-generated filler or repetitive content.
- Keep content clear, useful, accurate, and understandable for the target audience.

## Affiliate Content
- Clearly disclose affiliate relationships where required.
- Follow each affiliate program's linking and promotional rules.
- Do not add affiliate links without explicit approval.
- Do not make unsupported income, savings, performance, or conversion claims.
- Prefer useful content before affiliate promotion.

## Technical
- Avoid unnecessary dependencies.
- Keep the website fast and static.
- Do not introduce a database unless explicitly requested.
- Run `npm run build` after structural, routing, configuration, or dependency changes.
- Check the generated `out/` directory when changes affect static deployment.
- Do not modify production articles, SEO configuration, or deployment configuration without explicit approval.
- Preserve existing working functionality when making changes.

## Development Workflow
- Before changing Next.js-specific code, follow the Next.js agent instructions above.
- Inspect the existing implementation before making changes.
- Prefer the smallest correct change.
- Do not redesign or refactor unrelated code while fixing a specific issue.
- Report the exact files changed and why.
- Do not commit speculative or unverified fixes.

## Git
- Keep commits focused and descriptive.
- Do not commit build output such as `.next/` or `out/` unless explicitly required.
- Before committing, run the appropriate validation/build.
- Only commit changes related to the requested task.
- Push to `origin main` only after the change has been verified.
