import BusinessNextLevelSection from "components/difference/BusinessNextLevelSection";
import WhyPlannersChooseDXGSection from "components/home/WhyPlannersChooseDXGSection";
import LetsTalkSection from "components/shared/LetsTalkSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";
export const metadata = {
  title: "The DXG Difference | Event Production That Stands Out",
  description:
    "Discover the DXG difference in event production, audiovisual design, and live experiences. We create impactful, seamless events that engage audiences.",
  alternates: {
    canonical: "/difference",
  },
};
const page = () => {
  return (
    <div>
      <PageBanner
        title="The DXG Difference"
        backgroundImage="/images/banners/problems-we-solve-banner.png"
      />

      <WhyPlannersChooseDXGSection />
      <BusinessNextLevelSection />
      <LetsTalkSection />
    </div>
  );
};

export default page;
