// import { ServicesContactSection } from "@/components/views/services/contactSection";
import { ServicesExpertsSection } from "@/components/views/services/expertSection";
import { ServicesHero } from "@/components/views/services/heroSection";
import { ServicesListSection } from "@/components/views/services/listSection";
import { ServicesNumbersSection } from "@/components/views/services/numberSection";
import { ServicesSkillsSection } from "@/components/views/services/skillsSection";
import {
  breadcrumbJsonLd,
  buildMetadata,
  PAGE_SEO,
  serviceJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { PAGE_HEROES, SERVICES } from "@/utils/constant";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = buildMetadata(PAGE_SEO.services);

export default function ServicesPage() {
  const serviceSchemas = SERVICES.map((s) =>
    serviceJsonLd({
      name: s.title,
      description: s.desc,
      url: s.href,
    }),
  );

  return (
    <>
      <ServicesHero />
      <ServicesListSection />
      <ServicesNumbersSection />
      <ServicesExpertsSection />
      {/* <ServicesSkillsSection /> */}
      {/* <ServicesContactSection /> */}

      {/*  */}
      <Script
        id="json-ld-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd(PAGE_SEO.services)),
        }}
      />
      <Script
        id="json-ld-breadcrumb-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd(PAGE_HEROES.services.breadcrumbs),
          ),
        }}
      />
      {/* One schema block per service */}
      {serviceSchemas.map((schema, i) => (
        <Script
          key={i}
          id={`json-ld-service-${i}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
