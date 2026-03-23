"use client";
import Head from "next/head";

export default function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://servanisafetynets.com/#localbusiness",
    "name": "Servani Safety Nets",
    "url": "https://servanisafetynets.com/",
    "logo": "https://servanisafetynets.com/images/servani-logo.png",
    "image": "https://servanisafetynets.com/images/slider_1.webp",
    "description":
      "Servani Safety Nets in Bengaluru provides balcony safety nets, invisible grills, bird spikes, and pigeon protection nets. We ensure safety for homes, kids, and pets with durable, rust-proof materials and professional installation.",
    "telephone": "+917995792953",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Marathalli,Old airport road,Bengaluru",
      "addressLocality": "Bengaluru",
      "addressRegion": "KA",
      "postalCode": "560037",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9166,
      "longitude": 77.6101,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        "opens": "08:00",
        "closes": "22:00",
      },
    ],
    "areaServed": [
      {
        "@type": "Place",
        "name": "Bengaluru",
      },
    ],
    "sameAs": [
      "https://www.facebook.com/share/177w7231SD/",
      "https://www.instagram.com/servanisafetynets?utm_source=qr&igsh=MTljMjNrdWw2dXo4aA==",
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safety Net Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Balcony Safety Nets",
            "url": "https://servanisafetynets.com/services/balconySafetyNets",
            "description":
              "Durable balcony safety nets to protect your family and pets from accidental falls.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Invisible Grills",
            "url": "https://servanisafetynets.com/services/invisibleGrill",
            "description":
              "Stylish invisible grills for modern homes offering security without blocking the view.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bird Spikes",
            "url": "https://servanisafetynets.com/services/birdSpikes",
            "description":
              "Bird spikes to prevent pigeons and other birds from perching and nesting.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pigeon Safety Nets",
            "url": "https://servanisafetynets.com/services/residentialAndPigeonSafetyNets",
            "description":
              "High-quality pigeon protection nets for balconies and residential areas.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sports Safety Nets",
            "url": "https://servanisafetynets.com/services/sportsPracticeNets",
            "description":
              "Strong and flexible nets for cricket, football, and other sports enclosures.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction Safety Nets",
            "url": "https://servanisafetynets.com/services/constructionSafetyNets",
            "description":
              "Reliable construction safety nets that protect workers and pedestrians from falling debris.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Children Safety Nets",
            "url": "https://servanisafetynets.com/services/childrenSafetyNets",
            "description":
              "Soft yet strong nets designed to prevent children from accidental falls at home.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Staircase Safety Nets",
            "url": "https://servanisafetynets.com/services/staircaseSafetyNets",
            "description":
              "Transparent safety nets for open staircases and railings for child and pet protection.",
          },
        },
      ],
    },
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </Head>
  );
}
