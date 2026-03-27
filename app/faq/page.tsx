"use client";

import { useState } from "react";
import { pigeonSafetyFaq, petsSafetyFaq, invisibleGrillFaq } from "@/app/data/FaqData";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import { FaChevronDown } from "react-icons/fa";

type FAQ = {
  question: string;
  answer: string;
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFAQSection = (title: string, subtitle: string, faqs: FAQ[], baseIndex: number) => (
    <section className="mb-16">
      
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold 
          bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946]
          bg-clip-text text-transparent">
          {title}
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>

        <div className="mt-5 w-20 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#E78946] to-transparent" />
      </div>

      {/* FAQ Cards */}
      <div className="space-y-5 max-w-4xl mx-auto">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === baseIndex + i;

          return (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden 
              bg-white/5 backdrop-blur-xl border border-white/10
              shadow-lg transition-all duration-300 hover:border-[#E78946]/50"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(baseIndex + i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-white font-medium text-sm md:text-base">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`text-[#E78946] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black py-20 px-6 md:px-12">

        {/* HERO HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold 
            bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946]
            bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Find answers about <span className="text-white">safety nets, pigeon protection, and invisible grills in Bangalore</span>.  
            Everything you need to know before installation.
          </p>
        </div>

        {/* FAQ SECTIONS */}
        {renderFAQSection(
          "Pigeon Safety Nets",
          "Everything about pigeon control, bird protection, and balcony safety solutions.",
          pigeonSafetyFaq,
          0
        )}

        {renderFAQSection(
          "Pet & Children Safety Nets",
          "Ensure complete safety for kids and pets with durable and secure net installations.",
          petsSafetyFaq,
          100
        )}

        {renderFAQSection(
          "Invisible Grills",
          "Modern safety solutions that provide protection without blocking your view.",
          invisibleGrillFaq,
          200
        )}

        {/* CTA BLOCK (VERY IMPORTANT) */}
        <div className="mt-20 text-center">

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still Have Questions? 🤔
          </h3>

          <p className="text-gray-400 mb-8">
            Talk directly with our experts for the best safety solution.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="tel:+917995792953"
              className="px-6 py-3 rounded-full 
              bg-gradient-to-r from-[#E78946] to-orange-500 
              text-white font-semibold
              hover:scale-105 transition-all duration-300"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/917995792953"
              target="_blank"
              className="px-6 py-3 rounded-full 
              bg-green-500 text-white font-semibold
              hover:scale-105 transition-all duration-300"
            >
              💬 WhatsApp
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            ⭐ 4.9 Rating • 1000+ Happy Customers in Bangalore
          </p>
        </div>

      </div>

      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default FAQPage;