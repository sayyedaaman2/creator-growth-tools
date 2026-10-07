import Link from "next/link";
import { getNavCategories } from "@/lib/categories";

export const dynamic = "force-static";

const categories = getNavCategories();

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
      <div className="rounded-full bg-zinc-100 px-3.5 py-1 text-xs font-semibold text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
        404 Error
      </div>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-lg text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
        Sorry, we couldn’t find the page you were looking for. It may have been moved, renamed, or deleted.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
        >
          Return to Homepage
        </Link>
      </div>

      <div className="mt-12 w-full max-w-2xl border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
          Explore Popular Categories
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="rounded-lg border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-white dark:hover:border-zinc-700 dark:hover:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              {category.name} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
