
import Link from "next/link";
import { nearbyAreasMap } from "@/app/data/nearbyAreas";

type Props = {
  serviceName: string;
  areaName: string;
};


const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

export default function NearbyAreasSection({ serviceName, areaName }: Props) {

    const key = slugify(areaName);
    const nearbyAreas = nearbyAreasMap[key] || nearbyAreasMap["DEFAULT"];


  return (
    <section className="relative py-10 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-extrabold mb-6 text-center
          bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
          bg-clip-text text-transparent"
        >
          Nearby Areas Around {areaName}
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          We provide {serviceName.toLowerCase()} services in {areaName} and nearby
          locations across Bangalore. Our team ensures fast installation and
          reliable service in all surrounding areas.
        </p>

        {/* Areas Grid (IMPORTANT: internal linking 🔥) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
          {nearbyAreas.map((area) => (
            <Link
              key={area}
              href={`/bangalore/${slugify(area)}/${slugify(serviceName)}`}
              className="p-4 rounded-xl text-center 
              bg-white/5 border border-white/10 
              text-gray-300 hover:text-white 
              hover:border-[#E78946] transition"
            >
              {serviceName} in {area}
            </Link>
          ))}
        </div>

        {/* Intent Text */}
        <p className="text-gray-300 text-center">
          If you are searching for{" "}
          <strong>{serviceName} near me</strong> or{" "}
          <strong>{serviceName} near {areaName}</strong>, Servani Safety Nets
          provides trusted and affordable solutions across all nearby areas.
        </p>

      </div>
    </section>
  );
}