import type { Metadata } from "next";
import AudiovisualProduction from "components/new-service-details/AudiovisualProduction";

export const metadata: Metadata = {
  title: "Audiovisual Production for Events | Digital Xperience Group",
  description:
    "Audiovisual production for events with professional sound, lighting, video, and staging. Keep your program clear, engaging, and on schedule.",
  alternates: {
    canonical: "/audiovisual-production",
  },
};

export default function AudiovisualProductionPage() {
  return <AudiovisualProduction />;
}
