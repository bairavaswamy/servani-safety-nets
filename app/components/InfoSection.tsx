"use client";

import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

const InfoSection = ({ title, description, image }: Props) => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 
          bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
          bg-clip-text text-transparent">
            Why Choose Servani Safety Nets?
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {description}
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Premium quality HDPE nets</li>
            <li>✔ Expert installation team</li>
            <li>✔ Affordable pricing</li>
            <li>✔ Long-lasting durability</li>
          </ul>

          <a
            href="https://wa.me/7995792953"
            className="inline-block mt-8 px-6 py-3 rounded-xl 
            bg-[#E78946] text-white font-semibold hover:scale-105 transition"
          >
            Get Free Quote
          </a>
        </div>

        {/* Image */}
        <div className="relative h-[350px] rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;