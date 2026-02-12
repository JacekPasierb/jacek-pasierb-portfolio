import {siteConfig} from "@/data/site";
import type {PortfolioProject} from "@/data/portfolio";

/**
 * Schema.org CreativeWork dla strony projektu – autor, opis, obraz.
 */
export function ProjectJsonLd({project}: {project: PortfolioProject}) {
  const url = `${siteConfig.url}/portfolio/${project.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDescription,
    url,
    author: {
      "@type": "Person",
      name: siteConfig.siteName,
      url: siteConfig.url,
    },
    ...(project.image && {
      image: project.image.startsWith("http") ? project.image : `${siteConfig.url}${project.image}`,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
    />
  );
}
