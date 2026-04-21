import { ContactHero } from "@/components/views/contact/heroSection";
import { ContactInfoSection } from "@/components/views/contact/infoSection";
import {
  breadcrumbJsonLd,
  buildMetadata,
  localBusinessJsonLd,
  PAGE_SEO,
  webPageJsonLd,
} from "@/lib/seo";
import { PAGE_HEROES } from "@/utils/constant";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = buildMetadata(PAGE_SEO.contact);

//
export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactInfoSection />

      {/*  */}
      <Script
        id="json-ld-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd(PAGE_SEO.contact)),
        }}
      />
      {/* Reinforce LocalBusiness on the contact page */}
      <Script
        id="json-ld-local-business-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd()),
        }}
      />
      <Script
        id="json-ld-breadcrumb-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd(PAGE_HEROES.contact.breadcrumbs),
          ),
        }}
      />
    </div>
  );
}
