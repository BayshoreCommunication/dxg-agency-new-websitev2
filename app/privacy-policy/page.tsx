import LegalPage from "components/legal/LegalPage";
import { privacyPolicyPage } from "data/legalPages";

export const metadata = {
  title: "Privacy Policy | DXG Agency Event Production Company",
  description:
    "Read DXG Agency’s privacy policy to understand how we collect, use, and protect your data while delivering event production and digital services.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <LegalPage page={privacyPolicyPage} />;
}
