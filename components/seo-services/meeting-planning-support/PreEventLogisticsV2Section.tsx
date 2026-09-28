import React from "react";

export default function PreEventLogisticsV2Section() {
  const supportItems = [
    "Registration setup and timeline management",
    "Registration platform administration",
    "Attendee lists and database management",
    "Badge preparation and printing coordination",
    "Staffing schedules and labor assignments",
    "Event timelines and master operational schedules",
    "Venue communication",
    "Vendor coordination",
    "Meeting room and space layout planning",
    "Signage placement and directional planning",
    "Speaker logistics and travel oversight",
    "Session schedule coordination",
    "Freight shipping and receiving tracking",
    "Pre event briefing meetings",
  ];

  return (
    <section id="logistics" className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16] scroll-mt-20">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Pre Event Planning and Logistics
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            As an event date approaches, task volume grows much faster than internal team capacity. Managing room blocks, checking banquet event orders and tracking down missing presenter files can eat up countless hours. DXG provides conference logistics support that moves your meeting out of preparation and into real execution.
          </p>
        </div>

        {/* Support Grid */}
        <div className="bg-white border border-[#C9D3DC] rounded-lg p-7 sm:p-9 shadow-sm mb-8">
          <h3 className="text-xl font-semibold mb-5 font-['Josefin_Sans',sans-serif] text-[#0A0F16] border-b border-[#C9D3DC] pb-3">
            Pre-Event Logistics & Planning Support Includes:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-['IBM_Plex_Sans',sans-serif] text-[15px] text-[#5B6B7A]">
            {supportItems.map((item, idx) => (
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
        <p className="text-base sm:text-lg text-[#0A0F16] font-medium leading-relaxed font-['IBM_Plex_Sans',sans-serif] max-w-[70ch]">
          Our goal is to resolve open tasks before your team steps onto the floor. These operational tasks are handled before the event, allowing your core planners to stay rested and focused for show day.
        </p>
      </div>
    </section>
  );
}
