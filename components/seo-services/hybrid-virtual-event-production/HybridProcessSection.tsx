import React from "react";

export default function HybridProcessSection() {
  const steps = [
    {
      num: 1,
      ghost: "01",
      title: "Discovery and production scoping",
      desc: "We review the event format, audience mix, venue, agenda, session count, presenters, streaming goals, platform requirements and production needs. This creates a clear scope for the rest of the production.",
      live: false,
    },
    {
      num: 2,
      ghost: "02",
      title: "Technical and platform planning",
      desc: "We define the camera plan, audio workflow, streaming path, remote contribution method, presentation integration, graphics requirements, platform setup and production responsibilities.",
      live: false,
    },
    {
      num: 3,
      ghost: "03",
      title: "Speaker and content preparation",
      desc: "Remote presenters receive technical guidance before the event. Our team collects presentation files, checks content, confirms speaker requirements and prepares each session for live delivery.",
      live: false,
    },
    {
      num: 4,
      ghost: "04",
      title: "Technical rehearsal",
      desc: "We test remote connections, microphones, cameras, presentations, playback, graphics, speaker transitions, Q&A, polling and other live elements. Rehearsal gives the production team a shared sequence for show day.",
      live: false,
    },
    {
      num: 5,
      ghost: "05",
      title: "Live show production",
      desc: "Our producers coordinate the live show across the venue and virtual audience. Cameras, remote presenters, graphics, content, streaming and session cues move together through the run of show.",
      live: true,
    },
    {
      num: 6,
      ghost: "06",
      title: "Recording and on-demand content",
      desc: "Sessions can be recorded during the live event for later viewing. DXG can support post event content delivery for audiences who need access after the program ends.",
      live: false,
    },
  ];

  return (
    <section className="relative overflow-hidden py-[clamp(64px,8vw,112px)] bg-[#0A0F16] text-white">
      {/* Background X Motif */}
      <svg
        className="absolute -right-[160px] -top-[120px] w-[620px] h-[620px] opacity-[0.07] pointer-events-none"
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
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            How DXG Produces Your Hybrid Or Virtual Event
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#C9D3DC] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Six stages. Each one produces the information the next one needs.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-24">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-0 right-0 top-[15px] h-[2px] bg-[#1E2A36]" />

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-0">
            {steps.map((step) => (
              <li
                key={step.num}
                className="group relative list-none pr-0 lg:pr-[22px] pt-[10px] cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Ghost numeral */}
                <span
                  className={`absolute -top-[70px] -left-1 font-['Josefin_Sans',sans-serif] font-bold text-[84px] sm:text-[96px] leading-none pointer-events-none select-none tracking-tighter transition-all duration-300 ${
                    step.live
                      ? "text-[#2CBCED] opacity-30"
                      : "text-white opacity-[0.06] group-hover:text-[#2CBCED] group-hover:opacity-40"
                  }`}
                  aria-hidden="true"
                >
                  {step.ghost}
                </span>

                {/* Badge Number */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-['Josefin_Sans',sans-serif] font-bold text-sm relative mb-5 pt-0.5 border transition-all duration-300 group-hover:scale-110 ${
                    step.live
                      ? "bg-[#2CBCED] text-[#0A0F16] border-[#2CBCED] shadow-[0_0_15px_rgba(44,188,237,0.5)]"
                      : "bg-[#111A24] text-white border-[#1E2A36] group-hover:bg-[#2CBCED] group-hover:text-[#0A0F16] group-hover:border-[#2CBCED] group-hover:shadow-[0_0_20px_rgba(44,188,237,0.6)]"
                  }`}
                >
                  {step.num}
                </div>

                <h3 className="text-lg font-semibold mb-2 text-white font-['Josefin_Sans',sans-serif] group-hover:text-[#2CBCED] transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-[14.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif] group-hover:text-white transition-colors duration-200">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
