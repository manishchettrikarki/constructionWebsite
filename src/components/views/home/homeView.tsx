"use client";
// import { Contact } from "./contactSection";
import { FAQ } from "./faqSection";
import { Features } from "./featureSection";
// import { Gallery } from "./gallerySection";
import { Hero } from "./heroSection";
import { Projects } from "./projectSection";
import { Services } from "./servicesSection";
import { Spots } from "./spotsSection";
import type { PublicFaq } from "@/lib/data/faqs";
import type { SiteStats } from "@/lib/data/stats.types";
// import { Team } from "./teamSection";

export default function HomeView({
  faqs,
  stats,
}: {
  faqs: PublicFaq[];
  stats: SiteStats;
}) {
  return (
    <>
      <Hero stats={stats} />
      <Services />
      <Projects />
      <Spots stats={stats} />
      <Features />
      {/* <Team /> */}
      <FAQ faqs={faqs} />
      {/* <Gallery /> */}
      {/* <Contact /> */}
    </>
  );
}
