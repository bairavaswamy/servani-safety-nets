"use client";

import React from "react";

type Testimonial = {
  comment: string;
  author: string;
};

const TestimonialCard = ({ comment, author }: Testimonial) => (
  <div className="relative min-w-[320px] max-w-[360px] flex-shrink-0 mx-4 group">
    
    {/* Glass Card */}
    <blockquote
      className="relative h-full rounded-2xl p-6 backdrop-blur-xl 
      bg-white/5 border border-white/10
      shadow-[0_10px_40px_rgba(0,0,0,0.4)]
      transition-all duration-500 
      group-hover:-translate-y-2 
      group-hover:shadow-[0_20px_60px_rgba(231,137,70,0.25)]"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#E78946]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

      <p className="relative z-10 text-gray-200 italic leading-relaxed">
        “{comment}”
      </p>

      <footer className="relative z-10 mt-5 text-sm font-semibold text-[#E78946]">
        — {author}
      </footer>
    </blockquote>
  </div>
);

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E78946]/10 blur-[120px] pointer-events-none" />

      {/* Heading */}
      <h2
        className="relative z-10 text-4xl md:text-5xl font-extrabold text-center mb-14 
        bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
        bg-clip-text text-transparent tracking-tight"
      >
        Loved by Our Customers
      </h2>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        
        {/* Edge fade (premium touch) */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-20" />

        <div className="flex w-max animate-marquee">
          {/* Duplicate for seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;