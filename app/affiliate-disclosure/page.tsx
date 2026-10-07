import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Creator Growth Tools participates in affiliate programs. Read our full affiliate disclosure.",
  alternates: {
    canonical: "/affiliate-disclosure/",
  },
  // Legal/utility pages don't need to rank
  robots: {
    index: false,
    follow: true,
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <main>
      <h1>Affiliate Disclosure</h1>
      <p>Coming soon.</p>
    </main>
  );
}

