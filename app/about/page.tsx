import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Creator Growth Tools — who we are, what we do, and how we choose the tools and products we recommend.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About Creator Growth Tools",
    description:
      "Who we are, what we do, and how we choose the tools and products we recommend.",
    url: "/about/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Creator Growth Tools",
      },
    ],
  },
  twitter: {
    title: "About Creator Growth Tools",
    description:
      "Who we are, what we do, and how we choose the tools and products we recommend.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>Coming soon.</p>
    </main>
  );
}

