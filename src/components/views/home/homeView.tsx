"use client";
// import { Contact } from "./contactSection";
import { FAQ } from "./faqSection";
import { Features } from "./featureSection";
import { Gallery } from "./gallerySection";
import { Hero } from "./heroSection";
import { Projects } from "./projectSection";
import { Services } from "./servicesSection";
import { Spots } from "./spotsSection";
import { Team } from "./teamSection";

export default function HomeView() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Spots />
      <Features />
      <Team />
      <FAQ />
      <Gallery />
      {/* <Contact /> */}
    </>
  );
}
