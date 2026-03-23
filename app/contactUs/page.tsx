import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Navbar from "../navbar/Navbar";
import ContactForm from "./formValidation";
import { ImLocation2 } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { RiTimeLine } from "react-icons/ri";
import Footer from "../footer/Footer";
import StickyContactIcons from "../stickyicons/stickyIcons";

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <div className="relative w-full min-h-screen bg-black flex flex-col items-center py-24 px-6  overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E78946]/10 blur-[140px]" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[400px] bg-orange-500/10 blur-[140px]" />

        {/* Heading */}
        <div className="relative z-10 max-w-3xl text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4
            bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946]
            bg-clip-text text-transparent">
            Contact Servani Safety Nets
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            Have questions or need help? We’re here to assist you with{" "}
            <span className="text-white font-medium">
              safety nets, pigeon protection, and invisible grills
            </span>
            . Reach out anytime and we’ll respond quickly.
          </p>
        </div>

        {/* Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">

          {/* Left - Info */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-[#E78946] mb-6">
              Get in Touch
            </h2>

            <div className="space-y-5 text-gray-300 text-[15px] md:text-base">

              <p className="flex gap-3 items-start">
                <ImLocation2 className="text-[#E78946] mt-1" size={22} />
                <span>
                  <strong className="text-white">Address:</strong><br />
                  Marathahalli, Old Airport Road,<br />
                  Varthur Main Road, Bengaluru – 560037
                </span>
              </p>

              <p className="flex gap-3 items-center">
                <FiPhoneCall className="text-[#E78946]" size={22} />
                <span>
                  <strong className="text-white">Phone:</strong> +91 7995792953
                </span>
              </p>

              <p className="flex gap-3 items-center">
                <AiOutlineMail className="text-[#E78946]" size={22} />
                <span>
                  <strong className="text-white">Email:</strong> servanienterprise@gmail.com
                </span>
              </p>

              <p className="flex gap-3 items-start">
                <RiTimeLine className="text-[#E78946]" size={22} />
                <span>
                  <strong className="text-white">Hours:</strong><br />
                  Mon – Sat (9:00 AM – 7:00 PM)
                </span>
              </p>
            </div>

            {/* Social */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-[#E78946] mb-3">
                Follow Us
              </h3>

              <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
                <a
                  href="https://www.facebook.com/share/177w7231SD/"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-[#E78946] transition"
                >
                  <FaFacebook size={22} /> Facebook
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#E78946] transition"
                >
                  <FaTwitter size={22} /> Twitter
                </a>

                <a
                  href="https://www.instagram.com/servanisafetynets"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-[#E78946] transition"
                >
                  <FaInstagram size={22} /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/10">
            <ContactForm />
          </div>

        </div>

        {/* Map */}
        <div className="relative z-10 max-w-6xl w-full mt-20">
          <h2 className="text-2xl font-bold text-center text-[#E78946] mb-6">
            Find Us Here
          </h2>

          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <iframe
              title="Servani Safety Nets Location"
              src="https://www.google.com/maps?q=12.957239528521276,77.7034455315824&hl=en&z=17&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>

          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=12.957239528521276,77.7034455315824"
              target="_blank"
              className="inline-block bg-[#E78946] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 transition"
            >
              📍 Get Directions
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="relative z-10 mt-20 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Safety Solutions Today?
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Contact{" "}
            <span className="text-[#E78946] font-semibold">
              Servani Safety Nets
            </span>{" "}
            for fast, reliable installation of safety nets, pigeon protection,
            and invisible grills.
          </p>

          <a
            href="tel:+917995792953"
            className="inline-block px-8 py-3 rounded-full font-bold text-white
            bg-[#E78946] shadow-lg
            hover:scale-105 hover:shadow-orange-400/40 transition duration-300"
          >
            📞 Call Now
          </a>
        </div>

      </div>

      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default ContactUs;