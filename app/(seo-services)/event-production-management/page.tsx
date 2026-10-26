import type { Metadata } from "next";
import EventProductionManagement from "components/new-service-details/EventProductionManagement";

export const metadata: Metadata = {
  title: "Event Production Management | Professional Event Services",
  description:
    "Event Production Management for well executed events, covering staging, technical production, and on-site coordination. Explore our services.",
  alternates: {
    canonical: "https://www.dxg.agency/event-production-management",
  },
  openGraph: {
    title: "Event Production Management | Professional Event Services",
    description:
      "Event Production Management for well executed events, covering staging, technical production, and on-site coordination. Explore our services.",
    url: "https://www.dxg.agency/event-production-management",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Production Management | Professional Event Services",
    description:
      "Event Production Management for well executed events, covering staging, technical production, and on-site coordination. Explore our services.",
  },
};

export default function EventProductionManagementPage() {
  return <EventProductionManagement />;
}
