"use client";

import { ShieldCheck, Star, Users } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow layers */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E78946]/10 blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-orange-500/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight 
          bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
          bg-clip-text text-transparent">
          Our Mission
        </h2>

        {/* Divider */}
        <div className="w-20 h-[2px] mx-auto mb-8 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
          At{" "}
          <span className="text-[#E78946] font-semibold">
            Servani Safety Nets
          </span>
          , our mission is to make every home in Bengaluru{" "}
          <span className="text-white font-medium">
            safer, cleaner, and stress-free
          </span>
          .
          <br className="hidden md:block" />
          <br />
          We deliver high-quality{" "}
          <span className="text-[#E78946] font-semibold">
            safety nets and invisible grills
          </span>{" "}
          that protect your family, children, and pets — without blocking your
          view or comfort.
        </p>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          {/* Customers */}
          <div className="flex flex-col items-center p-6 rounded-xl 
            bg-white/5 border border-white/10 backdrop-blur-lg
            hover:scale-105 transition duration-300">
            <Users className="text-[#E78946] mb-3" size={28} />
            <h3 className="text-2xl font-bold text-white">5000+</h3>
            <p className="text-gray-400 text-sm">Happy Customers</p>
          </div>

          {/* Experience */}
          <div className="flex flex-col items-center p-6 rounded-xl 
            bg-white/5 border border-white/10 backdrop-blur-lg
            hover:scale-105 transition duration-300">
            <ShieldCheck className="text-[#E78946] mb-3" size={28} />
            <h3 className="text-2xl font-bold text-white">10+ Years</h3>
            <p className="text-gray-400 text-sm">Trusted Experience</p>
          </div>

          {/* Rating */}
          <div className="flex flex-col items-center p-6 rounded-xl 
            bg-white/5 border border-white/10 backdrop-blur-lg
            hover:scale-105 transition duration-300">
            <Star className="text-[#E78946] mb-3" size={28} />
            <h3 className="text-2xl font-bold text-white">4.9★</h3>
            <p className="text-gray-400 text-sm">Customer Rating</p>
          </div>
        </div>

        {/* Bottom Line */}
        <p className="mt-10 text-sm text-gray-500">
          Trusted across Bengaluru • Premium quality • Professional installation
        </p>
      </div>
    </section>
  );
};

export default MissionSection;