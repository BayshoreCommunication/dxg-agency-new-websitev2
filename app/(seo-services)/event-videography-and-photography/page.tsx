import type { Metadata } from "next";
import MediaHeroV2 from "components/seo-services/event-videography-and-photography/MediaHeroV2";
import EventFormatsV2Section from "components/seo-services/event-videography-and-photography/EventFormatsV2Section";
import PreCapturePlanningV2Section from "components/seo-services/event-videography-and-photography/PreCapturePlanningV2Section";
import PhotographyCoverageV2Section from "components/seo-services/event-videography-and-photography/PhotographyCoverageV2Section";
import VideographyServicesV2Section from "components/seo-services/event-videography-and-photography/VideographyServicesV2Section";
import ProductionIntegratedCaptureV2Section from "components/seo-services/event-videography-and-photography/ProductionIntegratedCaptureV2Section";
import LongTailMarketingV2Section from "components/seo-services/event-videography-and-photography/LongTailMarketingV2Section";
import CapturePlanFAQV2Section from "components/seo-services/event-videography-and-photography/CapturePlanFAQV2Section";
import MediaFinalCTAV2Section from "components/seo-services/event-videography-and-photography/MediaFinalCTAV2Section";

export const metadata: Metadata = {
  title: "Event Videography & Photography | DXG",
  description:
    "Event videography and photography for conferences, keynotes and testimonials. Create useful content beyond the event. Plan your event coverage.",
};

export default function EventVideographyAndPhotographyV2Page() {
  return (
    <main className="min-h-screen bg-[#0A0F16] text-[#0A0F16]">
      {/* 1. Hero Section */}
      <MediaHeroV2 />

      {/* 2. Type of Event We Built Around Your Program (8 Verticals) */}
      <EventFormatsV2Section />

      {/* 4. Plan the Content Before the Cameras Arrive */}
      <PreCapturePlanningV2Section />

      {/* 5. Photography That Captures People Behind the Program */}
      <PhotographyCoverageV2Section />

      {/* 6. Event Videography for Sessions, Speakers & Stories */}
      <VideographyServicesV2Section />

      {/* 7. Photo and Video Coverage Built Into the Live Production Plan (Before, During, After) */}
      <ProductionIntegratedCaptureV2Section />

      {/* 8. Turn One Event Into Content for Months of Marketing */}
      <LongTailMarketingV2Section />

      {/* 9. Build Your Event Capture Plan in 3 Steps & FAQ Accordion */}
      <CapturePlanFAQV2Section />

      {/* 10. Turn Your Event Into Content With Longer Life (Final CTA) */}
      <MediaFinalCTAV2Section />
    </main>
  );
}
