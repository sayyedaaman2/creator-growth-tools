import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Creator Growth Tools team.",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Contact Creator Growth Tools",
    description: "Get in touch with the Creator Growth Tools team.",
    url: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <main>
      <h1>Contact</h1>
      <p>Coming soon.</p>
    </main>
  );
}

