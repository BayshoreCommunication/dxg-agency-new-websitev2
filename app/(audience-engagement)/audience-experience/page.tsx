import type { Metadata } from "next";
import AudianceExpe from "components/audience-engagement/AudianceExpe";

export const metadata: Metadata = {
  title: "Audience Experience | Digital Xperience Group",
  description:
    "An interactive audience experience field guide from Digital Xperience Group.",
  alternates: {
    canonical: "https://www.dxg.agency/audience-experience",
  },
  openGraph: {
    title: "Audience Experience | Digital Xperience Group",
    description:
      "An interactive audience experience field guide from Digital Xperience Group.",
    url: "https://www.dxg.agency/audience-experience",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audience Experience | Digital Xperience Group",
    description:
      "An interactive audience experience field guide from Digital Xperience Group.",
  },
};

const AudienceExperiencePage = () => {
  return (
    <main className="bg-black px-0 pb-8 pt-24 sm:pb-12 sm:pt-28">
      <div className="mx-auto w-full max-w-[992px] overflow-hidden bg-black">
        <AudianceExpe />
      </div>
    </main>
  );
};

export default AudienceExperiencePage;
