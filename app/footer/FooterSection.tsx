import React from "react";
import Link from "next/link";

interface FooterItem {
  name: string;
  icon: React.ReactNode;
  link: string;
  highlight?: boolean; // ⭐ optional (for important links)
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
    <section
      aria-labelledby={sectionId}
      className="text-gray-300"
    >
      {/* Title */}
      <h3
        id={sectionId}
        className="text-lg font-semibold mb-5 tracking-wide
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
              className="group relative flex items-center gap-3 px-2 py-1.5 rounded-lg
              text-gray-400 hover:text-white 
              transition-all duration-300
              hover:bg-white/5"
            >
              {/* Glow hover background */}
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#E78946]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Icon */}
              <span
                className={`${iconColor} text-base relative z-10 
                transition-transform duration-300 
                group-hover:scale-110 group-hover:rotate-3`}
              >
                {item.icon}
              </span>

              {/* Text */}
              <span className="relative z-10 flex items-center gap-2">
                {item.name}

                {/* Highlight badge */}
                {item.highlight && (
                  <span className="text-[10px] px-2 py-[2px] rounded-full 
                  bg-[#E78946]/20 text-[#E78946] border border-[#E78946]/30">
                    Popular
                  </span>
                )}

                {/* Premium underline */}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 
                  bg-gradient-to-r from-[#E78946] to-orange-300
                  transition-all duration-300 group-hover:w-full"
                />
              </span>

              {/* Arrow indicator (micro interaction) */}
              <span className="ml-auto opacity-0 translate-x-[-5px] 
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-300 text-xs text-[#E78946]">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterSection;