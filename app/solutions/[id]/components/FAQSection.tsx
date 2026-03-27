"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of safety nets do you install?",
      answer:
        "At Servani Safety Nets, we install balcony safety nets, pigeon protection nets, bird spikes, invisible grills, and more—customized for both residential and commercial spaces.",
    },
    {
      question: "Are your safety nets durable and weather-resistant?",
      answer:
        "Yes. Our safety nets are made from premium HDPE materials that are UV-resistant, rust-proof, and built to withstand all weather conditions for long-term safety.",
    },
    {
      question: "Do you provide installation service in all areas of Bengaluru?",
      answer:
        "Absolutely. Servani Safety Nets covers all major areas in Bengaluru with fast, reliable, and professional installation services.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Most installations are completed within a few hours depending on the size and requirements. We ensure quick, clean, and efficient service.",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E78946]/10 blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10 tracking-tight 
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
              className="rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-[#E78946]/60 transition-all shadow-xl"
            >
              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left px-6 py-5 text-lg font-semibold text-gray-200 hover:text-[#E78946] transition-all"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FiChevronUp className="text-[#E78946]" />
                ) : (
                  <FiChevronDown className="text-gray-400" />
                )}
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
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust line */}
        <p className="mt-12 text-center text-sm text-gray-500">
          Trusted by families • Designed for safety • Built to last
        </p>
      </div>
    </section>
  );
};

export default FAQSection;