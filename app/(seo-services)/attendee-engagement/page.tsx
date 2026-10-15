import type { Metadata } from "next";
import AttendeeEngagement from "components/new-service-details/AttendeeEngagement";

export const metadata: Metadata = {
  title: "Event Technology & Attendee Engagement | DXG",
  description:
    "Event technology for conferences, from live polling to networking tools. Get attendees participating and every cue on time. Request a plan.",
  alternates: {
    canonical: "/attendee-engagement",
  },
};

export default function AttendeeEngagementPage() {
  return <AttendeeEngagement />;
}
