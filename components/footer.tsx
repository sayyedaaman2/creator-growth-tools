import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Site identity and description */}
          <div className="max-w-md">
            <Link
              href="/"
              className="text-base font-bold tracking-tight text-zinc-900 dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white"
            >
              Creator Growth Tools
            </Link>
            <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400">
              {siteConfig.description}
            </p>
          </div>

          {/* Utility and legal links */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-zinc-900 dark:hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-zinc-200 pt-4 dark:border-zinc-800 text-center md:text-left">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            &copy; {currentYear} Creator Growth Tools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
