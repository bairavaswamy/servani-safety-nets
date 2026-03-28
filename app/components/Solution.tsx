import Image from "next/image";

type Props = {
  serviceName: string;
  areaName: string;
  image: string;
};

export default function Solution({ serviceName, areaName, image }: Props) {
  return (
    <section className="relative py-10 sm:py-14 md:py-20 px-4 sm:px-6 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* TEXT CONTENT */}
        <div className="text-center md:text-left">
          
          {/* Heading */}
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-snug 
            bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
            bg-clip-text text-transparent">
            {serviceName} in {areaName} – Complete Solutions
          </h2>

          {/* Description */}
          <p className=" md:text-lg text-gray-300 mb-5 sm:mb-6 leading-relaxed">
            We provide complete{" "}
            <span className="text-white font-medium">
              {serviceName.toLowerCase()}
            </span>{" "}
            solutions in {areaName}, including balcony safety nets, window nets,
            duct area nets, and open space protection.
          </p>

          {/* FEATURES */}
          <div className="text-2xl md:text-lg space-y-3 mb-6">
            {[
              "Child safety in apartments",
              "Pet protection (cats & dogs)",
              "Bird control (pigeons, crows)",
              "High-rise balcony safety",
              "Industrial safety solutions",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl 
                bg-white/5 border border-white/10 
                hover:border-[#E78946] hover:bg-white/10 
                transition-all duration-300"
              >
                <span className="w-2 h-2 mt-2 rounded-full bg-[#E78946]" />
                <span className="text-xs sm:text-sm md:text-base text-gray-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* SEO Intent */}
          <p className=" sm:text-sm md:text-base text-gray-400 leading-relaxed">
            Looking for{" "}
            <strong className="text-white">
              {serviceName} near you
            </strong>
            ,{" "}
            <strong className="text-white">
              {serviceName} cost in {areaName}
            </strong>{" "}
            or{" "}
            <strong className="text-white">
              best {serviceName} in {areaName}
            </strong>
            ?{" "}
            <span className="text-[#E78946] font-semibold">
              Servani Safety Nets
            </span>{" "}
            is your trusted choice.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-white/10">
          <Image
            src={image}
            alt={`${serviceName} in ${areaName}`}
            fill
            className="object-cover hover:scale-105 transition duration-500"
            priority
          />
        </div>

      </div>
    </section>
  );
}