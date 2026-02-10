import Image from "next/image";
import {RevealSection} from "@/components/ui/RevealSection";
import {AnimatedHeading} from "@/components/ui/AnimatedHeading";
import {AnimatedHighlight} from "@/components/ui/AnimatedHighlight";
import {siteImages} from "@/data/images";
import {WhyNextCards} from "./WhyNextCards";
import styles from "./WhyNext.module.css";

const points = [
  {
    variant: "szybkosc" as const,
    title: "Szybkość",
    description:
      "Strona ładuje się błyskawicznie – na komputerze i w telefonie. To przekłada się na zadowolonych klientów i lepszą widoczność w Google.",
  },
  {
    variant: "widocznosc" as const,
    title: "Widoczność w Google",
    description:
      "Strona jest zbudowana tak, żeby wyszukiwarki ją dobrze rozumiały. Dzięki temu Twoja firma może pojawiać się wyżej w wynikach wyszukiwania.",
  },
  {
    variant: "obraz" as const,
    title: "Obrazy i treści",
    description:
      "Zdjęcia i grafiki są automatycznie dopasowane do urządzenia – strona pozostaje lekka i szybka bez ręcznej obróbki plików.",
  },
  {
    variant: "wtyczki" as const,
    title: "Bez zbędnych wtyczek",
    description:
      "Piszę kod pod Twoją stronę, zamiast opierać się na setkach wtyczek. Masz pełną kontrolę nad wyglądem, bezpieczeństwem i działaniem.",
  },
];

export function WhyNext() {
  return (
    <RevealSection id="dlaczego-nextjs" className={styles.section}>
      <AnimatedHeading className={styles.title}>
        Dlaczego Next.js?
      </AnimatedHeading>
      <p className={styles.intro}>
        Dzięki nowoczesnej technologii Twoja strona jest{" "}
        <AnimatedHighlight>szybka</AnimatedHighlight>, bezpieczna i dobrze
        widoczna w Google. Poniżej – w skrócie – dlaczego wybieram Next.js.
      </p>
      <div className={styles.visual}>
        <Image
          src={siteImages.whyNext}
          alt=""
          width={560}
          height={350}
          sizes="(max-width: 768px) 100vw, 560px"
          className={styles.visualImg}
        />
      </div>
      <WhyNextCards points={points} />
    </RevealSection>
  );
}
