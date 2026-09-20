import Image from "next/image";
import React from "react";

export default function AVPhotoBandV2() {
  return (
    <div className="relative min-h-[clamp(300px,42vw,540px)] border-y border-[#1E2A36] text-white flex flex-col justify-end p-[22px_24px] sm:p-8 md:p-12 overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/audiovisual-production-for-events/audiovisual-engineers-at-tech-table.webp"
        alt="Over-the-shoulder view from behind DXG audio and video engineers at the main control console with headset on, digital audio mixing desk illuminated, and multi-view camera monitors displaying live stage feeds."
        title="Audiovisual Engineers at Tech Table"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16] via-[#0A0F16]/75 to-transparent z-[1]" />

      <div className="relative z-10 max-w-[72ch]">
        <b className="font-['Josefin_Sans',sans-serif] text-lg sm:text-2xl font-semibold mb-2 text-white block">
          Audiovisual Engineers at Tech Table
        </b>

        <p className="text-xs sm:text-sm text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
          Over-the-shoulder from behind the DXG audio and video engineers at the main control console: headset on, digital audio mixing desk illuminated, multi-view camera monitors showing live stage feeds. Wide ballroom stage lit in vibrant brand colors.
        </p>
      </div>
    </div>
  );
}
