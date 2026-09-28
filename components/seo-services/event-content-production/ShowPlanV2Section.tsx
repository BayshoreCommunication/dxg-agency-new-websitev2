import Image from "next/image";
import React from "react";

export default function ShowPlanV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-center mb-11">
          {/* Head */}
          <div>
            <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
              Event Content Starts With the Show Plan
            </h2>
            <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Strong event content starts before the design file opens. DXG looks at how every asset will work inside the live program.
            </p>
          </div>

          {/* Photo Block */}
          <div className="group relative min-h-[340px] border border-[#1E2A36] text-white flex flex-col justify-end p-6 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(10,15,22,0.25)]">
            <Image
              src="/images/seo-services/event-content-production/planner-producer-venue-coordination.webp"
              alt="DXG content team and event producer collaborating on screen layout and show plan"
              title="Show Plan & Screen Content Strategy Alignment"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Integrated Show Content Planning
              </b>
              <p className="text-xs sm:text-[13.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Behind the scenes during pre-production planning: creative team and technical producers aligning screen dimensions, file specs, and cue sequences directly with the master run-of-show timeline.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Principles Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-2">
          {/* Card 1: Screen Reframes */}
          <div className="group bg-white border border-[#C9D3DC] rounded-md p-7 sm:p-8 relative border-t-4 border-t-[#2CBCED] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(44,188,237,0.15)] hover:border-r-[#2CBCED]/40 hover:border-b-[#2CBCED]/40">
            <small className="font-['Josefin_Sans',sans-serif] text-[#5B6B7A] text-[13.5px] font-semibold block mb-2.5 uppercase tracking-wide group-hover:text-[#2CBCED] transition-colors duration-200">
              Display Specs
            </small>
            <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
              Screen Reframes the Content
            </h3>
            <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              LED walls, projection systems, confidence monitors, scenic screens and multiple displays each call for a different approach. We plan aspect ratios, dimensions, resolution, safe areas and content zones around the actual display environment.
            </p>
          </div>

          {/* Card 2: Run of Show */}
          <div className="group bg-[#0A0F16] text-white border border-[#1E2A36] rounded-md p-7 sm:p-8 flex flex-col justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-[#2CBCED]">
            <small className="font-['Josefin_Sans',sans-serif] text-[#2CBCED] text-[13.5px] font-semibold block mb-2.5 uppercase tracking-wide group-hover:tracking-wider transition-all duration-200">
              Pacing & Cues
            </small>
            <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-white group-hover:text-[#2CBCED] transition-colors duration-200">
              Run of Show Shapes the Timing
            </h3>
            <p className="text-[#C9D3DC] text-[15px] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              An opening video needs a cue. A walk in look needs a start and end point. A speaker presentation needs a clean handoff. An awards sequence needs accurate names, titles and timing. DXG maps content to the run of show so the media supports the pace of the program.
            </p>
          </div>

          {/* Card 3: Production Workflow */}
          <div className="group bg-white border border-[#C9D3DC] rounded-md p-7 sm:p-8 relative border-t-4 border-t-[#0A0F16] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,15,22,0.15)] hover:border-t-[#2CBCED]">
            <small className="font-['Josefin_Sans',sans-serif] text-[#5B6B7A] text-[13.5px] font-semibold block mb-2.5 uppercase tracking-wide group-hover:text-[#0A0F16] transition-colors duration-200">
              Team Execution
            </small>
            <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
              Production Teams Design the Workflow
            </h3>
            <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Content moves through presenters, producers, playback operators, AV teams and show callers. DXG keeps the workflow organized through clear deadlines, file preparation, review stages and final delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
