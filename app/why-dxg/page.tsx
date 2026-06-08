import BusinessNextLevelSection from "components/difference/BusinessNextLevelSection";
import WhyPlannersChooseDXGSection from "components/home/WhyPlannersChooseDXGSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

export const metadata = {
  title: "Digital Xperience Group",
  description:
    "Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences.",
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
