import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Blogs from "./Blogs";
import * as motion from "framer-motion/client";

const BlogsComponent = () => {
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
          className="text-[#716b66] text-base font-normal font-primary leading-normal sm:w-[481px] h-11 pl-10 pr-4 py-2.5 bg-[#e6e9ee] rounded-full shadow-sm focus:shadow-md transition-shadow duration-300 ease-in-out outline-none"
          placeholder="Search for blogs"
        />
        <IoSearchOutline className="absolute left-4 text-[#716b66]" />
      </motion.div>
      <Blogs />
    </motion.div>
  );
};

export default BlogsComponent;

