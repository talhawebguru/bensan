import React from "react";
import Header from "../components/blogs/Header";
import Hero from "../components/blogs/Hero";
import BlogsComponent from "../components/blogs/BlogsComponent";
import Link from "next/link";
import { FaArrowDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <BlogsComponent />
      {/* Pagination */}

      <nav
        aria-label="Blog Navigation"
        className="flex gap-2 justify-center lg:mt-16 mt-5 lg:mb-20 mb-5"
      >
        <a
          className={`w-10 h-10 bg-white shadow flex justify-center items-center  cursor-not-allowed opacity-50`}
          aria-label="Previous page"
          rel="prev"
        >
          <FaAngleLeft aria-hidden="true" />
        </a>

        <a
          className={`w-10 h-10 shadow flex justify-center items-center bg-secondary-primary text-white`}
        >
          1
        </a>

        <a
          className={`w-10 h-10 bg-white shadow flex justify-center items-center`}
          aria-label="Next page"
          rel="next"
        >
          <FaAngleRight aria-hidden="true" />
        </a>
      </nav>
    </>
  );
};

export default page;
