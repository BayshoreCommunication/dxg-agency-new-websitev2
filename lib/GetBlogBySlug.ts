import { ApiBlog, normalizeApiBlog } from "types/blog";

export default async function GetBlogBySlug(slug: string): Promise<ApiBlog | null> {
  try {
    const res = await fetch(
      `https://backend-dxgwebsite.vercel.app/site/blog/${slug}`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) return null;

    const data = await res.json();
    const raw = data.data ?? data;
    return normalizeApiBlog(raw);
  } catch {
    return null;
  }
}
