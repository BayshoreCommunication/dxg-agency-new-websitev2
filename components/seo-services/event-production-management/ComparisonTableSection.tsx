"use client";

import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import { CheckCircle2 } from "lucide-react";

const tableRows = [
  {
    area: "Production budget",
    avVendor: "AV equipment and labor",
    dxgManagement: "Event wide production scope",
  },
  {
    area: "Vendor coordination",
    avVendor: "Primary AV vendors",
    dxgManagement: "AV, staging, venue, labor and related teams",
  },
  {
    area: "Master schedule",
    avVendor: "Technical schedule",
    dxgManagement: "Full production schedule",
  },
  {
    area: "Room planning",
    avVendor: "AV requirements",
    dxgManagement: "Technical and operational requirements",
  },
  {
    area: "Show flow",
    avVendor: "Technical cues",
    dxgManagement: "Full run of show and timing",
  },
  {
    area: "Rehearsals",
    avVendor: "AV testing",
    dxgManagement: "Speakers, content, cues, rooms and technical teams",
  },
  {
    area: "Show day leadership",
    avVendor: "Technical crew",
    dxgManagement: "Dedicated production producer",
  },
  {
    area: "Production recommendations",
    avVendor: "Equipment based",
    dxgManagement: "Event requirements and budget",
  },
];

export default function ComparisonTableSection() {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-24 border-t border-white/10" aria-labelledby="comparison-heading">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <TypingTitle
            as="h2"
            id="comparison-heading"
            className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            What production management <span className="text-primary">adds to your event</span>
          </TypingTitle>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-[#071826]/70 shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-white/10 bg-[#0d2235]">
                <th className="py-5 px-6 text-sm font-bold text-white uppercase tracking-wider w-1/3">
                  Production Area
                </th>
                <th className="py-5 px-6 text-sm font-bold text-white/60 uppercase tracking-wider w-1/3">
                  AV Vendor
                </th>
                <th className="py-5 px-6 text-sm font-bold text-primary uppercase tracking-wider w-1/3 bg-primary/10 border-l border-primary/30">
                  DXG Production Management
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {tableRows.map((row, idx) => (
                <tr
                  key={row.area}
                  className="transition-colors hover:bg-white/[0.03]"
                >
                  <td className="py-4 px-6 text-sm font-semibold text-white">
                    {row.area}
                  </td>
                  <td className="py-4 px-6 text-sm text-white/60">
                    {row.avVendor}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-white bg-primary/[0.06] border-l border-primary/20">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span>{row.dxgManagement}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
