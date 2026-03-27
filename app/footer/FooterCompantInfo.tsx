import React from "react";

const FooterCompanyInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center py-10">

      {/* 🔥 Brand Name */}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight 
        bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
        bg-clip-text text-transparent">
        Servani Safety Nets
      </h2>

      {/* Divider */}
      <div className="w-20 h-[2px] mt-4 mb-6 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

      {/* 🔥 SEO Tagline */}
      <p className="max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed">
        Leading provider of{" "}
        <span className="text-white font-medium">
          safety nets in Bangalore
        </span>
        , offering durable{" "}
        <span className="text-[#E78946] font-medium">
          balcony safety nets, pigeon protection nets
        </span>
        , and modern invisible grills for homes and offices.
        <br className="hidden md:block" />
        <span className="text-[#E78946] italic font-medium">
          {" "}Safe homes start with smart protection.
        </span>
      </p>

      {/* 🔥 Trust Stats (Powerful Addition) */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
        <div>
          <p className="text-[#E78946] font-bold text-lg">5000+</p>
          <p className="text-gray-500 text-xs">Installations</p>
        </div>
        <div>
          <p className="text-[#E78946] font-bold text-lg">4.9★</p>
          <p className="text-gray-500 text-xs">Customer Rating</p>
        </div>
        <div>
          <p className="text-[#E78946] font-bold text-lg">10+</p>
          <p className="text-gray-500 text-xs">Years Experience</p>
        </div>
      </div>

      {/* Trust Tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-6 text-xs text-gray-500">
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
          🛡️ Trusted Service
        </span>
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
          ⚡ Same Day Installation
        </span>
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
          👷 Expert Team
        </span>
      </div>

      {/* 🔥 Hidden SEO + CTA Line */}
      <p className="mt-6 text-xs text-gray-500 max-w-xl">
        Looking for safety nets installation in Bangalore? Contact Servani Safety Nets for fast, reliable, and affordable solutions.
      </p>
    </div>
  );
};

export default FooterCompanyInfo;