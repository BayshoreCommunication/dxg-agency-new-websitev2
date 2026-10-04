import React from "react";

export default function HybridScopeSection() {
  const pillars = [
    {
      title: "Set the remote audience experience",
      desc: "Decide how remote attendees will enter sessions, view speakers, access presentations, ask questions, join polls and move between sessions. These choices guide the virtual platform and streaming setup.",
    },
    {
      title: "Build the presenter workflow",
      desc: "Each presenter needs a clear path into the show. In-room speakers, remote speakers, panelists, moderators and executives can follow defined preparation, content, rehearsal and cueing steps.",
    },
    {
      title: "Match production to the program",
      desc: "A keynote, executive broadcast, panel, breakout session and multi location program each need a different production approach. DXG plans camera coverage, graphics, feeds, staffing and show cues around the actual agenda.",
    },
    {
      title: "Prepare for live delivery",
      desc: "Hybrid production depends on many connected elements. DXG plans redundant streaming workflows, remote technical support, content checks, presenter support and production communication before the live event begins.",
    },
  ];

  const services = [
    "Hybrid conference production",
    "Virtual conference production",
    "Live streaming for executive and multi location events",
    "Multi camera live production",
    "Professional live streaming",
    "Remote presenter integration",
    "Virtual speaker management",
    "Broadcast graphics",
    "Presentation integration",
    "Virtual event platforms",
    "Streaming platform management",
    "Remote contribution feeds",
    "Audience Q&A and polling",
    "Breakout streaming",
    "Session recording",
    "Redundant streaming workflows",
    "Remote technical support",
    "Post event on-demand content",
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Plan The Hybrid Experience Before Show Day
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            The strongest hybrid programs start with audience and production decisions before the first livestream begins. DXG helps define the experience for each audience, then builds the technical workflow around the event.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#C9D3DC] p-7 sm:p-8 rounded-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:border-[#2CBCED]"
            >
              <h3 className="text-xl font-semibold mb-2.5 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
                {item.title}
              </h3>
              <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Services List Section */}
        <div className="bg-[#0A0F16] text-white p-8 sm:p-12 rounded-lg relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-white">
            What Hybrid and Virtual Event Production Services We Offer
          </h2>
          <p className="text-[#C9D3DC] text-base mb-8 font-['IBM_Plex_Sans',sans-serif]">
            DXG can build a production scope around your event instead of a fixed package.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 bg-[#111A24] border border-[#1E2A36] p-3.5 rounded text-sm text-[#C9D3DC] font-['IBM_Plex_Sans',sans-serif]"
              >
                <span className="w-2 h-2 rounded-full bg-[#2CBCED]" />
                <span>{srv}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
