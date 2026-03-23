const Specialization = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow effects */}
      <div className="absolute top-[-120px] right-[-100px] w-[400px] h-[350px] bg-[#E78946]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-120px] left-[-100px] w-[400px] h-[350px] bg-orange-500/10 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight
          bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946]
          bg-clip-text text-transparent">
          We Specialize In
        </h2>

        {/* Divider */}
        <div className="w-20 h-[2px] mx-auto mb-12 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

        {/* Grid Services */}
        <div className="grid md:grid-cols-2 gap-6 text-left">

          {/* Item 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <h3 className="text-xl font-semibold text-[#E78946] mb-2">
              Safety Nets
            </h3>
            <p className="text-gray-300">
              Durable and high-quality nets designed for balconies, terraces,
              windows, and construction areas to ensure complete protection.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <h3 className="text-xl font-semibold text-[#E78946] mb-2">
              Pigeon Protection Nets
            </h3>
            <p className="text-gray-300">
              Effective solutions to keep birds away, maintaining a clean,
              hygienic, and mess-free environment.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <h3 className="text-xl font-semibold text-[#E78946] mb-2">
              Bird Spikes
            </h3>
            <p className="text-gray-300">
              Prevent birds from landing or nesting on ledges, pipes, and AC
              units without harming them.
            </p>
          </div>

          {/* Item 4 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <h3 className="text-xl font-semibold text-[#E78946] mb-2">
              Invisible Grills
            </h3>
            <p className="text-gray-300">
              Modern, rust-proof grill systems that provide safety while
              preserving your outside view and aesthetics.
            </p>
          </div>

        </div>

        {/* Bottom line */}
        <p className="mt-10 text-sm text-gray-500 text-center">
          Designed for safety • Engineered for durability • Styled for modern living
        </p>
      </div>
    </section>
  );
};

export default Specialization;