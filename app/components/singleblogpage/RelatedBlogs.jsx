import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const RelatedBlogs = ({ relatedBlogs }) => {
  // If no related blogs or empty array, don't render the section
  if (!relatedBlogs || relatedBlogs.length === 0) {
    return null;
  }

  return (
    <div className="my-20">
      <h2 className="text-[#222823] text-4xl font-semibold font-primary capitalize">
        Related Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {relatedBlogs.map((blog, index) => (
          <motion.div
            key={index}
            className="w-full bg-white shadow-lg rounded-lg overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {blog.FeatureImage && (
              <Image
                className="w-full h-56 object-contain"
                src={`${process.env.NEXT_PUBLIC_API_URL}${blog.FeatureImage.url}`}
                alt={blog.FeatureImage.alternativeText || blog.Title}
                width={300}
                height={200}
              />
            )}
            <div className="p-4">
              <h2 className="text-[#000f25] text-xl font-semibold font-primary leading-7">
                {blog.Title?blog.Title.substring(0,61) + '...' : ''}
              </h2>
              <p className="mt-2 text-[#716b66] text-base font-normal font-primary leading-normal">
                {blog.content2 ? blog.content2.substring(0, 100) + '...' : ''}
              </p>
              <Link
                href={`/blogs/${blog.Slug}`}
                className="mt-3 inline-flex items-center text-[#232323] text-base font-medium font-primary leading-normal hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;