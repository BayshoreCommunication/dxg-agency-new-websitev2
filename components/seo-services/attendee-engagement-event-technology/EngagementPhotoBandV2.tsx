import Image from "next/image";
import React from "react";

export default function EngagementPhotoBandV2() {
  return (
    <div className="relative w-full aspect-[21/9] min-h-[300px] border-y border-[#1E2A36] overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/attendee-engagement-and-event-technology/attendees-interacting-with-live-polling.webp"
        alt="Audience members in a brightly lit keynote hall holding phones displaying live QR code poll interfaces while real-time survey results build dynamically across the main stage LED video wall."
        title="Attendees Interacting with Live Audience Polling on Stage LED Wall"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}
