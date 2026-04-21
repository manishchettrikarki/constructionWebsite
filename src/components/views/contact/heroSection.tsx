import { PageHero } from "@/components/reusable/pageHero";

export function ContactHero() {
  return (
    <PageHero
      subtitle="Build relationships"
      title="Contacts"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contacts" }]}
    />
  );
}
