"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '../services/api';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.slug}`}>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer">
              <Image
                className="w-full h-64 object-cover"
                src={`${process.env.NEXT_PUBLIC_API_URL}${product.Image[0].formats.thumbnail.url}`}
                alt={product.imageAltText || product.Name}
                width={256}
                height={256}
              />
              <div className="p-4">
                <h4 className="text-sm font-semibold text-gray-500">{product.Name}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;