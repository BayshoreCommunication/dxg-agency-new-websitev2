import type { Metadata } from "next";
import EventContentProduction from "components/new-service-details/EventContentProduction";

export const metadata: Metadata = {
  title: "Event Content Production & Conference Video | DXG",
  description:
    "Event content production for conferences, videos & motion graphics. Get polished, screen ready content for show day. Explore DXG's services.",
  alternates: {
    canonical: "/event-content-production",
  },
};

export default function EventContentProductionPage() {
  return <EventContentProduction />;
}
