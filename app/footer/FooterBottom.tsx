import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const FooterBottom: React.FC = () => {
  return (
    <section
      aria-label="Footer bottom section"
      className="relative mt-12 pt-6"
    >
      {/* Premium Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        {/* Copyright */}
        <p className="text-sm text-gray-400 tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-r from-[#E78946] to-orange-400 bg-clip-text text-transparent font-semibold">
            Servani Safety Nets
          </span>
          . All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          
          {/* Facebook */}
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

          {/* WhatsApp (Primary Conversion) */}
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

          {/* Instagram */}
          <a
            href="https://www.instagram.com/servanisafetynets?igsh=MTljMjNrdWw2dXo4aA=="
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

      {/* Extra Trust Line (Premium touch) */}
      <p className="mt-6 text-center text-xs text-gray-500">
        Trusted by 1000+ customers • Professional Installation • Quality Assured
      </p>
    </section>
  );
};

export default FooterBottom;