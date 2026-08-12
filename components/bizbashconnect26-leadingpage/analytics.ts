// WEB TEAM: replace trackEvent's body with GA4 / Zoho PageSense calls.
// Events fired: cta clicks, interest selections, form_start, form_submit_success, scheduling clicks.
export function trackEvent(name: string, detail?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, detail: detail || {} });
}
