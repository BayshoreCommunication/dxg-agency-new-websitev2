import type { Metadata } from "next";
import HybridAndVirtualEventProduction from "components/new-service-details/HybridAndVirtualEventProduction";

export const metadata: Metadata = {
  title: "Hybrid & Virtual Event Production | DXG",
  description:
    "Hybrid & virtual event production for live and remote audiences. Keep every speaker, stream and session connected with one production team. Call us 855 282 9394",
  alternates: {
    canonical: "/hybrid-virtual-event-production",
  },
};

export default function HybridAndVirtualEventProductionPage() {
  return <HybridAndVirtualEventProduction />;
}
