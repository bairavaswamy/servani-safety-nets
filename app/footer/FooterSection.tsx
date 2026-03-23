import React from "react";
import Link from "next/link";

interface FooterItem {
  name: string;
  icon: React.ReactNode;
  link: string;
}

interface FooterSectionProps {
  title: string;
  items: FooterItem[];
  iconColor?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  items,
  iconColor = "text-[#E78946]",
}) => {
  const sectionId =
    title.replace(/\s+/g, "-").toLowerCase() + "-heading";

  return (
    <section aria-labelledby={sectionId} className="text-gray-300">
      
      {/* Title */}
      <h3
        id={sectionId}
        className="text-lg font-semibold mb-4 tracking-wide
        bg-gradient-to-r from-[#E78946] to-orange-300 
        bg-clip-text text-transparent"
      >
        {title}
      </h3>

      {/* Links */}
      <ul className="space-y-3 text-sm">
        {items.map((item, i) => (
          <li key={i}>
            <Link
              href={item.link}
              className="group flex items-center gap-2 text-gray-400 
              hover:text-white transition duration-300"
            >
              {/* Icon */}
              <span
                className={`${iconColor} text-base transition-transform duration-300 group-hover:scale-110`}
                aria-hidden="true"
              >
                {item.icon}
              </span>

              {/* Text */}
              <span className="relative">
                {item.name}

                {/* Underline animation */}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] 
                  bg-[#E78946] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterSection;