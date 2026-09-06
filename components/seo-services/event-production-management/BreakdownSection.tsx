"use client";

import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import { AlertTriangle, DollarSign, UsersRound, Clock, ShieldAlert } from "lucide-react";

const breakdowns = [
  {
    title: "Costs surface late",
    desc: "A production budget gives major requirements a defined cost from the start. We review equipment, staging, labor, technology, venue requirements and other production needs as the scope develops. Planners gain a clearer view of how each production choice affects the working budget.",
    icon: DollarSign,
  },
  {
    title: "Vendors follow different assumptions",
    desc: "AV, staging, venue, labor and content teams each have specific requirements and deadlines. Our team brings those details into one production schedule. Vendors receive shared information for room access, setup times, technical requirements, labor calls and key milestones.",
    icon: UsersRound,
  },
  {
    title: "Schedule delays spread across program",
    desc: "A delayed load-in can shorten setup. A shorter setup can reduce rehearsal time. A reduced rehearsal window can affect speaker readiness. We track these relationships through the production schedule. Timing changes can then move through the plan before they reach the live program.",
    icon: Clock,
  },
  {
    title: "Show day decisions need clear ownership",
    desc: "Show day creates a fast stream of decisions. A presenter can arrive late. A video can need a last minute update. A room can require an adjustment. Our producer has visibility across the production plan. This gives the team a clear path for coordinating crews, vendors, content, rooms and timing during the event.",
    icon: ShieldAlert,
  },
];

export default function BreakdownSection() {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-24 border-t border-white/10" aria-labelledby="breakdown-heading">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <AlertTriangle size={24} />
          </div>
          <TypingTitle
            as="h2"
            id="breakdown-heading"
            className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Where production work <span className="text-primary">starts to break down</span>
          </TypingTitle>
          <Reveal
            as="p"
            className="mt-4 text-base leading-7 text-white/75 sm:text-lg"
          >
            Every production work starts with proper planning. If there are gaps, there is disconnected information. A budget may sit in one document. Venue details may sit in another. Vendors may follow separate timelines. The impact can appear later during setup or show time.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {breakdowns.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0d1620] p-8 transition-all duration-300 hover:border-primary/40 hover:bg-[#071826] hover:shadow-[0_0_25px_rgba(46,198,245,0.1)]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <TypingTitle
                    as="h3"
                    className="mt-5 text-xl font-bold text-white"
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
