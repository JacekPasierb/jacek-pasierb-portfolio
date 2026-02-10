/**
 * Portfolio – projekty w trzech sekcjach: komercyjne, własne produkty, szablony.
 * image: ścieżka w /public (np. /images/lowisko.png).
 */
export type ProjectType =
  | "strona"
  | "aplikacja"
  | "ecommerce"
  | "saas"
  | "szablon";

export type PortfolioSection = "commercial" | "own-product" | "template";

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description?: string;
  type: ProjectType;
  /** Sekcja na stronie portfolio: commercial | own-product | template */
  section: PortfolioSection;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  highlight?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    slug: "lowisko-eko-torf-ludwinek",
    title: "Łowisko EKO-TORF Ludwinek",
    shortDescription:
      "Strona komercyjna dla łowiska. Next.js, wydajność i SEO – w użyciu, publicznie dostępna.",
    description:
      "Strona zlecona przez klienta – biznes łowiska karpiowego. Zbudowana w Next.js z naciskiem na wydajność, Core Web Vitals i lokalne SEO. Strona jest publicznie dostępna i aktywnie używana. Realna realizacja komercyjna z mierzalnymi efektami w wyszukiwarce.",
    type: "strona",
    section: "commercial",
    stack: ["Next.js", "TypeScript", "SEO", "Core Web Vitals"],
    liveUrl: "https://www.wędkowanie-ludwin.pl",
    image: "/images/lowisko.png",
    highlight: "TOP1 w Google na kluczowe frazy (SEO + szybkość)",
  },
  {
    id: "2",
    slug: "generator-opisow",
    title: "Generator Opisów AI",
    shortDescription:
      "SaaS: generator opisów ogłoszeń z AI. Autentykacja, limity, płatności – kompletny produkt od A do Z.",
    description:
      "Własny produkt: aplikacja SaaS do generowania opisów ogłoszeń z wykorzystaniem AI. Zaimplementowane end-to-end: rejestracja i logowanie, limity użycia, integracja płatności, panel użytkownika. Wdrożony MVP w Next.js, działający w produkcji.",
    type: "saas",
    section: "own-product",
    stack: ["Next.js", "Auth", "Stripe", "SEO"],
    liveUrl: "https://generator-ogloszen.com",
    image: "/images/generator.png",
    highlight: "TOP1 w Google na wybrane frazy",
  },
  {
    id: "3",
    slug: "dojazdy-bogdanka",
    title: "Dojazdy Bogdanka",
    shortDescription:
      "Aplikacja użytkowa rozwiązująca konkretny problem logistyczny. Zaprojektowana i wdrożona jako działający MVP.",
    description:
      "Własny projekt: aplikacja użytkowa stworzona z myślą o realnym problemie logistycznym. Pełny cykl: koncepcja, projekt, implementacja i wdrożenie działającego MVP. Przykład dostarczenia gotowego rozwiązania od zera.",
    type: "aplikacja",
    section: "own-product",
    stack: ["Next.js", "TypeScript"],
    liveUrl: "https://dojazdy-bogdanka.netlify.app/",
    repoUrl: undefined,
    image: "/images/dojazdy.png",
  },
  {
    id: "5",
    slug: "soyummy",
    title: "SoYummy",
    shortDescription:
      "Aplikacja do przepisów – pełny stack MERN. Własny projekt od frontu do bazy.",
    description:
      "Własny produkt: aplikacja do przeglądania i zarządzania przepisami. Zbudowana jako kompletny projekt z frontendem (React), backendem (Node.js) i bazą (MongoDB). Przykład dostarczenia działającej aplikacji full-stack.",
    type: "aplikacja",
    section: "own-product",
    stack: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://so-yummy-jack.netlify.app/welcome",
    repoUrl: undefined,
    image: "/images/yummy.png",
  },
  {
    id: "6",
    slug: "barber-strona",
    title: "Barber – strona przykładowa salonu fryzjerskiego",
    shortDescription:
      "Szablon strony dla salonu fryzjerskiego / barbershopu. Layout gotowy do adaptacji pod klienta.",
    description:
      "Przykładowa strona wizytówkowa dla salonu fryzjerskiego. Szablon zbudowany w Next.js – gotowy do szybkiej adaptacji pod konkretnego klienta. Czysty layout, sekcje typowe dla branży (usługi, cennik, kontakt).",
    type: "szablon",
    section: "template",
    stack: ["Next.js", "TypeScript", "CSS"],
    liveUrl: "https://barbergarage.netlify.app/",
    repoUrl: undefined,
    image: "/images/barber.png",
  },
  {
    id: "7",
    slug: "hotel-strona",
    title: "Hotel – strona przykładowa obiektu noclegowego",
    shortDescription:
      "Szablon strony dla hotelu / obiektu noclegowego. Layout gotowy do adaptacji pod klienta.",
    description:
      "Przykładowa strona wizytówkowa dla hotelu lub innego obiektu noclegowego. Szablon w Next.js – gotowy do szybkiej adaptacji. Sekcje typowe dla branży: pokoje, atrakcje, rezerwacja, kontakt.",
    type: "szablon",
    section: "template",
    stack: ["Next.js", "TypeScript", "CSS"],
    liveUrl: "https://hotel-lux.netlify.app/",
    repoUrl: undefined,
    image: "/images/hotel.png",
  },
  {
    id: "8",
    slug: "sklep-lux",
    title: "Sklep Lux – strona przykładowa (zegarki ekskluzywne)",
    shortDescription:
      "Szablon sklepu / e-commerce dla marek premium. Przykład: ekskluzywne zegarki, layout gotowy do adaptacji.",
    description:
      "Przykładowa strona sklepu dla segmentu premium – np. zegarki ekskluzywne. Szablon w Next.js z typowymi sekcjami e-commerce: katalog, produkt, kontakt. Gotowy do szybkiej adaptacji pod konkretną markę.",
    type: "szablon",
    section: "template",
    stack: ["Next.js", "TypeScript", "CSS"],
    liveUrl: "https://sklep-lux.netlify.app/",
    repoUrl: undefined,
    image: "/images/sklep-lux.png",
  },
  {
    id: "9",
    slug: "budowa-nieruchomosci",
    title: "Budowa – strona przykładowa (domy, bloki, nieruchomości)",
    shortDescription:
      "Szablon strony dla dewelopera / firmy budowlanej. Branża nieruchomości i budownictwa.",
    description:
      "Przykładowa strona wizytówkowa dla firmy budowlanej lub dewelopera – domy, bloki, duże nieruchomości. Layout z sekcjami typowymi dla branży: realizacje, oferta, kontakt. Gotowy do adaptacji pod klienta.",
    type: "szablon",
    section: "template",
    stack: ["React", "Strapi", "Bootstrap"],
    liveUrl: "https://front-strapi.netlify.app/",
    repoUrl: undefined,
    image: "/images/budowa.png",
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export const portfolioSections: {
  id: PortfolioSection;
  title: string;
  intro: string;
}[] = [
  {
    id: "commercial",
    title: "Projekty komercyjne",
    intro: "Strony i realizacje dla klientów – publicznie dostępne, w użyciu.",
  },
  {
    id: "own-product",
    title: "Własne produkty i aplikacje",
    intro:
      "Produkty i aplikacje zbudowane od zera – od koncepcji do wdrożenia.",
  },
  {
    id: "template",
    title: "Startery i szablony",
    intro: "Layouty i startery przyspieszające pracę nad projektami.",
  },
];
