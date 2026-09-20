import React from "react";

export default function AVCapabilitiesSection() {
  const capabilities = [
    {
      title: "Audio",
      desc: "Bad sound ruins great presentations. Attendees will forgive a slightly dim screen, but if they cannot hear the speaker, they will disengage immediately. We deploy professional sound systems tailored precisely to the acoustics of your specific room. Our inventory includes reliable wireless microphones, precise digital audio consoles, and clear distributed audio systems for challenging spaces. We manage press feeds for media events and flawless audio playback for video segments. Most importantly, our audio engineers actively mix the sound during your event. They monitor frequencies to prevent feedback and adjust levels dynamically so a soft spoken presenter sounds just as clear in the back row as they do in the front.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-4 group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      ),
    },
    {
      title: "Video",
      desc: "Visuals hold the room together and drive your narrative forward. We support your content with brilliant LED video walls, powerful projection, and smooth presentation switching. Our video teams manage complex playback systems and confidence monitors to keep presenters comfortable on stage. When you transition from a presentation deck to a high definition brand video, the switch happens instantly. We also handle custom graphics to ensure your corporate audiovisual production looks polished from start to finish. Our technicians test every file format well before the doors ever open.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-4 group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: "Lighting",
      desc: "Proper lighting directs attention and sets the tone of the entire space. It transforms a standard hotel ballroom into an immersive branded environment. Our lighting designers provide stage lighting that makes presenters look their best both in person and on camera. We incorporate scenic lighting to highlight stage elements, deploy intelligent lighting fixtures for dynamic room entrances, and create distinct room ambiance using advanced lighting control systems. We match your corporate brand colors perfectly, washing the walls and stage in shades that reinforce your identity.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-4 group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      title: "Cameras and IMAG",
      desc: "When you have a large audience, every attendee deserves a clear view of the stage. We offer multicamera production complete with experienced camera operators, fluid video switching, and high quality broadcast recording. Our live image magnification brings the subtle facial expressions and energy of your presenters directly to the large screens. This approach makes massive convention centers feel intimate and engaging. A skilled camera director knows exactly when to show a wide shot of the stage and when to cut to a tight close up of the keynote speaker making a crucial point.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-4 group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
    },
    {
      title: "Staging and Scenic",
      desc: "The physical environment matters just as much as the digital screens and speakers. We design and build secure stages, elegant soft goods, and custom scenic environments. From modern lecterns to overhead truss structures, we integrate all production elements into a cohesive stage design that looks incredible from every angle. A well designed stage grounds the event. It gives your presenters a comfortable space to move and provides a structured frame for the lighting and video elements. We handle the heavy lifting, ensuring all structures meet strict safety requirements while looking visually striking.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-4 group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M3 21h18M4 17h16M6 13h12M8 9h8" />
        </svg>
      ),
    },
    {
      title: "Breakout Rooms",
      desc: "Conferences succeed or fail in the smaller sessions. While the main stage creates inspiration, the breakout rooms deliver detailed education. We deliver standardized or fully customized conference audiovisual services across complex multiroom event programs. Our approach guarantees coordinated technical staffing and dedicated support for every single room. Your breakout speakers receive the exact same level of care and preparation as your main stage keynotes. We assign floating technicians to monitor hallways and check in on rooms constantly. If a presenter needs help connecting their laptop or adjusting a lapel mic, a DXG technician is already there. Consistent quality across 20 breakout rooms is just as important as a flawless keynote.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-4 group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Audiovisual Production Capabilities
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG provides and manages every technical element your program needs. Our services cover the complete spectrum of live event production.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <div
              key={i}
              className="group bg-white border border-[#C9D3DC] p-7 sm:p-8 rounded-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:border-[#2CBCED]"
            >
              {c.icon}
              <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-[#0A0F16] group-hover:text-[#1A7FA3] transition-colors duration-200">
                {c.title}
              </h3>
              <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
