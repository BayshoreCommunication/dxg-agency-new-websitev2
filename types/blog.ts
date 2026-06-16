export type ApiBlog = {
  _id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  authorUrl: string;
  image: string;
  shortDesc: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
};

export type BlogsApiResponse = {
  blogs: ApiBlog[];
  total: number;
  totalPages: number;
  currentPage: number;
};

function formatDate(value: string): string {
  if (!value) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function normalizeApiBlog(raw: any): ApiBlog {
  return {
    _id: raw._id ?? raw.id ?? "",
    slug: raw.slug ?? "",
    title: raw.title ?? "",
    date: formatDate(raw.date ?? raw.createdAt ?? raw.publishedAt ?? ""),
    author: raw.author ?? raw.authorName ?? raw.author_name ?? "",
    authorUrl: raw.authorUrl ?? raw.authorLink ?? raw.author_url ?? "",
    image: raw.featuredImage?.image?.url ?? raw.image ?? "",
    shortDesc: raw.shortDesc ?? raw.excerpt ?? raw.description ?? "",
    content: raw.body || raw.content || raw.html || "",
    metaTitle: raw.metaTitle ?? raw.seoTitle ?? "",
    metaDescription: raw.metaDescription ?? raw.seoDescription ?? "",
  };
}
