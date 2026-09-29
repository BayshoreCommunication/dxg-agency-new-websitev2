import Image from "next/image";
import React from "react";

export default function AVStandardsSection() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-11">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Built to Higher Operational Standards
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Corporate and conference audiovisual production requires absolute reliability, transparent contract management, and rigorous rehearsals.
          </p>
        </div>

        {/* 3 WebP Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* Photo 03 */}
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image
              src="/images/seo-services/audiovisual-production-for-events/system-redundancy-backup-audio-laptop.webp"
              alt="Backup audio switcher and secondary presentation laptop running in sync behind FOH table for full system redundancy."
              title="System Redundancy & Audio Switcher"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                System Redundancy
              </b>
              <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Backup audio switcher and secondary presentation laptop running in sync behind FOH table.
              </p>
            </div>
          </div>

          {/* Photo 04 */}
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image
              src="/images/seo-services/audiovisual-production-for-events/venue-contract-audit-power-rigging.webp"
              alt="Technical line-item review of venue power and rigging specs before signing contract to avoid hidden fees."
              title="Venue Contract Audit & Technical Specs"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Venue Contract Audit
              </b>
              <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Technical line-item review of venue power and rigging specs before signing contract.
              </p>
            </div>
          </div>

          {/* Photo 05 */}
          <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
            <Image
              src="/images/seo-services/audiovisual-production-for-events/technical-rehearsal-stage-confidence-monitor.webp"
              alt="Presenter practicing on stage under show lighting with confidence monitors active during pre-event technical rehearsals."
              title="Technical Rehearsals on Stage"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Technical Rehearsals
              </b>
              <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Presenter practicing on stage under show lighting with confidence monitors active.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
