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

export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map((product) => ({
    params: { productSlug: product.slug },
  }));

  return { paths, fallback: false };
}

const page = () => {
  return (
    <>
      <ProductSlug />
    </>
  );
};

export default page;
