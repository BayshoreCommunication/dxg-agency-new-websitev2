import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EngagementAppReviewSection() {
  return (
    <section id="tech-plan" className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16] scroll-mt-20">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white border border-[#C9D3DC] p-8 sm:p-12 rounded-lg">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
              Already Have an Event App Or Polling Platform?
            </h2>
            <p className="text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif] mb-4 text-base">
              Keep it. Then let DXG check how it fits the production.
            </p>
            <p className="text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif] mb-6 text-base">
              We review program fit, attendee adoption, speaker and moderator workflow, Wi-Fi and backup coverage and sponsor data reporting. A gap found in March costs less than a gap found at 8:55 a.m. on Day 2. Bring the platform, the contract or the draft agenda and we&apos;ll mark where technology meets production.
            </p>
            <Link
              href="https://www.dxg.agency/contact-us"
              className="inline-flex items-center gap-2.5 bg-[#2CBCED] hover:bg-[#4CC9F0] text-[#0A0F16] font-semibold text-base px-6 py-3.5 rounded transition-all duration-200 font-['Josefin_Sans',sans-serif]"
            >
              Review My Event Tech Plan
            </Link>
          </div>

          {/* Photo 06 WebP Image Card */}
          <div className="group relative min-h-[320px] border border-[#1E2A36] text-white flex flex-col justify-end p-6 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(10,15,22,0.25)]">
            <Image
              src="/images/seo-services/attendee-engagement-and-event-technology/event-tech-integration-audit.webp"
              alt="Planner reviewing event mobile app agenda sync, Wi-Fi bandwidth requirements, and live polling cue sheets alongside DXG producer."
              title="Event Tech Integration Audit"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16] via-[#0A0F16]/75 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Event Tech Integration Audit
              </b>
              <p className="text-xs sm:text-[13.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Planner reviewing event mobile app agenda sync, Wi-Fi bandwidth requirements, and live polling cue sheets alongside DXG producer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
