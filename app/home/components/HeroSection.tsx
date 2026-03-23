"use client";

import React, { useMemo } from "react";
import HeroSlider from "./HeroSlider";

type SlideData = {
  bg: string;
  title: string;
  subtitle: string;
};

interface HeroSectionProps {
  desktopSlides: SlideData[];
  mobileSlides: SlideData[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  desktopSlides,
  mobileSlides,
}) => {
  // 🧠 Memoize slides (prevents unnecessary re-renders)
  const desktop = useMemo(() => desktopSlides, [desktopSlides]);
  const mobile = useMemo(() => mobileSlides, [mobileSlides]);

  return (
    <section className="relative w-full overflow-hidden bg-[#0F2A2A]">
      
      {/* Desktop */}
      <div className="hidden md:block">
        <HeroSlider slides={desktop} />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <HeroSlider slides={mobile} />
      </div>

      {/* Optional Premium Overlay Glow */}
      <div className="pointer-events-none absolute inset-0 
        bg-gradient-to-t from-black/40 via-transparent to-black/20" 
      />
    </section>
  );
};

export default React.memo(HeroSection);