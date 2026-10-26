import { Suspense } from "react";
import Container from "components/shared/Container";
import PageBanner from "components/shared/PageBanner";
import LetsTalkSection from "components/shared/LetsTalkSection";
import BlogGrid from "components/blogs/BlogGrid";
import BlogGridSkeleton from "components/blogs/BlogGridSkeleton";

import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "DXG Blogs | Event Production Insights & Creative Ideas",
  description:
    "Explore DXG Agency blogs on event production, audiovisual design, and live experiences. Get insights, ideas, and trends to elevate your events.",
  alternates: {
    canonical: "https://www.dxg.agency/blogs",
  },
  openGraph: {
    title: "DXG Blogs | Event Production Insights & Creative Ideas",
    description:
      "Explore DXG Agency blogs on event production, audiovisual design, and live experiences. Get insights, ideas, and trends to elevate your events.",
    url: "https://www.dxg.agency/blogs",
  },
  twitter: {
    card: "summary_large_image",
    title: "DXG Blogs | Event Production Insights & Creative Ideas",
    description:
      "Explore DXG Agency blogs on event production, audiovisual design, and live experiences. Get insights, ideas, and trends to elevate your events.",
  },
};

type Props = {
  searchParams: { page?: string };
};

export default function BlogsPage({ searchParams }: Props) {
  const page = Math.max(1, Number(searchParams.page) || 1);

  return (
    <div>
      <PageBanner
        title="Planner Insight Blog"
        backgroundImage="/images/banners/planner-insight-blog-banner.png"
      />

      <section className="bg-black py-8 lg:py-16">
        <Container>
          <Suspense key={page} fallback={<BlogGridSkeleton />}>
            <BlogGrid page={page} />
          </Suspense>

          <LetsTalkSection />
        </Container>
      </section>
    </div>
  );
}
