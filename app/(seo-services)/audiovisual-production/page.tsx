import type { Metadata } from "next";
import AudiovisualProduction from "components/new-service-details/AudiovisualProduction";

export const metadata: Metadata = {
  title: "Audiovisual Production for Events | Digital Xperience Group",
  description:
    "Audiovisual production for events with professional sound, lighting, video, and staging. Keep your program clear, engaging, and on schedule.",
  alternates: {
    canonical: "https://www.dxg.agency/audiovisual-production",
  },
  openGraph: {
    title: "Audiovisual Production for Events | Digital Xperience Group",
    description:
      "Audiovisual production for events with professional sound, lighting, video, and staging. Keep your program clear, engaging, and on schedule.",
    url: "https://www.dxg.agency/audiovisual-production",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audiovisual Production for Events | Digital Xperience Group",
    description:
      "Audiovisual production for events with professional sound, lighting, video, and staging. Keep your program clear, engaging, and on schedule.",
  },
};

export default function AudiovisualProductionPage() {
  return <AudiovisualProduction />;
}
