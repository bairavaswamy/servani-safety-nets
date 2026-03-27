"use client";

import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative py-24 px-6 text-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

      {/* Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#E78946]/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* 🔥 Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] bg-clip-text text-transparent">
            Protect Your Family Today
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
          Get professional safety nets and invisible grills in Bangalore.  
          Strong materials, expert installation, and long-lasting protection.
        </p>

        {/* ⚡ Urgency Line */}
        <p className="text-sm text-[#E78946] mb-8 font-medium">
          ⚡ Limited slots available • Same day installation possible
        </p>

        {/* 🚀 CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          {/* Call Button */}
          <a
            href="tel:+917995792953"
            className="group relative px-8 py-4 rounded-full font-semibold text-white 
            bg-gradient-to-r from-[#E78946] to-orange-500
            shadow-[0_10px_40px_rgba(231,137,70,0.4)]
            hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">📞 Call Now</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917995792953"
            target="_blank"
            className="px-8 py-4 rounded-full border border-white/20 
            text-white hover:bg-white/10 transition"
          >
            💬 WhatsApp
          </a>

          {/* Secondary */}
          <Link
            href="/contactUs"
            className="px-8 py-4 rounded-full border border-[#E78946]/40 
            text-[#E78946] hover:bg-[#E78946]/10 transition"
          >
            Get Free Consultation
          </Link>
        </div>

        {/* 💎 Trust Row */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <span>🛡️ 100% Safety Guarantee</span>
          <span>👷 Expert Installation</span>
          <span>⭐ 4.9 Rating</span>
          <span>🏠 5000+ Homes Protected</span>
        </div>

      </div>
    </section>
  );
};

export default CTASection;