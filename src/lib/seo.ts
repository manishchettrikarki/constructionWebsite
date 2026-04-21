import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const SITE_NAME = "XYZ Construction Company";
const SITE_TWITTER = "@xyzconstruct";
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
        telephone: "+1-313-645-3395",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "2047 Cyrus Viaduct",
      addressLocality: "East Jadynchester",
    },
    sameAs: [
      "https://www.facebook.com/xyzconstrutioncompany",
      "https://www.instagram.com/xyzconstrutioncompany",
      "https://twitter.com/xyzconstrutioncompany",
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
    telephone: "+1-313-645-3395",
    email: "info@construct.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2047 Cyrus Viaduct",
      addressLocality: "East Jadynchester",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
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
    title: "Professional Civil & Structural Engineering",
    description:
      "XYZ Construct delivers sustainable, creative and efficient civil and structural engineering solutions. 128+ projects per year. Consult our team today.",
    slug: "/",
    keywords: [
      "civil engineering",
      "structural engineering",
      "construction services",
      "electrical engineering",
      "process engineering",
    ],
  },
  about: {
    title: "About Us",
    description:
      "Learn about XYZ Construct — our mission, values and the expert team behind 20+ years of trusted construction and engineering excellence.",
    slug: "/about",
    keywords: [
      "about XYZ construct",
      "construction company",
      "engineering team",
    ],
  },
  services: {
    title: "Our Services",
    description:
      "Explore XYZ Construct's full range of engineering services: process engineering, civil engineering, electrical engineering, construction management and more.",
    slug: "/services",
    keywords: [
      "engineering services",
      "construction services",
      "civil engineering",
      "electrical engineering",
      "process engineering",
      "specialty services",
    ],
  },
  singleService: {
    title: "Electrical Engineering Services",
    description:
      "Professional electrical engineering services including on-site testing, lighting planning, trace heating, schematics development, grounding and lightning protection.",
    slug: "/services/single-service",
    keywords: [
      "electrical engineering",
      "on-site testing",
      "lighting planning",
      "grounding",
    ],
  },
  projects: {
    title: "Our Projects",
    description:
      "Browse XYZ Construct's completed projects including factory design, shopping centre construction, renovation and water supply system installation.",
    slug: "/projects",
    keywords: [
      "construction projects",
      "engineering projects",
      "factory construction",
      "building renovation",
    ],
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with XYZ Construct. Call 1-313-645-3395, email info@construct.com or fill in our contact form and we'll respond within 24 hours.",
    slug: "/contact",
    keywords: [
      "contact XYZ construct",
      "construction enquiry",
      "engineering consultation",
    ],
  },
};
