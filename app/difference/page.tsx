import BusinessNextLevelSection from "components/difference/BusinessNextLevelSection";
import WhyPlannersChooseDXGSection from "components/home/WhyPlannersChooseDXGSection";
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
        backgroundImage="/images/banners/our-difference-banner.png"
      />
      <WhyPlannersChooseDXGSection />
      <BusinessNextLevelSection />
    </div>
  );
};

export default page;
