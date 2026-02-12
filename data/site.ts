/**
 * Dane strony – TODO: uzupełnij nazwę, URL, dane kontaktowe, OG image.
 */
export const siteConfig = {
  /** Twoja nazwa / nazwa firmy */
  siteName: "Jacek Pasierb",
  title: "Strony internetowe i aplikacje dla firm – Jacek Pasierb",
  description:
    "Tworzę strony internetowe i aplikacje dla firm: wizytówki, sklepy, rezerwacje online, płatności. Szybko, bezpiecznie i z widocznością w Google.",
  tagline:
    "Strony, sklepy, rezerwacje online, płatności – wszystko szybkie i dobrze widoczne w Google.",
  /** Domena canonical (sitemap, robots, OG, JSON-LD). Używaj jednej wersji (z lub bez www) i przekieruj drugą. */
  url: "https://pasierb-webstudio.pl",
  keywords: [
    "strony Next.js",
    "tworzenie stron www",
    "strony szybkie",
    "SEO",
    "Core Web Vitals",
    "pozycjonowanie stron",
  ],
  /** Obraz OG/Twitter (1200×630). Fallback: hero; dla produkcji dodaj np. /og.png. */
  ogImage: "/images/hero.png" as string | undefined,
  /** Email i telefon do sekcji kontakt */
  contact: {
    email: "kontakt@pasierb-webstudio.pl",
    phone: "724 862 714",
  },
  /**
   * Przykłady realizacji (karty w sekcji „Przykłady”).
   * Jak dodać nowy przykład: dopisz obiekt do tablicy z polami:
   * - title (string) – tytuł karty
   * - description (string) – krótki opis (2–3 zdania)
   * - type (string) – wewnętrzny typ, np. "seo", "seo-perf"
   * - category? (string) – etykieta pilla, np. "Usługi", "Produkt", "Nieruchomości"
   * - resultSnippet? (string) – opcjonalny cytat/wynik wyświetlany na karcie i w modalu
   */
  proof: [
    {
      title: "Strona dla łowiska",
      description:
        "Strona dla biznesu łowiska – szybka, widoczna w Google. Klient pojawia się na pierwszym miejscu w wyszukiwarce na kluczowe frazy.",
      type: "seo-perf",
      category: "Usługi",
      resultSnippet: "TOP1 w Google na wybrane hasła",
    },
    {
      title: "Generator opisów AI",
      description:
        "Aplikacja SaaS do generowania opisów ogłoszeń. Rejestracja, płatności, panel użytkownika – kompletny produkt w produkcji.",
      type: "seo",
      category: "Produkt",
      resultSnippet: "Działający produkt, widoczny w wyszukiwarce",
    },
  ],
} as const;
