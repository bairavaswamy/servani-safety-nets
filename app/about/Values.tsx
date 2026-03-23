const Values = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow effects */}
      <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[350px] bg-[#E78946]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[350px] bg-orange-500/10 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight
          bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946]
          bg-clip-text text-transparent">
          Our Values
        </h2>

        {/* Divider */}
        <div className="w-20 h-[2px] mx-auto mb-12 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 text-left">

          {/* Value 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <h3 className="text-xl font-semibold text-[#E78946] mb-2">
              🔒 Safety First
            </h3>
            <p className="text-gray-300">
              Protecting lives is our highest priority, ensuring every
              installation delivers maximum safety and reliability.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <h3 className="text-xl font-semibold text-[#E78946] mb-2">
              🌿 Clean & Healthy Living
            </h3>
            <p className="text-gray-300">
              We create hygienic, bird-free environments that promote
              healthier and more comfortable living spaces.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <h3 className="text-xl font-semibold text-[#E78946] mb-2">
              🤝 Customer Trust
            </h3>
            <p className="text-gray-300">
              Building long-term relationships through honesty, transparency,
              and dependable service you can rely on.
            </p>
          </div>

          {/* Value 4 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <h3 className="text-xl font-semibold text-[#E78946] mb-2">
              💡 Innovation
            </h3>
            <p className="text-gray-300">
              Delivering modern, stylish, and effective safety solutions that
              blend seamlessly with today’s living spaces.
            </p>
          </div>

        </div>

        {/* Bottom line */}
        <p className="mt-10 text-sm text-gray-500">
          Built on trust • Driven by safety • Designed for modern life
        </p>
      </div>
    </section>
  );
};

export default Values;