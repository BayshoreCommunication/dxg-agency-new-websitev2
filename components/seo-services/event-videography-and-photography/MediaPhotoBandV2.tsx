import Image from "next/image";
import React from "react";

export default function MediaPhotoBandV2() {
  return (
    <div className="relative w-full aspect-[21/9] min-h-[300px] border-y border-[#1E2A36] overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/event-videography-and-photography/event-videography-photography-banner.webp"
        alt="DXG Event Videography & Photography team capturing keynote presentations and conference moments"
        title="DXG Event Videography & Photography Banner"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}
