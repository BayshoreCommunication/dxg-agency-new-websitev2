import type { Metadata } from "next";
import EventProductionManagement from "components/new-service-details/EventProductionManagement";

export const metadata: Metadata = {
  title: "Event Production Management | Professional Event Services",
  description:
    "Event Production Management for well executed events, covering staging, technical production, and on-site coordination. Explore our services.",
  alternates: {
    canonical: "/event-production-management",
  },
};

export default function EventProductionManagementPage() {
  return <EventProductionManagement />;
}
