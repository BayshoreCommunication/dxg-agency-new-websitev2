import Image from "next/image";
import React from "react";

export default function ProcessTimelineV2Section() {
  const steps = [
    {
      num: 1,
      ghost: "01",
      title: "Discovery and Scoping",
      desc: "Format, audience, venue, budget, agenda, room count, and production goals. We establish a defined scope before equipment or vendor decisions are made.",
      live: false,
    },
    {
      num: 2,
      ghost: "02",
      title: "Planning and Vendor Coordination",
      desc: "Working budget, technical scope, room plans, staffing, and one master production timeline that updates as the program changes.",
      live: false,
    },
    {
      num: 3,
      ghost: "03",
      title: "Technical Preparation",
      desc: "Room specs, run of show, speaker materials, cue sheets, crew schedules, and a technical site visit to confirm venue conditions.",
      live: false,
    },
    {
      num: 4,
      ghost: "04",
      title: "Rehearsal",
      desc: "Presentations, video, audio, lighting, stage movement, and timing tested in the real room before attendees arrive.",
      live: false,
    },
    {
      num: 5,
      ghost: "05",
      title: "Show Day Execution",
      desc: "Our producer directs setup, checks, crew, vendors, and live show flow from the front of the house. Your planners stay with attendees and stakeholders.",
      live: true,
    },
    {
      num: 6,
      ghost: "06",
      title: "Closeout and Debrief",
      desc: "Strike, equipment return, vendor reconciliation, documentation, and a debrief that feeds directly into your next planning cycle.",
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
            How We Manage Your Production
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#C9D3DC] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            6 stages. Each one produces the exact technical information the next stage needs.
          </p>
        </div>

        {/* 3 Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-14">
          {/* Photo 03 */}
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image
              src="/images/seo-services/event-production-management/technical-site-visit-ballroom.webp"
              alt="Technical site visit measuring ballroom ceiling rigging points and sightlines"
              title="DXG Technical Site Visit & Ballroom Inspection"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16] via-[#0A0F16]/75 to-transparent z-[1]" />
            <span className="absolute top-3.5 left-4 font-['Josefin_Sans',sans-serif] font-bold text-xs text-[#0A0F16] bg-[#2CBCED] px-2 py-0.5 rounded-[2px] uppercase group-hover:scale-105 transition-transform duration-200 z-[2]">
              PHOTO 03
            </span>
            <span className="absolute top-3.5 right-4 font-['Josefin_Sans',sans-serif] text-xs text-[#2CBCED] z-[2]">
              3:2
            </span>
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Site visit
              </b>
              <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Empty ballroom, chairs stacked, the producer with a laser measure
                or pointing at a rigging point on the ceiling. Wide, slightly low
                angle, lots of ceiling.
              </p>
            </div>
          </div>

          {/* Photo 04 */}
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image
              src="/images/seo-services/event-production-management/technical-speaker-rehearsal.webp"
              alt="Speaker rehearsal on stage with confidence monitors and production crew"
              title="Controlled Stage Rehearsal & Speaker Preparation"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16] via-[#0A0F16]/75 to-transparent z-[1]" />
            <span className="absolute top-3.5 left-4 font-['Josefin_Sans',sans-serif] font-bold text-xs text-[#0A0F16] bg-[#2CBCED] px-2 py-0.5 rounded-[2px] uppercase group-hover:scale-105 transition-transform duration-200 z-[2]">
              PHOTO 04
            </span>
            <span className="absolute top-3.5 right-4 font-['Josefin_Sans',sans-serif] text-xs text-[#2CBCED] z-[2]">
              3:2
            </span>
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Rehearsal
              </b>
              <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                A presenter on stage under half house lights, confidence monitor
                visible, crew at the tech table in the foreground with the run of
                show open. Quiet, focused.
              </p>
            </div>
          </div>

          {/* Photo 05 */}
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image
              src="/images/seo-services/event-production-management/live-show-day-keynote-session.webp"
              alt="Live event general session keynote with bright LED display wall and engaged audience"
              title="Live Show Day Execution & General Session Keynote"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16] via-[#0A0F16]/75 to-transparent z-[1]" />
            <span className="absolute top-3.5 left-4 font-['Josefin_Sans',sans-serif] font-bold text-xs text-[#0A0F16] bg-[#2CBCED] px-2 py-0.5 rounded-[2px] uppercase group-hover:scale-105 transition-transform duration-200 z-[2]">
              PHOTO 05
            </span>
            <span className="absolute top-3.5 right-4 font-['Josefin_Sans',sans-serif] text-xs text-[#2CBCED] z-[2]">
              3:2
            </span>
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Show day
              </b>
              <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Full general session from the back of house at the moment a keynote
                begins: LED wall bright, audience seated, producer&apos;s silhouette at
                FOH in the bottom corner. High energy.
              </p>
            </div>
          </div>
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
