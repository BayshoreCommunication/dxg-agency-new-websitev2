import type { Metadata } from "next";
import HybridHeroV2 from "components/seo-services/hybrid-virtual-event-production/HybridHeroV2";
import HybridPhotoBandV2 from "components/seo-services/hybrid-virtual-event-production/HybridPhotoBandV2";
import RemoteAudienceSection from "components/seo-services/hybrid-virtual-event-production/RemoteAudienceSection";
import HybridFormatsSection from "components/seo-services/hybrid-virtual-event-production/HybridFormatsSection";
import HybridProcessSection from "components/seo-services/hybrid-virtual-event-production/HybridProcessSection";
import HybridScopeSection from "components/seo-services/hybrid-virtual-event-production/HybridScopeSection";
import HybridFAQV2Section from "components/seo-services/hybrid-virtual-event-production/HybridFAQV2Section";
import HybridFinalCTAV2Section from "components/seo-services/hybrid-virtual-event-production/HybridFinalCTAV2Section";

export const metadata: Metadata = {
  title: "Hybrid & Virtual Event Production | DXG",
  description:
    "Hybrid & virtual event production for live and remote audiences. Keep every speaker, stream and session connected with one production team. Call us 855 282 9394",
};

export default function HybridAndVirtualEventProductionPage() {
  return (
    <main className="min-h-screen bg-[#0A0F16] text-[#0A0F16]">
      {/* 1. Hero Section & Stream Control Panel */}
      <HybridHeroV2 />

      {/* 2. Full Bleed Producer Photo Band (PHOTO 01) */}
      <HybridPhotoBandV2 />

      {/* 3. Make Remote Audience Feel Part Of The Event (PHOTO 02) */}
      <RemoteAudienceSection />

      {/* 4. Formats & Photo Placeholders (PHOTO 03, PHOTO 04, PHOTO 05) */}
      <HybridFormatsSection />

      {/* 5. 6-Stage Process Timeline */}
      <HybridProcessSection />

      {/* 6. Phased Scope, Services & Proposal Audit (PHOTO 06) */}
      <HybridScopeSection />

      {/* 7. Process Steps & Interactive FAQ Accordion */}
      <HybridFAQV2Section />

      {/* 8. Final CTA & Strategy Booking (PHOTO 07) */}
      <HybridFinalCTAV2Section />
    </main>
  );
}
