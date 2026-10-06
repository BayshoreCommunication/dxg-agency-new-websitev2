import Image from "next/image";
import React from "react";

export default function HybridFormatsSection() {
  const formats = [
    {
      title: "Corporate Events",
      image: "/images/seo-services/corporate-event.webp",
      alt: "DXG hybrid and virtual corporate event broadcast with executive keynote stage and multi-camera feeds",
      imageTitle: "Hybrid Corporate Event Production",
    },
    {
      title: "Association Conferences",
      image: "/images/seo-services/association-event.webp",
      alt: "DXG hybrid association conference production with live panel discussions and virtual attendee streaming",
      imageTitle: "Hybrid Association Conference Production",
    },
    {
      title: "Medical Events",
      image: "/images/seo-services/medical-meeting.webp",
      alt: "DXG medical event livestream production with clinical slide transmission and symposium stage",
      imageTitle: "Hybrid Medical Event Production",
    },
    {
      title: "Nonprofit Events",
      image: "/images/seo-services/fundraiser-event.webp",
      alt: "DXG nonprofit livestream and virtual gala broadcast production",
      imageTitle: "Hybrid Nonprofit Event Production",
    },
    {
      title: "Education Events",
      image: "/images/seo-services/education-program.webp",
      alt: "DXG hybrid education symposium and virtual workshop production",
      imageTitle: "Hybrid Education Program Production",
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
              className={`group bg-white border border-[#D5DFE7] hover:border-[#2CBCED] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(44,188,237,0.18)] cursor-default ${
                i === 4 ? "col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0A0F16]">
                <Image
                  src={v.image}
                  alt={v.alt}
                  title={v.imageTitle}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-center text-center grow">
                <h3 className="text-[16px] sm:text-[17px] font-semibold font-['Josefin_Sans',sans-serif] text-[#0A0F16] group-hover:text-[#2CBCED] transition-colors duration-200 leading-snug">
                  {v.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
