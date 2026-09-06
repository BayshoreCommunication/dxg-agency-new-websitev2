"use client";

import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import { ClipboardList, Calculator, Building2, Sliders, Presentation, PlaySquare, UserCheck } from "lucide-react";

const works = [
  {
    title: "Production planning",
    desc: "The first stage defines the production scope around the event goals, venue, audience, format, budget and schedule. We identify production requirements for rooms, equipment, labor, staging, technology, content, vendors and rehearsals. This creates the foundation for the rest of the production process.",
    icon: ClipboardList,
  },
  {
    title: "Budget and scope management",
    desc: "Production budgets can include audiovisual equipment, staging, lighting, video, labor, technology, transportation and specialty services. We  tie each cost to a defined production need. Scope changes receive a corresponding budget review so planners can make informed decisions as the program evolves.",
    icon: Calculator,
  },
  {
    title: "Vendor and venue coordination",
    desc: "Venue teams control details such as access windows, loading areas, room layouts, power, rigging and labor rules. Production vendors bring their own equipment, crew schedules and technical requirements. DXG connects both sides and keeps the relevant details aligned before setup begins.",
    icon: Building2,
  },
  {
    title: "Technical production management",
    desc: "Technical production covers the systems used to create the live environment. These can include audio, video, lighting, staging, screens, presentation systems and other event technology. Our team coordinates the technical scope around the room, agenda, audience and production schedule. Each system receives a defined role within the show.",
    icon: Sliders,
  },
  {
    title: "Content and speaker coordination",
    desc: "Presentations, videos, graphics, speaker files and stage cues all need preparation before the live program. We placed these materials into the production workflow. Speakers and content teams receive defined deadlines for file delivery, review, testing and rehearsal.",
    icon: Presentation,
  },
  {
    title: "Rehearsal and show flow management",
    desc: "A rehearsal gives the team time to test the real sequence of the program. Speakers can review stage movement. Technical crews can test cues. Content can run through playback systems.We  manages the run of shows around these tests. The production team enters the live program with a shared understanding of timing, transitions, cues and responsibilities.",
    icon: PlaySquare,
  },
  {
    title: "On site production leadership",
    desc: "The production plan becomes a live operation during setup and show time. We  producers direct production activity across the room, crew, schedule, vendors, technical systems, speakers and content. Your planners can stay focused on attendees, stakeholders and program delivery.",
    icon: UserCheck,
  },
];

export default function ProductionWorkSection() {
  return (
    <section className="bg-[#050505] py-16 md:py-20 lg:py-24 border-t border-white/10" aria-labelledby="production-work-heading">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <TypingTitle
            as="h2"
            id="production-work-heading"
            className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            The work behind <span className="text-primary">Production Management</span>
          </TypingTitle>
          <Reveal
            as="p"
            className="mt-4 text-base leading-7 text-white/75 sm:text-lg"
          >
            As an event production company, DXG manages the work required to turn an event program into a live production, from early planning and technical coordination through show day. We  provide event production management for corporate, association, medical, nonprofit and education events. Our producers support general sessions, breakout programs, multi room conferences, hybrid programs and live events.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#071826]/80 p-8 transition-all duration-300 hover:border-primary/50 hover:bg-[#071826] hover:shadow-[0_0_30px_rgba(46,198,245,0.15)]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-black">
                    <Icon size={24} />
                  </div>
                  <TypingTitle
                    as="h3"
                    className="mt-5 text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary"
                  >
                    {item.title}
                  </TypingTitle>
                  <Reveal
                    as="p"
                    className="mt-3 text-sm leading-7 text-white/70"
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
