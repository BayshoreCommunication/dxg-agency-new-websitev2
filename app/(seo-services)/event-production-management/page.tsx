import type { Metadata } from "next";
import EventProductionHeroV2 from "components/seo-services/event-production-management/EventProductionHeroV2";
import IndustriesV2Section from "components/seo-services/event-production-management/IndustriesV2Section";
import ProcessTimelineV2Section from "components/seo-services/event-production-management/ProcessTimelineV2Section";
import EngagementScopeV2Section from "components/seo-services/event-production-management/EngagementScopeV2Section";
import GettingStartedFAQV2Section from "components/seo-services/event-production-management/GettingStartedFAQV2Section";
import FinalCTAV2Section from "components/seo-services/event-production-management/FinalCTAV2Section";

export const metadata: Metadata = {
  title: "Event Production Management | Professional Event Services",
  description:
    "Event Production Management for well executed events, covering staging, technical production, and on-site coordination. Explore our services.",
};

export default function EventProductionManagementV2Page() {
  return (
    <main className="min-h-screen bg-[#0A0F16] text-[#0A0F16]">
      {/* 1. Hero Section */}
      <EventProductionHeroV2 />

      {/* 2. Industry Verticals Section */}
      <IndustriesV2Section />

      {/* 3. Process Section (6 Stages & Photos 03-05) */}
      <ProcessTimelineV2Section />

      {/* 4. Phased Engagement Scope Grid */}
      <EngagementScopeV2Section />

      {/* 5. Getting Started Steps & Interactive FAQ Accordion */}
      <GettingStartedFAQV2Section />

      {/* 6. Final CTA Section (Photo 07 & Booking Card) */}
      <FinalCTAV2Section />
    </main>
  );
}
