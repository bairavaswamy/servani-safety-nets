"use client";

import React from "react";
import { Star } from "lucide-react";

type Testimonial = {
  comment: string;
  author: string;
};

const TestimonialCard = ({ comment, author }: Testimonial) => (
  <div className="min-w-[300px] max-w-[340px] mx-4 flex-shrink-0 group">
    
    <div
      className="h-full rounded-2xl p-6 
      bg-gradient-to-b from-white/10 to-white/5 
      border border-white/10
      shadow-lg
      transition-all duration-500 
      group-hover:-translate-y-2 
      group-hover:shadow-[0_20px_50px_rgba(231,137,70,0.2)]"
    >
      
      {/* ⭐ Stars */}
      <div className="flex gap-1 mb-3 text-[#E78946]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill="#E78946" stroke="none" />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-300 text-[15px] leading-relaxed line-clamp-5">
        “{comment}”
      </p>

      {/* Author */}
      <div className="mt-5">
        <p className="text-sm font-semibold text-white">{author}</p>
        <p className="text-xs text-gray-400">Verified Customer</p>
      </div>
    </div>
  </div>
);

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#E78946]/10 blur-[100px]" />

      {/* ⭐ Rating Badge */}
      <div className="relative z-10 flex flex-col items-center mb-6">
        <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md shadow-md">
          
          {/* Stars */}
          <div className="flex text-[#E78946]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="#E78946" stroke="none" />
            ))}
          </div>

          {/* Rating text */}
          <p className="text-sm text-gray-200 font-medium">
            4.9 Rating • 500+ Happy Customers
          </p>
        </div>
      </div>

      {/* Heading */}
      <h2
        className="relative z-10 text-3xl md:text-5xl font-bold text-center mb-10 
        bg-gradient-to-r from-[#E78946] to-orange-300 
        bg-clip-text text-transparent"
      >
        Trusted by Families Across Bangalore
      </h2>

      {/* Subheading (NEW - more friendly) */}
      <p className="relative z-10 text-center text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base">
        Real experiences from our customers who made their homes safer with 
        Servani Safety Nets. Quality service, strong materials, and peace of mind.
      </p>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        
        {/* Edge fade */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-20" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>

      {/* CTA (NEW 🔥) */}
      <div className="relative z-10 mt-14 flex justify-center">
        <a
          href="tel:+917995792953"
          className="px-6 py-3 rounded-full bg-[#E78946] text-white font-semibold 
          shadow-lg hover:scale-105 transition duration-300"
        >
          Get Free Installation Quote
        </a>
      </div>
    </section>
  );
};

export default Testimonials;