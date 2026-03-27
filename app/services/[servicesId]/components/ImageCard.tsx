import Image from "next/image";

type ImageCardProps = {
  image: string;
  title: string;
};

const ImageCard = ({ image, title }: ImageCardProps) => {
  return (
    <div className="relative group">

      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-[#E78946]/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl" />

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          sizes="(max-width: 768px) 90vw, 600px"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Floating Trust Card */}
      <div className="absolute -bottom-6 -right-6 backdrop-blur-md bg-white/10 border border-white/10 
      rounded-xl shadow-xl p-4 w-56 text-center">

        <h3 className="font-semibold text-white">
          Trusted by 10,000+
        </h3>

        <p className="text-sm text-gray-300">
          Customers of{" "}
          <span className="text-[#E78946] font-medium">
            Servani Safety Nets
          </span>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;