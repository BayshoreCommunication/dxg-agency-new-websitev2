import Container from "components/shared/Container";

function BlogCardSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Image */}
      <div className="aspect-[1.52/1] w-full rounded-sm bg-white/10" />

      {/* Date */}
      <div className="mt-5 h-3.5 w-24 rounded bg-white/10" />

      {/* Title */}
      <div className="mt-3 space-y-2">
        <div className="h-6 w-full rounded bg-white/10" />
        <div className="h-6 w-4/5 rounded bg-white/10" />
      </div>

      {/* Description */}
      <div className="mt-4 space-y-2">
        <div className="h-4 w-full rounded bg-white/10" />
        <div className="h-4 w-full rounded bg-white/10" />
        <div className="h-4 w-2/3 rounded bg-white/10" />
      </div>

      {/* Button */}
      <div className="mt-6 h-9 w-32 rounded-full bg-white/10" />
    </div>
  );
}

export default function BlogsLoading() {
  return (
    <div className="bg-black">
      {/* Banner skeleton */}
      <div className="h-[220px] w-full animate-pulse bg-white/5 lg:h-[280px]" />

      <section className="py-8 lg:py-16">
        <Container>
          <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
