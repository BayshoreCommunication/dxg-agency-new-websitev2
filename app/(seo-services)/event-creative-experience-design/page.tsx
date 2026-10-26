import type { Metadata } from "next";
import EventCreativeExperienceDesign from "components/new-service-details/EventCreativeExperienceDesign";

export const metadata: Metadata = {
  title: "Event Creative & Experience Design Services",
  description:
    "Event Creative & Experience Design for visual concepts, messaging, staging and attendee touchpoints that support your program and audience.",
  alternates: {
    canonical: "https://www.dxg.agency/event-creative-experience-design",
  },
  openGraph: {
    title: "Event Creative & Experience Design Services",
    description:
      "Event Creative & Experience Design for visual concepts, messaging, staging and attendee touchpoints that support your program and audience.",
    url: "https://www.dxg.agency/event-creative-experience-design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Creative & Experience Design Services",
    description:
      "Event Creative & Experience Design for visual concepts, messaging, staging and attendee touchpoints that support your program and audience.",
  },
};

export default function EventCreativeExperienceDesignPage() {
  return <EventCreativeExperienceDesign />;
}
