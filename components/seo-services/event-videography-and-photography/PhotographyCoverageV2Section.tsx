"use client";
import React from "react";

const categories = [
  {
    title: "Stage & Session Coverage",
    bullets: ["General sessions", "Keynote speakers", "Panel discussions", "Breakout sessions", "Audience reactions", "Awards moments"],
  },
  {
    title: "People & Portraits",
    bullets: ["Executive portraits", "Speaker portraits", "Attendee interactions", "Group photographs", "Candid networking moments"],
  },
  {
    title: "Brand & Experience",
    bullets: ["Sponsor activations", "Exhibitor booths", "Products and displays", "Event signage", "Venue details", "Behind the scenes production"],
  },
  {
    title: "Full Program Coverage",
    bullets: ["Priority speakers mapped in advance", "Daily shot priorities for multi-day events", "General session & breakout coverage", "Networking and reception coverage"],
  },
  {
    title: "Fast Moving Moments",
    bullets: ["Stage transitions", "Awards presentations", "Networking interactions", "Speaker arrivals & departures", "Candid off-schedule moments"],
  },
];

export default function PhotographyCoverageV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Photography That Captures People Behind the Program
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG provides conference photography and corporate event photography across the moments people, brands and teams need most.
          </p>
        </div>

        {/* Static Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white border border-[#C9D3DC] hover:border-[#2CBCED] hover:shadow-[0_14px_32px_rgba(44,188,237,0.18)] transition-all duration-300 rounded-2xl p-6 sm:p-7 cursor-default group hover:-translate-y-1.5 flex flex-col justify-start ${
                idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2CBCED] shrink-0 group-hover:scale-125 transition-transform" />
                <h3 className="font-['Josefin_Sans',sans-serif] font-semibold text-[18px] sm:text-[19px] text-[#0A0F16] group-hover:text-[#2CBCED] transition-colors duration-200 leading-tight">
                  {item.title}
                </h3>
              </div>
              <ul className="space-y-2 font-['IBM_Plex_Sans',sans-serif] text-[13.5px] text-[#5B6B7A]">
                {item.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2CBCED] mt-2 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
