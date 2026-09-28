import React from "react";

export default function OnsiteOperationsV2Section() {
  const items = [
    "Onsite event registration management",
    "Guest services and attendee assistance",
    "Speaker check in and lounge management",
    "Breakout room monitoring",
    "Space resets and quick turnovers",
    "Signage updates and directional management",
    "VIP assistance",
    "Vendor arrival and schedule oversight",
    "Sponsor and exhibitor floor support",
    "Catering and function timing management",
    "Ground transportation coordination",
    "Team communications",
    "Real time schedule updates",
    "Facility coordination",
    "Immediate issue resolution",
    "General floor logistics",
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Onsite Meeting & Conference Operations
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            When guests arrive, your planning staff becomes the central point for every inquiry. People ask about room locations, schedule shifts and meal options. Experienced operational support makes a substantial difference at this stage. DXG personnel work beside your planning team to handle tasks outside the production booth.
          </p>
        </div>

        {/* Support Grid */}
        <div className="bg-white border border-[#C9D3DC] rounded-lg p-7 sm:p-9 shadow-sm mb-8">
          <h3 className="text-xl font-semibold mb-5 font-['Josefin_Sans',sans-serif] text-[#0A0F16] border-b border-[#C9D3DC] pb-3">
            Onsite Operational Support Includes:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-['IBM_Plex_Sans',sans-serif] text-[14.5px] text-[#5B6B7A]">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 bg-[#F3F6F8] rounded border border-[#E9EEF2] hover:bg-white hover:border-[#2CBCED] transition-colors duration-150">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2CBCED] mt-2 shrink-0" />
                <span className="font-medium text-[#0A0F16]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Note */}
        <p className="text-base sm:text-lg text-[#0A0F16] font-medium leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
          Instead of pulling your lead planner away to answer every small operational question, DXG handles issues where they happen. We verify that water stations stay filled, banquet teams stick to schedule and breakout rooms remain comfortable.
        </p>
      </div>
    </section>
  );
}
