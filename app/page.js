import React from "react";
import Features from "./components/home/Features";
import TopSelling from "./components/home/TopSelling";
import CategoriesSection from "./components/home/CategoriesSection";
import NewArrivals from "./components/home/NewArrivals";
import CustomerSay from "./components/home/CustomerSay";
import Hero from "./components/home/Hero";

export const metadata = {
  title: "Bensan | Revolutionizing Infection Control for Safer Tomorrow",
  description:
    "Bensan provides trusted, high-performance products tailored to modern healthcare, ensuring effective infection control and a safer future.",
  keywords: [
    "infection control",
    "healthcare products",
    "medical disinfectants",
    "antiseptic solutions",
    "healthcare safety",
    "medical equipment",
    "UAE healthcare",
    "Bensan products"
  ],
  alternates: {
    canonical: "https://bensano.com/",
  },
  robots: "index, follow",
  openGraph: {
    title: "Bensan | Revolutionizing Infection Control for Safer Tomorrow",
    description: "Bensan provides trusted, high-performance products tailored to modern healthcare, ensuring effective infection control and a safer future.",
    url: "https://bensano.com/",
    siteName: "Bensan",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://bensano.com/_next/static/media/Logo.ddeb78f7.svg",
        width: 1200,
        height: 630,
        alt: "Bensan - Healthcare Infection Control Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bensano",
    creator: "@bensano",
    title: "Bensan | Revolutionizing Infection Control for Safer Tomorrow",
    description: "Bensan provides trusted, high-performance products tailored to modern healthcare, ensuring effective infection control and a safer future.",
    images: ["https://bensano.com/_next/static/media/Logo.ddeb78f7.svg"],
  },
  other: {
    "application-name": "Bensan",
    "msapplication-TileColor": "#ffffff",
    "theme-color": "#ffffff",
  },
};

const Home = () => {
  // Generate Website Schema
  const generateWebsiteSchema = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://bensano.com/#website",
      "name": "Bensan",
      "alternateName": "Bensan Healthcare Solutions",
      "url": "https://bensano.com/",
      "description": "Bensan provides trusted, high-performance products tailored to modern healthcare, ensuring effective infection control and a safer future.",
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://bensano.com/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://bensano.com/product?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ]
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
      />
    );
  };

  // Generate Organization Schema
  const generateOrganizationSchema = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://bensano.com/#organization",
      "name": "Bensan",
      "alternateName": "Bensan Healthcare Solutions",
      "url": "https://bensano.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bensano.com/_next/static/media/Logo.ddeb78f7.svg",
        "width": "200",
        "height": "60"
      },
      "description": "Bensan provides trusted, high-performance products tailored to modern healthcare, ensuring effective infection control and a safer future.",
      "foundingDate": "2020",
      "industry": "Healthcare Products & Medical Equipment",
      "knowsAbout": [
        "Infection Control",
        "Healthcare Disinfectants",
        "Medical Antiseptics",
        "Healthcare Safety Products",
        "Medical Equipment",
        "Surgical Preparation",
        "Healthcare Solutions"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+97125067333",
        "contactType": "customer service",
        "email": "info@bensano.com",
        "availableLanguage": ["English", "Arabic"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressRegion": "Dubai"
      }
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
      />
    );
  };

  return (
    <>
      {generateWebsiteSchema()}
      {generateOrganizationSchema()}
      <main>
        <Hero />
        <Features />
        <TopSelling />
        <CategoriesSection />
        <NewArrivals />
        <CustomerSay />
      </main>
    </>
  );
};

export default Home;
