import Link from "next/link";
import Image from "next/image";
import type {PortfolioProject, ProjectType} from "@/data/portfolio";
import styles from "./ProjectCard.module.css";

const typeLabels: Record<ProjectType, string> = {
  strona: "Strona",
  aplikacja: "Aplikacja",
  ecommerce: "E-commerce",
  saas: "SaaS",
  szablon: "Starter / szablon",
};

interface ProjectCardProps {
  project: PortfolioProject;
}

export function ProjectCard({project}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/portfolio/${project.slug}`} className={styles.link}>
        {project.image ? (
          <div className={styles.imageWrap}>
            <Image
              src={project.image}
              alt={`Projekt: ${project.title}`}
              width={400}
              height={240}
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className={styles.placeholder} aria-hidden />
        )}
        <div className={styles.body}>
          <span className={styles.type}>{typeLabels[project.type]}</span>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.desc}>{project.shortDescription}</p>
          {project.highlight && (
            <span className={styles.highlight}>{project.highlight}</span>
          )}
          <span className={styles.stack}>{project.stack.join(" · ")}</span>
        </div>
      </Link>
    </article>
  );
}
