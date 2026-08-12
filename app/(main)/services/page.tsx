import ChallengesHeroSection from "components/home/ChallengesHeroSection";
import ServicesGridSection from "components/problems-we-solve/ServicesGridSection";
import LetsTalkSection from "components/shared/LetsTalkSection";
import PageBanner from "components/shared/PageBanner";
import TrustedBrandsSection from "components/shared/TrustedBrandsSection";
import React from "react";

export const metadata = {
  title: "Problems We Solve | DXG Agency SEO Web Solutions Services",
  description:
    "Explore DXG Agency's problems we solve across SEO, web development, and digital marketing to grow traffic, leads, and revenue for your business growth.",
  alternates: {
    canonical: "/services",
  },
};
const page = () => {
  return (
    <div>
      <PageBanner
        title="The Areas We Support Planners"
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
