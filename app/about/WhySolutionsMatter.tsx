const WhySolutionsMatter = () => {
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
          Why Our Solutions Matter
        </h2>

        {/* Divider */}
        <div className="w-20 h-[2px] mx-auto mb-8 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

        {/* Intro */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto mb-12">
          At{" "}
          <span className="text-[#E78946] font-semibold">
            Servani Safety Nets
          </span>
          , we help you protect your{" "}
          <span className="text-white font-medium">
            loved ones, property, and peace of mind
          </span>{" "}
          with durable safety nets, pigeon protection, bird spikes, and
          invisible grills designed for modern living.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 text-left">

          {/* Item 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <p className="text-gray-300 text-lg">
              🛡️ <span className="text-white font-medium">Protect your family</span>{" "}
              from accidental falls and unexpected risks.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <p className="text-gray-300 text-lg">
              🌿 <span className="text-white font-medium">Maintain hygiene</span>{" "}
              by keeping birds and pests away.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <p className="text-gray-300 text-lg">
              ✨ <span className="text-white font-medium">Preserve aesthetics</span>{" "}
              with modern, invisible safety solutions.
            </p>
          </div>

          {/* Item 4 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <p className="text-gray-300 text-lg">
              💰 <span className="text-white font-medium">Reduce costs</span>{" "}
              by avoiding frequent cleaning and repairs.
            </p>
          </div>

          {/* Item 5 */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E78946]/40 transition">
            <p className="text-gray-300 text-lg text-center">
              😌 <span className="text-white font-medium">Enjoy peace of mind</span>{" "}
              knowing your home and family are always protected.
            </p>
          </div>

        </div>

        {/* Bottom line */}
        <p className="mt-10 text-sm text-gray-500">
          Protection that matters • Safety you can trust • Comfort you deserve
        </p>

      </div>
    </section>
  );
};

export default WhySolutionsMatter;