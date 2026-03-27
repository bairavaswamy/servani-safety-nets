"use client";

const BenefitApplications = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E78946]/10 blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 tracking-tight 
        bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
        bg-clip-text text-transparent">
          Benefits & Applications
        </h2>

        {/* Divider */}
        <div className="w-20 h-[2px] mx-auto mb-12 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Key Benefits */}
          <div className="group p-8 backdrop-blur-md bg-white/5 rounded-2xl shadow-xl border border-white/10 hover:border-[#E78946]/60 transition-all">
            <h3 className="text-xl font-bold text-[#E78946] mb-4">
              Key Benefits
            </h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-3 leading-relaxed">
              <li>Durable & Weather-resistant materials</li>
              <li>Custom-fit installations for every space</li>
              <li>Professional and quick service</li>
              <li>Low maintenance & long lifespan</li>
            </ul>
          </div>

          {/* Applications */}
          <div className="group p-8 backdrop-blur-md bg-white/5 rounded-2xl shadow-xl border border-white/10 hover:border-[#E78946]/60 transition-all">
            <h3 className="text-xl font-bold text-[#E78946] mb-4">
              Applications
            </h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-3 leading-relaxed">
              <li>Residential balconies & windows</li>
              <li>Commercial buildings & offices</li>
              <li>Industrial safety areas</li>
              <li>Pet & child safety protection</li>
            </ul>
          </div>

        </div>

        {/* Bottom Branding Line */}
        <p className="mt-14 text-center text-sm text-gray-500">
          Trusted solutions by <span className="text-[#E78946] font-medium">Servani Safety Nets</span>
        </p>
      </div>
    </section>
  );
};

export default BenefitApplications;