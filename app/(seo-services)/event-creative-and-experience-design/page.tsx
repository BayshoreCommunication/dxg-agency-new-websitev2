import type { Metadata } from "next";
import CreativeHeroV2 from "components/seo-services/event-creative-and-experience-design/CreativeHeroV2";
import TechnicalPlanningV2Section from "components/seo-services/event-creative-and-experience-design/TechnicalPlanningV2Section";
import FormatDesignV2Section from "components/seo-services/event-creative-and-experience-design/FormatDesignV2Section";
import PreVisualizationV2Section from "components/seo-services/event-creative-and-experience-design/PreVisualizationV2Section";
import DualOpticsV2Section from "components/seo-services/event-creative-and-experience-design/DualOpticsV2Section";
import CreativeServicesGridV2Section from "components/seo-services/event-creative-and-experience-design/CreativeServicesGridV2Section";
import CreativeFinalCTAV2Section from "components/seo-services/event-creative-and-experience-design/CreativeFinalCTAV2Section";

export const metadata: Metadata = {
  title: "Event Creative & Experience Design Services",
  description:
    "Event Creative & Experience Design for visual concepts, messaging, staging and attendee touchpoints that support your program and audience.",
};

export default function EventCreativeAndExperienceDesignV2Page() {
  return (
    <main className="min-h-screen bg-[#0A0F16] text-[#0A0F16]">
      {/* 1. Hero Section */}
      <CreativeHeroV2 />

      {/* 2. Connect Creative Ideas With Technical Planning */}
      <TechnicalPlanningV2Section />

      {/* 4. Design Each Event Format Around Its Purpose */}
      <FormatDesignV2Section />

      {/* 5. Preview the Event Before Production Begins (3D Renderings & 4 Points of View) */}
      <PreVisualizationV2Section />

      {/* 6. Design for the Room and the Camera (Dual Optics) */}
      <DualOpticsV2Section />

      {/* 7. Explore Our Creative and Experience Design Services (12 Capabilities Grid) */}
      <CreativeServicesGridV2Section />

      {/* 8. Plan Your Event Space From Concept to Production (Final CTA) */}
      <CreativeFinalCTAV2Section />
    </main>
  );
}
