import {siteConfig} from "@/data/site";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Schema.org BreadcrumbList – lepsze snippet w Google i nawigacja kontekstowa.
 */
export function BreadcrumbJsonLd({items}: {items: BreadcrumbItem[]}) {
  if (items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
    />
  );
}
