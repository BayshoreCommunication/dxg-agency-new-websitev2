import React from "react";

export default function AVStandardsSection() {
  const pillars = [
    {
      small: "Reliability & Redundancy",
      title: "Why Corporate Audiovisual Production Requires a Different Standard",
      desc: "Corporate events come with uniquely high stakes. A dropped microphone during a CEO address or a video glitch during a major product launch can instantly break the momentum of a carefully planned day. We understand the intense pressure of corporate event AV. Our engineers build redundancy into every single system. We bring backup laptops, secondary audio lines, and spare projection systems. If a piece of technology fails, our team switches to the backup seamlessly. The audience never even notices. Reliability drives every production we build.",
      theme: "light",
    },
    {
      small: "Budget Protection",
      title: "Manage Venue Contracts and Hidden Technical Costs",
      desc: "One of the most stressful aspects of planning a conference is dealing with the fine print of venue technical contracts. Many meeting planners are caught off guard by exclusive venue rules, mandatory power fees, and unexpected labor charges. As an experienced conference AV company, we protect your budget from these surprises. Long before the setup process begins, we review your venue contracts to identify rigid technical clauses and hidden costs. We handle the direct coordination for exclusive venue services like ceiling rigging and electrical drops. By factoring these elements into our overall event AV production strategy, we provide a complete financial picture so you can make confident decisions without worrying about unexpected final invoices.",
      theme: "dark",
    },
    {
      small: "Preproduction & Practice",
      title: "Technical Preproduction and Rehearsals",
      desc: "Flawless execution requires intense preparation long before attendees arrive. We dedicate significant time to technical preproduction to eliminate surprises. Our team reviews all presentation files, confirms aspect ratios, and tests video playback loops well in advance. We schedule dedicated rehearsal blocks so presenters can walk the stage and get comfortable with the monitors. Walking through the lighting cues and audio transitions in an empty room builds confidence. When speakers know the technical foundation is solid, they deliver much stronger presentations. That preparation can make a noticeable difference when the event goes live.",
      theme: "light",
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-11">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Built to Higher Operational Standards
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Corporate and conference audiovisual production requires absolute reliability, transparent contract management, and rigorous rehearsals.
          </p>
        </div>

        {/* 3 Photo Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-12">
          {/* Photo 03 */}
          <div
            className="group relative min-h-[240px] border-1.5 border-dashed border-[rgba(44,188,237,0.55)] text-white flex flex-col justify-end p-5 rounded transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]"
            style={{
              background:
                "repeating-linear-gradient(135deg, #0F1822 0 14px, #121C27 14px 28px)",
            }}
          >
            <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white group-hover:text-[#2CBCED] transition-colors duration-200">
              System Redundancy
            </b>
            <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Backup audio switcher and secondary presentation laptop running in sync behind FOH table.
            </p>
          </div>

          {/* Photo 04 */}
          <div
            className="group relative min-h-[240px] border-1.5 border-dashed border-[rgba(44,188,237,0.55)] text-white flex flex-col justify-end p-5 rounded transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]"
            style={{
              background:
                "repeating-linear-gradient(135deg, #0F1822 0 14px, #121C27 14px 28px)",
            }}
          >
            <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white group-hover:text-[#2CBCED] transition-colors duration-200">
              Venue Contract Audit
            </b>
            <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Technical line-item review of venue power and rigging specs before signing contract.
            </p>
          </div>

          {/* Photo 05 */}
          <div
            className="group relative min-h-[240px] border-1.5 border-dashed border-[rgba(44,188,237,0.55)] text-white flex flex-col justify-end p-5 rounded transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]"
            style={{
              background:
                "repeating-linear-gradient(135deg, #0F1822 0 14px, #121C27 14px 28px)",
            }}
          >
            <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white group-hover:text-[#2CBCED] transition-colors duration-200">
              Technical Rehearsals
            </b>
            <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Presenter practicing on stage under show lighting with confidence monitors active.
            </p>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            if (item.theme === "dark") {
              return (
                <div
                  key={idx}
                  className="group bg-[#0A0F16] text-white border border-[#1E2A36] rounded-md p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-[#2CBCED]"
                >
                  <div>
                    <small className="font-['Josefin_Sans',sans-serif] text-[#2CBCED] text-[13.5px] font-semibold block mb-2.5 uppercase tracking-wide group-hover:tracking-wider transition-all duration-200">
                      {item.small}
                    </small>
                    <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-white group-hover:text-[#2CBCED] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-[#C9D3DC] text-[14.5px] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className="group bg-white border border-[#C9D3DC] rounded-md p-7 sm:p-8 relative border-t-4 border-t-[#2CBCED] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(44,188,237,0.15)] hover:border-r-[#2CBCED]/40 hover:border-b-[#2CBCED]/40"
              >
                <small className="font-['Josefin_Sans',sans-serif] text-[#5B6B7A] text-[13.5px] font-semibold block mb-2.5 uppercase tracking-wide group-hover:text-[#2CBCED] transition-colors duration-200">
                  {item.small}
                </small>
                <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-[#0A0F16] group-hover:text-[#1A7FA3] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
