import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kallistoengineering.com";
const SITE_NAME = "Kallisto Engineering Consultancy Pvt. Ltd.";
const SITE_TWITTER = "@kallistoeng";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/default.jpg`;

// ─────────────────────────────────────────────────────────────
//  TYPES
// ─────────────────────────────────────────────────────────────
export interface PageSEO {
  title: string;
  description: string;
  slug: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
}

// ─────────────────────────────────────────────────────────────
//  METADATA BUILDER  — call inside each page's generateMetadata
// ─────────────────────────────────────────────────────────────
export function buildMetadata(page: PageSEO): Metadata {
  const url = `${SITE_URL}${page.slug}`;
  const image = page.ogImage ?? DEFAULT_OG_IMAGE;
  const fullTitle = `${page.title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description: page.description,
    keywords: page.keywords,

    // Canonical
    alternates: { canonical: url },

    // Open Graph
    openGraph: {
      title: fullTitle,
      description: page.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: page.title }],
    },

    // Twitter card
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      site: SITE_TWITTER,
      images: [image],
    },

    // Robots
    robots: page.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

// ─────────────────────────────────────────────────────────────
//  JSON-LD GENERATORS
// ─────────────────────────────────────────────────────────────

/** Organisation — used on every page via root layout */
export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/svg/logo.svg`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+977-9841666927",
        contactType: "customer service",
        areaServed: "NP",
        availableLanguage: ["English", "Nepali"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ghattekulo, Maitidevi, Kathmandu, Nepal",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati Province",
      addressCountry: "NP",
    },
    sameAs: [
      "https://www.facebook.com/kallistoengineering",
      "https://www.instagram.com/kallistoengineering",
      "https://twitter.com/kallistoeng",
    ],
  };
}

/** Local Business — adds map/address signals */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: DEFAULT_OG_IMAGE,
    url: SITE_URL,
    telephone: "+977-9841666927",
    email: "kallistoengineering@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ghattekulo, Maitidevi, Kathmandu, Nepal",
      addressLocality: "Kathmandu - 31",
      addressRegion: "Bagmati Province",
      addressCountry: "NP",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
  };
}

/** Webpage — per-page structured data */
export function webPageJsonLd(page: PageSEO) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${SITE_URL}${page.slug}`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };
}

/** Service — for services/single-service pages */
export function serviceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/** BreadcrumbList — pass in same breadcrumbs array used by PageHero */
export function breadcrumbJsonLd(
  crumbs: Array<{ label: string; href?: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href ? `${SITE_URL}${c.href}` : undefined,
    })),
  };
}

/** FAQ — for pages that render the FAQ accordion */
export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Website — sitelinks search box signal */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─────────────────────────────────────────────────────────────
//  PER-PAGE SEO CONFIG  — edit descriptions/keywords here
// ─────────────────────────────────────────────────────────────
export const PAGE_SEO: Record<string, PageSEO> = {
  home: {
    title: "Engineering Consultancy in Nepal",
    description:
      "Kallisto Engineering Consultancy delivers planning, feasibility studies, design, survey and supervision across transportation, hydropower, water resources and urban development. 31+ projects nationwide.",
    slug: "/",
    keywords: [
      "engineering consultancy Nepal",
      "civil engineering Nepal",
      "DGPS survey",
      "GIS mapping Nepal",
      "hydropower engineering",
      "EIA IEE Nepal",
    ],
  },
  about: {
    title: "About Us",
    description:
      "Learn about Kallisto Engineering Consultancy — our mission, vision, core values and the 14-member multidisciplinary team behind our engineering work since 2074 B.S.",
    slug: "/about",
    keywords: [
      "about Kallisto Engineering",
      "engineering consultancy Kathmandu",
      "engineering team Nepal",
    ],
  },
  services: {
    title: "Our Services",
    description:
      "Explore Kallisto's engineering services: transportation, hydropower & energy, water supply & urban development, environmental & social studies, and survey, GIS & project management.",
    slug: "/services",
    keywords: [
      "engineering services Nepal",
      "transportation engineering",
      "hydropower engineering",
      "water supply engineering",
      "environmental impact assessment",
      "GIS survey Nepal",
    ],
  },
  singleService: {
    title: "Environmental & Social Studies",
    description:
      "Environmental Impact Assessment (EIA), Initial Environmental Examination (IEE), Brief Environment Study (BES), geological investigation and socio-economic surveys.",
    slug: "/services/environmental-social-studies",
    keywords: [
      "EIA Nepal",
      "IEE Nepal",
      "geological investigation",
      "socio-economic survey",
    ],
  },
  projects: {
    title: "Our Projects",
    description:
      "Browse Kallisto Engineering's completed and ongoing projects — road and bridge surveys, hospital MEP design, wastewater master plans and environmental studies across Nepal.",
    slug: "/projects",
    keywords: [
      "engineering projects Nepal",
      "bridge design DPR",
      "road survey Nepal",
      "hospital MEP design",
    ],
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with Kallisto Engineering Consultancy. Call +977-9841666927, email kallistoengineering@gmail.com or visit us in Ghattekulo, Maitidevi, Kathmandu, Nepal",
    slug: "/contact",
    keywords: [
      "contact Kallisto Engineering",
      "engineering consultancy Kathmandu",
      "engineering consultation Nepal",
    ],
  },
};
