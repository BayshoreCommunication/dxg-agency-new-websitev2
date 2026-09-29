import Image from "next/image";
import React from "react";

export default function ContentPhotoBandV2() {
  return (
    <div className="relative w-full aspect-[21/9] min-h-[300px] border-y border-[#1E2A36] overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/event-content-production/event-content-production-banner.webp"
        alt="DXG Event Content Production team directing screen graphics and media playback at front of house"
        title="DXG Event Content Production Banner & Screen Directing"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}
