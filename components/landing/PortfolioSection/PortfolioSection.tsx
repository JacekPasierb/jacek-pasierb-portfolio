import Link from "next/link";
import Image from "next/image";
import {RevealSection} from "@/components/ui/RevealSection";
import {AnimatedHeading} from "@/components/ui/AnimatedHeading";
import {portfolioProjects} from "@/data/portfolio";
import styles from "./PortfolioSection.module.css";

export function PortfolioSection() {
  const featured = portfolioProjects
    .filter((p) => p.section === "commercial" || p.section === "own-product")
    .slice(0, 3);

  return (
    <RevealSection id="portfolio" className={styles.section}>
      <AnimatedHeading className={styles.title}>Portfolio</AnimatedHeading>
      <p className={styles.intro}>
        Poniżej znajdziesz realne projekty stron i aplikacji, które
        zaprojektowałem i wdrożyłem.
      </p>
      <ul className={styles.grid}>
        {featured.map((project) => (
          <li key={project.id} className={styles.card}>
            <Link
              href={`/portfolio/${project.slug}`}
              className={styles.cardLink}
            >
              {project.image ? (
                <div className={styles.imageWrap}>
                  <Image
                    src={project.image}
                    alt={`Projekt: ${project.title}`}
                    width={400}
                    height={240}
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : (
                <div className={styles.placeholder} aria-hidden />
              )}
              <div className={styles.cardBody}>
                <span className={styles.type}>
                  {project.section === "commercial"
                    ? "Projekt komercyjny"
                    : project.section === "own-product"
                    ? "Własny produkt"
                    : "Starter / szablon"}
                </span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.shortDescription}</p>
                {project.highlight && (
                  <span className={styles.highlight}>{project.highlight}</span>
                )}
                <span className={styles.stack}>
                  {project.stack.join(" · ")}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <p className={styles.more}>
        <Link href="/portfolio">Zobacz, co mogę dla Ciebie zrobić →</Link>
      </p>
    </RevealSection>
  );
}
