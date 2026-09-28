import Image from "next/image";
import React from "react";

export default function SessionSpeakerCoordinationV2Section() {
  const items = [
    "Speaker arrivals and check in",
    "Speaker ready room operations",
    "Session room check in",
    "Presentation collection and file checks",
    "Session timing and clock management",
    "Room assignments",
    "Speaker transitions",
    "Presenter communication",
    "Continuing education tracking where required",
    "Room monitors and support staff",
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-center mb-11">
          {/* Head */}
          <div>
            <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
              Session and Speaker Coordination
            </h2>
            <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Conferences with multiple concurrent sessions require precise schedule control. A late presenter or missing slide deck in one room can throw off an entire afternoon track.
            </p>
          </div>

          {/* Photo Block */}
          <div className="group relative min-h-[300px] border border-[#1E2A36] text-white flex flex-col justify-end p-6 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(10,15,22,0.25)]">
            <Image
              src="/images/seo-services/meeting-planning-support/technical-speaker-rehearsal.webp"
              alt="DXG speaker ready room coordinator testing presentation slides and confidence monitors"
              title="Speaker Ready Room Operations & Presentation QC"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Speaker Ready Room Control
              </b>
              <p className="text-xs sm:text-[13.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Handling presentation collection, font checks, stage timing, and room monitor coordination for smooth speaker transitions.
              </p>
            </div>
          </div>
        </div>

        {/* Support Items Grid */}
        <div className="bg-white border border-[#C9D3DC] rounded-lg p-7 sm:p-9 shadow-sm mb-8">
          <h3 className="text-xl font-semibold mb-5 font-['Josefin_Sans',sans-serif] text-[#0A0F16] border-b border-[#C9D3DC] pb-3">
            DXG Speaker & Session Management Includes:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-['IBM_Plex_Sans',sans-serif] text-[15px] text-[#5B6B7A]">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-[#F3F6F8] rounded border border-[#E9EEF2]">
                <svg
                  className="w-5 h-5 stroke-[#2CBCED] fill-none stroke-2 shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="font-medium text-[#0A0F16]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Note */}
        <p className="text-base sm:text-lg text-[#0A0F16] font-medium leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
          Because DXG also manages technical event production, our team speaks the language of both planners and audiovisual technicians. When a slide change or schedule adjustment impacts production, we notify the crew right away. We treat speakers with care, lowering stress so they deliver clear presentations.
        </p>
      </div>
    </section>
  );
}
