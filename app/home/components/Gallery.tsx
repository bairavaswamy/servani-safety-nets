"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface GalleryItem {
  image: string;
  title: string;
  location: string;
  service: string;
}

export default function Gallery({ images }: { images: GalleryItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [preview, setPreview] = useState<GalleryItem | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  // 🔥 Auto Scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!isHovering) {
        container.scrollBy({ left: 1, behavior: "smooth" });

        // Infinite loop feel
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 5
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isHovering]);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#E78946] to-orange-300 bg-clip-text text-transparent">
          Our Work in Bangalore
        </h2>
        <p className="text-gray-400 mt-4">
          Real installations across Bangalore homes & apartments
        </p>
      </div>

      {/* Scroll Buttons */}
      <button onClick={() => scroll("left")} className="absolute left-4 top-1/2 z-30" aria-label="Previous slide">
        <FaChevronLeft />
      </button>
      <button onClick={() => scroll("right")} className="absolute right-4 top-1/2 z-30" aria-label="Next slide">
        <FaChevronRight />
      </button>

      {/* SCROLLER */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="flex gap-6 overflow-x-auto px-10 no-scrollbar"
      >
        {images.map((item, i) => (
          <div
            key={i}
            className="min-w-[300px] h-72 relative rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => setPreview(item)}
          >
            <Image
              src={item.image}
              alt={`${item.service} in ${item.location} Bangalore`}
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Tags */}
            <div className="absolute top-3 left-3 bg-[#E78946] text-xs px-3 py-1 rounded-full">
              {item.service}
            </div>

            <div className="absolute top-3 right-3 bg-black/50 text-xs px-3 py-1 rounded-full">
              📍 {item.location}
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 p-4">
              <h3 className="text-white font-semibold">{item.title}</h3>

              <a
                href="https://wa.me/917995792953"
                target="_blank"
                className="inline-block mt-2 text-sm text-[#E78946]"
              >
                Get Quote →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 🔍 LIGHTBOX */}
      {preview && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setPreview(null)}
        >
          <div className="relative w-[90%] max-w-4xl h-[80%]">
            <Image
              src={preview.image}
              alt={preview.title}
              fill
              className="object-contain"
            />

            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-bold">{preview.title}</h3>
              <p className="text-gray-300">
                {preview.service} in {preview.location}, Bangalore
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}