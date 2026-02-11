import type {MetadataRoute} from "next";
import {siteConfig} from "@/data/site";
import {portfolioProjects} from "@/data/portfolio";

/**
 * Sitemap bez lastModified – przy każdym buildzie new Date() sygnalizowałoby
 * „wszystko zmienione”, co myli crawlera. Gdy będziesz mieć prawdziwe daty
 * (np. z CMS lub pola updatedAt w portfolio), dodaj lastModified tam.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    {url: base, changeFrequency: "monthly", priority: 1},
    {url: `${base}/portfolio`, changeFrequency: "weekly", priority: 0.9},
    {url: `${base}/kontakt`, changeFrequency: "monthly", priority: 0.8},
  ];

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioProjects.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
