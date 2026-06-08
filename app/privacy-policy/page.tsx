import LegalPage from "components/legal/LegalPage";
import { privacyPolicyPage } from "data/legalPages";

export const metadata = {
  title: "Privacy Policy | Digital Xperience Group",
  description:
    "Read the Digital Xperience Group privacy policy for details about collection, use, and disclosure of information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <LegalPage page={privacyPolicyPage} />;
}
