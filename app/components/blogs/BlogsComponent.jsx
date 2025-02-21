"use client";
import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Blogs from "./Blogs";
import { motion } from "framer-motion";
import { getBlogs } from "@/app/services/api";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const BlogsComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const data = await getBlogs(currentPage, 25, searchQuery);
        setBlogs(data.data);
        setTotalPages(data.meta.pagination.pageCount);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [searchQuery, currentPage]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when search query changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex justify-between items-center relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="text-[#716b66] text-base font-normal font-primary leading-normal sm:w-[481px] h-11 pl-10 pr-4 py-2.5 bg-[#e6e9ee] rounded-full shadow-sm focus:shadow-md transition-shadow duration-300 ease-in-out outline-none"
          placeholder="Search for blogs"
        />
        <IoSearchOutline className="absolute left-4 text-[#716b66]" />
      </motion.div>
      <Blogs blogs={blogs} loading={loading} />
      {totalPages > 0 && (
        <nav aria-label="Blog navigation" className="flex gap-2 justify-center lg:mt-16 mt-5 lg:mb-20 mb-5">
          <button
            className={`w-10 h-10 bg-white shadow flex justify-center items-center ${currentPage === 1 ? " cursor-not-allowed opacity-50" : "cursor-pointer"}`}
            aria-label="Previous page"
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          >
            <FaAngleLeft aria-hidden="true" />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`w-10 h-10 shadow flex justify-center items-center ${currentPage === index + 1 ? "bg-secondary-primary text-white" : "bg-white text-[#554e49]"}`}
              aria-label={`Page ${index + 1}`}
              aria-current={currentPage === index + 1 ? "page" : undefined}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`w-10 h-10 bg-white shadow flex justify-center items-center ${currentPage === totalPages ? " cursor-not-allowed  opacity-50" : "cursor-pointer"}`}
            aria-label="Next page"
            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
          >
            <FaAngleRight aria-hidden="true" />
          </button>
        </nav>
      )}
    </motion.div>
  );
};

export default BlogsComponent;