import Image from "next/image";
import React from "react";

export default function CreativePhotoBandV2() {
  return (
    <div className="relative w-full aspect-[21/9] min-h-[300px] border-y border-[#1E2A36] overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/event-creative-and-experience-design/event-creative-experience-design-banner.webp"
        alt="DXG Event Experience Design team managing spatial stage architecture and 3D pre-visualization"
        title="DXG Event Creative & Experience Design Banner"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}
