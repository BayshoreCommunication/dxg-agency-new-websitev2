import type { Metadata } from "next";
import AVHeroV2 from "components/seo-services/audiovisual-production-for-events/AVHeroV2";
import AVPhotoBandV2 from "components/seo-services/audiovisual-production-for-events/AVPhotoBandV2";
import AVApproachSection from "components/seo-services/audiovisual-production-for-events/AVApproachSection";
import AVStandardsSection from "components/seo-services/audiovisual-production-for-events/AVStandardsSection";
import AVCapabilitiesSection from "components/seo-services/audiovisual-production-for-events/AVCapabilitiesSection";
import GeneralSessionSection from "components/seo-services/audiovisual-production-for-events/GeneralSessionSection";
import DXGDifferenceCTASection from "components/seo-services/audiovisual-production-for-events/DXGDifferenceCTASection";

export const metadata: Metadata = {
  title: "Audiovisual Production for Events | Digital Xperience Group",
  description:
    "Audiovisual production for events with professional sound, lighting, video, and staging. Keep your program clear, engaging, and on schedule.",
};

export default function AudiovisualProductionForEventsPage() {
  return (
    <main className="min-h-screen bg-[#0A0F16] text-[#0A0F16]">
      {/* 1. Hero Section & Tech Control Panel */}
      <AVHeroV2 />

      {/* 2. Full Bleed Producer/AV Photo Band (Photo 01) */}
      <AVPhotoBandV2 />

      {/* 3. Our Approach Starts with the Program (Photo 02) */}
      <AVApproachSection />

      {/* 4. Operational Standards, Contracts & Rehearsals (Photo 03, Photo 04, Photo 05) */}
      <AVStandardsSection />

      {/* 5. Audiovisual Production Capabilities */}
      <AVCapabilitiesSection />

      {/* 6. General Session Production (Photo 06) */}
      <GeneralSessionSection />

      {/* 7. The DXG Difference & Strategy Call CTA (Photo 07) */}
      <DXGDifferenceCTASection />
    </main>
  );
}
