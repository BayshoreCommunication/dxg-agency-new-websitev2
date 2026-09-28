import React from "react";

export default function OperationsAndTechSupportV2Section() {
  const blocks = [
    {
      title: "Contingency Planning and Event Response",
      desc1: "Live events bring unexpected surprises. A main speaker might miss a flight or a local network drop could pause registration software. DXG adds a structured layer of contingency execution to your floor operations. We carry out preplanned adjustments rather than reacting with panic.",
      desc2: "If a presenter is delayed, our room managers coordinate with technicians to run holding slides or adjust the schedule cleanly. If an internet line drops, our check in staff moves to offline badge workflows without disrupting the entrance line. Experienced support on site resolves issues quickly without disrupting the guest experience.",
    },
    {
      title: "Onsite Event Technology Support",
      desc1: "Modern meetings depend heavily on event apps, digital polling and electronic lead retrieval. When an attendee cannot sign into the app or a sponsor struggles with a scanner, they look to event staff for immediate help.",
      desc2: "DXG supplies experienced technology support personnel for these technical questions. We walk guests through app downloads, handle password resets and test connections on personal devices. Isolating technical support from main registration lines keeps check in moving quickly while giving attendees complete assistance.",
    },
    {
      title: "Post Event Reconciliation and Reporting",
      desc1: "The work does not stop when the final session ends. The days right after an event are essential for closing out logistics, but planning teams are often exhausted. DXG stays involved through final reconciliation.",
      desc2: "We review hotel catering bills against actual consumption, organize session attendance logs for continuing education credits, collect lead retrieval hardware and verify survey deployment. Your team can review organized records quickly without searching through files.",
    },
    {
      title: "Flexible Staffing for Peak Event Periods",
      desc1: "Event workloads vary throughout the year, with busy periods requiring more staff than the rest of the calendar. A full time team sized for peak periods can increase annual staffing costs.",
      desc2: "DXG lets you expand your event team when workloads increase. You gain seasoned event professionals who understand hotel contracts, floor logistics and venue rules. Once the conference wraps, you are not left paying year round salaries. It is an efficient way to protect your budget while keeping event standards high.",
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blocks.map((b, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#C9D3DC] rounded-lg p-7 sm:p-9 shadow-sm border-t-4 border-t-[#2CBCED] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
                {b.title}
              </h3>
              <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif] mb-3">
                {b.desc1}
              </p>
              <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {b.desc2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
