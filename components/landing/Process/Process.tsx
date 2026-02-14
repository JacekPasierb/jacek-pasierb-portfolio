import {RevealSection} from "@/components/ui/RevealSection";
import {StickyProcess} from "@/components/ui/StickyProcess";

const processSteps = [
  {
    id: "krok-1",
    title: "Krótka rozmowa",
    description:
      "Rozmawiamy o Twojej firmie, ofercie i celu strony. Ustalamy zakres, budżet i termin realizacji.",
  },
  {
    id: "krok-2",
    title: "Struktura i plan strony",
    description:
      "Proponuję układ strony i podział treści. Doradzam, co warto pokazać, aby zwiększyć liczbę zapytań od klientów.",
  },
  {
    id: "krok-3",
    title: "Projekt i realizacja",
    description:
      "Tworzę nowoczesną, szybką stronę dopasowaną do Twojej branży – responsywną i przygotowaną pod Google.",
  },
  {
    id: "krok-4",
    title: "Optymalizacja i testy",
    description:
      "Sprawdzam działanie na telefonach i komputerach. Dbam o szybkość, bezpieczeństwo i poprawne wyświetlanie.",
  },
  {
    id: "krok-5",
    title: "Uruchomienie strony",
    description:
      "Publikuję stronę na serwerze i konfiguruję domenę. Wszystko jest gotowe do działania.",
  },
  {
    id: "krok-6",
    title: "Wsparcie po wdrożeniu",
    description:
      "Po uruchomieniu możesz liczyć na moje wsparcie – w razie pytań, drobnych zmian lub rozbudowy.",
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
