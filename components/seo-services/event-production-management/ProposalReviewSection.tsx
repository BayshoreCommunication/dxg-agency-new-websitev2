"use client";

import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import { FileCheck, DollarSign, Clock, AlertTriangle, FileText } from "lucide-react";

const reviews = [
  {
    title: "Scope alignment",
    desc: "We compare the proposal against the program design, room count, agenda and production requirements. Gaps become easier to identify before the event reaches the setup stage.",
    icon: FileCheck,
  },
  {
    title: "Pricing review",
    desc: "We assess quoted costs against the scope, room requirements, labor assumptions and production timeline. This gives planners better context for evaluating the value of the proposal.",
    icon: DollarSign,
  },
  {
    title: "Labor call review",
    desc: "Crew hours and call times should match the actual setup, rehearsal, show and strike schedule. We check the labor plan for excessive hours, missing coverage and timing conflicts.",
    icon: Clock,
  },
  {
    title: "Technical risk review",
    desc: "We look for weak points in the production plan, including single points of failure, missing backup plans and technical dependencies. Critical show elements receive closer attention before execution.",
    icon: AlertTriangle,
  },
  {
    title: "Contract and change order review",
    desc: "Overtime, cancellation terms, equipment substitutions and change order rules can affect the final production cost. We flag terms worth reviewing before signature.",
    icon: FileText,
  },
];

export default function ProposalReviewSection() {
  return (
    <section className="bg-[#050505] py-16 md:py-20 lg:py-24 border-t border-white/10" aria-labelledby="proposal-heading">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <TypingTitle
            as="h2"
            id="proposal-heading"
            className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Already Have an <span className="text-primary">AV Proposal?</span>
          </TypingTitle>
          <Reveal
            as="p"
            className="mt-4 text-base leading-7 text-white/75 sm:text-lg"
          >
            DXG can review an existing audiovisual proposal or production plan before you sign. The review gives your team another set of production eyes before a contract creates budget or technical commitments.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((item, idx) => {
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
