import type { Metadata } from "next";
import AVHeroV2 from "components/seo-services/audiovisual-production-for-events/AVHeroV2";
import AVApproachSection from "components/seo-services/audiovisual-production-for-events/AVApproachSection";
import AVCapabilitiesSection from "components/seo-services/audiovisual-production-for-events/AVCapabilitiesSection";
import DXGDifferenceCTASection from "components/seo-services/audiovisual-production-for-events/DXGDifferenceCTASection";

export const metadata: Metadata = {
  title: "Audiovisual Production for Events | Digital Xperience Group",
  description:
    "Audiovisual production for events with professional sound, lighting, video, and staging. Keep your program clear, engaging, and on schedule.",
  alternates: {
    canonical: "/audiovisual-production",
  },
};

export default function AudiovisualProductionForEventsPage() {
  return (
    <main className="min-h-screen bg-[#0A0F16] text-[#0A0F16]">
      {/* 1. Hero Section */}
      <AVHeroV2 />

      {/* 2. Our Approach Starts with the Program (Photo 02) */}
      <AVApproachSection />

      {/* 3. Audiovisual Production Capabilities */}
      <AVCapabilitiesSection />

      {/* 4. The DXG Difference & Strategy Call CTA (Photo 07) */}
      <DXGDifferenceCTASection />
    </main>
  );
}
