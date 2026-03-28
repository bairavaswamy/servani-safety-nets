'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import StickyContactIcons from '../stickyicons/stickyIcons';

type MediaItem = {
  src: string;
  type: 'image' | 'video';
  alt: string;
};

// ✅ SEO + CLEAN DATA
const generateMedia = (
  count: number,
  type: 'image' | 'video',
  ext: string,
  category: string
): MediaItem[] =>
  Array.from({ length: count }, (_, i) => ({
    src: `/gallery/${category}-${i + 1}.${ext}`,
    type,
    alt: `${category.replaceAll('-', ' ')} installation in Bangalore`,
  }));

const mediaItems: MediaItem[] = [
  ...generateMedia(9, 'image', 'webp', 'balcony-safety-nets-bangalore'),
  ...generateMedia(9, 'image', 'webp', 'transparent-safety-nets-bangalore'),
  ...generateMedia(21, 'image', 'webp', 'invisible-grills-bangalore'),
  ...generateMedia(7, 'image', 'webp', 'hdpe-nets-bangalore'),
  ...generateMedia(5, 'video', 'mp4', 'installation'),
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const filteredItems = mediaItems.filter((item) =>
    activeTab === 'images' ? item.type === 'image' : item.type === 'video'
  );

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen py-24 px-6 overflow-hidden">

        {/* 🔥 BACKGROUND (MATCH MISSION SECTION) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E78946]/10 blur-[120px]" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-orange-500/10 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">

          {/* 🔥 HEADING */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight 
            bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
            bg-clip-text text-transparent">
            Our Installation Gallery
          </h1>

          <div className="w-20 h-[2px] mx-auto mb-8 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Explore real balcony safety nets, pigeon nets, and invisible grill
            installations across Bangalore homes and apartments.
          </p>

          {/* 🔥 TABS */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('images')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === 'images'
                  ? 'bg-[#E78946] text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Photos
            </button>

            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === 'videos'
                  ? 'bg-[#E78946] text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Videos
            </button>
          </div>

          {/* 🔥 GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedMedia(item)}
                className="relative group cursor-pointer rounded-2xl overflow-hidden 
                bg-white/5 border border-white/10 backdrop-blur-lg
                hover:scale-105 transition duration-300 shadow-lg hover:shadow-[#E78946]/20"
              >
                {/* MEDIA */}
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={350}
                    className="object-cover w-full h-64 group-hover:scale-110 transition duration-500"
                    sizes="(max-width:768px) 100vw, 33vw"
                    priority={index < 3}
                  />
                ) : (
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-64 object-cover"
                  />
                )}

                {/* 🔥 OVERLAY */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                flex items-center justify-center text-white font-semibold transition">
                  View Installation
                </div>

                {/* 🔥 CAPTION */}
                <p className="text-xs text-gray-400 text-center px-3 py-2">
                  {item.alt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 MODAL */}
        {selectedMedia && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 rounded-full w-10 h-10 text-white text-xl"
              >
                ×
              </button>

              {selectedMedia.type === 'image' ? (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  width={1000}
                  height={700}
                  className="object-contain max-h-[80vh] w-full rounded-lg"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-h-[80vh] w-full rounded-lg"
                />
              )}
            </div>
          </div>
        )}

      </main>

      <StickyContactIcons />
      <Footer />
    </>
  );
}