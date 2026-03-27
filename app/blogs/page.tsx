"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import { blogsData } from "@/app/data/blogsData";

const BlogsPage = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">

        {/* 🔥 HERO */}
        <section className="relative py-20 px-6 text-center overflow-hidden">
          
          <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-[#E78946]/20 blur-[120px]" />

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6
            bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946]
            bg-clip-text text-transparent">
            Safety Nets Blog
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Expert tips, guides, and insights on balcony safety nets, pigeon protection,
            invisible grills, and modern home safety solutions in Bangalore.
          </p>

          {/* Trust */}
          <p className="mt-4 text-sm text-gray-500">
            Updated regularly • Trusted by 1000+ customers
          </p>
        </section>

        {/* 📚 BLOG GRID */}
        <div className="max-w-7xl mx-auto px-6 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogsData.map((blog, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden 
              bg-white/5 border border-white/10 backdrop-blur-xl
              shadow-lg transition duration-500 hover:-translate-y-2
              hover:shadow-[0_20px_60px_rgba(231,137,70,0.25)]"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold 
                  bg-[#E78946] text-white rounded-full shadow">
                  {blog.badge}
                </span>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col justify-between h-[260px]">

                <div>
                  <h2 className="text-lg font-bold mb-2 group-hover:text-[#E78946] transition">
                    {blog.title}
                  </h2>

                  <p className="text-xs text-gray-400 mb-2">{blog.displayDate}</p>

                  <p className="text-sm text-gray-300 line-clamp-3">
                    {blog.description}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="mt-4 inline-flex items-center justify-center 
                  px-4 py-2 rounded-full text-sm font-semibold
                  bg-gradient-to-r from-[#E78946] to-orange-500
                  hover:scale-105 transition"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 🚀 CTA SECTION */}
        <div className="text-center pb-20">
          <h3 className="text-2xl font-bold mb-3">
            Need Safety Solutions for Your Home?
          </h3>
          <p className="text-gray-400 mb-6">
            Get expert consultation and installation from Servani Safety Nets.
          </p>

          <a
            href="tel:+917995792953"
            className="inline-flex items-center px-6 py-3 rounded-full 
            bg-gradient-to-r from-[#E78946] to-orange-500 
            font-semibold hover:scale-105 transition"
          >
            📞 Call Now
          </a>
        </div>
      </div>

      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default BlogsPage;