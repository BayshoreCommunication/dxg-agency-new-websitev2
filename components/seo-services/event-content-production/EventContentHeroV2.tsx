"use client";

import Link from "next/link";
import React from "react";
import MasterPlaybackSchedule from "./MasterPlaybackSchedule";

export default function EventContentHeroV2() {
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
                <span>Event Content Production</span>
              </div>

              {/* H1 & H2 Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4 font-['Josefin_Sans',sans-serif]">
                Event Content Production
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2CBCED] mb-6 font-['Josefin_Sans',sans-serif]">
                What Happens on Screen Shapes the Event as Much as What Happens on Stage.
              </h2>

              {/* Lede text */}
              <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed text-[#C9D3DC] mb-8 font-['IBM_Plex_Sans',sans-serif] max-w-[62ch]">
                Your screens carry the story between speakers, build energy before sessions, guide the audience through each segment and give your brand a visible presence throughout the program. DXG creates event content production for conferences, meetings, awards programs and branded experiences, connecting creative work with the screens, playback systems and show flow, so every visual arrives ready for its live moment.
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
                  href="#content-plan"
                  className="inline-flex items-center gap-2.5 border border-white/35 hover:border-[#2CBCED] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 font-['Josefin_Sans',sans-serif]"
                >
                  Start Your Content Plan
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
