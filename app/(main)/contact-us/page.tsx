import CalendlySection from "components/contact/CalendlySection";
import ContactFormSection from "components/contact/ContactFormSection";
import GoogleMapSection from "components/contact/GoogleMapSection";
import TypingTitle from "components/layout/TypingTitle";
import Container from "components/shared/Container";
import PageBanner from "components/shared/PageBanner";
import Reveal from "components/shared/Reveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Contact DXG Agency | Event Production Experts Team",
  description:
    "Get in touch with DXG Agency for event production, audiovisual solutions, and live experiences. Let’s plan impactful events that engage your audience.",
  alternates: {
    canonical: "/contact-us",
  },
};
const page = () => {
  return (
    <div>
      <section className="relative isolate min-h-[360px] overflow-hidden pb-20 pt-36 sm:min-h-[400px] sm:pb-24 sm:pt-40 lg:min-h-[460px] lg:pb-28 lg:pt-44">
        {/* Background Image */}
        <Reveal kind="image" className="absolute inset-0">
          <Image
            src="/images/banners/contact-banner.png"
            alt="Contact Us"
            fill
            priority
            sizes="100vw"
            className="dxg-banner-media object-cover object-center"
          />
        </Reveal>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50" />
        <div className="absolute inset-x-0 top-0 h-28 bg-black/10" />

        {/* Content */}
        <div className="relative z-10">
          <Container>
            <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-center text-center md:mt-12">
              {/* Title */}
              <TypingTitle
                as="h1"
                className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
              >
                <span className="text-primary font-semibold">Contact</span> Us
              </TypingTitle>

              {/* Breadcrumb */}
              <div className="mt-5 flex items-center justify-center gap-3 text-sm font-medium text-white/80">
                <Link
                  href="/"
                  className="relative z-30 transition hover:text-primary"
                >
                  Home
                </Link>

                <span className="text-white/40">/</span>

                <span className="text-primary">Contact Us</span>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* <ContactFormSection /> */}
      <CalendlySection />
      {/* <GoogleMapSection /> */}
    </div>
  );
};

export default page;
