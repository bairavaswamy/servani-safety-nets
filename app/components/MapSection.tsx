
import React from "react";

type MapSectionProps = {
  area: string;
};

const MapSection: React.FC<MapSectionProps> = ({ area }) => {
  return (
    <section className="relative px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-extrabold mb-6 text-center
          bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
          bg-clip-text text-transparent"
        >
          {area} Service Location
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          Servani Safety Nets provides professional safety net installation
          services in {area}, Bangalore and nearby locations. We ensure fast
          service, affordable pricing, and reliable protection for your home.
        </p>

        {/* Map */}
        <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden border border-white/10">
          <iframe
            title={`Map of ${area}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              area + ", Bangalore"
            )}&output=embed`}
          />
        </div>

        {/* Intent Text (SEO Boost) */}
        <p className="text-gray-300 text-center mt-3">
          Looking for <strong>safety nets in {area}</strong> or{" "}
          <strong>nearby areas in Bangalore</strong>? Servani Safety Nets offers
          trusted and affordable solutions near you.
        </p>

      </div>
    </section>
  );
};

export default MapSection;