import Image from "next/image";
import React from "react";

export default function DualOpticsV2Section() {
  const items = [
    {
      title: "Moiré Prevention and LED Refresh Rates",
      desc: "We match video wall pixel pitch and refresh rates directly to camera sensor specs, eliminating distracting visual flicker on broadcast feeds.",
    },
    {
      title: "Broadcast Lighting Ratios",
      desc: "We balance key, fill and backlight intensity so presenters remain crisp on camera without blinding the audience in the front row.",
    },
    {
      title: "Framed Branding Zones",
      desc: "We map scenic backdrops and digital graphic zones specifically to match standard camera focal lengths, ensuring sponsor logos and event branding remain visible during close-up speaker shots.",
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-center mb-11">
          {/* Head */}
          <div>
            <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
              Design for the Room and the Camera
            </h2>
            <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif] mb-3">
              A stage design that looks impressive to an in-person audience can sometimes fail on camera. Wide LED screens can create moiré patterns, overhead lights can cast deep facial shadows on broadcast feeds and key brand elements can disappear off screen during tight camera framing.
            </p>
            <p className="text-[16px] text-[#0A0F16] font-medium leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              DXG designs stage environments with dual optics in mind. We balance physical sightlines for attendees in the room with lens optimized framing for live broadcasts, IMAG screens and recorded video assets.
            </p>
          </div>

          {/* Photo Block */}
          <div className="group relative min-h-[340px] border border-[#1E2A36] text-white flex flex-col justify-end p-6 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(10,15,22,0.25)]">
            <Image
              src="/images/seo-services/event-creative-and-experience-design/dual-optics-stage-design.webp"
              alt="General session stage environment designed with dual optics for ballroom attendees and broadcast cameras"
              title="Dual Optics Stage Design & Camera Lens Optimization"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Dual Optics Precision
              </b>
              <p className="text-xs sm:text-[13.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Balancing physical room sightlines with broadcast camera framing, sensor refresh rates, and lighting ratios for flawless live and recorded media.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Dual Optics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white border border-[#C9D3DC] rounded-md p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(10,15,22,0.1)] border-t-4 ${
                idx === 1 ? "border-t-[#0A0F16]" : "border-t-[#2CBCED]"
              }`}
            >
              <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
                {item.title}
              </h3>
              <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
