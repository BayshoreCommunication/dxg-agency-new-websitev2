import {
  Facebook,
  Instagram,
  Linkedin,
  X,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks: {
  label: string;
  href: string;
  Icon: LucideIcon;
  featured?: boolean;
}[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/dxgagcy/",
    Icon: Facebook,
    featured: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dxg.agency",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/dxg-agency",
    Icon: Linkedin,
  },
  {
    label: "X",
    href: "https://x.com/dxgagency",
    Icon: X,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/watch?v=7BEx50pspDA",
    Icon: Youtube,
  },
];

const Footer = () => {
  return (
    <footer className="bg-black px-5 py-10 text-center text-white sm:py-12">
      <Link href="/" className="inline-flex" aria-label="DXG Digital home">
        <Image
          src="/images/logo.png"
          alt="DXG Digital Experience Group"
          width={112}
          height={82}
          className="h-auto w-24 sm:w-28"
        />
      </Link>

      <address className="mt-5 not-italic text-xs leading-6 text-white/80 sm:text-sm">
        <p>12824 Dupont Circle, Tampa, FL 33626</p>
        <div className="mt-1 flex flex-col items-center justify-center sm:flex-row">
          <a
            href="tel:+18552829394"
            className="transition-colors hover:text-primary"
          >
            855.282.9394
          </a>
          <span className="hidden px-3 text-white/35 sm:inline">|</span>
          <a
            href="mailto:info@dxg.agency"
            className="transition-colors hover:text-primary"
          >
            info@dxg.agency
          </a>
          <span className="hidden px-3 text-white/35 sm:inline">|</span>
          <a
            href="https://dxg.agency"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            dxg.agency
          </a>
        </div>
      </address>

      <div className="mt-5 flex items-center justify-center gap-3">
        {socialLinks.map(({ label, href, Icon, featured }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-black ${
              featured
                ? "border-primary text-primary"
                : "border-white/60 text-white"
            }`}
          >
            <Icon size={14} strokeWidth={1.8} aria-hidden="true" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
