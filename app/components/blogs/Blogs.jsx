import React from "react";
import Image from "next/image";
import Link from "next/link";
import Blog1 from "@/public/images/Blog1.png";

const blogData = [
  {
    title: "Central Sterile Supply Department (CSSD)",
    description: "All functions including supply chain, project scheduling, manufacturing and spares etc.",
    slug: "central-sterile-supply-department-cssd",
    image: Blog1,
    alt: "Central Sterile Supply Department (CSSD)"
  },
{
    title: "Infection Control and Prevention",
    description: "Strategies and practices to prevent the spread of infections in healthcare settings.",
    slug: "infection-control-and-prevention",
    image: Blog1,
    alt: "Infection Control and Prevention"
},
{
    title: "Patient Safety and Quality Improvement",
    description: "Initiatives and protocols to enhance patient safety and healthcare quality.",
    slug: "patient-safety-and-quality-improvement",
    image: Blog1,
    alt: "Patient Safety and Quality Improvement"
},
{
    title: "Healthcare Facility Management",
    description: "Efficient management of healthcare facilities and resources.",
    slug: "healthcare-facility-management",
    image: Blog1,
    alt: "Healthcare Facility Management"
},
{
    title: "Medical Equipment Maintenance",
    description: "Best practices for maintaining and servicing medical equipment.",
    slug: "medical-equipment-maintenance",
    image: Blog1,
    alt: "Medical Equipment Maintenance"
},
{
    title: "Healthcare Technology Innovations",
    description: "Latest technological advancements in the healthcare industry.",
    slug: "healthcare-technology-innovations",
    image: Blog1,
    alt: "Healthcare Technology Innovations"
},
  {
    title: "Central Sterile Supply Department (CSSD)",
    description: "All functions including supply chain, project scheduling, manufacturing and spares etc.",
    slug: "central-sterile-supply-department-cssd",
    image: Blog1,
    alt: "Central Sterile Supply Department (CSSD)"
  },
{
    title: "Infection Control and Prevention",
    description: "Strategies and practices to prevent the spread of infections in healthcare settings.",
    slug: "infection-control-and-prevention",
    image: Blog1,
    alt: "Infection Control and Prevention"
},
{
    title: "Patient Safety and Quality Improvement",
    description: "Initiatives and protocols to enhance patient safety and healthcare quality.",
    slug: "patient-safety-and-quality-improvement",
    image: Blog1,
    alt: "Patient Safety and Quality Improvement"
},
{
    title: "Healthcare Facility Management",
    description: "Efficient management of healthcare facilities and resources.",
    slug: "healthcare-facility-management",
    image: Blog1,
    alt: "Healthcare Facility Management"
},
{
    title: "Medical Equipment Maintenance",
    description: "Best practices for maintaining and servicing medical equipment.",
    slug: "medical-equipment-maintenance",
    image: Blog1,
    alt: "Medical Equipment Maintenance"
},
{
    title: "Healthcare Technology Innovations",
    description: "Latest technological advancements in the healthcare industry.",
    slug: "healthcare-technology-innovations",
    image: Blog1,
    alt: "Healthcare Technology Innovations"
}
];

const Blogs = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center">
      {blogData.map((blog, index) => (
        <div key={index} className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
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
        </div>
      ))}
    </div>
  );
};

export default Blogs;