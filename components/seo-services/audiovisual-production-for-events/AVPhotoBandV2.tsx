import React from "react";

export default function AVPhotoBandV2() {
  return (
    <div
      className="relative min-h-[clamp(300px,42vw,540px)] border-y border-[#1E2A36] text-white flex flex-col justify-end p-[22px_24px] sm:p-8 md:p-12"
      style={{
        background:
          "repeating-linear-gradient(135deg, #0F1822 0 14px, #121C27 14px 28px)",
      }}
    >
      <div className="absolute top-3.5 left-4 sm:top-5 sm:left-6 font-['Josefin_Sans',sans-serif] font-bold text-xs text-[#0A0F16] bg-[#2CBCED] px-2.5 py-1 rounded-[2px] uppercase tracking-wider">
        PHOTO 01
      </div>

      <div className="absolute top-3.5 right-4 sm:top-5 sm:right-6 font-['Josefin_Sans',sans-serif] text-xs text-[#2CBCED]">
        21:9 · full bleed
      </div>

      <b className="font-['Josefin_Sans',sans-serif] text-lg sm:text-2xl font-semibold mb-2 text-white">
        Audiovisual Engineers at Tech Table
      </b>

      <p className="text-xs sm:text-sm text-[#C9D3DC] max-w-[68ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
        Over-the-shoulder from behind the DXG audio and video engineers at the main control console: headset on, digital audio mixing desk illuminated, multi-view camera monitors showing live stage feeds. Wide ballroom stage lit in vibrant brand colors.
      </p>
    </div>
  );
}
