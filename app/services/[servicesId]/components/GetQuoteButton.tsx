'use client';

const GetQuoteButton = () => {
  return (
    <button
      onClick={() =>
        window.open(
          'https://wa.me/7995792953?text=Hi%20Servani%20Safety%20Nets,%20I%20need%20a%20quote',
          '_blank',
          'noopener'
        )
      }
      className="relative mt-6 px-8 py-3 min-w-[44px] min-h-[44px]
      font-semibold text-white tracking-wide rounded-xl 
      bg-gradient-to-r from-[#E78946] to-orange-500
      shadow-lg shadow-[#E78946]/30 
      border border-white/10
      transition-all duration-300 ease-in-out
      hover:scale-105 hover:shadow-[#E78946]/50
      active:scale-95"
    >

      {/* Glow Pulse */}
      <span className="absolute inset-0 rounded-xl bg-[#E78946]/20 blur-md opacity-0 hover:opacity-100 transition duration-300" />

      {/* Text */}
      <span className="relative z-10">
        Get Free Quote on WhatsApp
      </span>

    </button>
  );
};

export default GetQuoteButton;