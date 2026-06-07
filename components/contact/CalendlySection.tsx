"use client";

import emailjs from "@emailjs/browser";
import TypingTitle from "components/layout/TypingTitle";
import Container from "components/shared/Container";
import Reveal from "components/shared/Reveal";
import {
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  LucideIcon,
  X,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { InlineWidget } from "react-calendly";

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

const inputClass =
  "w-full rounded-lg border border-white/10 bg-[#0b1f30] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-primary/60 focus:ring-1 focus:ring-primary/30";

type Status = "idle" | "loading" | "success" | "error";

/* ── Modal ── */
function StatusModal({
  status,
  onClose,
}: {
  status: "success" | "error";
  onClose: () => void;
}) {
  const isSuccess = status === "success";
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl border bg-[#071827] p-8 text-center shadow-2xl"
        style={{
          borderColor: isSuccess
            ? "rgba(39,203,249,0.3)"
            : "rgba(239,68,68,0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/40 transition hover:text-white"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Icon */}
        <div className="mb-4 flex justify-center">
          {isSuccess ? (
            <CheckCircle size={52} className="text-primary" strokeWidth={1.5} />
          ) : (
            <XCircle size={52} className="text-red-400" strokeWidth={1.5} />
          )}
        </div>

        {/* Title */}
        <p className="text-lg font-black uppercase tracking-wide text-white">
          {isSuccess ? "Message Sent!" : "Something Went Wrong"}
        </p>

        {/* Body */}
        <p className="mt-2 text-sm leading-6 text-white/60">
          {isSuccess
            ? "Thank you for reaching out. The DXG team will be in touch with you shortly."
            : "We couldn't send your message. Please try again or email us directly at Info@dxg.agency."}
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg py-3 text-sm font-bold uppercase tracking-widest transition hover:brightness-110"
          style={{
            backgroundColor: isSuccess ? "#27cbf9" : "#ef4444",
            color: isSuccess ? "#071827" : "#fff",
          }}
        >
          {isSuccess ? "Done" : "Try Again"}
        </button>
      </div>
    </div>
  );
}

/* ── Validation ── */
type FormFields = { name: string; number: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormFields, string>>;

function validate(form: FormFields, agreed: boolean): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  else if (form.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";

  if (form.number && !/^[\d\s().+\-]{7,15}$/.test(form.number))
    errors.number = "Enter a valid phone number.";

  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address.";

  if (!form.message.trim()) errors.message = "Message is required.";
  else if (form.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";

  return errors;
}

/* ── Main Component ── */
export default function CalendlySection() {
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<FormFields>({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name as keyof FormFields]) {
      const errs = validate(updated, agreed);
      setErrors((prev) => ({ ...prev, [name]: errs[name as keyof FormFields] }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validate(form, agreed);
    setErrors((prev) => ({ ...prev, [name]: errs[name as keyof FormFields] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = { name: true, number: true, email: true, message: true };
    setTouched(allTouched);
    const errs = validate(form, agreed);
    setErrors(errs);
    if (Object.keys(errs).length > 0 || !agreed) return;
    setStatus("loading");
    try {
      await emailjs.send(
        "service_1hhoamr",
        "template_39z6ykg",
        {
          from_name: form.name,
          phone_number: form.number,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey: "AqGG9lPkRTJhUceLQ" },
      );
      setStatus("success");
      setForm({ name: "", number: "", email: "", message: "" });
      setErrors({});
      setTouched({});
      setAgreed(false);
    } catch {
      setStatus("error");
    }
  }

  function closeModal() {
    setStatus("idle");
}

  const fieldClass = (key: keyof FormFields) =>
    `${inputClass} ${touched[key] && errors[key] ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}`;

  return (
    <>
      {/* Status modal */}
      {(status === "success" || status === "error") && (
        <StatusModal status={status} onClose={closeModal} />
      )}

      <section className="bg-black py-8 lg:py-16">
        <Container className="max-w-[1260px]">
          <div className="grid overflow-hidden rounded-[22px] border border-primary/15 bg-[#071827] shadow-[0_28px_90px_rgba(0,0,0,0.42)] lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex flex-col justify-between gap-10 border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              {/* Top — heading + form */}
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

                <Reveal as="p" className="mt-5 text-sm leading-6 text-white/75">
                  Choose a time to talk through your event goals, production
                  needs, and the smartest next step with the DXG team.
                </Reveal>

                {/* Contact form */}
                <form onSubmit={handleSubmit} className="mt-7 space-y-3">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={fieldClass("name")}
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1 px-1 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      name="number"
                      placeholder="Enter Number"
                      value={form.number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={fieldClass("number")}
                    />
                    {touched.number && errors.number && (
                      <p className="mt-1 px-1 text-xs text-red-400">{errors.number}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={fieldClass("email")}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1 px-1 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Enter Message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${fieldClass("message")} resize-none`}
                    />
                    {touched.message && errors.message && (
                      <p className="mt-1 px-1 text-xs text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Checkbox */}
                  <div>
                    <label className="flex cursor-pointer items-start gap-3 pt-1">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-primary"
                      />
                      <span className="text-xs leading-5 text-white/60">
                        I understand that the use of this form for communication
                        with Digital Xperience Group (DXG).
                      </span>
                    </label>
                    {!agreed && Object.keys(touched).length > 0 && (
                      <p className="mt-1 px-1 text-xs text-red-400">
                        You must agree before submitting.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-lg bg-primary py-3 text-sm font-bold uppercase tracking-widest text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {status === "loading" ? "Sending…" : "Submit"}
                  </button>
                </form>
              </div>

              {/* Bottom — social icons */}
              <div>
                <div className="border-t border-white/10 pt-5">
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
    </>
  );
}
