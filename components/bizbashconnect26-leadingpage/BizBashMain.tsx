"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Award,
  Calendar,
  Camera,
  Check,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Compass,
  DoorOpen,
  Globe,
  Lock,
  MapPin,
  Palette,
  Presentation,
  Radio,
  Rocket,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import BizBashAppPreview from "components/bizbashconnect26-leadingpage/BizBashAppPreview";
import Container from "components/shared/Container";
import Reveal from "components/shared/Reveal";
import TypingTitle from "components/layout/TypingTitle";
import { trackEvent } from "./analytics";

type InterestKey = "consult" | "review" | "rfpilot" | "followup";

const INTEREST_KEYS: InterestKey[] = ["consult", "review", "rfpilot", "followup"];

const INTEREST_CARDS: {
  key: InterestKey;
  title: string;
  desc: string;
  Icon: typeof Calendar;
}[] = [
  {
    key: "consult",
    title: "Discuss an Upcoming Event",
    desc: "Schedule a working conversation about your program.",
    Icon: Calendar,
  },
  {
    key: "review",
    title: "Review an AV Proposal or Production Plan",
    desc: "Get a second set of experienced eyes before you commit.",
    Icon: ClipboardCheck,
  },
  {
    key: "rfpilot",
    title: "See RFPilot",
    desc: "Join the early-access list and see the platform first.",
    Icon: Radio,
  },
  {
    key: "followup",
    title: "Follow Up After the Show",
    desc: "Stay connected once you're back from Tampa.",
    Icon: Users,
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
    Icon: Presentation,
    title: "General Sessions",
    desc: "Strategy, staging, video, audio, lighting, show flow, and on-site leadership managed as one connected production.",
  },
  {
    Icon: DoorOpen,
    title: "Breakout Rooms",
    desc: "Consistent technical standards and support across every room — not only the main stage.",
  },
  {
    Icon: Globe,
    title: "Hybrid & Virtual Events",
    desc: "Streaming and platform support that keeps the remote audience genuinely part of the experience — not just connected.",
  },
  {
    Icon: Palette,
    title: "Creative & Environmental Design",
    desc: "Stage and environmental design that makes the event feel intentional from the moment attendees walk in.",
  },
  {
    Icon: Camera,
    title: "Content Capture",
    desc: "Professional photo and video assets that extend the value of the event after the final session.",
  },
  {
    Icon: ClipboardList,
    title: "Meeting Planning & Production Support",
    desc: "From run-of-show development to on-site coordination and post-event recaps — support through every phase.",
  },
];

const PILLARS = [
  {
    Icon: Compass,
    title: "Clarity",
    desc: "Clear scopes, responsibilities, communication, and expectations throughout the process.",
  },
  {
    Icon: ShieldCheck,
    title: "Control",
    desc: "Visibility into the decisions that drive production cost and attendee experience: venue, calendar, format, and scope. Surfaced while they can still be changed, not explained after they can't.",
  },
  {
    Icon: Rocket,
    title: "Confidence",
    desc: "An experienced team that anticipates challenges, communicates early, and remains accountable through execution.",
  },
];

const PROBLEM_POINTS = [
  {
    lead: "Proposals are built for the vendor's convenience, not for comparison.",
    rest: "Every vendor uses a different format, includes different items, and buries different assumptions in the line items.",
  },
  {
    lead: "Upstream decisions surface as downstream costs.",
    rest: "Venue infrastructure, calendar position, and session format show up in the bid as numbers nobody connects back to their cause.",
  },
  {
    lead: "Production insight arrives after the contract.",
    rest: "The people who could have flagged the expensive choices weren't in the room when those choices were made.",
  },
];

const RFP_VALUES = [
  { lead: "Guided RFP creation", rest: "turn event details into a structured AV RFP." },
  { lead: "Comparable vendor responses", rest: "see differences, exclusions, and missing items clearly." },
  {
    lead: "Investment guidance",
    rest: "a grounded frame of reference built from aggregate production data, so scope and budget are aligned before the first proposal arrives.",
  },
  { lead: "Proposal intelligence", rest: "review responses against your event's actual requirements." },
];

