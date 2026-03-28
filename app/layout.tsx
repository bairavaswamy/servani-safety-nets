import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://servanisafetynets.com"),

  title: {
    default: "Servani Safety Nets Bangalore | Balcony, Pigeon & Invisible Grills",
    template: "%s |",
  },

  description:
    "Servani Safety Nets provides balcony safety nets, pigeon nets, invisible grills, duct area nets, and industrial safety solutions in Bangalore. Affordable, durable & professional installation.",

  keywords: [
    "Safety Nets Bangalore",
    "Balcony Safety Nets Bangalore",
    "Pigeon Nets Bangalore",
    "Invisible Grills Bangalore",
    "Bird Nets Bangalore",
    "Duct Area Safety Nets",
    "Industrial Safety Nets Bangalore",
    "Servani Safety Nets",
  ],

  authors: [{ name: "Servani Safety Nets" }],
  creator: "Servani Safety Nets",
  publisher: "Servani Safety Nets",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://servanisafetynets.com",
  },

  openGraph: {
    title: "Servani Safety Nets Bangalore",
    description:
      "Top safety net services in Bangalore – balcony nets, pigeon nets, invisible grills & more. Call now for installation.",
    url: "https://servanisafetynets.com",
    siteName: "Servani Safety Nets",
    images: [
      {
        url: "https://servanisafetynets.com/og-image.png", // 🔥 replace with your image
        width: 1200,
        height: 630,
        alt: "Servani Safety Nets Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Servani Safety Nets Bangalore",
    description:
      "Balcony safety nets, pigeon nets & invisible grills installation in Bangalore.",
    images: ["https://servanisafetynets.com/og-image.png"],
  },

  icons: {
    icon: "/servani-logo.webp",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",

  "@id": "https://servanisafetynets.com/#business",
  name: "Servani Safety Nets",
  alternateName: "Servani Enterprise",

  url: "https://servanisafetynets.com",
  telephone: "+91-7995792953",
  priceRange: "15-50000 INR",

  description:
    "Servani Safety Nets is a leading safety equipment supplier in Bangalore offering balcony safety nets, pigeon nets, invisible grills, duct area nets, and industrial safety net solutions for homes, apartments, and commercial spaces.",

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

  areaServed: [
    {
      "@type": "City",
      name: "Bangalore",
    },
  ],

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:00",
    },
  ],

  sameAs: [
    "https://g.page/r/CagMjrUK8tRuEBM",
    "https://www.instagram.com/servanisafetynets/",
    "https://www.facebook.com/p/Servani-Enterprise-61576734022219/",
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Safety Net Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Balcony Safety Nets",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Anti Bird Nets",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pigeon Safety Nets",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Invisible Grills",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Duct Area Safety Nets",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Window Safety Nets",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Staircase Safety Nets",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Industrial Safety Nets",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sports Nets",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Building Safety Nets",
        },
      },
    ],
  },

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7995792953",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Telugu", "Kannada"],
  },

  keywords: [
    "Safety Nets Bangalore",
    "Balcony Safety Nets Bangalore",
    "Pigeon Nets Bangalore",
    "Invisible Grills Bangalore",
    "Bird Protection Nets Bangalore",
    "Safety Equipment Supplier Bangalore",
  ],
};

  return (
    <html lang="en">
      <title>Servani Safety Nets - Bangalore</title>
      <body>
        {/* ✅ Google Tag Manager */}
        <GoogleTagManager gtmId="GTM-KF7QZNGN" />

        {/* ✅ SEO Schema */}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {children}
      </body>
    </html>
  );
}