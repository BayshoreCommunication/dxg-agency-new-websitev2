import Image from "next/image";
import React from "react";

export default function EngagementProgramSection() {
  const verticals = [
    {
      title: "Corporate Events",
      image: "/images/seo-services/corporate-event.webp",
      alt: "DXG attendee engagement technology for corporate events with live polling and audience interaction",
      imageTitle: "Corporate Event Attendee Engagement Technology",
    },
    {
      title: "Association Meetings",
      image: "/images/seo-services/association-event.webp",
      alt: "DXG attendee engagement systems for association conferences with Q&A and mobile app participation",
      imageTitle: "Association Meeting Engagement Technology",
    },
    {
      title: "Medical Programs",
      image: "/images/seo-services/medical-meeting.webp",
      alt: "DXG interactive technology for medical symposiums and clinical sessions",
      imageTitle: "Medical Program Engagement Technology",
    },
    {
      title: "Fundraising Events",
      image: "/images/seo-services/fundraiser-event.webp",
      alt: "DXG audience interaction and live pledge technology for charity galas and fundraisers",
      imageTitle: "Nonprofit Gala Engagement Technology",
    },
    {
      title: "Education Events",
      image: "/images/seo-services/education-program.webp",
      alt: "DXG interactive education technology for symposiums, seminars, and training sessions",
      imageTitle: "Education Event Engagement Technology",
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
