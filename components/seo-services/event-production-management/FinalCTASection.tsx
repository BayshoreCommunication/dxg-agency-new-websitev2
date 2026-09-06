"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-28 border-t border-white/10" aria-labelledby="cta-heading">
      {/* Background Image */}
      <Reveal kind="image" className="absolute inset-0 z-0">
        <Image
          src="/images/home/lets-talk/cta-bg.png"
          alt="Build the Production Plan Before Show Day"
          fill
          className="object-cover brightness-50"
        />
      </Reveal>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0" />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center">
          <TypingTitle
            as="h2"
            id="cta-heading"
            className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Build the Production Plan <span className="text-primary">Before Show Day</span>
          </TypingTitle>
          <Reveal
            as="p"
            className="mt-6 text-base leading-7 text-white/90 sm:text-lg sm:leading-8 max-w-3xl"
          >
            The right production structure gives meeting planners better control over decisions, spending and execution. DXG brings the production details into one coordinated plan and keeps the work connected from early planning through show close.
          </Reveal>
          <Reveal
            as="p"
            className="mt-4 text-base leading-7 text-primary sm:text-lg font-medium max-w-3xl"
            delay={0.1}
          >
            Tell us about your event and start the conversation with a production team focused on the full program.
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
