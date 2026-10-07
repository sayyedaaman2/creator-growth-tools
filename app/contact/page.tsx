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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Creator Growth Tools",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Coming soon.</p>
    </div>
  );
}

