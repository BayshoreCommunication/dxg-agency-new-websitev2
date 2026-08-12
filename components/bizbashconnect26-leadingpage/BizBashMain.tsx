"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "./analytics";

type InterestKey = "consult" | "review" | "rfpilot" | "followup";

const INTEREST_KEYS: InterestKey[] = ["consult", "review", "rfpilot", "followup"];

const INTEREST_CARDS: { key: InterestKey; title: string; desc: string }[] = [
  {
    key: "consult",
    title: "Discuss an Upcoming Event",
    desc: "Schedule a working conversation about your program.",
  },
  {
    key: "review",
    title: "Review an AV Proposal or Production Plan",
    desc: "Get a second set of experienced eyes before you commit.",
  },
  {
    key: "rfpilot",
    title: "See RFPilot",
    desc: "Join the early-access list and see the platform first.",
  },
  {
    key: "followup",
    title: "Follow Up After the Show",
    desc: "Stay connected once you're back from Tampa.",
  },
];

const INTEREST_LABELS: Record<InterestKey, string> = {
  consult: "Schedule a DXG consultation",
  review: "Request an AV proposal or production-plan review",
  rfpilot: "Join the RFPilot early-access list",
  followup: "Receive post-event follow-up",
};

const CAPABILITIES = [
  {
    title: "General Sessions",
    desc: "Strategy, staging, video, audio, lighting, show flow, and on-site leadership managed as one connected production.",
  },
  {
    title: "Breakout Rooms",
    desc: "Consistent technical standards and support across every room — not only the main stage.",
  },
  {
    title: "Hybrid & Virtual Events",
    desc: "Streaming and platform support that keeps the remote audience genuinely part of the experience — not just connected.",
  },
  {
    title: "Creative & Environmental Design",
    desc: "Stage and environmental design that makes the event feel intentional from the moment attendees walk in.",
  },
  {
    title: "Content Capture",
    desc: "Professional photo and video assets that extend the value of the event after the final session.",
  },
  {
    title: "Meeting Planning & Production Support",
    desc: "From run-of-show development to on-site coordination and post-event recaps — support through every phase.",
  },
];

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 12l5 5 11-11" />
  </svg>
);

