"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";

export default function BlogDetailsClient({
  blog,
}: {
  blog: { title: string; displayDate: string; image: string; content: string };
}) {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-gray-300">

        {/* 🔥 HERO */}
        <div className="relative py-20 px-6 text-center">
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-[#E78946]/20 blur-[120px]" />

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 
            bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946]
            bg-clip-text text-transparent">
            {blog.title}
          </h1>

          <p className="text-gray-400 text-sm">
            Published on {blog.displayDate} • Servani Safety Nets
          </p>
        </div>

        {/* 📄 CONTENT */}
        <div className="max-w-4xl mx-auto px-6 pb-20">

          {/* Image */}
          <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-10 border border-white/10 shadow-lg">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          {/* 🔥 INTRO (SEO IMPORTANT) */}
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Looking for the best safety solutions in Bangalore? In this guide,
            we explain everything about{" "}
            <span className="text-[#E78946] font-semibold">
              balcony safety nets, pigeon nets, and invisible grills
            </span>{" "}
            to help you protect your home, children, and pets.
          </p>

          {/* 📌 MAIN CONTENT */}
          <div className="space-y-6 leading-relaxed text-gray-300 whitespace-pre-line">
            {blog.content}
          </div>

          {/* 🔗 INTERNAL LINKS (SEO GOLD 🔥) */}
          <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-xl font-semibold text-[#E78946] mb-4">
              Related Safety Services
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <Link href="/services/balcony-safety-nets-in-bangalore" className="hover:text-white">
                → Balcony Safety Nets in Bangalore
              </Link>
              <Link href="/services/pigeon-safety-nets-in-bangalore" className="hover:text-white">
                → Pigeon Safety Nets Installation
              </Link>
              <Link href="/services/invisible-grills-in-bangalore" className="hover:text-white">
                → Invisible Grills for Apartments
              </Link>
              <Link href="/services/children-safety-nets-in-bangalore" className="hover:text-white">
                → Child Safety Nets
              </Link>
            </div>
          </div>

          {/* 🚀 CTA SECTION */}
          <div className="mt-16 text-center p-8 rounded-2xl 
            bg-gradient-to-r from-[#E78946]/10 to-orange-500/10 border border-[#E78946]/20">

            <h3 className="text-2xl font-bold mb-3 text-white">
              Need Professional Installation?
            </h3>

            <p className="text-gray-400 mb-6">
              Get expert safety net installation in Bangalore with durable materials
              and trusted service.
            </p>

            <a
              href="tel:+917995792953"
              className="inline-flex items-center px-6 py-3 rounded-full 
              bg-gradient-to-r from-[#E78946] to-orange-500 
              text-white font-semibold
              hover:scale-105 transition"
            >
              📞 Call Now
            </a>
          </div>

          {/* 🔍 FAQ SECTION (SEO BOOST) */}
          <div className="mt-16">
            <h2 className="text-xl font-semibold text-[#E78946] mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 text-sm">
              <p>
                <strong>Are balcony safety nets durable?</strong><br />
                Yes, high-quality HDPE safety nets last 3–5 years and resist weather conditions.
              </p>

              <p>
                <strong>Do safety nets block airflow?</strong><br />
                No, they are designed to allow air and light while providing protection.
              </p>

              <p>
                <strong>How fast is installation?</strong><br />
                Most installations are completed within a few hours.
              </p>
            </div>
          </div>

        </div>
      </div>

      <StickyContactIcons />
      <Footer />
    </>
  );
}