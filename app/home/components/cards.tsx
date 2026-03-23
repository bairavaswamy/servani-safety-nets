"use client";

import { BookOpen, Phone } from "lucide-react";
import Image from "next/image";

interface SafetyCardProps {
  image: string;
  title: string;
  description: string;
  readMoreLink?: string;
  callNumber?: string;
}

const SafetyCard = ({
  image,
  title,
  description,
  readMoreLink = "",
  callNumber = "",
}: SafetyCardProps) => {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden 
      bg-white/5 backdrop-blur-xl border border-white/10
      shadow-[0_10px_40px_rgba(0,0,0,0.5)]
      transition-all duration-500 hover:-translate-y-2 
      hover:shadow-[0_20px_60px_rgba(231,137,70,0.25)]"
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E78946]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-[260px]">
        
        {/* Title + Description */}
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">
            {title}
          </h2>

          <p className="mt-2 text-gray-400 text-sm leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-5 flex items-center justify-between gap-3">
          
          {/* Read More */}
          <a
            href={readMoreLink}
            className="flex items-center gap-2 text-sm font-medium text-[#E78946] 
            hover:text-orange-300 transition"
          >
            <BookOpen className="size-4" />
            Learn More
          </a>

          {/* Call Now (Primary CTA) */}
          <a
            href={callNumber ? `tel:${callNumber}` : "#"}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full 
            text-sm font-semibold text-white
            bg-gradient-to-r from-[#E78946] to-orange-500
            shadow-lg hover:shadow-orange-500/50
            hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            {/* Shine effect */}
            <span className="absolute inset-0">
              <span className="absolute w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent 
              -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </span>

            <Phone className="size-4 relative z-10" />
            <span className="relative z-10">Call Now</span>
          </a>
        </div>

        {/* Trust hint */}
        <p className="mt-3 text-[11px] text-gray-500">
          Trusted • Durable • Professional Installation
        </p>
      </div>
    </div>
  );
};

export default SafetyCard;