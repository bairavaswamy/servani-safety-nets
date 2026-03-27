"use client";

type DetailedContentProps = {
  title: string;
  description: string;
  detailedContent?: string;
};

const DetailedContent = ({
  title,
  description,
  detailedContent,
}: DetailedContentProps) => {
  return (
    <section className="relative py-24 px-6 lg:px-20 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E78946]/10 blur-[120px]" />
      <div className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight 
        bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
        bg-clip-text text-transparent">
          About {title}
        </h2>

        {/* Divider */}
        <div className="w-20 h-[2px] mx-auto mb-10 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

        {/* Content Box */}
        <div className="text-gray-300 leading-relaxed whitespace-pre-line text-base md:text-lg text-justify 
        backdrop-blur-md bg-white/5 p-8 md:p-10 rounded-2xl shadow-xl border border-white/10">
          
          <p>
            <span className="text-[#E78946] font-semibold">
              Servani Safety Nets
            </span>{" "}
            {detailedContent || description}
          </p>

        </div>

        {/* Bottom Trust Line */}
        <p className="mt-10 text-sm text-gray-500">
          Premium Quality • Elegant Design • Long-lasting Protection
        </p>
      </div>
    </section>
  );
};

export default DetailedContent;