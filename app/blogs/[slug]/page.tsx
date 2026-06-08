import { Suspense } from "react";
import Container from "components/shared/Container";
import PageBanner from "components/shared/PageBanner";
import BlogDetailsContent from "components/blogs/BlogDetailsContent";
import BlogDetailsSkeleton from "components/blogs/BlogDetailsSkeleton";
import GetBlogBySlug from "lib/GetBlogBySlug";

export const revalidate = 60;

type Props = {
  params: { slug: string };
};

function toWords(text: string, max: number): string {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= max) return words.join(" ");
  return words.slice(0, max).join(" ") + "…";
}

const SITE_URL = "https://dxg.agency";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

export async function generateMetadata({ params }: Props) {
  const blog = await GetBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | DXG Digital",
      description: "No blog post available.",
    };
  }

  const rawDescription =
    blog.metaDescription ||
    blog.shortDesc ||
    blog.content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

  const description = toWords(rawDescription, 50);
  const pageTitle = `${blog.metaTitle || blog.title} | DXG Digital`;
  const ogImage = blog.image?.startsWith("http") ? blog.image : DEFAULT_OG_IMAGE;

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: blog.title }],
      url: `${SITE_URL}/blogs/${blog.slug}`,
      type: "article",
      siteName: "DXG Agency",
    },
  };
}

export default function BlogDetailsPage({ params }: Props) {
  return (
    <div className="bg-black text-white">
      <PageBanner
        title="Blog Details"
        backgroundImage="/images/banners/planner-insight-blog-banner.png"
        breadcrumbParent={{ label: "Planner Insight Blog", path: "/blogs" }}
      />

      <section className="py-16 lg:py-24">
        <Container>
          <Suspense fallback={<BlogDetailsSkeleton />}>
            <BlogDetailsContent slug={params.slug} />
          </Suspense>
        </Container>
      </section>
    </div>
  );
}
