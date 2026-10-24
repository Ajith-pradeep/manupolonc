import type { MetadataRoute } from "next";
import { getAllProperties } from "@/lib/properties";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-23");

  const staticRoutes = [
    "",
    "/about",
    "/technology",
    "/real-estate",
    "/contact",
  ].map((path) => ({
    url: absoluteUrl(path || "/"),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const properties = getAllProperties().map((p) => ({
    url: absoluteUrl(`/real-estate/${p.slug}`),
    lastModified: new Date(`${p.listedAt}T00:00:00.000Z`),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...properties];
}
