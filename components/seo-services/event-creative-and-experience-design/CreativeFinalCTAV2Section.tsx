import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CreativeFinalCTAV2Section() {
  return (
    <section className="relative overflow-hidden py-[clamp(64px,8vw,112px)] bg-[#0A0F16] text-white">
      {/* Background WebP Image with SEO Metadata */}
      <Image
        src="/images/seo-services/event-creative-and-experience-design/empty-ballroom-before-load-in.webp"
        alt="Ballroom stage environment ready for creative spatial design build and LED setup"
        title="Event Creative & Spatial Design Pre-Production Setup"
        fill
        className="object-cover object-center pointer-events-none opacity-40"
      />

      {/* Dark Navy gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(10, 15, 22, 0.95) 0%, rgba(10, 15, 22, 0.8) 50%, rgba(10, 15, 22, 0.6) 100%)",
        }}
      />

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] text-white">
              Plan Your Event Space From Concept to Production
            </h2>
            <p className="text-[#C9D3DC] max-w-[56ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif] text-base sm:text-lg mb-4">
              Great things are envisioned, designed and crafted by groups that appreciate the interdependent nature of vision and technique in the language of the visual arts.
            </p>
            <p className="text-[#C9D3DC] max-w-[56ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif] text-base sm:text-lg mb-4">
              From reviving an annual conference to launching a brand new initiative or executive retreat, DXG offers the creative clarity and technical leadership to create an exceptional room.
            </p>
            <p className="text-[#C9D3DC] max-w-[56ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif] text-base sm:text-lg">
              Share with us about your event, our 3D visualization process, and witness how our integrated design team can make your vision come true.
            </p>
          </div>

          {/* Right Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#111A24] border border-[#1E2A36] p-7 sm:p-8 rounded-md">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2.5 font-['Josefin_Sans',sans-serif] text-white">
                Book a Working Session
              </h3>
              <p className="text-[#C9D3DC] text-sm sm:text-base mb-5 font-['IBM_Plex_Sans',sans-serif]">
                Book a working session with our creative and production teams. Share your initial venue plans, program goals, and preliminary ideas.
              </p>
              <Link
                href="https://www.dxg.agency/contact-us"
                className="inline-flex items-center gap-2.5 bg-[#2CBCED] hover:bg-[#4CC9F0] text-[#0A0F16] font-semibold text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 font-['Josefin_Sans',sans-serif]"
              >
                Book a Working Session
              </Link>
              <div className="mt-4 pt-3.5 border-t border-white/10 text-xs sm:text-sm text-[#C9D3DC] font-['IBM_Plex_Sans',sans-serif] space-y-1">
                <p>Call Direct: <a href="tel:+18552829394" className="text-[#2CBCED] font-semibold hover:underline">855.282.9394</a></p>
                <p>Email: <a href="mailto:info@dxg.agency" className="text-[#2CBCED] font-semibold hover:underline">info@dxg.agency</a> to start the conversation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
