import {faqItems} from "@/data/faq";

/**
 * Schema.org FAQPage – umożliwia rozszerzone snippet (FAQ) w Google.
 * Renderowane tylko na stronie głównej, gdzie sekcja FAQ jest widoczna.
 */
export function FaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
    />
  );
}
