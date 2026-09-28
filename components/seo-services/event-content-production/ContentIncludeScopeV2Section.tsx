import React from "react";

export default function ContentIncludeScopeV2Section() {
  const categories = [
    {
      phaseTitle: "Main Stage & Show Flow Content",
      items: [
        {
          title: "Opening and Closing Videos",
          desc: "Set the tone before the first speaker and close the program with a strong final visual.",
        },
        {
          title: "Walk In and Walk Out Looks",
          desc: "Give attendees a consistent visual experience during room entry, exits, breaks and transitions.",
        },
        {
          title: "Motion Graphics Packages",
          desc: "Build animated titles, transitions, lower thirds, segment graphics and branded visual systems for live events.",
        },
        {
          title: "Digital Scenic Content",
          desc: "Create screen content designed to work with stage design, lighting, LED walls and scenic elements.",
        },
      ],
    },
    {
      phaseTitle: "Speaker & Presentation Media",
      items: [
        {
          title: "Presentation Design",
          desc: "Turn speaker presentations into clear, polished show content with consistent branding, readable layouts and media integration.",
        },
        {
          title: "Speaker Support Content",
          desc: "Prepare supporting visuals, speaker videos, session graphics and presentation elements for presenters and production teams.",
        },
        {
          title: "Session and Segment Graphics",
          desc: "Create visuals for keynotes, panels, breakout sessions, interviews, fireside chats and other program segments.",
        },
        {
          title: "Countdowns and Transitions",
          desc: "Use timed graphics to mark session starts, breaks, speaker changes, room transitions and other live cues.",
        },
      ],
    },
    {
      phaseTitle: "Recognition & Technical Playback",
      items: [
        {
          title: "Awards and Recognition Media",
          desc: "Create awards show content for names, titles, categories, honorees and recognition moments with accurate timing.",
        },
        {
          title: "Sponsor Recognition Content",
          desc: "Give sponsors dedicated screen moments through logos, branded animations, slides, video and scheduled recognition cues.",
        },
        {
          title: "Video Editing and Playback Preparation",
          desc: "Edit supplied footage, trim files, prepare versions and organize content for reliable playback.",
        },
        {
          title: "LED and Projection Formatting",
          desc: "Prepare content for the actual display environment, including large LED surfaces, projection systems and event screen formats.",
        },
      ],
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            What Event Content Production Can Include
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG provides comprehensive event content production capabilities tailored to your program, screen format, and live schedule.
          </p>
        </div>

        {/* Phased Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#C9D3DC] border border-[#C9D3DC]">
          {categories.map((phase, pIdx) => (
            <React.Fragment key={pIdx}>
              {/* Category Banner */}
              <div className="group bg-[#0A0F16] text-white col-span-1 sm:col-span-2 lg:col-span-4 px-5.5 py-3.5 font-['Josefin_Sans',sans-serif] text-sm font-semibold flex items-center gap-3.5 after:content-[''] after:flex-1 after:h-[1px] after:bg-white/15 transition-colors duration-200">
                <span className="group-hover:text-[#2CBCED] transition-colors duration-200">
                  {phase.phaseTitle}
                </span>
              </div>

              {/* Items */}
              {phase.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="group relative bg-[#F3F6F8] hover:bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:z-20 hover:shadow-[0_15px_30px_rgba(10,15,22,0.12)] border-l-4 border-l-transparent hover:border-l-[#2CBCED]"
                >
                  <b className="font-['Josefin_Sans',sans-serif] text-[17px] font-semibold block mb-1.5 text-[#0A0F16] group-hover:text-[#1A7FA3] transition-colors duration-200">
                    {item.title}
                  </b>
                  <p className="text-sm text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif] group-hover:text-[#0A0F16] transition-colors duration-200">
                    {item.desc}
                  </p>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
