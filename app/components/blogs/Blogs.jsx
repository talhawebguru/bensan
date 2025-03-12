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
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="w-full bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Skeleton height={224} />
            <div className="p-4">
              <Skeleton height={32} width="80%" />
              <Skeleton height={24} width="60%" className="mt-2" />
              <Skeleton height={24} width="40%" className="mt-2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center"
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
          className="bg-white shadow-lg rounded-lg overflow-hidden w-full h-full"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link href={`/blogs/${blog.Slug}`}>
            <Image
              className="w-full h-56 object-contain"
              src={`${process.env.NEXT_PUBLIC_API_URL}${blog.FeatureImage.url}`}
              alt={blog.FeatureImage.alternativeText}
              width={300}
              height={200}
            />
            <div className="p-4">
              <h2 className="text-[#000f25] text-2xl font-semibold font-primary leading-7 h-[88px] line-clamp-3 text-ellipsis overflow-hidden">
                {blog.Title}
              </h2>
              <p className="mt-3 inline-flex items-center text-[#232323] text-base font-medium font-primary leading-normal hover:underline">
                Read More →
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Blogs;
