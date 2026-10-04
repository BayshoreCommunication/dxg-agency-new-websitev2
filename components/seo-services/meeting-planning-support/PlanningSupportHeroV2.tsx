"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PlanningSupportHeroV2() {
  return (
    <header className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0A0F16] text-white pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/seo-services/meeting-planning-support/meeting-planning-support-banner.webp"
          alt="Professional meeting planning and support team coordinating onsite corporate event operations"
          title="Corporate Meeting Planning and Support Services"
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
          Meeting Planning Support
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2CBCED] mb-6 font-['Josefin_Sans',sans-serif]">
          Support for Your Event Planning Team
        </h2>

        {/* Lede text */}
        <p className="text-base sm:text-lg leading-relaxed text-[#C9D3DC] mb-4 font-['IBM_Plex_Sans',sans-serif] max-w-[68ch]">
          Great meetings depend on much more than what happens on stage. Registration must be completely ready before the first attendee walks into the building. Guests need clear directions and speakers require individual attention to feel prepared. Rooms must be turned quickly between sessions. Signage, vendor dock deliveries and sudden schedule changes require constant attention. Dozens of small operational details need solutions long before guests ever notice a problem.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-[#C9D3DC] mb-4 font-['IBM_Plex_Sans',sans-serif] max-w-[68ch]">
          DXG provides practical meeting planning support for corporate, association, medical, non profit and higher education events. Whether you are running a single day executive meeting or a multi day convention, we give your team qualified resources before and during the event.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-white font-medium mb-8 font-['IBM_Plex_Sans',sans-serif] max-w-[68ch]">
          We support internal corporate event teams, association planning departments, independent planners and third party agencies without altering your established structure. Your lead planner stays in total control. DXG supplies the operational experience and onsite event support where it delivers the greatest value.
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
            href="#logistics"
            className="inline-flex items-center gap-2.5 border border-white/35 hover:border-[#2CBCED] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 font-['Josefin_Sans',sans-serif]"
          >
            Explore Planning Logistics
          </a>
        </div>
      </div>
    </header>
  );
}
