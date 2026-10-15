"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-md border border-gray-200 bg-white">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-sm font-medium"
      >
        {q}
        <Plus
          className={`h-4 w-4 shrink-0 text-[#1458f5] transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      {isOpen && <p className="px-4 pb-4 text-sm leading-relaxed text-gray-500">{a}</p>}
    </div>
  );
};

export default FAQItem;
