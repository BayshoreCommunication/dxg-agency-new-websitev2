import Image from "next/image";
import React from "react";

export default function ProcessTimelineV2Section() {
  const steps = [
    {
      num: 1,
      ghost: "01",
      title: "1. Content Discovery",
      desc: "We review the event type, audience, agenda, brand requirements, screen setup, content inventory and delivery dates. You get a clear view of the content needed for the show.",
      live: false,
    },
    {
      num: 2,
      ghost: "02",
      title: "2. Content Planning",
      desc: "We map each asset to its session, speaker, screen, cue and purpose. The plan helps the team see missing pieces early and keep production moving.",
      live: false,
    },
    {
      num: 3,
      ghost: "03",
      title: "3. Creative Direction",
      desc: "We define the visual direction for opening videos, motion graphics, presentations, transitions, awards and branded screen moments. Creative choices stay connected to the event experience.",
      live: false,
    },
    {
      num: 4,
      ghost: "04",
      title: "4. Production and Design",
      desc: "Our team produces and edits the required media, from conference video content and event opening videos to motion graphics for events, walk in graphics, presentation design and digital scenic content.",
      live: false,
    },
    {
      num: 5,
      ghost: "05",
      title: "5. Review and Technical Preparation",
      desc: "Every finished asset moves through content review and technical preparation. We check messaging, branding, timing, file format, dimensions, resolution and playback requirements.",
      live: false,
    },
    {
      num: 6,
      ghost: "06",
      title: "6. Show Ready Delivery",
      desc: "Final files arrive organized for the production team. Videos, graphics, presentations, transitions and playback assets follow the approved show plan.",
      live: true,
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
            How We Build Event Content
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#C9D3DC] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG plans conference video content around your agenda, audience, venue, screen environment and production schedule. Our team works alongside the audiovisual and creative teams, so every asset has a clear place in the show.
          </p>
        </div>

        {/* 3 Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-14">
          {/* Photo 03 */}
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image
              src="/images/seo-services/event-content-production/technical-site-visit-ballroom.webp"
              alt="Technical screen specification check and venue display environment evaluation"
              title="DXG Content Discovery & Technical Spec Evaluation"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                1 & 2. Discovery & Planning
              </b>
              <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Evaluating LED aspect ratios, resolution, safe zones, and agenda cues across main stage and breakout displays.
              </p>
            </div>
          </div>

          {/* Photo 04 */}
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image
              src="/images/seo-services/event-content-production/technical-speaker-rehearsal.webp"
              alt="Screen playback testing and motion graphics review during technical rehearsal"
              title="Creative Direction & Motion Graphics Review"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                3 & 4. Creative & Production
              </b>
              <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Creating motion graphics, walk-in packages, speaker decks, and video content tuned for live execution.
              </p>
            </div>
          </div>

          {/* Photo 05 */}
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image
              src="/images/seo-services/event-content-production/live-show-day-keynote-session.webp"
              alt="Live show ready content playback on LED stage screen during general session"
              title="Show-Ready Screen Playback Delivery"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                5 & 6. Technical QC & Delivery
              </b>
              <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Show-ready assets organized by session, cue, and format for seamless playback operator execution.
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
