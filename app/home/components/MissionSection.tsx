const MissionSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow layers */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E78946]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-orange-500/10 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h2
          className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight
          bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946]
          bg-clip-text text-transparent"
        >
          Our Mission
        </h2>

        {/* Divider line (premium touch) */}
        <div className="w-20 h-[2px] mx-auto mb-8 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

        {/* Text */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
          At{" "}
          <span className="text-[#E78946] font-semibold">
            Servani Safety Nets
          </span>
          , we are committed to creating{" "}
          <span className="text-white font-medium">
            safer, cleaner, and modern living spaces
          </span>{" "}
          for families, children, and pets.
          <br className="hidden md:block" />
          <br />
          Our solutions are designed to seamlessly combine{" "}
          <span className="text-[#E78946] font-semibold">protection</span> with{" "}
          <span className="text-[#E78946] font-semibold">elegance</span>, ensuring
          your home remains both secure and visually refined.
        </p>

        {/* Subtle trust line */}
        <p className="mt-8 text-sm text-gray-500">
          Designed for safety • Built for trust • Made to last
        </p>
      </div>
    </section>
  );
};

export default MissionSection;