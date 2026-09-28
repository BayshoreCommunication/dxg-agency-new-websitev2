import React from "react";

export default function PlanningProductionAlignmentV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-[820px] bg-white border border-[#C9D3DC] rounded-lg p-8 sm:p-12 shadow-[0_15px_35px_rgba(10,15,22,0.06)] relative overflow-hidden border-l-4 border-l-[#2CBCED]">
          <h2 className="relative pt-[18px] text-[clamp(28px,3.4vw,40px)] font-semibold leading-[1.1] tracking-tight mb-5 font-['Josefin_Sans',sans-serif] text-[#0A0F16] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Coordination Between Planning and Production
          </h2>
          <p className="text-base sm:text-lg text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif] mb-4">
            Miscommunication between meeting planners and technical crews often creates delays and unexpected costs. Planners focus on guest movement and schedule pacing, while technicians focus on audio lines, video feeds and power distribution.
          </p>
          <p className="text-base sm:text-lg text-[#0A0F16] font-medium leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG bridges this gap easily. Because our background covers both meeting management and technical production, our team acts as a practical link between both sides. When a room requires a fast flip from a panel to workshops, we understand what that requires from catering, lighting and sound crews, coordinating all moving parts ahead of time.
          </p>
        </div>
      </div>
    </section>
  );
}
