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
            className="group bg-white border border-black/5 shadow-sm hover:shadow-xl rounded-2xl overflow-hidden w-full h-full transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -2 }}
          >
            <Link
              href={`/blogs/${blog.Slug}`}
              className="block focus:outline-none focus:ring-2 focus:ring-secondary-primary/40"
            >
              {blog.FeatureImage && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${blog.FeatureImage.url}`}
                  alt={blog.FeatureImage.alternativeText || blog.Title}
                  className="object-cover transition-transform w-auto h-auto duration-500 ease-out group-hover:scale-[1.05]"
                  quality={100}
                  width={450}
                  height={450}
                />
              )}
              <div className="p-5">
                <h2 className="text-[#000f25] text-xl sm:text-2xl font-semibold font-primary leading-snug line-clamp-2 group-hover:text-secondary-primary transition-colors duration-200">
                  {blog.Title || ""}
                </h2>
                {blog.content2 && (
                  <p className="mt-2 text-[#716b66] text-base font-normal font-primary leading-normal line-clamp-2">
                    {blog.content2}
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-2 text-[#232323] group-hover:text-secondary-primary text-base font-medium font-primary leading-normal relative">
                  <span className="relative">
                    Read More
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
