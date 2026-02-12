import type {Metadata} from "next";
import {Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import {siteConfig} from "@/data/site";
import {siteImages} from "@/data/images";
import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {PageTransition} from "@/components/ui/PageTransition";
import {JsonLd} from "@/components/seo/JsonLd";
import {ReducedMotionHandler} from "@/components/ui/ReducedMotionHandler";
import {BackToTop} from "@/components/ui/BackToTop";

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
  manifest: "/manifest.webmanifest",
  icons: {icon: "/icon"},
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
    <html lang="pl" className={fontSans.variable} data-scroll-behavior="smooth">
      <head>
        <link
          rel="preload"
          href={siteImages.hero}
          as="image"
          fetchPriority="high"
        />
      </head>
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
        <BackToTop />
      </body>
    </html>
  );
}
