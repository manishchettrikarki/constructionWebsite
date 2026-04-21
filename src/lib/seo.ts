export const SITE = {
  name: "Construction Website",
  tagline:
    "Simple construction company website to show the work and services of a construction company.",
  url: "http://localhost:3000",
  description:
    "Construction Website is a simple construction company website to show the work and services of a construction company.",
  locale: "en_US",
  ogImage: "http://localhost:3000/images/og-default.jpg",
  twitter: "@constructionwebsite",
};

export function makeTitle(page?: string) {
  return page ? `${page} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
}

export function ogImage(path?: string) {
  const url = path ? `${SITE.url}${path}` : SITE.ogImage;
  return [{ url, width: 1200, height: 630, alt: SITE.name }];
}
