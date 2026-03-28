'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { areas } from '@/app/data/areasData';
import { servicesData } from '@/app/data/serviceData';

// Slugify function
const slugify = (text: string) =>
  text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/--+/g, '-');

const links = [
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contactUs', label: 'Contact' },
];

export default function DesktopMenu() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const servicesArray = Object.entries(servicesData).map(([key, value]) => ({
    key,
    title: value.title,
  }));

  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-gray-300 relative">
      {/* Home first */}
      <li className="relative group">
        <Link
          href="/"
          className={`relative py-1 transition duration-300 ${
            pathname === '/' ? 'text-white' : 'hover:text-white'
          }`}
        >
          Home
          <span
            className={`absolute left-0 -bottom-1 h-[2px] bg-[#E78946] transition-all duration-300 ${
              pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          />
        </Link>
      </li>

      {/* SERVICES Dropdown after Home */}
      <li
        className="relative group"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => {
          setIsDropdownOpen(false);
          setHoveredService(null);
        }}
      >
        <button
          className={`relative py-1 transition duration-300 ${
            pathname.startsWith('/bangalore') ? 'text-white' : 'text-gray-300'
          } group`}
        >
          Services
          <span
            className={`absolute left-0 -bottom-1 h-[2px] bg-[#E78946] transition-all duration-300 ${
              isDropdownOpen || pathname.startsWith('/bangalore') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          />
        </button>

        {/* Dropdowns container */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 flex gap-2 z-50">
            {/* First Dropdown: Services */}
            {/* First Dropdown: Services */}
<div className="w-60 max-h-[500px] overflow-y-auto scrollbar-hide bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-2">
  {servicesArray.map((service) => {
    const isActiveService = hoveredService === service.key;
    return (
      <div
        key={service.key}
        onMouseEnter={() => setHoveredService(service.key)}
        className={`px-4 py-2 text-sm cursor-pointer transition-colors duration-300 ${
          isActiveService ? 'text-orange-500 font-semibold' : 'text-white hover:text-orange-500'
        }`}
      >
        {service.title}
      </div>
    );
  })}
</div>
            {/* Second Dropdown: Areas */}
            {hoveredService && (
              <div className="w-80 max-h-[500px] overflow-y-auto scrollbar-hide bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-2">
                <ul>
                  {areas.map((area) => (
                    <li key={`${hoveredService}-${area}`}>
                      <Link
                        href={`/bangalore/${slugify(area)}/${hoveredService}`}
                        className="block px-6 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5"
                      >
                        {servicesData[hoveredService as keyof typeof servicesData].title} in {area.replace(/-/g, ' ')}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </li>

      {/* Other links */}
      {links.map((link) => (
        <li key={link.href} className="relative group">
          <Link
            href={link.href}
            className={`relative py-1 transition duration-300 ${
              pathname === link.href ? 'text-white' : 'hover:text-white'
            }`}
          >
            {link.label}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-[#E78946] transition-all duration-300 ${
                pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </Link>
        </li>
      ))}

      {/* CTA Button */}
      <li>
        <a
          href="tel:7995792953"
          className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#E78946] to-orange-500 text-white text-sm font-semibold shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300"
        >
          Call Now
        </a>
      </li>

      {/* Hide scrollbars */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
        }
      `}</style>
    </ul>
  );
}