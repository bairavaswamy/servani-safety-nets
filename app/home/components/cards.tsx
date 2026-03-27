"use client";

import { BookOpen, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SafetyCardProps {
  image: string;
  title: string;
  description: string;
  readMoreLink: string;
  callNumber: string;

  // 🔥 NEW PROPS
  rating?: number;
  reviews?: number;
  badge?: string;
  tags?: string[];
}

const SafetyCard = ({
  image,
  title,
  description,
  readMoreLink,
  callNumber,
  rating = 4.9,
  reviews = 120,
  badge,
  tags = [],
}: SafetyCardProps) => {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden 
      bg-white/5 backdrop-blur-xl border border-white/10
      shadow-[0_10px_40px_rgba(0,0,0,0.5)]
      transition-all duration-500 hover:-translate-y-2 
      hover:shadow-[0_20px_60px_rgba(231,137,70,0.25)]"
    >
      {/* 🔥 Gradient border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 
        bg-gradient-to-r from-[#E78946]/20 via-transparent to-[#E78946]/20 pointer-events-none" />

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* 🏷️ Servani Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full 
          bg-black/60 backdrop-blur-md border border-white/10 
          text-[11px] text-white">
          Servani
        </div>

        {/* ⭐ Dynamic Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full 
          bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-white">
          
          <Star size={10} fill="#E78946" stroke="none" />
          <span className="text-[10px]">{rating}</span>
          <span className="text-[9px] text-gray-300">({reviews})</span>
        </div>

        {/* 🔥 Optional Badge */}
        {badge && (
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full 
            bg-[#E78946] text-[10px] font-semibold text-white shadow-md">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-[270px]">
        
        {/* Title */}
        <div>
          <h2 className="text-lg font-semibold text-white">
            {title}
          </h2>

          {/* 🔥 Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="mt-2 text-gray-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-4 flex items-center justify-between gap-3">
          
          <Link
            href={readMoreLink}
            className="flex items-center gap-1 text-sm text-[#E78946] hover:text-orange-300 transition"
          >
            <BookOpen className="size-4" />
            Details
          </Link>

          <a
            href={callNumber ? `tel:${callNumber}` : "#"}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full 
            text-sm font-semibold text-white
            bg-gradient-to-r from-[#E78946] to-orange-500
            shadow-lg hover:shadow-orange-500/50
            hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <Phone className="size-4 relative z-10" />
            <span className="relative z-10">Call</span>
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-3 text-[11px] text-gray-500">
          Trusted Installation • Long Lasting • Bangalore Service
        </p>
      </div>
    </div>
  );
};

export default SafetyCard;