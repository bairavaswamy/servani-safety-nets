import Head from "next/head";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import StickyContactIcons from "../stickyicons/stickyIcons";
import AboutIntro from "../about/AboutIntro";
import Specialization from "../about/Specialization";
import WhyChooseUs from "../about/WhyChooseUs";
import Mission from "../about/Mission";
import Values from "../about/Values";
import WhySolutionsMatter from "../about/WhySolutionsMatter";
import Closing from "../about/Closing";

const About = () => {
  return (
    <>
      <Head>
        <title>
          About Servani Safety Nets | Safety Nets, Pigeon Nets & Invisible Grills
        </title>

        <meta
          name="description"
          content="Servani Safety Nets provides high-quality safety nets, pigeon protection, bird spikes, and invisible grills. Ensure safety, hygiene, and modern living with expert installation services."
        />

        <meta
          property="og:title"
          content="Servani Safety Nets | Trusted Safety Solutions Provider"
        />

        <meta
          property="og:description"
          content="Expert installation of safety nets, pigeon nets, bird spikes, and invisible grills for homes and apartments."
        />

        <meta
          name="keywords"
          content="safety nets near me, pigeon nets, bird spikes installation, invisible grills, balcony safety nets, child safety nets, bird protection solutions"
        />

        <link
          rel="canonical"
          href="https://servanisafetynets.com/about"
        />
      </Head>

      <Navbar />

      {/* Main Section */}
      <main className="relative bg-black text-white px-4 md:px-8 py-16 mt-16 overflow-hidden">

        {/* Global Glow (top layer consistency) */}
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E78946]/10 blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto space-y-16">

          {/* Page Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-center
            bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946]
            bg-clip-text text-transparent">
            Servani Safety Nets
          </h1>

          {/* Intro */}
          <AboutIntro />

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="w-full md:w-[80%] h-64 md:h-80 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/safety-nets-installation.webp"
                alt="Servani Safety Nets Installation Services"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Sections */}
          <Specialization />
          <WhyChooseUs />
          <Mission />
          <Values />
          <WhySolutionsMatter />
          <Closing />

        </div>
      </main>

      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default About;