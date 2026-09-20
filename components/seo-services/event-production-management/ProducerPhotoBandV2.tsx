import Image from "next/image";
import React from "react";

export default function ProducerPhotoBandV2() {
  return (
    <div className="relative min-h-[clamp(300px,42vw,540px)] border-y border-[#1E2A36] text-white flex flex-col justify-end p-[22px_24px] sm:p-8 md:p-12 overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/event-production-management/producer-at-front-of-house.webp"
        alt="DXG event producer directing live conference show flow at front of house tech table"
        title="DXG Producer Directing Live Event Front of House"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16] via-[#0A0F16]/75 to-transparent z-[1]" />

      <div className="relative z-10 max-w-[72ch]">
        <b className="font-['Josefin_Sans',sans-serif] text-lg sm:text-2xl font-semibold mb-2 text-white block">
          Producer at front of house
        </b>

        <p className="text-xs sm:text-sm text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
          Over-the-shoulder from behind the DXG producer at the tech table:
          headset on, run of show on a tablet, hand raised mid-cue. Beyond them,
          a wide general session stage lit in white and cool blue, audience heads
          in soft focus. Low key, one dominant light source. This is the &quot;one team
          looking at the entire event&quot; line made literal. No logos on screen
          content.
        </p>
      </div>
    </div>
  );
}
