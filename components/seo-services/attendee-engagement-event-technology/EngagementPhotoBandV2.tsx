import Image from "next/image";
import React from "react";

export default function EngagementPhotoBandV2() {
  return (
    <div className="relative min-h-[clamp(300px,42vw,540px)] border-y border-[#1E2A36] text-white flex flex-col justify-end p-[22px_24px] sm:p-8 md:p-12 overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/attendee-engagement-and-event-technology/attendees-interacting-with-live-polling.webp"
        alt="Audience members in a brightly lit keynote hall holding phones displaying live QR code poll interfaces while real-time survey results build dynamically across the main stage LED video wall."
        title="Attendees Interacting with Live Audience Polling on Stage LED Wall"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16] via-[#0A0F16]/75 to-transparent z-[1]" />

      <div className="relative z-10 max-w-[72ch]">
        <b className="font-['Josefin_Sans',sans-serif] text-lg sm:text-2xl font-semibold mb-2 text-white block">
          Attendees Interacting with Live Audience Polling on Stage LED Wall
        </b>

        <p className="text-xs sm:text-sm text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
          Audience members in a brightly lit keynote hall holding phones displaying live QR code poll interfaces while real-time survey results build dynamically across the main stage LED video wall.
        </p>
      </div>
    </div>
  );
}
