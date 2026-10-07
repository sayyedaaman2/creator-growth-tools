import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";
import { ArticleJsonLd } from "@/components/article-json-ld";

// Enforce static generation for static export
export const dynamicParams = false;

interface MDXLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
}

function MDXLink({ href, children, ...props }: MDXLinkProps) {
  if (!href) {
    return <a {...props}>{children}</a>;
  }

  const isInternalLink = href.startsWith("/") && !href.startsWith("//");

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

const mdxComponents = {
  a: MDXLink,
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const { frontmatter } = article;
  const canonicalPath = `/articles/${slug}/`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "article",
      title: frontmatter.title,
      description: frontmatter.description,
      url: canonicalPath,
      siteName: siteConfig.name,
      publishedTime: frontmatter.date,
      modifiedTime: frontmatter.updated || frontmatter.date,
      authors: [frontmatter.author],
      images: [
        {
          url: frontmatter.featuredImage || "/og-image.png",
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
    },
    ...(frontmatter.isTestArticle || frontmatter.draft
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { frontmatter, content } = article;

  return (
    <>
      <ArticleJsonLd article={frontmatter} />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <article className="prose dark:prose-invert max-w-none">
          <header className="mb-8 border-b border-zinc-200 pb-6 dark:border-zinc-800">
            {frontmatter.isTestArticle && (
              <div className="mb-4 rounded-md bg-amber-50 p-3 text-sm font-medium text-amber-800 dark:bg-amber-950/50 dark:text-amber-300">
                ⚠️ Temporary Development Article — Excluded from production sitemap.
              </div>
            )}
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              <span>{frontmatter.category}</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              {frontmatter.title}
            </h1>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">
              {frontmatter.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span>By {frontmatter.author}</span>
              <span>•</span>
              <time dateTime={frontmatter.date}>Published: {frontmatter.date}</time>
              {frontmatter.updated && frontmatter.updated !== frontmatter.date && (
                <>
                  <span>•</span>
                  <time dateTime={frontmatter.updated}>Updated: {frontmatter.updated}</time>
                </>
              )}
            </div>
          </header>

          <div className="mt-6 space-y-4 text-zinc-800 dark:text-zinc-200">
            <MDXRemote
              source={content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
              components={mdxComponents}
            />
          </div>
        </article>
      </div>
    </>
  );
}
