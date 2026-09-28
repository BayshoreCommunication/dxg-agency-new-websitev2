import React from "react";

export default function LongTailMarketingV2Section() {
  const channels = [
    {
      title: "Immediate Communications",
      desc: "Use fresh photography, keynote footage, testimonials and recap content. This is for attendee follow up, recap pages, internal communications and social posts.",
    },
    {
      title: "Ongoing Marketing",
      desc: "Reuse speaker clips, executive interviews, customer stories, photography. Highlight footage across email campaigns, landing pages, social channels, presentations and future event promotion.",
    },
    {
      title: "Education and On Demand Content",
      desc: "Recorded sessions support training, educational resources, speaker libraries, customer education and on demand viewing.",
    },
    {
      title: "Sponsor and Partner Assets",
      desc: "Planned coverage creates sponsor photography, activation footage, partner interviews, branded visuals and recap material for post event reporting.",
    },
    {
      title: "Future Event Promotion",
      desc: "Strong event footage shows audience energy, speakers, networking, venue design, production scale and branded experiences. Marketing teams can use those assets for promoting next program.",
    },
    {
      title: "One Event, Multiple Content Outputs",
      desc: "A single conference can produce a short event recap video, full keynote recordings, speaker clips and executive interviews. Also attendee testimonials, conference photography, sponsor assets and social media content.",
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Turn One Event Into Content for Months of Marketing
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            The value of event content continues after attendees leave.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#C9D3DC] rounded-md p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(10,15,22,0.1)] border-t-4 border-t-[#2CBCED]"
            >
              <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
                {item.title}
              </h3>
              <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
