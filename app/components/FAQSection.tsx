"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const FAQSection = ({ faqs }: { faqs: FAQ[] }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 px-6 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-5xl text-center mb-12 font-extrabold 
        bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
        bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 text-white font-semibold flex justify-between"
              >
                {faq.question}
                <span>{open === i ? "-" : "+"}</span>
              </button>

              {open === i && (
                <div className="px-6 pb-5 text-gray-300 border-t border-white/10">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;