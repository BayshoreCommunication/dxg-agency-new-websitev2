import type { Metadata } from "next";
import EventCreativeExperienceDesign from "components/new-service-details/EventCreativeExperienceDesign";

export const metadata: Metadata = {
  title: "Event Creative & Experience Design Services",
  description:
    "Event Creative & Experience Design for visual concepts, messaging, staging and attendee touchpoints that support your program and audience.",
  alternates: {
    canonical: "/event-creative-experience-design",
  },
};

export default function EventCreativeExperienceDesignPage() {
  return <EventCreativeExperienceDesign />;
}
