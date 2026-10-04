"use client";
import React from "react";

const channels = [
  {
    title: "Immediate Communications",
    desc: "Use fresh photography, keynote footage, testimonials and recap content for attendee follow up, recap pages, internal communications and social posts.",
  },
  {
    title: "Ongoing Marketing",
    desc: "Reuse speaker clips, executive interviews, customer stories and photography across email campaigns, landing pages, social channels and future event promotion.",
  },
  {
    title: "Education & On Demand",
    desc: "Recorded sessions support training, educational resources, speaker libraries, customer education and on demand viewing long after the event.",
  },
  {
    title: "Sponsor & Partner Assets",
    desc: "Planned coverage creates sponsor photography, activation footage, partner interviews, branded visuals and recap material for post event reporting.",
  },
  {
    title: "Future Event Promotion",
    desc: "Strong event footage shows audience energy, speakers, networking, venue design and production scale — all usable for promoting the next program.",
  },
  {
    title: "One Event, Multiple Outputs",
    desc: "A single conference can produce a recap video, full keynote recordings, speaker clips, executive interviews, testimonials, photography and social content.",
  },
];

export default function LongTailMarketingV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Turn One Event Into Content for Months of Marketing
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            The value of event content continues after attendees leave.
          </p>
        </div>

        {/* Static Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {channels.map((item, idx) => (
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
