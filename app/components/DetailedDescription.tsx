"use client";

type Props = {
  title: string;
  description: string;
};

const DetailedDescription = ({ title, description }: Props) => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E78946]/10 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 
        bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
        bg-clip-text text-transparent">
          About {title}
        </h2>

        <div className="w-20 h-[2px] mx-auto mb-10 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-gray-300 text-lg leading-relaxed text-justify">
          <span className="text-[#E78946] font-semibold">
            Servani Safety Nets
          </span>{" "}
          {description}
        </div>
      </div>
    </section>
  );
};

export default DetailedDescription;