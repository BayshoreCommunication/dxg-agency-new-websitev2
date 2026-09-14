"use client";

import TypingTitle from "components/layout/TypingTitle";
import Container from "components/shared/Container";
import Reveal from "components/shared/Reveal";
import { problemServices } from "data/problemServices";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// const hoverBackground = "/images/problems-we-solve/services-hover-bg.png";

export default function ServicesGridSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="bg-black py-8 lg:py-16">
      <Container>
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-4">
          {problemServices.map((service, index) => {
            const isHovered = hoveredCard === index;

            return (
              <Reveal key={service.title} className="h-full">
                <Link
                  href={`/${service.slug}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="glowing-border group relative block h-full min-h-[360px] overflow-hidden rounded-lg border border-primary/20 bg-[#071a2c] p-10 shadow-[0_0_30px_rgba(0,188,242,0.08)] transition duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-primary/70 hover:shadow-[0_22px_55px_rgba(0,188,242,0.18)]"
                >
                  <div
                    className={`absolute inset-0 transition duration-500 ${
                      isHovered
                        ? "scale-100 opacity-100"
                        : "scale-110 opacity-0"
                    }`}
                  >
                    <Image
                      src={service.bannerImage}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="scale-105 object-cover blur-[1.5px]"
                    />
                    <div className="absolute inset-0 bg-[#020912]/65 backdrop-blur-[1px]" />
                  </div>

                  <div
                    className={`absolute inset-0 bg-[linear-gradient(180deg,#071a2c_0%,#03111f_100%)] transition duration-500 ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  <div className="relative z-10 flex h-full flex-col items-center justify-center text-center transition duration-500 group-hover:-translate-y-2">
                    <Reveal
                      kind="image"
                      className="flex h-28 w-28 items-center justify-center rounded-lg border border-primary/50 transition duration-500 group-hover:scale-110 group-hover:border-primary"
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={88}
                        height={88}
                        className={`h-[88px] w-[88px] object-contain ${service.slug === "audiovisual-production" ? "scale-125" : ""}`}
                      />
                    </Reveal>

                    <TypingTitle
                      as="h3"
                      className="mt-6 text-3xl font-black uppercase leading-[0.95] text-primary"
                    >
                      {service.title}
                    </TypingTitle>

                    {/* Service descriptions remain in problemServices.ts for SEO
                        metadata and can be displayed here again if needed. */}

                    <span className="mt-8 inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-semibold text-black opacity-0 transition duration-500 group-hover:opacity-100">
                      View Details
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
