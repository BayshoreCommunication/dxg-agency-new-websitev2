import React from "react";

const capabilities = [
  {
    title: "Audio",
    desc: "We deploy professional sound systems tailored to your room acoustics. Our engineers actively mix the sound during your event, keeping every presenter crystal clear from front to back.",
    icon: (
      <svg className="w-6 h-6 stroke-[#2CBCED] fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    title: "Video",
    desc: "We support your content with LED video walls, projection, and smooth presentation switching. Our teams test every file format well before the doors ever open.",
    icon: (
      <svg className="w-6 h-6 stroke-[#2CBCED] fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Lighting",
    desc: "Our designers provide stage lighting that makes presenters look their best. We incorporate intelligent fixtures, scenic elements and brand color washing across the entire venue.",
    icon: (
      <svg className="w-6 h-6 stroke-[#2CBCED] fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Cameras & IMAG",
    desc: "We offer multicamera production with experienced operators and live image magnification that makes massive convention centers feel intimate for every attendee.",
    icon: (
      <svg className="w-6 h-6 stroke-[#2CBCED] fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Staging & Scenic",
    desc: "We design and build secure stages, elegant soft goods, and custom scenic environments — all integrated into a cohesive stage design that looks incredible from every angle.",
    icon: (
      <svg className="w-6 h-6 stroke-[#2CBCED] fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <path d="M3 21h18M4 17h16M6 13h12M8 9h8" />
      </svg>
    ),
  },
  {
    title: "Breakout Rooms",
    desc: "We assign floating technicians to monitor every session. Your breakout speakers receive the same care as your main stage keynotes — consistent quality across 20 rooms.",
    icon: (
      <svg className="w-6 h-6 stroke-[#2CBCED] fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
];

export default function AVCapabilitiesSection() {
  return (
    <section id="capabilities" className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16] scroll-mt-20">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Audiovisual Production Capabilities
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG provides and manages every technical element your program needs. Our services cover the complete spectrum of live event production.
          </p>
        </div>

        {/* Static Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#C9D3DC] hover:border-[#2CBCED] hover:shadow-[0_14px_32px_rgba(44,188,237,0.18)] transition-all duration-300 rounded-2xl p-6 sm:p-7 cursor-default group hover:-translate-y-1.5 flex flex-col justify-start"
            >
              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2CBCED]/15 to-[#2CBCED]/5 border border-[#2CBCED]/25 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#2CBCED]/50 transition-all text-[#2CBCED]">
                  {item.icon}
                </div>
                <h3 className="font-['Josefin_Sans',sans-serif] font-semibold text-[19px] text-[#0A0F16] group-hover:text-[#2CBCED] transition-colors duration-200 leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-[14px] sm:text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
