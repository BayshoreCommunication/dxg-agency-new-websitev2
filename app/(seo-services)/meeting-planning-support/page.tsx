import type { Metadata } from "next";
import PlanningSupportHeroV2 from "components/seo-services/meeting-planning-support/PlanningSupportHeroV2";
import PreEventLogisticsV2Section from "components/seo-services/meeting-planning-support/PreEventLogisticsV2Section";
import RegistrationAttendeeV2Section from "components/seo-services/meeting-planning-support/RegistrationAttendeeV2Section";
import OnsiteOperationsV2Section from "components/seo-services/meeting-planning-support/OnsiteOperationsV2Section";
import SessionSpeakerCoordinationV2Section from "components/seo-services/meeting-planning-support/SessionSpeakerCoordinationV2Section";
import OperationsAndTechSupportV2Section from "components/seo-services/meeting-planning-support/OperationsAndTechSupportV2Section";
import PlanningFinalCTAV2Section from "components/seo-services/meeting-planning-support/PlanningFinalCTAV2Section";

export const metadata: Metadata = {
  title: "Meeting Planning Support | Event Planning Services",
  description:
    "Meeting Planning Support for agendas, schedules, vendors, logistics and on site details, helping your team keep every planning task organized.",
};

export default function MeetingPlanningSupportV2Page() {
  return (
    <main className="min-h-screen bg-[#0A0F16] text-[#0A0F16]">
      {/* 1. Hero Section */}
      <PlanningSupportHeroV2 />

      {/* 2. Pre Event Planning and Logistics (14 Support Points) */}
      <PreEventLogisticsV2Section />

      {/* 4. Registration & Attendee Management */}
      <RegistrationAttendeeV2Section />

      {/* 5. Onsite Meeting & Conference Operations (16 Floor Operations) */}
      <OnsiteOperationsV2Section />

      {/* 6. Session and Speaker Coordination */}
      <SessionSpeakerCoordinationV2Section />

      {/* 7. Contingency, Onsite Tech Support, Reconciliation & Flexible Staffing */}
      <OperationsAndTechSupportV2Section />

      {/* 8. Build the Right Support Team for Your Event (Final CTA) */}
      <PlanningFinalCTAV2Section />
    </main>
  );
}
