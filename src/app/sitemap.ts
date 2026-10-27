import type { MetadataRoute } from "next";

import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Éles domain nélkül nem publikálunk hibás URL-eket.
  if (!siteUrl) {
    return [];
  }

  const baseUrl = siteUrl.replace(/\/$/, "");

  const staticPages = [
    "",
    "/horgaszat",
    "/allateledel",
    "/termekek",
    "/kapcsolat",
    "/adatkezeles",
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/termekek/${encodeURIComponent(product.slug)}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...pages, ...productPages];
}
