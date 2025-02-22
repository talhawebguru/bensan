"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getRelatedProductsByCategory } from "@/app/services/api";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RelatedProducts = ({ categorySlug, excludeProductSlug }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const data = await getRelatedProductsByCategory(categorySlug, excludeProductSlug);
        setRelatedProducts(data.data);
      } catch (error) {
        console.error("Error fetching related products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [categorySlug, excludeProductSlug]);

  if (loading) {
    return (
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] sm:px-10 xs:px-5">
        <Skeleton height={40} width={300} className="my-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {Array(5).fill().map((_, index) => (
            <div key={index} className="border rounded-lg shadow-sm p-4 bg-white">
              <Skeleton height={160} className="mb-3" />
              <Skeleton height={20} width={`80%`} />
              <Skeleton height={20} width={`60%`} className="mt-3" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (relatedProducts.length === 0) {
    return (
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] sm:px-10 xs:px-5 text-[#222823] text-2xl font-semibold font-primary capitalize">
        No related products found
      </div>
    );
  }

  return (
    <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] sm:px-10 xs:px-5">
      <div className="flex justify-between items-center">
        <h2 className="text-center text-[#222823] text-2xl font-semibold font-primary capitalize">
          Related Products
        </h2>
        <p className="text-[#6c757d] text-lg font-semibold font-primary capitalize">
          <Link href={`/category/${categorySlug}`} className="hover:underline">
            see all
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
        {relatedProducts.map((product) => (
          <div key={product.id} className="border rounded-2xl shadow-sm p-4 bg-white">
            <div className="relative w-full h-48 mb-3">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${product.Image[0].url}`}
                alt={product.Name}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <h2 className="truncate text-[#222823] text-xs font-semibold font-['Open Sans'] capitalize">
              {product.Name}
            </h2>
            <Link
              href={`/product/${product.slug}`}
              className="mt-3 inline-block text-[#c20061] text-base font-semibold font-['Open Sans'] capitalize hover:underline"
            >
              View Detail &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;