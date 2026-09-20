import Image from "next/image";
import React from "react";

export default function InHouseAVV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-center mb-11">
          {/* Head */}
          <div>
            <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
              Keep Your Dedicated Producer for In House AV
            </h2>
            <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Some contracts require you to use the venue’s in house AV team for equipment and room labor. That covers the gear and crew in the room. It does not replace the planning, budgeting, show flow development, and show day leadership your event still requires.
            </p>
          </div>

          {/* Photo 02 Image Block */}
          <div className="group relative min-h-[340px] border border-[#1E2A36] text-white flex flex-col justify-end p-6 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(10,15,22,0.25)]">
            <Image
              src="/images/seo-services/event-production-management/2.webp"
              alt="The DXG Continuity Model - Planner and Producer"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16] via-[#0A0F16]/75 to-transparent z-[1]" />
            <span className="absolute top-3.5 left-4 font-['Josefin_Sans',sans-serif] font-bold text-xs text-[#0A0F16] bg-[#2CBCED] px-2.5 py-1 rounded-[2px] uppercase tracking-wide group-hover:scale-105 transition-transform duration-200 z-[2]">
              PHOTO 02
            </span>
            <span className="absolute top-3.5 right-4 font-['Josefin_Sans',sans-serif] text-xs text-[#2CBCED] z-[2]">
              4:3
            </span>
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                The DXG Continuity Model
              </b>
              <p className="text-xs sm:text-[13.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Ballroom during load-in. A meeting planner and the DXG producer
                stand together over a floor plan or tablet in the foreground,
                engaged and calm. Behind them, a venue in-house crew in their own
                uniforms flies a screen or sets a stage. The image should say
                &quot;two teams, one plan&quot; without anyone looking stressed. Daylight or
                work-light, natural color.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Model Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-2">
          {/* Card 1: This Year */}
          <div className="group bg-white border border-[#C9D3DC] rounded-md p-7 sm:p-8 relative border-t-4 border-t-[#2CBCED] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(44,188,237,0.15)] hover:border-r-[#2CBCED]/40 hover:border-b-[#2CBCED]/40">
            <small className="font-['Josefin_Sans',sans-serif] text-[#5B6B7A] text-[13.5px] font-semibold block mb-2.5 uppercase tracking-wide group-hover:text-[#2CBCED] transition-colors duration-200">
              This year
            </small>
            <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-[#0A0F16] group-hover:text-[#0A0F16]">
              In house AV supplies the equipment. DXG manages the production.
            </h3>
            <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              We review the in-house proposal before you sign it, build the production budget and schedule around venue rules, coordinate the in-house team, your speakers, and your content, run technical rehearsals, and lead show day with a dedicated producer.
            </p>
          </div>

          {/* Card 2: Bridge */}
          <div className="group bg-[#0A0F16] text-white border border-[#1E2A36] rounded-md p-7 sm:p-8 flex flex-col justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-[#2CBCED]">
            <small className="font-['Josefin_Sans',sans-serif] text-[#2CBCED] text-[13.5px] font-semibold block mb-2.5 uppercase tracking-wide group-hover:tracking-wider transition-all duration-200">
              Between Events
            </small>
            <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-white group-hover:text-[#2CBCED] transition-colors duration-200">
              The production plan travels with you.
            </h3>
            <p className="text-[#C9D3DC] text-[15px] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Budget history, room plans, run of show templates, speaker workflows, and the producer who knows your program stays with DXG. Nothing restarts from zero when the venue changes.
            </p>
          </div>

          {/* Card 3: Next Year */}
          <div className="group bg-white border border-[#C9D3DC] rounded-md p-7 sm:p-8 relative border-t-4 border-t-[#0A0F16] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,15,22,0.15)] hover:border-t-[#2CBCED]">
            <small className="font-['Josefin_Sans',sans-serif] text-[#5B6B7A] text-[13.5px] font-semibold block mb-2.5 uppercase tracking-wide group-hover:text-[#0A0F16] transition-colors duration-200">
              Next Year
            </small>
            <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
              You work with the same producer under your choice of operational model.
            </h3>
            <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              You can choose full service DXG execution with our equipment, crew, and production in one team, use in house AV again with DXG managing production, or select any mix the venue and budget call for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
