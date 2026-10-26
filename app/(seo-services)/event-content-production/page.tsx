import type { Metadata } from "next";
import EventContentProduction from "components/new-service-details/EventContentProduction";

export const metadata: Metadata = {
  title: "Event Content Production & Conference Video | DXG",
  description:
    "Event content production for conferences, videos & motion graphics. Get polished, screen ready content for show day. Explore DXG's services.",
  alternates: {
    canonical: "https://www.dxg.agency/event-content-production",
  },
  openGraph: {
    title: "Event Content Production & Conference Video | DXG",
    description:
      "Event content production for conferences, videos & motion graphics. Get polished, screen ready content for show day. Explore DXG's services.",
    url: "https://www.dxg.agency/event-content-production",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Content Production & Conference Video | DXG",
    description:
      "Event content production for conferences, videos & motion graphics. Get polished, screen ready content for show day. Explore DXG's services.",
  },
};

export default function EventContentProductionPage() {
  return <EventContentProduction />;
}