export default function BizBashMain() {
  const rootRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const confirmRef = useRef<HTMLDivElement>(null);
  const submitTimeRef = useRef<HTMLInputElement>(null);

  const [interests, setInterests] = useState<Record<InterestKey, boolean>>({
    consult: false,
    review: false,
    rfpilot: false,
    followup: false,
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});
  const [interestError, setInterestError] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formStarted, setFormStarted] = useState(false);
  const [utm, setUtm] = useState({
    source: "",
    medium: "",
    campaign: "",
    content: "",
    qr: "",
    originalSource: "",
  });

  // Anchor-link smooth scroll + header offset, matching the campaign's html{} rule.
  useEffect(() => {
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    const prevPadding = html.style.scrollPaddingTop;
    html.style.scrollBehavior = "smooth";
    html.style.scrollPaddingTop = "88px";
    return () => {
      html.style.scrollBehavior = prevBehavior;
      html.style.scrollPaddingTop = prevPadding;
    };
  }, []);

  // Scroll-reveal (respects reduced motion), scoped to this page's content.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reveals = root.querySelectorAll<HTMLElement>(".reveal");
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Attribution capture from the URL.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const qr = params.get("qr") || "";
    setUtm({
      source: params.get("utm_source") || "",
      medium: params.get("utm_medium") || "",
      campaign: params.get("utm_campaign") || "",
      content: params.get("utm_content") || "",
      qr,
      originalSource: qr ? "QR Code" : document.referrer || "Direct",
    });
  }, []);

  useEffect(() => {
    if (submitted && confirmRef.current) {
      confirmRef.current.focus();
      confirmRef.current.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "center",
      });
    }
  }, [submitted]);

  function setInterest(key: InterestKey, value: boolean) {
    setInterests((prev) => ({ ...prev, [key]: value }));
    trackEvent("interest_selected", { interest: key, checked: value });
  }

  function handleCardClick(key: InterestKey | "all") {
    if (key === "all") {
      const allOn = INTEREST_KEYS.every((k) => interests[k]);
      const next = !allOn;
      setInterests((prev) => {
        const updated = { ...prev };
        INTEREST_KEYS.forEach((k) => {
          updated[k] = next;
        });
        return updated;
      });
      trackEvent("interest_selected", { interest: "all", checked: next });
    } else {
      setInterest(key, !interests[key]);
    }
    document
      .getElementById("connectForm")
      ?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  }

  function handleRfpilotPreselect() {
    setInterest("rfpilot", true);
    trackEvent("cta_rfpilot_earlyaccess");
  }

  function handleFormInput() {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent("form_start");
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    // Honeypot spam trap.
    const honeypot = form.elements.namedItem("dxg_website") as HTMLInputElement | null;
    if (honeypot?.value) return;

    let valid = true;
    let firstBad: HTMLElement | null = null;
    const newErrors: Record<string, boolean> = {};

    form
      .querySelectorAll<HTMLInputElement | HTMLSelectElement>("input[required], select[required]")
      .forEach((input) => {
        const bad =
          input.type === "checkbox"
            ? !(input as HTMLInputElement).checked
            : input.type === "email"
              ? !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())
              : !input.value.trim();
        newErrors[input.id] = bad;
        if (bad && !firstBad) firstBad = input;
      });
    valid = Object.values(newErrors).every((bad) => !bad);

    const anyInterest = INTEREST_KEYS.some((k) => interests[k]);
    setInterestError(!anyInterest);
    if (!anyInterest) valid = false;

    setFieldErrors(newErrors);
    setShowErrorBanner(!valid);

    if (!valid) {
      (firstBad ?? document.getElementById("interestChecks"))?.focus();
      return;
    }

    if (submitTimeRef.current) {
      submitTimeRef.current.value = new Date().toISOString();
    }

    // ZOHO SUBMIT — WEB TEAM: replace this block with the actual POST to the
    // Zoho endpoint, e.g. fetch(zohoWebformURL, {method:"POST", body:new FormData(form)}),
    // then show the confirmation on success and handle failures with the error banner.
    trackEvent("form_submit_success", { ...interests });
    setSubmitted(true);
  }

  const allSelected = INTEREST_KEYS.every((k) => interests[k]);
  const disclosureOpen = interests.consult || interests.review;
  const selectedLabels = INTEREST_KEYS.filter((k) => interests[k]).map((k) => INTEREST_LABELS[k]);

  return (
    <main id="main" ref={rootRef}>
      {/* HERO */}
      <section className="hero dark" id="top">
        <div className="wrap hero-inner">
          <div>
            <div className="hero-eyebrow">
              <span className="event-tag">
                <span className="dot" aria-hidden="true"></span>Meet DXG in Tampa
              </span>
              <span className="event-sub">BizBash Innovation Forum + Connect Marketplace 2026</span>
            </div>
            <h1>
              A Smarter Approach to <em>Event AV.</em>
            </h1>
            <p className="lede">
              DXG combines producer-led event production with RFPilot innovation to help planners
              make smarter AV decisions, gain more control over the process, and execute events
              with greater confidence.
            </p>
            <div className="hero-ctas">
              <a
                className="btn btn-primary"
                href="#connect"
                onClick={() => trackEvent("cta_hero_connect")}
              >
                Connect With DXG
              </a>
              <a
                className="btn btn-ghost"
                href="#rfpilot"
                onClick={() => trackEvent("cta_hero_rfpilot")}
              >
                Explore RFPilot
              </a>
            </div>
            <p className="hero-proof">
              Built for meeting planners and event marketers who expect more from their production
              partner.
            </p>
          </div>

          <div className="hero-stage" aria-hidden="true">
            <div className="stage-screen">
              <span className="screen-label">General Session · Show Control</span>
            </div>
            <div className="stage-floor">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="stage-console">
              <div className="console-card">
                <div className="cc-label">Program Audio</div>
                <div className="cc-bars">
                  <i style={{ height: "40%" }}></i>
                  <i style={{ height: "65%" }} className="hot"></i>
                  <i style={{ height: "52%" }}></i>
                  <i style={{ height: "80%" }} className="hot"></i>
                  <i style={{ height: "58%" }}></i>
                  <i style={{ height: "70%" }} className="hot"></i>
                  <i style={{ height: "44%" }}></i>
                  <i style={{ height: "62%" }}></i>
                </div>
              </div>
              <div className="console-card">
                <div className="cc-label">Show Status</div>
                <div className="cc-row">
                  <span>Rehearsal</span>
                  <span className="ok">Complete</span>
                </div>
                <div className="cc-row">
                  <span>Cue Stack</span>
                  <span className="ok">Ready</span>
                </div>
                <div className="cc-row">
                  <span>Stream</span>
                  <span className="ok">Live</span>
                </div>
              </div>
            </div>
            <div className="stage-caption">
              <span>Producer-led execution</span>
              <b>DXG Show Call</b>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="problem" id="smarter">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="kicker">Why a Smarter Approach Is Needed</span>
            <h2>The traditional AV process creates too many opportunities for uncertainty.</h2>
            <p className="lede">
              The challenge is rarely just the equipment. It is gaining reliable information
              early, understanding what is included, aligning the production plan with the
              event&apos;s goals, and knowing that the team executing the event is thinking ahead.
            </p>
          </div>
          <div className="problem-points">
            <div className="problem-point reveal">
              <span>
                <b>Unclear proposals</b> — formats and line items that are hard to compare.
              </span>
            </div>
            <div className="problem-point reveal">
              <span>
                <b>Limited cost visibility</b> — no reliable frame of reference before bids arrive.
              </span>
            </div>
            <div className="problem-point reveal">
              <span>
                <b>Reactive support</b> — problems addressed after they happen, not planned for.
              </span>
            </div>
            <div className="problem-point reveal">
              <span>
                <b>Rigid, one-size-fits-all solutions</b> — setups that don&apos;t fit the
                event&apos;s actual vision.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* RFPILOT */}
      <section className="rfpilot dark" id="rfpilot">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="kicker">Introducing RFPilot</span>
            <h2>Build the RFP. Understand the responses. Make the decision with confidence.</h2>
            <p className="lede">
              RFPilot is being developed to simplify the AV RFP process for meeting planners — from
              organizing event requirements to reviewing the proposals vendors submit.
            </p>
          </div>

          <div className="rfp-values">
            <div className="rfp-value reveal">
              <span>
                <b>Guided RFP creation</b> — turn event details into a structured AV RFP.
              </span>
            </div>
            <div className="rfp-value reveal">
              <span>
                <b>Comparable vendor responses</b> — see differences, exclusions, and missing items
                clearly.
              </span>
            </div>
            <div className="rfp-value reveal">
              <span>
                <b>Investment guidance</b> — a grounded frame of reference before proposals arrive.
              </span>
            </div>
            <div className="rfp-value reveal">
              <span>
                <b>Proposal intelligence</b> — review responses against your event&apos;s actual
                requirements.
              </span>
            </div>
          </div>

          <p className="rfpilot-qual">
            RFPilot is currently being developed by Digital Xperience Group. Features and
            availability may evolve as the platform moves through testing and early access.
          </p>

          <button type="button" className="btn btn-primary" onClick={handleRfpilotPreselect}>
            Join the RFPilot Early-Access List
          </button>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="capabilities" id="capabilities">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="kicker">Producer-Led Event Production</span>
            <h2>One production partner. Every part of the event experience.</h2>
          </div>
          <div className="cap-grid">
            {CAPABILITIES.map((cap) => (
              <div className="cap-card reveal" key={cap.title}>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCER-LED DIFFERENCE */}
      <section className="difference dark">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="kicker">The DXG Difference</span>
            <h2>A producer-led approach focused on real-world execution.</h2>
            <p className="lede">
              DXG approaches event AV from a producer&apos;s perspective. Technology supports the
              experience, but planning, communication, accountability, and on-site leadership are
              what keep the event on track.
            </p>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <h3>Clarity</h3>
              <p>Clear scopes, responsibilities, communication, and expectations throughout the process.</p>
            </div>
            <div className="pillar reveal">
              <h3>Control</h3>
              <p>
                Greater visibility into the decisions that affect the production, budget, venue,
                schedule, and attendee experience.
              </p>
            </div>
            <div className="pillar reveal">
              <h3>Confidence</h3>
              <p>
                An experienced team that anticipates challenges, communicates early, and remains
                accountable through execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT CONNECTION OFFER */}
      <section className="connect-offer" id="connect">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Let&apos;s continue the conversation after Tampa.</h2>
            <p className="lede">
              Whether you are planning an upcoming conference, evaluating an AV proposal, exploring
              RFPilot, or simply looking for a better production approach, tell us where we can be
              most useful. Select as many as apply — one submission covers everything.
            </p>
          </div>
          <div className="interest-grid" role="group" aria-label="Select your interests">
            {INTEREST_CARDS.map((card) => (
              <button
                key={card.key}
                type="button"
                className={`interest-card${interests[card.key] ? " selected" : ""}`}
                aria-pressed={interests[card.key]}
                onClick={() => handleCardClick(card.key)}
              >
                <span className="ic-check" aria-hidden="true">
                  <CheckIcon />
                </span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </button>
            ))}
            <button
              type="button"
              className={`interest-card all${allSelected ? " selected" : ""}`}
              aria-pressed={allSelected}
              onClick={() => handleCardClick("all")}
            >
              <span className="ic-check" aria-hidden="true">
                <CheckIcon />
              </span>
              <span className="ic-text">
                <h3>All of the Above</h3>
                <p>Select every option — one conversation covers it all.</p>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="form-section">
        <div className="wrap">
          <div className="form-card">
            {!submitted && (
              <form id="connectForm" ref={formRef} noValidate onInput={handleFormInput} onSubmit={handleSubmit}>
                <h2 id="formHeadline">How would you like DXG to follow up?</h2>
                <div className="form-grid">
                  <div className={`form-error-banner${showErrorBanner ? " show" : ""}`} id="formErrorBanner" role="alert">
                    Please complete the highlighted fields so we can follow up correctly.
                  </div>

                  <div className={`field${fieldErrors.firstName ? " invalid" : ""}`}>
                    <label htmlFor="firstName">
                      First Name <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input type="text" id="firstName" name="First_Name" autoComplete="given-name" required />
                    <p className="error-msg">Enter your first name.</p>
                  </div>
                  <div className={`field${fieldErrors.lastName ? " invalid" : ""}`}>
                    <label htmlFor="lastName">
                      Last Name <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input type="text" id="lastName" name="Last_Name" autoComplete="family-name" required />
                    <p className="error-msg">Enter your last name.</p>
                  </div>
                  <div className={`field${fieldErrors.email ? " invalid" : ""}`}>
                    <label htmlFor="email">
                      Work Email <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input type="email" id="email" name="Email" autoComplete="email" inputMode="email" required />
                    <p className="error-msg">Enter a valid work email address.</p>
                  </div>
                  <div className={`field${fieldErrors.company ? " invalid" : ""}`}>
                    <label htmlFor="company">
                      Company <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input type="text" id="company" name="Company" autoComplete="organization" required />
                    <p className="error-msg">Enter your company name.</p>
                  </div>
                  <div className={`field${fieldErrors.jobTitle ? " invalid" : ""}`}>
                    <label htmlFor="jobTitle">
                      Job Title <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input type="text" id="jobTitle" name="Job_Title" autoComplete="organization-title" required />
                    <p className="error-msg">Enter your job title.</p>
                  </div>
                  <div className={`field${fieldErrors.role ? " invalid" : ""}`}>
                    <label htmlFor="role">
                      Primary Professional Role <span className="req" aria-hidden="true">*</span>
                    </label>
                    <select id="role" name="Primary_Role" required defaultValue="">
                      <option value="">Select your role</option>
                      <option>Meeting or Event Planner</option>
                      <option>Event Marketer</option>
                      <option>Association Professional</option>
                      <option>Corporate Events</option>
                      <option>Experiential or Creative Agency</option>
                      <option>Procurement or Sourcing</option>
                      <option>Venue or Hospitality</option>
                      <option>Other</option>
                    </select>
                    <p className="error-msg">Select your primary role.</p>
                  </div>

                  <fieldset>
                    <legend>
                      How can DXG be most useful? <span className="req" aria-hidden="true">*</span>{" "}
                      <span style={{ fontWeight: 400, color: "var(--text-soft)" }}>(select all that apply)</span>
                    </legend>
                    <div className="check-list" id="interestChecks" tabIndex={-1}>
                      <label className="check-item">
                        <input
                          type="checkbox"
                          name="Consultation_Interest"
                          value="Yes"
                          checked={interests.consult}
                          onChange={() => setInterest("consult", !interests.consult)}
                        />
                        Schedule a DXG consultation
                      </label>
                      <label className="check-item">
                        <input
                          type="checkbox"
                          name="Proposal_Review_Interest"
                          value="Yes"
                          checked={interests.review}
                          onChange={() => setInterest("review", !interests.review)}
                        />
                        Request an AV proposal or production-plan review
                      </label>
                      <label className="check-item">
                        <input
                          type="checkbox"
                          name="RFPilot_Interest"
                          value="Yes"
                          checked={interests.rfpilot}
                          onChange={() => setInterest("rfpilot", !interests.rfpilot)}
                        />
                        Join the RFPilot early-access list
                      </label>
                      <label className="check-item">
                        <input
                          type="checkbox"
                          name="Followup_Interest"
                          value="Yes"
                          checked={interests.followup}
                          onChange={() => setInterest("followup", !interests.followup)}
                        />
                        Receive post-event follow-up
                      </label>
                    </div>
                    {interestError && (
                      <p style={{ color: "#C0392B", fontSize: ".78rem", marginTop: ".4rem" }}>
                        Select at least one option.
                      </p>
                    )}
                  </fieldset>

                  {/* Progressive disclosure: shown for consultation / proposal review */}
                  <div className={`disclosure${disclosureOpen ? " open" : ""}`} id="eventDisclosure">
                    <p className="disclosure-note">
                      A few optional details help us come prepared. Skip anything you&apos;re not ready
                      to share.
                    </p>
                    <div className="field">
                      <label htmlFor="eventName">Event or Project Name</label>
                      <input type="text" id="eventName" name="Event_Name" />
                    </div>
                    <div className="field">
                      <label htmlFor="eventDate">Estimated Event Date</label>
                      <input type="month" id="eventDate" name="Event_Date" />
                    </div>
                    <div className="field">
                      <label htmlFor="eventLocation">Event Location</label>
                      <input type="text" id="eventLocation" name="Event_Location" placeholder="City, venue, or TBD" />
                    </div>
                    <div className="field">
                      <label htmlFor="attendance">Expected Attendance</label>
                      <select id="attendance" name="Attendance" defaultValue="">
                        <option value="">Select a range</option>
                        <option>Under 250</option>
                        <option>250 – 1,000</option>
                        <option>1,000 – 3,000</option>
                        <option>3,000 – 6,000</option>
                        <option>6,000+</option>
                      </select>
                    </div>
                    <div className="field full">
                      <label htmlFor="scope">General Session &amp; Breakout Scope</label>
                      <input
                        type="text"
                        id="scope"
                        name="Session_Scope"
                        placeholder="e.g., 1 general session, 12 breakouts, hybrid stream"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="stage">Current Stage</label>
                      <select id="stage" name="Event_Stage" defaultValue="">
                        <option value="">Select a stage</option>
                        <option>Early Planning</option>
                        <option>Building the RFP</option>
                        <option>Reviewing Proposals</option>
                        <option>Vendor Selected</option>
                        <option>Exploring Future Options</option>
                      </select>
                    </div>
                    <div className="field full">
                      <label htmlFor="helpful">What would be most helpful right now?</label>
                      <textarea id="helpful" name="Most_Helpful"></textarea>
                    </div>
                  </div>

                  {/* Hidden campaign & attribution fields */}
                  <input type="hidden" name="Lead_Source" value="BizBash / Connect Marketplace" readOnly />
                  <input type="hidden" name="Campaign" value="BizBash Tampa 2026" readOnly />
                  <input type="hidden" name="Landing_Page" value="DXG Smarter Approach Campaign" readOnly />
                  <input type="hidden" name="UTM_Source" value={utm.source} readOnly />
                  <input type="hidden" name="UTM_Medium" value={utm.medium} readOnly />
                  <input type="hidden" name="UTM_Campaign" value={utm.campaign} readOnly />
                  <input type="hidden" name="UTM_Content" value={utm.content} readOnly />
                  <input type="hidden" name="QR_Code_Source" value={utm.qr} readOnly />
                  <input type="hidden" name="Original_Source" value={utm.originalSource} readOnly />
                  <input type="hidden" name="Submission_DateTime" ref={submitTimeRef} defaultValue="" />
                  {/* Honeypot spam trap — leave empty; Zoho-side CAPTCHA still recommended */}
                  <input
                    type="text"
                    name="dxg_website"
                    id="hpField"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ position: "absolute", left: "-9999px" }}
                    aria-hidden="true"
                  />

                  <div className="consent">
                    <label>
                      <input type="checkbox" id="consentRespond" name="Consent_Respond" value="Yes" required />
                      <span>
                        I agree that DXG may contact me about this request. See the{" "}
                        <a
                          className="text-link"
                          href="https://www.dxg.agency/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          DXG Privacy Policy
                        </a>
                        . <span className="req" aria-hidden="true">*</span>
                      </span>
                    </label>
                    <label>
                      <input type="checkbox" name="Consent_Marketing" value="Yes" />
                      <span>Send me occasional planner insights and DXG updates by email. (Optional)</span>
                    </label>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                      Connect With DXG
                    </button>
                  </div>
                </div>
              </form>
            )}

            {submitted && (
              <div className="confirm-panel show" id="confirmPanel" ref={confirmRef} tabIndex={-1}>
                <div className="confirm-icon" aria-hidden="true">
                  <CheckIcon />
                </div>
                <h2>Thank you — we&apos;ll take it from here.</h2>
                <p>Your request is on its way to the DXG team. Here&apos;s what you selected:</p>
                <ul className="confirm-list">
                  {selectedLabels.map((label) => (
                    <li key={label}>{label}</li>
                  ))}
                </ul>
                {interests.consult && (
                  <div className="confirm-schedule show">
                    <p>
                      <strong>Want to lock in a time now?</strong> Grab a spot on the DXG calendar —
                      no pressure, no pitch deck. Just a conversation about your event.
                    </p>
                    <a
                      className="btn btn-primary"
                      href="https://www.dxg.agency/contact-us"
                      onClick={() => trackEvent("cta_confirm_schedule")}
                    >
                      Schedule a Strategy Call
                    </a>
                  </div>
                )}
                {interests.rfpilot && (
                  <p>RFPilot early-access details will be sent to your email as the platform moves toward release.</p>
                )}
                <p>
                  In the meantime, feel free to{" "}
                  <a
                    className="text-link"
                    href="https://www.dxg.agency/experiences-created"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    see what DXG produces
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
