"use client";

import Image from "next/image";

type HeroSectionProps = {
  title: string;
  description: string;
  image: string;
};

const HeroSection = ({ title, description, image }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover brightness-50"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

      {/* Glow */}
      <div className="absolute w-[600px] h-[400px] bg-[#E78946]/10 blur-[120px] top-[-100px] left-1/2 -translate-x-1/2" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight 
        bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
        bg-clip-text text-transparent">
          {title}
        </h1>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          {description}
        </p>

        <a
          href="https://wa.me/7995792953"
          target="_blank"
          className="inline-block mt-8 px-8 py-3 rounded-xl 
          bg-gradient-to-r from-[#E78946] to-orange-500
          text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Get Free Quote
        </a>
      </div>
    </section>
  );
};

export default HeroSection;