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

const half = Math.ceil(categories.length / 2);
const row1 = categories.slice(0, half);
const row2 = categories.slice(half);

function MarqueeRow({
  data,
  reverse = false,
  keyPrefix,
}: {
  data: typeof categories;
  reverse?: boolean;
  keyPrefix: string;
}) {
  const tripled = [...data, ...data, ...data];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-5 w-max"
        style={{
          animation: `marqPhC${reverse ? "R" : "F"} 36s linear infinite`,
        }}
      >
        {tripled.map((item, idx) => (
          <div
            key={`${keyPrefix}-${idx}`}
            className="w-[280px] shrink-0 bg-white border border-[#C9D3DC] border-t-4 border-t-[#2CBCED] hover:border-[#2CBCED] hover:shadow-[0_12px_32px_rgba(44,188,237,0.18)] transition-all duration-300 rounded-xl p-6 cursor-default group"
          >
            <h3 className="font-['Josefin_Sans',sans-serif] font-semibold text-[17px] text-[#0A0F16] group-hover:text-[#2CBCED] transition-colors duration-200 mb-3">
              {item.title}
            </h3>
            <ul className="space-y-1.5 font-['IBM_Plex_Sans',sans-serif] text-[13px] text-[#5B6B7A]">
              {item.bullets.map((b, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2CBCED] mt-1.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PhotographyCoverageV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16] overflow-hidden">
      <style>{`
        @keyframes marqPhCF {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqPhCR {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 mb-[clamp(36px,4vw,56px)]">
        <div className="max-w-[760px]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Photography That Captures People Behind the Program
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG provides conference photography and corporate event photography across the moments people, brands and teams need most.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <MarqueeRow data={row1} keyPrefix="r1" />
        <MarqueeRow data={row2} reverse keyPrefix="r2" />
      </div>
    </section>
  );
}
