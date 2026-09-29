import Image from "next/image";
import React from "react";

export default function AVPhotoBandV2() {
  return (
    <div className="relative w-full aspect-[21/9] min-h-[300px] border-y border-[#1E2A36] overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/audiovisual-production-for-events/audiovisual-engineers-at-tech-table.webp"
        alt="Over-the-shoulder view from behind DXG audio and video engineers at the main control console with headset on, digital audio mixing desk illuminated, and multi-view camera monitors displaying live stage feeds."
        title="Audiovisual Engineers at Tech Table"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}
