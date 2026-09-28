import Image from "next/image";
import React from "react";

export default function PreCapturePlanningV2Section() {
  const principles = [
    {
      title: "Start With the Final Deliverable",
      desc: "Define the content your team needs after the event. A two minute event recap needs strong hero moments, audience energy, networking, venue details, branding and sponsor coverage. A year long content library needs broader coverage across speakers, interviews, testimonials, sessions and supporting visuals.",
    },
    {
      title: "Build Shot List Around People and Moments",
      desc: "Identify priority speakers, executives, attendees, customers, sponsors, sessions, awards, networking periods and branded experiences. Give the photo and video crews a clear order of priority.",
    },
    {
      title: "Match Coverage to the Agenda",
      desc: "Map coverage to session times, room changes, rehearsal windows, interview slots and sponsor commitments. Multi room conferences need room by room priorities. Multi day conferences need daily coverage priorities.",
    },
    {
      title: "Plan for Every Future Use",
      desc: "A single event can produce content for marketing, communications, education, social media, sponsorship and future event promotion. DXG plans the capture around those uses from the start.",
    },
    {
      title: "Keep Marketing and Production Connected",
      desc: "DXG works with planners and marketing teams during the planning stage. The capture plan connects event objectives with practical coverage needs, crew timing, room access and final deliverables.",
    },
    {
      title: "Planned Capture Beats Random Coverage",
      desc: "A camera crew can record hours of material during a conference. A content plan gives those hours a purpose. DXG identifies priority assets first, then assigns coverage around the people, rooms, timing and production conditions needed to create them.",
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-center mb-11">
          {/* Head */}
          <div>
            <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
              Plan the Content Before the Cameras Arrive
            </h2>
            <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              The final use of the content should shape the capture plan from the start.
            </p>
          </div>

          {/* Photo Block */}
          <div className="group relative min-h-[300px] border border-[#1E2A36] text-white flex flex-col justify-end p-6 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(10,15,22,0.25)]">
            <Image
              src="/images/seo-services/event-videography-and-photography/planner-producer-venue-coordination.webp"
              alt="DXG photo and video director reviewing shot list and agenda with event planner"
              title="Pre-Event Photo & Video Shot List Strategy"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Strategic Content Planning
              </b>
              <p className="text-xs sm:text-[13.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Aligning marketing objectives, executive priorities, speaker slots, and room logistics before camera operators step onto the ballroom floor.
              </p>
            </div>
          </div>
        </div>

        {/* Content Priorities by Team Box */}
        <div className="bg-[#0A0F16] text-white p-7 sm:p-9 rounded-md border border-[#1E2A36] mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <h3 className="text-2xl font-semibold mb-4 font-['Josefin_Sans',sans-serif] text-[#2CBCED]">
            Content Priorities by Team
          </h3>
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

        {/* 6 Core Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#C9D3DC] rounded-md p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(10,15,22,0.1)] border-t-4 border-t-[#2CBCED]"
            >
              <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
                {item.title}
              </h3>
              <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
