import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "components/shared/Container";
import Reveal from "components/shared/Reveal";

const links = [
  { label: "DXG.agency", href: "https://www.dxg.agency" },
  { label: "Experiences We've Created", href: "https://www.dxg.agency/experiences-created" },
  { label: "The DXG Difference", href: "https://www.dxg.agency/why-dxg" },
  { label: "Privacy Policy", href: "https://www.dxg.agency/privacy-policy" },
  { label: "Terms of Use", href: "https://www.dxg.agency/terms-of-use" },
];

export default function BizBashFooter() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white lg:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="DXG Digital"
                width={110}
                height={70}
                className="h-auto w-[110px] object-contain"
              />
            </Link>

            <Reveal as="p" className="mt-6 max-w-md text-sm leading-6 text-white/70">
              Digital Xperience Group — an audiovisual production agency for meeting planners
              who want more clarity, control, and confidence.
            </Reveal>

            <Reveal kind="list" className="mt-5 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-primary" />
                12824 Dupont Circle, Tampa, FL 33626
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-primary" />
                <a href="tel:+18552829394" className="transition hover:text-primary">
                  855.282.9394
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-primary" />
                <a href="mailto:info@dxg.agency" className="transition hover:text-primary">
                  info@dxg.agency
                </a>
              </li>
            </Reveal>
          </div>

          <nav aria-label="Footer links" className="flex flex-col gap-3 lg:items-end">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Digital Xperience Group (DXG). All rights reserved.</span>
          <span>RFPilot, powered by DXG Agency</span>
        </div>
      </Container>
    </footer>
  );
}
