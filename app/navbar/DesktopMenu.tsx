'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contactUs', label: 'Contact' },
];

const serviceLinks = [
  { href: '/services/balcony', text: 'Balcony Safety Nets' },
  { href: '/services/invisible', text: 'Invisible Grills' },
  { href: '/services/spikes', text: 'Bird Spikes' },
  { href: '/services/residential', text: 'Residential Safety Nets' },
  { href: '/services/sports', text: 'Sports Safety Nets' },
  { href: '/services/construction', text: 'Construction Safety Nets' },
];

export default function DesktopMenu() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => pathname === path;

  const handleMouseEnter = () => {
    if (hoverTimer) clearTimeout(hoverTimer);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => setIsDropdownOpen(false), 120);
    setHoverTimer(timer);
  };

  useEffect(() => {
    return () => {
      if (hoverTimer) clearTimeout(hoverTimer);
    };
  }, [hoverTimer]);

  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-gray-300 relative">
      
      {/* Main Links */}
      {links.map((link) => (
        <li key={link.href} className="relative group">
          <Link
            href={link.href}
            className={`relative py-1 transition duration-300 ${
              isActive(link.href)
                ? 'text-white'
                : 'hover:text-white'
            }`}
          >
            {link.label}

            {/* Underline animation */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-[#E78946] transition-all duration-300 ${
                isActive(link.href)
                  ? 'w-full'
                  : 'w-0 group-hover:w-full'
              }`}
            />
          </Link>
        </li>
      ))}

      {/* SERVICES */}
      <li
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={`relative py-1 transition duration-300 ${
            pathname.startsWith('/services')
              ? 'text-white'
              : 'hover:text-white'
          }`}
        >
          Services

          <span
            className={`absolute left-0 -bottom-1 h-[2px] bg-[#E78946] transition-all duration-300 ${
              pathname.startsWith('/services')
                ? 'w-full'
                : 'w-0 group-hover:w-full'
            }`}
          />
        </button>

        {/* Dropdown */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 mt-4 w-72 
          transition-all duration-300 z-50
          ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-3 invisible'}`}
        >
          <div className="rounded-2xl overflow-hidden 
            bg-black/80 backdrop-blur-xl border border-white/10
            shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-2"
          >
            {serviceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-sm transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-white/10 text-[#E78946]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </li>

      {/* CTA Button (HIGH CONVERSION) */}
      <li>
        <a
          href="tel:7995792953"
          className="ml-4 px-5 py-2 rounded-full 
          bg-gradient-to-r from-[#E78946] to-orange-500 
          text-white text-sm font-semibold
          shadow-lg hover:shadow-orange-500/40
          hover:scale-105 transition-all duration-300"
        >
          Call Now
        </a>
      </li>
    </ul>
  );
}