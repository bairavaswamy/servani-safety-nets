import { Metadata } from "next";
import dynamic from "next/dynamic";
import {
  cardsData,
  testimonials,
  galleryData,
} from "./data/homeData";

const HeroSection = dynamic(() => import("./components/HeroSection"));
const SafetySolutions = dynamic(() => import("./components/SafetySolutions"));
const Gallery = dynamic(() => import("./components/Gallery"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const CTASection = dynamic(() => import("./components/CTASection"));
const MissionSection = dynamic(() => import("./components/MissionSection"));
const LocalBusinessSchema = dynamic(() => import("./components/LocalBusinessSchema"));



export const metadata: Metadata = {
  title: "Best Safety Nets & Invisible Grills in Bengaluru",
  description:
    "Professional balcony safety nets, pigeon nets, and invisible grills in Bengaluru.",
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />

      <main className="min-h-screen bg-gradient-to-br from-secondary to-primary text-white">

        <HeroSection title="Balcony Safety Nets" description="Protect your family with our premium safety nets in Bengaluru." image="" />

        <SafetySolutions cards={cardsData} />

        <Gallery images={galleryData} />

        <Testimonials testimonials={testimonials} />

        <CTASection />

        <MissionSection />

      </main>
    </>
  );
}