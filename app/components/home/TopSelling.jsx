"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getTopSellingProducts } from "@/app/services/api";
import { motion } from "framer-motion";
import Link from "next/link";

const TopSelling = () => {
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopSellingProducts = async () => {
      try {
        const data = await getTopSellingProducts();
        const insideProducts = data.data.flatMap((product) => product.products);
        setTopSellingProducts(insideProducts);
      } catch (error) {
        console.error("Error fetching top selling products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopSellingProducts();
  }, []);

  return (
    <section>
      <h2 className="text-center text-light-black text-4xl font-semibold font-primary capitalize mt-24">
        Top selling products
      </h2>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] sm:px-10 xs:px-5 mt-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {loading
            ? [...Array(6)].map((_, index) => (
                <div key={index} className="bg-white py-10 px-6 rounded-xl shadow border border-white-card-border flex flex-col items-center">
                  <Skeleton width={160} height={228} />
                  <Skeleton width={150} height={24} className="mt-8" />
                </div>
              ))
            : topSellingProducts.map((product, index) => (
              <Link href={`/product/${product.slug}`} key={product.id}>
                <motion.article
                  className="bg-white py-10 px-6 rounded-xl shadow border border-white-card-border flex flex-col items-center"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{margin: "-100px"}}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${product.Image[0].url}`}
                    alt={product.Name}
                    className="w-full object-contain h-[228px]"
                    width={310}
                    height={228}
                  />
                  <h3 className="mt-8 text-center text-light-black text-2xl font-semibold font-primary capitalize">
                    {product.Name}
                  </h3>
                </motion.article>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default TopSelling;