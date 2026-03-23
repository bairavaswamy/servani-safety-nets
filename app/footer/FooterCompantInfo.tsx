import React from "react";

const FooterCompanyInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center py-8">
      
      {/* Brand Name */}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight 
        bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
        bg-clip-text text-transparent">
        Servani Safety Nets
      </h2>

      {/* Premium Divider */}
      <div className="w-20 h-[2px] mt-4 mb-6 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

      {/* Tagline */}
      <p className="max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed">
        Protecting homes, offices, and communities with{" "}
        <span className="text-white font-medium">
          high-quality safety nets
        </span>
        , advanced{" "}
        <span className="text-[#E78946] font-medium">
          pigeon protection solutions
        </span>
        , and modern invisible grills.
        <br className="hidden md:block" />
        <span className="text-[#E78946] italic font-medium">
          {" "}Your safety, our commitment.
        </span>
      </p>

      {/* Trust Tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-6 text-xs text-gray-500">
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
          Trusted Service
        </span>
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
          Durable Materials
        </span>
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
          Professional Installation
        </span>
      </div>
    </div>
  );
};

export default FooterCompanyInfo;