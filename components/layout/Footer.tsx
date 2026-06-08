import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X,
  type LucideIcon,
} from "lucide-react";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import NewsletterForm from "components/layout/NewsletterForm";
import { problemServices } from "data/problemServices";

const whyDXG = [
  { label: "How We Work", href: "/our-process" },
  { label: "Our Services", href: "/our-process" },
  { label: "Our Mission", href: "/why-dxg" },
  { label: "Our Experience", href: "/experiences-created" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms Of Use", href: "/terms-of-use" },
];

const contactItems: {
  label: string;
  Icon: LucideIcon;
  href?: string;
}[] = [
  { label: "12824 Dupont Circle Tampa, FL 33626", Icon: MapPin },
  { label: "855.282.9394", Icon: Phone, href: "tel:+18552829394" },
  { label: "Info@dxg.agency", Icon: Mail, href: "mailto:info@dxg.agency" },
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

const footerPanelClass =
  "group/footer-panel relative overflow-hidden p-6 sm:p-8 lg:min-h-[430px]";

function FooterHoverBg() {
  return (
    <>
      <Image
        src="/images/footer/footer-bg.png"
        alt=""
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition duration-500 group-hover/footer-panel:opacity-100"
      />
      <div className="absolute inset-0 bg-black/35 opacity-0 transition duration-500 group-hover/footer-panel:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/60 opacity-0 transition duration-500 group-hover/footer-panel:opacity-100" />
    </>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top */}
      <div className="border-b border-white/10 py-8 sm:py-12 lg:py-20">
        <Container>
          {/* Newsletter */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* Left */}
            <div className="max-w-2xl">
              <TypingTitle
                as="h2"
                className="text-4xl font-black text-white sm:text-5xl"
              >
                Join Our Newsletter
              </TypingTitle>

              <Reveal
                as="p"
                className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-lg"
              >
                Practical insights for meeting planners — tips, trends, and
                strategies you can actually use
              </Reveal>
            </div>

            {/* Right */}
<<<<<<< HEAD
            <div className="w-full max-w-xl">
              {/* Form */}
              <form className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    className="h-14 w-full rounded-full border border-white/10 bg-white px-5 pr-14 text-sm text-black placeholder:text-black/50 focus:border-primary focus:outline-none"
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-black/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 8.25v7.5A2.25 2.25 0 0119.5 18h-15A2.25 2.25 0 012.25 15.75v-7.5m19.5 0A2.25 2.25 0 0019.5 6h-15A2.25 2.25 0 002.25 8.25m19.5 0l-8.69 5.52a2.25 2.25 0 01-2.12 0L2.25 8.25"
                    />
                  </svg>
                </div>

                <button
                  type="submit"
                  className="btn-slide-primary flex h-14 items-center justify-center rounded-full px-8 text-sm font-semibold"
                >
                  Send Us
                </button>
              </form>

              {/* Checkbox */}
              <label className="mt-5 flex items-start gap-3 text-sm text-white/70">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-primary"
                />

                <span>
                  I&apos;m accept the{" "}
                  <Link
                    href="/terms-of-use"
                    className="underline underline-offset-4"
                  >
                    Terms & Conditions
                  </Link>
                </span>
              </label>
            </div>
=======
            <NewsletterForm />
>>>>>>> f44c481018562f94bb7344285382d53acb58c92f
          </div>

          {/* Footer Grid */}
          <div className="mt-16 grid items-stretch gap-6 border-t border-white/10 pt-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_0.8fr] lg:gap-0">
            {/* Address */}
            <div className={footerPanelClass}>
              <FooterHoverBg />

              <div className="relative z-10">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="DXG Digital"
                    width={150}
                    height={90}
                    className="h-auto w-auto"
                  />
                </Link>

                <TypingTitle
                  as="h3"
                  className="mt-8 text-3xl font-black uppercase text-white"
                >
                  Address
                </TypingTitle>

                <Reveal
                  kind="list"
                  className="mt-7 space-y-4 text-sm text-white/75 sm:text-base"
                >
                  {contactItems.map(({ label, Icon, href }) => (
                    <li key={label} className="flex items-start gap-3">
                      {href ? (
                        <a
                          href={href}
                          className="flex items-start gap-3 transition hover:text-primary"
                        >
                          <Icon
                            size={18}
                            strokeWidth={2}
                            className="mt-0.5 shrink-0 text-primary"
                          />
                          <span>{label}</span>
                        </a>
                      ) : (
                        <>
                          <Icon
                            size={18}
                            strokeWidth={2}
                            className="mt-0.5 shrink-0 text-primary"
                          />
                          <span>{label}</span>
                        </>
                      )}
                    </li>
                  ))}
                </Reveal>

                <div className="mt-6 flex items-center gap-3">
                  {socialItems.map(({ label, Icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="group/social flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary bg-primary/10 text-primary shadow-[0_0_0_rgba(39,203,249,0)] transition duration-300 hover:-translate-y-1 hover:bg-primary hover:text-black hover:shadow-[0_0_24px_rgba(39,203,249,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <Icon
                        size={20}
                        strokeWidth={2.2}
                        className="transition duration-300 group-hover/social:scale-110"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className={footerPanelClass}>
              <FooterHoverBg />
              <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 lg:block" />

              <div className="relative z-10 lg:pl-12">
                <TypingTitle
                  as="h3"
                  className="text-3xl font-black uppercase text-white"
                >
                  Services
                </TypingTitle>

                <Reveal kind="list" className="mt-7 space-y-4">
                  {problemServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/problems-we-solve/${service.slug}`}
                        className="text-sm text-primary transition hover:text-white sm:text-base"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </Reveal>
              </div>
            </div>

            {/* Why DXG */}
            <div className={footerPanelClass}>
              <FooterHoverBg />
              <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 lg:block" />

              <div className="relative z-10 lg:pl-12">
                <TypingTitle
                  as="h3"
                  className="text-3xl font-black uppercase text-white"
                >
                  Why DXG
                </TypingTitle>

                <Reveal kind="list" className="mt-7 space-y-4">
                  {whyDXG.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/70 transition hover:text-primary sm:text-base"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </Reveal>
              </div>
            </div>

            {/* Legal */}
            <div className={footerPanelClass}>
              <FooterHoverBg />
              <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 lg:block" />

              <div className="relative z-10 lg:pl-12">
                <TypingTitle
                  as="h3"
                  className="text-3xl font-black uppercase text-white"
                >
                  Legal
                </TypingTitle>

                <Reveal kind="list" className="mt-7 space-y-4">
                  {legal.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/70 transition hover:text-primary sm:text-base"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </Reveal>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/60 lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <Reveal as="p">
              2026{" "}
              <span className="text-primary">
                Digital Xperience Group (DXG)
              </span>{" "}
              © All Rights Reserved
            </Reveal>

            <Reveal as="p" delay={0.06}>
              Design & Development{" "}
              <Link
                href="https://bayshorecommunication.com"
                target="_blank"
                className="text-primary"
              >
                Bayshore Communication
              </Link>
            </Reveal>
          </div>
        </Container>
      </div>
    </footer>
  );
}
