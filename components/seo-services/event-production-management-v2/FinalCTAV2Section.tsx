import Link from "next/link";
import React from "react";

export default function FinalCTAV2Section() {
  return (
    <section className="relative overflow-hidden py-[clamp(64px,8vw,112px)] bg-[#0A0F16] text-white">
      {/* Background Photo 07 Brief */}
      <div
        className="absolute inset-0 border-y border-dashed border-[rgba(44,188,237,0.4)] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(135deg, #0F1822 0 14px, #121C27 14px 28px)",
        }}
      >
        <span className="absolute bottom-3.5 right-4 font-['Josefin_Sans',sans-serif] font-bold text-xs text-[#0A0F16] bg-[#2CBCED] px-2.5 py-1 rounded-[2px] uppercase">
          PHOTO 07
        </span>
        <div className="absolute bottom-3.5 left-4 max-w-[52ch] text-[12.5px] text-[#5B6B7A] font-['IBM_Plex_Sans',sans-serif]">
          <b className="font-['Josefin_Sans',sans-serif] text-xs text-[#C9D3DC] block mb-0.5">
            Before load-in
          </b>
          Empty ballroom the night before, one work light on, cases lined up in
          the doorway. Wide, dark, cinematic. Sits under a navy gradient so text
          stays readable; detail should live on the right third of the frame.
        </div>
      </div>

      {/* Navy gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(10, 15, 22, 0.92), rgba(10, 15, 22, 0.6))",
        }}
      />

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] text-white">
              Build the Production Plan Before Show Day
            </h2>
            <p className="text-[#C9D3DC] max-w-[56ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif] text-base sm:text-lg">
              The right production structure gives meeting planners better control over decisions, spending, and execution. Tell us about your event and start the conversation with a production team focused on the full program.
            </p>
          </div>

          {/* Right Box */}
          <div className="lg:col-span-5">
            <div className="group bg-[#111A24] border border-[#1E2A36] p-7 sm:p-8 rounded-md transition-all duration-300 hover:-translate-y-2 hover:border-[#2CBCED] hover:shadow-[0_20px_50px_rgba(44,188,237,0.2)]">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2.5 font-['Josefin_Sans',sans-serif] text-white group-hover:text-[#2CBCED] transition-colors duration-200">
                Schedule a Strategy Call
              </h3>
              <p className="text-[#C9D3DC] text-sm sm:text-base mb-5 font-['IBM_Plex_Sans',sans-serif]">
                A 30 minute working session on your event. Not a sales call.
              </p>
              <Link
                href="https://www.dxg.agency/contact-us"
                className="inline-flex items-center gap-2.5 bg-[#2CBCED] hover:bg-[#4CC9F0] text-[#0A0F16] font-semibold text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(44,188,237,0.4)] font-['Josefin_Sans',sans-serif]"
              >
                Schedule a Strategy Call
              </Link>
              <small className="block mt-3.5 text-[#5B6B7A] text-[13.5px] font-['IBM_Plex_Sans',sans-serif]">
                Book the call with no pressure, no pitch deck, and just a conversation about your event.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
