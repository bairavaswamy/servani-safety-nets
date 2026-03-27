import { Metadata } from "next";
import { areas } from "@/app/data/areasData";
import { servicesData } from "@/app/data/serviceData";

import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import HeroSection from "@/app/components/HeroSection";
import DetailedDescription from "@/app/components/DetailedDescription";
import InfoSection from "@/app/components/InfoSection";
import FAQSection from "@/app/components/FAQSection";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";

type Params = {
  params: { area: string; service: string };
};

// ✅ Generate ALL pages
export const generateStaticParams = () => {
  return areas.flatMap((area) =>
    Object.keys(servicesData).map((service) => ({
      area,
      service,
    }))
  );
};

// ✅ SEO Metadata
export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { area, service } = await params;
  const serviceData = servicesData[service as keyof typeof servicesData];

  if (!serviceData) {
    return {
      title: "Service Not Found | Servani Safety Nets",
    };
  }

  const areaName = area.replace("-", " ");
  const title = `${serviceData.title} in ${areaName} Bangalore | Servani Safety Nets`;

  const description = `Get ${serviceData.title} in ${areaName}, Bangalore with Servani Safety Nets. Professional installation, durable materials, and affordable pricing.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://servanisafetynets.com/bangalore/${area}/${service}`,
    },
  };
};

// ✅ Page Component
const AreaServicePage = async ({ params }: Params) => {
  const { area, service } = await params;
  const serviceData = servicesData[service as keyof typeof servicesData];

  if (!serviceData) return <div>Not Found</div>;

  const areaName = area.replace("-", " ");

  return (
    <>
      <Navbar />

      {/* Hero */}
      <HeroSection
        title={`${serviceData.title} in ${areaName}`}
        description={`Professional ${serviceData.title.toLowerCase()} installation services in ${areaName}, Bangalore.`}
        image={serviceData.image}
      />

      {/* Description */}
      <DetailedDescription
        title={`${serviceData.title} in ${areaName}`}
        description={`provides high-quality ${serviceData.title.toLowerCase()} in ${areaName}, Bangalore. Our solutions ensure safety, durability, and professional installation for homes and apartments.`}
      />

      {/* Info */}
      <InfoSection
        title={`${serviceData.title} in ${areaName}`}
        description={`Choose Servani Safety Nets for ${serviceData.title.toLowerCase()} in ${areaName}. We offer affordable pricing, expert service, and long-lasting protection.`}
        image={serviceData.image}
      />

      {/* FAQ */}
      <FAQSection
        faqs={[
          {
            question: `Do you provide ${serviceData.title} in ${areaName}?`,
            answer: `Yes, Servani Safety Nets provides ${serviceData.title.toLowerCase()} services in ${areaName}, Bangalore with expert installation.`,
          },
          {
            question: `What is the cost of ${serviceData.title} in ${areaName}?`,
            answer: `The cost depends on area size and requirements. Contact Servani Safety Nets for a free quote.`,
          },
        ]}
      />

      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default AreaServicePage;