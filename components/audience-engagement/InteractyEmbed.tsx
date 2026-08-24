"use client";

import { useEffect, useRef, useState } from "react";
import { preconnect, preload } from "react-dom";

type InteractyEmbedProps = {
  compactOpeningSlide?: boolean;
  projectHash?: string;
  scrollOffset?: string;
};

type InteractyEventPayload = {
  top?: unknown;
};

type InteractyEventHandler = (
  eventName: string,
  payload?: InteractyEventPayload,
  context?: unknown,
) => void;

const DEFAULT_PROJECT_HASH = "357a8513327a007e";

export default function InteractyEmbed({
  compactOpeningSlide = true,
  projectHash = DEFAULT_PROJECT_HASH,
  scrollOffset,
}: InteractyEmbedProps) {
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
    let scrollCorrectionTimer: number | undefined;
    const handleIframeLoad = () => setIsLoaded(true);

    const interactyWindow = window as typeof window & {
      onInteractyEvent?: InteractyEventHandler;
    };
    const previousInteractyEventHandler = interactyWindow.onInteractyEvent;
    const handleInteractyEvent: InteractyEventHandler = (
      eventName,
      payload,
      context,
    ) => {
      if (
        eventName === "SCROLL_PARENT" &&
        typeof payload?.top === "number" &&
        scrollOffset
      ) {
        const requestedTop = payload.top;
        window.clearTimeout(scrollCorrectionTimer);

        // Interacty schedules its own smooth parent scroll 50ms after this
        // event. Run immediately after it and include the fixed-header offset.
        scrollCorrectionTimer = window.setTimeout(() => {
          const offset = Number.parseFloat(
            window.getComputedStyle(wrapper).scrollMarginTop,
          );

          window.scrollTo({
            top: Math.max(
              0,
              requestedTop - (Number.isFinite(offset) ? offset : 0),
            ),
            left: window.scrollX,
            behavior: "instant",
          });
        }, 50);
      }

      previousInteractyEventHandler?.(eventName, payload, context);
    };

    interactyWindow.onInteractyEvent = handleInteractyEvent;

    const syncHeight = () => {
      const iframe = wrapper.querySelector<HTMLIFrameElement>(
        "#remix-iframe, iframe",
      );
      if (iframe && iframe !== trackedIframe) {
        trackedIframe = iframe;
        if (scrollOffset) iframe.style.scrollMarginTop = scrollOffset;
        iframe.addEventListener("load", handleIframeLoad, { once: true });
      }

      const activityHeight = Math.ceil(
        Number.parseFloat(container.style.height) ||
          container.getBoundingClientRect().height,
      );
      if (!activityHeight) return;

      // Interacty updates the container height as users move between screens.
      // Mirror it on the wrapper so shorter and taller questions both occupy
      // exactly the space reported by the embed without clipping content.
      const nextHeight = `${activityHeight}px`;
      if (wrapper.style.minHeight !== nextHeight) {
        wrapper.style.minHeight = nextHeight;
      }

      // The opening slide includes a large decorative footer. Compact only
      // that short screen; longer activity screens retain their full height.
      const openingCrop =
        compactOpeningSlide && activityHeight < 1400
          ? Math.min(110, activityHeight * 0.12)
          : 0;
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

    const resizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(syncHeight);
    });
    resizeObserver.observe(container);

    const script = document.createElement("script");
    script.src = "https://p.interacty.me/l.js";
    script.async = true;
    container.appendChild(script);
    window.addEventListener("resize", syncHeight);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncHeight);
      window.clearTimeout(scrollCorrectionTimer);
      if (interactyWindow.onInteractyEvent === handleInteractyEvent) {
        interactyWindow.onInteractyEvent = previousInteractyEventHandler;
      }
      trackedIframe?.removeEventListener("load", handleIframeLoad);
      script.remove();
    };
  }, [compactOpeningSlide, projectHash, scrollOffset]);

  return (
    <div
      ref={wrapperRef}
      data-interacty-wrapper
      className="relative min-h-[300px] w-full bg-black transition-[margin] duration-300"
      style={{ scrollMarginTop: scrollOffset }}
    >
      <div
        ref={containerRef}
        className="remix-app w-full bg-black"
        data-hash={projectHash}
        style={{ scrollMarginTop: scrollOffset }}
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
