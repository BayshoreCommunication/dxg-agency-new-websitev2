"use client";

import React from "react";
import VerticalShowcase from "components/seo-services/shared/VerticalShowcase";

export default function ContentIndustriesV2Section() {
  const verticals = [
    {
      title: "Corporate Events",
      image: "/images/seo-services/corporate-event.webp",
      alt: "DXG corporate event content production with keynote presentations and screen motion graphics",
      imageTitle: "Corporate Event Content Production",
    },
    {
      title: "Association Events",
      image: "/images/seo-services/association-event.webp",
      alt: "DXG association conference content production with panel presentations and stage visuals",
      imageTitle: "Association Event Content Production",
    },
    {
      title: "Medical Events",
      image: "/images/seo-services/medical-meeting.webp",
      alt: "DXG medical event content production featuring clinical imaging and compliance data displays",
      imageTitle: "Medical Event Content Production",
    },
    {
      title: "Nonprofit Events",
      image: "/images/seo-services/fundraiser-event.webp",
      alt: "DXG nonprofit event content production featuring fundraising appeals, donor stories, and awards media",
      imageTitle: "Nonprofit Event Content Production",
    },
    {
      title: "Education Events",
      image: "/images/seo-services/education-program.webp",
      alt: "DXG education event content production for interactive workshops and symposiums",
      imageTitle: "Education Event Content Production",
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Built Around Your Event Rather Than Content Package
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Every event needs a different content mix. A corporate conference may need an opening film, executive presentations, walk in graphics and sponsor moments. An association meeting may need general session content, speaker support, awards media and several room specific graphics. Medical, nonprofit and education programs bring their own messaging, timing, branding and audience needs.
          </p>
        </div>

        {/* Interactive Feature Showcase matching the design in the user image */}
        <VerticalShowcase items={verticals} />
      </div>
    </section>
  );
}
