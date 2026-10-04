import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DXGDifferenceCTASection() {
  return (
    <section className="relative overflow-hidden py-[clamp(64px,8vw,112px)] bg-[#0A0F16] text-white min-h-[420px]">
      {/* Background Photo 07 WebP Image */}
      <Image
        src="/images/seo-services/audiovisual-production-for-events/empty-ballroom-stage-prep-loadin.webp"
        alt="Empty ballroom prepped with staging, trussing, lighting rigs, and equipment cases lined up before load-in."
        title="Empty Ballroom Preparation for AV Production"
        fill
        className="object-cover object-center pointer-events-none"
      />

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#0A0F16]/85 via-[#0A0F16]/75 to-[#0A0F16]/90"
      />

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 relative z-[2]">
        <div className="w-full max-w-[820px] mx-auto">
          <div className="group bg-[#111A24]/90 backdrop-blur-md border border-[#1E2A36] p-8 sm:p-12 md:p-14 rounded-xl text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_20px_60px_rgba(44,188,237,0.25)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3.5 font-['Josefin_Sans',sans-serif] text-white group-hover:text-[#2CBCED] transition-colors duration-200">
              Schedule a Strategy Call
            </h2>
            <p className="text-[#C9D3DC] text-base sm:text-lg max-w-[620px] mb-8 font-['IBM_Plex_Sans',sans-serif] leading-relaxed">
              Reach out to schedule a 30 minute working session to review your event design and audiovisual needs. Not a high pressure sales call, just a practical conversation about your event.
            </p>
            <Link
              href="https://www.dxg.agency/contact-us"
              className="inline-flex items-center justify-center gap-2.5 bg-[#2CBCED] hover:bg-[#4CC9F0] text-[#0A0F16] font-semibold text-base sm:text-lg px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(44,188,237,0.5)] font-['Josefin_Sans',sans-serif]"
            >
              Schedule a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
