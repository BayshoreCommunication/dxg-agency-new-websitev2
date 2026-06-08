"use client";

import { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { CheckCircle, X, XCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

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
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/40 transition hover:text-white"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="mb-4 flex justify-center">
          {isSuccess ? (
            <CheckCircle size={52} className="text-primary" strokeWidth={1.5} />
          ) : (
            <XCircle size={52} className="text-red-400" strokeWidth={1.5} />
          )}
        </div>

        <p className="text-lg font-black uppercase tracking-wide text-white">
          {isSuccess ? "Subscribed!" : "Something Went Wrong"}
        </p>

        <p className="mt-2 text-sm leading-6 text-white/60">
          {isSuccess
            ? "Thank you for joining our newsletter. We'll keep you updated with the latest insights."
            : "We couldn't process your subscription. Please try again or email us at Info@dxg.agency."}
        </p>

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

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [agreedTouched, setAgreedTouched] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAgreedTouched(true);
    if (!agreed) return;

    setStatus("loading");
    try {
      await emailjs.send(
        "service_1hhoamr",
        "template_3aabfhp",
        { user_email: email },
        { publicKey: "AqGG9lPkRTJhUceLQ" },
      );
      setStatus("success");
      setEmail("");
      setAgreed(false);
      setAgreedTouched(false);
    } catch {
      setStatus("error");
    }
  }

  function closeModal() {
    setStatus("idle");
  }

  return (
    <>
      {(status === "success" || status === "error") && (
        <StatusModal status={status} onClose={closeModal} />
      )}

      <div className="w-full max-w-xl">
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            disabled={status === "loading"}
            className="btn-slide-primary flex h-14 items-center justify-center rounded-full px-8 text-sm font-semibold disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Subscribe"}
          </button>
        </form>

        {/* Checkbox */}
        <div className="mt-5">
          <label className="flex cursor-pointer items-start gap-3 text-sm text-white/70">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 accent-primary"
            />
            <span>
              I&apos;m accept the{" "}
              <Link href="/terms" className="underline underline-offset-4">
                Terms & Conditions
              </Link>
            </span>
          </label>
          {agreedTouched && !agreed && (
            <p className="mt-1 px-1 text-xs text-red-400">
              You must accept the Terms & Conditions.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
