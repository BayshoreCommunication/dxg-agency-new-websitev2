import LegalPage from "components/legal/LegalPage";
import { termsOfUsePage } from "data/legalPages";

export const metadata = {
  title: "Terms of Use | DXG Agency Event Production Policies",
  description:
    "Read DXG Agency’s Terms of Use for guidelines on website usage, intellectual property, and service conditions related to our event production services.",
  alternates: {
    canonical: "/terms-of-use",
  },
};

export default function TermsOfUsePage() {
  return <LegalPage page={termsOfUsePage} />;
}
