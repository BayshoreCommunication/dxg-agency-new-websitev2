"use client";

import { useState } from "react";
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
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="DXG home">
          <span className="brand-logo">
            DX<span>G</span>
          </span>
          <span className="brand-tag">
            Featuring <strong>RFPilot</strong>
          </span>
        </a>

        <nav className="main-nav" aria-label="Page sections">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn-primary header-cta"
          href="#connect"
          onClick={() => trackEvent("cta_header_connect")}
        >
          Connect With DXG
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobileNav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav
        className={`mobile-nav${open ? " open" : ""}`}
        id="mobileNav"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          className="btn btn-primary"
          href="#connect"
          onClick={() => {
            trackEvent("cta_mobilenav_connect");
            setOpen(false);
          }}
        >
          Connect With DXG
        </a>
      </nav>
    </header>
  );
}
