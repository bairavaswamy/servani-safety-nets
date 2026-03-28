import { Metadata } from "next";
import Script from "next/script";
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


  const cleanName = service.title;
   const title = `${cleanName} in Bangalore | Servani Safety Nets`;
  const description =
    service.description ||
    `Looking for ${cleanName.toLowerCase()} in Bangalore? Servani Safety Nets offers expert installation, durable materials, and affordable pricing. Call now for a free quote!`;

  const image = service.image || "/default-image.jpg";
  const url = `https://servanisafetynets.com/service/${servicesId}`;

  return {
    title,
    description,

    keywords: [
      `${cleanName} in Bangalore`,
      `${servicesId.replaceAll("-", " ")}`,
      `${cleanName} near me`,
      `${cleanName} price Bangalore`,
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
          alt: cleanName,
        },
      ],
      type: "website",
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
      googleBot: {
        index: true,
        follow: true, 
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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

        const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `https://servanisafetynets.com/service/${servicesId}#service`,
      name: service.title,
      description: finalDescription,
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: "Servani Safety Nets",
        url: "https://servanisafetynets.com",
        telephone: "+91-7995792953",
      },
      areaServed: {
        "@type": "City",
        name: "Bangalore",
      },
      serviceType: service.title,
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
      mainEntity: finalFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },

    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://servanisafetynets.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://servanisafetynets.com/service",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: `https://servanisafetynets.com/service/${servicesId}`,
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
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <HeroSection {...service} />

      <DetailedDescription
        description={finalDescription}
        title={service.title}
      />

      <FAQSection faqs={finalFaqs} />

      <InfoSection {...service} />

      <StickyContactIcons />
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetailsPage;