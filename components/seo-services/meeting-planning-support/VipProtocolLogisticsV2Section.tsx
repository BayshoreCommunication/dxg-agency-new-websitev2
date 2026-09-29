"use client";
import React from "react";

const items = [
  "Private green room and holding space management",
  "Executive transportation arrivals and departures tracking",
  "Secure credential distribution and priority check in",
  "Confidential document and presentation material handling",
  "Direct escort coordination between green rooms and main stage wings",
  "Catering and dietary management for executive suites",
  "Coordination with private security teams and venue management",
];

// For marquee we make cards with title + description
const vipCards = [
  { title: "Green Room Management", desc: "Private green room and holding space managed exclusively for executives and keynote speakers throughout the event." },
  { title: "Executive Transportation", desc: "Arrivals and departures tracked in real time so transit runs on schedule without planners leaving the main floor." },
  { title: "Priority Check-In", desc: "Secure credential distribution and a dedicated check-in lane keeps high-profile guests away from general registration queues." },
  { title: "Confidential Handling", desc: "Presentation materials, briefing documents and private correspondence handled with full discretion by assigned DXG personnel." },
  { title: "Escort Coordination", desc: "Direct transfers between green rooms and main stage wings are coordinated with production timing and venue security." },
  { title: "Executive Catering", desc: "Catering, dietary restrictions and hospitality needs managed for executive suites without involving the general event catering staff." },
  { title: "Security Liaison", desc: "DXG coordinates directly with private security teams and venue management to protect executive movement and privacy." },
];

const half = Math.ceil(vipCards.length / 2);
const row1 = vipCards.slice(0, half);
const row2 = vipCards.slice(half);

function MarqueeRow({
  data,
  reverse = false,
  keyPrefix,
}: {
  data: typeof vipCards;
  reverse?: boolean;
  keyPrefix: string;
}) {
  const tripled = [...data, ...data, ...data];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-5 w-max"
        style={{
          animation: `marqVIP${reverse ? "R" : "F"} 38s linear infinite`,
        }}
      >
        {tripled.map((item, idx) => (
          <div
            key={`${keyPrefix}-${idx}`}
            className="w-[300px] shrink-0 bg-[#111A24] border border-[#1E2A36] border-l-4 border-l-[#2CBCED] hover:border-[#2CBCED] hover:shadow-[0_12px_32px_rgba(44,188,237,0.2)] transition-all duration-300 rounded-xl p-6 cursor-default group"
          >
            <h3 className="font-['Josefin_Sans',sans-serif] font-semibold text-[17px] text-white group-hover:text-[#2CBCED] transition-colors duration-200 mb-2.5">
              {item.title}
            </h3>
            <p className="text-[13.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VipProtocolLogisticsV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#0A0F16] text-white overflow-hidden">
      <style>{`
        @keyframes marqVIPF {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqVIPR {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 mb-[clamp(36px,4vw,56px)]">
        <div className="max-w-[760px]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Executive & VIP Protocol Logistics
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#C9D3DC] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif] mb-3">
            High profile attendees, board members and keynote presenters require a level of service distinct from general attendee movement.
          </p>
          <p className="text-base sm:text-lg text-[#C9D3DC] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG handles dedicated VIP protocol logistics to ensure C-suite executives, keynote speakers and special guests experience smooth transfers and quiet, professional hosting.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 mb-[clamp(36px,4vw,56px)]">
        <MarqueeRow data={row1} keyPrefix="r1" />
        <MarqueeRow data={row2} reverse keyPrefix="r2" />
      </div>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        <p className="text-base sm:text-lg text-white font-medium leading-relaxed font-['IBM_Plex_Sans',sans-serif] max-w-[70ch]">
          Assigned personnel for your highest-profile guests keep internal planners focused on the main floor instead of repeatedly stepping away to manage VIP needs.
        </p>
      </div>
    </section>
  );
}
