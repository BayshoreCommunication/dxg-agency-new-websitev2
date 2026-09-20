import type { Metadata } from "next";
import AVHeroV2 from "components/seo-services/audiovisual-production-for-events/AVHeroV2";
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

      {/* 2. Our Approach Starts with the Program */}
      <AVApproachSection />

      {/* 3. Operational Standards, Contracts & Rehearsals */}
      <AVStandardsSection />

      {/* 4. Audiovisual Production Capabilities */}
      <AVCapabilitiesSection />

      {/* 5. General Session Production */}
      <GeneralSessionSection />

      {/* 6. The DXG Difference & Strategy Call CTA */}
      <DXGDifferenceCTASection />
    </main>
  );
}
