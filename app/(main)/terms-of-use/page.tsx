import LegalPage from "components/legal/LegalPage";
import { termsOfUsePage } from "data/legalPages";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | DXG Agency Event Production Policies",
  description:
    "Read DXG Agency’s Terms of Use for guidelines on website usage, intellectual property, and service conditions related to our event production services.",
  alternates: {
    canonical: "https://www.dxg.agency/terms-of-use",
  },
  openGraph: {
    title: "Terms of Use | DXG Agency Event Production Policies",
    description:
      "Read DXG Agency’s Terms of Use for guidelines on website usage, intellectual property, and service conditions related to our event production services.",
    url: "https://www.dxg.agency/terms-of-use",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | DXG Agency Event Production Policies",
    description:
      "Read DXG Agency’s Terms of Use for guidelines on website usage, intellectual property, and service conditions related to our event production services.",
  },
};

export default function TermsOfUsePage() {
  return <LegalPage page={termsOfUsePage} />;
}
