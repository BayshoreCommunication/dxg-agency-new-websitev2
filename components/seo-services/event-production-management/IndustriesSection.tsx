"use client";

import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import { Briefcase, Users, Stethoscope, HeartHandshake, GraduationCap } from "lucide-react";

const industries = [
  {
    title: "Corporate events",
    desc: "Corporate event production management supports sales kickoffs, user conferences, leadership meetings, executive programs and internal events. These programs often involve senior speakers, branded presentations, stage content, video, lighting and detailed timing. We align those production elements with the event agenda and brand standards.",
    icon: Briefcase,
  },
  {
    title: "Association conferences",
    desc: "Association conference production often spans general sessions, education programs, concurrent breakouts, committees, volunteers and outside vendors. We created a production structure for the full conference. Room assignments, technical requirements, speaker materials, schedules and crew activity stay connected across the program.",
    icon: Users,
  },
  {
    title: "Medical events",
    desc: "Medical meetings can involve CME requirements, speaker disclosures, approved content, precise timing and several session rooms. We build these requirements into the production schedule. Content checks, speaker coordination, technical preparation and room planning receive defined production milestones.",
    icon: Stethoscope,
  },
  {
    title: "Nonprofit events",
    desc: "Fundraisers and gala programs can combine donor recognition, entertainment, presentations, speeches, live appeals, videos and entertainment. We shape the production around the program goals and available budget. Lighting, sound, staging, video and transitions support the pace and purpose of the evening.",
    icon: HeartHandshake,
  },
  {
    title: "Education events",
    desc: "Commencements, symposiums, academic conferences and campus programs often run on fixed dates with large audiences and detailed schedules. We manage staging, technical crews, room setups, content, rehearsals and production timing around the event calendar.",
    icon: GraduationCap,
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#050505] py-16 md:py-20 lg:py-24 border-t border-white/10" aria-labelledby="industries-heading">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <TypingTitle
            as="h2"
            id="industries-heading"
            className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Industries we provide <span className="text-primary">event production for</span>
          </TypingTitle>
          <Reveal
            as="p"
            className="mt-4 text-base leading-7 text-white/75 sm:text-lg"
          >
            Every event has its own audience, format, budget and production demands. DXG builds the production approach around the program and the people responsible for delivering it.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#071826]/70 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:bg-[#071826] hover:shadow-[0_0_30px_rgba(46,198,245,0.15)]"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-black">
                    <Icon size={28} />
                  </div>
                  <TypingTitle
                    as="h3"
                    className="mt-6 text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary"
                  >
                    {ind.title}
                  </TypingTitle>
                  <Reveal
                    as="p"
                    className="mt-3 text-sm leading-7 text-white/70"
                    delay={idx * 0.05}
                  >
                    {ind.desc}
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
