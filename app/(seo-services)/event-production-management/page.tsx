import type { Metadata } from "next";
import EventProductionHeroV2 from "components/seo-services/event-production-management/EventProductionHeroV2";
import ProducerPhotoBandV2 from "components/seo-services/event-production-management/ProducerPhotoBandV2";
import IndustriesV2Section from "components/seo-services/event-production-management/IndustriesV2Section";
import InHouseAVV2Section from "components/seo-services/event-production-management/InHouseAVV2Section";
import ProcessTimelineV2Section from "components/seo-services/event-production-management/ProcessTimelineV2Section";
import EngagementScopeV2Section from "components/seo-services/event-production-management/EngagementScopeV2Section";
import ProposalReviewV2Section from "components/seo-services/event-production-management/ProposalReviewV2Section";
import GettingStartedFAQV2Section from "components/seo-services/event-production-management/GettingStartedFAQV2Section";
import FinalCTAV2Section from "components/seo-services/event-production-management/FinalCTAV2Section";

export const metadata: Metadata = {
  title: "Event Production Management | DXG",
  description:
    "DXG provides event production management for corporate, association, medical, nonprofit and education events, bringing budget, vendors, schedule and show flow into one plan.",
};

export default function EventProductionManagementV2Page() {
  return (
    <main className="min-h-screen bg-[#0A0F16] text-[#0A0F16]">
      {/* 1. Hero Section & Run of Show Board */}
      <EventProductionHeroV2 />

      {/* 2. Full Bleed Producer Photo Band (Photo 01) */}
      <ProducerPhotoBandV2 />

      {/* 3. Industry Verticals Section */}
      <IndustriesV2Section />

      {/* 4. In-House AV Section & 3 Model Cards */}
      <InHouseAVV2Section />

      {/* 5. Process Section (6 Stages & Photos 03-05) */}
      <ProcessTimelineV2Section />

      {/* 6. Phased Engagement Scope Grid */}
      <EngagementScopeV2Section />

      {/* 7. Proposal Review Section & Checklist (#review) */}
      <ProposalReviewV2Section />

      {/* 8. Getting Started Steps & Interactive FAQ Accordion */}
      <GettingStartedFAQV2Section />

      {/* 9. Final CTA Section (Photo 07 & Booking Card) */}
      <FinalCTAV2Section />
    </main>
  );
}
