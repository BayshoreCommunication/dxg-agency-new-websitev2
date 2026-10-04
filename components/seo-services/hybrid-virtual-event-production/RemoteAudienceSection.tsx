import Image from "next/image";
import React from "react";

export default function RemoteAudienceSection() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-center">
          {/* Head */}
          <div>
            <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
              Make Remote Audience Feel Part Of The Event
            </h2>
            <p className="text-[clamp(17px,1.4vw,19px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              A camera in the back of a ballroom gives remote attendees a view of the room. Professional hybrid production gives them an actual event experience. The room audience sees the stage, presenters, screens and live activity. Remote attendees need a clean camera shot, strong audio, readable presentations, speaker graphics, smooth transitions and reliable access through the selected virtual event platform.
            </p>
          </div>

          {/* Photo 02 WebP Image Block */}
          <div className="group relative min-h-[340px] border border-[#1E2A36] text-white flex flex-col justify-end p-6 rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(10,15,22,0.25)]">
            <Image
              src="/images/seo-services/hybrid-and-virtual-event-production/remote-attendee-stream-view-broadcast.webp"
              alt="Side-by-side comparison of live keynote speaker on stage in the ballroom alongside a remote presenter connected via broadcast video stream with branded lower thirds."
              title="Remote Attendee Stream View & Lower Thirds"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Remote Attendee Stream View
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
