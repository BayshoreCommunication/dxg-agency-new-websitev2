import BusinessNextLevelSection from "components/difference/BusinessNextLevelSection";
import LetsTalkSection from "components/shared/LetsTalkSection";
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
      <BusinessNextLevelSection />
      <LetsTalkSection />
    </div>
  );
};

export default page;
