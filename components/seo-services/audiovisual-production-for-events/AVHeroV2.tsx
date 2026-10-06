"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AVHeroV2() {
  return (
    <header className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0A0F16] text-white pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/seo-services/audiovisual-production-for-events/audiovisual-engineers-at-tech-table.webp"
          alt="Over-the-shoulder view from behind DXG audio and video engineers at the main control console with headset on, digital audio mixing desk illuminated, and multi-view camera monitors displaying live stage feeds."
          title="Audiovisual Engineers at Tech Table"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay that keeps the photo clearly visible while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F16]/75 via-[#0A0F16]/50 to-[#0A0F16]" />
      </div>

      <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* H1 & H2 Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4 font-['Josefin_Sans',sans-serif]">
          Audiovisual Production for Events
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2CBCED] mb-6 font-['Josefin_Sans',sans-serif]">
          Audiovisual Production Built Around Your Event
        </h2>

        {/* Lede text */}
        <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed text-[#C9D3DC] mb-4 font-['IBM_Plex_Sans',sans-serif] max-w-[68ch]">
          DXG brings audio, video, lighting, LED, projection, cameras, staging,
          playback, recording, and streaming together to make your event look
          and sound the way it should. We start with your program, your space,
          and your goals, then design the right system around them.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-white font-medium mb-8 font-['IBM_Plex_Sans',sans-serif] max-w-[68ch]">
          Designed by Engineers. Built around your program.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="https://www.dxg.agency/contact-us"
            className="inline-flex items-center gap-2.5 bg-[#2CBCED] hover:bg-[#4CC9F0] text-[#0A0F16] font-semibold text-sm sm:text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 font-['Josefin_Sans',sans-serif]"
          >
            Schedule a Strategy Call
          </Link>

          <a
            href="#capabilities"
            className="inline-flex items-center gap-2.5 border border-white/35 hover:border-[#2CBCED] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 font-['Josefin_Sans',sans-serif]"
          >
            Explore AV Capabilities
          </a>
        </div>
      </div>
    </header>
  );
}
