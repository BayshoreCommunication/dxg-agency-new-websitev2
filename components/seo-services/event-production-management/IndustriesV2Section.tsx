import Image from "next/image";
import React from "react";

export default function IndustriesV2Section() {
  const verticals = [
    {
      title: "Corporate Events",
      image: "/images/seo-services/corporate-event.webp",
      alt: "DXG corporate event production management with keynote stage presentation and LED video backdrop",
      imageTitle: "DXG Corporate Event Production & Keynote Staging",
    },
    {
      title: "Association Conferences",
      image: "/images/seo-services/association-event.webp",
      alt: "DXG association conference production with panel stage seating, lighting, and engaged attendee audience",
      imageTitle: "DXG Association Conference Staging & Panel Production",
    },
    {
      title: "Medical Meetings",
      image: "/images/seo-services/medical-meeting.webp",
      alt: "DXG medical meeting production with anatomy presentation visuals and auditorium seating",
      imageTitle: "DXG Medical Meeting & Clinical Symposium Production",
    },
    {
      title: "Fundraising Events",
      image: "/images/seo-services/fundraiser-event.webp",
      alt: "DXG fundraising gala and charity appeal event production with live auction staging and guest paddle raise",
      imageTitle: "DXG Fundraising Gala & Charity Event Production",
    },
    {
      title: "Education Programs",
      image: "/images/seo-services/education-program.webp",
      alt: "DXG education program interactive workshop and classroom presentation production",
      imageTitle: "DXG Education Program & Interactive Symposium Production",
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Programs Designed Around What You Need
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG provides event production services customized to the specific format, audience expectations, and technical demands of your organization.
          </p>
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
