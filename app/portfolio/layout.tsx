import type {Metadata} from "next";
import {siteConfig} from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Wybrane realizacje – strony i aplikacje w Next.js. ${siteConfig.tagline}`,
  openGraph: {
    title: "Portfolio",
    description: `Wybrane realizacje – strony i aplikacje w Next.js. ${siteConfig.tagline}`,
    url: `${siteConfig.url}/portfolio`,
  },
  alternates: {canonical: `${siteConfig.url}/portfolio`},
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
