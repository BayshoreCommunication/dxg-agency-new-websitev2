import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HybridFinalCTAV2Section() {
  return (
    <section className="relative overflow-hidden py-[clamp(64px,8vw,112px)] bg-[#0A0F16] text-[#FFFFFF] min-h-[420px]">
      {/* Background Photo 07 WebP Image */}
      <Image
        src="/images/seo-services/hybrid-and-virtual-event-production/ballroom-prep-hybrid-broadcast-loadin.webp"
        alt="Empty ballroom prepped with hybrid streaming control center, camera setups, and broadcast encoders before load-in."
        title="Ballroom Preparation for Hybrid Broadcast"
        fill
        className="object-cover object-center pointer-events-none"
      />

      {/* Navy gradient overlay for readability */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(10, 15, 22, 0.96) 0%, rgba(10, 15, 22, 0.88) 50%, rgba(10, 15, 22, 0.65) 100%)",
        }}
      />

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-4 font-['Josefin_Sans',sans-serif] text-white">
              Give Both Audiences a Production Experience Built For Them
            </h2>
            <p className="text-[#C9D3DC] max-w-[56ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif] text-base sm:text-lg mb-6">
              Your event has one agenda, even when the audience joins from multiple places. DXG brings live production, streaming, remote presenters, broadcast graphics, virtual platforms and audience engagement into one coordinated production plan.
            </p>

            {/* Contact details */}
            <div className="text-[#5B6B7A] text-sm space-y-1 font-['IBM_Plex_Sans',sans-serif]">
              <p className="text-white font-semibold font-['Josefin_Sans',sans-serif]">Digital Xperience Group (DXG)</p>
              <p>12824 Dupont Circle, Tampa, FL 33626</p>
              <p>Phone: <a href="tel:+18552829394" className="text-[#2CBCED] hover:underline">855.282.9394</a> | Email: <a href="mailto:info@dxg.agency" className="text-[#2CBCED] hover:underline">info@dxg.agency</a></p>
            </div>
          </div>

          {/* Right Box */}
          <div className="lg:col-span-5">
            <div className="group bg-[#111A24] border border-[#1E2A36] p-7 sm:p-8 rounded-md transition-all duration-300 hover:-translate-y-2 hover:border-[#2CBCED] hover:shadow-[0_20px_50px_rgba(44,188,237,0.2)]">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2.5 font-['Josefin_Sans',sans-serif] text-white group-hover:text-[#2CBCED] transition-colors duration-200">
                Schedule a Strategy Call
              </h3>
              <p className="text-[#C9D3DC] text-sm sm:text-base mb-5 font-['IBM_Plex_Sans',sans-serif]">
                Schedule a Strategy Call to discuss your event and production requirements.
              </p>
              <Link
                href="https://www.dxg.agency/contact-us"
                className="inline-flex items-center gap-2.5 bg-[#2CBCED] hover:bg-[#4CC9F0] text-[#0A0F16] font-semibold text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(44,188,237,0.4)] font-['Josefin_Sans',sans-serif]"
              >
                Schedule a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
