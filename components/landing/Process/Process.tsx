import {RevealSection} from "@/components/ui/RevealSection";
import {StickyProcess} from "@/components/ui/StickyProcess";

const processSteps = [
  {
    id: "krok-1",
    title: "Rozmowa i ustalenia",
    description:
      "Ustalamy, czego potrzebujesz: strona wizytówka, sklep, rezerwacje, płatności online? Dla kogo jest strona i co ma osiągać. Ustalamy harmonogram i formę współpracy.",
  },
  {
    id: "krok-2",
    title: "Projekt i treści",
    description:
      "Przygotowuję propozycję struktury i układu strony. Ty dostarczasz teksty i zdjęcia – albo wspólnie je dopracowujemy.",
  },
  {
    id: "krok-3",
    title: "Realizacja",
    description:
      "Buduję stronę lub aplikację od zera: wygląd, działanie, formularze, płatności lub rezerwacje – w zależności od ustaleń.",
  },
  {
    id: "krok-4",
    title: "Widoczność w Google i szybkość",
    description:
      "Dbam o to, żeby strona była szybka i dobrze widoczna w wyszukiwarce. Dopasowuję wszystko pod Twoje słowa kluczowe.",
  },
  {
    id: "krok-5",
    title: "Testy i uruchomienie",
    description:
      "Sprawdzam działanie na różnych urządzeniach, wprowadzamy ewentualne poprawki. Uruchamiam stronę u wybranego dostawcy hostingu.",
  },
  {
    id: "krok-6",
    title: "Przekazanie i wsparcie",
    description:
      "Przekazuję Ci dostęp do strony i dokumentację. Mogę zapewnić krótki okres wsparcia po uruchomieniu lub dalsze rozbudowy.",
  },
];

export function Process() {
  return (
    <RevealSection id="proces">
      <StickyProcess
        title="Jak pracuję ?"
        intro="Prosty, przejrzysty proces od pomysłu do wdrożenia."
        steps={processSteps}
      />
    </RevealSection>
  );
}
