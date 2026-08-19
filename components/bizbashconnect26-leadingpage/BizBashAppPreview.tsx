"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "components/shared/Container";
import Reveal from "components/shared/Reveal";
import TypingTitle from "components/layout/TypingTitle";

const SLIDE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 9, 10];

const SLIDES = SLIDE_NUMBERS.map((n) => ({
  src: `/images/bizbashconnect26/rfpilot-image${String(n).padStart(2, "0")}.png`,
  alt: `RFPilot app preview ${n}`,
}));

const SLIDE_INTERVAL = 2000;

export default function BizBashAppPreview() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#0a0a0a] py-4 lg:py-6">
      <Container>
        <div className="max-w-2xl text-left sm:mx-auto sm:text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            A First Look
          </span>
          <TypingTitle
            as="h2"
            className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
          >
            See <span className="text-primary">RFPilot</span> In Action
          </TypingTitle>
          <Reveal as="p" className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
            A live look inside the platform DXG is building to make AV RFPs faster to create
            and easier to compare.
          </Reveal>
        </div>

        <Reveal
          kind="image"
          className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-primary/20 bg-[#0b0b0b] shadow-[0_28px_90px_rgba(0,0,0,0.5)]"
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#111] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <a
              href="https://av-rfpilot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 truncate rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/40 transition hover:text-primary"
            >
              av-rfpilot.com
            </a>
          </div>

          <div className="relative aspect-[1680/876] w-full">
            {SLIDES.map((slide, index) => (
              <motion.div
                key={slide.src}
                className="absolute inset-0"
                initial={false}
                animate={{ opacity: index === active ? 1 : 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 960px, 100vw"
                  className="object-cover object-top"
                />
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show preview ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active ? "w-6 bg-primary" : "w-2 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
