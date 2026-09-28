import Image from "next/image";
import React from "react";

export default function PreVisualizationV2Section() {
  const pointsOfView = [
    {
      title: "Executive View",
      desc: "Evaluate how presenters look against scenic backdrops and camera angles.",
    },
    {
      title: "Attendee Sightlines",
      desc: "Verify screen visibility from the back corners of the room or under balcony overhangs.",
    },
    {
      title: "Sponsor Placement",
      desc: "Confirm logo prominence, lighting angles and spatial balance across stage elements.",
    },
    {
      title: "Lighting Dynamics",
      desc: "Preview color palettes, lighting textures and fixture focus before equipment placement.",
    },
  ];

  return (
    <section
      id="3d-rendering"
      className="relative overflow-hidden py-[clamp(64px,8vw,112px)] bg-[#0A0F16] text-white scroll-mt-20"
    >
      {/* Background X Motif */}
      <svg
        className="absolute -right-[160px] -top-[120px] w-[620px] h-[620px] opacity-[0.07] pointer-events-none"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <line x1="8" y1="8" x2="92" y2="92" stroke="#2CBCED" strokeWidth="2" />
        <line x1="92" y1="8" x2="8" y2="92" stroke="#2CBCED" strokeWidth="2" />
        <line x1="18" y1="8" x2="50" y2="40" stroke="#2CBCED" strokeWidth="2" />
        <line x1="82" y1="8" x2="50" y2="40" stroke="#2CBCED" strokeWidth="2" />
        <line x1="18" y1="92" x2="50" y2="60" stroke="#2CBCED" strokeWidth="2" />
        <line x1="82" y1="92" x2="50" y2="60" stroke="#2CBCED" strokeWidth="2" />
      </svg>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(32px,5vw,72px)] items-start">
          {/* Left Column */}
          <div>
            <div className="max-w-[760px] mb-8">
              <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
                Preview the Event Before Production Begins
              </h2>
              <p className="text-[clamp(18px,1.5vw,21px)] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif] mb-4">
                One of the most valuable parts of the creative process is understanding what you are buying before arriving on site. Surprises belong on stage, not in the production budget.
              </p>
              <p className="text-base sm:text-lg text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                DXG uses detailed 3D event renderings and pre-visualization tools to help planners evaluate stage layouts, screen sizes, scenic concepts, branding applications and lighting treatments before equipment is ordered or the ballroom is built. Seeing an LED stage design or a complex scenic layout in an accurate digital model allows creative decisions to happen when they are still easy and affordable to change.
              </p>
            </div>

            {/* Photo Block */}
            <div className="group relative min-h-[260px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded-md overflow-hidden mb-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
              <Image
                src="/images/seo-services/event-creative-and-experience-design/technical-site-visit-ballroom.webp"
                alt="Detailed 3D event pre-visualization rendering showing ballroom LED stage layout and camera angles"
                title="3D Event Renderings & Spatial Pre-Visualization"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16]/80 via-[#0A0F16]/15 to-transparent z-[1]" />
              <div className="relative z-10">
                <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                  Accurate 3D Digital Modeling
                </b>
                <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                  Evaluating room geometry, stage builds, scenic walls, line of sight, and lighting textures before load-in.
                </p>
              </div>
            </div>

            <p className="text-sm text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Clear details give your planning team, executives and venue partners the information they need to make decisions quickly and confidently. Everyone involved sees the exact environment you are creating well before load in begins.
            </p>
          </div>

          {/* Right Column: 4 Points of View Grid */}
          <div>
            <div className="mb-6">
              <span className="text-[#2CBCED] font-['Josefin_Sans',sans-serif] font-semibold uppercase tracking-wider text-sm block mb-1">
                3D Visualization Perspective
              </span>
              <h3 className="text-2xl font-semibold text-white font-['Josefin_Sans',sans-serif]">
                Review Your Event Space From Multiple Points of View:
              </h3>
            </div>

            <ul className="space-y-[14px]">
              {pointsOfView.map((item, idx) => (
                <li
                  key={idx}
                  className="group grid grid-cols-[28px_1fr] gap-3.5 p-[18px_20px] bg-[#111A24] border border-[#1E2A36] rounded transition-all duration-300 hover:-translate-y-1 hover:border-[#2CBCED]/60 hover:bg-[#152230] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                >
                  <svg
                    className="w-[22px] h-[22px] stroke-[#2CBCED] fill-none stroke-2 stroke-linecap-round stroke-linejoin-round mt-0.5 group-hover:scale-110 transition-transform duration-200"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <div>
                    <b className="font-['Josefin_Sans',sans-serif] text-[18px] text-white block mb-0.5 font-semibold group-hover:text-[#2CBCED] transition-colors duration-200">
                      {item.title}
                    </b>
                    <span className="text-[14.5px] text-[#C9D3DC] font-['IBM_Plex_Sans',sans-serif]">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
