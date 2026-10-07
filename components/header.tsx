"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Email Marketing", href: "/email-marketing" },
  { name: "Creator Tools", href: "/creator-tools" },
  { name: "Small Business Tools", href: "/small-business-tools" },
  { name: "SEO & Website Growth", href: "/seo-website-growth" },
  { name: "AI Tools", href: "/ai-tools" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 sticky top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white"
        >
          Creator Growth Tools
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex lg:items-center lg:gap-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname === `${item.href}/`;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white ${
                  isActive
                    ? "text-zinc-900 font-semibold underline underline-offset-4 dark:text-white"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div id="mobile-navigation" className="border-t border-zinc-200 bg-white px-4 pt-2 pb-4 dark:border-zinc-800 dark:bg-zinc-950 lg:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname === `${item.href}/`;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white ${
                    isActive
                      ? "bg-zinc-100 font-semibold text-zinc-900 dark:bg-zinc-900 dark:text-white"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
