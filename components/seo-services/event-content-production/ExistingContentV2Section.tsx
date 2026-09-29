"use client";
import React from "react";

const items = [
  {
    title: "Screen Format",
    desc: "We check aspect ratio, dimensions, resolution and display requirements for the actual screen environment.",
    icon: (
      <svg className="w-7 h-7 stroke-[#2CBCED] fill-none stroke-[1.8] shrink-0 mt-0.5" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Playback Readiness",
    desc: "We check file type, duration, transitions, cue points and playback needs before show day.",
    icon: (
      <svg className="w-7 h-7 stroke-[#2CBCED] fill-none stroke-[1.8] shrink-0 mt-0.5" viewBox="0 0 24 24">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    title: "Presentation Readiness",
    desc: "We review fonts, layouts, videos, animations and slide consistency for live presentation use.",
    icon: (
      <svg className="w-7 h-7 stroke-[#2CBCED] fill-none stroke-[1.8] shrink-0 mt-0.5" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Brand Consistency",
    desc: "We align videos, presentations, graphics, scenic content and sponsor moments under the approved visual direction.",
    icon: (
      <svg className="w-7 h-7 stroke-[#2CBCED] fill-none stroke-[1.8] shrink-0 mt-0.5" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Show Flow Alignment",
    desc: "We place final content against the run of show so every file has a clear cue and purpose.",
    icon: (
      <svg className="w-7 h-7 stroke-[#2CBCED] fill-none stroke-[1.8] shrink-0 mt-0.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const half = Math.ceil(items.length / 2);
const row1 = items.slice(0, half);
const row2 = items.slice(half);

function MarqueeRow({
  data,
  reverse = false,
  keyPrefix,
}: {
  data: typeof items;
  reverse?: boolean;
  keyPrefix: string;
}) {
  const tripled = [...data, ...data, ...data];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-5 w-max"
        style={{
          animation: `marqEC${reverse ? "R" : "F"} 32s linear infinite`,
        }}
      >
        {tripled.map((item, idx) => (
          <div
            key={`${keyPrefix}-${idx}`}
            className="w-[300px] shrink-0 bg-white border border-[#C9D3DC] border-t-4 border-t-[#2CBCED] hover:border-[#2CBCED] hover:shadow-[0_12px_32px_rgba(44,188,237,0.18)] transition-all duration-300 rounded-xl p-6 cursor-default group"
          >
            <div className="flex items-start gap-3 mb-3">
              {item.icon}
              <h3 className="font-['Josefin_Sans',sans-serif] font-semibold text-[17px] text-[#0A0F16] group-hover:text-[#2CBCED] transition-colors duration-200 leading-tight pt-0.5">
                {item.title}
              </h3>
            </div>
            <p className="text-[13.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExistingContentV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16] overflow-hidden">
      <style>{`
        @keyframes marqECF {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqECR {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 mb-[clamp(36px,4vw,56px)]">
        <div className="max-w-[760px]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Existing Content? We Can Make It Show Ready.
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Many event teams already have presentations, videos, brand files, sponsor graphics or agency created assets. DXG can bring those materials into the same production workflow as newly created content.
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
