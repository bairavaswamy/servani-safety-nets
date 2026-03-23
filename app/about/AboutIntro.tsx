const AboutIntro = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow effects */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#E78946]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-120px] left-[-80px] w-[300px] h-[300px] bg-orange-500/10 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight
          bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946]
          bg-clip-text text-transparent">
          About Us
        </h2>

        {/* Divider */}
        <div className="w-16 h-[2px] mx-auto mb-6 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

        {/* Paragraph 1 */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-4">
          Welcome to{" "}
          <span className="text-[#E78946] font-semibold">
            Servani Safety Nets
          </span>
          , your trusted partner in creating{" "}
          <span className="text-white font-medium">
            safe, hygienic, and worry-free environments
          </span>{" "}
          for families and workplaces.
        </p>

        {/* Paragraph 2 */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          Our belief is:{" "}
          <em className="text-white italic">
            safety should never be a compromise
          </em>
          . We specialize in protecting your spaces from{" "}
          <span className="text-[#E78946] font-semibold">
            accidents, pests, and hazards
          </span>{" "}
          while maintaining elegance, comfort, and modern aesthetics.
        </p>

        {/* Trust line */}
        <p className="mt-6 text-sm text-gray-500">
          Protection • Comfort • Modern Living
        </p>
      </div>
    </section>
  );
};

export default AboutIntro;