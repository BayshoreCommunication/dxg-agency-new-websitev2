import Image from "next/image";
import React from "react";

export default function HybridFormatsSection() {
  const formats = [
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
      title: "Association Conferences",
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
      title: "Medical Events",
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
      title: "Nonprofit Events",
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
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Hybrid and Virtual Production For Conferences, Broadcasts & More
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Every event has a different audience, agenda and production requirement. DXG supports formats such as:
          </p>
        </div>

        {/* 3 WebP Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-12">
          {/* Photo 03 */}
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image
              src="/images/seo-services/hybrid-and-virtual-event-production/executive-livestream-broadcast-keynote.webp"
              alt="Corporate executive delivering keynote to virtual audience with teleprompter and multi-camera studio switching."
              title="Executive Livestream Broadcast"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Executive Livestream Broadcast
              </b>
            </div>
          </div>

          {/* Photo 04 */}
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image
              src="/images/seo-services/hybrid-and-virtual-event-production/remote-speaker-virtual-greenroom-check.webp"
              alt="DXG technician conducting audio-video check with remote panelist joining via virtual greenroom."
              title="Remote Speaker Virtual Greenroom Check"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Remote Speaker Greenroom
              </b>
            </div>
          </div>

          {/* Photo 05 */}
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image
              src="/images/seo-services/hybrid-and-virtual-event-production/multi-room-breakout-streaming-operations.webp"
              alt="Simultaneous breakout streaming management console overseeing 8 concurrent track feeds."
              title="Multi-Room Stream Operations"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Multi-Room Stream Operations
              </b>
            </div>
          </div>
        </div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {formats.map((v, i) => (
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
