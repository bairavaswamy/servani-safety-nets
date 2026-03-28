import { Metadata } from "next";
import { areas } from "@/app/data/areasData";
import { servicesData } from "@/app/data/serviceData";
import Script from "next/script";

import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import HeroSection from "@/app/components/HeroSection";
import DetailedDescription from "@/app/components/DetailedDescription";
import InfoSection from "@/app/components/InfoSection";
import FAQSection from "@/app/components/FAQSection";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import MapSection from "@/app/components/MapSection";
import Solution from "@/app/components/Solution";
import PriceSection from "@/app/components/PriceSection";
import NearbyAreasSection from "@/app/components/NearbyAreasSection";

type Params = {
  params: Promise<{ area: string; service: string }>;
};


const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

// ✅ Content Variations (Uniqueness Engine)
const introVariants = [
  `Looking for reliable {service} in {area}? Servani Safety Nets offers expert installation with premium materials and long-lasting protection.`,
  `Servani Safety Nets provides professional {service} services in {area}, Bangalore for homes, apartments, and commercial spaces.`,
  `Get high-quality {service} in {area} with our experienced team ensuring safety, durability, and affordability.`,
];

const trustVariants = [
  `Our trained technicians ensure secure and clean installation.`,
  `We use UV-resistant, high-strength materials for durability.`,
  `Every installation is customized based on your space.`,
];

const closingVariants = [
  `Contact Servani Safety Nets today for fast service in {area}.`,
  `Book your {service} installation in {area} at the best price.`,
  `Get a free quote for {service} near you in {area}.`,
];

// ✅ Generate Unique Description
function generateDescription(service: string, area: string) {
  const intro = introVariants[Math.floor(Math.random() * introVariants.length)];
  const trust = trustVariants[Math.floor(Math.random() * trustVariants.length)];
  const closing = closingVariants[Math.floor(Math.random() * closingVariants.length)];

  return `
${intro.replace(/{service}/g, service).replace(/{area}/g, area)}

${trust}

We provide ${service.toLowerCase()} solutions for balconies, windows, apartments, and open areas in ${area}, Bangalore. Our services are designed for child safety, pet protection, and bird control.

${closing.replace(/{service}/g, service).replace(/{area}/g, area)}
  `;
}

// ✅ Generate ALL pages
export const generateStaticParams = () => {
  return areas.flatMap((area) =>
    Object.keys(servicesData).map((service) => ({
      area: slugify(area),
      service,
    }))
  );
};

// ✅ SEO Metadata (Improved)
export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { area, service } =await params;
  const serviceData = servicesData[service as keyof typeof servicesData];

  if (!serviceData) {
    return {
      title: "Service Not Found | Servani Safety Nets",
    };
  }

  const areaName = area.replace(/-/g, " ");
  const url = `https://servanisafetynets.com/bangalore/${area}/${service}`;
  const title = `${serviceData.title} in ${areaName} Bangalore | Servani Safety Nets`;

  const description = `Looking for ${serviceData.title.toLowerCase()} in ${areaName}, Bangalore? Servani Safety Nets provides expert installation with affordable pricing and durable materials. Call now for a free quote.`;

  return {
    title,
    description,
    keywords: [
      `${serviceData.title} in ${areaName}`,
      `${serviceData.title} Bangalore`,
      `${serviceData.title} near me`,
      "Safety Nets Bangalore",
      "Servani Safety Nets",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Servani Safety Nets",
      images: [
        {
          url: serviceData.image,
          width: 1200,
          height: 630,
          alt: `${serviceData.title} in ${areaName}`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
      twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [serviceData.image],
    },

  };
};



// ✅ Page Component
const AreaServicePage = async ({ params }: Params) => {
  const { area, service } = await params;
  const serviceData = servicesData[service as keyof typeof servicesData];

  if (!serviceData) return <div>Service "{service}" Not Found</div>;

  const areaName = area.replace(/-/g, " ");
  const serviceName = serviceData.title;

  const dynamicDescription = generateDescription(serviceName, areaName);

  const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `https://servanisafetynets.com/bangalore/${area}/${service}#service`,
      name: `${serviceName} in ${areaName}`,
      description: dynamicDescription,
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: "Servani Safety Nets",
        url: "https://servanisafetynets.com",
        telephone: "+91-7995792953",
      },
      areaServed: {
        "@type": "Place",
        name: areaName,
      },
      serviceType: serviceName,
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://servanisafetynets.com/#business",
      name: "Servani Safety Nets",
      url: "https://servanisafetynets.com",
      telephone: "+91-7995792953",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      sameAs: [
        "https://g.page/r/CagMjrUK8tRuEBM",
        "https://www.instagram.com/servanisafetynets/",
        "https://www.facebook.com/p/Servani-Enterprise-61576734022219/",
      ],
    },

    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `Do you provide ${serviceName} in ${areaName}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes, Servani Safety Nets offers ${serviceName.toLowerCase()} services in ${areaName}, Bangalore.`,
          },
        },
        {
          "@type": "Question",
          name: `What is the cost of ${serviceName} in ${areaName}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Pricing depends on size and requirements. Contact us for a free quote.`,
          },
        },
        {
          "@type": "Question",
          name: `Is it safe for children and pets?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes, our safety nets are designed for maximum safety and durability.`,
          },
        },
      ],
    },
  ],
};

  return (
    <>
      <Navbar />
<main>
      <Script
        id="area-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* 🔥 Hero (Improved SEO + Conversion) */}
      <HeroSection
        title={`${serviceName} in ${areaName}`}
        description={`Top-rated ${serviceName.toLowerCase()} installation in ${areaName}, Bangalore for homes, apartments & commercial spaces. Affordable pricing & fast service.`}
        image={serviceData.image}
      />

      {/* 🔥 Detailed Description (Dynamic Unique Content) */}
      <DetailedDescription
        title={`${serviceName} in ${areaName}`}
        description={dynamicDescription}
      />

      <Solution serviceName={serviceName} areaName={areaName} image={serviceData.image} />

      <PriceSection serviceName={serviceName} areaName={areaName} />

      <NearbyAreasSection serviceName={serviceName} areaName={areaName} />

      {/* 🔥 Info Section (Trust + Keywords) */}
      <InfoSection
        title={`Why Choose ${serviceName} in ${areaName}?`}
        description={`Servani Safety Nets is a trusted provider of ${serviceName.toLowerCase()} in ${areaName}, Bangalore. We offer high-quality materials, expert installation, and customized solutions for complete safety. Our services are ideal for child safety, pet protection, and bird control.`}
        image={serviceData.image}
      />


      <MapSection area={areaName} />
      
      {/* 🔥 FAQ (Expanded for SEO) */}
      <FAQSection
        faqs={[
          {
            question: `Do you provide ${serviceName} in ${areaName}?`,
            answer: `Yes, Servani Safety Nets offers ${serviceName.toLowerCase()} services in ${areaName}, Bangalore with professional installation.`,
          },
          {
            question: `What is the cost of ${serviceName} in ${areaName}?`,
            answer: `The cost depends on the area size and requirements. Contact us for a free quote.`,
          },
          {
            question: `How long does installation take in ${areaName}?`,
            answer: `Most ${serviceName.toLowerCase()} installations are completed within a few hours.`,
          },
          {
            question: `Is it safe for children and pets?`,
            answer: `Yes, our nets are designed for maximum safety and durability.`,
          },
          {
            question: `Do you offer service near ${areaName}?`,
            answer: `Yes, we also serve nearby areas around ${areaName}.`,
          },
        ]}
      />
</main>
      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default AreaServicePage;