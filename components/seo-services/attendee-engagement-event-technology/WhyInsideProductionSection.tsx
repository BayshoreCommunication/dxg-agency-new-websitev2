"use client";
import Image from "next/image";
import React from "react";

const points = [
  {
    title: "Attendees Join Within Seconds",
    desc: "A QR code and on-screen prompts open access fast, keeping attention on the session rather than on login instructions.",
  },
  {
    title: "Speakers Respond With Confidence",
    desc: "A one page cue sheet shows when each poll opens, closes and appears on screen — so speakers know exactly when to respond.",
  },
  {
    title: "Planners Manage One Plan",
    desc: "One producer coordinates polling, apps, signage and AV, giving you a single point of contact instead of multiple vendors.",
  },
  {
    title: "Production Delivers Every Cue",
    desc: "Each interaction has an owner and a time in the run of show, so the production team delivers every cue on schedule.",
  },
  {
    title: "Screens, Slides & Cues Stay Aligned",
    desc: "Technology works together with audiovisual production, presentations and show flow instead of operating as a separate system.",
  },
  {
    title: "Keynote Results Shown Live",
    desc: "A poll question appears on the LED wall at the producer's cue. The moderator reads the top result aloud and the audience sees its input shape the session.",
  },
  {
    title: "Your Strategy Stays in Your Hands",
    desc: "You keep control of the event strategy. DXG plans the technology around it, using DXG tools or platforms you already own.",
  },
];

const half = Math.ceil(points.length / 2);
const row1 = points.slice(0, half);
const row2 = points.slice(half);

function MarqueeRow({
  data,
  reverse = false,
  keyPrefix,
}: {
  data: typeof points;
  reverse?: boolean;
  keyPrefix: string;
}) {
  const tripled = [...data, ...data, ...data];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-5 w-max"
        style={{
          animation: `marqWIP${reverse ? "R" : "F"} 40s linear infinite`,
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

export default function WhyInsideProductionSection() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16] overflow-hidden">
      <style>{`
        @keyframes marqWIPF {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqWIPR {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-11">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Why Event Technology Works Better Inside the Production Plan
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Engagement tools struggle when attendees, speakers and AV crews meet them first on show day.
          </p>
        </div>

        {/* 3 WebP Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-[clamp(36px,4vw,56px)]">
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image src="/images/seo-services/attendee-engagement-and-event-technology/onscreen-qr-polling-prompt.webp" alt="Keynote speaker pointing to large QR code on stage screen encouraging instant audience participation." title="On-Screen QR & Polling Prompt" fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">On-Screen QR & Polling Prompt</b>
              <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">Keynote speaker pointing to large QR code on stage screen encouraging instant audience participation.</p>
            </div>
          </div>
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image src="/images/seo-services/attendee-engagement-and-event-technology/speaker-confidence-monitor-questions.webp" alt="Moderator viewing real-time top voted audience questions on stage confidence monitor screen." title="Speaker Confidence Monitor" fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">Speaker Confidence Monitor</b>
              <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">Moderator viewing real-time top voted audience questions on stage confidence monitor screen.</p>
            </div>
          </div>
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image src="/images/seo-services/attendee-engagement-and-event-technology/tech-table-polling-operator.webp" alt="DXG engagement tech operator triggering poll closing cue right on schedule in run of show." title="Tech Table Polling Operator" fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">Tech Table Polling Operator</b>
              <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">DXG engagement tech operator triggering poll closing cue right on schedule in run of show.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="flex flex-col gap-5">
        <MarqueeRow data={row1} keyPrefix="r1" />
        <MarqueeRow data={row2} reverse keyPrefix="r2" />
      </div>
    </section>
  );
}
