import React from "react";

export default function EngagementProcessSection() {
  const steps = [
    {
      num: 1,
      ghost: "01",
      title: "Discovery and goals",
      desc: "We start with audience size, format, venue, agenda and one question: what should attendees do? Your answer sets the tool list before any platform gets priced.",
      live: false,
    },
    {
      num: 2,
      ghost: "02",
      title: "Tool selection",
      desc: "We matches platforms to your program, registration data and sponsor commitments. Your current event app stays in play and we coordinate every vendor under one timeline. Registration data feeds check in and badge scanning, so names and session access match on day one.",
      live: false,
    },
    {
      num: 3,
      ghost: "03",
      title: "Content and setup",
      desc: "Poll questions get written and approved. Q&A moderation rules get set. App content, badge scanners and check in stations are configured and labeled before load in. Sponsor placements and lead fields get built at this stage too.",
      live: false,
    },
    {
      num: 4,
      ghost: "04",
      title: "Connectivity and rehearsal",
      desc: "WiFi capacity gets tested with real devices. Speakers rehearse polls on stage and moderators practice the question queue. Operators time every screen change in the actual room.",
      live: false,
    },
    {
      num: 5,
      ghost: "05",
      title: "Show day",
      desc: "The producer calls each interaction like a lighting cue. Support staff help attendees at registration and outside session doors. Planners stay with stakeholders and sponsors.",
      live: true,
    },
    {
      num: 6,
      ghost: "06",
      title: "Closeout and reporting",
      desc: "Response data, session attendance, feedback scores, sponsor scans and lead exports arrive in one debrief. Results shape next year's engagement plan.",
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
            How We Plan Attendee Engagement Technology
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#C9D3DC] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Six stages, each producing the details the next one needs.
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
