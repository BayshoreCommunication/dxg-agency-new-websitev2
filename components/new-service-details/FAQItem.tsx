"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

/* `dark` switches to the site's black/brand theme; the light version is the default */
const FAQItem = ({ q, a, dark = false }: { q: string; a: string; dark?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={
        dark
          ? "rounded-lg border border-primary/20 bg-[#081624] text-white"
          : "rounded-md border border-gray-200 bg-white"
      }
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-sm font-medium"
      >
        {q}
        <Plus
          className={`h-4 w-4 shrink-0 transition-transform ${
            dark ? "text-primary" : "text-[#1458f5]"
          } ${isOpen ? "rotate-45" : ""}`}
        />
      </button>
      {isOpen && (
        <p
          className={`px-4 pb-4 text-sm leading-relaxed ${
            dark ? "text-white/70" : "text-gray-500"
          }`}
        >
          {a}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
