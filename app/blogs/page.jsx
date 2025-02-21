import React from "react";
import Header from "../components/blogs/Header";
import Hero from "../components/blogs/Hero";
import BlogsComponent from "../components/blogs/BlogsComponent";
import Link from "next/link";
import { FaArrowDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { getBlogs } from "@/app/services/api";

export async function generateStaticParams() {
  try {
    const data = await getBlogs();
    return data.data.map((blog) => ({
      blogSlug: blog.Slug,
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <BlogsComponent />
    </>
  );
};

export default page;
