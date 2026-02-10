# Zdjęcia na stronę

Wrzuć tutaj własne pliki, żeby zastąpić placeholderowe obrazki z Unsplash.

## Gdzie co wstawić

| Plik w `public/images/`   | Gdzie się wyświetla                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| `hero.jpg` (lub .png)     | Hero – obok nagłówka na stronie głównej                                                     |
| `why-next.jpg`            | Sekcja „Dlaczego Next.js?”                                                                  |
| `portfolio/lowisko.jpg`   | Karta projektu Łowisko (w data/portfolio.ts ustaw `image: "/images/portfolio/lowisko.jpg"`) |
| `portfolio/generator.jpg` | Karta projektu Generator Opisów                                                             |
| `portfolio/soyummy.jpg`   | Karta projektu SoYummy                                                                      |
| `portfolio/sklep-lux.jpg` | Karta projektu Sklep Lux                                                                    |

## Jak podmienić

1. **Hero i sekcje** – w pliku `data/images.ts` zamień URL na ścieżkę, np. `hero: "/images/hero.jpg"`.
2. **Portfolio** – w `data/portfolio.ts` w każdym projekcie ustaw `image: "/images/portfolio/nazwa.jpg"` (lub zostaw obecne URL-e z Unsplash).

Rekomendowane rozmiary: hero ok. 800×500 px.

---

## Okładki portfolio – jak zrobić screen, żeby mieścił się na całe wymiary

Karty projektów mają **proporcje 5 : 3** (szerokość : wysokość). Żeby zdjęcie wypełniało całą okładkę bez ucinania i bez pustych pasków:

### Wymiary w pikselach (proporcja 5∶3)

| Szerokość | Wysokość |
| --------- | -------- |
| 1000 px   | 600 px   |
| 1200 px   | 720 px   |
| 1500 px   | 900 px   |
| 1600 px   | 960 px   |

Najwygodniej: **1200 × 720** lub **1500 × 900**.

### Jak zrobić zrzut w tych proporcjach

1. **Chrome / Edge – DevTools**

   - Otwórz stronę → F12 → ikona „Toggle device toolbar” (Ctrl+Shift+M).
   - Ustaw „Responsive”, w polu wymiarów wpisz np. **1200** × **720** (albo 1500 × 900).
   - Zrzut ekranu: ... (menu DevTools) → „Capture screenshot” albo rozszerzenie (np. „GoFullPage” tylko dla widocznego obszaru).

2. **Firefox**

   - F12 → ikona „Responsive design mode” (Ctrl+Shift+M).
   - Ustaw rozmiar 1200 × 720 (lub 1500 × 900).
   - Zrzut: prawy przycisk na stronie → „Zrób zrzut ekranu” / „Screenshot” (lub rozszerzenie).

3. **Narzędzia zewnętrzne**

   - **Screenshot.rocks**, **screely.com** – wklejasz URL lub obrazek, wybierasz proporcje (np. 5∶3) i pobierasz.
   - **Figma / Canva** – kadr 1200×720, wklej zrzut i eksportuj.

4. **Jeśli masz inny zrzut**
   - Otwórz w edytorze (Paint, Photopea, GIMP), ustaw **kadr 5∶3** (np. 1200×720) tak, żeby najważniejsza część strony była w środku, zapisz.

### Podsumowanie

- **Proporcja:** 5 ∶ 3 (np. 1200 × 720 px).
- **Format:** PNG lub JPG, wrzuć do `public/images/` (np. `screen.png`, `generator.png`).
- W `data/portfolio.ts` ustaw `image: "/images/nazwa-pliku.png"`.
