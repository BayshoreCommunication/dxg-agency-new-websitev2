import LetsTalkSection from "components/shared/LetsTalkSection";
import TrustedBrandsSection from "components/shared/TrustedBrandsSection";
import WhoWeAreSection from "components/our-process/WhoWeAreSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";
export const metadata = {
  title: "Digital Xperience Group",
  description:
    "Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences.",
  alternates: {
    canonical: "/problems-we-solve",
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
