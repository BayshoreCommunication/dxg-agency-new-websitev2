// app/sitemap.ts

import type { MetadataRoute } from "next";

import { siteUrl } from "../lib/site";
import { problemServices } from "../data/problemServices";
// Experiences Created pages temporarily off; uncomment to restore.
// import { caseStudies } from "../data/caseStudies";
import { blogs as localBlogs } from "../data/blogs";
import GetAllBlogPost from "../lib/GetAllBlogPost";

export const revalidate = 3600;

type BlogSlugEntry = { slug: string; lastModified?: string };

// Blogs live in the backend; pull every slug with one large request.
async function getBlogEntries(): Promise<BlogSlugEntry[]> {
  try {
    const api = await GetAllBlogPost({ limit: 1000 });
    const fromApi = api.blogs
      .filter((b) => b.slug)
      .map((b) => ({ slug: b.slug, lastModified: b.date }));

    if (fromApi.length > 0) return fromApi;
  } catch {
    // Fall through to local seed data below.
  }
  return localBlogs.map((b) => ({ slug: b.slug, lastModified: b.date }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/blogs",
    // "/experiences-created",
    "/difference",
    "/why-dxg",
    "/our-process",
    "/contact-us",
    "/privacy-policy",
    "/terms-of-use",
    "/audience-engagement",
    "/audience-experience",
    "/bizbashconnect26",
    "/rfpilot-event",
    "/attendee-engagement",
    "/audiovisual-production",
    "/event-content-production",
    "/event-creative-experience-design",
    "/event-production-management",
    "/event-videography-photography",
    "/hybrid-virtual-event-production",
    "/meeting-planning-support",
  ];

  const [blogEntries] = await Promise.all([getBlogEntries()]);

  const staticUrls: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route || "/"}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceUrls: MetadataRoute.Sitemap = problemServices.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // const caseStudyUrls: MetadataRoute.Sitemap = caseStudies.map((c) => ({
  //   url: `${siteUrl}/experiences-created/${c.slug}`,
  //   lastModified: now,
  //   changeFrequency: "monthly",
  //   priority: 0.6,
  // }));

  const blogUrls: MetadataRoute.Sitemap = blogEntries.map((b) => {
    const date = b.lastModified ? new Date(b.lastModified) : now;
    return {
      url: `${siteUrl}/blogs/${b.slug}`,
      lastModified: Number.isNaN(date.getTime()) ? now : date,
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return [...staticUrls, ...serviceUrls, /* ...caseStudyUrls, */ ...blogUrls];
}
