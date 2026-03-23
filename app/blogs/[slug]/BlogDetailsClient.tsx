"use client";

import Image from "next/image";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";

export default function BlogDetailsClient({
  blog,
}: {
  blog: { title: string; date: string; image: string; content: string };
}) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-800 text-amber-50 py-16 px-6 md:px-16">
        <div className="pt-10 max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
            {blog.title}
          </h1>
          <p className="text-amber-100/80 mb-6">{blog.date}</p>

          <div className="relative w-full h-80 rounded-xl overflow-hidden mb-10 shadow-lg border border-amber-300/30">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-5 text-amber-50/90 leading-relaxed whitespace-pre-line">
            {blog.content}
          </div>
        </div>
      </div>

      <StickyContactIcons />
      <Footer />
    </>
  );
}
