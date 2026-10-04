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

export default function VipProtocolLogisticsV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#0A0F16] text-white">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
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

        {/* Static Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 mb-10">
          {vipCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#111A24] border border-[#1E2A36] hover:border-[#2CBCED] hover:shadow-[0_14px_32px_rgba(44,188,237,0.22)] transition-all duration-300 rounded-2xl p-6 sm:p-7 cursor-default group hover:-translate-y-1.5 flex flex-col justify-start"
            >
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2CBCED] shrink-0 group-hover:scale-125 transition-transform" />
                <h3 className="font-['Josefin_Sans',sans-serif] font-semibold text-[18px] sm:text-[19px] text-white group-hover:text-[#2CBCED] transition-colors duration-200 leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-[14px] sm:text-[14.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-base sm:text-lg text-white font-medium leading-relaxed font-['IBM_Plex_Sans',sans-serif] max-w-[70ch]">
          Assigned personnel for your highest-profile guests keep internal planners focused on the main floor instead of repeatedly stepping away to manage VIP needs.
        </p>
      </div>
    </section>
  );
}
