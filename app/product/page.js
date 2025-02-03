import React from 'react';
import { getProducts } from "@/app/services/api.js";
import ProductList from '@/app/components/product/ProductList';

export const metadata = {
  robots: "index, follow",
  title: "Bensan Infection Control | Body Care & Surgical Solutions",
  description: "Discover Bensan's wide selection of infection control products, including body care, dental solutions, high-level instrument disinfection, surgical site preparation, and more.",
  alternates: {
    canonical: 'https://bensano.com/product',
  },
};

export async function generateStaticParams() {
  try {
    const data = await getProducts(1, 100);
    return data.data.map((product) => ({
      productslug: product.slug,
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

const Page = async () => {
  const initialData = await getProducts(1, 100);
  return (
    <ProductList initialData={initialData} />
  );
};

export default Page;