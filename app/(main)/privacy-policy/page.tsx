import LegalPage from "components/legal/LegalPage";
import { privacyPolicyPage } from "data/legalPages";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DXG Agency Event Production Company",
  description:
    "Read DXG Agency’s privacy policy to understand how we collect, use, and protect your data while delivering event production and digital services.",
  alternates: {
    canonical: "https://www.dxg.agency/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | DXG Agency Event Production Company",
    description:
      "Read DXG Agency’s privacy policy to understand how we collect, use, and protect your data while delivering event production and digital services.",
    url: "https://www.dxg.agency/privacy-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | DXG Agency Event Production Company",
    description:
      "Read DXG Agency’s privacy policy to understand how we collect, use, and protect your data while delivering event production and digital services.",
  },
};

export default function PrivacyPolicyPage() {
  return <LegalPage page={privacyPolicyPage} />;
}
