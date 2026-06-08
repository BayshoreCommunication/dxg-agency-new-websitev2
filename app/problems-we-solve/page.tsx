import ChallengesHeroSection from "components/home/ChallengesHeroSection";
import ServicesGridSection from "components/problems-we-solve/ServicesGridSection";
import LetsTalkSection from "components/shared/LetsTalkSection";
import PageBanner from "components/shared/PageBanner";
import TrustedBrandsSection from "components/shared/TrustedBrandsSection";
import React from "react";

export const metadata = {
  title: "Digital Xperience Group",
  description:
    "Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences.",
  alternates: {
    canonical: "/",
  },
};
const page = () => {
  return (
    <div>
      <PageBanner
        title="The Problem Most Planners Face"
        backgroundImage="/images/banners/problems-we-solve-banner.png"
      />
      <ServicesGridSection />
      <ChallengesHeroSection />
      <LetsTalkSection />
      <TrustedBrandsSection />
    </div>
  );
};

export default page;
