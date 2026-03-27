"use client";

import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import { FaShieldAlt, FaLock, FaCookieBite, FaUserCheck } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black py-20 px-6 md:px-12 text-gray-300">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold 
            bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946]
            bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>

          <p className="text-gray-400 text-base md:text-lg">
            Your privacy matters to{" "}
            <span className="text-white font-semibold">
              Servani Safety Nets
            </span>.  
            We are committed to protecting your data while providing safe and reliable services in Bangalore.
          </p>

          <p className="text-xs text-gray-500 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* CONTENT */}
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Section Card */}
          {[
            {
              title: "Information We Collect",
              icon: <FaUserCheck />,
              content:
                "We collect basic details like your name, phone number, and location when you contact us for safety net installation services in Bangalore. We may also collect non-personal data like browser type to improve our website experience.",
            },
            {
              title: "How We Use Your Information",
              icon: <FaShieldAlt />,
              content:
                "Your information is used to respond to your inquiries, provide installation services, and improve our offerings. We may also share updates or offers only with your consent.",
            },
            {
              title: "Data Protection",
              icon: <FaLock />,
              content:
                "We use secure systems and encrypted connections to ensure your personal data is protected from unauthorized access or misuse.",
            },
            {
              title: "Cookies Policy",
              icon: <FaCookieBite />,
              content:
                "Our website uses cookies to enhance user experience and analyze traffic. You can disable cookies anytime through your browser settings.",
            },
            {
              title: "Third-Party Services",
              icon: <FaShieldAlt />,
              content:
                "We may use trusted tools like Google Analytics or Ads to improve our services. These providers follow strict privacy standards.",
            },
            {
              title: "Your Consent",
              icon: <FaUserCheck />,
              content:
                "By using our website, you agree to our privacy practices and data usage as described in this policy.",
            },
          ].map((section, i) => (
            <div
              key={i}
              className="group rounded-2xl p-6 
              bg-white/5 backdrop-blur-xl border border-white/10
              shadow-lg hover:border-[#E78946]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#E78946] text-xl">
                  {section.icon}
                </span>
                <h2 className="text-xl font-semibold text-white">
                  {section.title}
                </h2>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}

          {/* CONTACT */}
          <div className="text-center mt-12">
            <h2 className="text-xl font-semibold text-white mb-3">
              Contact Us
            </h2>

            <p className="text-gray-400">
              If you have any questions about this Privacy Policy, contact us at
            </p>

            <a
              href="mailto:servanienterprise@gmail.com"
              className="text-[#E78946] underline hover:text-orange-300"
            >
              servanienterprise@gmail.com
            </a>
          </div>

          {/* TRUST LINE */}
          <p className="text-center text-xs text-gray-500 mt-10">
            Trusted by 1000+ customers in Bangalore • Safe • Secure • Reliable
          </p>
        </div>
      </div>

      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;