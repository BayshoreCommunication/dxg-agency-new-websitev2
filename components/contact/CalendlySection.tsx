"use client";

import TypingTitle from "components/layout/TypingTitle";
import Container from "components/shared/Container";
import Reveal from "components/shared/Reveal";
import { Facebook, Instagram, Linkedin, LocationEditIcon, Mail, Phone, X } from "lucide-react";
import { InlineWidget } from "react-calendly";

const sessionNotes = [
  {
    Icon: LocationEditIcon,
    label: "12824 Dupont Circle Tampa, FL 33626",
  },
  {
    Icon: Phone,
    label: "855.282.9394",
  },
  {
    Icon: Mail,
    label: "Info@dxg.agency",
  },
];

const socialItems: {
  label: string;
  Icon: LucideIcon;
  href: string;
}[] = [
  {
    label: "Instagram",
    Icon: Instagram,
    href: "https://www.instagram.com/dxg.agency",
  },
  {
    label: "X",
    Icon: X,
    href: "https://x.com/dxgagency",
  },
  {
    label: "LinkedIn",
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/dxg-agency",
  },
  {
    label: "Facebook",
    Icon: Facebook,
    href: "https://www.facebook.com/dxgagcy/",
  },
];

export default function CalendlySection() {
  return (
    <section className="bg-black py-8 lg:py-16">
      <Container className="max-w-[1260px]">
        <div className="grid overflow-hidden rounded-[22px] border border-primary/15 bg-[#071827] shadow-[0_28px_90px_rgba(0,0,0,0.42)] lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-between gap-10 border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            {/* Top — heading + contact info */}
            <div>
              <Reveal
                as="p"
                className="text-sm font-bold uppercase tracking-[0.22em] text-primary"
              >
                Schedule a Call
              </Reveal>

              <TypingTitle
                as="h2"
                className="mt-4 text-3xl font-black uppercase leading-[0.95] text-white sm:text-4xl lg:text-[42px]"
              >
                Book Your{" "}
                <span className="text-primary">DXG Insight Session</span>
              </TypingTitle>

              <Reveal
                as="p"
                className="mt-5 text-sm leading-6 text-white/75"
              >
                Choose a time to talk through your event goals, production
                needs, and the smartest next step with the DXG team.
              </Reveal>

              <Reveal kind="list" as="div" className="mt-8 space-y-3">
                {sessionNotes.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-primary/50 bg-[#082033] text-primary">
                      <Icon size={16} strokeWidth={2} />
                    </div>
                    <p className="text-sm text-white/80">{label}</p>
                  </div>
                ))}
              </Reveal>
            </div>

            {/* Bottom — social icons */}
            <div>
              <div className="mb-4 border-t border-white/10 pt-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                  Connect With Us
                </p>
                <div className="flex items-center gap-2.5">
                  {socialItems.map(({ label, Icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="group/social flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary shadow-[0_0_0_rgba(39,203,249,0)] transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(39,203,249,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <Icon
                        size={18}
                        strokeWidth={2.2}
                        className="transition duration-300 group-hover/social:scale-110"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0B1722] p-3 sm:p-5 lg:p-6">
            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-white">
              <InlineWidget
                url="https://calendly.com/digitalxperiencegroup/dxgagency-insight-session"
                styles={{
                  height: "720px",
                  minWidth: "100%",
                }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: "00c8ff",
                  textColor: "071827",
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
