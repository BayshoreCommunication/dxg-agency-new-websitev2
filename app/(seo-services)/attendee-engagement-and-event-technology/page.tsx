import type { Metadata } from "next";
import EngagementHeroV2 from "components/seo-services/attendee-engagement-event-technology/EngagementHeroV2";
import EngagementPhotoBandV2 from "components/seo-services/attendee-engagement-event-technology/EngagementPhotoBandV2";
import EngagementProgramSection from "components/seo-services/attendee-engagement-event-technology/EngagementProgramSection";
import WhyInsideProductionSection from "components/seo-services/attendee-engagement-event-technology/WhyInsideProductionSection";
import EngagementSolutionsSection from "components/seo-services/attendee-engagement-event-technology/EngagementSolutionsSection";
import EngagementProcessSection from "components/seo-services/attendee-engagement-event-technology/EngagementProcessSection";
import EngagementAppReviewSection from "components/seo-services/attendee-engagement-event-technology/EngagementAppReviewSection";
import EngagementFAQV2Section from "components/seo-services/attendee-engagement-event-technology/EngagementFAQV2Section";
import EngagementFinalCTAV2Section from "components/seo-services/attendee-engagement-event-technology/EngagementFinalCTAV2Section";

export const metadata: Metadata = {
  title: "Event Technology & Attendee Engagement | DXG",
  description:
    "Event technology for conferences, from live polling to networking tools. Get attendees participating and every cue on time. Request a plan.",
};

export default function AttendeeEngagementAndEventTechnologyPage() {
  return (
    <main className="min-h-screen bg-[#0A0F16] text-[#0A0F16]">
      {/* 1. Hero Section & Polling Control Panel */}
      <EngagementHeroV2 />

      {/* 2. Full Bleed Producer Photo Band (PHOTO 01) */}
      <EngagementPhotoBandV2 />

      {/* 3. Event Technology Built Around Your Program (PHOTO 02) */}
      <EngagementProgramSection />

      {/* 4. Why Event Technology Works Better Inside the Production Plan (PHOTO 03, PHOTO 04, PHOTO 05) */}
      <WhyInsideProductionSection />

      {/* 5. Event Technology and Engagement Solutions */}
      <EngagementSolutionsSection />

      {/* 6. How We Plan Attendee Engagement Technology */}
      <EngagementProcessSection />

      {/* 7. Already Have an Event App Or Polling Platform? (PHOTO 06) */}
      <EngagementAppReviewSection />

      {/* 8. Getting Started Takes Three Steps & FAQ Accordion */}
      <EngagementFAQV2Section />

      {/* 9. Build Engagement Into The Program Before Show Day (PHOTO 07) */}
      <EngagementFinalCTAV2Section />
    </main>
  );
}
