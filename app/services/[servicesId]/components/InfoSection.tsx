"use client";

import GetQuoteButton from "./GetQuoteButton";
import ImageCard from "./ImageCard";

type InfoSectionProps = {
  title: string;
  description: string;
  image: string;
};

const InfoSection = ({ title, description, image }: InfoSectionProps) => {
  return (
    <section className="relative py-24 px-6 lg:px-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E78946]/10 blur-[120px]" />
      <div className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <div className="space-y-6">

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight 
          bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
          bg-clip-text text-transparent">
            Why Choose {title}?
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg text-justify leading-relaxed">
            At{" "}
            <span className="text-[#E78946] font-semibold">
              Servani Safety Nets
            </span>
            , {description}
          </p>

          {/* Benefits List */}
          <ul className="space-y-3 text-gray-300">
            {[
              "Durable & long-lasting material",
              "Professional installation service",
              "Affordable pricing",
              "100% safety assurance",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 group">
                <span className="text-[#E78946] text-lg group-hover:scale-110 transition-transform">
                  ✔
                </span>
                <span className="group-hover:text-white transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="pt-4">
            <GetQuoteButton />
          </div>

        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <ImageCard image={image} title={title} />
          </div>
        </div>

      </div>

      {/* Bottom Trust Line */}
      <p className="relative z-10 mt-16 text-center text-sm text-gray-500">
        Trusted by families • Designed for safety • Built to last
      </p>
    </section>
  );
};

export default InfoSection;