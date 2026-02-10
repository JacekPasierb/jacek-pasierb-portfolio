import {notFound} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type {Metadata} from "next";
import {
  getProjectBySlug,
  portfolioProjects,
  type ProjectType,
} from "@/data/portfolio";
import {siteConfig} from "@/data/site";
import styles from "./ProjectPage.module.css";

const typeLabels: Record<ProjectType, string> = {
  strona: "Strona",
  aplikacja: "Aplikacja",
  ecommerce: "E-commerce",
  saas: "SaaS",
  szablon: "Starter / szablon",
};

interface Props {
  params: Promise<{slug: string}>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({slug: p.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {title: "Nie znaleziono"};
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: `${siteConfig.url}/portfolio/${project.slug}`,
    },
    alternates: {canonical: `${siteConfig.url}/portfolio/${project.slug}`},
  };
}

export default async function ProjectPage({params}: Props) {
  const {slug} = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className={styles.article}>
      <div className={styles.back}>
        <Link href="/portfolio">← Portfolio</Link>
      </div>
      <header className={styles.header}>
        <span className={styles.type}>{typeLabels[project.type]}</span>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.lead}>{project.shortDescription}</p>
        {project.highlight && (
          <p className={styles.highlight}>{project.highlight}</p>
        )}
      </header>
      {project.image && (
        <div className={styles.imageWrap}>
          <Image
            src={project.image}
            alt=""
            width={800}
            height={450}
            className={styles.image}
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}
      {project.description && (
        <div className={styles.body}>
          <p>{project.description}</p>
        </div>
      )}
      <div className={styles.meta}>
        <p>
          <strong>Stack:</strong> {project.stack.join(", ")}
        </p>
        {(project.liveUrl || project.repoUrl) && (
          <div className={styles.links}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zobacz na żywo →
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repozytorium
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
