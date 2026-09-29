"use client";
import Image from "next/image";
import React from "react";

const principles = [
  {
    title: "Start With the Final Deliverable",
    desc: "Define the content your team needs after the event. A two minute recap needs hero moments, audience energy, branding and sponsor coverage.",
  },
  {
    title: "Build Shot List Around People",
    desc: "Identify priority speakers, executives, attendees, customers, sponsors and sessions. Give photo and video crews a clear order of priority.",
  },
  {
    title: "Match Coverage to the Agenda",
    desc: "Map coverage to session times, room changes, rehearsal windows and interview slots. Multi room conferences need room by room priorities.",
  },
  {
    title: "Plan for Every Future Use",
    desc: "A single event can produce content for marketing, communications, education, social media, sponsorship and future event promotion.",
  },
  {
    title: "Keep Marketing & Production Connected",
    desc: "DXG works with planners and marketing teams during planning. The capture plan connects event objectives with practical coverage needs.",
  },
  {
    title: "Planned Capture Beats Random Coverage",
    desc: "A content plan gives hours of footage a purpose. DXG identifies priority assets first, then assigns coverage around people and timing.",
  },
];

const half = Math.ceil(principles.length / 2);
const row1 = principles.slice(0, half);
const row2 = principles.slice(half);

function MarqueeRow({
  data,
  reverse = false,
  keyPrefix,
}: {
  data: typeof principles;
  reverse?: boolean;
  keyPrefix: string;
}) {
  const tripled = [...data, ...data, ...data];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-5 w-max"
        style={{
          animation: `marqPCP${reverse ? "R" : "F"} 36s linear infinite`,
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

export default function PreCapturePlanningV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16] overflow-hidden">
      <style>{`
        @keyframes marqPCPF {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqPCPR {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-center mb-[clamp(36px,4vw,56px)]">
          <div>
            <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
              Plan the Content Before the Cameras Arrive
            </h2>
            <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              The final use of the content should shape the capture plan from the start.
            </p>
          </div>
          <div className="group relative min-h-[300px] border border-[#1E2A36] text-white flex flex-col justify-end p-6 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(10,15,22,0.25)]">
            <Image
              src="/images/seo-services/event-videography-and-photography/event-pre-capture-planning.webp"
              alt="DXG videography team planning pre-capture strategy and camera positions for corporate event"
              title="Pre-Capture Event Videography and Photography Planning"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">Strategic Content Planning</b>
              <p className="text-xs sm:text-[13.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Aligning marketing objectives, executive priorities, speaker slots, and room logistics before camera operators step onto the floor.
              </p>
            </div>
          </div>
        </div>

        {/* Content Priorities by Team Box */}
        <div className="bg-[#0A0F16] text-white p-7 sm:p-9 rounded-md border border-[#1E2A36] mb-[clamp(36px,4vw,56px)] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <h3 className="text-2xl font-semibold mb-4 font-['Josefin_Sans',sans-serif] text-[#2CBCED]">Content Priorities by Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-['IBM_Plex_Sans',sans-serif] text-[15px] leading-relaxed text-[#C9D3DC]">
            <div className="bg-[#111A24] p-5 rounded border border-[#1E2A36]">
              <strong className="text-white block text-lg font-['Josefin_Sans',sans-serif] mb-2">Marketing Teams</strong>
              Prioritize recap videos, social clips, speaker content, testimonials and photography.
            </div>
            <div className="bg-[#111A24] p-5 rounded border border-[#1E2A36]">
              <strong className="text-white block text-lg font-['Josefin_Sans',sans-serif] mb-2">Event Teams</strong>
              Prioritize full session records, speaker coverage, room visuals, attendee moments and sponsor commitments.
            </div>
            <div className="bg-[#111A24] p-5 rounded border border-[#1E2A36]">
              <strong className="text-white block text-lg font-['Josefin_Sans',sans-serif] mb-2">Leadership Teams</strong>
              Prioritize executive interviews, keynote footage, portraits and brand ready content.
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="flex flex-col gap-5">
        <MarqueeRow data={row1} keyPrefix="r1" />
        <MarqueeRow data={row2} reverse keyPrefix="r2" />
      </div>
    </section>
  );
}
