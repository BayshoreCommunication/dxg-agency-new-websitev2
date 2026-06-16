import { BlogsApiResponse, normalizeApiBlog } from "types/blog";

interface Params {
  page?: number;
  limit?: number;
}

export default async function GetAllBlogPost(
  params?: Params,
): Promise<BlogsApiResponse> {
  const page = Math.max(1, params?.page ?? 1);
  const limit = params?.limit ?? 9;

  const url = new URL("https://backend-dxgwebsite.vercel.app/site/blog");
  url.searchParams.set("page", page.toString());
  url.searchParams.set("limit", limit.toString());

  try {
    const res = await fetch(url.toString(), { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status} from ${url.toString()}`);

    const data = await res.json();
    console.log("[GetAllBlogPost] raw response keys:", Object.keys(data));

    const raw: unknown[] = Array.isArray(data)
      ? data
      : (data.data ?? data.blogs ?? data.posts ?? data.items ?? data.results ?? []);

    const pagination = data.pagination ?? {};

    return {
      blogs: raw.map(normalizeApiBlog),
      total: pagination.totalBlogs ?? data.total ?? raw.length,
      totalPages: pagination.totalPages ?? data.totalPages ?? 1,
      currentPage: pagination.currentPage ?? data.page ?? page,
    };
  } catch (err) {
    console.error("[GetAllBlogPost] failed:", err);
    return { blogs: [], total: 0, totalPages: 0, currentPage: page };
  }
}
