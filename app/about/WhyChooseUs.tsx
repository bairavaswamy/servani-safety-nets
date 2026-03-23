const WhyChooseUs = () => {
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
          Why Choose Servani Safety Nets?
        </h2>

        {/* Divider */}
        <div className="w-20 h-[2px] mx-auto mb-12 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

        {/* Points Grid */}
        <div className="grid md:grid-cols-2 gap-6 text-left">

          {/* Item 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <p className="text-gray-300 text-lg">
              ✅ <span className="text-white font-medium">Trusted expertise</span>{" "}
              for every type of safety requirement and installation.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <p className="text-gray-300 text-lg">
              ✅ <span className="text-white font-medium">Premium materials</span>{" "}
              that are strong, durable, and weather-resistant.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <p className="text-gray-300 text-lg">
              ✅ <span className="text-white font-medium">Clean installation</span>{" "}
              with zero damage to your property.
            </p>
          </div>

          {/* Item 4 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <p className="text-gray-300 text-lg">
              ✅ <span className="text-white font-medium">Affordable solutions</span>{" "}
              suitable for all homes and budgets.
            </p>
          </div>

          {/* Item 5 */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <p className="text-gray-300 text-lg text-center">
              ✅ <span className="text-white font-medium">Reliable support</span>{" "}
              with friendly service and dependable after-installation care.
            </p>
          </div>

        </div>

        {/* Trust Line */}
        <p className="mt-10 text-sm text-gray-500">
          Trusted by families • Built with quality • Delivered with care
        </p>

      </div>
    </section>
  );
};

export default WhyChooseUs;