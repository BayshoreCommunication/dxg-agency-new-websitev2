"use client";

import React from "react";
import VerticalShowcase from "components/seo-services/shared/VerticalShowcase";

export default function FormatDesignV2Section() {
  const formats = [
    {
      title: "Corporate Events",
      image: "/images/seo-services/corporate-event.webp",
      alt: "DXG corporate event stage and spatial design with immersive LED walls and lighting",
      imageTitle: "Corporate Event Spatial & Experience Design",
    },
    {
      title: "Association Conferences",
      image: "/images/seo-services/association-event.webp",
      alt: "DXG association conference experience design with custom stage sets and panel seating",
      imageTitle: "Association Conference Stage Design",
    },
    {
      title: "Medical Symposiums",
      image: "/images/seo-services/medical-meeting.webp",
      alt: "DXG medical symposium experience design with clinical display sightlines and stage layout",
      imageTitle: "Medical Symposium Stage Design",
    },
    {
      title: "Fundraising Events",
      image: "/images/seo-services/fundraiser-event.webp",
      alt: "DXG nonprofit gala and fundraising appeal stage and spatial experience design",
      imageTitle: "Nonprofit Gala Stage Design",
    },
    {
      title: "Higher Education",
      image: "/images/seo-services/education-program.webp",
      alt: "DXG higher education symposium and academic event experience design",
      imageTitle: "Higher Education Event Design",
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Formats We Design For
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Every industry and audience demands a distinct approach to spatial design. A corporate sales kickoff requires high energy visuals and dramatic reveals, while a medical symposium calls for clean sightlines, CME-compliant content delivery, and functional presenter support.
          </p>
        </div>

        {/* Interactive Feature Showcase matching the design in the user image */}
        <VerticalShowcase items={formats} />
      </div>
    </section>
  );
}
