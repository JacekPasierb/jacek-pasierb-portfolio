# Instrukcje – strona ofertowa Next.js

## Jak uzupełnić treści i linki

### 1. Dane marki i kontakt (`data/site.ts`)

- **siteName** – Twoja nazwa lub nazwa firmy
- **url** – docelowy adres strony (np. `https://twojadomena.pl`)
- **contact.email** i **contact.phone** – dane do sekcji kontakt
- **ogImage** – ścieżka do obrazka Open Graph (np. `/og.png`, 1200×630 px)

### 2. Portfolio (`data/portfolio.ts`)

- Dla każdego projektu uzupełnij:
  - **liveUrl** – link do działającej strony (jeśli jest)
  - **repoUrl** – link do repozytorium (opcjonalnie)
  - **image** – ścieżka do zdjęcia (np. `/portfolio/projekt1.jpg`) lub URL; bez tego wyświetla się placeholder
  - **description** – dłuższy opis na stronie projektu (opcjonalnie)
- Aby dodać nowy projekt: skopiuj obiekt w tablicy `portfolioProjects` i uzupełnij pola. **slug** musi być unikalny i URL-friendly (małe litery, myślniki).

### 3. Kontakt

- Na stronie wyświetlane są tylko **dane kontaktowe** (email i telefon) z `data/site.ts`. Brak formularza – użytkownicy piszą lub dzwonią bezpośrednio.

### 4. Schema.org (LocalBusiness)

- W `components/seo/JsonLd.tsx` jest Organization + WebSite. Jeśli chcesz LocalBusiness (adres, godziny otwarcia), dopisz drugi obiekt `@type: "LocalBusiness"` z polami ze [specyfikacji](https://schema.org/LocalBusiness).

### 5. Zdjęcia na stronę (hero, sekcje, portfolio)

- **Placeholdery:** Hero i sekcja „Dlaczego Next.js” używają zdjęć z Unsplash (`data/images.ts`). Karty portfolio mają obrazki w `data/portfolio.ts`.
- **Własne zdjęcia:** Wrzuć pliki do `public/images/` (np. `hero.jpg`, `portfolio/lowisko.jpg`). W `data/images.ts` ustaw `hero: "/images/hero.jpg"`; w `data/portfolio.ts` w projekcie ustaw `image: "/images/portfolio/xxx.jpg"`. Więcej w `public/images/README.md`.

### 6. Obrazki OG

- Umieść plik `og.png` (1200×630 px) w `public/` i w `data/site.ts` ustaw `ogImage: "/og.png"`. Next.js automatycznie poda pełny URL w metadata.

---

## Checklista: Lighthouse / SEO (po uzupełnieniu treści)

Odpal po wdrożeniu lub na buildzie produkcyjnym.

### Lighthouse (Chrome DevTools → Lighthouse)

- [ ] **Performance** – wynik ≥ 90; LCP, FID, CLS w zieleni
- [ ] **Accessibility** – kontrast, aria, nagłówki, focus visible
- [ ] **Best Practices** – HTTPS, brak błędów konsoli
- [ ] **SEO** – meta description, tytuły, linki z anchor text, mobile-friendly

### SEO ręcznie

- [ ] **Tytuły** – unikalny `<title>` na każdej podstronie (sprawdź /, /portfolio, /kontakt, /portfolio/[slug])
- [ ] **Canonical** – każda strona ma `alternates.canonical` (już w metadata)
- [ ] **Sitemap** – otwórz `https://twojadomena.pl/sitemap.xml` i sprawdź, czy są wszystkie URL-e
- [ ] **robots.txt** – `https://twojadomena.pl/robots.txt` wskazuje na sitemap
- [ ] **Open Graph** – [Facebook Debugger](https://developers.facebook.com/tools/debug/) lub podobny – poprawny tytuł, opis, obrazek
- [ ] **Twitter Card** – [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] **Schema.org** – [Rich Results Test](https://search.google.com/test/rich-results) – Organization / WebSite bez błędów

### Treści

- [ ] Brak placeholderów „TODO” w widocznych tekstach
- [ ] H1 tylko jeden na stronę; hierarchia H2 → H3 spójna
- [ ] Linki „Zobacz na żywo” / „Repo” działają (gdy uzupełnione)

### Wydajność

- [ ] Obrazy przez `next/image` (już w projekcie); ewentualne zewnętrzne domeny w `next.config.ts` → `images.remotePatterns`
- [ ] Brak wielkich bibliotek JS (animacje to CSS + IntersectionObserver)
- [ ] `prefers-reduced-motion` respektowane (reveal, transition, parallax)

---

## Uruchomienie

```bash
npm install
npm run dev
```

Build produkcyjny:

```bash
npm run build
npm run start
```

Strona: `http://localhost:3000`.
