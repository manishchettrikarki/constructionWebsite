import { AboutFeaturesSection } from "@/components/views/about/featuresSection";
import { AboutHero } from "@/components/views/about/heroSection";
import { ManagingDirectorSection } from "@/components/views/about/managingDirectorMessage";
import { AboutQuoteSection } from "@/components/views/about/quoteSection";
import { AboutReviewsSection } from "@/components/views/about/reviewSection";
import { AboutServicesSection } from "@/components/views/about/serviceSection";
import { AboutTeamSection } from "@/components/views/about/teamSection";
import {
  breadcrumbJsonLd,
  buildMetadata,
  PAGE_SEO,
  webPageJsonLd,
} from "@/lib/seo";
import { PAGE_HEROES } from "@/utils/constant";
import { Metadata } from "next";
import Script from "next/script";

//
export const metadata: Metadata = buildMetadata(PAGE_SEO.about);

//
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ManagingDirectorSection />
      {/* <AboutIntroSection /> */}
      <AboutQuoteSection />
      <AboutServicesSection />
      {/* <AboutGallerySection /> */}
      <AboutFeaturesSection />
      <AboutTeamSection />
      <AboutReviewsSection />

      {/*  */}
      <Script
        id="json-ld-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd(PAGE_SEO.about)),
        }}
      />
      <Script
        id="json-ld-breadcrumb-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd(PAGE_HEROES.about.breadcrumbs),
          ),
        }}
      />
    </>
  );
}
