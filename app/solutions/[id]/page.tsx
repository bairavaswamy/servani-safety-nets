import { servicesData } from "@/app/data/servicesData";
import Navbar from "@/app/navbar/Navbar";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import Footer from "@/app/footer/Footer";
import TopSection from "./components/TopSection";
import DetailedContent from "./components/DetailedContent";
import BenefitApplications from "./components/BenefitApplications";
import FAQSection from "./components/FAQSection";
import { Metadata } from "next";
import Script from "next/script";

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

  if (!service) {
    return {
      title: "Service Not Found | Servani Safety Nets",
      description: "Service not found.",
      robots: { index: false, follow: false },
    };
  }

   const cleanName = service.title;
  const url = `https://servanisafetynets.com/service/${id}`;
  const image = service.image || "/images/slider_1.webp";

  const title = `${cleanName} in Bangalore | Best Price & Installation`;
  const description = `Looking for ${cleanName.toLowerCase()} in Bangalore? Servani Safety Nets offers durable, child-safe, and pet-friendly solutions with expert installation. Call now for a free quote!`;

  return {
    title,
    description,
    keywords: [
      `${cleanName} Bangalore`,
      `${cleanName} near me`,
      `${cleanName} price Bangalore`,
      "Safety Nets Bangalore",
      "Balcony Safety Nets Bangalore",
      "Pigeon Nets Bangalore",
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
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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

    const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `https://servanisafetynets.com/service/${id}#service`,
      name: service.title,
      description: service.description,
      serviceType: service.title,
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

      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.144899046337086,
        longitude: 77.68418210468273,
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
          name: `What is ${service.title}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: service.description,
          },
        },
        {
          "@type": "Question",
          name: `Do you provide ${service.title} in Bangalore?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes, Servani Safety Nets provides ${service.title.toLowerCase()} installation across Bangalore.`,
          },
        },
        {
          "@type": "Question",
          name: `Is it safe for children and pets?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes, our safety nets are designed for maximum protection and durability.`,
          },
        },
      ],
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
          item: `https://servanisafetynets.com/service/${id}`,
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
        id="solution-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <TopSection {...service} />

      <DetailedContent
        title={service.title}
        description={service.description}
        detailedContent={service.detailedContent}
      />

      <BenefitApplications />

      <FAQSection />

      <StickyContactIcons />
      </main>
      <Footer />
    </>
  );
};

export default SolutionDetails;