import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  basePath?: string;
};

function pageRange(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "…")[] = [1];

  if (current > 3) pages.push("…");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("…");

  pages.push(total);
  return pages;
}

export default function Pagination({ currentPage, totalPages, basePath = "/blogs" }: Props) {
  if (totalPages <= 1) return null;

  const pages = pageRange(currentPage, totalPages);

  const navBtnBase =
    "flex h-10 w-10 items-center justify-center rounded-full border text-sm transition";
  const active = "bg-primary border-primary text-black font-bold";
  const inactive = "border-white/15 text-white/60 hover:border-primary hover:text-primary";
  const disabled = "border-white/10 text-white/20 cursor-not-allowed pointer-events-none";

  return (
    <div className="mt-16 flex items-center justify-center gap-2">
      {/* Prev */}
      {currentPage > 1 ? (
        <Link href={`${basePath}?page=${currentPage - 1}`} className={`${navBtnBase} ${inactive}`}>
          <ChevronLeft size={16} />
        </Link>
      ) : (
        <span className={`${navBtnBase} ${disabled}`}>
          <ChevronLeft size={16} />
        </span>
      )}

      {/* Pages */}
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`ellipsis-${i}`} className="px-1 text-sm text-white/30">
            …
          </span>
        ) : (
          <Link
            key={p}
            href={`${basePath}?page=${p}`}
            className={`${navBtnBase} ${p === currentPage ? active : inactive}`}
          >
            {p}
          </Link>
        ),
      )}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link href={`${basePath}?page=${currentPage + 1}`} className={`${navBtnBase} ${inactive}`}>
          <ChevronRight size={16} />
        </Link>
      ) : (
        <span className={`${navBtnBase} ${disabled}`}>
          <ChevronRight size={16} />
        </span>
      )}
    </div>
  );
}
