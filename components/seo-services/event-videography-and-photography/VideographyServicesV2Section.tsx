"use client";
import React from "react";

const categories = [
  {
    title: "Session Recording",
    bullets: ["Multi camera session recording", "Keynote recording", "Panel discussions", "Speaker presentations", "Selected breakout sessions", "On demand session content"],
  },
  {
    title: "Interview & Testimonial",
    bullets: ["Executive interviews", "Speaker interviews", "Attendee testimonials", "Customer interviews", "Host and moderator messages"],
  },
  {
    title: "Recap & Highlight Content",
    bullets: ["Event recap video", "Highlight reels", "Social media clips", "Sponsor deliverables", "Promotional content", "Educational footage"],
  },
  {
    title: "Coverage Based on Final Use",
    bullets: ["Full keynote recording", "Short form clips for social", "Executive interviews for marketing", "Testimonial footage", "Broad event footage for recap"],
  },
  {
    title: "Multi Room Conference",
    bullets: ["Priority sessions identified early", "Major keynotes with full coverage", "Breakout rooms by agenda", "Interviews scheduled around sessions"],
  },
  {
    title: "Production Aware Capture",
    bullets: ["Available audio feeds", "Presentation playback", "Stage positions", "Speaker movement", "Lighting conditions", "Rehearsal timing"],
  },
];

const half = Math.ceil(categories.length / 2);
const row1 = categories.slice(0, half);
const row2 = categories.slice(half);

function MarqueeRow({
  data,
  reverse = false,
  keyPrefix,
}: {
  data: typeof categories;
  reverse?: boolean;
  keyPrefix: string;
}) {
  const tripled = [...data, ...data, ...data];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-5 w-max"
        style={{
          animation: `marqVS${reverse ? "R" : "F"} 38s linear infinite`,
        }}
      >
        {tripled.map((item, idx) => (
          <div
            key={`${keyPrefix}-${idx}`}
            className="w-[280px] shrink-0 bg-[#111A24] border border-[#1E2A36] border-t-4 border-t-[#2CBCED] hover:border-[#2CBCED] hover:shadow-[0_12px_32px_rgba(44,188,237,0.2)] transition-all duration-300 rounded-xl p-6 cursor-default group"
          >
            <h3 className="font-['Josefin_Sans',sans-serif] font-semibold text-[17px] text-white group-hover:text-[#2CBCED] transition-colors duration-200 mb-3">
              {item.title}
            </h3>
            <ul className="space-y-1.5 font-['IBM_Plex_Sans',sans-serif] text-[13px] text-[#C9D3DC]">
              {item.bullets.map((b, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2CBCED] mt-1.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VideographyServicesV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#0A0F16] text-white overflow-hidden">
      <style>{`
        @keyframes marqVSF {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqVSR {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 mb-[clamp(36px,4vw,56px)]">
        <div className="max-w-[760px]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Event Videography for Sessions, Speakers & Stories
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#C9D3DC] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG provides corporate event videography and conference video production for session recording, interviews, testimonials, recap content and future marketing.
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
