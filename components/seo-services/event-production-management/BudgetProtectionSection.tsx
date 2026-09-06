"use client";

import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import { TrendingDown, Shield, Target } from "lucide-react";

const pillars = [
  {
    title: "Where production cost starts",
    desc: "Room count, session format, stage design and rehearsal time can shape the production budget before vendors submit proposals. We review these choices early so the RFP starts with a practical scope.",
    icon: TrendingDown,
  },
  {
    title: "Where budget gets wasted",
    desc: "Unused equipment, oversized staging, duplicate labor calls and unnecessary technical services can add cost. We compare production scope against the actual agenda, rooms and audience needs.",
    icon: Shield,
  },
  {
    title: "How DXG approaches value",
    desc: "We help direct production spending toward areas with a visible effect on the event experience. Audio quality, presentation reliability, sightlines, stage design and room support may deserve more attention than equipment with limited audience impact.",
    icon: Target,
  },
];

export default function BudgetProtectionSection() {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-24 border-t border-white/10" aria-labelledby="budget-protection-heading">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <TypingTitle
            as="h2"
            id="budget-protection-heading"
            className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Protecting the Production <span className="text-primary">Plan and Budget</span>
          </TypingTitle>
          <Reveal
            as="p"
            className="mt-4 text-base leading-7 text-white/75 sm:text-lg"
          >
            Early production decisions can set major cost conditions for the event. Room count, staging design, rehearsal hours, labor calls and technical requirements all affect the final spend. DXG helps planners decide where production support adds value, where the program can use a simpler setup and where a production choice may create extra cost without improving the audience experience.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#071826] p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(46,198,245,0.12)]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <TypingTitle
                    as="h3"
                    className="mt-5 text-xl font-bold text-white"
                  >
                    {pillar.title}
                  </TypingTitle>
                  <Reveal
                    as="p"
                    className="mt-3 text-sm leading-7 text-white/70"
                    delay={idx * 0.05}
                  >
                    {pillar.desc}
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
