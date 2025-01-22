import React from "react";
import ProductSlug from "@/app/components/dynamicProduct/ProductSlug";
import {getProducts, getProductBySlug } from "@/app/services/api";


export async function generateMetadata({ params }) {
  const { productslug } = params;
  let metaTitle = "Default Title";
  let metaDescription = "Default description";
  let metaRobots = "index, follow";
  let canonicalUrl = "https://bensano.com/product/" + productslug;
  let defaultOgImage;
  let imageAlt;


  try {
    const data = await getProductBySlug(productslug);
    const product = data.data[0];
    if (product) {
      metaTitle = product.metaTitle || metaTitle;
      metaDescription = product.metaDescripition || metaDescription;
      defaultOgImage = product.Image[0].url;
      imageAlt = product.Name;
    }
  } catch (error) {
    console.error(`Error fetching product with slug ${productslug}:`, error);
  }

  return {
    title: metaTitle,
    description: metaDescription,
    robots: metaRobots,
     // Canonical URL
     alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: 'Bensan', // Replace with your site name
      type: 'website',
      images: [
        {
          url: `https://admin.bensano.com${defaultOgImage}`, // Replace with your default OG image
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [`https://admin.bensano.com${defaultOgImage}`], // Replace with your default Twitter image
    },
  };
}


const page = () => {
  return (
    <>
      <ProductSlug />
    </>
  );
};

export default page;
