import Image from "next/image";
import React from "react";

export default function CreativePhotoBandV2() {
  return (
    <div className="relative w-full aspect-[21/9] min-h-[300px] border-y border-[#1E2A36] text-white flex flex-col justify-end p-[22px_24px] sm:p-8 md:p-12 overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/event-creative-and-experience-design/event-creative-experience-design-banner.webp"
        alt="DXG Event Experience Design team managing spatial stage architecture and 3D pre-visualization"
        title="DXG Event Creative & Experience Design Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />

      <div className="relative z-10 max-w-[72ch]">
        <b className="font-['Josefin_Sans',sans-serif] text-lg sm:text-2xl font-semibold mb-2 text-white block">
          Spatial Creative Direction & Stage Architecture
        </b>

        <p className="text-xs sm:text-sm text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
          Designing stage environments, custom scenic backdrops, and attendee touchpoints that unify visual messaging with real-world venue rigging, camera optics, and structural execution.
        </p>
      </div>
    </div>
  );
}
