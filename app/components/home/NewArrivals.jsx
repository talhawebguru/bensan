"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getNewArrivalsProduct } from "@/app/services/api";
import Link from "next/link";
import { motion } from "framer-motion";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const data = await getNewArrivalsProduct();
        const arrivalInside = data.data.flatMap((product) => product.products);
        setNewArrivals(arrivalInside);
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNewArrivals();
  }, []);

  return (
    <section className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] sm:px-10 xs:px-5 xl:mt-[100px] md:mt-20 mt-10 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "0px 0px -5% 0px"  }}
        transition={{ duration: 0.5 }}
        className="text-center text-light-black text-4xl font-semibold font-primary capitalize"
      >
        New Arrivals
      </motion.h2>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
        {loading
          ? [...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white py-10 px-6 rounded-xl shadow border border-white-card-border flex flex-col items-center"
              >
                <Skeleton width={160} height={228} />
                <Skeleton width={150} height={24} className="mt-8" />
              </div>
            ))
          : newArrivals.map((product, index) => (
            <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1 // Creates a staggered effect
                }}
              >
                <Link href={`/product/${product.slug}`}>
                  <article
                    className="px-6 py-10 gap-8 bg-white rounded-xl shadow border border-white-card-border flex flex-col justify-center items-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}${product.Image[0].url}`}
                        alt={product.Name}
                        className="object-contain h-[228px]"
                        width={160}
                        height={228}
                      />
                    </motion.div>
                    <div>
                      <h2 className="text-light-black text-center text-lg font-semibold font-primary capitalize">
                        {product.Name}
                      </h2>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
      </div>
    </section>
  );
};

export default NewArrivals;
