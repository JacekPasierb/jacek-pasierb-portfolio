# Audyt SEO – landing usług Next.js (Jacek Pasierb)

**Data:** 2025-02  
**Zakres:** Indexability, On-page, Structured Data, OG/Twitter, Core Web Vitals, A11y, E-E-A-T.  
**Cel:** White-hat SEO, konwersja, przygotowanie do pozycjonowania.

---

## 1. INDEXABILITY

| Element | Status | Uwagi |
|--------|--------|--------|
| **robots.txt** | OK | `allow: /`, `disallow: /api/`, sitemap podany |
| **sitemap.xml** | OK | Dynamiczny (strona główna, /portfolio, /uslugi, projekty; bez /kontakt – tylko #kontakt) |
| **meta robots** | OK | Layout: `index, follow` |
| **canonical** | OK | Layout + kontakt, portfolio, portfolio/[slug] – poprawne URL |
| **noindex** | OK | Brak niepotrzebnego noindex |
| **4xx/5xx** | – | notFound() dla nieistniejącego projektu (404) – OK |

**P0:** brak.  
**P1:** –  
**P2:** Rozważyć `lastModified` w sitemap z realnych dat (np. z CMS/git).

---

## 2. ON-PAGE SEO

| Element | Status | Uwagi |
|--------|--------|--------|
| **Title / Meta description** | OK | Unikalne na kontakt, portfolio, [slug]. Strona główna z layout. |
| **H1** | OK | Portfolio: AnimatedHeading as="h1". Strona główna: Hero h1. |
| **H2 / struktura** | OK | Hero H1, sekcje H2 (Dlaczego Next.js, Portfolio, FAQ itd.) |
| **Alt obrazów** | OK | WhyNext, PortfolioSection, ProjectCard, portfolio/[slug] – opisowe alt (np. „Projekt: tytuł”). |
| **Linkowanie wewnętrzne** | OK | Hero: linki do #dlaczego-nextjs, #proces, #faq; nav: /#kontakt. scroll-margin dla anchorów. |

**P0:** – (wykonane).  
**P1:** – (wykonane).  

**P2:**  
- Dłuższe, unikalne meta description dla strony głównej (obecnie OK, można testować wersje pod konwersję).

---

## 3. STRUCTURED DATA (Schema.org)

| Schema | Status | Uwagi |
|--------|--------|--------|
| **Organization** | OK | JsonLd.tsx – name, url, description, @id |
| **WebSite** | OK | SearchAction (potentialAction) w JsonLd.tsx. |
| **ProfessionalService** | OK | JsonLd.tsx – nazwa, url, opis, email, telefon. |
| **FAQPage** | OK | FaqJsonLd na stronie głównej i /uslugi/strony-nextjs. |
| **BreadcrumbList** | OK | BreadcrumbJsonLd na /portfolio i /portfolio/[slug]. |
| **CreativeWork** | OK | ProjectJsonLd na portfolio/[slug] – autor, opis, obraz. |

**P0:** – (wykonane).  
**P1:** – (wykonane).  
**P2:** – CreativeWork wdrożone.

---

## 4. OPEN GRAPH / TWITTER / FAVICONS

| Element | Status | Uwagi |
|--------|--------|--------|
| **OG title, description, url** | OK | Layout + strony podstron. |
| **OG image** | OK | siteConfig.ogImage (np. /images/hero.png); dla produkcji można dodać dedykowany /og.png 1200×630. |
| **Twitter card** | OK | summary_large_image + obraz. |
| **Favicon / manifest** | OK | app/icon.tsx (generowany favicon), app/manifest.ts (PWA). |

**P0:** – (wykonane).  
**P1:** – (wykonane).  

**P2:**  
- Różne obrazy OG per podstrona (opcjonalnie).

---

## 5. CORE WEB VITALS I PERFORMANCE

| Element | Status | Uwagi |
|--------|--------|--------|
| **next/image** | OK | Używane w WhyNext, PortfolioSection, ProjectCard, portfolio/[slug] – lazy, sizes. |
| **Hero (LCP)** | Uwaga | Hero: background-image w CSS. Preload hero w layout (head) – poprawia LCP. Długoterminowo: next/image z priority. |
| **Fonty** | OK | next/font (Plus Jakarta Sans), display: swap. |
| **Preload** | OK | link rel=preload dla hero image w root layout. |
| **Bundle** | OK | Brak oczywistych ciężkich importów; PageTransition, Reveal – rozsądne. |

**P0:**  
- Rozważyć preload dla obrazka hero (link rel=preload dla hero.png) – poprawa LCP.  

**P1:**  
- Długoterminowo: hero jako next/image z priority + fill (wymaga zmiany layoutu Hero).  

**P2:**  
- Dynamic import dla modali / mniej krytycznych komponentów jeśli bundle urośnie.

---

## 6. DOSTĘPNOŚĆ (A11y) I SEMANTYKA HTML

| Element | Status | Uwagi |
|--------|--------|--------|
| **Skip link** | OK | „Przejdź do treści” → #main-content. |
| **Nagłówki** | Z zastrzeżeniem | Jedna strona bez H1 (Portfolio) – patrz wyżej. |
| **FAQ** | OK | `<dl>`, `<dt>`, `<dd>`, aria-expanded, aria-controls. |
| **Kontrast / focus** | – | Do weryfikacji w Lighthouse (outline, kontrast). |
| **Landmarks** | OK | header, main, footer, nav, section. |

**P0:**  
- H1 na Portfolio (semantyka + SEO).  

**P1:**  
- Sprawdzić Lighthouse Accessibility i poprawić ewentualne błędy.

---

## 7. E-E-A-T (Ekspertise, Experience, Authoritativeness, Trustworthiness)

| Element | Status | Uwagi |
|--------|--------|--------|
| **O mnie / autor** | Słabe | Brak dedykowanej sekcji „O mnie” (kto robi strony, doświadczenie). |
| **Portfolio / case studies** | OK | Portfolio z opisami, linkami, stackiem – dobre. |
| **Proces współpracy** | OK | „Jak pracuję” – kroki. |
| **Opinie / referencje** | Brak | Brak cytatów, opinii, case study z wynikami (np. TOP1). |
| **Dane firmy / kontakt** | OK | Email, telefon w stopce i sekcji kontakt. |
| **FAQ** | OK | Realne pytania i odpowiedzi. |
| **Polityki** | Brak | Brak polityki prywatności / regulaminu – słabsze zaufanie i zgodność RODO. |

**P0:** – (treściowe; nie blokują indeksacji).  
**P1:**  
- Krótka sekcja „O mnie” (1–2 zdania + link do portfolio).  
- Strona /polityka-prywatnosci (zalecane pod RODO i zaufanie).  

**P2:**  
- Sekcja „Opinie” lub cytaty w case studies (schema Review/Recommendation gdy będą).  
- Blog lub artykuły (E-E-A-T długoterminowo).

---

## 8. SŁOWA KLUCZOWE I STRUKTURA TREŚCI (propozycja)

### Główne frazy usługowe
- „strony internetowe Next.js”, „tworzenie stron Next.js”
- „strony www dla firm”, „landing page Next.js”
- „developer Next.js”, „programista stron www”
- (opcjonalnie geo) „strony internetowe Lublin” / region

### Long-tail
- „optymalizacja Core Web Vitals Next.js”
- „migracja React do Next.js”
- „szybka strona firmowa Next.js”
- „strona wizytówka Next.js”

### Proponowana struktura podstron (P2)
- `/uslugi/strony-nextjs` – H1: Strony i aplikacje w Next.js | Title/Meta pod frazę, H2: Dlaczego Next.js, Zakres, Proces, CTA.
- `/uslugi/optymalizacja-core-web-vitals` – H1: Optymalizacja Core Web Vitals | H2: LCP, INP, CLS, Co robię, CTA.
- `/uslugi/migracja-react-nextjs` – H1: Migracja z React do Next.js | H2: Korzyści, Proces, CTA.
- `/case-studies/[slug]` – opcjonalnie rozbudowa portfolio do case study (wyniki, liczby).
- `/blog/` – opcjonalnie, gdy będą artykuły (SEO + E-E-A-T).

Dla każdej podstrony: unikalny H1, 2–4 H2, Title ≤ 60 znaków, Meta description ≤ 160 znaków, krótkie punkty treści (co ma być napisane) – do uzupełnienia w kolejnej iteracji.

---

## PRIORYTETY WDROŻEŃ

| Priorytet | Element | Działanie |
|-----------|---------|-----------|
| **P0** | Alt obrazów | Opisowe alt przy WhyNext, PortfolioSection, ProjectCard, portfolio/[slug] (np. tytuł projektu). |
| **P0** | H1 Portfolio | Nagłówek „Portfolio” jako H1 (AnimatedHeading as="h1" lub osobny h1). |
| **P0** | FAQ schema | JSON-LD FAQPage z pytaniami i odpowiedziami z FAQ. |
| **P0** | WebSite SearchAction | potentialAction w WebSite (SearchAction) – url z placeholderem lub wyszukiwarka. |
| **P0** | OG image | Domyślny ogImage w site.ts (np. /images/og.png) + komentarz w kodzie / docs. |
| **P1** | BreadcrumbList | Schema na /portfolio i /portfolio/[slug]. |
| **P1** | Linki wewnętrzne | Anchor linki do #faq, #kontakt, #proces na stronie głównej. |
| **P1** | Favicon + manifest | app/icon, app/manifest. |
| **P1** | Preload hero | link rel=preload dla hero.png. |
| **P2** | Podstrony usług | /uslugi/strony-nextjs itd. |
| **P2** | Polityka prywatności | /polityka-prywatnosci. |
| **P2** | O mnie | Krótka sekcja na stronie głównej. |

---

## CZYNNIKI POZA KODEM

- **Linki zewnętrzne (backlinki)** – jakość i liczba wpływają na pozycje; white-hat: wartościowe treści, katalogi, współprace.
- **Konkurencja** – siła domen i treści konkurentów pod te same frazy.
- **Czas** – indeksacja i wzrost pozycji zwykle tygodnie/miesiące.
- **Treść** – regularne uzupełnianie (case studies, FAQ, blog) wzmacnia E-E-A-T i długi ogon.

Nie gwarantuje się „1 miejsca”; audyt i wdrożenia zwiększają szanse na widoczność i konwersję przy zachowaniu dobrych praktyk Google.

---

## 9. WDROŻONE DZIAŁANIA POD TOP 1 (stan po wdrożeniu)

| Obszar | Wdrożenie |
|--------|-----------|
| **Structured Data** | Organization, ProfessionalService, WebSite (+ SearchAction), FAQPage, BreadcrumbList (portfolio, [slug]), CreativeWork (projekt). |
| **Techniczne** | Preload hero (LCP), favicon (app/icon.tsx), manifest (app/manifest.ts), canonical, sitemap, robots. |
| **On-page** | H1 na wszystkich stronach, alt przy obrazach, linki wewnętrzne (#faq, #kontakt, #proces, #dlaczego-nextjs), scroll-margin dla anchorów. |
| **Meta / OG** | Unikalne title i description, ogImage, Twitter card. |

**Rekomendacje dalsze (poza kodem):** Google Search Console (weryfikacja, sitemap), budowa backlinków, treści (blog/case studies), polityka prywatności (RODO), regularna aktualizacja portfolio i FAQ.
