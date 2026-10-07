import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  slug: string;
  keywords?: string[];
  featuredImage?: string;
  isTestArticle?: boolean;
  draft?: boolean;
}

export interface Article {
  frontmatter: ArticleFrontmatter;
  content: string;
  slug: string;
}

const articlesDirectory = path.join(process.cwd(), "content/articles");

/**
 * Returns articles from `content/articles/`.
 * By default, `includeDrafts` is `false`, which excludes temporary or draft articles.
 */
export function getAllArticles(includeDrafts = false): Article[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const articles: Article[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith(".mdx") && !fileName.endsWith(".md")) {
      continue;
    }

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const frontmatter = data as ArticleFrontmatter;
    const slug = frontmatter.slug || fileName.replace(/\.mdx?$/, "");

    if (!includeDrafts && (frontmatter.isTestArticle || frontmatter.draft)) {
      continue;
    }

    articles.push({
      frontmatter: {
        ...frontmatter,
        slug,
      },
      content,
      slug,
    });
  }

  // Sort by published date descending
  return articles.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

/**
 * Returns all article slugs for static route generation (`generateStaticParams`),
 * including test articles so they render at build time for verification.
 */
export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(articlesDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return data.slug || file.replace(/\.mdx?$/, "");
    });
}

/**
 * Retrieves a single article by slug.
 */
export function getArticleBySlug(slug: string): Article | null {
  if (!fs.existsSync(articlesDirectory)) {
    return null;
  }

  const fileNames = fs.readdirSync(articlesDirectory);

  for (const fileName of fileNames) {
    if (!fileName.endsWith(".mdx") && !fileName.endsWith(".md")) {
      continue;
    }

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const articleSlug = data.slug || fileName.replace(/\.mdx?$/, "");

    if (articleSlug === slug) {
      return {
        frontmatter: {
          ...(data as ArticleFrontmatter),
          slug: articleSlug,
        },
        content,
        slug: articleSlug,
      };
    }
  }

  return null;
}
