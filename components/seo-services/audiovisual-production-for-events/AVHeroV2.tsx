"use client";

import Link from "next/link";
import React from "react";
import MasterPlaybackSchedule from "components/seo-services/event-content-production/MasterPlaybackSchedule";

export default function AVHeroV2() {
  return (
    <>
      <style jsx global>{`
        @keyframes pulse-dot {
          70% {
            box-shadow: 0 0 0 10px rgba(44, 188, 237, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(44, 188, 237, 0);
          }
        }

        .animate-pulse-dot {
          animation: pulse-dot 2s infinite;
        }
      `}</style>

      <header className="relative overflow-hidden bg-[#0A0F16] text-white pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-36 lg:pb-24">
        {/* Radial ambient glow */}
        <div
          className="absolute -right-[10%] -top-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(44, 188, 237, 0.16), transparent 62%)",
          }}
        />

        <div className="max-w-[1440px] 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 xl:col-span-5">
              {/* Kicker */}
              <div className="flex items-center gap-3 text-[#2CBCED] font-semibold text-sm sm:text-base mb-5 font-['Josefin_Sans',sans-serif]">
                <span className="w-8 h-[2px] bg-[#2CBCED] inline-block" />
                <span>Audiovisual Production for Events</span>
              </div>

              {/* H1 & H2 Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4 font-['Josefin_Sans',sans-serif]">
                Audiovisual Production for Events
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2CBCED] mb-6 font-['Josefin_Sans',sans-serif]">
                AV Should Support the Experience
              </h2>

              {/* Lede text */}
              <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed text-[#C9D3DC] mb-4 font-['IBM_Plex_Sans',sans-serif] max-w-[62ch]">
                Meeting planners carry tremendous responsibility. You should not have to become an audiovisual engineer just to understand what you are buying. DXG provides professional audiovisual production for corporate, association, medical, nonprofit, and education events nationwide. We explain the technical requirements in plain language so you always know exactly what is happening in the room.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-white font-medium mb-8 font-['IBM_Plex_Sans',sans-serif] max-w-[62ch]">
                When you hire a conference AV company, you deserve absolute clarity. Proposals often arrive packed with model numbers and confusing line items. We strip away the technical terminology. Our team explains how each piece of equipment serves a specific purpose for your attendees and your budget.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="https://www.dxg.agency/contact-us"
                  className="inline-flex items-center gap-2.5 bg-[#2CBCED] hover:bg-[#4CC9F0] text-[#0A0F16] font-semibold text-sm sm:text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 font-['Josefin_Sans',sans-serif]"
                >
                  Schedule a Strategy Call
                </Link>

                <a
                  href="#review"
                  className="inline-flex items-center gap-2.5 border border-white/35 hover:border-[#2CBCED] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 font-['Josefin_Sans',sans-serif]"
                >
                  Review My AV Proposal
                </a>
              </div>
            </div>

            {/* Right Run-of-Show & Media Playback Board Column */}
            <div className="lg:col-span-7 xl:col-span-7 w-full min-w-0">
              <MasterPlaybackSchedule />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
