import Image from "next/image";
import React from "react";

export default function PlanningPhotoBandV2() {
  return (
    <div className="relative w-full aspect-[21/9] min-h-[300px] border-y border-[#1E2A36] text-white flex flex-col justify-end p-[22px_24px] sm:p-8 md:p-12 overflow-hidden">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/meeting-planning-support/meeting-planning-support-banner.webp"
        alt="Professional meeting planning and support team coordinating onsite corporate event operations"
        title="Corporate Meeting Planning and Support Services"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />

      <div className="relative z-10 max-w-[72ch]">
        <b className="font-['Josefin_Sans',sans-serif] text-lg sm:text-2xl font-semibold mb-2 text-white block">
          Seamless Onsite Logistics & Planning Support
        </b>

        <p className="text-xs sm:text-sm text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
          Experienced event professionals supporting your internal team across registration, speaker ready rooms, VIP protocols, vendor coordination, and floor operations so your lead planner stays focused on program goals.
        </p>
      </div>
    </div>
  );
}
