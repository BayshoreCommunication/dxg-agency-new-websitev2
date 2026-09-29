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

const half = Math.ceil(groups.length / 2);
const row1 = groups.slice(0, half);
const row2 = groups.slice(half);

function MarqueeRow({
  items,
  reverse = false,
  keyPrefix,
}: {
  items: typeof groups;
  reverse?: boolean;
  keyPrefix: string;
}) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-5 w-max"
        style={{
          animation: `marqEng${reverse ? "R" : "F"} 32s linear infinite`,
        }}
      >
        {tripled.map((item, idx) => (
          <div
            key={`${keyPrefix}-${idx}`}
            className="w-[320px] shrink-0 bg-white border border-[#C9D3DC] border-l-4 border-l-[#2CBCED] hover:border-[#2CBCED] hover:shadow-[0_12px_32px_rgba(44,188,237,0.18)] transition-all duration-300 rounded-xl p-6 cursor-default group"
          >
            <h3 className="font-['Josefin_Sans',sans-serif] font-semibold text-[17px] text-[#0A0F16] group-hover:text-[#2CBCED] transition-colors duration-200 mb-2.5">
              {item.title}
            </h3>
            <p className="text-[13.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EngagementSolutionsSection() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16] overflow-hidden">
      <style>{`
        @keyframes marqEngF {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqEngR {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 mb-[clamp(36px,4vw,56px)]">
        <div className="max-w-[760px]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Event Technology and Engagement Solutions
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Scope follows your format, venue, audience size and program goals. Each tool earns its place by serving one of those goals.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <MarqueeRow items={row1} keyPrefix="r1" />
        <MarqueeRow items={row2} reverse keyPrefix="r2" />
      </div>
    </section>
  );
}
