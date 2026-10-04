import type { Metadata } from "next";
import EventContentHeroV2 from "components/seo-services/event-content-production/EventContentHeroV2";
import ContentIndustriesV2Section from "components/seo-services/event-content-production/ContentIndustriesV2Section";
import ShowPlanV2Section from "components/seo-services/event-content-production/ShowPlanV2Section";
import ProcessTimelineV2Section from "components/seo-services/event-content-production/ProcessTimelineV2Section";
import ContentIncludeScopeV2Section from "components/seo-services/event-content-production/ContentIncludeScopeV2Section";
import PreShowNeedsV2Section from "components/seo-services/event-content-production/PreShowNeedsV2Section";
import ExistingContentV2Section from "components/seo-services/event-content-production/ExistingContentV2Section";
import GettingStartedFAQV2Section from "components/seo-services/event-content-production/GettingStartedFAQV2Section";
import FinalCTAV2Section from "components/seo-services/event-content-production/FinalCTAV2Section";

export const metadata: Metadata = {
  title: "Event Content Production & Conference Video | DXG",
  description:
    "Event content production for conferences, videos & motion graphics. Get polished, screen ready content for show day. Explore DXG's services.",
};

export default function EventContentProductionV2Page() {
  return (
    <main className="min-h-screen bg-[#0A0F16] text-[#0A0F16]">
      {/* 1. Hero Section */}
      <EventContentHeroV2 />

      {/* 2. Industry Verticals Section */}
      <ContentIndustriesV2Section />

      {/* 4. Show Plan Principles Section */}
      <ShowPlanV2Section />

      {/* 5. Process Section (6 Stages & Photos) */}
      <ProcessTimelineV2Section />

      {/* 6. What Event Content Production Can Include (12 Scope Items) */}
      <ContentIncludeScopeV2Section />

      {/* 7. Pre-Show Content Requirements Checklist */}
      <PreShowNeedsV2Section />

      {/* 8. Existing Content Adaptation Section */}
      <ExistingContentV2Section />

      {/* 9. Getting Started Steps & Interactive FAQ Accordion */}
      <GettingStartedFAQV2Section />

      {/* 10. Final CTA Section */}
      <FinalCTAV2Section />
    </main>
  );
}
