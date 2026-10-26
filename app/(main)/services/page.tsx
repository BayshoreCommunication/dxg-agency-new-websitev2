import ChallengesHeroSection from "components/home/ChallengesHeroSection";
import ServicesGridSection from "components/problems-we-solve/ServicesGridSection";
import LetsTalkSection from "components/shared/LetsTalkSection";
import PageBanner from "components/shared/PageBanner";
import TrustedBrandsSection from "components/shared/TrustedBrandsSection";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Event Production Services | AV Solutions | DXG Agency",
  description:
    "Explore DXG Agency’s event production services, including AV production, hybrid events, attendee engagement, and creative solutions for seamless events.",
  alternates: {
    canonical: "https://www.dxg.agency/services",
  },
  openGraph: {
    title: "Event Production Services | AV Solutions | DXG Agency",
    description:
      "Explore DXG Agency’s event production services, including AV production, hybrid events, attendee engagement, and creative solutions for seamless events.",
    url: "https://www.dxg.agency/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Production Services | AV Solutions | DXG Agency",
    description:
      "Explore DXG Agency’s event production services, including AV production, hybrid events, attendee engagement, and creative solutions for seamless events.",
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
