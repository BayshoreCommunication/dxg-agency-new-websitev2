import Image from "next/image";
import React from "react";

export default function RegistrationAttendeeV2Section() {
  const services = [
    "Advance registration preparation",
    "Desk layout and operational setup",
    "Badge printing and material distribution",
    "Self service kiosk management",
    "Onsite registration staffing",
    "Attendee issue resolution",
    "VIP and speaker check in",
    "Crowd management and line control",
    "Registration software support",
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-center mb-11">
          {/* Head */}
          <div>
            <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
              Registration & Attendee Management
            </h2>
            <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Registration gives attendees their initial impression of your conference. Long lines or lost badges set a poor tone that is hard to correct later. DXG supports both the advanced setup and live operation of check in. We help planning teams build an organized, clear and efficient registration process.
            </p>
          </div>

          {/* Photo Block */}
          <div className="group relative min-h-[300px] border border-[#1E2A36] text-white flex flex-col justify-end p-6 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(10,15,22,0.25)]">
            <Image
              src="/images/seo-services/meeting-planning-support/av-proposal-audit-review.webp"
              alt="DXG registration staff managing high volume attendee check in and badge printing"
              title="Conference Registration & Entrance Management"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Smooth Entrance Execution
              </b>
              <p className="text-xs sm:text-[13.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Managing entrance lines, self-service kiosks, print supplies, and badge record adjustments on the spot for a positive opening day experience.
              </p>
            </div>
          </div>
        </div>

        {/* Services List Box */}
        <div className="bg-white border border-[#C9D3DC] rounded-lg p-7 sm:p-9 shadow-sm mb-8">
          <h3 className="text-xl font-semibold mb-5 font-['Josefin_Sans',sans-serif] text-[#0A0F16] border-b border-[#C9D3DC] pb-3">
            Registration & Attendee Support Services Include:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-['IBM_Plex_Sans',sans-serif] text-[15px] text-[#5B6B7A]">
            {services.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-[#F3F6F8] rounded border border-[#E9EEF2]">
                <svg
                  className="w-5 h-5 stroke-[#2CBCED] fill-none stroke-2 shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="font-medium text-[#0A0F16]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Paragraph */}
        <p className="text-base sm:text-lg text-[#0A0F16] font-medium leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
          For larger events, DXG organizes the specific conference staffing, hardware and physical entrance plan required to move large crowds through check in smoothly. This devoted conference registration support keeps opening day positive. We manage lines, maintain print supplies and correct attendee records on the spot so guests feel welcomed right away.
        </p>
      </div>
    </section>
  );
}
