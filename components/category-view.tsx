import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

interface OtherCategory {
  title: string;
  href: string;
  description: string;
}

interface CategoryViewProps {
  title: string;
  description: string;
  intro: string;
  whatYouWillFind: string[];
  categoryName: string;
  otherCategories: OtherCategory[];
}

export function CategoryView({
  title,
  description,
  intro,
  whatYouWillFind,
  categoryName,
  otherCategories,
}: CategoryViewProps) {
  // Get all published production articles for this category
  const allArticles = getAllArticles(false);
  const categoryArticles = allArticles.filter(
    (art) => art.frontmatter.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 space-y-12">
      {/* Header Section */}
      <header className="max-w-3xl border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Category Overview
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300 sm:text-lg">
          {description}
        </p>
      </header>

      {/* Category Overview & Learning Scope */}
      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
            About {title}
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {intro}
          </p>

          <div className="rounded-lg border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
              What You Can Expect to Find Here
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {whatYouWillFind.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-zinc-400 dark:text-zinc-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar / Quick Navigation */}
        <aside className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800 bg-white dark:bg-zinc-950 h-fit">
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
            Editorial Guidelines
          </h3>
          <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Our category guides provide practical analysis based on real creator workflows. We compare software without promotional hyperbole or fake ratings.
          </p>
          <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <Link
              href="/affiliate-disclosure"
              className="text-xs font-semibold text-zinc-900 dark:text-white underline underline-offset-4 hover:text-zinc-600"
            >
              Affiliate Policy &rarr;
            </Link>
          </div>
        </aside>
      </section>

      {/* Related Guides Section */}
      <section className="space-y-6">
        <div className="border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            {title} Guides & Comparisons
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            In-depth breakdowns and tutorials published in this category.
          </p>
        </div>

        {categoryArticles.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
              >
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:underline">
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
              No guides published in this category yet.
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              We are currently researching and drafting articles for {title}. Check back soon for initial comparisons and breakdowns.
            </p>
          </div>
        )}
      </section>

      {/* Related Categories */}
      <section className="space-y-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          Explore Other Categories
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherCategories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group rounded-lg border border-zinc-200 p-4 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:underline">
                {cat.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
