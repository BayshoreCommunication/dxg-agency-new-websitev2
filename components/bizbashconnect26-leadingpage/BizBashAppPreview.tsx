"use client";

import Image from "next/image";
import Container from "components/shared/Container";
import Reveal from "components/shared/Reveal";
import TypingTitle from "components/layout/TypingTitle";

const PREVIEW_CARDS = [
  {
    src: "/images/bizbashconnect26/rfpilot-image07.png",
    alt: "Turns your event details into a structured RFP",
    caption: "Turns your event details into a structured RFP.",
  },
  {
    src: "/images/bizbashconnect26/rfpilot-image04.png",
    alt: "Vendor responses land in one place, ready to review",
    caption: "Vendor responses land in one place, ready to review.",
  },
  {
    src: "/images/bizbashconnect26/rfpilot-image01.png",
    alt: "Tracks every proposal from draft to submitted",
    caption: "Tracks every proposal from draft to submitted.",
  },
];

export default function BizBashAppPreview() {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            A First Look
          </span>
          <TypingTitle
            as="h2"
            className="mt-3 text-2xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            See <span className="text-primary">RFPilot</span> In Action
          </TypingTitle>
          <Reveal as="p" className="mt-4 text-sm leading-6 text-white/70 sm:text-lg sm:leading-7">
            A live look inside the platform DXG is building to make AV RFPs faster to create
            and easier to compare.
          </Reveal>
        </div>

        {/* 3 Browser Cards Grid */}
        <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIEW_CARDS.map((card) => (
            <Reveal
              key={card.src}
              kind="image"
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#081624] transition duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-black/50"
            >
              {/* Browser chrome header */}
              <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#0c1e2e] px-3.5 py-2.5 sm:px-4 sm:py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>

              {/* Image Preview Container with exact 1680/876 aspect ratio so no content is cropped */}
              <div className="relative aspect-[1680/876] w-full overflow-hidden bg-white">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain object-top transition duration-500 hover:scale-102"
                />
              </div>

              {/* Caption Bar */}
              <div className="mt-auto border-t border-white/10 bg-[#06121d] p-3.5 text-left sm:p-4">
                <p className="text-xs font-semibold leading-5 text-white/90">
                  {card.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-8 text-center sm:mt-10">
          <a
            href="#connect"
            className="text-xs font-semibold text-primary underline underline-offset-4 transition hover:text-white sm:text-sm"
          >
            See it live in Tampa, or join the early-access list
          </a>
        </div>
      </Container>
    </section>
  );
}
