"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EventContentHeroV2() {
  return (
    <header className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0A0F16] text-white pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/seo-services/event-content-production/event-content-production-banner.webp"
          alt="DXG Event Content Production team directing screen graphics and media playback at front of house"
          title="DXG Event Content Production Banner & Screen Directing"
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
          Event Content Production
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2CBCED] mb-6 font-['Josefin_Sans',sans-serif]">
          What Happens on Screen Shapes the Event as Much as What Happens on Stage.
        </h2>

        {/* Lede text */}
        <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed text-[#C9D3DC] mb-8 font-['IBM_Plex_Sans',sans-serif] max-w-[68ch]">
          Your screens carry the story between speakers, build energy before sessions, guide the audience through each segment and give your brand a visible presence throughout the program. DXG creates event content production for conferences, meetings, awards programs and branded experiences, connecting creative work with the screens, playback systems and show flow, so every visual arrives ready for its live moment.
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
            href="#content-plan"
            className="inline-flex items-center gap-2.5 border border-white/35 hover:border-[#2CBCED] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 font-['Josefin_Sans',sans-serif]"
          >
            Start Your Content Plan
          </a>
        </div>
      </div>
    </header>
  );
}
