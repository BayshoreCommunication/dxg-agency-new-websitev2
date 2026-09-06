"use client";

import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import { Search, MapPin, ScrollText, UserCheck } from "lucide-react";

const related = [
  {
    title: "AV proposal review",
    desc: "A second opinion on an existing AV proposal before a contract is signed. We review scope, labor, pricing, technical coverage and potential gaps.",
    icon: Search,
  },
  {
    title: "Technical site visits",
    desc: "An in-person venue review covering power, rigging, room layouts, sightlines, loading access and equipment placement.",
    icon: MapPin,
  },
  {
    title: "Run of show development",
    desc: "A detailed show document covering speaker cues, content playback, transitions, timing and production responsibilities across general sessions and breakouts.",
    icon: ScrollText,
  },
  {
    title: "On site production management",
    desc: "A dedicated producer managing the production schedule, crews, vendors, rooms and live show decisions during the event.",
    icon: UserCheck,
  },
];

export default function RelatedServicesSection() {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-24 border-t border-white/10" aria-labelledby="related-heading">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <TypingTitle
            as="h2"
            id="related-heading"
            className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Related Production <span className="text-primary">Services</span>
          </TypingTitle>
          <Reveal
            as="p"
            className="mt-4 text-base leading-7 text-white/75 sm:text-lg"
          >
            Some events need full production management. Others need focused event production services for a specific production area. DXG can scope individual services alongside a larger engagement.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#071826]/80 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-[#071826] hover:shadow-[0_0_25px_rgba(46,198,245,0.12)]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-black">
                    <Icon size={24} />
                  </div>
                  <TypingTitle
                    as="h3"
                    className="mt-5 text-lg font-bold text-white transition-colors duration-300 group-hover:text-primary"
                  >
                    {item.title}
                  </TypingTitle>
                  <Reveal
                    as="p"
                    className="mt-3 text-xs leading-6 text-white/70"
                    delay={idx * 0.05}
                  >
                    {item.desc}
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
