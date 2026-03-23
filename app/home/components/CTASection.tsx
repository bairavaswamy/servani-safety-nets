import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative py-20 px-6 text-center overflow-hidden">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

      {/* Subtle Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E78946]/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] bg-clip-text text-transparent">
            Ready to Secure Your Home?
          </span>
        </h2>

        <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
          Experience premium safety solutions crafted for modern homes.  
          Durable, invisible, and built to protect what matters most.
        </p>

        {/* CTA Button */}
        <Link
          href="/contactUs"
          className="group relative inline-flex items-center justify-center px-10 py-4 
          font-semibold rounded-full text-white 
          bg-gradient-to-r from-[#E78946] to-orange-500
          shadow-[0_10px_40px_rgba(231,137,70,0.4)]
          transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_60px_rgba(231,137,70,0.6)] overflow-hidden"
        >
          {/* Shine effect */}
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent 
            -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </span>

          <span className="relative z-10 tracking-wide">
            Get Free Consultation
          </span>
        </Link>

        {/* Trust Badge */}
        <p className="mt-6 text-xs text-gray-500">
          Trusted by 1000+ homes • 5★ customer satisfaction
        </p>
      </div>
    </section>
  );
};

export default CTASection;