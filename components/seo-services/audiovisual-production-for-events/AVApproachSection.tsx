import React from "react";

export default function AVApproachSection() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-[840px]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-6 font-['Josefin_Sans',sans-serif] text-[#0A0F16] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Our Approach Starts with the Program
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif] mb-6">
            We look closely at your audience, the venue space, your agenda, the presenters, and your core content. We map out the desired attendee experience before deciding on the technology required to support it. This approach keeps attention on your message rather than unnecessary equipment.
          </p>
          <div className="p-7 sm:p-8 bg-white border border-[#C9D3DC] rounded-lg shadow-sm">
            <p className="text-base sm:text-lg text-[#0A0F16] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Sometimes your agenda requires a direct and transparent executive board meeting setup with pristine sound and a single bright screen. Other times, it demands a massive general session production featuring wide LED video walls, multicamera shoots, live image magnification, theatrical lighting, complex audio arrays, and 20 breakout rooms operating simultaneously. The scale may change. The principle stays the same. The event dictates the technology. True event AV production means adjusting to the demands of your schedule and venue..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
