"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

export default function EventProductionHero() {
  return (
    <section className="relative isolate min-h-[600px] overflow-hidden pb-20 pt-36 sm:min-h-[680px] sm:pb-24 sm:pt-44 lg:min-h-[740px] lg:pb-32 lg:pt-48 bg-[#030c14]">
      {/* Background Image Overlay */}
      <Reveal kind="image" className="absolute inset-0 z-0">
        <Image
          src="/images/banners/problems-we-solve-banner.png"
          alt="DXG Event Production Management"
          fill
          priority
          sizes="100vw"
          className="dxg-banner-media object-cover object-center brightness-50 opacity-30"
        />
      </Reveal>

      {/* Overlays & Ambient Glows */}
      <div className="absolute inset-0 bg-black/80 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0" />
      <div className="absolute left-1/4 top-1/3 -translate-y-1/2 h-[500px] w-[500px] bg-primary/10 blur-[150px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Content (7 Cols) */}
            <div className="flex flex-col items-start text-left lg:col-span-7">
              {/* Category Badge */}
              <Reveal delay={0.05} className="mb-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md shadow-[0_0_20px_rgba(46,198,245,0.2)]">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Event Production Management
                </span>
              </Reveal>

              {/* H1 Title */}
              <TypingTitle
                as="h1"
                className="text-3xl font-black leading-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight"
              >
                One production plan. One team looking at the{" "}
                <span className="bg-gradient-to-r from-primary via-[#7be3ff] to-white bg-clip-text text-transparent">
                  entire event.
                </span>
              </TypingTitle>

              {/* Subtext Paragraph */}
              <Reveal
                as="p"
                className="mt-6 text-base leading-8 text-white/85 sm:text-lg sm:leading-8 font-normal"
                delay={0.1}
              >
                A successful conference can involve hundreds of production decisions. Budget, venue, schedule, content, vendors, technology, labor, rehearsals and show flow all need to line up at the right time. DXG brings those decisions into one execution plan. Our event production management team works with your planners from early planning through show day. We connect the production details across rooms, vendors, schedules and technical teams. You keep ownership of your event strategy. We manage the production work needed to bring the program to life.
              </Reveal>

              {/* 2 CTA Buttons */}
              <Reveal className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5" delay={0.15}>
                <Link
                  href="/contact-us"
                  className="btn-slide-primary capsule-button inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm sm:text-base font-bold shadow-[0_0_25px_rgba(46,198,245,0.35)]"
                >
                  Request for Proposal
                </Link>

                <a
                  href="tel:+18552829394"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary backdrop-blur-md"
                >
                  Contact Us
                </a>
              </Reveal>
            </div>

            {/* Right Image Showcase (5 Cols) */}
            <div className="relative lg:col-span-5">
              <Reveal kind="image" delay={0.2}>
                <div className="group relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-b from-[#091e30]/80 via-[#071826]/70 to-[#040e17]/90 p-3 shadow-[0_0_50px_rgba(46,198,245,0.2)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_0_60px_rgba(46,198,245,0.3)]">
                  {/* Subtle Top Glowing Line */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <Image
                      src="/images/problems-we-solve/General-Sessions.png"
                      alt="DXG Event Production Management Stage & Setup"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
