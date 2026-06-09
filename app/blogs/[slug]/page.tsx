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

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toWords(text: string, max: number): string {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= max) return words.join(" ");
  return words.slice(0, max).join(" ") + "…";
}

const SITE_URL = "https://www.dxg.agency";

export async function generateMetadata({ params }: Props) {
  const blog = await GetBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | DXG Digital",
      description: "No blog post available.",
    };
  }

  const rawDescription = stripHtml(
    blog.metaDescription || blog.shortDesc || blog.content
  );
  const description = toWords(rawDescription, 50);

  return {
    title: blog.metaTitle || blog.title,
    description,
    alternates: {
      canonical: `${SITE_URL}/blogs/${blog.slug}`,
    },
    openGraph: {
      title: blog.metaTitle || blog.title,
      description,
      images: blog.image || undefined,
      url: `${SITE_URL}/blogs/${blog.slug}`,
      type: "article",
      site_name: "DXG Agency",
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
