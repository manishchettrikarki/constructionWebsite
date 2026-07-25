import { ProjectsHero } from "@/components/views/projects/heroSection";
import { ProjectsListSection } from "@/components/views/projects/listSection";
import { getProjects } from "@/lib/data/projects";
import {
  breadcrumbJsonLd,
  buildMetadata,
  PAGE_SEO,
  webPageJsonLd,
} from "@/lib/seo";
import { PAGE_HEROES } from "@/utils/constant";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = buildMetadata(PAGE_SEO.projects);

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <ProjectsHero />
      <ProjectsListSection projects={projects} />

      {/*  */}
      <Script
        id="json-ld-projects"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd(PAGE_SEO.projects)),
        }}
      />
      <Script
        id="json-ld-breadcrumb-projects"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd(PAGE_HEROES.projects.breadcrumbs),
          ),
        }}
      />
    </div>
  );
}