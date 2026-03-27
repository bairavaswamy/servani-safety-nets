"use client";

import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";

const FooterBottom: React.FC = () => {
  return (
    <section
      aria-label="Footer bottom section"
      className="relative mt-14 pt-8"
    >
      {/* Premium Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

        {/* Left Content */}
        <div>
          <p className="text-sm text-gray-400 tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-[#E78946] to-orange-400 bg-clip-text text-transparent font-semibold">
              Servani Safety Nets
            </span>
            . All rights reserved.
          </p>

          {/* 🔥 SEO + Location */}
          <p className="mt-2 text-xs text-gray-500">
            Safety Nets & Invisible Grills in Bangalore
          </p>
        </div>

        {/* 🔥 Quick Contact (High Conversion) */}
        <div className="flex items-center gap-4">

          {/* Call */}
          <a
            href="tel:+917995792953"
            className="flex items-center gap-2 px-4 py-2 rounded-full 
            bg-[#E78946]/10 border border-[#E78946]/30
            text-[#E78946] text-sm font-medium
            hover:bg-[#E78946]/20 transition"
          >
            <FaPhoneAlt className="w-3 h-3" />
            Call Now
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917995792953"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full 
            bg-green-500/10 border border-green-500/30
            text-green-400 text-sm font-medium
            hover:bg-green-500/20 transition"
          >
            <FaWhatsapp className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          
          <a
            href="https://www.facebook.com/share/177w7231SD/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group p-3 rounded-full 
            bg-white/10 backdrop-blur-md border border-white/10
            shadow-lg transition-all duration-300 
            hover:scale-110 hover:bg-blue-600 hover:shadow-blue-500/40"
          >
            <FaFacebookF className="text-white w-4 h-4" />
          </a>

          <a
            href="https://wa.me/917995792953"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="group p-3 rounded-full 
            bg-white/10 backdrop-blur-md border border-white/10
            shadow-lg transition-all duration-300 
            hover:scale-110 hover:bg-green-500 hover:shadow-green-400/50"
          >
            <FaWhatsapp className="text-white w-4 h-4" />
          </a>

          <a
            href="https://www.instagram.com/servanisafetynets"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group p-3 rounded-full 
            bg-white/10 backdrop-blur-md border border-white/10
            shadow-lg transition-all duration-300 
            hover:scale-110 hover:bg-pink-500 hover:shadow-pink-400/40"
          >
            <FaInstagram className="text-white w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 🔥 Trust + Conversion Line */}
      <div className="mt-8 text-center space-y-2">
        <p className="text-xs text-gray-500">
          Trusted by 5000+ customers • 4.9★ rating • Professional Installation
        </p>

        {/* Hidden Conversion CTA */}
        <p className="text-xs text-[#E78946] font-medium">
          Need safety nets in Bangalore? Call now for quick installation.
        </p>
      </div>
    </section>
  );
};

export default FooterBottom;