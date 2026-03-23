import React from "react";
import { FaDove, FaShieldAlt, FaTree, FaBlog, FaQuestionCircle, FaBug } from "react-icons/fa";
import { GiBrickWall, GiFactory, GiPoolDive, GiMonkey } from "react-icons/gi";
import { MdPrivacyTip, MdPolicy, MdPets, MdConstruction } from "react-icons/md";

import FooterCompanyInfo from "./FooterCompantInfo";
import FooterSection from "./FooterSection";
import FooterBottom from "./FooterBottom";

interface FooterItem {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const pigeonBirdNets: FooterItem[] = [
  { name: "Pigeon Safety Nets", icon: <FaDove />, link: "/solutions/pigeon-safety-nets" },
  { name: "Anti Bird Nets", icon: <FaDove />, link: "/solutions/anti-bird-nets" },
  { name: "Bird Nets for Balconies", icon: <FaDove />, link: "/solutions/bird-nets-for-balconies" },
  { name: "Bird Netting Service", icon: <FaDove />, link: "/solutions/bird-netting-service" },
  { name: "Bird Protection Nets", icon: <FaDove />, link: "/solutions/bird-protection-nets" },
  { name: "Pigeon Nets Installation", icon: <FaDove />, link: "/solutions/pigeon-nets-installation" },
  { name: "Pigeon and Bird Spikes", icon: <FaDove />, link: "/solutions/pigeon-bird-spikes" },
  { name: "Shade Nets", icon: <FaShieldAlt />, link: "/solutions/shade-nets" },
  { name: "Nylon Nets", icon: <FaShieldAlt />, link: "/solutions/nylon-nets" },
  { name: "Anti Seagull Nets", icon: <FaShieldAlt />, link: "/solutions/anti-seagull-safety-nets" },
  { name: "Glass Safety Nets", icon: <FaShieldAlt />, link: "/solutions/glass-safety-nets" },
  { name: "HDPE Nets", icon: <FaShieldAlt />, link: "/solutions/hdpe-safety-nets" },
  { name: "Window Safety Nets", icon: <FaShieldAlt />, link: "/solutions/window-safety-nets" },
];

const safetyNets: FooterItem[] = [
  { name: "Building Safety Nets", icon: <GiBrickWall />, link: "/solutions/building-safety-nets" },
  { name: "Car Parking Safety Nets", icon: <FaShieldAlt />, link: "/solutions/car-parking-safety-nets" },
  { name: "Children Safety Nets", icon: <FaShieldAlt />, link: "/solutions/children-safety-nets" },
  { name: "Construction Safety Nets", icon: <FaShieldAlt />, link: "/solutions/construction-safety-nets" },
  { name: "Industrial Safety Nets", icon: <GiFactory />, link: "/solutions/industrial-safety-nets" },
  { name: "Pets Safety Nets", icon: <MdPets />, link: "/solutions/pets-safety-nets" },
  { name: "Swimming Pool Safety Nets", icon: <GiPoolDive />, link: "/solutions/swimming-pool-safety-nets" },
  { name: "Duct Area Safety Nets", icon: <MdConstruction />, link: "/solutions/duct-area-safety-nets" },
  { name: "Open Area Safety Nets", icon: <GiBrickWall />, link: "/solutions/open-area-safety-nets" },
  { name: "Mosquito Safety Nets", icon: <FaBug />, link: "/solutions/mosquito-safety-nets" },
  { name: "Monkey Safety Nets", icon: <GiMonkey />, link: "/solutions/monkey-safety-nets" },
  { name: "Coconut Tree Safety Nets", icon: <FaTree />, link: "/solutions/coconut-tree-safety-nets" },
];

const resources: FooterItem[] = [
  { name: "Blog", icon: <FaBlog />, link: "/blogs" },
  { name: "FAQs", icon: <FaQuestionCircle />, link: "/faq" },
  { name: "Privacy Policy", icon: <MdPrivacyTip />, link: "/privacy-policy" },
  { name: "Terms & Conditions", icon: <MdPolicy />, link: "/terms-and-conditions" },
];


const Footer: React.FC = () => {
  return (
    <footer className="relative text-gray-300 overflow-hidden" role="contentinfo">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E78946]/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* Company Info */}
        <FooterCompanyInfo />

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <FooterSection 
            title="Pigeon & Bird Nets" 
            items={pigeonBirdNets} 
            iconColor="text-blue-400" 
          />
          <FooterSection 
            title="Safety Nets" 
            items={safetyNets} 
            iconColor="text-green-400" 
          />
          <FooterSection 
            title="Resources" 
            items={resources} 
            iconColor="text-yellow-400" 
          />
        </div>

        {/* CTA Strip (HIGH CONVERSION) */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 mb-4">
            Need help choosing the right safety solution?
          </p>

          <a
            href="tel:7995792953"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
            bg-gradient-to-r from-[#E78946] to-orange-500 
            text-white font-semibold
            shadow-lg hover:shadow-orange-500/40
            hover:scale-105 transition-all duration-300"
          >
            📞 Get Free Consultation
          </a>
        </div>

        {/* Bottom Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;