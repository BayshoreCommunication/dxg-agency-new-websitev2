"use client";

import { useEffect, useRef } from "react";

export default function InteractyEmbed() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    const syncHeight = () => {
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
      script.remove();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      data-interacty-wrapper
      className="min-h-[300px] w-full bg-black transition-[margin] duration-300"
    >
      <div
        ref={containerRef}
        className="remix-app w-full bg-black"
        data-hash="357a8513327a007e"
      />
    </div>
  );
}
