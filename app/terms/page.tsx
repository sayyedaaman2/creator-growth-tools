import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read the Creator Growth Tools terms of use.",
  alternates: {
    canonical: "/terms/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div>
      <h1>Terms of Use</h1>
      <p>Coming soon.</p>
    </div>
  );
}

