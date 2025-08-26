"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Blogs = ({ blogs, loading }) => {
  if (loading) {
    return (
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 place-items-center">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="w-full bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Skeleton height={224} />
            <div className="p-4">
              <Skeleton height={32} width="80%" />
              <Skeleton height={24} width="60%" className="mt-2" />
              <Skeleton height={24} width="30%" className="mt-2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 place-items-center"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {blogs.map((blog, index) => (
        <motion.div
          key={index}
          className="group bg-white border border-black/5 shadow-sm hover:shadow-xl rounded-2xl overflow-hidden w-full h-full transition-all duration-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -2 }}
        >
          <Link href={`/blogs/${blog.Slug}`} className="block focus:outline-none focus:ring-2 focus:ring-secondary-primary/40">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${blog.FeatureImage.url}`}
                alt={blog.FeatureImage.alternativeText || blog.Title}
                className="object-cover transition-transform w-auto h-auto duration-500 ease-out group-hover:scale-[1.05]"
                quality={100}
                width={450}
                height={450}
                priority={index < 2}
              />
            <div className="p-5">
              <h2 className="text-[#000f25] text-xl sm:text-2xl font-semibold font-primary leading-snug line-clamp-2 group-hover:text-secondary-primary transition-colors duration-200">
                {blog.Title.length > 80 ? blog.Title.substring(0, 80) + '...' : blog.Title}
              </h2>
              {/* Read More with animated underline and arrow shift */}
              <span className="mt-4 inline-flex items-center gap-2 text-[#232323] group-hover:text-secondary-primary text-base font-medium font-primary leading-normal relative">
                <span className="relative">
                  Read More
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                </span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Blogs;
