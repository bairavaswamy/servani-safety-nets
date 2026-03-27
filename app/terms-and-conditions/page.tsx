"use client";

import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-gray-300">

        {/* 🔥 HERO SECTION */}
        <div className="relative py-20 px-6 text-center overflow-hidden">

          {/* Glow */}
          <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-[#E78946]/20 blur-[120px]" />

          <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold mb-6 tracking-tight
            bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946] 
            bg-clip-text text-transparent">
            Terms & Conditions
          </h1>

          <p className="relative z-10 text-gray-400 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.  
            Your trust and transparency are important to{" "}
            <span className="text-[#E78946] font-semibold">
              Servani Safety Nets
            </span>.
          </p>
        </div>

        {/* 📄 CONTENT */}
        <div className="max-w-5xl mx-auto px-6 pb-20 space-y-8">

          {/* CARD */}
          {[
            {
              title: "1. Services",
              content:
                "We provide installation and maintenance of balcony safety nets, pigeon nets, invisible grills, and related safety solutions. All services are handled by trained professionals.",
            },
            {
              title: "2. Pricing & Payment",
              content:
                "Prices may vary based on size, material, and installation area. Final pricing will be confirmed after inspection or discussion.",
            },
            {
              title: "3. Installation & Scheduling",
              content:
                "We aim for timely service, but delays may occur due to weather or site conditions. Customers must provide proper access for installation.",
            },
            {
              title: "4. Warranty",
              content:
                "Our products typically come with 3–7 years warranty depending on material. Damages due to misuse or external factors are not covered.",
            },
            {
              title: "5. Website Content",
              content:
                "All content including text, images, and branding belongs to Servani Safety Nets and cannot be reused without permission.",
            },
            {
              title: "6. Liability",
              content:
                "We are not responsible for indirect damages, delays, or external issues beyond our control.",
            },
            {
              title: "7. Updates",
              content:
                "We may update these terms anytime. Continued use of our services means acceptance of updated terms.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10
              shadow-lg hover:shadow-[0_10px_40px_rgba(231,137,70,0.2)]
              transition duration-300"
            >
              <h2 className="text-xl font-semibold text-[#E78946] mb-2">
                {item.title}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}

          {/* 📞 CONTACT CARD */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#E78946]/10 to-orange-500/10 border border-[#E78946]/20 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">
              Need Help?
            </h3>
            <p className="text-gray-400 mb-4">
              If you have any questions about our terms, feel free to contact us.
            </p>

            <a
              href="tel:+917995792953"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
              bg-gradient-to-r from-[#E78946] to-orange-500 
              text-white font-semibold
              shadow-lg hover:scale-105 transition"
            >
              📞 Call Now
            </a>
          </div>

          {/* 🔒 TRUST LINE */}
          <p className="text-center text-xs text-gray-500">
            Transparent policies • Trusted service • Customer-first approach
          </p>
        </div>
      </div>

      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default TermsAndConditions;