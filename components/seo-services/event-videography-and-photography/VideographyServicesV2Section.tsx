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

export default function VideographyServicesV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#0A0F16] text-white">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Event Videography for Sessions, Speakers & Stories
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#C9D3DC] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG provides corporate event videography and conference video production for session recording, interviews, testimonials, recap content and future marketing.
          </p>
        </div>

        {/* Static Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#111A24] border border-[#1E2A36] hover:border-[#2CBCED] hover:shadow-[0_14px_32px_rgba(44,188,237,0.22)] transition-all duration-300 rounded-2xl p-6 sm:p-7 cursor-default group hover:-translate-y-1.5 flex flex-col justify-start"
            >
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2CBCED] shrink-0 group-hover:scale-125 transition-transform" />
                <h3 className="font-['Josefin_Sans',sans-serif] font-semibold text-[18px] sm:text-[19px] text-white group-hover:text-[#2CBCED] transition-colors duration-200 leading-tight">
                  {item.title}
                </h3>
              </div>
              <ul className="space-y-2 font-['IBM_Plex_Sans',sans-serif] text-[13.5px] text-[#C9D3DC]">
                {item.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2CBCED] mt-2 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
