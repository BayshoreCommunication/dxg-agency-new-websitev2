"use client";
import React from "react";

const groups = [
  {
    title: "In the Room",
    desc: "Live audience polling, Q&A platforms and audience response systems turn general sessions into conversations. Moderators screen each question before it reaches the big screen.",
  },
  {
    title: "Before & Between Sessions",
    desc: "Event mobile apps hold agendas, speaker bios, maps and session materials. Digital signage points attendees toward the next room and social walls put their posts on screen.",
  },
  {
    title: "Arrival & Connection",
    desc: "Event check-in technology moves attendees through registration by QR code or badge. Networking technology matches attendees by shared interests before the first conversation.",
  },
  {
    title: "Exhibit Hall & Sponsors",
    desc: "Interactive displays give exhibitors a reason to draw a crowd. Lead retrieval captures contacts at the booth. Gamification sends attendees on a route between sponsor activations.",
  },
];

export default function EngagementSolutionsSection() {
  return (
    <section id="solutions" className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16] scroll-mt-20">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Event Technology and Engagement Solutions
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Scope follows your format, venue, audience size and program goals. Each tool earns its place by serving one of those goals.
          </p>
        </div>

        {/* Static Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {groups.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#C9D3DC] hover:border-[#2CBCED] hover:shadow-[0_14px_32px_rgba(44,188,237,0.18)] transition-all duration-300 rounded-2xl p-6 sm:p-7 cursor-default group hover:-translate-y-1.5 flex flex-col justify-start"
            >
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2CBCED] shrink-0 group-hover:scale-125 transition-transform" />
                <h3 className="font-['Josefin_Sans',sans-serif] font-semibold text-[18px] sm:text-[19px] text-[#0A0F16] group-hover:text-[#2CBCED] transition-colors duration-200 leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-[14px] sm:text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
