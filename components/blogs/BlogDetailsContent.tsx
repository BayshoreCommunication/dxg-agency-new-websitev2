import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import GetAllBlogPost from "lib/GetAllBlogPost";
import GetBlogBySlug from "lib/GetBlogBySlug";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogDetailsContent({ slug }: { slug: string }) {
  const [blog, { blogs: latestBlogs }] = await Promise.all([
    GetBlogBySlug(slug),
    GetAllBlogPost({ page: 1, limit: 7 }),
  ]);

  if (!blog) return notFound();

  const sidebarBlogs = latestBlogs.filter((b) => b.slug !== slug).slice(0, 6);

  const cleanContent = blog.content.replace(
    /\bstyle="([^"]*)"/gi,
    (_, styleBlock: string) => {
      const cleaned = styleBlock
        .split(";")
        .filter((decl) => {
          const prop = decl.trim().toLowerCase();
          return prop && !prop.startsWith("color") && !prop.startsWith("background");
        })
        .join(";")
        .trim();
      return cleaned ? `style="${cleaned}"` : "";
    },
  );

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px]">
      {/* ── Left: Main Content ── */}
      <div>
        <Reveal delay={0.05} duration={0.75}>
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/55"
          >
            <Link href="/" className="transition hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/blogs" className="transition hover:text-primary">
              Planner Insight Blog
            </Link>
            <span>/</span>
            <span className="text-primary line-clamp-1">{blog.title}</span>
          </nav>
        </Reveal>

        <Reveal
          kind="image"
          className="relative aspect-[2.15/1] overflow-hidden rounded-lg"
          delay={0.12}
          duration={0.9}
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            sizes="(min-width: 1024px) calc(100vw - 380px), 100vw"
            className="object-cover grayscale contrast-125 brightness-75 transition duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/45 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        </Reveal>

        <Reveal as="p" className="mt-8 text-sm font-semibold text-white/65" delay={0.08}>
          {blog.date}
        </Reveal>

        <TypingTitle
          as="h1"
          className="mt-4 text-4xl font-black leading-tight text-primary lg:text-5xl"
        >
          {blog.title}
        </TypingTitle>

        <div
          className="prose prose-invert max-w-none mt-6 prose-headings:text-white prose-p:text-white/90 prose-li:text-white/90 prose-a:text-primary prose-strong:text-white prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      </div>

      {/* ── Right: Sidebar ── */}
      <aside className="lg:sticky lg:top-8 lg:self-start">
        <div className="rounded-xl border border-white/10 bg-[#071827] p-6">
          <h3 className="text-base font-black uppercase tracking-widest text-white">
            Latest Posts
          </h3>
          <div className="mt-5 space-y-0 divide-y divide-white/10">
            {sidebarBlogs.map((item) => (
              <Link
                key={item._id}
                href={`/blogs/${item.slug}`}
                className="group flex items-start gap-4 py-4 first:pt-0 last:pb-0"
              >
                <div className="relative h-16 w-[72px] shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="72px"
                    className="object-cover grayscale contrast-125 brightness-75 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/40 mix-blend-color" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-white/40">{item.date}</p>
                  <p className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-white/85 transition group-hover:text-primary">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
