import { ImageResponse } from "next/og";
import GetBlogBySlug from "lib/GetBlogBySlug";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: { slug: string };
};

const SITE_URL = "https://www.dxg.agency";

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

export default async function Image({ params }: Props) {
  const blog = await GetBlogBySlug(params.slug);

  const title = blog?.title ?? "DXG Agency Blog";
  const rawDesc = blog
    ? stripHtml(blog.metaDescription || blog.shortDesc || blog.content)
    : "";
  const description = toWords(rawDesc, 22);

  const bgImage = blog?.image
    ? blog.image.startsWith("http")
      ? blog.image
      : `${SITE_URL}${blog.image}`
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          background: "#0a0a0a",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Featured image background */}
        {bgImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bgImage}
            alt=""
            style={{
              position: "absolute",
              inset: "0",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        )}

        {/* Gradient overlay — dark at bottom for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.93) 100%)",
          }}
        />

        {/* DXG brand badge — top left */}
        <div
          style={{
            position: "absolute",
            top: "44px",
            left: "56px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              background: "#f59e0b",
              color: "#000",
              fontWeight: 800,
              fontSize: "17px",
              padding: "5px 14px",
              borderRadius: "4px",
              letterSpacing: "0.06em",
            }}
          >
            DXG
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "15px",
              letterSpacing: "0.12em",
              fontWeight: 600,
            }}
          >
            AGENCY
          </div>
        </div>

        {/* Text content — pinned to bottom */}
        <div
          style={{
            position: "relative",
            padding: "0 56px 52px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {/* Title */}
          <div
            style={{
              color: "#ffffff",
              fontSize: title.length > 60 ? "42px" : "52px",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: "1040px",
            }}
          >
            {title}
          </div>

          {/* Description */}
          {description && (
            <div
              style={{
                color: "rgba(255,255,255,0.70)",
                fontSize: "22px",
                lineHeight: 1.5,
                maxWidth: "900px",
              }}
            >
              {description}
            </div>
          )}

          {/* Domain watermark */}
          <div
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "14px",
              letterSpacing: "0.06em",
              marginTop: "6px",
            }}
          >
            dxg.agency
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
