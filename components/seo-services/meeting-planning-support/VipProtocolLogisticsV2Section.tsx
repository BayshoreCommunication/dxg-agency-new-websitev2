import React from "react";

export default function VipProtocolLogisticsV2Section() {
  const items = [
    "Private green room and holding space management",
    "Executive transportation arrivals and departures tracking",
    "Secure credential distribution and priority check in",
    "Confidential document and presentation material handling",
    "Direct escort coordination between green rooms and main stage wings",
    "Catering and dietary management for executive suites",
    "Coordination with private security teams and venue management",
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#0A0F16] text-white">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Executive & VIP Protocol Logistics
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#C9D3DC] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif] mb-3">
            High profile attendees, board members and keynote presenters require a level of service distinct from general attendee movement. Operational slip ups with executive guests reflect directly on your leadership team.
          </p>
          <p className="text-base sm:text-lg text-[#C9D3DC] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG handles dedicated VIP protocol logistics to ensure C-suite executives, keynote speakers and special guests experience smooth transfers and quiet, professional hosting.
          </p>
        </div>

        {/* VIP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#111A24] border border-[#1E2A36] rounded-md p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED]/60 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] border-l-4 border-l-[#2CBCED]"
            >
              <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold text-white block mb-1">
                {item}
              </b>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <p className="text-base sm:text-lg text-white font-medium leading-relaxed font-['IBM_Plex_Sans',sans-serif] max-w-[70ch]">
          Assigned personnel for your highest-profile guests keep internal planners focused on the main floor instead of repeatedly stepping away to manage VIP needs. DXG maintains discretion and maintains schedule timing for your executive track.
        </p>
      </div>
    </section>
  );
}
