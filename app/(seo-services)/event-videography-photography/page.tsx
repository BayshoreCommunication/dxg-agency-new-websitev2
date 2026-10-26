import type { Metadata } from "next";
import EventVideographyPhotography from "components/new-service-details/EventVideographyPhotography";

export const metadata: Metadata = {
  title: "Event Videography & Photography | DXG",
  description:
    "Event videography and photography for conferences, keynotes and testimonials. Create useful content beyond the event. Plan your event coverage.",
  alternates: {
    canonical: "https://www.dxg.agency/event-videography-photography",
  },
  openGraph: {
    title: "Event Videography & Photography | DXG",
    description:
      "Event videography and photography for conferences, keynotes and testimonials. Create useful content beyond the event. Plan your event coverage.",
    url: "https://www.dxg.agency/event-videography-photography",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Videography & Photography | DXG",
    description:
      "Event videography and photography for conferences, keynotes and testimonials. Create useful content beyond the event. Plan your event coverage.",
  },
};

export default function EventVideographyPhotographyPage() {
  return <EventVideographyPhotography />;
}

