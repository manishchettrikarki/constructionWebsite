import { AboutFeaturesSection } from "@/components/views/about/featuresSection";
import { AboutGallerySection } from "@/components/views/about/gallerySection";
import { AboutHero } from "@/components/views/about/heroSection";
import { AboutIntroSection } from "@/components/views/about/introSection";
import { AboutQuoteSection } from "@/components/views/about/quoteSection";
import { AboutReviewsSection } from "@/components/views/about/reviewSection";
import { AboutServicesSection } from "@/components/views/about/serviceSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntroSection />
      <AboutQuoteSection />
      <AboutServicesSection />
      <AboutGallerySection />
      <AboutFeaturesSection />
      <AboutReviewsSection />
    </main>
  );
}
