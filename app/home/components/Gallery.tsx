"use client";

import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 350;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-[#E78946]/10 blur-[120px] pointer-events-none" />

      {/* Title */}
      <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-center mb-14 
        bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
        bg-clip-text text-transparent tracking-tight">
        Our Work Gallery
      </h2>

      <div className="relative max-w-7xl mx-auto">

        {/* Edge fade (premium touch) */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-20" />

        {/* LEFT BUTTON */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 z-30 -translate-y-1/2 
          backdrop-blur-xl bg-white/10 border border-white/20
          p-3 rounded-full shadow-lg 
          hover:bg-[#E78946] hover:scale-110 transition-all duration-300"
        >
          <FaChevronLeft className="text-white" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 z-30 -translate-y-1/2 
          backdrop-blur-xl bg-white/10 border border-white/20
          p-3 rounded-full shadow-lg 
          hover:bg-[#E78946] hover:scale-110 transition-all duration-300"
        >
          <FaChevronRight className="text-white" />
        </button>

        {/* SCROLLER */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto px-10
          scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="snap-center min-w-[260px] md:min-w-[320px] lg:min-w-[360px] flex-shrink-0"
            >
              <div className="group relative h-60 md:h-72 lg:h-80 rounded-3xl overflow-hidden 
                border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">

                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width:768px) 80vw, (max-width:1024px) 40vw, 25vw"
                  priority={i === 0}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition" />

                {/* Subtle shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}