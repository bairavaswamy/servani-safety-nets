const Closing = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow effects */}
      <div className="absolute top-[-80px] right-[-100px] w-[400px] h-[300px] bg-[#E78946]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-120px] left-[-80px] w-[300px] h-[300px] bg-orange-500/10 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Divider */}
        <div className="w-16 h-[2px] mx-auto mb-8 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

        {/* Text */}
        <p className="text-lg md:text-xl font-medium text-gray-300 leading-relaxed">
          At{" "}
          <span className="text-[#E78946] font-semibold">
            Servani Safety Nets
          </span>
          , we don’t just install products – we install{" "}
          <span className="text-[#E78946] font-semibold">
            trust, safety, and comfort
          </span>
          . Our goal is to provide you a{" "}
          <span className="text-white font-medium">
            safe and clean environment
          </span>{" "}
          so you can focus on what truly matters –{" "}
          <span className="italic text-[#E78946]">
            enjoying life with your family.
          </span>
        </p>

        {/* Tagline */}
        <p className="mt-6 text-sm text-gray-500">
          Safety you trust • Comfort you feel • Protection that lasts
        </p>
      </div>
    </section>
  );
};

export default Closing;