import SafetyCard from "@/app/home/components/cards";

type CardData = {
  image: string;
  title: string;
  description: string;
  readMoreLink: string;
  callNumber: string;
};

const SafetySolutions = ({ cards }: { cards: CardData[] }) => {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow accents */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E78946]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-orange-500/10 blur-[120px] pointer-events-none" />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight 
            bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
            bg-clip-text text-transparent">
            Our Solutions
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Smart, reliable safety solutions designed for modern homes and spaces.
          </p>

          {/* Divider */}
          <div className="mt-6 w-24 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className="transition-transform duration-500 hover:-translate-y-2"
            >
              <SafetyCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySolutions;