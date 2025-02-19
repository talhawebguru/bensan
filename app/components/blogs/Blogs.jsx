"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "react-loading-skeleton/dist/skeleton.css";
import { getBlogs } from "@/app/services/api";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden"
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
          className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Image
            className="w-full h-56 object-cover"
            src={`${process.env.NEXT_PUBLIC_API_URL}${blog.FeatureImage.url}`}
            alt={blog.FeatureImage.alternativeText}
            width={300}
            height={200}
          />
          <div className="p-4">
            <h2 className="text-[#000f25] text-2xl font-semibold font-primary leading-7">
              {blog.Title}
            </h2>
            {/* <p className="mt-2 text-[#716b66] text-base font-normal font-primary leading-normal">
              {blog.description}
            </p> */}
            <Link
              href={`/blogs/${blog.Slug}`}
              className="mt-3 inline-flex items-center text-[#232323] text-base font-medium font-primary leading-normal hover:underline"
            >
              Read More →
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Blogs;
