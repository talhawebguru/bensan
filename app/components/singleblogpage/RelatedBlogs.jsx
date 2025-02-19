import React from "react";
import * as motion from "framer-motion/client";
import Blog1 from "@/public/images/Blog1.png";
import Image from "next/image";
import Link from "next/link";

const blogData = [
  {
    title: "Central Sterile Supply Department (CSSD)",
    description:
      "All functions including supply chain, project scheduling, manufacturing and spares etc.",
    slug: "central-sterile-supply-department-cssd",
    image: Blog1,
    alt: "Central Sterile Supply Department (CSSD)",
  },
  {
    title: "Infection Control and Prevention",
    description:
      "Strategies and practices to prevent the spread of infections in healthcare settings.",
    slug: "infection-control-and-prevention",
    image: Blog1,
    alt: "Infection Control and Prevention",
  },
  {
    title: "Patient Safety and Quality Improvement",
    description:
      "Initiatives and protocols to enhance patient safety and healthcare quality.",
    slug: "patient-safety-and-quality-improvement",
    image: Blog1,
    alt: "Patient Safety and Quality Improvement",
  },
];

const RelatedBlogs = () => {
  return (
    <>
      <div className="my-20">
        <h2 className="text-[#222823] text-4xl font-semibold font-primary capitalize">
          Related Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {blogData.map((blog, index) => (
            <motion.div
              key={index}
              className="w-full bg-white shadow-lg rounded-lg overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                className="w-full h-56 object-cover"
                src={blog.image}
                alt={blog.alt}
                width={300}
                height={200}
              />
              <div className="p-4">
                <h2 className="text-[#000f25] text-2xl font-semibold font-primary leading-7">
                  {blog.title}
                </h2>
                <p className="mt-2 text-[#716b66] text-base font-normal font-primary leading-normal">
                  {blog.description}
                </p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="mt-3 inline-flex items-center text-[#232323] text-base font-medium font-primary leading-normal hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedBlogs;