const NEUTRALITY_POINTS = [
  {
    lead: "Your RFP data is yours.",
    rest: "The RFPs you build, the responses you receive, and your evaluations belong to you. DXG's production team does not access or use them.",
  },
  {
    lead: "DXG never sees competing proposals.",
    rest: "Vendor responses submitted through RFPilot are visible only to the planner who issued the RFP.",
  },
  {
    lead: "RFPilot doesn't steer work to DXG.",
    rest: "The platform doesn't recommend vendors, rank DXG, or notify DXG when you issue an RFP. If you want DXG to bid, you invite us the way you'd invite anyone, and we respond on the same terms as every other vendor.",
  },
  {
    lead: "Guidance comes from aggregate data, not your vendors' pricing.",
    rest: "Budget references are built from industry-level production data, never from proposals submitted to you through the platform.",
  },
];

const CREDIBILITY_POINTS = [
  "300+ years of live event production leadership",
  "AVIXA Board of Directors service with the AV industry's global trade association",
  "2500+ general sessions produced for audiences of 50-7500 over the last 26+ years",
  "1500+ breakout room programs managed under a single technical standard",
];

const fieldClass =
  "h-11 w-full rounded-[10px] border border-transparent bg-[#223140] px-4 text-sm text-white placeholder:text-white/50 transition focus:border-primary focus:outline-none";
const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/70";
const primaryBtn =
  "btn-slide-primary inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold";
