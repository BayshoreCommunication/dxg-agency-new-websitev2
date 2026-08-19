"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "components/shared/Container";
import { trackEvent } from "./analytics";

const NAV_LINKS = [
  { href: "#smarter", label: "The Smarter Approach" },
  { href: "#rfpilot", label: "RFPilot" },
  { href: "#capabilities", label: "DXG Capabilities" },
  { href: "#connect", label: "Connect" },
];

export default function BizBashHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <Container>
        <div className="flex h-[68px] items-center gap-6">
          <Link href="/" className="shrink-0" aria-label="DXG home">
            <Image
              src="/images/logo.png"
              alt="DXG Logo"
              width={87}
              height={63}
              priority
              className="h-auto w-[70px] object-contain sm:w-[87px]"
            />
          </Link>

          <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Page sections">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#connect"
            onClick={() => trackEvent("cta_header_connect")}
            className="btn-slide-primary hidden items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold lg:inline-flex"
          >
            Connect With DXG
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobileNav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
            className={`ml-auto flex h-10 w-10 items-center justify-center rounded-lg text-white transition lg:hidden ${
              open ? "bg-white/10" : ""
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobileNav"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100vh-68px)] overflow-y-auto border-b border-white/10 bg-black/95 px-4 pb-6 pt-2 shadow-2xl shadow-black/40 lg:hidden"
        >
          <div className="flex flex-col divide-y divide-white/10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-white/85"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#connect"
            onClick={() => {
              trackEvent("cta_mobilenav_connect");
              setOpen(false);
            }}
            className="btn-slide-primary mt-4 flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
          >
            Connect With DXG
          </a>
        </nav>
      )}
    </header>
  );
}
