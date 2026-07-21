# Kallisto Engineering Consultancy — Website

Official marketing website for **Kallisto Engineering Consultancy Pvt. Ltd.**, a
Kathmandu-based engineering consultancy offering planning, design, survey and
project management services across transportation, hydropower, water
resources, urban development and environmental studies.

Built with [Next.js](https://nextjs.org) (App Router), [TypeScript](https://www.typescriptlang.org/)
and [Tailwind CSS v4](https://tailwindcss.com).

## Features

- **Fully responsive marketing site** — Home, About, Services, Projects and
  Contact pages.
- **Centralized content** — nearly all copy (company info, services, team
  roster, project records, stats, footer/header text) lives in
  `src/utils/constant.ts` and `src/contents/*.ts`, so most content updates
  don't require touching component code.
- **Project directory with category filtering** — the Projects page lists
  every project with a category filter (Environmental Studies, Roads &
  Bridges, Water Resources, GIS Mapping, Buildings & Infrastructure) and a
  3-column responsive grid.
- **Team section** — full roster with role, qualification and experience,
  rendered from a single data array.
- **SEO** — per-page metadata, Open Graph tags, and JSON-LD structured data
  (Organization, LocalBusiness, WebSite, WebPage, Breadcrumb) built in
  `src/lib/seo.ts`.
- **Custom pulley scroll indicator** — a small, fixed CSS-only animation on
  the right edge of the viewport (a construction worker hoisted up as a
  counterweight descends) that doubles as a stylised scroll progress
  indicator, replacing the native scrollbar.
- **Custom icon set** — all icons are hand-built SVG React components under
  `src/icons/`, no icon library dependency.

## Tech Stack

| Layer       | Choice                              |
| ----------- | ------------------------------------ |
| Framework   | Next.js (App Router)                |
| Language    | TypeScript                          |
| Styling     | Tailwind CSS v4                     |
| Fonts       | Geist (via `next/font`)             |
| Images      | `next/image`                        |
| Structured data | JSON-LD via `next/script`       |

No component/animation library dependencies (no Framer Motion, no icon
package) — animations are done with plain CSS transforms/transitions and
`requestAnimationFrame`, and icons are local SVG components.

## Getting Started

### Prerequisites

- Node.js 18.18+ (or 20+ recommended)
- npm, pnpm, or yarn

### Installation

```bash
git clone <repository-url>
cd <repository-folder>
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SITE_URL=https://www.kallistoengineering.com
```

This is used to build absolute URLs for metadata, Open Graph images and
JSON-LD. Falls back to `http://localhost:3000` if unset.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/                      # Next.js App Router pages & layouts
│   ├── layout.tsx            # Root layout — fonts, global JSON-LD, pulley animation
│   └── (pages)/
│       ├── page.tsx          # Home
│       ├── about/page.tsx
│       ├── services/page.tsx
│       ├── projects/page.tsx
│       └── contact/page.tsx
├── components/
│   ├── app/                  # Site chrome — header, footer, scroll-to-top, pulley animation
│   ├── reusable/              # Shared building blocks (buttons, links, labels, etc.)
│   └── views/                 # Page-specific sections, grouped by page (home/about/services/projects/contact)
├── contents/                  # Page-level copy (hero text, footer text, project listings, etc.)
├── utils/
│   └── constant.ts            # Central data: nav items, services, team, projects, company info, etc.
├── hooks/                     # Reusable hooks (scroll progress, element size, count-up)
├── icons/                     # Hand-built SVG icon components + barrel export
├── lib/
│   └── seo.ts                 # Metadata builders + JSON-LD generators
├── styles/
│   └── globals.css            # Tailwind entry point + global overrides
└── types/
    └── types.ts                # Shared TypeScript interfaces
```

## Updating Content

Most copy changes don't require editing component files:

- **Company-wide facts** (contact info, board members, vision/mission, core
  values, services, sectors, team roster, work history, stats) —
  `src/utils/constant.ts`.
- **Home page section copy** (hero, services teaser, projects teaser, spots
  map, features, FAQ) — `src/contents/homePage.ts`.
- **Header/footer copy** — `src/contents/header.ts`, `src/contents/footer.ts`.
- **Full project directory** (used on the Projects page, with categories) —
  `src/contents/projects.ts`.
- **Per-page SEO** (title, description, keywords) — `PAGE_SEO` in
  `src/lib/seo.ts`.

## Deployment

This is a standard Next.js app and deploys as-is to
[Vercel](https://vercel.com) or any Node.js hosting environment that
supports Next.js. Set `NEXT_PUBLIC_SITE_URL` in your hosting provider's
environment variables to the production domain before building.

## License

Proprietary — © Kallisto Engineering Consultancy Pvt. Ltd. All rights
reserved.
