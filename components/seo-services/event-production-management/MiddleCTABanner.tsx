"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

type MiddleCTABannerProps = {
  title?: string;
  highlightText?: string;
  buttonText?: string;
  buttonHref?: string;
  subtext?: string;
};

export default function MiddleCTABanner({
  title = "This isn’t a sales call — it’s a working session to help you",
  highlightText = "plan smarter",
  buttonText = "Schedule a Strategy Call",
  buttonHref = "/contact-us",
  subtext = "No pressure. No pitch deck. Just a conversation about your event.",
}: MiddleCTABannerProps) {
  return (
    <div className="relative overflow-hidden bg-black border-y border-white/10">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/lets-talk/cta-bg.png"
          alt="Schedule a Strategy Call"
          fill
          className="object-cover brightness-50 opacity-60"
        />
      </div>

      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0" />

      <Container>
        <div className="relative z-10 flex flex-col items-start gap-6 py-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <TypingTitle
              as="h3"
              className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl"
            >
              {title}{" "}
              <span className="text-primary font-semibold">
                {highlightText}
              </span>
              .
            </TypingTitle>
          </div>

          <div className="flex flex-col items-start gap-3 shrink-0">
            <Link
              href={buttonHref}
              className="btn-slide-primary capsule-button inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-bold shadow-[0_0_20px_rgba(46,198,245,0.3)]"
            >
              {buttonText}
            </Link>
            <Reveal as="p" className="text-xs leading-6 text-white/80">
              {subtext}
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}
