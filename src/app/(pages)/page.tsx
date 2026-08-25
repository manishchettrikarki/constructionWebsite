import HomeView from "@/components/views/home/homeView";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  PAGE_SEO,
  webPageJsonLd,
} from "@/lib/seo";
import { getFaqs } from "@/lib/data/faqs";
import { getSiteStats } from "@/lib/data/stats";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = buildMetadata(PAGE_SEO.home);

//
export default async function HomePage() {
  const [faqs, stats] = await Promise.all([getFaqs(), getSiteStats()]);

  return (
    <div className="font-[Roboto,sans-serif] text-[#000810] bg-white overflow-x-hidden">
      <HomeView faqs={faqs} stats={stats} />
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
