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

export const metadata = {
  title: "Digital Xperience Group",
  description:
    "Digital Xperience Group (DXG): audiovisual production agency for meeting planners who want more control, clarity, and confidence — across conferences, events, and hybrid experiences",
  alternates: {
    canonical: "/",
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
