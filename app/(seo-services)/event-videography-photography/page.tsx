import type { Metadata } from "next";
import EventVideographyPhotography from "components/new-service-details/EventVideographyPhotography";

export const metadata: Metadata = {
  title: "Event Videography & Photography | Digital Xperience Group",
  description:
    "DXG plans and captures event videography and photography for keynotes, sessions, interviews, testimonials, recap videos, social content, and photography that stays useful long after the event ends.",
  alternates: {
    canonical: "/event-videography-photography",
  },
};

export default function EventVideographyPhotographyPage() {
  return <EventVideographyPhotography />;
}

