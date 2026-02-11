# Checklista SEO – przed wdrożeniem i cyklicznie

Strona: landing usług (Next.js, Jacek Pasierb). White-hat, konwersja, Core Web Vitals.

---

## Przed wdrożeniem (przed/po zmianach)

### Lighthouse (Chrome DevTools)

- [ ] **Performance** – wynik ≥ 90 (LCP, INP, CLS w zieleni).
- [ ] **SEO** – wynik 100; brak błędów (crawlable, meta, tap targets).
- [ ] **Accessibility** – wynik ≥ 90; kontrast, aria, nagłówki.
- [ ] **Best Practices** – HTTPS, brak błędów konsoli, obrazki w odpowiednich proporcjach.

### Tagi i schema

- [ ] **Title** – unikalny na każdej stronie, ≤ 60 znaków.
- [ ] **Meta description** – unikalna, ≤ 160 znaków, z CTA lub zachętą.
- [ ] **Canonical** – każda strona ma poprawny canonical (bez duplikatów).
- [ ] **OG / Twitter** – tytuł, opis, url, obraz (ogImage w `data/site.ts`).
- [ ] **JSON-LD** – Organization, WebSite (+ SearchAction), FAQPage (strona główna); bez błędów w [Rich Results Test](https://search.google.com/test/rich-results).

### Google Search Console (po wdrożeniu)

- [ ] Domena/właściwość dodana, weryfikacja OK.
- [ ] Sitemap przesłany i bez błędów.
- [ ] Brak krytycznych problemów w „Strony” (4xx, 5xx).
- [ ] Sprawdzenie „Ekspozycja” i „Wydajność” po 2–4 tygodniach.

---

## Cyklicznie (np. co kwartał)

### Treści

- [ ] Zaktualizować portfolio (nowe projekty, opisy, stack).
- [ ] Dodać/aktualizować pytania w FAQ pod realne zapytania klientów.
- [ ] Sprawdzić, czy Title/Meta na głównych podstronach nadal pasują do oferty i fraz.

### Linki i technika

- [ ] Sprawdzić linki wewnętrzne (czy anchor do #faq, #kontakt działają).
- [ ] Zweryfikować sitemap (czy wszystkie ważne podstrony są w sitemap.xml).
- [ ] Upewnić się, że `data/site.ts` ma aktualny `url` (domena produkcyjna).

### Monitoring

- [ ] Lighthouse (Performance + SEO) – czy po aktualizacjach wynik się nie pogorszył.
- [ ] GSC: „Wydajność” (zapytania, kliknięcia, pozycje) – które frazy rosną, które spadają.
- [ ] GSC: „Strony” – indeksacja, błędy, wykluczenia.

### E-E-A-T i zaufanie

- [ ] Czy sekcja „O mnie” / autor jest aktualna (jeśli jest).
- [ ] Czy dane kontaktowe i polityka prywatności (jeśli jest) są aktualne.

---

## Rekomendacje pod GSC

- **Ekspozycja:** obserwować zapytania z frazami typu „strony Next.js”, „tworzenie stron” – czy pojawiają się w raportach.
- **Indeksacja:** upewnić się, że wszystkie ważne URL-e są „Przesłane i zaindeksowane” lub „Zaindeksowane”.
- **Core Web Vitals:** w GSC w „Doświadczenie” – czy URL-e są w „Dobrych” (zielone).

---

## Czynniki poza kodem

- **Linki zewnętrzne** – budowa jakościowych backlinków (treść, katalogi, współprace).
- **Czas** – widoczność w wynikach zwykle rośnie w tygodniach/miesiącach.
- **Konkurencja** – siła domen i treści konkurentów pod te same frazy.

Nie gwarantuje się konkretnej pozycji; checklista służy do utrzymania technicznego poziomu SEO i śledzenia postępów.
