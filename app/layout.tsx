import type {Metadata} from "next";
import {Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import {siteConfig} from "@/data/site";
import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {PageTransition} from "@/components/ui/PageTransition";
import {JsonLd} from "@/components/seo/JsonLd";
import {ReducedMotionHandler} from "@/components/ui/ReducedMotionHandler";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{name: siteConfig.siteName, url: siteConfig.url}],
  creator: siteConfig.siteName,
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: siteConfig.title,
    description: siteConfig.description,
    images: siteConfig.ogImage ? [{url: siteConfig.ogImage}] : [],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: siteConfig.ogImage ? [siteConfig.ogImage] : [],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {canonical: siteConfig.url},
};

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={fontSans.variable}>
      <body>
        <ReducedMotionHandler />
        <JsonLd />
        <a href="#main-content" className="skipLink">
          Przejdź do treści
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
