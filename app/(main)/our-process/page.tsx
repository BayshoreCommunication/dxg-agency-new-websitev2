import LetsTalkSection from "components/shared/LetsTalkSection";
import TrustedBrandsSection from "components/shared/TrustedBrandsSection";
import WhoWeAreSection from "components/our-process/WhoWeAreSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Xperience Group",
  description:
    "Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences.",
  alternates: {
    canonical: "https://www.dxg.agency/our-process",
  },
  openGraph: {
    title: "Digital Xperience Group",
    description:
      "Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences.",
    url: "https://www.dxg.agency/our-process",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Xperience Group",
    description:
      "Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences.",
  },
};
const page = () => {
  return (
    <div>
      <PageBanner
        title="How We Work"
        backgroundImage="/images/banners/our-process-banner.png"
      />
      <WhoWeAreSection />
      <LetsTalkSection />
      <TrustedBrandsSection />
    </div>
  );
};

export default page;
