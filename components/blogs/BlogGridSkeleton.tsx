function BlogCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[1.52/1] w-full rounded-sm bg-white/10" />
      <div className="mt-5 h-3.5 w-24 rounded bg-white/10" />
      <div className="mt-3 space-y-2">
        <div className="h-6 w-full rounded bg-white/10" />
        <div className="h-6 w-4/5 rounded bg-white/10" />
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-4 w-full rounded bg-white/10" />
        <div className="h-4 w-full rounded bg-white/10" />
        <div className="h-4 w-2/3 rounded bg-white/10" />
      </div>
      <div className="mt-6 h-9 w-32 rounded-full bg-white/10" />
    </div>
  );
}

export default function BlogGridSkeleton() {
  return (
    <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 9 }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}
