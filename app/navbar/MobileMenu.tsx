"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Home,
  Info,
  Image as GalleryIcon,
  PhoneCall,
  Layers3,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { servicesData as originalServices } from "../data/serviceData";
import { areas } from "../data/areasData";

// Add all areas to each service dynamically
const servicesData = Object.fromEntries(
  Object.entries(originalServices).map(([key, service]) => [
    key,
    { ...service, areas }, // merge areas into each service
  ])
);

const links = [
  { href: "/", label: "Home", icon: <Home size={18} /> },
  { href: "/about", label: "About", icon: <Info size={18} /> },
  { href: "/gallery", label: "Gallery", icon: <GalleryIcon size={18} /> },
  { href: "/contactUs", label: "Contact", icon: <PhoneCall size={18} /> },
];

const MobileMenu = ({ isOpen, setIsOpen }: any) => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleTouchStart = (e: any) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    const currentX = e.touches[0].clientX;
    if (currentX - touchStart < -80) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
      </button>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={`fixed top-0 left-0 h-full w-[85%] max-w-xs z-40 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        bg-black/90 backdrop-blur-xl border-r border-white/10 shadow-2xl
        flex flex-col`}
      >
        {/* Header */}
        <div className="relative flex flex-col items-center pt-16 pb-5 border-b border-white/10">
          <div className="relative w-14 h-14 mb-2">
            <Image
              src="/srinulogo.jpg"
              alt="Servani Logo"
              fill
              className="object-contain rounded-full border border-white/20"
            />
          </div>

          <h1 className="text-base font-bold bg-gradient-to-r from-[#E78946] to-orange-300 bg-clip-text text-transparent">
            Servani Safety Nets
          </h1>

          <p className="text-[11px] text-gray-400 mt-1">
            Trust • Safety • Quality
          </p>

          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-4 text-gray-400 hover:text-red-400"
          >
            <RxCross2 size={22} />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 pb-24">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-500 ${
                isActive(link.href)
                  ? "bg-white/10 text-[#E78946]"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
              style={{
                transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                opacity: isOpen ? 1 : 0,
                transitionDelay: `${i * 70}ms`,
              }}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}

          {/* Services Button */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5"
          >
            <div className="flex items-center gap-3">
              <Layers3 size={18} />
              Services
            </div>
            {isDropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {/* Services Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isDropdownOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="ml-4 mt-3 space-y-2 border-l border-white/10 pl-3">
              {Object.entries(servicesData).map(([key, service]) => (
                <div key={key} className="space-y-1">
                  <Link
                    href={`/service/${key}`}
                    className="block px-3 py-2 text-sm rounded-md text-gray-300 hover:text-[#E78946] hover:bg-white/5 transition font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.title}
                  </Link>

                  {/* Available Areas */}
                  <div className="ml-3 space-x-2 text-xs text-gray-400 flex flex-wrap gap-1">
                    {service.areas.map((area) => (
                      <span
                        key={area}
                        className="px-2 py-1 bg-white/10 rounded-full hover:bg-white/20 transition"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Bottom CTA */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black/90 border-t border-white/10 space-y-3">
          <a
            href="tel:7995792953"
            className="block w-full text-center py-3 rounded-full 
            bg-gradient-to-r from-[#E78946] to-orange-500 
            text-white font-semibold shadow-lg"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/917995792953"
            target="_blank"
            className="block w-full text-center py-3 rounded-full 
            bg-green-500 text-white font-semibold shadow-lg"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;