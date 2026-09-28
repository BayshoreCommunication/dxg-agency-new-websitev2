import Image from "next/image";
import React from "react";

export default function ContentPhotoBandV2() {
  return (
    <div className="relative w-full aspect-[21/9] min-h-[300px] border-y border-[#1E2A36] text-white flex flex-col justify-end p-[22px_24px] sm:p-8 md:p-12 overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/event-content-production/event-content-production-banner.webp"
        alt="DXG Event Content Production team directing screen graphics and media playback at front of house"
        title="DXG Event Content Production Banner & Screen Directing"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />

      <div className="relative z-10 max-w-[72ch]">
        <b className="font-['Josefin_Sans',sans-serif] text-lg sm:text-2xl font-semibold mb-2 text-white block">
          Screen Media & Playback Control
        </b>

        <p className="text-xs sm:text-sm text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
          Over-the-shoulder from behind the DXG content producer at the tech table:
          headsets active, run of show and playback cues aligned on tablets and monitors.
          Beyond them, a wide general session LED stage displaying high-resolution motion
          graphics, walk-in visuals, and speaker media ready for live program execution.
        </p>
      </div>
    </div>
  );
}
