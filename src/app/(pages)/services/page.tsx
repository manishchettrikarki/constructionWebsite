import { ServicesContactSection } from "@/components/views/services/contactSection";
import { ServicesExpertsSection } from "@/components/views/services/expertSection";
import { ServicesHero } from "@/components/views/services/heroSection";
import { ServicesListSection } from "@/components/views/services/listSection";
import { ServicesNumbersSection } from "@/components/views/services/numberSection";
import { ServicesSkillsSection } from "@/components/views/services/skillsSection";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesListSection />
      <ServicesNumbersSection />
      <ServicesExpertsSection />
      <ServicesSkillsSection />
      <ServicesContactSection />
    </main>
  );
}
