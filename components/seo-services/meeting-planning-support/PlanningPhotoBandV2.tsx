import Image from "next/image";
import React from "react";

export default function PlanningPhotoBandV2() {
  return (
    <div className="relative w-full aspect-[21/9] min-h-[300px] border-y border-[#1E2A36] overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/meeting-planning-support/meeting-planning-support-banner.webp"
        alt="Professional meeting planning and support team coordinating onsite corporate event operations"
        title="Corporate Meeting Planning and Support Services"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}
