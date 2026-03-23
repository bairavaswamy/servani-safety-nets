const Mission = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow effects */}
      <div className="absolute top-[-100px] left-[-80px] w-[350px] h-[300px] bg-[#E78946]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[300px] bg-orange-500/10 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight
          bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946]
          bg-clip-text text-transparent">
          Our Mission
        </h2>

        {/* Divider */}
        <div className="w-16 h-[2px] mx-auto mb-6 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

        {/* Text */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          At{" "}
          <span className="text-[#E78946] font-semibold">
            Servani Safety Nets
          </span>
          , our mission is to make every{" "}
          <span className="text-white font-medium">
            home, apartment, and workplace
          </span>{" "}
          <span className="text-[#E78946] font-semibold">
            safe and worry-free
          </span>
          . We combine{" "}
          <span className="text-[#E78946] font-semibold">
            safety, hygiene, and aesthetic appeal
          </span>{" "}
          to deliver spaces that are both secure and beautifully designed.
        </p>

        {/* Bottom line */}
        <p className="mt-6 text-sm text-gray-500">
          Safety • Hygiene • Modern Living
        </p>
      </div>
    </section>
  );
};

export default Mission;