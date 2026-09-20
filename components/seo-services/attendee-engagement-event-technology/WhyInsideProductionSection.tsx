import React from "react";

export default function WhyInsideProductionSection() {
  const points = [
    {
      title: "Attendees join within seconds",
      desc: "Attendees understand how to use it. A QR code and on screen prompts open access fast, keeping attention on the session.",
    },
    {
      title: "Speakers respond with confidence",
      desc: "Speakers understand how to interact with it. A one page cue sheet shows when each poll opens, closes and appears on screen.",
    },
    {
      title: "Planners manage one plan",
      desc: "Planners can manage it. One producer coordinates polling, apps, signage and AV, giving you one point of contact.",
    },
    {
      title: "Production team delivers every cue",
      desc: "The production team knows exactly when it needs to appear in the program. Each interaction has an owner and a time in the run of show.",
    },
    {
      title: "Screens, slides & cues stay aligned",
      desc: "DXG evaluates attendee engagement as part of the broader event production strategy. Technology works together with audiovisual production, presentations, speakers and show flow instead of operating as a separate system. Separate polling vendors often produce mismatched slides and missed cues.",
    },
    {
      title: "Keynote at minute 22 shows result",
      desc: "A poll question appears on the LED wall at the producer's cue. The moderator reads the top voted question aloud and the audience watches its input shape the session.",
    },
    {
      title: "Your strategy stays in your hands",
      desc: "You keep control of the event strategy. DXG plans the technology around it, using DXG tools or platforms you already own.",
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
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
              On-Screen QR & Polling Prompt
            </b>
            <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Keynote speaker pointing to large QR code on stage screen encouraging instant audience participation.
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
              Speaker Confidence Monitor
            </b>
            <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Moderator viewing real-time top voted audience questions on stage confidence monitor screen.
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
              Tech Table Polling Operator
            </b>
            <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              DXG engagement tech operator triggering poll closing cue right on schedule in run of show.
            </p>
          </div>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className={`group border rounded-md p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                idx === 4
                  ? "bg-[#0A0F16] text-white border-[#1E2A36] md:col-span-2 lg:col-span-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-[#2CBCED]"
                  : "bg-white text-[#0A0F16] border-[#C9D3DC] border-t-4 border-t-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-2.5 font-['Josefin_Sans',sans-serif] ${
                  idx === 4 ? "text-white group-hover:text-[#2CBCED]" : "text-[#0A0F16] group-hover:text-[#1A7FA3]"
                } transition-colors duration-200`}
              >
                {pt.title}
              </h3>
              <p
                className={`text-[14.5px] leading-relaxed font-['IBM_Plex_Sans',sans-serif] ${
                  idx === 4 ? "text-[#C9D3DC]" : "text-[#5B6B7A]"
                }`}
              >
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
