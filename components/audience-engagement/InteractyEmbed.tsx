"use client";

import { useEffect, useRef, useState } from "react";
import { preconnect, preload } from "react-dom";

export default function InteractyEmbed() {
  preconnect("https://p.interacty.me");
  preconnect("https://interacty.me");
  preload("https://p.interacty.me/l.js", { as: "script" });

  const [isLoaded, setIsLoaded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    let trackedIframe: HTMLIFrameElement | null = null;
    const handleIframeLoad = () => setIsLoaded(true);

    const syncHeight = () => {
      const iframe = wrapper.querySelector<HTMLIFrameElement>("#remix-iframe");
      if (iframe && iframe !== trackedIframe) {
        trackedIframe = iframe;
        iframe.addEventListener("load", handleIframeLoad, { once: true });
      }

      const activityHeight = Number.parseFloat(container.style.height);
      if (!activityHeight) return;

      // The opening slide includes a large decorative footer. Compact only
      // that short screen; longer activity screens retain their full height.
      const openingCrop =
        activityHeight < 1400 ? Math.min(110, activityHeight * 0.12) : 0;
      const nextMargin = `${Math.round(-openingCrop)}px`;
      if (wrapper.style.marginBottom !== nextMargin) {
        wrapper.style.marginBottom = nextMargin;
      }
    };

    const observer = new MutationObserver(() => {
      window.requestAnimationFrame(syncHeight);
    });

    observer.observe(wrapper, {
      attributes: true,
      attributeFilter: ["height", "style"],
      childList: true,
      subtree: true,
    });

    const script = document.createElement("script");
    script.src = "https://p.interacty.me/l.js";
    script.async = true;
    container.appendChild(script);
    window.addEventListener("resize", syncHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeight);
      trackedIframe?.removeEventListener("load", handleIframeLoad);
      script.remove();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      data-interacty-wrapper
      className="relative min-h-[300px] w-full bg-black transition-[margin] duration-300"
    >
      <div
        ref={containerRef}
        className="remix-app w-full bg-black"
        data-hash="357a8513327a007e"
      />
      <div
        aria-live="polite"
        aria-hidden={isLoaded}
        className={`pointer-events-none absolute inset-0 z-10 flex min-h-[300px] items-center justify-center bg-black transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center gap-4 text-primary">
          <span className="h-9 w-9 animate-spin rounded-full border-2 border-primary/25 border-t-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.22em]">
            Loading activity
          </span>
        </div>
      </div>
    </div>
  );
}
