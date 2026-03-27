import { Metadata } from "next";
import { servicesData } from "@/app/servicesData/servicesData";
import { servicesContent } from "@/app/servicesData/servicesContent";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import HeroSection from "./components/HeroSection";
import DetailedDescription from "./components/DetailedDescription";
import InfoSection from "./components/InfoSection";
import FAQSection from "./components/FAQSection";

type Params = {
  params: { servicesId: string };
};

// ✅ Static paths
export const generateStaticParams = () => {
  return Object.keys(servicesData).map((servicesId) => ({
    servicesId,
  }));
};

// ✅ Metadata (SEO Optimized)
export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { servicesId } = await params;

  const service =
    servicesData[servicesId as keyof typeof servicesData];

  if (!service) {
    return {
      title: "Service Not Found | Servani Safety Nets",
      description: "Requested service not found.",
      robots: { index: false, follow: false },
    };
  }

  const title = `${service.title} in Bangalore | Servani Safety Nets`;

  const description =
    service.description ||
    `Get ${service.title} installation in Bangalore with Servani Safety Nets. Safe, strong, and affordable solutions for homes and apartments.`;

  const image = service.image || "/default-image.jpg";
  const url = `https://servanisafetynets.com/service/${servicesId}`;

  return {
    title,
    description,

    keywords: [
      `${service.title} in Bangalore`,
      `${servicesId.replaceAll("-", " ")}`,
      "safety nets Bangalore",
      "balcony nets Bangalore",
      "pigeon nets Bangalore",
      "child safety nets",
      "pet safety nets",
      "Servani Safety Nets",
    ],

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
          alt: service.title,
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
  };
};

// ✅ Page Component
const ServiceDetailsPage = async({ params }: Params) => {
  const { servicesId } = await params;

  const service =
    servicesData[servicesId as keyof typeof servicesData];

  const content = servicesContent[servicesId];

  // ❌ If service not found
  if (!service) {
    return <div>Service not found</div>;
  }

  // ✅ Fallback content (VERY IMPORTANT for SEO)
  const fallbackDescription = `We provide ${service.title} in Bangalore with professional installation. Our solutions are safe, durable, and suitable for homes, apartments, and commercial spaces. Contact Servani Safety Nets for the best service.`;

  const finalDescription =
    content?.detailedDescription || fallbackDescription;

  const finalFaqs =
    content?.faqs && content.faqs.length > 0
      ? content.faqs
      : [
          {
            question: `What is ${service.title}?`,
            answer: `${service.title} is a safety solution provided by Servani Safety Nets in Bangalore.`,
          },
          {
            question: `Do you provide installation in Bangalore?`,
            answer: `Yes, we provide complete installation across Bangalore.`,
          },
        ];

  return (
    <>
      <Navbar />

      <HeroSection {...service} />

      <DetailedDescription
        description={finalDescription}
        title={service.title}
      />

      <FAQSection faqs={finalFaqs} />

      <InfoSection {...service} />

      <StickyContactIcons />

      <Footer />
    </>
  );
};

export default ServiceDetailsPage;