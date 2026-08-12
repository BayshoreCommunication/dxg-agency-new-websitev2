export default function BizBashFooter() {
  return (
    <footer className="site-footer dark">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-logo">
              DX<span style={{ color: "var(--cyan)" }}>G</span>
            </span>
            <p>
              Digital Xperience Group — an audiovisual production agency for
              meeting planners who want more clarity, control, and
              confidence.
            </p>
            <p style={{ marginTop: ".8rem" }}>
              12824 Dupont Circle, Tampa, FL 33626
              <br />
              <a className="text-link" href="tel:+18552829394" style={{ border: 0 }}>
                855.282.9394
              </a>{" "}
              ·{" "}
              <a className="text-link" href="mailto:info@dxg.agency" style={{ border: 0 }}>
                info@dxg.agency
              </a>
            </p>
          </div>
          <nav className="footer-links" aria-label="Footer links">
            <a href="https://www.dxg.agency" target="_blank" rel="noopener noreferrer">
              DXG.agency
            </a>
            <a
              href="https://www.dxg.agency/experiences-created"
              target="_blank"
              rel="noopener noreferrer"
            >
              Experiences We&apos;ve Created
            </a>
            <a href="https://www.dxg.agency/why-dxg" target="_blank" rel="noopener noreferrer">
              The DXG Difference
            </a>
            <a
              href="https://www.dxg.agency/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.dxg.agency/terms-of-use"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </a>
          </nav>
        </div>
        <div className="footer-legal">
          <span>© 2026 Digital Xperience Group (DXG). All rights reserved.</span>
          <span>RFPilot, powered by DXG Agency</span>
        </div>
      </div>
    </footer>
  );
}
