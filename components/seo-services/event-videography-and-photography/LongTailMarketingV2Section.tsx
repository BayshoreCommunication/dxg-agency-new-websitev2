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

const half = Math.ceil(channels.length / 2);
const row1 = channels.slice(0, half);
const row2 = channels.slice(half);

function MarqueeRow({
  data,
  reverse = false,
  keyPrefix,
}: {
  data: typeof channels;
  reverse?: boolean;
  keyPrefix: string;
}) {
  const tripled = [...data, ...data, ...data];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-5 w-max"
        style={{
          animation: `marqLT${reverse ? "R" : "F"} 38s linear infinite`,
        }}
      >
        {tripled.map((item, idx) => (
          <div
            key={`${keyPrefix}-${idx}`}
            className="w-[300px] shrink-0 bg-white border border-[#C9D3DC] border-t-4 border-t-[#2CBCED] hover:border-[#2CBCED] hover:shadow-[0_12px_32px_rgba(44,188,237,0.18)] transition-all duration-300 rounded-xl p-6 cursor-default group"
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

export default function LongTailMarketingV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16] overflow-hidden">
      <style>{`
        @keyframes marqLTF {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqLTR {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 mb-[clamp(36px,4vw,56px)]">
        <div className="max-w-[760px]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Turn One Event Into Content for Months of Marketing
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            The value of event content continues after attendees leave.
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
