import Image from "next/image";

type HeroSectionProps = {
  title: string;
  description: string;
  image: string;
};

const HeroSection = ({ title, description, image }: HeroSectionProps) => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="100vw"
        priority
        className="object-cover brightness-[0.5]"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

      {/* Glow Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E78946]/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight 
        bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
        bg-clip-text text-transparent">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
          At{" "}
          <span className="text-[#E78946] font-semibold">
            Servani Safety Nets
          </span>
          , {description}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

          <button className="px-6 py-3 rounded-xl bg-[#E78946] text-white font-semibold shadow-lg hover:bg-orange-500 transition">
            Get Free Quote
          </button>

          <button className="px-6 py-3 rounded-xl border border-white/20 text-white hover:border-[#E78946] hover:text-[#E78946] transition">
            Call Now
          </button>

        </div>

        {/* Trust Line */}
        <p className="mt-6 text-sm text-gray-500">
          Trusted by 10,000+ customers across Bangalore
        </p>

      </div>
    </section>
  );
};

export default HeroSection;