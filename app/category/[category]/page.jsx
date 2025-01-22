"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {getProducts, getProductsByCategory } from "@/app/services/api";
import CategoryList from "../../components/product/CategoryList";
import { FaArrowDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const CategoryPage = ({ params }) => {
  const router = useRouter();
  const { category } = params;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategories, setShowCategories] = useState(true);


  useEffect(() => {
    const fetchProducts = async (page = 1) => {
      setLoading(true); // Only set loading for products
      try {
        let data;
        if (category === "all-products") {
          data = await getProducts(page, 25, searchQuery);
        } else {
          data = await getProductsByCategory(category, page, 25, searchQuery);
        }
        setProducts(data.data);
        setTotalPages(data.meta.pagination.pageCount);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts(currentPage);
  }, [category, currentPage, searchQuery]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when search query changes
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
  };

  const truncateTitle = (title, maxLength) => {
    if (title?.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <>
    <hr className="border border-black/10 mt-1 xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0" />
      <h1 className="md:my-16 my-10 text-[#222823] text-4xl font-semibold font-primary capitalize xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        our Products
      </h1>
      <div className="flex flex-wrap justify-center md:justify-normal  md:flex-nowrap  gap-10 xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        <div className="flex justify-center md:justify-normal gap-10 w-full md:w-auto">
          <div className="lg:w-[350px] md:w-[300px] pb-4 h-fit bg-white shadow w-full">
            <form className="flex mb-3" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                className="w-full xl:w-[350px] outline-none h-14 px-[16px] py-4 bg-white shadow justify-start items-start gap-2.5 inline-flex text-black text-[13px] font-normal font-primary leading-tight"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>
            <div 
              className="flex items-center content-center justify-between pt-6 mx-4 cursor-pointer"
              onClick={toggleCategories}
            >
              <h2 className="text-divi-gray text-2xl font-normal font-nohemi leading-[28.80px]">
                Categories
              </h2>
              <div className="transition-transform duration-300">
                {showCategories ? <FaArrowDown  /> : <FaArrowDown className="rotate-180"/>}
              </div>
            </div>
            <div className="w-full h-[0px] border border-[#eae9e8] mt-6"></div>
            <div className={`transition-all duration-300 ${showCategories ? 'block' : 'hidden'}`}>
            <CategoryList
              onCategorySelect={(categorySlug) => router.push(`/category/${categorySlug}`)}
              selectedCategory={category}
            />
            </div>
          </div>
        </div>
        <div className="w-full">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
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
                    variants={productVariants}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className=""
                  >
                    <Link href={`/category/${category}/${product.slug}`}>
                      <div className="bg-white shadow border border-[#e9ecef] cursor-pointer w-full h-full">
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
                          <h4 className="text-xs font-normal text-gray-500 text-center font-primary">
                            {truncateTitle(product?.title, 35)}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
          </motion.div>
        </div>
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex gap-2 justify-center lg:mt-16 mt-5 lg:mb-20 mb-5 ">
          <div
            className={`w-10 h-10 bg-white shadow flex justify-center items-center ${
              currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          >
            <FaAngleLeft />
          </div>
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              className={`w-10 h-10 shadow flex justify-center items-center ${
                currentPage === index + 1
                  ? "bg-secondary-primary text-white"
                  : "bg-white text-[#554e49]"
              } cursor-pointer`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </div>
          ))}
          <div
            className={`w-10 h-10 bg-white shadow flex justify-center items-center ${
              currentPage === totalPages
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
          >
            <FaAngleRight />
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;