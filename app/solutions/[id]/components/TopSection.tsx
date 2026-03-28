"use client";

import Image from "next/image";

type TopSectionProps = {
  title: string;
  description: string;
  image: string;
};

const TopSection = ({ title, description, image }: TopSectionProps) => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E78946]/10 blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-12 tracking-tight 
        bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
        bg-clip-text text-transparent">
          {title}
        </h1>

        {/* Divider */}
        <div className="w-20 h-[2px] mx-auto mb-12 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl order-2 lg:order-1">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content */}
          <div className="order-3 lg:order-2 text-gray-300 text-base md:text-lg leading-relaxed 
          backdrop-blur-md bg-white/5 p-8 rounded-2xl shadow-xl border border-white/10">
            
            <p className="mb-4">
            {description}
            </p>

            {/* Highlight line */}
            <p className="text-sm text-gray-500 mt-6">
              Premium Quality • Expert Installation • Trusted Protection
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;