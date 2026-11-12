import type { MetadataRoute } from "next";
import { categories, ranges, site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/collections", "/ranges", "/branding", "/about", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}` })),
    ...categories.map((c) => ({ url: `${site.url}/collections/${c.slug}` })),
    ...ranges.map((r) => ({ url: `${site.url}/ranges/${r.slug}` })),
  ];
}
