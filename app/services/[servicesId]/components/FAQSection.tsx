"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E78946]/10 blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 tracking-tight 
        bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
        bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        {/* Divider */}
        <div className="w-20 h-[2px] mx-auto mb-12 bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 backdrop-blur-md shadow-xl ${
                openIndex === index
                  ? "bg-white/10 border-[#E78946]/60 shadow-[#E78946]/20"
                  : "bg-white/5 border-white/10 hover:border-[#E78946]/40"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5"
              >
                <span className="font-semibold text-lg text-gray-200 pr-6">
                  {faq.question}
                </span>

                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-[#E78946]"
                      : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/10">
                    <span className="text-[#E78946] font-medium">
                      Servani Safety Nets:
                    </span>{" "}
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <p className="mt-12 text-center text-sm text-gray-500">
          Trusted answers • Expert service • Reliable protection
        </p>
      </div>
    </section>
  );
};

export default FAQSection;