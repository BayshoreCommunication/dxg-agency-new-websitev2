import React from "react";

export default function ProductionIntegratedCaptureV2Section() {
  const phases = [
    {
      phaseTitle: "Before the Event",
      items: [
        {
          title: "Agenda and priority review",
          desc: "Identify keynotes, panels, breakouts, interviews, sponsor activations, awards, receptions and priority people.",
        },
        {
          title: "Shot and coverage planning",
          desc: "Build photo and video priorities around final deliverables, speaker needs, room access and future content uses.",
        },
        {
          title: "Schedule coordination",
          desc: "Set interview windows, rehearsal access, room changes, crew movement and capture times around the live program.",
        },
        {
          title: "Team alignment",
          desc: "Coordinate with AV teams, production crews, venue staff and planners. Also speakers around access, timing, stage positions and available audio feeds.",
        },
      ],
    },
    {
      phaseTitle: "During the Event",
      items: [
        {
          title: "Follow the show flow",
          desc: "Coverage tracks the live agenda, speaker movement, room transitions, rehearsals and scheduled program moments.",
        },
        {
          title: "Coordinate across teams",
          desc: "The capture crew works with AV and production teams around stage positions, presentation timing, room access and technical conditions.",
        },
        {
          title: "Protect the audience experience",
          desc: "Camera positions, movement, interview setups and photography coverage fit the room environment and live audience.",
        },
      ],
    },
    {
      phaseTitle: "After the Event",
      items: [
        {
          title: "Organize for delivery",
          desc: "Footage and photography follow the agreed content priorities and deliverables.",
        },
        {
          title: "Move content into the next stage",
          desc: "Recap videos, highlight clips, galleries, interview edits and planned assets move into post event production.",
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
            Photo and Video Coverage Built Into the Live Production Plan
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            We place photography and video inside the larger event production plan. The capture teams work from the same agenda, room schedule, speaker priorities and show flow used by the production team.
          </p>
        </div>

        {/* Phased Grid */}
        <div className="space-y-8">
          {phases.map((phase, pIdx) => (
            <div key={pIdx} className="bg-white border border-[#C9D3DC] rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 font-['Josefin_Sans',sans-serif] text-[#0A0F16] border-b border-[#C9D3DC] pb-3 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#2CBCED]" />
                <span>{phase.phaseTitle}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {phase.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-4 bg-[#F3F6F8] rounded border border-[#E9EEF2] hover:bg-white hover:border-[#2CBCED] transition-all duration-200"
                  >
                    <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold block mb-1.5 text-[#0A0F16]">
                      {item.title}
                    </b>
                    <p className="text-sm text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
