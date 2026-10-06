"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EventProductionHeroV2() {
  return (
    <header className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0A0F16] text-white pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/seo-services/event-production-management/producer-at-front-of-house.webp"
          alt="DXG event producer directing live conference show flow at front of house tech table"
          title="DXG Producer Directing Live Event Front of House"
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
          Event Production Management
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2CBCED] mb-6 font-['Josefin_Sans',sans-serif]">
          The Same Production Team, Year After Year
        </h2>

        {/* Lede text */}
        <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed text-[#C9D3DC] mb-4 font-['IBM_Plex_Sans',sans-serif] max-w-[68ch]">
          When your event changes venues, preferred or exclusive AV agreements
          can decide who supplies equipment and operators. They don&apos;t
          decide who manages your production. DXG keeps your production
          leadership with your event year over year, sized to your program,
          while you keep the venue pricing on internet, rigging, and power that
          often rises when an outside AV company comes in.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-white font-medium mb-8 font-['IBM_Plex_Sans',sans-serif] max-w-[68ch]">
          In years when the venue&apos;s in-house team supplies the gear, your DXG
          team still runs the planning, coordination, and show-day process.
          Same people, same production plan, same standards.
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
            href="#process"
            className="inline-flex items-center gap-2.5 border border-white/35 hover:border-[#2CBCED] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 font-['Josefin_Sans',sans-serif]"
          >
            Explore Production Process
          </a>
        </div>
      </div>
    </header>
  );
}
