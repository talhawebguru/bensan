import React from "react";
import Header from "../components/blogs/Header";
import Hero from "../components/blogs/Hero";
import BlogsComponent from "../components/blogs/BlogsComponent";
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

export const metadata = {
  title: "Latest Insights & Innovations in Infection Control | Bensan Blog",
  description: "Explore expert insights, industry trends, and cutting-edge solutions in infection control. Stay ahead with Bensan’s latest updates for a safer, healthier future.",
  alternates: {
    canonical: 'https://bensano.com/blogs',
  },
  robots: "index, follow",
};

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
