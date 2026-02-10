import {RevealSection} from "@/components/ui/RevealSection";
import {AnimatedHeading} from "@/components/ui/AnimatedHeading";
import styles from "./WhatYouGet.module.css";

const items = [
  {
    title: "Strona, którą klienci łatwo znajdują w Google",
    desc: "Twoja strona ładuje się szybko i jest przyjazna dla wyszukiwarek – to pomaga w zdobywaniu pozycji i klientów.",
  },
  {
    title: "Profesjonalny wygląd na każdym urządzeniu",
    desc: "Strona działa na komputerze, tablecie i telefonie. Wygląda i działa tak samo dobrze wszędzie.",
  },
  {
    title: "Bezpieczeństwo i stabilność",
    desc: "Bez setek wtyczek, które się psują lub są lukami. Kod jest czysty, aktualny i przewidywalny.",
  },
  {
    title: "Dostępność dla wszystkich",
    desc: "Strona jest czytelna i użyteczna także dla osób z niepełnosprawnościami – to dobra praktyka i często wymóg.",
  },
];

export function WhatYouGet() {
  return (
    <RevealSection id="co-dostajesz" className={styles.section}>
      <AnimatedHeading className={styles.title}>Co dostajesz</AnimatedHeading>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.title} className={styles.item}>
            <span className={styles.dot} aria-hidden />
            <div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </RevealSection>
  );
}
