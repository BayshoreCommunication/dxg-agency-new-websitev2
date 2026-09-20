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
              Using the venue&apos;s in-house AV? Keep your producer.
            </h2>
            <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Some contracts favor in-house AV. Some venues require it. That
              decision covers equipment and labor. It does not have to cover the
              planning, budgeting, run of show and show-day leadership your
              program still needs.
            </p>
          </div>

          {/* Photo 02 Placeholder */}
          <div
            className="group relative min-h-[340px] bg-repeating-linear-gradient border-1.5 border-dashed border-[rgba(44,188,237,0.55)] text-white flex flex-col justify-end p-6 rounded-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(10,15,22,0.25)]"
            style={{
              background:
                "repeating-linear-gradient(135deg, #0F1822 0 14px, #121C27 14px 28px)",
            }}
          >
            <span className="absolute top-3.5 left-4 font-['Josefin_Sans',sans-serif] font-bold text-xs text-[#0A0F16] bg-[#2CBCED] px-2.5 py-1 rounded-[2px] uppercase tracking-wide group-hover:scale-105 transition-transform duration-200">
              PHOTO 02
            </span>
            <span className="absolute top-3.5 right-4 font-['Josefin_Sans',sans-serif] text-xs text-[#2CBCED]">
              4:3
            </span>
            <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold mb-1 text-white group-hover:text-[#2CBCED] transition-colors duration-200">
              Planner and producer, venue crew behind
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

        {/* 3 Model Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-2">
          {/* Card 1: This Year */}
          <div className="group bg-white border border-[#C9D3DC] rounded-md p-7 sm:p-8 relative border-t-4 border-t-[#2CBCED] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(44,188,237,0.15)] hover:border-r-[#2CBCED]/40 hover:border-b-[#2CBCED]/40">
            <small className="font-['Josefin_Sans',sans-serif] text-[#5B6B7A] text-[13.5px] font-semibold block mb-2.5 uppercase tracking-wide group-hover:text-[#2CBCED] transition-colors duration-200">
              This year
            </small>
            <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-[#0A0F16] group-hover:text-[#0A0F16]">
              In-house AV supplies the gear. DXG manages the production.
            </h3>
            <ul className="space-y-2.5 mt-3.5 text-[14.5px] text-[#5B6B7A] font-['IBM_Plex_Sans',sans-serif]">
              <li className="relative pl-[18px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[8px] before:h-[2px] before:bg-[#2CBCED] group-hover:before:w-[12px] before:transition-all before:duration-200">
                Review the in-house proposal before you sign it
              </li>
              <li className="relative pl-[18px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[8px] before:h-[2px] before:bg-[#2CBCED] group-hover:before:w-[12px] before:transition-all before:duration-200">
                Build the production budget and schedule around venue rules
              </li>
              <li className="relative pl-[18px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[8px] before:h-[2px] before:bg-[#2CBCED] group-hover:before:w-[12px] before:transition-all before:duration-200">
                Coordinate the in-house team, your speakers and your content
              </li>
              <li className="relative pl-[18px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[8px] before:h-[2px] before:bg-[#2CBCED] group-hover:before:w-[12px] before:transition-all before:duration-200">
                Run rehearsals and lead show day with a dedicated producer
              </li>
            </ul>
          </div>

          {/* Card 2: Bridge */}
          <div className="group bg-[#0A0F16] text-white border border-[#1E2A36] rounded-md p-7 sm:p-8 flex flex-col justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-[#2CBCED]">
            <small className="font-['Josefin_Sans',sans-serif] text-[#2CBCED] text-[13.5px] font-semibold block mb-2.5 uppercase tracking-wide group-hover:tracking-wider transition-all duration-200">
              Between events
            </small>
            <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-white group-hover:text-[#2CBCED] transition-colors duration-200">
              The plan travels with you
            </h3>
            <p className="text-[#C9D3DC] text-[15px] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Budget history, room plans, run of show, speaker workflow and the
              producer who knows your program stay with DXG. Nothing restarts
              from zero when the venue changes.
            </p>
          </div>

          {/* Card 3: Next Year */}
          <div className="group bg-white border border-[#C9D3DC] rounded-md p-7 sm:p-8 relative border-t-4 border-t-[#0A0F16] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,15,22,0.15)] hover:border-t-[#2CBCED]">
            <small className="font-['Josefin_Sans',sans-serif] text-[#5B6B7A] text-[13.5px] font-semibold block mb-2.5 uppercase tracking-wide group-hover:text-[#0A0F16] transition-colors duration-200">
              Next year
            </small>
            <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
              Same producer. Your choice of model.
            </h3>
            <ul className="space-y-2.5 mt-3.5 text-[14.5px] text-[#5B6B7A] font-['IBM_Plex_Sans',sans-serif]">
              <li className="relative pl-[18px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[8px] before:h-[2px] before:bg-[#2CBCED] group-hover:before:w-[12px] before:transition-all before:duration-200">
                Full-service DXG: equipment, crew and production in one team
              </li>
              <li className="relative pl-[18px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[8px] before:h-[2px] before:bg-[#2CBCED] group-hover:before:w-[12px] before:transition-all before:duration-200">
                In-house AV again, with DXG managing production
              </li>
              <li className="relative pl-[18px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[8px] before:h-[2px] before:bg-[#2CBCED] group-hover:before:w-[12px] before:transition-all before:duration-200">
                Any mix the venue and the budget call for
              </li>
            </ul>
            <p className="mt-3.5 text-[15px] text-[#5B6B7A] font-['IBM_Plex_Sans',sans-serif]">
              The production relationship continues either way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
