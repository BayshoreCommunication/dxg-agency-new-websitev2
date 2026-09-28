import Image from "next/image";
import React from "react";

export default function TechnicalPlanningV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-center mb-11">
          {/* Head */}
          <div>
            <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
              Connect Creative Ideas With Technical Planning
            </h2>
            <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              The most impressive creative concept is only as good as its live execution. When creative teams work without understanding technical production, planners end up paying for renderings that cannot be built within their venue or budget.
            </p>
          </div>

          {/* Photo Block */}
          <div className="group relative min-h-[340px] border border-[#1E2A36] text-white flex flex-col justify-end p-6 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(10,15,22,0.25)]">
            <Image
              src="/images/seo-services/event-creative-and-experience-design/planner-producer-venue-coordination.webp"
              alt="DXG spatial designer and technical producer reviewing ballroom rigging and stage floor plan"
              title="Creative Design & Technical Production Alignment"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Unified Idea & Execution
              </b>
              <p className="text-xs sm:text-[13.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Addressing structural integrity, weight loads, power draw, and rigging capacities early during initial drafting so creative vision matches venue reality.
              </p>
            </div>
          </div>
        </div>

        {/* 2 Core Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          {/* Card 1 */}
          <div className="group bg-white border border-[#C9D3DC] rounded-md p-7 sm:p-8 relative border-t-4 border-t-[#2CBCED] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(44,188,237,0.15)]">
            <small className="font-['Josefin_Sans',sans-serif] text-[#5B6B7A] text-[13.5px] font-semibold block mb-2.5 uppercase tracking-wide group-hover:text-[#2CBCED] transition-colors duration-200">
              Spatial Direction
            </small>
            <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
              Unifying Production Design & Spatial Vision
            </h3>
            <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              DXG bridges this gap by unifying event production design with spatial creative direction. Our team understands how physical structures interact with lighting rigs, video walls, camera positions and audio coverage. By addressing structural integrity, power draw, weight loads and labor timelines during the initial drafting phase, we protect your budget and your timeline.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#0A0F16] text-white border border-[#1E2A36] rounded-md p-7 sm:p-8 flex flex-col justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-[#2CBCED]">
            <small className="font-['Josefin_Sans',sans-serif] text-[#2CBCED] text-[13.5px] font-semibold block mb-2.5 uppercase tracking-wide group-hover:tracking-wider transition-all duration-200">
              Show Day Execution
            </small>
            <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-white group-hover:text-[#2CBCED] transition-colors duration-200">
              Practical Reality & Striking Visual Presence
            </h3>
            <p className="text-[#C9D3DC] text-[15px] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              This integrated approach keeps your design grounded in practical reality while still delivering a striking visual presence. You get a stage environment that captivates your audience, meets your messaging goals and loads in on schedule without late stage compromises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
