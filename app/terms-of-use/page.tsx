import LegalPage from "components/legal/LegalPage";
import { termsOfUsePage } from "data/legalPages";

export const metadata = {
  title: "Terms of Use | Digital Xperience Group",
  description:
    "Read the Digital Xperience Group terms of use for website rules, license details, and disclaimers.",
  alternates: {
    canonical: "/terms-of-use",
  },
};

export default function TermsOfUsePage() {
  return <LegalPage page={termsOfUsePage} />;
}
