import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Creator Growth Tools privacy policy.",
  alternates: {
    canonical: "/privacy/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <h1>Privacy Policy</h1>
      <p>Coming soon.</p>
    </main>
  );
}

