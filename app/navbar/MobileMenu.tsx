'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx'; // ✅ Correct package
import { ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { servicesData as originalServices } from '../data/serviceData';
import { areas } from '../data/areasData';

// Merge areas into services for easy access
const servicesData = Object.fromEntries(
  Object.entries(originalServices).map(([key, service]) => [
    key,
    { ...service, areas },
  ])
);

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contactUs', label: 'Contact' },
];

const MobileMenu = ({ isOpen, setIsOpen }: any) => {
  const pathname = usePathname();
  const [activeService, setActiveService] = useState<string | null>(null);

  const toggleService = (slug: string) => {
    setActiveService(activeService === slug ? null : slug);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Hamburger */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Open menu">
        {isOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
      </button>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-[85%] max-w-xs z-40 transform transition-transform duration-300 bg-black/90 backdrop-blur-xl border-r border-white/10 shadow-2xl flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="relative flex flex-col items-center pt-16 pb-5 border-b border-white/10">
          <div className="relative w-14 h-14 mb-2">
            <Image
              src="/servani-logo.webp"
              alt="Servani Safety Nets"
              fill
              className="object-contain rounded-full border border-white/20"
            />
          </div>

          <h1 className="text-base font-bold bg-gradient-to-r from-[#E78946] to-orange-300 bg-clip-text text-transparent">
            Servani Safety Nets
          </h1>
          <p className="text-[11px] text-gray-400 mt-1">Trust • Safety • Quality</p>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-4 text-gray-400 hover:text-red-400"
            aria-label="Close menu"
          >
            <RxCross2 size={22} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 pb-28">
          {/* Main Links */}
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive(link.href)
                  ? 'bg-white/10 text-[#E78946]'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
              style={{
                transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                opacity: isOpen ? 1 : 0,
                transitionDelay: `${i * 70}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Services Section */}
          <p className="text-xs text-gray-400 px-4 mt-4 mb-1">Our Services</p>

          {Object.entries(servicesData).map(([key, service]) => {
            const isOpenService = activeService === key;

            return (
              <div key={key} className="border-b border-white/10 pb-3">
                {/* Service Header */}
                <button
                  onClick={() => toggleService(key)}
                  className="flex justify-between items-center w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 transition font-medium"
                >
                  <span>{service.title}</span>
                  {isOpenService ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {/* Areas (Collapsible) */}
                <div
                  className={`overflow-y-auto transition-all duration-300 ${
                    isOpenService ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="ml-4 mt-2 space-y-2 border-l border-white/10 pl-3">
                    {service.areas.map((area) => (
                      <Link
                        key={`${key}-${area}`}
                        href={`/bangalore/${area.toLowerCase().replace(/\s+/g, '-')}/${key}/`}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm font-medium text-gray-300 hover:text-[#E78946] hover:bg-white/5 px-3 py-1.5 rounded-md transition-all duration-200"
                      >
                        {service.title} in {area}
                      </Link>
                    ))}

                    <Link
                      href={`/bangalore/${key}`}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm font-semibold text-[#E78946] hover:underline mt-2"
                    >
                      View All →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;