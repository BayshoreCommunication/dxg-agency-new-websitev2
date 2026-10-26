import AceFounderSection from "components/home/AceFounderSection";
import ChallengesHeroSection from "components/home/ChallengesHeroSection";
import CompanyOverviewSection from "components/home/CompanyOverviewSection";
import DifferentCard from "components/home/DifferentCard";
import HeroSection from "components/home/HeroSection";
import HowWeWorkSection from "components/home/HowWeWorkSection";
import LetsTalkSection from "components/shared/LetsTalkSection";
import OnePartnerMarqueeSection from "components/home/OnePartnerMarqueeSection";
import ProblemPlannersSection from "components/home/ProblemPlannersSection";
import SmarterApproachSection from "components/home/SmarterApproachSection";
import TrustedBrandsSection from "components/shared/TrustedBrandsSection";
import WhyPlannersChooseDXGSection from "components/home/WhyPlannersChooseDXGSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Production & AV Services | DXG Agency",
  description:
    "Plan successful conferences and live events with DXG Agency. Get expert AV production, hybrid event solutions, and seamless event management.",
  alternates: {
    canonical: "https://www.dxg.agency/",
  },
  openGraph: {
    title: "Event Production & AV Services | DXG Agency",
    description:
      "Plan successful conferences and live events with DXG Agency. Get expert AV production, hybrid event solutions, and seamless event management.",
    url: "https://www.dxg.agency/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Production & AV Services | DXG Agency",
    description:
      "Plan successful conferences and live events with DXG Agency. Get expert AV production, hybrid event solutions, and seamless event management.",
  },
};
export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanyOverviewSection />
      <AceFounderSection />
      <SmarterApproachSection />
      <ChallengesHeroSection />
      <ProblemPlannersSection />
      <OnePartnerMarqueeSection />
      <WhyPlannersChooseDXGSection />
      <HowWeWorkSection />
      <LetsTalkSection />
      <DifferentCard />
      <TrustedBrandsSection />
    </div>
  );
}
