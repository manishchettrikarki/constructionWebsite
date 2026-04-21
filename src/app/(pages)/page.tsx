"use client";
import { Contact } from "@/components/views/home/contactSection";
import { FAQ } from "@/components/views/home/faqSection";
import { Features } from "@/components/views/home/featureSection";
import { Gallery } from "@/components/views/home/gallerySection";
import { Hero } from "@/components/views/home/heroSection";
import { Projects } from "@/components/views/home/projectSection";
import { Services } from "@/components/views/home/servicesSection";
import { Spots } from "@/components/views/home/spotsSection";
import { Team } from "@/components/views/home/teamSection";

//
export default function HomePage() {
  return (
    <div className="font-[Roboto,sans-serif] text-[#000810] bg-white overflow-x-hidden">
      <Hero />
      <Services />
      <Projects />
      <Spots />
      <Features />
      <Team />
      <FAQ />
      <Gallery />
      <Contact />
    </div>
  );
}
