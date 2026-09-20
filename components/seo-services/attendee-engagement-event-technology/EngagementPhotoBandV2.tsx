import React from "react";

export default function EngagementPhotoBandV2() {
  return (
    <div
      className="relative min-h-[clamp(300px,42vw,540px)] border-y border-[#1E2A36] text-white flex flex-col justify-end p-[22px_24px] sm:p-8 md:p-12"
      style={{
        background:
          "repeating-linear-gradient(135deg, #0F1822 0 14px, #121C27 14px 28px)",
      }}
    >
      <b className="font-['Josefin_Sans',sans-serif] text-lg sm:text-2xl font-semibold mb-2 text-white">
        Attendees Interacting with Live Audience Polling on Stage LED Wall
      </b>

      <p className="text-xs sm:text-sm text-[#C9D3DC] max-w-[68ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
        Audience members in a brightly lit keynote hall holding phones displaying live QR code poll interfaces while real-time survey results build dynamically across the main stage LED video wall.
      </p>
    </div>
  );
}
