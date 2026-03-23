"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";

const blogs = [
  {
    slug: "importance-of-balcony-safety-nets",
    title: "Why Balcony Safety Nets Are Essential for Every Home",
    date: "October 25, 2025",
    image: "/images/balcony-safety-net.webp",
    description:
      "Balconies offer great views, but they can also be dangerous without proper protection. Discover how safety nets help prevent accidents while keeping your space open and elegant.",
  },
  {
    slug: "invisible-grills-modern-home-trend",
    title: "Invisible Grills — The Modern Home Safety Trend",
    date: "September 12, 2025",
    image: "/images/invisible-grill.webp",
    description:
      "Invisible grills combine safety with beauty. Learn why homeowners in high-rise apartments are switching to invisible grills for sleek design and unmatched safety.",
  },
  {
    slug: "pigeon-nets-for-clean-balconies",
    title: "Keep Your Balcony Clean with Pigeon Nets",
    date: "August 30, 2025",
    image: "/images/pigeon-installation.webp",
    description:
      "Pigeons can create an unhygienic mess around balconies and windows. Here’s how pigeon safety nets can help maintain cleanliness and protect your space.",
  },
  {
    slug: "construction-safety-nets-benefits",
    title: "Benefits of Construction Safety Nets for Worksites",
    date: "July 18, 2025",
    image: "/images/construction-net.webp",
    description:
      "Worker safety is a top priority. Construction safety nets protect workers and pedestrians from falling debris, improving safety on construction sites.",
  },
  {
    slug: "child-pet-safety-nets-for-home",
    title: "Child & Pet Safety Nets — Must-Have for Urban Families",
    date: "June 9, 2025",
    image: "/images/pets-safety.webp",
    description:
      "If you live in an apartment, child and pet safety nets offer peace of mind while keeping your little ones safe from balcony falls or open spaces.",
  },
];

const BlogsPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-800 text-amber-50 py-16 px-6 md:px-16">
        <h1 className="pt-10 text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
          Our Latest Blogs
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-amber-200/30 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col justify-between h-[250px]">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-amber-200">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-amber-100/80 mb-3">{blog.date}</p>
                  <p className="text-amber-50/90 line-clamp-3">{blog.description}</p>
                </div>

                <Link
                  href={`/blogs/${blog.slug}`}
                  className="mt-4 inline-block text-emerald-950 font-semibold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-300 rounded-lg px-4 py-2 text-center hover:opacity-90 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default BlogsPage;
