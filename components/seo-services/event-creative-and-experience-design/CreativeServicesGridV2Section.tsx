import React from "react";

export default function CreativeServicesGridV2Section() {
  const categories = [
    {
      phaseTitle: "Stage Architecture & Display Environments",
      items: [
        {
          title: "General Session Stage Design",
          desc: "The visual centerpiece of your event. We design multi dimensional stages that frame your speakers, support your screen media and match the scale of your audience size.",
        },
        {
          title: "Scenic Design and Custom Fabrication",
          desc: "Custom backdrops, hard set scenic walls, dimensional branding elements and architectural textures that turn empty ballroom walls into polished presentation spaces.",
        },
        {
          title: "LED Video Environments",
          desc: "Custom LED stage design utilizing high resolution LED tiles, curved displays, multi panel arrays and seamless video backdrops that display dynamic media, live camera feeds and custom motion graphics.",
        },
        {
          title: "Projection Design",
          desc: "Precision projection mapping and blended screen displays engineered around ambient room light, ceiling height restrictions and projector throw distances.",
        },
      ],
    },
    {
      phaseTitle: "Lighting, CAD & Spatial Branding",
      items: [
        {
          title: "Architectural and Stage Lighting Design",
          desc: "Layered lighting schemes that elevate speakers, highlight scenic textures, direct attendee focus and create smooth visual transitions between keynotes and video rolls.",
        },
        {
          title: "Stage Layouts and Floor Plans",
          desc: "CAD accurate floor plans that detail stage dimensions, seating layouts, camera platforms, front of house tech tables and emergency exit corridors in compliance with local fire codes.",
        },
        {
          title: "Branded Event Environments",
          desc: "Cohesive visual touchpoints that integrate your organization's brand identity across scenic elements, stage furniture, digital displays and environmental accents.",
        },
        {
          title: "Entrance and Registration Experiences",
          desc: "First impression environments designed to welcome attendees, reduce check in bottlenecks and establish an engaging tone the moment guests step off the foyer.",
        },
      ],
    },
    {
      phaseTitle: "Sponsor, Attendee & Presenter Touchpoints",
      items: [
        {
          title: "Sponsor Activation Environments",
          desc: "Dedicated structures, lounge spaces and interactive exhibit pods that give sponsors high visibility, premium placements to connect with attendees.",
        },
        {
          title: "Attendee Journey and Wayfinding",
          desc: "Clear physical design cues, branded directional structures and digital signage strategies that move foot traffic smoothly across complex convention venues.",
        },
        {
          title: "Speaker Environments",
          desc: "Comfortable, functional stage setups including custom lecterns, executive lounge seating, confidence monitor integration and clean cabling layouts.",
        },
        {
          title: "3D Event Renderings and Spatial Pre-Visualization",
          desc: "Fully scaled digital models of your room layout, stage build, lighting focus and visual media elements for complete pre event approval.",
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
            Explore Our Creative and Experience Design Services
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            We design physical spaces that support your agenda and engage your audience at every point in the venue. Our capabilities cover every aspect of spatial and visual production:
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
