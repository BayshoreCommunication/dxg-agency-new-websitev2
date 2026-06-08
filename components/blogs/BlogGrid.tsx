import GetAllBlogPost from "lib/GetAllBlogPost";
import BlogListCard from "components/blogs/BlogListCard";
import Pagination from "components/blogs/Pagination";

export default async function BlogGrid({ page }: { page: number }) {
  const { blogs, totalPages, currentPage } = await GetAllBlogPost({ page, limit: 9 });

  return (
    <>
      {blogs.length > 0 ? (
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogListCard
              key={blog._id}
              blog={blog}
              revealDelay={Math.min(index * 0.08, 0.24)}
            />
          ))}
        </div>
      ) : (
        <p className="py-24 text-center text-white/50">No blog posts found.</p>
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blogs" />
    </>
  );
}
