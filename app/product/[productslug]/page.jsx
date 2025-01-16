import React from "react";
import ProductSlug from "@/app/components/dynamicProduct/ProductSlug";
import {getProducts, getProductBySlug } from "@/app/services/api";


export async function generateMetadata({ params }) {
  const { productslug } = params;
  let metaTitle = "Default Title";
  let metaDescription = "Default description";

  try {
    const data = await getProductBySlug(productslug);
    const product = data.data[0];
    if (product) {
      metaTitle = product.metaTitle || metaTitle;
      metaDescription = product.metaDescripition || metaDescription;
    }
  } catch (error) {
    console.error(`Error fetching product with slug ${productslug}:`, error);
  }

  return {
    title: metaTitle,
    description: metaDescription,
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
