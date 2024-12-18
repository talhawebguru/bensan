"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getProducts } from "../services/api";
import CategoryList from "../components/product/CategoryList";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <hr className="border border-black/10 mt-1 xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0" />
      <h1 className="my-16 text-[#222823] text-4xl font-semibold font-['Open Sans'] capitalize  xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        our Products
      </h1>
      <div className="flex gap-10 xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        <div className="flex gap-10">
          <div className="xl:w-[350px] pb-4 h-fit bg-white shadow">
            <form className="flex mb-3">
              <input
                type="text"
                className="w-full xl:w-[350px] outline-none h-14 px-[16px] py-4 bg-white shadow justify-start items-start gap-2.5 inline-flex text-[#bdbab8] text-[13px] font-normal font-primary leading-tight"
                placeholder="Search"
              />
            </form>
            <div className="flex items-center content-center justify-between pt-6 mx-4">
              <h2 className="text-divi-gray text-2xl font-normal font-nohemi leading-[28.80px]">
                Categories
              </h2>
              <div>
                <FaArrowDown />
              </div>
            </div>
            <div className="w-full h-[0px] border border-[#eae9e8] mt-6"></div>
            <CategoryList
              onCategorySelect={handleCategorySelect}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading
              ? [...Array(8)].map((_, index) => (
                  <div key={index} className="bg-white w-[256px] shadow border border-[#e9ecef]">
                    <Skeleton height={256} width={256} />
                    <div className="pt-4 flex justify-center pb-5">
                      <Skeleton height={20} width={100} />
                    </div>
                  </div>
                ))
              : products.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link href={`/product/${product.slug}`}>
                      <div className="bg-white shadow border border-[#e9ecef] cursor-pointer">
                        <Image
                          className="w-full h-64 scale-1 hover:scale-110 object-contain"
                          src={`${process.env.NEXT_PUBLIC_API_URL}${product.Image[0].url}`}
                          alt={product.imageAltText || product.Name}
                          width={256}
                          height={256}
                        />
                        <div className="pt-4 pb-5">
                          <h4 className="text-base font-semibold text-gray-500 text-center font-primary">
                            {product.Name}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;