"use client";

import Link from "next/link";
import React from "react";

export default function MediaHeroV2() {
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

        @keyframes sweep-line {
          from {
            left: calc(22px + 96px + 6px);
          }
          to {
            left: calc(100% - 22px);
          }
        }

        @keyframes cell-in {
          to {
            opacity: 1;
          }
        }

        .animate-cue-sweep {
          animation: sweep-line 9s linear infinite;
        }

        .animate-cell-in {
          opacity: 0;
          animation: cell-in 0.5s ease forwards;
        }

        .animate-pulse-dot {
          animation: pulse-dot 2s infinite;
        }
      `}</style>

      <header className="relative overflow-hidden bg-[#0A0F16] text-white pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        {/* Radial ambient glow */}
        <div
          className="absolute -right-[10%] -top-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(44, 188, 237, 0.16), transparent 62%)",
          }}
        />

        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-7">
              {/* Kicker */}
              <div className="flex items-center gap-3 text-[#2CBCED] font-semibold text-sm sm:text-base mb-5 font-['Josefin_Sans',sans-serif]">
                <span className="w-8 h-[2px] bg-[#2CBCED] inline-block" />
                <span>Event Videography & Photography</span>
              </div>

              {/* H1 & H2 Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4 font-['Josefin_Sans',sans-serif]">
                Event Videography & Photography
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2CBCED] mb-6 font-['Josefin_Sans',sans-serif]">
                Capture More Than What Happened. Capture What Comes Next.
              </h2>

              {/* Lede text */}
              <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed text-[#C9D3DC] mb-8 font-['IBM_Plex_Sans',sans-serif] max-w-[62ch]">
                A great event creates moments people remember, speakers people quote and stories teams want to share. DXG captures those moments with professional event videography and photography built around your agenda, production schedule and future content plans. From keynote recording and conference photography to testimonials and event recap video, we create useful content long after the final session of your event.
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
                  href="#capture-plan"
                  className="inline-flex items-center gap-2.5 border border-white/35 hover:border-[#2CBCED] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 font-['Josefin_Sans',sans-serif]"
                >
                  Build Your Capture Plan
                </a>
              </div>
            </div>

            {/* Right Media Production Capture Board Column */}
            <div className="lg:col-span-6 xl:col-span-5">
              <div
                className="bg-[#111A24] border border-[#1E2A36] rounded-lg p-5 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] relative overflow-hidden"
                aria-label="Illustration of photo and video production capture schedule"
              >
                {/* Board Head */}
                <div className="flex justify-between items-baseline mb-3.5 font-['Josefin_Sans',sans-serif]">
                  <b className="text-white font-semibold text-sm sm:text-base">
                    Photo & Video Capture Schedule
                  </b>
                  <span className="text-[#5B6B7A] text-xs sm:text-sm">
                    Multi-Camera & Crew Sync
                  </span>
                </div>

                {/* Board Grid */}
                <div className="grid grid-cols-[70px_repeat(6,1fr)] sm:grid-cols-[96px_repeat(6,1fr)] gap-1 text-[11px]">
                  <div />
                  <div className="text-[#5B6B7A] text-center pb-1 font-['Josefin_Sans',sans-serif]">
                    8a
                  </div>
                  <div className="text-[#5B6B7A] text-center pb-1 font-['Josefin_Sans',sans-serif]">
                    10a
                  </div>
                  <div className="text-[#5B6B7A] text-center pb-1 font-['Josefin_Sans',sans-serif]">
                    12p
                  </div>
                  <div className="text-[#5B6B7A] text-center pb-1 font-['Josefin_Sans',sans-serif]">
                    2p
                  </div>
                  <div className="text-[#5B6B7A] text-center pb-1 font-['Josefin_Sans',sans-serif]">
                    4p
                  </div>
                  <div className="text-[#5B6B7A] text-center pb-1 font-['Josefin_Sans',sans-serif]">
                    6p
                  </div>

                  {/* Keynote Capture */}
                  <div className="text-[#C9D3DC] flex items-center font-['Josefin_Sans',sans-serif] text-[11px] sm:text-xs pr-1 truncate">
                    Keynote Video
                  </div>
                  <div
                    className="h-7 rounded-[3px] bg-[#1A7FA3] relative overflow-hidden animate-cell-in"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <span className="absolute inset-0 flex items-center px-1.5 text-white font-['Josefin_Sans',sans-serif] font-semibold text-[10px] whitespace-nowrap truncate">
                      Audio Line
                    </span>
                  </div>
                  <div
                    className="h-7 rounded-[3px] bg-[#2CBCED] relative overflow-hidden animate-cell-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <span className="absolute inset-0 flex items-center px-1.5 text-[#0A0F16] font-['Josefin_Sans',sans-serif] font-semibold text-[10px] whitespace-nowrap truncate">
                      3-Cam ISO
                    </span>
                  </div>
                  <div className="h-7 rounded-[3px] bg-[#182430]" />
                  <div
                    className="h-7 rounded-[3px] bg-[#1A7FA3] relative overflow-hidden animate-cell-in"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <span className="absolute inset-0 flex items-center px-1.5 text-white font-['Josefin_Sans',sans-serif] font-semibold text-[10px] whitespace-nowrap truncate">
                      Recap B-Roll
                    </span>
                  </div>
                  <div
                    className="h-7 rounded-[3px] bg-[#2CBCED] relative overflow-hidden animate-cell-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <span className="absolute inset-0 flex items-center px-1.5 text-[#0A0F16] font-['Josefin_Sans',sans-serif] font-semibold text-[10px] whitespace-nowrap truncate">
                      Awards Cam
                    </span>
                  </div>
                  <div className="h-7 rounded-[3px] bg-[#182430]" />

                  {/* Interviews & Testimonials */}
                  <div className="text-[#C9D3DC] flex items-center font-['Josefin_Sans',sans-serif] text-[11px] sm:text-xs pr-1 truncate">
                    Interviews
                  </div>
                  <div className="h-7 rounded-[3px] bg-[#182430]" />
                  <div className="h-7 rounded-[3px] bg-[#182430]" />
                  <div
                    className="h-7 rounded-[3px] bg-[#1A7FA3] relative overflow-hidden animate-cell-in"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <span className="absolute inset-0 flex items-center px-1.5 text-white font-['Josefin_Sans',sans-serif] font-semibold text-[10px] whitespace-nowrap truncate">
                      Exec Suite
                    </span>
                  </div>
                  <div
                    className="h-7 rounded-[3px] bg-[#1A7FA3] relative overflow-hidden animate-cell-in"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <span className="absolute inset-0 flex items-center px-1.5 text-white font-['Josefin_Sans',sans-serif] font-semibold text-[10px] whitespace-nowrap truncate">
                      Attendee Story
                    </span>
                  </div>
                  <div
                    className="h-7 rounded-[3px] bg-[#1A7FA3] relative overflow-hidden animate-cell-in"
                    style={{ animationDelay: "0.7s" }}
                  >
                    <span className="absolute inset-0 flex items-center px-1.5 text-white font-['Josefin_Sans',sans-serif] font-semibold text-[10px] whitespace-nowrap truncate">
                      Sponsor Q&A
                    </span>
                  </div>
                  <div className="h-7 rounded-[3px] bg-[#182430]" />

                  {/* Conference Photography */}
                  <div className="text-[#C9D3DC] flex items-center font-['Josefin_Sans',sans-serif] text-[11px] sm:text-xs pr-1 truncate">
                    Photography
                  </div>
                  <div
                    className="h-7 rounded-[3px] bg-[#1A7FA3] relative overflow-hidden animate-cell-in"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <span className="absolute inset-0 flex items-center px-1.5 text-white font-['Josefin_Sans',sans-serif] font-semibold text-[10px] whitespace-nowrap truncate">
                      Headshots
                    </span>
                  </div>
                  <div
                    className="h-7 rounded-[3px] bg-[#1A7FA3] relative overflow-hidden animate-cell-in"
                    style={{ animationDelay: "0.9s" }}
                  >
                    <span className="absolute inset-0 flex items-center px-1.5 text-white font-['Josefin_Sans',sans-serif] font-semibold text-[10px] whitespace-nowrap truncate">
                      Stage Shots
                    </span>
                  </div>
                  <div
                    className="h-7 rounded-[3px] bg-[#1A7FA3] relative overflow-hidden animate-cell-in"
                    style={{ animationDelay: "1s" }}
                  >
                    <span className="absolute inset-0 flex items-center px-1.5 text-white font-['Josefin_Sans',sans-serif] font-semibold text-[10px] whitespace-nowrap truncate">
                      Expo Booths
                    </span>
                  </div>
                  <div className="h-7 rounded-[3px] bg-[#182430]" />
                  <div className="h-7 rounded-[3px] bg-[#182430]" />
                  <div className="h-7 rounded-[3px] bg-[#182430]" />

                  {/* Post-Event Asset Prep */}
                  <div className="text-[#C9D3DC] flex items-center font-['Josefin_Sans',sans-serif] text-[11px] sm:text-xs pr-1 truncate">
                    Media Delivery
                  </div>
                  <div
                    className="h-7 rounded-[3px] bg-[#1A7FA3] relative overflow-hidden animate-cell-in"
                    style={{ animationDelay: "1.1s" }}
                  >
                    <span className="absolute inset-0 flex items-center px-1.5 text-white font-['Josefin_Sans',sans-serif] font-semibold text-[10px] whitespace-nowrap truncate">
                      Same-Day Social
                    </span>
                  </div>
                  <div className="h-7 rounded-[3px] bg-[#182430]" />
                  <div className="h-7 rounded-[3px] bg-[#182430]" />
                  <div className="h-7 rounded-[3px] bg-[#182430]" />
                  <div
                    className="h-7 rounded-[3px] bg-[#1A7FA3] relative overflow-hidden animate-cell-in"
                    style={{ animationDelay: "1.2s" }}
                  >
                    <span className="absolute inset-0 flex items-center px-1.5 text-white font-['Josefin_Sans',sans-serif] font-semibold text-[10px] whitespace-nowrap truncate">
                      Recap Edit
                    </span>
                  </div>
                  <div
                    className="h-7 rounded-[3px] bg-[#1A7FA3] relative overflow-hidden animate-cell-in"
                    style={{ animationDelay: "1.3s" }}
                  >
                    <span className="absolute inset-0 flex items-center px-1.5 text-white font-['Josefin_Sans',sans-serif] font-semibold text-[10px] whitespace-nowrap truncate">
                      Asset Archive
                    </span>
                  </div>
                </div>

                {/* Sweeping Cue Line */}
                <div
                  className="absolute top-[58px] bottom-[56px] w-[2px] bg-[#2CBCED] opacity-90 shadow-[0_0_12px_#2CBCED] pointer-events-none animate-cue-sweep"
                  aria-hidden="true"
                />

                {/* Board Footer */}
                <div className="mt-4 pt-3 flex flex-wrap justify-between items-center text-xs text-[#5B6B7A]">
                  <span className="inline-flex items-center gap-2 text-white font-['Josefin_Sans',sans-serif]">
                    <span className="w-2 h-2 rounded-full bg-[#2CBCED] animate-pulse-dot" />
                    Capture Crew Synced to Master Show Flow
                  </span>
                  <span>Photos, Keynotes & Recaps Mapped</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
