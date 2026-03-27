import { servicesData } from "@/app/data/servicesData";
import Navbar from "@/app/navbar/Navbar";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import Footer from "@/app/footer/Footer";
import TopSection from "./components/TopSection";
import DetailedContent from "./components/DetailedContent";
import BenefitApplications from "./components/BenefitApplications";
import FAQSection from "./components/FAQSection";
import { Metadata } from "next";

type Params = {
  params: { id: string };
};

// ✅ Static pages
export const generateStaticParams = (): Array<{ id: string }> => {
  return Object.keys(servicesData).map((id) => ({ id }));
};

// ✅ SEO Metadata (UPDATED BRANDING)
export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { id } = await params;
  const service = servicesData[id as keyof typeof servicesData];

  const title =
    `${service?.title || "Safety Nets"} in Bangalore | Servani Safety Nets`;

  const description =
    service?.description?.trim() ||
    `Get professional ${service?.title || "safety net"} installation in Bangalore. Servani Safety Nets offers durable, child-safe, and pet-friendly solutions.`;

  const image = service?.image || "/images/slider_1.webp";
  const url = `https://servanisafetynets.com/service/${id}`;

  // 🔥 Better SEO Keywords (location + intent)
  const keywords = [
    `${service?.title} in Bangalore`,
    "balcony safety nets Bangalore",
    "pigeon safety nets Bangalore",
    "invisible grills Bangalore",
    "child safety nets",
    "pet safety nets",
    "Servani Safety Nets",
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },

    openGraph: {
      title,
      description,
      url,
      siteName: "Servani Safety Nets",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: service?.title || "Servani Safety Nets Services",
        },
      ],
      type: "article",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },

    metadataBase: new URL("https://servanisafetynets.com"),

    authors: [{ name: "Servani Safety Nets" }],
    publisher: "Servani Safety Nets",
    category: "Home Safety Solutions",
  };
};

// ✅ Page Component
const SolutionDetails = async({ params }: Params) => {
  const { id } = await params;
  const service = servicesData[id];

  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <h1 className="text-2xl font-bold text-[#E78946]">
          Service Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <TopSection {...service} />

      <DetailedContent
        title={service.title}
        description={service.description}
        detailedContent={service.detailedContent}
      />

      <BenefitApplications />

      <FAQSection />

      <StickyContactIcons />

      <Footer />
    </>
  );
};

export default SolutionDetails;