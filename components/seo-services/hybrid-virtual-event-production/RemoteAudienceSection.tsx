import Image from "next/image";
import React from "react";

export default function RemoteAudienceSection() {
  const cards = [
    {
      title: "The Room & the Stream Work Together",
      desc: "Our producers coordinate cameras, audio, presentations, graphics, remote feeds, session cues and streaming requirements. Every change on stage can move through the live broadcast workflow with clear timing and ownership.",
    },
    {
      title: "Remote Presenters Join the Same Live Show",
      desc: "Remote speakers can join from offices, homes, studios or another event location. DXG prepares their technical connection, checks audio and video, coordinates their presentation materials and brings them into the show at the right moment.",
    },
    {
      title: "Remote Attendees Get Ways to Participate",
      desc: "Hybrid events can include audience Q&A, polling, chat and other participation tools supported by the selected virtual event platform. These features give remote attendees an active place in the program.",
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-center mb-11">
          {/* Head */}
          <div>
            <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
              Make Remote Audience Feel Part Of The Event
            </h2>
            <p className="text-[clamp(17px,1.4vw,19px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              A camera in the back of a ballroom gives remote attendees a view of the room. Professional hybrid production gives them an actual event experience. The room audience sees the stage, presenters, screens and live activity. Remote attendees need a clean camera shot, strong audio, readable presentations, speaker graphics, smooth transitions and reliable access through the selected virtual event platform.
            </p>
            <p className="mt-3 text-[15px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              DXG coordinates both experiences through one production plan. The production team can also account for timing differences between speakers, remote feeds, presentation playback, audience questions and session transitions.
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16] via-[#0A0F16]/75 to-transparent z-[1]" />
            <div className="relative z-10">
              <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                Remote Attendee Stream View
              </b>
              <p className="text-xs sm:text-[13.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                Side-by-side comparison: live keynote speaker on stage in the ballroom alongside a remote presenter connected via broadcast video stream with branded lower thirds.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-2">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`group border rounded-md p-7 sm:p-8 transition-all duration-300 hover:-translate-y-2 ${
                idx === 1
                  ? "bg-[#0A0F16] text-white border-[#1E2A36] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-[#2CBCED]"
                  : "bg-white text-[#0A0F16] border-[#C9D3DC] border-t-4 border-t-[#2CBCED] hover:shadow-[0_20px_40px_rgba(44,188,237,0.15)]"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] ${
                  idx === 1 ? "text-white group-hover:text-[#2CBCED]" : "text-[#0A0F16] group-hover:text-[#1A7FA3]"
                } transition-colors duration-200`}
              >
                {card.title}
              </h3>
              <p
                className={`text-[14.5px] leading-relaxed font-['IBM_Plex_Sans',sans-serif] ${
                  idx === 1 ? "text-[#C9D3DC]" : "text-[#5B6B7A]"
                }`}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
