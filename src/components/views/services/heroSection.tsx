import { PageHero } from "@/components/reusable/pageHero";

export function ServicesHero() {
  return (
    <PageHero
      subtitle="Building communities"
      title="Services"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
    />
  );
}
