import Image from "next/image";
import React from "react";

export default function ProducerPhotoBandV2() {
  return (
    <div className="relative w-full aspect-[21/9] min-h-[300px] border-y border-[#1E2A36] overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/event-production-management/producer-at-front-of-house.webp"
        alt="DXG event producer directing live conference show flow at front of house tech table"
        title="DXG Producer Directing Live Event Front of House"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}
