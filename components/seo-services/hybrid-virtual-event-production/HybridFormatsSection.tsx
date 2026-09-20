import React from "react";

export default function HybridFormatsSection() {
  const formats = [
    {
      title: "Corporate events",
      desc: "Executive broadcasts, leadership meetings, company programs, sales meetings and internal communications can connect in-room and remote teams through corporate live streaming and coordinated presenter support.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px] group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="4" width="18" height="12" rx="1" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      ),
    },
    {
      title: "Association conferences",
      desc: "General sessions, concurrent breakouts, expert panels and multi session programs can serve attendees in the venue and online. DXG supports hybrid conference production with session streaming, speaker coordination and audience engagement.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px] group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
        </svg>
      ),
    },
    {
      title: "Medical events",
      desc: "Medical meetings often include multiple speakers, detailed presentations, panels and remote participation. DXG coordinates presenter feeds, content, graphics, streaming and session timing for a controlled production workflow.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px] group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M12 4v16M4 12h16" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
    {
      title: "Non profit events",
      desc: "Fundraising programs, galas, awareness events and donor broadcasts can reach people beyond the venue. Live streaming, video content, remote participation and audience interaction can work together in one show.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px] group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
        </svg>
      ),
    },
    {
      title: "Education events",
      desc: "Symposiums, lectures, academic programs and other education events can connect in-person and remote participants while preserving clear presentation delivery and session recording.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px] group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M2 9l10-5 10 5-10 5z" />
          <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Hybrid and Virtual Production For Conferences, Broadcasts & More
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Every event has a different audience, agenda and production requirement. DXG supports formats such as:
          </p>
        </div>

        {/* 3 Photo Placeholders (Photo 03, Photo 04, Photo 05) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-12">
          {/* Photo 03 */}
          <div
            className="group relative min-h-[240px] border-1.5 border-dashed border-[rgba(44,188,237,0.55)] text-white flex flex-col justify-end p-5 rounded transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]"
            style={{
              background:
                "repeating-linear-gradient(135deg, #0F1822 0 14px, #121C27 14px 28px)",
            }}
          >
            <span className="absolute top-3.5 left-4 font-['Josefin_Sans',sans-serif] font-bold text-xs text-[#0A0F16] bg-[#2CBCED] px-2 py-0.5 rounded-[2px] uppercase group-hover:scale-105 transition-transform duration-200">
              PHOTO 03
            </span>
            <span className="absolute top-3.5 right-4 font-['Josefin_Sans',sans-serif] text-xs text-[#2CBCED]">
              3:2
            </span>
            <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white group-hover:text-[#2CBCED] transition-colors duration-200">
              Executive Livestream Broadcast
            </b>
            <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Corporate executive delivering keynote to virtual audience with teleprompter and multi-camera studio switching.
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
            <span className="absolute top-3.5 left-4 font-['Josefin_Sans',sans-serif] font-bold text-xs text-[#0A0F16] bg-[#2CBCED] px-2 py-0.5 rounded-[2px] uppercase group-hover:scale-105 transition-transform duration-200">
              PHOTO 04
            </span>
            <span className="absolute top-3.5 right-4 font-['Josefin_Sans',sans-serif] text-xs text-[#2CBCED]">
              3:2
            </span>
            <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white group-hover:text-[#2CBCED] transition-colors duration-200">
              Remote Speaker Greenroom
            </b>
            <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              DXG technician conducting audio-video check with remote panelist joining via virtual greenroom.
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
            <span className="absolute top-3.5 left-4 font-['Josefin_Sans',sans-serif] font-bold text-xs text-[#0A0F16] bg-[#2CBCED] px-2 py-0.5 rounded-[2px] uppercase group-hover:scale-105 transition-transform duration-200">
              PHOTO 05
            </span>
            <span className="absolute top-3.5 right-4 font-['Josefin_Sans',sans-serif] text-xs text-[#2CBCED]">
              3:2
            </span>
            <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white group-hover:text-[#2CBCED] transition-colors duration-200">
              Multi-Room Stream Operations
            </b>
            <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Simultaneous breakout streaming management console overseeing 8 concurrent track feeds.
            </p>
          </div>
        </div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[2px] bg-[#1E2A36] border border-[#1E2A36]">
          {formats.map((v, i) => (
            <div
              key={i}
              className={`group bg-[#F3F6F8] hover:bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:z-10 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] relative ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {v.icon}
              <h3 className="text-xl font-semibold mb-2 font-['Josefin_Sans',sans-serif] text-[#0A0F16] group-hover:text-[#1A7FA3] transition-colors duration-200">
                {v.title}
              </h3>
              <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
