import React from 'react'
import { getProducts } from "@/app/services/api.js";
import ProductList from '@/app/components/product/ProductList'

export const metadata = {
  robots: "index, follow",
  title: "Bensan Infection Control | Body Care & Surgical Solutions",
  description: "Discover Bensan's wide selection of infection control products, including body care, dental solutions, high-level instrument disinfection, surgical site preparation, and more.",
  alternates: {
    canonical: 'https://bensano.com/product',
  },
};

export const page = async () => {
  const initialData = await getProducts(1, 71);
  return (
    <ProductList initialData={initialData} />
  )
}

export default page;