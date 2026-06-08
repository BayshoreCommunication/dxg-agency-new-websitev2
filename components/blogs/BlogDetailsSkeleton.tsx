function SidebarItemSkeleton() {
  return (
    <div className="flex animate-pulse items-start gap-4 py-4 first:pt-0 last:pb-0">
      <div className="h-16 w-[72px] shrink-0 rounded-md bg-white/10" />
      <div className="flex-1 space-y-2 pt-1">
        <div className="h-3 w-16 rounded bg-white/10" />
        <div className="h-4 w-full rounded bg-white/10" />
        <div className="h-4 w-4/5 rounded bg-white/10" />
      </div>
    </div>
  );
}

export default function BlogDetailsSkeleton() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px]">
      {/* Left */}
      <div className="animate-pulse">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-3.5 w-10 rounded bg-white/10" />
          <div className="h-3.5 w-2 rounded bg-white/10" />
          <div className="h-3.5 w-28 rounded bg-white/10" />
          <div className="h-3.5 w-2 rounded bg-white/10" />
          <div className="h-3.5 w-40 rounded bg-white/10" />
        </div>

        <div className="aspect-[2.15/1] w-full rounded-lg bg-white/10" />

        <div className="mt-8 h-3.5 w-28 rounded bg-white/10" />

        <div className="mt-4 space-y-3">
          <div className="h-10 w-full rounded bg-white/10" />
          <div className="h-10 w-3/4 rounded bg-white/10" />
        </div>

        <div className="mt-8 space-y-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-4 rounded bg-white/10"
              style={{ width: i % 5 === 4 ? "55%" : "100%" }}
            />
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-4 rounded bg-white/10"
              style={{ width: i % 4 === 3 ? "65%" : "100%" }}
            />
          ))}
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="lg:sticky lg:top-8 lg:self-start">
        <div className="rounded-xl border border-white/10 bg-[#071827] p-6">
          <div className="h-4 w-24 animate-pulse rounded bg-white/10" />
          <div className="mt-5 divide-y divide-white/10">
            {Array.from({ length: 6 }).map((_, i) => (
              <SidebarItemSkeleton key={i} />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
