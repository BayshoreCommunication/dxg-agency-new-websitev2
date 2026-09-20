import React from "react";

export default function GeneralSessionSection() {
  return (
    <section className="relative overflow-hidden py-[clamp(64px,8vw,112px)] bg-[#0A0F16] text-white">
      {/* Background X Motif */}
      <svg
        className="absolute -left-[220px] -bottom-[200px] w-[620px] h-[620px] opacity-[0.07] pointer-events-none"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <line x1="8" y1="8" x2="92" y2="92" stroke="#2CBCED" strokeWidth="2" />
        <line x1="92" y1="8" x2="8" y2="92" stroke="#2CBCED" strokeWidth="2" />
        <line x1="18" y1="8" x2="50" y2="40" stroke="#2CBCED" strokeWidth="2" />
        <line x1="82" y1="8" x2="50" y2="40" stroke="#2CBCED" strokeWidth="2" />
        <line x1="18" y1="92" x2="50" y2="60" stroke="#2CBCED" strokeWidth="2" />
        <line x1="82" y1="92" x2="50" y2="60" stroke="#2CBCED" strokeWidth="2" />
      </svg>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-[840px]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-6 font-['Josefin_Sans',sans-serif] text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            General Session Production
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif] mb-8">
            The main stage sets the standard for your entire conference. It is where you welcome your guests, share your biggest announcements and feature your highest profile speakers. General session production requires a delicate balance of technical precision and creative pacing. Our show callers and producers sit at the tech table, managing every single cue. They call the lighting changes, the video rolls, and the audio cues with perfect timing. We keep every technical discipline under one unified command, so the live show runs with a natural, coordinated flow. Your presenters can walk on stage with total confidence knowing the technology will follow their lead seamlessly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#1E2A36] pt-8">
            <div className="bg-[#111A24] border border-[#1E2A36] p-5 rounded">
              <span className="text-[#2CBCED] font-['Josefin_Sans',sans-serif] text-sm font-semibold block mb-1">
                Show Callers
              </span>
              <span className="text-white text-base font-medium font-['Josefin_Sans',sans-serif]">
                Unified Cue Calling
              </span>
            </div>
            <div className="bg-[#111A24] border border-[#1E2A36] p-5 rounded">
              <span className="text-[#2CBCED] font-['Josefin_Sans',sans-serif] text-sm font-semibold block mb-1">
                Main Stage
              </span>
              <span className="text-white text-base font-medium font-['Josefin_Sans',sans-serif]">
                Pristine Audio & Video
              </span>
            </div>
            <div className="bg-[#111A24] border border-[#1E2A36] p-5 rounded">
              <span className="text-[#2CBCED] font-['Josefin_Sans',sans-serif] text-sm font-semibold block mb-1">
                Execution
              </span>
              <span className="text-white text-base font-medium font-['Josefin_Sans',sans-serif]">
                Seamless Coordinated Flow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
