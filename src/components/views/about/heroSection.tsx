import { PageHero } from "@/components/reusable/pageHero";

export function AboutHero() {
  return (
    <PageHero
      subtitle="Building communities"
      title="About"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
    />
  );
}
