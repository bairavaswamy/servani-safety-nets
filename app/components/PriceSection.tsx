
type Props = {
  serviceName: string;
  areaName: string;
};

export default function PriceSection({ serviceName, areaName }: Props) {
  return (
    <section className="relative px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-extrabold mb-6 text-center
          bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
          bg-clip-text text-transparent"
        >
          {serviceName} Cost in {areaName}
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          The cost of {serviceName.toLowerCase()} in {areaName} depends on area size,
          material quality, and installation complexity. We provide affordable pricing
          with high-quality materials and professional service.
        </p>

        {/* Price Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div
            className="p-6 rounded-2xl bg-white/5 border border-white/10 
            hover:border-[#E78946] transition"
          >
            <h3 className="text-xl font-semibold text-[#E78946] mb-2">
              Balcony Safety Nets
            </h3>
            <p className="text-gray-300">₹15 – ₹35 per sq.ft</p>
          </div>

          <div
            className="p-6 rounded-2xl bg-white/5 border border-white/10 
            hover:border-[#E78946] transition"
          >
            <h3 className="text-xl font-semibold text-[#E78946] mb-2">
              Invisible Grills
            </h3>
            <p className="text-gray-300">₹180 – ₹350 per sq.ft</p>
          </div>

        </div>

        {/* Intent + CTA */}
        <p className="text-gray-300 text-center mb-8">
          If you are searching for{" "}
          <strong>{serviceName} price in {areaName}</strong>,{" "}
          <strong>cheap {serviceName} near me</strong>, or{" "}
          <strong>best {serviceName} cost</strong>, Servani Safety Nets offers
          competitive pricing with quality service.
        </p>

      </div>
    </section>
  );
}