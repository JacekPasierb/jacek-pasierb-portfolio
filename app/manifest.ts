import type {MetadataRoute} from "next";
import {siteConfig} from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.siteName,
    short_name: siteConfig.siteName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0c",
    theme_color: "#0a0a0c",
    lang: "pl",
    icons: [
      {src: "/icon", sizes: "32x32", type: "image/png", purpose: "any"},
      /* Dla PWA dodaj do public/: icon-192.png, icon-512.png i odkomentuj:
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      */
    ],
  };
}
