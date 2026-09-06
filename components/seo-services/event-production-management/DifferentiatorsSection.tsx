"use client";

import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import { ShieldCheck, UserCheck, Layers, HelpCircle, Layers3 } from "lucide-react";

const diffs = [
  {
    title: "Vendor neutral production guidance",
    desc: "We do not sell or rent AV equipment. Production recommendations come from the event scope, venue, budget, technical requirements and program format. Planners can evaluate production options around the actual needs of the event.",
    icon: ShieldCheck,
  },
  {
    title: "One point of contact",
    desc: "Our dedicated producer tracks the production budget, schedule, vendors, venue requirements, technology and show flow. Your team gets one production lead for the connected decisions. Vendors also have a clear communication path for production questions and changes.",
    icon: UserCheck,
  },
  {
    title: "Production built around full event",
    desc: "Production decisions affect several parts of a conference at once. A room change can affect AV. A schedule change can affect labor. A new session can affect rehearsal timing. We  review each major production decision against the wider program. This keeps the production plan practical across rooms, teams and schedules.",
    icon: Layers,
  },
  {
    title: "Support at stage you need",
    desc: "We can join during early event scoping, review an existing production proposal, support vendor selection or take a lead role closer to show day. Your team can bring us into the production process at the stage where additional expertise creates the most value.",
    icon: HelpCircle,
  },
  {
    title: "Built for complex programs",
    desc: "A large conference can involve multiple rooms, concurrent sessions, several vendors, a long speaker roster and a detailed run of shows. We build the production workflow around the actual structure of the program. The approach can support a focused general session, a multi track conference, a hybrid event or a large live program.",
    icon: Layers3,
  },
];

export default function DifferentiatorsSection() {
  return (
    <section className="bg-[#050505] py-16 md:py-20 lg:py-24 border-t border-white/10" aria-labelledby="differentiators-heading">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <TypingTitle
            as="h2"
            id="differentiators-heading"
            className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            What makes DXG different <span className="text-primary">from AV vendor</span>
          </TypingTitle>
          <Reveal
            as="p"
            className="mt-4 text-base leading-7 text-white/75 sm:text-lg"
          >
            DXG approaches event production from the producer&apos;s point of view. The work centers on the full event, from early production decisions through final execution.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diffs.map((item, idx) => {
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
