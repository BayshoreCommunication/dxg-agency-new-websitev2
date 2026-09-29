import Image from "next/image";
import React from "react";

export default function HybridPhotoBandV2() {
  return (
    <div className="relative w-full aspect-[21/9] min-h-[300px] border-y border-[#1E2A36] overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/hybrid-and-virtual-event-production/hybrid-event-stream-producer-control-console.webp"
        alt="Producer monitoring dual screens: ballroom stage live feed on the left, virtual streaming broadcast output with lower thirds and remote speaker tiles on the right."
        title="Hybrid Event Stream Producer at Control Console"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}
