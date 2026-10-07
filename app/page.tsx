import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: {
    absolute: "Creator Growth Tools – Tools & Guides for Creators and Freelancers",
  },
  description:
    "Practical tools, guides and comparisons for creators, freelancers and small online businesses. Find the right tools for email marketing, SEO, AI and more.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Creator Growth Tools – Tools & Guides for Creators and Freelancers",
    description:
      "Practical tools, guides and comparisons for creators, freelancers and small online businesses.",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creator Growth Tools",
      },
    ],
  },
  twitter: {
    title: "Creator Growth Tools – Tools & Guides for Creators and Freelancers",
    description:
      "Practical tools, guides and comparisons for creators, freelancers and small online businesses.",
  },
};

const categories = [
  {
    title: "Email Marketing",
    href: "/email-marketing",
    description:
      "Newsletter platforms, email automation, and subscriber growth tools compared for creators and businesses.",
  },
  {
    title: "Creator Tools",
    href: "/creator-tools",
    description:
      "Essential software, content creation platforms, and digital product tools built for creators.",
  },
  {
    title: "Small Business Tools",
    href: "/small-business-tools",
    description:
      "Practical solutions for client management, invoicing, project tracking, and operational efficiency.",
  },
  {
    title: "SEO & Website Growth",
    href: "/seo-website-growth",
    description:
      "Search engine optimization strategies, technical advice, and website tools to drive organic traffic.",
  },
  {
    title: "AI Tools",
    href: "/ai-tools",
    description:
      "Evaluations of artificial intelligence software for writing, workflow automation, and content production.",
  },
];

export default function HomePage() {
  // Fetch only published production articles (excludes test/draft articles)
  const latestArticles = getAllArticles(false);

  return (
    <div className="space-y-16 py-10 sm:py-16">
      {/* 1. Hero Section */}
      <section className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
          Choose the Right Tools to Build & Grow Your Online Business
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300 sm:text-xl">
          We help creators, freelancers and small online businesses choose the right tools for building, marketing and growing their online business.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#categories"
            className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
          >
            Explore Categories
          </a>
          <Link
            href="/about"
            className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
          >
            About Creator Growth Tools
          </Link>
        </div>
      </section>

      {/* 2. Explore Categories */}
      <section id="categories" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
            Explore Tool Categories
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Find software tailored to your specific creator and business workflows.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group flex flex-col justify-between rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all shadow-xs"
            >
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {category.description}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center text-xs font-semibold text-zinc-900 dark:text-white group-hover:underline">
                Browse category &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Latest Guides Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
            Latest Guides & Comparisons
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            In-depth analysis, tool breakdowns, and practical tutorials.
          </p>
        </div>

        <div className="mt-8">
          {latestArticles.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latestArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
                >
                  <span className="text-xs font-semibold uppercase text-zinc-500">
                    {article.frontmatter.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-zinc-900 dark:text-white group-hover:underline">
                    {article.frontmatter.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {article.frontmatter.description}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-zinc-300 p-8 text-center dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
              <p className="text-base font-medium text-zinc-700 dark:text-zinc-300">
                Guides are coming soon.
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                We are currently preparing detailed tool comparisons and workflow guides. Check back shortly!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. How We Help */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-8 dark:border-zinc-800 dark:bg-zinc-900/40">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl text-center">
            How We Help You Decide
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-zinc-600 dark:text-zinc-400">
            Finding software for your business should not mean wading through endless promotional fluff.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-5 shadow-xs dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-zinc-900 dark:text-white">Compare Real Options</h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                We evaluate features, pricing tiers, and limitations so you can weigh trade-offs quickly.
              </p>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-xs dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-zinc-900 dark:text-white">Understand Practical Use Cases</h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                Tools are presented based on business stage—whether you are a solopreneur, freelancer, or growing team.
              </p>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-xs dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-zinc-900 dark:text-white">Focus on Practical Needs</h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                Our content focuses on actionable guidance, helping you choose tools that solve immediate operational challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trust / Transparency */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">
            Our Commitment to Editorial Transparency
          </h3>
          <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Creator Growth Tools is an independent publication. To support our work, some links on this site may earn us an affiliate commission at no extra cost to you. We only recommend tools that provide genuine utility to creators and small online businesses.
          </p>
          <div className="mt-4">
            <Link
              href="/affiliate-disclosure"
              className="text-xs font-semibold text-zinc-900 dark:text-white underline underline-offset-4 hover:text-zinc-600"
            >
              Read our full Affiliate Disclosure &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-zinc-900 p-8 text-white dark:bg-zinc-900 dark:border dark:border-zinc-800 sm:p-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to Upgrade Your Creator Stack?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-300">
            Browse our core category breakdowns to find software tailored for email marketing, SEO, productivity, and creator growth.
          </p>
          <div className="mt-6">
            <a
              href="#categories"
              className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors"
            >
              Browse All Categories
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
