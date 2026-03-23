"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

type SlideData = {
  bg: string;
  title: string;
  subtitle: string;
};

interface HeroSliderProps {
  slides: SlideData[];
}

// 🎨 THEME COLORS (premium system)
const COLORS = {
  primary: "#0F2A2A",
  secondary: "#123F3F",
  accent: "#E78946",
  accentSoft: "#F5A76C",
};

// 🔘 Arrow Button (glass + gold hover)
const Arrow = ({
  direction,
  onClick,
}: {
  direction: "next" | "prev";
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 z-20 ${
      direction === "next" ? "right-6" : "left-6"
    } -translate-y-1/2 
    bg-white/10 backdrop-blur-lg border border-white/20
    p-3 rounded-full shadow-xl
    hover:bg-[${COLORS.accent}] hover:scale-110 transition-all duration-300`}
  >
    {direction === "next" ? (
      <FaChevronRight className="w-5 h-5 text-white" />
    ) : (
      <FaChevronLeft className="w-5 h-5 text-white" />
    )}
  </button>
);

// 🚀 CTA Button (premium gradient)
const CTAButton = ({ href }: { href: string }) => (
  <Link
    href={href}
    className="mt-6 inline-block px-8 py-3 rounded-full font-semibold text-white
    bg-gradient-to-r from-[#E78946] to-[#F5A76C]
    shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
  >
    Get Free Quote
  </Link>
);

// 🎯 Slide
const HeroSlide = ({
  bg,
  title,
  subtitle,
  active,
}: SlideData & { active: boolean }) => (
  <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
    
    {/* Background Image */}
    <Image
      src={bg}
      alt={title}
      fill
      priority={active}
      className={`object-cover transition-transform duration-[2000ms] ${
        active ? "scale-105" : "scale-100"
      }`}
    />

    {/* Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0F2A2A]/70 to-[#0F2A2A]/90" />

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-3xl animate-fadeInUp">
      
      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
        <span className="text-[#E78946]">{title}</span>
      </h1>

      <p className="mt-4 text-lg text-gray-200">
        {subtitle}
      </p>

      <CTAButton href="tel:+917995792953" />
    </div>
  </div>
);

// 🧠 MAIN SLIDER (no external lib → faster)
export default function HeroSlider({ slides }: HeroSliderProps) {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full overflow-hidden bg-[#0F2A2A]">
      
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <HeroSlide {...slide} active={i === index} />
        </div>
      ))}

      {/* Arrows */}
      <Arrow direction="prev" onClick={prev} />
      <Arrow direction="next" onClick={next} />

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index
                ? "bg-[#E78946] scale-125"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}