const ghostBtn =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:border-primary hover:text-primary";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function BizBashMain() {
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStarted, setFormStarted] = useState(false);
  const [utm, setUtm] = useState({
    source: "",
    medium: "",
    campaign: "",
    content: "",
    qr: "",
    originalSource: "",
  });

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
    document
      .getElementById("connectForm")
      ?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  }

  function handleFormInput() {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent("form_start");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

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

    let anyInterest = INTEREST_KEYS.some((k) => interests[k]);
    if (!anyInterest) {
      setInterests((prev) => ({ ...prev, followup: true }));
      anyInterest = true;
    }
    setInterestError(false);

    setFieldErrors(newErrors);
    setShowErrorBanner(!valid);

    if (!valid) {
      if (firstBad) (firstBad as HTMLElement).focus();
      return;
    }

    if (submitTimeRef.current) {
      submitTimeRef.current.value = new Date().toLocaleString();
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_28aeyl4",
        "template_y72vnp4",
        form,
        { publicKey: "JJbrXAjJx5I2RoK35" }
      );
      trackEvent("form_submit_success", { ...interests });
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("EmailJS Submission Error:", error);
      setShowErrorBanner(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  const allSelected = INTEREST_KEYS.every((k) => interests[k]);
  const disclosureOpen = interests.consult || interests.review;
  const selectedLabels = INTEREST_KEYS.filter((k) => interests[k]).map((k) => INTEREST_LABELS[k]);

  return (
    <main id="main">
      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-black pb-8 pt-7 lg:pb-12 lg:pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_78%_18%,rgba(46,198,245,0.18),transparent_62%)]" />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.9fr] lg:gap-16">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Meet DXG in Tampa
              </span>
              <p className="mt-3 text-sm font-medium text-white/60">
                BizBash Connect Marketplace 2026
              </p>

              <TypingTitle
                as="h1"
                className="mt-4 max-w-3xl text-3xl font-black uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl"
              >
                A Smarter Approach to <span className="text-primary">Event AV.</span>
              </TypingTitle>

              <Reveal
                as="p"
                className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:mt-6 sm:text-lg sm:leading-8"
              >
                DXG combines producer-led event production with RFPilot to give planners
                visibility into the decisions that shape AV budgets, including the ones made
                long before the RFP goes out.
              </Reveal>

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <a href="#connect" className={primaryBtn} onClick={() => trackEvent("cta_hero_connect")}>
                  Connect With DXG
                </a>
                <a href="#rfpilot" className={ghostBtn} onClick={() => trackEvent("cta_hero_rfpilot")}>
                  Explore RFPilot
                </a>
              </div>

              <p className="mt-6 flex items-center gap-2 text-xs text-white/60 sm:text-sm">
                <span className="h-px w-5 bg-primary" />
                Built for meeting planners and event marketers who expect more from their
                production partner.
              </p>
            </div>

            <Reveal
              kind="image"
              className="order-1 relative isolate flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl border border-white/15 bg-[#071929] shadow-2xl shadow-black/40 sm:aspect-[16/9] sm:rounded-3xl lg:order-2"
            >
              <Image
                src="/images/bizbashconnect26/herorightsideimage.webp"
                alt="DXG at BizBash Connect Marketplace Tampa 2026 featuring RFPilot"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 95vw"
                className="object-contain object-right-top sm:object-cover sm:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" />
              <div className="absolute inset-0 bg-primary/[0.04]" />

              <div className="relative z-10 space-y-3 p-4 sm:space-y-5 sm:p-6 lg:p-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
                    Where to find us
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white sm:mt-2 sm:text-lg">
                    BizBash Connect Marketplace, Tampa 2026
                  </p>
                </div>
                <div className="h-px w-full bg-white/15" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
                    Featuring
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white sm:mt-2 sm:text-lg">RFPilot</p>
                  <p className="text-xs text-white/70 sm:text-sm">
                    A smarter way to build and review AV RFPs.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>


      {/* EVENT CONNECTION OFFER */}
      <section id="connect" className="bg-[#0a0a0a] py-8 lg:py-10">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <TypingTitle
              as="h2"
              className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
            >
              Let&apos;s continue the conversation <span className="text-primary">after Tampa.</span>
            </TypingTitle>
            <Reveal as="p" className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              Whether you are planning an upcoming conference, evaluating an AV proposal,
              exploring RFPilot, or simply looking for a better production approach, tell us
              where we can be most useful. Select as many as apply — one submission covers
              everything.
            </Reveal>
          </div>

          <div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            role="group"
            aria-label="Select your interests"
          >
            {INTEREST_CARDS.map((card) => {
              const selected = interests[card.key];
              return (
                <button
                  key={card.key}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => handleCardClick(card.key)}
                  className={`flex flex-col items-start gap-3 rounded-xl border-2 p-5 text-left transition hover:-translate-y-1 ${
                    selected
                      ? "border-primary bg-primary/[0.08] shadow-[0_8px_24px_rgba(46,198,245,0.18)]"
                      : "border-white/10 bg-[#111] hover:border-white/25"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition ${
                      selected ? "border-primary bg-primary text-black" : "border-white/25 text-transparent"
                    }`}
                  >
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <h3 className="text-sm font-bold text-white">{card.title}</h3>
                  <p className="text-xs leading-5 text-white/60">{card.desc}</p>
                </button>
              );
            })}

            <button
              type="button"
              aria-pressed={allSelected}
              onClick={() => handleCardClick("all")}
              className={`flex items-center gap-4 rounded-xl border-2 p-5 text-left transition hover:-translate-y-1 sm:col-span-2 lg:col-span-4 ${
                allSelected
                  ? "border-primary bg-primary/[0.08] shadow-[0_8px_24px_rgba(46,198,245,0.18)]"
                  : "border-white/10 bg-[#111] hover:border-white/25"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition ${
                  allSelected ? "border-primary bg-primary text-black" : "border-white/25 text-transparent"
                }`}
              >
                <Check size={16} strokeWidth={3} />
              </span>
              <span>
                <h3 className="text-sm font-bold text-white">All of the Above</h3>
                <p className="text-xs leading-5 text-white/60">
                  Select every option — one conversation covers it all.
                </p>
              </span>
            </button>
          </div>
        </Container>
      </section>

      {/* FORM */}
      <section className="bg-black py-8 lg:py-10">
        <Container className="max-w-[900px]">
          <div className="overflow-hidden rounded-[22px] border border-primary/15 bg-[#071827] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-10">
            <form
              id="connectForm"
              ref={formRef}
              noValidate
              onInput={handleFormInput}
              onSubmit={handleSubmit}
            >
              <TypingTitle
                as="h2"
                id="formHeadline"
                className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl"
              >
                How would you like DXG to follow up?
              </TypingTitle>

              {showErrorBanner && (
                <div
                  className="mt-6 rounded-[10px] border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                  role="alert"
                >
                  Please complete the highlighted fields so we can follow up correctly.
                </div>
              )}

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="firstName">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="First_Name"
                    autoComplete="given-name"
                    required
                    className={`${fieldClass} ${fieldErrors.firstName ? "border-red-400" : ""}`}
                  />
                  {fieldErrors.firstName && (
                    <p className="mt-1 text-xs text-red-300">Enter your first name.</p>
                  )}
                </div>
                <div>
                  <label className={labelClass} htmlFor="lastName">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="Last_Name"
                    autoComplete="family-name"
                    required
                    className={`${fieldClass} ${fieldErrors.lastName ? "border-red-400" : ""}`}
                  />
                  {fieldErrors.lastName && (
                    <p className="mt-1 text-xs text-red-300">Enter your last name.</p>
                  )}
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    Work Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    className={`${fieldClass} ${fieldErrors.email ? "border-red-400" : ""}`}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-xs text-red-300">Enter a valid work email address.</p>
                  )}
                </div>
                <div>
                  <label className={labelClass} htmlFor="company">
                    Company <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="Company"
                    autoComplete="organization"
                    required
                    className={`${fieldClass} ${fieldErrors.company ? "border-red-400" : ""}`}
                  />
                  {fieldErrors.company && (
                    <p className="mt-1 text-xs text-red-300">Enter your company name.</p>
                  )}
                </div>
                <div>
                  <label className={labelClass} htmlFor="jobTitle">
                    Job Title <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="Job_Title"
                    autoComplete="organization-title"
                    required
                    className={`${fieldClass} ${fieldErrors.jobTitle ? "border-red-400" : ""}`}
                  />
                  {fieldErrors.jobTitle && (
                    <p className="mt-1 text-xs text-red-300">Enter your job title.</p>
                  )}
                </div>
              </div>

              {disclosureOpen && (
                <div className="mt-8 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-2">
                  <p className="text-xs italic leading-6 text-white/60 sm:col-span-2">
                    A few optional details help us come prepared. Skip anything you&apos;re not
                    ready to share.
                  </p>
                  <div>
                    <label className={labelClass} htmlFor="eventName">Event or Project Name</label>
                    <input type="text" id="eventName" name="Event_Name" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="eventDate">Estimated Event Date</label>
                    <input type="month" id="eventDate" name="Event_Date" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="eventLocation">Event Location</label>
                    <input
                      type="text"
                      id="eventLocation"
                      name="Event_Location"
                      placeholder="City, venue, or TBD"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="attendance">Expected Attendance</label>
                    <select id="attendance" name="Attendance" defaultValue="" className={fieldClass}>
                      <option value="">Select a range</option>
                      <option>Under 250</option>
                      <option>250 – 1,000</option>
                      <option>1,000 – 3,000</option>
                      <option>3,000 – 6,000</option>
                      <option>6,000+</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="scope">General Session &amp; Breakout Scope</label>
                    <input
                      type="text"
                      id="scope"
                      name="Session_Scope"
                      placeholder="e.g., 1 general session, 12 breakouts, hybrid stream"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="stage">Current Stage</label>
                    <select id="stage" name="Event_Stage" defaultValue="" className={fieldClass}>
                      <option value="">Select a stage</option>
                      <option>Early Planning</option>
                      <option>Building the RFP</option>
                      <option>Reviewing Proposals</option>
                      <option>Vendor Selected</option>
                      <option>Exploring Future Options</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="helpful">What would be most helpful right now?</label>
                    <textarea
                      id="helpful"
                      name="Most_Helpful"
                      rows={3}
                      className={`${fieldClass} h-auto resize-none py-3`}
                    ></textarea>
                  </div>
                </div>
              )}

              <input type="hidden" name="Selected_Interests" value={selectedLabels.join(", ")} readOnly />
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
              <input
                type="text"
                name="dxg_website"
                id="hpField"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: "absolute", left: "-9999px" }}
                aria-hidden="true"
              />

              <div className="mt-8 space-y-3 border-t border-white/10 pt-8">
                <label className="flex items-start gap-3 text-xs leading-5 text-white/70">
                  <input
                    type="checkbox"
                    id="consentRespond"
                    name="Consent_Respond"
                    value="Yes"
                    required
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-primary"
                  />
                  <span>
                    I agree that DXG may contact me about this request. See the{" "}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                      DXG Privacy Policy
                    </a>
                    . <span className="text-primary">*</span>
                  </span>
                </label>
                {/* <label className="flex items-start gap-3 text-xs leading-5 text-white/70">
                  <input
                    type="checkbox"
                    name="Consent_Marketing"
                    value="Yes"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-primary"
                  />
                  <span>Send me occasional planner insights and DXG updates by email. (Optional)</span>
                </label> */}
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${primaryBtn} w-full sm:w-auto disabled:opacity-60`}
                >
                  {isSubmitting ? "Sending..." : "Connect With DXG"}
                </button>
              </div>
            </form>
          </div>
        </Container>

        {/* SUCCESS MODAL */}
        {submitted && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-md"
            onClick={() => setSubmitted(false)}
          >
            <div
              ref={confirmRef}
              tabIndex={-1}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] overflow-y-auto w-full max-w-lg rounded-2xl border border-primary/30 bg-[#071827] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.8)] text-left sm:p-8"
            >
              <button
                onClick={() => setSubmitted(false)}
                className="absolute right-4 top-4 text-white/40 transition hover:text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Check size={26} className="text-primary" strokeWidth={2.4} />
              </div>

              <TypingTitle
                as="h2"
                className="mt-5 text-2xl font-black uppercase leading-tight text-white sm:text-3xl"
              >
                Thank you — we&apos;ll take it from here.
              </TypingTitle>

              <p className="mt-3 text-sm leading-6 text-white/70">
                Your request is on its way to the DXG team. Here&apos;s what you selected:
              </p>

              <ul className="mt-5 space-y-2">
                {selectedLabels.map((label) => (
                  <li key={label} className="flex items-start gap-2 text-sm text-white/85">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    {label}
                  </li>
                ))}
              </ul>

              {interests.consult && (
                <div className="mt-6 rounded-xl border border-primary/30 bg-primary/[0.08] p-5">
                  <p className="text-sm leading-6 text-white/85">
                    <strong className="text-white">Want to lock in a time now?</strong> Grab a
                    spot on the DXG calendar — no pressure, no pitch deck. Just a conversation
                    about your event.
                  </p>
                  <a
                    href="/contact-us"
                    className={`${primaryBtn} mt-4 text-xs`}
                    onClick={() => trackEvent("cta_confirm_schedule")}
                  >
                    Schedule a Strategy Call
                  </a>
                </div>
              )}

              {interests.rfpilot && (
                <p className="mt-4 text-sm text-white/70">
                  RFPilot early-access details will be sent to your email as the platform moves
                  toward release.
                </p>
              )}

              <p className="mt-4 text-sm text-white/70">
                In the meantime, feel free to{" "}
                <a
                  href="/experiences-created"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  see what DXG produces
                </a>
                .
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-bold uppercase tracking-widest text-black transition hover:brightness-110"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </section>



      {/* FIND DXG IN TAMPA */}
      {/* <section className="border-y border-white/10 bg-black py-5 lg:py-7">
        <Container>
          <div className="mt-2 rounded-xl border border-white/10 bg-[#111] p-6 text-center sm:p-8">
            <div className="mx-auto flex items-center justify-center gap-2">
              <MapPin size={18} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Find DXG in Tampa
              </span>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">
              Connect Marketplace One-on-Ones
            </p>
            <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">Meet with Ace and Suley</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              Ace and Suley are taking meetings throughout the Marketplace. Request DXG
              through the Connect appointment system, or use the form below and we&apos;ll
              confirm a time before the show.
            </p>
          </div>
        </Container>
      </section> */}

      {/* CREDIBILITY STRIP */}
      <section className="bg-[#0a0a0a] py-5 lg:py-7">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-2">
                <Award size={18} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  Production Leadership You Can Verify
                </span>
              </div>
              <TypingTitle
                as="h2"
                className="mt-3 text-2xl font-black uppercase leading-tight text-white sm:text-3xl"
              >
                DXG is led by producers, not project coordinators.
              </TypingTitle>
              <Reveal as="p" className="mt-4 text-base leading-7 text-white/70">
                The team behind your event has been producing conferences, general sessions,
                and multi-room programs together since 2006.
              </Reveal>
              <a
                href="/experiences-created"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline"
              >
                See the work: Experiences We&apos;ve Created
              </a>
            </div>
            <Reveal kind="list" className="grid gap-3">
              {CREDIBILITY_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-primary/20 bg-[#081624] p-4 text-sm leading-6 text-white/80"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      

      <BizBashAppPreview />

      {/* THE PROBLEM */}
      {/* <section id="smarter" className="bg-[#0a0a0a] py-8 lg:py-10">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              You Know the Process
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
            >
              You know the process. The leverage is earlier than the RFP.
            </TypingTitle>
            <Reveal as="p" className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              You&apos;ve run enough procurements to know the mechanics cold. Here is what
              rarely gets said out loud: by the time your AV RFP goes out, most of the budget
              has already been decided. The venue you contracted, the dates you locked, and the
              format your stakeholders chose set the structure months earlier. The RFP
              negotiates the margins.
            </Reveal>
            <Reveal as="p" className="mt-4 text-base font-semibold leading-7 text-white sm:text-lg" delay={0.06}>
              That&apos;s not a knowledge gap on your side. It&apos;s a visibility gap in how
              the industry works.
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {PROBLEM_POINTS.map((item) => (
              <Reveal
                key={item.lead}
                as="div"
                className="rounded-xl border border-white/10 bg-[#111] p-5"
              >
                <p className="text-sm leading-6 text-white/70">
                  <span className="font-semibold text-white">{item.lead}</span> {item.rest}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal
            as="p"
            className="mt-8 max-w-2xl border-l-2 border-primary/40 pl-4 text-sm leading-6 text-white/70"
          >
            DXG works with planners at the point where those decisions are still open, and
            brings production-side visibility into the ones that aren&apos;t.
          </Reveal>
        </Container>
      </section> */}

      {/* RFPILOT */}
      <section id="rfpilot" className="bg-black py-8 lg:py-10">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Introducing RFPilot
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
            >
              Build the RFP. Understand the responses. Make the decision with confidence.
            </TypingTitle>
            <Reveal as="p" className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              RFPilot is being developed to simplify the AV RFP process for meeting planners —
              from organizing event requirements to reviewing the proposals vendors submit.
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {RFP_VALUES.map((item) => (
              <Reveal
                key={item.lead}
                as="div"
                className="rounded-xl border border-primary/20 bg-[#081624] p-5"
              >
                <p className="text-sm leading-6 text-white/70">
                  <span className="font-semibold text-white">{item.lead}</span> — {item.rest}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal
            as="p"
            className="mt-8 max-w-2xl border-l-2 border-primary/40 pl-4 text-sm italic leading-6 text-white/60"
          >
            RFPilot is currently being developed by Digital Xperience Group. Features and
            availability may evolve as the platform moves through testing and early access.
          </Reveal>

          {/* NEUTRALITY STATEMENT */}
          <Reveal
            as="div"
            className="mx-auto mt-10 max-w-3xl rounded-2xl border border-primary/20 bg-[#081624] p-6 sm:p-8"
          >
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                How RFPilot Handles Your Data, and Where DXG Stands
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/70">
              RFPilot is built by DXG, an AV production company. We&apos;re direct about what
              that means, because your procurement team will ask. They should.
            </p>
            <ul className="mt-5 space-y-4">
              {NEUTRALITY_POINTS.map((point) => (
                <li key={point.lead} className="flex items-start gap-3 text-sm leading-6 text-white/70">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span>
                    <span className="font-semibold text-white">{point.lead}</span> {point.rest}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-white/70">
              If your sourcing or compliance team wants these commitments in writing for their
              file, ask. We&apos;ll provide them.
            </p>
          </Reveal>

          <div className="mt-8 text-center">
            <button type="button" className={primaryBtn} onClick={handleRfpilotPreselect}>
              Join the RFPilot Early-Access List
            </button>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="bg-[#0a0a0a] py-8 lg:py-10">
        <Container>
          <div className="max-w-2xl text-left sm:text-center sm:mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Producer-Led Event Production
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
            >
              One production partner. Every part of the event experience.
            </TypingTitle>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <article
                key={cap.title}
                className="overview-box group rounded-2xl bg-[#081624] p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/50 bg-[#0b2237]">
                  <cap.Icon size={22} className="text-primary" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-base font-bold text-white">{cap.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{cap.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* PRODUCER-LED DIFFERENCE */}
      <section className="bg-black py-8 lg:py-10">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              The DXG Difference
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
            >
              A producer-led approach focused on real-world execution.
            </TypingTitle>
            <Reveal as="p" className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              DXG approaches event AV from a producer&apos;s perspective. Technology supports the
              experience, but planning, communication, accountability, and on-site leadership are
              what keep the event on track.
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {PILLARS.map((pillar) => (
              <Reveal
                key={pillar.title}
                as="div"
                className="rounded-xl border-t-2 border-primary bg-[#111] p-6"
              >
                <pillar.Icon size={26} className="text-primary" strokeWidth={2} />
                <h3 className="mt-4 text-lg font-bold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{pillar.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WHO YOU'LL MEET IN TAMPA */}
      <section className="bg-[#0a0a0a] py-8 lg:py-10">
        <Container className="max-w-7xl">
          <div className="text-left sm:text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Who You&apos;ll Meet in Tampa
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
            >
              The people taking your meeting.
            </TypingTitle>
          </div>

          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal as="div" className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#111] p-5 sm:p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full border-2 border-primary">
                    <Image
                      src="/images/home/ace-founder/founderavtar4.png"
                      alt="Wallace &quot;Ace&quot; Johnson"
                      fill
                      className="object-cover"
                    />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                      Wallace &quot;Ace&quot; Johnson, CTS
                    </h3>
                    <p className="mt-0.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-primary">
                      Executive Technical Producer
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-5 sm:leading-6 text-white/70">
                  Twenty-five years producing corporate and association events worldwide. Former
                  AVIXA Board of Directors member and longtime industry educator. Speaking at the
                  Innovation Forum on the upstream decisions that set AV budgets before
                  procurement begins.
                </p>
              </div>
            </Reveal>
            <Reveal as="div" className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#111] p-5 sm:p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40" delay={0.06}>
              <div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full border-2 border-primary">
                    <Image
                      src="/images/home/ace-founder/suley.png"
                      alt="Suley Usman"
                      fill
                      className="object-cover"
                    />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                      Suley Usman
                    </h3>
                    <p className="mt-0.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-primary">
                      Vice President, Audience Engagement
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-5 sm:leading-6 text-white/70">
                  Focused on creating engaging experiences that connect technology, people, and business outcomes.
                </p>
              </div>
            </Reveal>

            <Reveal as="div" className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#111] p-5 sm:p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40" delay={0.12}>
              <div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full border-2 border-primary">
                    <Image
                      src="/images/home/ace-founder/Adam Zavodny.png"
                      alt="Adam Zavodny"
                      fill
                      className="object-cover"
                    />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                      Adam Zavodny
                    </h3>
                    <p className="mt-0.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-primary">
                      VP of Technology
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-5 sm:leading-6 text-white/70">
                  With a quarter century in live events, Adam Zavodny is a Technical Director whose work spans content creation, experience design, and technical direction for clients including Microsoft, Bank of America, M&T Bank, and White House Communications. He operates across the full arc of an event, shaping the creative concept and visual story, then engineering the technical design that makes it land cleanly in the room. That blend of creative instinct and technical command is the through-line on every stage he&apos;s touched.
                </p>
              </div>
            </Reveal>
            <Reveal as="div" className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#111] p-5 sm:p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40" delay={0.18}>
              <div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full border-2 border-primary">
                    <Image
                      src="/images/home/ace-founder/Eric Branch.png"
                      alt="Eric Branch"
                      fill
                      className="object-cover"
                    />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                      Eric Branch
                    </h3>
                    <p className="mt-0.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-primary">
                      Creative Director
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-5 sm:leading-6 text-white/70">
                  With more than two decades in event production, Eric Branch works at the intersection of creative vision and technical execution - designing and delivering experiences for some of the world&apos;s most recognized names and iconic stages, including production for four U.S. Presidents. His command spans the full production spectrum, from filmmaking, audio engineering, and lighting to animation, 3D modeling, and staging.
                </p>
              </div>
            </Reveal>





          </div>

          <Reveal as="p" className="mt-8 text-center text-sm leading-6 text-white/60">
            Our team is taking one-on-one meetings throughout Connect Marketplace. Request DXG
            through the Connect appointment system, or use the form below to lock a time.
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
