"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

const keywords = [
  "Balcony Safety Nets in Bangalore",
  "Pigeon Safety Nets in Bangalore",
  "Invisible Grills in Bangalore",
  "Cat Safety Nets in Bangalore",
];

interface HeroProps {
  title: string;
  description: string;
  image: string;
}

const slides = [
  {
    image: "/images/balcony.jpg",
    text: "Protect Your Family with Safety Nets",
  },
  {
    image: "/images/invisible-grill.webp",
    text: "Modern Invisible Grills for Stylish Homes",
  },
  {
    image: "/images/pigeon-net.webp",
    text: "Keep Pigeons Away – Stay Clean & Safe",
  },
];

const HeroSection = ({ title, description }: HeroProps) => {
  const [current, setCurrent] = useState(0);

  // 🔁 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={slides[current].image}
        alt="hero"
        className="absolute w-full h-full object-cover transition-all duration-1000"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 text-white">
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
          {title} in Bangalore
        </h1>

        <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-6 flex-wrap justify-center">
          <a
            href="tel:+917995792953"
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            <Phone size={18} />
            Call Now
          </a>

          <a
            href="https://wa.me/917995792953"
            target="_blank"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        {/* Trust Line */}
        <p className="mt-6 text-sm text-gray-300">
          ✔ 10+ Years Experience • ✔ 100% Safe Installation • ✔ Affordable Pricing
        </p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === i ? "bg-yellow-400" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;