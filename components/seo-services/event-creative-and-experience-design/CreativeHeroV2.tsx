"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CreativeHeroV2() {
  return (
    <header className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0A0F16] text-white pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/seo-services/event-creative-and-experience-design/event-creative-experience-design-banner.webp"
          alt="DXG Event Experience Design team managing spatial stage architecture and 3D pre-visualization"
          title="DXG Event Creative & Experience Design Banner"
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
          Event Creative & Experience Design
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2CBCED] mb-6 font-['Josefin_Sans',sans-serif]">
          Design the Stage and Space Around Your Event
        </h2>

        {/* Lede text */}
        <p className="text-base sm:text-lg leading-relaxed text-[#C9D3DC] mb-4 font-['IBM_Plex_Sans',sans-serif] max-w-[68ch]">
          A stage can hold a speaker. A thoughtfully designed environment can reinforce the message, brand and experience surrounding that speaker.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-[#C9D3DC] mb-4 font-['IBM_Plex_Sans',sans-serif] max-w-[68ch]">
          When attendees walk into a venue, they immediately estimate the energy, scale and intent of the program. DXG provides creative event design and event experience design for corporate, association, medical, nonprofit and education events. Our work ranges from general sessions and executive summits to branded environments. This is done through a combination of the creative direction and the technicalities of live performance. Your stage should look awesome as well as it should operate perfectly.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-white font-medium mb-8 font-['IBM_Plex_Sans',sans-serif] max-w-[68ch]">
          From the beginning our designers and producers collaborate together. Creative concepts are not developed in isolation and later handed to a production team to figure out. When event stage design and technical execution live in separate lanes, budgets inflate and great ideas collapse on show day. At DXG, the idea and the execution grow together. We consider ceiling heights, rigging capacities, line array placement and audience sightlines from the moment we begin sketching a design.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="https://www.dxg.agency/contact-us"
            className="inline-flex items-center gap-2.5 bg-[#2CBCED] hover:bg-[#4CC9F0] text-[#0A0F16] font-semibold text-sm sm:text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 font-['Josefin_Sans',sans-serif]"
          >
            Book a Working Session
          </Link>

          <a
            href="#3d-rendering"
            className="inline-flex items-center gap-2.5 border border-white/35 hover:border-[#2CBCED] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 font-['Josefin_Sans',sans-serif]"
          >
            Explore 3D Renderings
          </a>
        </div>
      </div>
    </header>
  );
}
