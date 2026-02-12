/**
 * Lista usług – spójna z contentem strony (site.ts, oferta).
 * href: podstrona usługi lub /#kontakt (sekcja na stronie głównej).
 */
export const servicesList = [
  {
    id: "strony-nextjs",
    title: "Strony internetowe w Next.js",
    description:
      "Szybkie strony wizytówki, landing page i serwisy firmowe. SEO, Core Web Vitals i skalowalność od pierwszego dnia.",
    href: "/uslugi/strony-nextjs",
    cta: "Napisz lub zadzwoń →",
  },
  {
    id: "sklepy-ecommerce",
    title: "Sklepy i e-commerce",
    description:
      "Sklepy internetowe z katalogiem, koszykiem i panelem. Integracja z płatnościami i dostawą – dopasowana do Twojego modelu.",
    href: "/#kontakt",
  },
  {
    id: "rezerwacje-systemy",
    title: "Rezerwacje i systemy online",
    description:
      "Systemy rezerwacji, zapisy, kalendarze i formularze z potwierdzeniami. Dla usług, obiektów i wydarzeń.",
    href: "/#kontakt",
  },
  {
    id: "platnosci-online",
    title: "Płatności online",
    description:
      "Wdrożenie płatności (Stripe, Przelewy24 i inne). Subskrypcje, jednorazowe płatności, bezpieczne API.",
    href: "/#kontakt",
  },
  {
    id: "seo-core-web-vitals",
    title: "SEO i Core Web Vitals",
    description:
      "Optymalizacja pod wyszukiwarki i szybkość ładowania. Audyt, poprawa LCP i INP, treść pod słowa kluczowe.",
    href: "/#kontakt",
  },
] as const;
