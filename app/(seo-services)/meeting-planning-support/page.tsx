import type { Metadata } from "next";
import MeetingPlanningSupport from "components/new-service-details/MeetingPlanningSupport";

export const metadata: Metadata = {
  title: "Meeting Planning Support | Event Planning Services",
  description:
    "Meeting Planning Support for agendas, schedules, vendors, logistics and on site details, helping your team keep every planning task organized.",
  alternates: {
    canonical: "https://www.dxg.agency/meeting-planning-support",
  },
  openGraph: {
    title: "Meeting Planning Support | Event Planning Services",
    description:
      "Meeting Planning Support for agendas, schedules, vendors, logistics and on site details, helping your team keep every planning task organized.",
    url: "https://www.dxg.agency/meeting-planning-support",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meeting Planning Support | Event Planning Services",
    description:
      "Meeting Planning Support for agendas, schedules, vendors, logistics and on site details, helping your team keep every planning task organized.",
  },
};

export default function MeetingPlanningSupportPage() {
  return <MeetingPlanningSupport />;
}
