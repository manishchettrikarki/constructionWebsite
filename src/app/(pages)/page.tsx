import HomeView from "@/components/views/home/homeView";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  PAGE_SEO,
  webPageJsonLd,
} from "@/lib/seo";
import { faqs } from "@/utils/constant";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = buildMetadata(PAGE_SEO.home);

//
export default function HomePage() {
  return (
    <div className="font-[Roboto,sans-serif] text-[#000810] bg-white overflow-x-hidden">
      <HomeView />
      <Script
        id="json-ld-homepage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd(PAGE_SEO.home)),
        }}
      />

      {/* FAQ structured data — homepage has FAQ section */}
      <Script
        id="json-ld-faq-home"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqs)),
        }}
      />

      {/* Breadcrumb */}
      <Script
        id="json-ld-breadcrumb-home"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ label: "Home", href: "/" }]),
          ),
        }}
      />
    </div>
  );
}
