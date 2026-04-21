import { PageHero } from "@/components/reusable/pageHero";

export function ProjectsHero() {
  return (
    <PageHero
      subtitle="Building communities"
      title="Our Projects"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Projects" }]}
    />
  );
}
