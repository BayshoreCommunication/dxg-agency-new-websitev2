import Image from "next/image";
import React from "react";

export default function AVApproachSection() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Grid layout with text on left, Photo 02 image block on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-center mb-11">
          {/* Head */}
          <div>
            <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-4 font-['Josefin_Sans',sans-serif] text-[#0A0F16] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
              Our Approach Starts with the Program
            </h2>
            <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              We look closely at your audience, the venue space, your agenda, the presenters, and your core content. We map out the desired attendee experience before deciding on the technology required to support it. This approach keeps attention on your message rather than unnecessary equipment.
            </p>
          </div>

          {/* Photo 02 WebP Image Block */}
          <div className="group relative min-h-[340px] border border-[#1E2A36] text-white flex flex-col justify-end p-6 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(10,15,22,0.25)]">
            <Image
              src="/images/seo-services/audiovisual-production-for-events/av-planning-and-technical-setup.webp"
              alt="Meeting planners and DXG AV director evaluating stage sightlines and screen positions inside an empty ballroom prior to equipment load-in."
              title="AV Planning and Technical Setup"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                AV Planning and Technical Setup
              </b>
              <p className="text-xs sm:text-[13.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Meeting planners and DXG AV director evaluating stage sightlines and screen positions inside an empty ballroom prior to equipment load-in.
              </p>
            </div>
          </div>
        </div>

        <div className="p-7 sm:p-8 bg-white border border-[#C9D3DC] rounded-lg shadow-sm mt-6">
          <p className="text-base sm:text-lg text-[#0A0F16] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Sometimes your agenda requires a direct and transparent executive board meeting setup with pristine sound and a single bright screen. Other times, it demands a massive general session production featuring wide LED video walls, multicamera shoots, live image magnification, theatrical lighting, complex audio arrays, and 20 breakout rooms operating simultaneously. The scale may change. The principle stays the same. The event dictates the technology. True event AV production means adjusting to the demands of your schedule and venue..
          </p>
        </div>
      </div>
    </section>
  );
}
