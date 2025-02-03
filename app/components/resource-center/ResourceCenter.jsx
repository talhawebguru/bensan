"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getProducts, getProductsByCategory } from "@/app/services/api.js";
import { FaArrowDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import pdfIcon from "@/public/images/pdficon.png";
import { LuDownload } from "react-icons/lu";
import { FaFilePdf } from "react-icons/fa";
import CategoryList from "@/app/components/resource-center/CategoryList";

const ResourceCenter = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all-products");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async (page = 1) => {
      try {
        let data;
        if (selectedCategory === "all-products") {
          data = await getProducts(page, 25, searchQuery);
        } else {
          data = await getProductsByCategory(selectedCategory, page , 25, searchQuery);
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
  }, [selectedCategory, currentPage, searchQuery]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

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

  const handleMenuToggle = (productId) => {
    setOpenMenuId(openMenuId === productId ? null : productId);
  };

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Only close if clicking outside any download menu
      if (
        !e.target.closest(".download-menu") &&
        !e.target.closest(".download-button")
      ) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <>
      <hr className="border border-black/10 mt-1 xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0" />
      <h1 className="my-16 text-[#222823] text-4xl font-semibold font-primary capitalize  xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        Resource Center
      </h1>
      <div className="flex flex-wrap justify-center md:justify-normal  md:flex-nowrap  gap-10 xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        <div className="flex justify-center md:justify-normal gap-10">
          <div className="xl:w-[350px] pb-4 h-fit bg-white shadow">
            <form className="flex mb-3" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                className="w-full xl:w-[350px] outline-none h-14 px-[16px] py-4 bg-white shadow justify-start items-start gap-2.5 inline-flex text-black text-[13px] font-normal font-primary leading-tight"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
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
        <div className="w-full">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {loading
              ? [...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white w-[256px] shadow border border-[#e9ecef]"
                  >
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
                      transition: { duration: 0.2 },
                    }}
                    className=""
                  >
                    <div className="px-6 py-8  bg-white shadow-lg flex flex-col items-center justify-center gap-11  border border-[#e9ecef] ">
                      <Image
                        src={pdfIcon}
                        alt="pdf icon"
                        objectFit="contain"
                        className="mt-3"
                      />
                      <div className="flex items-center justify-between w-full">
                        <h2 className="h-10 flex items-center justify-center">
                          {product.Name}
                        </h2>
                        <div className="relative">
                          <motion.button
                            className="download-button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMenuToggle(product.id);
                            }}
                          >
                            <LuDownload />
                          </motion.button>
                          {openMenuId === product.id && (
                            <motion.div
                              className="download-menu absolute z-50 right-0 mt-2 w-48 py-1 bg-white border border-black/10 shadow-[-26px_50px_14.100000381469727px_0px_rgba(0,0,0,0.06)] rounded-md"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ul>
                                {product.downloadTDS ? (
                                  <a
                                    href={`${process.env.NEXT_PUBLIC_API_URL}${product.downloadTDS.url}`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setOpenMenuId(null); // Close menu after clicking download
                                    }}
                                  >
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between border-b border-[#dddddd]">
                                      <div className="flex items-center justify-center gap-2">
                                        <FaFilePdf />
                                        <p className="text-light-black text-sm font-normal font-primary leading-[21px]">
                                          TDS
                                        </p>
                                      </div>
                                      <LuDownload />
                                    </li>
                                  </a>
                                ) : (
                                  <li className="px-4 py-2 flex items-center justify-between border-b border-[#dddddd] opacity-50">
                                    <div className="flex items-center justify-center gap-2">
                                      <FaFilePdf />
                                      <p className="text-light-black text-sm font-normal font-primary leading-[21px]">
                                        TDS
                                      </p>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                      Not available
                                    </p>
                                  </li>
                                )}
                                {product.downloadSDS ? (
                                  <a
                                    href={`${process.env.NEXT_PUBLIC_API_URL}${product.downloadSDS.url}`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setOpenMenuId(null); // Close menu after clicking download
                                    }}
                                  >
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between border-b border-[#dddddd]">
                                      <div className="flex items-center justify-center gap-2">
                                        <FaFilePdf />
                                        <p className="text-light-black text-sm font-normal font-primary leading-[21px]">
                                          SDS
                                        </p>
                                      </div>
                                      <LuDownload />
                                    </li>
                                  </a>
                                ) : (
                                  <li className="px-4 py-2 flex items-center justify-between border-b border-[#dddddd] opacity-50">
                                    <div className="flex items-center justify-center gap-2">
                                      <FaFilePdf />
                                      <p className="text-light-black text-sm font-normal font-primary leading-[21px]">
                                        SDS
                                      </p>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                      Not available
                                    </p>
                                  </li>
                                )}
                                {product.downloadCatalog ? (
                                  <a
                                    href={`${process.env.NEXT_PUBLIC_API_URL}${product.downloadCatalog.url}`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setOpenMenuId(null); // Close menu after clicking download
                                    }}
                                  >
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                                      <div className="flex items-center justify-center gap-2">
                                        <FaFilePdf />
                                        <p className="text-light-black text-sm font-normal font-primary leading-[21px]">
                                          Catalog
                                        </p>
                                      </div>
                                      <LuDownload />
                                    </li>
                                  </a>
                                ) : (
                                  <li className="px-4 py-2 flex items-center justify-between opacity-50">
                                    <div className="flex items-center justify-center gap-2">
                                      <FaFilePdf />
                                      <p className="text-light-black text-sm font-normal font-primary leading-[21px]">
                                        Catalog
                                      </p>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                      Not available
                                    </p>
                                  </li>
                                )}
                              </ul>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
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

export default ResourceCenter;