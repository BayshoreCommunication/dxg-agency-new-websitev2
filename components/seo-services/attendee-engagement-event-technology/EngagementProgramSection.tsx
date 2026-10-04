import Image from "next/image";
import React from "react";

export default function EngagementProgramSection() {
  const verticals = [
    {
      title: "Corporate Events",
      icon: (
        <svg
          className="w-7 h-7 stroke-[#2CBCED] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="4" width="18" height="12" rx="1" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      ),
    },
    {
      title: "Association Meetings",
      icon: (
        <svg
          className="w-7 h-7 stroke-[#2CBCED] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"
          viewBox="0 0 24 24"
        >
          <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
        </svg>
      ),
    },
    {
      title: "Medical Programs",
      icon: (
        <svg
          className="w-7 h-7 stroke-[#2CBCED] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"
          viewBox="0 0 24 24"
        >
          <path d="M12 4v16M4 12h16" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
    {
      title: "Nonprofit Galas",
      icon: (
        <svg
          className="w-7 h-7 stroke-[#2CBCED] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"
          viewBox="0 0 24 24"
        >
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
        </svg>
      ),
    },
    {
      title: "Education Events",
      icon: (
        <svg
          className="w-7 h-7 stroke-[#2CBCED] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"
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
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-center mb-11">
          {/* Head */}
          <div>
            <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
              Event Technology Built Around Your Program
            </h2>
            <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              We plans attendee engagement technology for corporate, association, medical, non profit and education events. Formats span general sessions, breakout programs and hybrid events, so tools must fit every room. Each audience calls for its own mix, shaped by agenda, speakers and room size.
            </p>
          </div>

          {/* Photo 02 Image Block */}
          <div className="group relative min-h-[340px] border border-[#1E2A36] text-white flex flex-col justify-end p-6 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(10,15,22,0.25)]">
            <Image
              src="/images/seo-services/attendee-engagement-and-event-technology/event-mobile-app-digital-signage-integration.webp"
              alt="Attendee scanning badge QR code at interactive digital kiosk while holding customized event app with live agenda and session room directions."
              title="Event Mobile App & Digital Signage Integration"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Event Mobile App & Digital Signage Integration
              </b>
            </div>
          </div>
        </div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {verticals.map((v, i) => (
            <div
              key={i}
              className={`group bg-white border border-[#D5DFE7] hover:border-[#2CBCED] p-6 sm:p-7 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(44,188,237,0.18)] cursor-default min-h-[170px] sm:min-h-[185px] ${
                i === 4 ? "col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2CBCED]/15 to-[#2CBCED]/5 border border-[#2CBCED]/25 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#2CBCED]/50 transition-all duration-300 shrink-0 text-[#2CBCED]">
                {v.icon}
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-semibold font-['Josefin_Sans',sans-serif] text-[#0A0F16] group-hover:text-[#2CBCED] transition-colors duration-200 leading-snug">
                {v.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
