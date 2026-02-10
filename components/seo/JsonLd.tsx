import {siteConfig} from "@/data/site";

/**
 * Schema.org: Organization + WebSite.
 * TODO: Rozszerz o LocalBusiness jeśli oferujesz usługi lokalnie (adres, godziny).
 */
export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {"@id": `${siteConfig.url}#organization`},
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...organization,
            "@id": `${siteConfig.url}#organization`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(website)}}
      />
    </>
  );
}
