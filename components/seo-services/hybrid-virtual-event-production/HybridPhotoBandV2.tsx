import Image from "next/image";
import React from "react";

export default function HybridPhotoBandV2() {
  return (
    <div className="relative min-h-[clamp(300px,42vw,540px)] border-y border-[#1E2A36] text-white flex flex-col justify-end p-[22px_24px] sm:p-8 md:p-12 overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/hybrid-and-virtual-event-production/hybrid-event-stream-producer-control-console.webp"
        alt="Producer monitoring dual screens: ballroom stage live feed on the left, virtual streaming broadcast output with lower thirds and remote speaker tiles on the right."
        title="Hybrid Event Stream Producer at Control Console"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16] via-[#0A0F16]/75 to-transparent z-[1]" />

      <div className="relative z-10 max-w-[72ch]">
        <b className="font-['Josefin_Sans',sans-serif] text-lg sm:text-2xl font-semibold mb-2 text-white block">
          Hybrid Event Stream Producer at Control Console
        </b>

        <p className="text-xs sm:text-sm text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
          Producer monitoring dual screens: ballroom stage live feed on the left, virtual streaming broadcast output with lower thirds and remote speaker tiles on the right. Smooth, synchronized production.
        </p>
      </div>
    </div>
  );
}
